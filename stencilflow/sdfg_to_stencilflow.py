#!/usr/bin/env python3
import ast
import astunparse
import json
import re
import warnings

import dace
from stencilflow.stencil import stencil
from stencilflow.stencil.nestk import NestK
from dace.transformation.pattern_matching import Transformation
from dace.transformation.dataflow import MapFission
from dace.transformation.interstate import LoopUnroll

PARAMETERS = ["i", "j", "k"]


def _specialize_symbols(iterable, symbols):
    specialized = ", ".join(map(str, iterable))
    for k, v in symbols.items():
        specialized = re.sub(r"\b{}\b".format(k), str(v), specialized)
    return type(iterable)(int(dace.sympy.sympify(v))
                          for v in specialized.split(", "))


def canonicalize_sdfg(sdfg, symbols={}):

    # Specialize symbols
    sdfg.specialize(symbols)
    undefined_symbols = sdfg.undefined_symbols(False)
    if len(undefined_symbols) != 0:
        raise ValueError("Missing symbols: {}".format(
            ", ".join(undefined_symbols)))
    for node, _ in sdfg.all_nodes_recursive():
        if isinstance(node, stencil.Stencil):
            node.shape = _specialize_symbols(node.shape, symbols)
        if isinstance(node, dace.graph.nodes.MapEntry):
            ranges = []
            for r in node.map.range:
                ranges.append(_specialize_symbols(r, symbols))
            node.map.range = ranges

    # Unroll sequential K-loops
    sdfg.apply_transformations_repeated([LoopUnroll], validate=False)

    # Fuse and nest parallel K-loops
    strict = [
        k for k, v in Transformation.extensions().items()
        if v.get('strict', False)
    ]
    extra = [NestK, MapFission]

    return sdfg.apply_transformations_repeated(strict + extra, validate=False)


class _OutputTransformer(ast.NodeTransformer):
    def __init__(self):
        self._offset = (0, 0, 0)
        self._stencil_name = None

    @property
    def stencil_name(self):
        return self._stencil_name

    @property
    def offset(self):
        return self._offset

    def visit_Assign(self, node: ast.Assign):
        if len(node.targets) != 1:
            raise ValueError  # Sanity check
        for i, subscript_node in enumerate(node.targets):
            try:
                indices = ast.literal_eval(subscript_node.slice.value)
                self._stencil_name = subscript_node.value.id
            except AttributeError:
                # This is an unsubscripted Name node, just grab the name
                self._stencil_name = subscript_node.id
                break
            if any(indices):
                self._offset = indices
            # Remove subscript
            node.targets[i] = subscript_node.value
        self.generic_visit(node)
        return node


class _RenameTransformer(ast.NodeTransformer):
    def __init__(self, rename_map, offset):
        self._rename_map = rename_map
        self._offset = offset
        self._operation_count = 0

    @property
    def operation_count(self):
        return self._operation_count

    def visit_Index(self, node: ast.Subscript):
        # Convert [0, 1, -1] to [i, j + 1, k - 1]
        offsets = tuple(x.n - self._offset[i]
                        for i, x in enumerate(node.value.elts))
        t = "(" + ", ".join(
            PARAMETERS[i] +
            (" + " + str(o) if o > 0 else (" - " + str(o) if o < 0 else ""))
            for i, o in enumerate(offsets)) + ")"
        node.value = ast.parse(t).body[0].value
        self.generic_visit(node)
        return node

    def visit_BinOp(self, node: ast.BinOp):
        if isinstance(node.left, ast.Subscript) or isinstance(
                node.left, ast.BinOp) or isinstance(
                    node.right, ast.Subscript) or isinstance(
                        node.right, ast.BinOp):
            self._operation_count += 1
        self.generic_visit(node)
        return node

    def visit_Name(self, node: ast.Name):
        if node.id in self._rename_map:
            node.id = self._rename_map[node.id]
        self.generic_visit(node)
        return node


