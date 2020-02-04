#!/usr/bin/env python3
# encoding: utf-8
import argparse
import collections
import functools
import itertools
import operator
import os
import re

import dace
import dace.codegen.targets.fpga
import numpy as np
from dace.graph.edges import InterstateEdge
from dace.memlet import Memlet
from dace.sdfg import SDFG
from dace.dtypes import ScheduleType, StorageType, Language

import helper
from kernel_chain_graph import Kernel, Input, Output, KernelChainGraph

import dacelibs.stencil

ITERATORS = ["i", "j", "k"]


def make_stream_name(src_name, dst_name):
    return src_name + "_to_" + dst_name


def generate_sdfg(name, chain):
    sdfg = SDFG(name)

    pre_state = sdfg.add_state("initialize")
    state = sdfg.add_state("compute")
    post_state = sdfg.add_state("finalize")

    sdfg.add_edge(pre_state, state, InterstateEdge())
    sdfg.add_edge(state, post_state, InterstateEdge())

    def add_pipe(sdfg, edge):

        stream_name = make_stream_name(edge[0].name, edge[1].name)

        sdfg.add_stream(
            stream_name,
            edge[0].data_type,
            buffer_size=edge[2]["channel"]["delay_buffer"].maxsize,
            storage=StorageType.FPGA_Local,
            transient=True)

    def add_input(node):

        # Host-side array, which will be an input argument
        sdfg.add_array(node.name + "_host", chain.dimensions, node.data_type)

        # Device-side copy
        sdfg.add_array(
            node.name,
            chain.dimensions,
            node.data_type,
            storage=StorageType.FPGA_Global,
            transient=True)
        access_node = state.add_read(node.name)

        iterators = dacelibs.stencil.make_iterators(
            chain.dimensions, parameters=ITERATORS)

        # Copy data to the FPGA
        copy_host = pre_state.add_read(node.name + "_host")
        copy_fpga = pre_state.add_write(node.name)
        pre_state.add_memlet_path(
            copy_host,
            copy_fpga,
            memlet=Memlet.simple(
                copy_fpga,
                ", ".join(iterators.values()),
                num_accesses=functools.reduce(operator.mul, chain.dimensions,
                                              1)))

        entry, exit = state.add_map(
            "read_" + node.name, iterators, schedule=ScheduleType.FPGA_Device)

        # Sort to get deterministic output
        outputs = sorted([e[1].name for e in chain.graph.out_edges(node)])

        out_memlets = ["_" + o for o in outputs]

        tasklet_code = "\n".join(
            ["{} = memory".format(o) for o in out_memlets])

        tasklet = state.add_tasklet("read_" + node.name, {"memory"},
                                    out_memlets, tasklet_code)

        state.add_memlet_path(
            access_node,
            entry,
            tasklet,
            dst_conn="memory",
            memlet=Memlet.simple(
                node.name, ", ".join(iterators.keys()), num_accesses=1))

        # Add memlets to all FIFOs connecting to compute units
        for out_name, out_memlet in zip(outputs, out_memlets):
            stream_name = make_stream_name(node.name, out_name)
            write_node = state.add_write(stream_name)
            state.add_memlet_path(
                tasklet,
                exit,
                write_node,
                src_conn=out_memlet,
                memlet=Memlet.simple(stream_name, "0", num_accesses=1))

    def add_output(node):

        # Host-side array, which will be an output argument
        sdfg.add_array(node.name + "_host", chain.dimensions, node.data_type)

        # Device-side copy
        sdfg.add_array(
            node.name,
            chain.dimensions,
            node.data_type,
            storage=StorageType.FPGA_Global,
            transient=True)
        write_node = state.add_write(node.name)

        iterators = dacelibs.stencil.make_iterators(
            chain.dimensions, parameters=ITERATORS)

        # Copy data to the FPGA
        copy_fpga = post_state.add_read(node.name)
        copy_host = post_state.add_write(node.name + "_host")
        post_state.add_memlet_path(
            copy_fpga,
            copy_host,
            memlet=Memlet.simple(
                copy_host,
                ", ".join(iterators.values()),
                num_accesses=functools.reduce(operator.mul, chain.dimensions,
                                              1)))

        entry, exit = state.add_map(
            "write_" + node.name, iterators, schedule=ScheduleType.FPGA_Device)

        src = chain.graph.in_edges(node)
        if len(src) > 1:
            raise RuntimeError("Only one writer per output supported")
        src = next(iter(src))[0]

        in_memlet = "_" + src.name

        tasklet_code = "memory = " + in_memlet

        tasklet = state.add_tasklet("write_" + node.name, {in_memlet},
                                    {"memory"}, tasklet_code)

        stream_name = make_stream_name(src.name, node.name)
        read_node = state.add_read(stream_name)

        state.add_memlet_path(
            read_node,
            entry,
            tasklet,
            dst_conn=in_memlet,
            memlet=Memlet.simple(stream_name, "0", num_accesses=1))

        state.add_memlet_path(
            tasklet,
            exit,
            write_node,
            src_conn="memory",
            memlet=Memlet.simple(
                node.name, ", ".join(iterators.keys()), num_accesses=1))

    def add_kernel(node):

        # Enrich accesses with the names of the corresponding input connectors
        accesses = collections.OrderedDict(
            (k, (make_stream_name(k, node.name) + "_in", v))
            for k, v in node.graph.accesses.items())

        # Enrich outputs with the names of the corresponding output connectors
        outputs = collections.OrderedDict(
            (f, make_stream_name(node.name, f) + "_out")
            for f in sorted(e[1].name for e in chain.graph.out_edges(node)))

        # We currently don't parse the output code, so we have to make a best
        # effort to know the type of each assignment (auto does not work for
        # Intel FPGA).
        output_ctype = None
        for output in outputs:
            proposed = sdfg.data(output).dtype.ctype
            if output_ctype is None:
                output_ctype = proposed
            else:
                if output_type != proposed:
                    raise ValueError(
                        "Only a single output type is currently supported")

        # Generate the C code. We unfortunately cannot pass the Python
        # directly, because OpenCL doesn't support auto.
        code = "\n".join([
            output_ctype + " " + expr.strip() + ";"
            for expr in node.generate_relative_access_kernel_string(
                relative_to_center=False).split(";")
        ])

        stencil_node = dacelibs.stencil.Stencil(
            node.name, ITERATORS, chain.dimensions, accesses, outputs,
            node.boundary_conditions, code)
        state.add_node(stencil_node)

        # Add read nodes and memlets
        for field_name, (connector, _) in accesses.items():

            stream_name = make_stream_name(field_name, node.name)

            # Outer memory read
            read_node = state.add_read(stream_name)
            state.add_memlet_path(
                read_node,
                stencil_node,
                dst_conn=connector,
                memlet=Memlet.simple(stream_name, "0", num_accesses=-1))

        # Add write nodes and memlets
        for field_name, connector in outputs.items():

            stream_name = make_stream_name(node.name, field_name)

            # Outer write
            write_node = state.add_write(stream_name)
            state.add_memlet_path(
                stencil_node,
                write_node,
                src_conn=connector,
                memlet=Memlet.simple(stream_name, "0", num_accesses=-1))

    # First generate all connections between kernels and memories
    for link in chain.graph.edges(data=True):
        add_pipe(sdfg, link)

    # Now generate all memory access functions so arrays are registered
    for node in chain.graph.nodes():
        if isinstance(node, Input):
            add_input(node)
        elif isinstance(node, Output):
            add_output(node)
        elif isinstance(node, Kernel):
            # Generate these separately after
            pass
        else:
            raise RuntimeError("Unexpected node type: {}".format(
                node.node_type))

    # Finally generate the compute kernels
    for node in chain.graph.nodes():
        if isinstance(node, Kernel):
            add_kernel(node)

    return sdfg


if __name__ == "__main__":

    parser = argparse.ArgumentParser()
    parser.add_argument("stencil_file")
    parser.add_argument("--plot-graph", dest="plot-graph", action="store_true")
    parser.add_argument("--plot-sdfg", dest="plot-sdfg", action="store_true")

    args = parser.parse_args()

    name = os.path.basename(args.stencil_file)
    name = re.match("[^\.]+", name).group(0)

    chain = KernelChainGraph(args.stencil_file)

    if getattr(args, "plot-graph"):
        chain.plot_graph(name + ".pdf")

    sdfg = generate_sdfg(name, chain)

    if getattr(args, "plot-sdfg"):
        chain.plot_graph(name + ".pdf")

    sdfg.compile()