def sdfg_to_stencilflow(sdfg, output_path, data_directory=None):

    if not isinstance(sdfg, dace.SDFG):
        sdfg = dace.SDFG.from_file(sdfg)

    undefined_symbols = sdfg.undefined_symbols(False)
    if len(undefined_symbols) != 0:
        raise ValueError("Undefined symbols in SDFG: {}".format(
            ", ".join(undefined_symbols)))

    reads = {}
    writes = set()

    result = {"inputs": {}, "outputs": [], "dimensions": None, "program": {}}

    versions = {}  # {field: count}

    shape = []

    # Has to be a list so we can pass by reference
    operation_count = [0]

    def _visit(sdfg, reads, writes, result, versions, shape, operation_count):

        for state in dace.graph.nxutil.dfs_topological_sort(
                sdfg, sdfg.source_nodes()):

            for node in dace.graph.nxutil.dfs_topological_sort(
                    state, state.source_nodes()):

                if isinstance(node, stencil.Stencil):

                    stencil_json = {}

                    in_edges = {e.dst_conn: e for e in state.in_edges(node)}
                    out_edges = {e.src_conn: e for e in state.out_edges(node)}

                    current_sdfg = sdfg

                    rename_map = {}

                    for connector, accesses in node.accesses.items():
                        read_node = dace.sdfg.find_input_arraynode(
                            state, in_edges[connector])
                        # Use array node instead of connector name
                        field = read_node.data
                        dtype = current_sdfg.data(
                            read_node.data).dtype.type.__name__
                        # Do versioning
                        if field not in versions:
                            versions[field] = 0
                        if versions[field] == 0:
                            name = field
                        else:
                            name = "{}_{}".format(field, versions[field])
                            print("Versioned {} to {}.".format(field, name))
                        rename_map[connector] = name
                        if name in reads:
                            if reads[name] != dtype:
                                raise ValueError(
                                    "Type mismatch: {} vs. {}".format(
                                        reads[name], dtype))
                        else:
                            reads[name] = dtype

                    if len(node.output_fields) != 1:
                        raise ValueError(
                            "Only 1 output per stencil is supported, "
                            "but {} has {} outputs.".format(
                                node.label, len(node.output_fields)))

                    for connector in node.output_fields:
                        write_node = dace.sdfg.find_output_arraynode(
                            state, out_edges[connector])
                        # Rename to array node
                        field = write_node.data
                        # Add new version
                        if field not in versions:
                            versions[field] = 0
                            rename = field
                        else:
                            versions[field] = versions[field] + 1
                            rename = "{}_{}".format(field, versions[field])
                            print("Versioned {} to {}.".format(field, rename))
                        stencil_json["data_type"] = current_sdfg.data(
                            write_node.data).dtype.type.__name__
                        rename_map[connector] = rename
                        output = rename
                        break  # Grab first and only element

                    if output in writes:
                        raise KeyError(
                            "Multiple writes to field: {}".format(field))
                    writes.add(output)

                    # Now we need to go rename versioned variables in the
                    # stencil code
                    output_transformer = _OutputTransformer()
                    old_ast = ast.parse(node.code)
                    new_ast = output_transformer.visit(old_ast)
                    output_offset = output_transformer.offset
                    rename_transformer = _RenameTransformer(
                        rename_map, output_offset)
                    new_ast = rename_transformer.visit(new_ast)
                    operation_count[0] += rename_transformer.operation_count
                    code = astunparse.unparse(new_ast)
                    stencil_name = output
                    stencil_json["computation_string"] = code

                    # Also rename boundary conditions
                    # TODO: remove workaround due to wrongly named BCs
                    stencil_json["boundary_conditions"] = {}
                    for k, v in node.boundary_conditions.items():
                        if k not in rename_map:
                            k += "_in"
                        k = rename_map[k]
                        stencil_json["boundary_conditions"][k] = v

                    result["program"][stencil_name] = stencil_json

                    # Extract stencil shape from stencil
                    s = list(node.shape)
                    if len(shape) == 0:
                        shape += s
                    else:
                        if s != shape:
                            raise ValueError(
                                "Stencil shape mismatch: {} vs. {}".format(
                                    shape, s))

                elif isinstance(node, dace.graph.nodes.Tasklet):
                    print(node.__dict__)
                    import pdb
                    pdb.set_trace()
                    warnings.warn("Ignored tasklet {}".format(node.label))

                elif isinstance(node, dace.graph.nodes.AccessNode):
                    pass

                elif isinstance(node, dace.graph.nodes.NestedSDFG):
                    _visit(node.sdfg, reads, writes, result, versions, shape,
                           operation_count)

                elif isinstance(node, dace.sdfg.SDFGState):
                    pass

                else:
                    raise TypeError("Unsupported node type in {}: {}".format(
                        state.label,
                        type(node).__name__))

                # End node loop

    _visit(sdfg, reads, writes, result, versions, shape, operation_count)

    print("Found {} arithmetic operations.".format(operation_count[0]))

    unroll_factor = 1
    for count in versions.values():
        if count > unroll_factor:
            unroll_factor = count

    shape = tuple(map(int, shape))
    result["dimensions"] = shape

    inputs = reads.keys() - writes
    outputs = writes - reads.keys()

    result["outputs"] = list(sorted(outputs))
    for field in inputs:
        dtype = reads[field]
        path = "{}_{}_{}.dat".format(field,
                                     "x".join(map(str, result["dimensions"])),
                                     dtype)
        if data_directory is not None:
            path = os.path.join(data_directory, path)
        result["inputs"][field] = {"data": path, "data_type": dtype}

    with open(output_path, "w") as out_file:
        out_file.write(json.dumps(result, indent=True))
