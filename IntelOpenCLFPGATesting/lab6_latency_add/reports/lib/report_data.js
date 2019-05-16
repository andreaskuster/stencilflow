var areaJSON='{"columns":["", "ALUTs", "FFs", "RAMs", "DSPs", "MLABs", "Details"], "debug_enabled":"true", "type":"module", "total_percent":[69.4796, 35.8639, 35.7111, 31.971, 29.051], "total":[496332, 989668, 2863, 1298, 31], "name":"Kernel System", "max_resources":[1385660, 2771320, 8955, 4468, 69283], "children":[{"name":"Static Partition", "type":"partition", "children":[{"name":"Board interface", "type":"resource", "data":[480580, 961160, 2766, 1292, 0], "details":[{"type":"text", "text":"Platform interface logic."}]}]}, {"name":"Global interconnect", "type":"resource", "data":[7490, 15614, 52, 0, 0], "details":[{"type":"text", "text":"Global interconnect for 1 global load and 1 global store."}, {"type":"brief", "text":"For 1 global load and 1 global store."}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Global Memory Interconnect", "link":"https://www.altera.com/documentation/mwh1391807516407.html#hnj1476724450050"}]}]}, {"name":"System description ROM", "type":"resource", "data":[2, 71, 2, 0, 0], "details":[{"type":"text", "text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes.  The system description ROM ensures that the binary image on the FPGA is compatible with the host program."}, {"type":"brief", "text":"Contains information for the host."}]}, {"name":"Pipe and channel resources", "type":"group", "children":[{"name":"channels.cl:5 (DATA_IN)", "type":"resource", "data":[11, 70, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":5}]], "details":[{"type":"text", "text":"Channel is implemented 32 bits wide by 1 deep."}, {"type":"brief", "text":"32b wide by 1 deep."}, {"type":"text", "text":"Requested depth was 0."}, {"type":"text", "text":"Channel depth was changed for the following reason:", "details":[{"type":"text", "text":"instruction scheduling requirements"}]}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Channels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#qah1476410829821"}]}]}, {"name":"channels.cl:6 (DATA_OUT)", "type":"resource", "data":[11, 70, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":6}]], "details":[{"type":"text", "text":"Channel is implemented 32 bits wide by 1 deep."}, {"type":"brief", "text":"32b wide by 1 deep."}, {"type":"text", "text":"Requested depth was 0."}, {"type":"text", "text":"Channel depth was changed for the following reason:", "details":[{"type":"text", "text":"instruction scheduling requirements"}]}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Channels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#qah1476410829821"}]}]}]}, {"name":"host_reader", "compute_units":1, "type":"function", "total_percent":[0.290809, 0.164831, 0.138201, 0.178671, 0], "total_kernel_resources":[2164, 3830, 16, 0, 6], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"brief", "text":"1 compute unit."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"Private Variable: \\n - \'i\' (channels.cl:10)", "type":"resource", "data":[16, 86, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":10}]], "details":[{"type":"text", "text":"Type: Register"}, {"type":"text", "text":"1 register of width 11"}, {"type":"text", "text":"1 register of width 32"}, {"type":"brief", "text":"Register,\\n1 reg, 11 width,\\n1 reg, 32 width"}]}, {"name":"host_reader.B2", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[29, 144, 1, 0, 0], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[29, 144, 1, 0, 0]}]}, {"name":"Feedback", "type":"resource", "data":[38, 9, 0, 0, 0], "details":[{"type":"brief", "text":"Loop-carried dependencies"}, {"type":"text", "text":"Resources for loop-carried dependencies. To reduce this area:", "details":[{"type":"text", "text":"reduce number and size of loop-carried variables"}]}], "children":[{"name":"channels.cl:10", "type":"resource", "data":[38, 9, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":10}]]}]}, {"name":"Cluster logic", "type":"resource", "data":[82, 105, 2, 0, 0], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"channels.cl:10", "type":"resource", "data":[48, 0, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":10}]], "children":[{"name":"1-bit And", "type":"resource", "count":1, "data":[1, 0, 0, 0, 0]}, {"name":"11-bit Integer Add", "type":"resource", "count":1, "data":[11, 0, 0, 0, 0]}, {"name":"11-bit Integer Compare", "type":"resource", "count":1, "data":[4, 0, 0, 0, 0]}, {"name":"32-bit Integer Add", "type":"resource", "count":1, "data":[32, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"channels.cl:11", "type":"resource", "data":[488, 2019, 13, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":11}]], "children":[{"name":"Channel Write", "type":"resource", "count":1, "data":[3, 2, 0, 0, 0]}, {"name":"Load", "type":"resource", "count":1, "data":[485, 2017, 13, 0, 0], "details":[{"type":"text", "text":"Load uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}]}]}]}, {"name":"host_writer", "compute_units":1, "type":"function", "total_percent":[0.293505, 0.161151, 0.14347, 0.212172, 0], "total_kernel_resources":[2093, 3976, 19, 0, 7], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"brief", "text":"1 compute unit."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"Private Variable: \\n - \'i\' (channels.cl:27)", "type":"resource", "data":[16, 86, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":27}]], "details":[{"type":"text", "text":"Type: Register"}, {"type":"text", "text":"1 register of width 11"}, {"type":"text", "text":"1 register of width 32"}, {"type":"brief", "text":"Register,\\n1 reg, 11 width,\\n1 reg, 32 width"}]}, {"name":"host_writer.B2", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[29, 141, 1, 0, 0], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[29, 141, 1, 0, 0]}]}, {"name":"Feedback", "type":"resource", "data":[38, 9, 0, 0, 0], "details":[{"type":"brief", "text":"Loop-carried dependencies"}, {"type":"text", "text":"Resources for loop-carried dependencies. To reduce this area:", "details":[{"type":"text", "text":"reduce number and size of loop-carried variables"}]}], "children":[{"name":"channels.cl:27", "type":"resource", "data":[38, 9, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":27}]]}]}, {"name":"Cluster logic", "type":"resource", "data":[108, 145, 2, 0, 1], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"channels.cl:27", "type":"resource", "data":[48, 0, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":27}]], "children":[{"name":"1-bit And", "type":"resource", "count":1, "data":[1, 0, 0, 0, 0]}, {"name":"11-bit Integer Add", "type":"resource", "count":1, "data":[11, 0, 0, 0, 0]}, {"name":"11-bit Integer Compare", "type":"resource", "count":1, "data":[4, 0, 0, 0, 0]}, {"name":"32-bit Integer Add", "type":"resource", "count":1, "data":[32, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"channels.cl:28", "type":"resource", "data":[391, 2128, 16, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":28}]], "children":[{"name":"Channel Read", "type":"resource", "count":1, "data":[1, 0, 0, 0, 0]}, {"name":"Store", "type":"resource", "count":1, "data":[390, 2128, 16, 0, 0], "details":[{"type":"text", "text":"Store uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}]}]}]}, {"name":"kernelA", "compute_units":1, "type":"function", "total_percent":[0.457361, 0.31328, 0.175981, 0.0893356, 0.134288], "total_kernel_resources":[3981, 4877, 8, 5.5, 18], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"brief", "text":"1 compute unit."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"Private Variable: \\n - \'i\' (channels.cl:17)", "type":"resource", "data":[8, 22, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":17}]], "details":[{"type":"text", "text":"Type: Register"}, {"type":"text", "text":"1 register of width 11"}, {"type":"brief", "text":"Register,\\n1 reg, 11 width"}]}, {"name":"kernelA.B2", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[51, 149, 1, 0, 0], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[51, 149, 1, 0, 0]}]}, {"name":"Feedback", "type":"resource", "data":[22, 9, 0, 0, 0], "details":[{"type":"brief", "text":"Loop-carried dependencies"}, {"type":"text", "text":"Resources for loop-carried dependencies. To reduce this area:", "details":[{"type":"text", "text":"reduce number and size of loop-carried variables"}]}], "children":[{"name":"channels.cl:17", "type":"resource", "data":[22, 9, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":17}]]}]}, {"name":"Cluster logic", "type":"resource", "data":[95, 117, 1, 0, 1], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"channels.cl:17", "type":"resource", "data":[16, 0, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":17}]], "children":[{"name":"1-bit And", "type":"resource", "count":1, "data":[1, 0, 0, 0, 0]}, {"name":"11-bit Integer Add", "type":"resource", "count":1, "data":[11, 0, 0, 0, 0]}, {"name":"11-bit Integer Compare", "type":"resource", "count":1, "data":[4, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"channels.cl:19", "type":"resource", "data":[1, 0, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":19}]], "children":[{"name":"Channel Read", "type":"resource", "count":1, "data":[1, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"channels.cl:20", "type":"resource", "data":[2322, 3111, 6, 5.5, 11], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":20}]], "children":[{"name":"\'Floating-point sin\' Function Call", "type":"resource", "count":1, "data":[2293, 3110, 6, 5.5, 11]}, {"name":"32-bit Integer Compare", "type":"resource", "count":1, "data":[3, 1, 0, 0, 0]}, {"name":"32-bit Select", "type":"resource", "count":1, "data":[26, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"channels.cl:21", "type":"resource", "data":[3, 2, 0, 0, 0], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":21}]], "children":[{"name":"Channel Write", "type":"resource", "count":1, "data":[3, 2, 0, 0, 0]}], "replace_name":"true"}]}]}]}]}';
var area_srcJSON='{"max_resources":[1385660,2771320,8955,4468,69283],"name":"Kernel System","children":[{"name":"Static Partition","type":"partition","children":[{"name":"Board interface","type":"resource","data":[480580,961160,2766,1292,0],"details":[{"text":"Platform interface logic.","type":"text"}]}]},{"name":"Global interconnect","type":"resource","data":[7490,15614,52,0,0],"details":[{"text":"Global interconnect for 1 global load and 1 global store.","type":"text"},{"text":"For 1 global load and 1 global store.","type":"brief"},{"text":"See %L for more information","type":"text","links":[{"link":"https://www.altera.com/documentation/mwh1391807516407.html#hnj1476724450050","guide":"Best Practices Guide : Global Memory Interconnect"}]}]},{"name":"System description ROM","type":"resource","data":[2,71,2,0,0],"details":[{"text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes.  The system description ROM ensures that the binary image on the FPGA is compatible with the host program.","type":"text"},{"text":"Contains information for the host.","type":"brief"}]},{"name":"Pipe and channel resources","type":"group","children":[{"name":"channels.cl:5 (DATA_IN)","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":5}]],"type":"resource","data":[11,70,0,0,0],"details":[{"text":"Channel is implemented 32 bits wide by 1 deep.","type":"text"},{"text":"32b wide by 1 deep.","type":"brief"},{"text":"Requested depth was 0.","type":"text"},{"text":"Channel depth was changed for the following reason:","type":"text","details":[{"text":"instruction scheduling requirements","type":"text"}]},{"text":"See %L for more information","type":"text","links":[{"link":"https://www.altera.com/documentation/mwh1391807516407.html#qah1476410829821","guide":"Best Practices Guide : Channels"}]}]},{"name":"channels.cl:6 (DATA_OUT)","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":6}]],"type":"resource","data":[11,70,0,0,0],"details":[{"text":"Channel is implemented 32 bits wide by 1 deep.","type":"text"},{"text":"32b wide by 1 deep.","type":"brief"},{"text":"Requested depth was 0.","type":"text"},{"text":"Channel depth was changed for the following reason:","type":"text","details":[{"text":"instruction scheduling requirements","type":"text"}]},{"text":"See %L for more information","type":"text","links":[{"link":"https://www.altera.com/documentation/mwh1391807516407.html#qah1476410829821","guide":"Best Practices Guide : Channels"}]}]}],"data":[22,140,0,0,0]},{"name":"host_reader","total_kernel_resources":[2164,3830,16,0,6],"debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":10}]],"type":"function","total_percent":[0.290809,0.164831,0.138201,0.178671,0],"children":[{"name":"Data control overhead","type":"resource","data":[120,114,2,0,0],"details":[{"text":"Feedback+Cluster logic","type":"brief"}]},{"name":"Function overhead","type":"resource","data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}]},{"name":"Private Variable: \\n - \'i\' (channels.cl:10)","type":"resource","data":[16,86,0,0,0],"details":[{"text":"Type: Register","type":"text"},{"text":"1 register of width 11","type":"text"},{"text":"1 register of width 32","type":"text"},{"text":"Register,\\n1 reg, 11 width,\\n1 reg, 32 width","type":"brief"}]},{"name":"No Source Line","children":[{"count":1,"name":"State","debug":[[{"filename":"","line":0}]],"type":"resource","data":[29,144,1,0,0]}],"type":"resource","data":[29,144,1,0,0]},{"replace_name":"true","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":10}]],"name":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl:10","children":[{"count":1,"name":"1-bit And","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":10}]],"type":"resource","data":[1,0,0,0,0]},{"count":1,"name":"11-bit Integer Add","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":10}]],"type":"resource","data":[11,0,0,0,0]},{"count":1,"name":"11-bit Integer Compare","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":10}]],"type":"resource","data":[4,0,0,0,0]},{"count":1,"name":"32-bit Integer Add","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":10}]],"type":"resource","data":[32,0,0,0,0]}],"data":[48,0,0,0,0],"type":"resource"},{"replace_name":"true","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":11}]],"name":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl:11","children":[{"count":1,"name":"Channel Write","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":11}]],"type":"resource","data":[3,2,0,0,0]},{"count":1,"name":"Load","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":11}]],"type":"resource","data":[485,2017,13,0,0]}],"data":[488,2019,13,0,0],"type":"resource"}],"data":[2164,3830,16,0,6],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"1 compute unit.","type":"brief"}],"compute_units":1},{"name":"host_writer","total_kernel_resources":[2093,3976,19,0,7],"debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":27}]],"type":"function","total_percent":[0.293505,0.161151,0.14347,0.212172,0],"children":[{"name":"Data control overhead","type":"resource","data":[146,154,2,0,1],"details":[{"text":"Feedback+Cluster logic","type":"brief"}]},{"name":"Function overhead","type":"resource","data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}]},{"name":"Private Variable: \\n - \'i\' (channels.cl:27)","type":"resource","data":[16,86,0,0,0],"details":[{"text":"Type: Register","type":"text"},{"text":"1 register of width 11","type":"text"},{"text":"1 register of width 32","type":"text"},{"text":"Register,\\n1 reg, 11 width,\\n1 reg, 32 width","type":"brief"}]},{"name":"No Source Line","children":[{"count":1,"name":"State","debug":[[{"filename":"","line":0}]],"type":"resource","data":[29,141,1,0,0]}],"type":"resource","data":[29,141,1,0,0]},{"replace_name":"true","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":27}]],"name":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl:27","children":[{"count":1,"name":"1-bit And","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":27}]],"type":"resource","data":[1,0,0,0,0]},{"count":1,"name":"11-bit Integer Add","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":27}]],"type":"resource","data":[11,0,0,0,0]},{"count":1,"name":"11-bit Integer Compare","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":27}]],"type":"resource","data":[4,0,0,0,0]},{"count":1,"name":"32-bit Integer Add","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":27}]],"type":"resource","data":[32,0,0,0,0]}],"data":[48,0,0,0,0],"type":"resource"},{"replace_name":"true","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":28}]],"name":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl:28","children":[{"count":1,"name":"Channel Read","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":28}]],"type":"resource","data":[1,0,0,0,0]},{"count":1,"name":"Store","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":28}]],"type":"resource","data":[390,2128,16,0,0]}],"data":[391,2128,16,0,0],"type":"resource"}],"data":[2093,3976,19,0,7],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"1 compute unit.","type":"brief"}],"compute_units":1},{"name":"kernelA","total_kernel_resources":[3981,4877,8,5.5,18],"debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":17}]],"type":"function","total_percent":[0.457361,0.31328,0.175981,0.0893356,0.134288],"children":[{"name":"Data control overhead","type":"resource","data":[117,126,1,0,1],"details":[{"text":"Feedback+Cluster logic","type":"brief"}]},{"name":"Function overhead","type":"resource","data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}]},{"name":"Private Variable: \\n - \'i\' (channels.cl:17)","type":"resource","data":[8,22,0,0,0],"details":[{"text":"Type: Register","type":"text"},{"text":"1 register of width 11","type":"text"},{"text":"Register,\\n1 reg, 11 width","type":"brief"}]},{"name":"No Source Line","children":[{"count":1,"name":"State","debug":[[{"filename":"","line":0}]],"type":"resource","data":[51,149,1,0,0]}],"type":"resource","data":[51,149,1,0,0]},{"replace_name":"true","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":17}]],"name":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl:17","children":[{"count":1,"name":"1-bit And","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":17}]],"type":"resource","data":[1,0,0,0,0]},{"count":1,"name":"11-bit Integer Add","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":17}]],"type":"resource","data":[11,0,0,0,0]},{"count":1,"name":"11-bit Integer Compare","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":17}]],"type":"resource","data":[4,0,0,0,0]}],"data":[16,0,0,0,0],"type":"resource"},{"replace_name":"true","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":19}]],"name":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl:19","children":[{"count":1,"name":"Channel Read","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":19}]],"type":"resource","data":[1,0,0,0,0]}],"data":[1,0,0,0,0],"type":"resource"},{"replace_name":"true","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":20}]],"name":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl:20","children":[{"count":1,"name":"\'Floating-point sin\' Function Call","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":20}]],"type":"resource","data":[2293,3110,6,5.5,11]},{"count":1,"name":"32-bit Integer Compare","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":20}]],"type":"resource","data":[3,1,0,0,0]},{"count":1,"name":"32-bit Select","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":20}]],"type":"resource","data":[26,0,0,0,0]}],"data":[2322,3111,6,5.5,11],"type":"resource"},{"replace_name":"true","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":21}]],"name":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl:21","children":[{"count":1,"name":"Channel Write","debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl","line":21}]],"type":"resource","data":[3,2,0,0,0]}],"data":[3,2,0,0,0],"type":"resource"}],"data":[3981,4877,8,5.5,18],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"1 compute unit.","type":"brief"}],"compute_units":1}],"data":[15752,28508,97,5.5,31],"total_percent":[69.4796,35.8639,35.7111,31.971,29.051],"total":[496332,989668,2863,1298,31],"debug_enabled":"true","columns":["","ALUTs","FFs","RAMs","DSPs","MLABs","Details"],"type":"module"}';
var mavJSON='{"nodes":[{"type":"kernel", "id":2, "name":"host_reader", "children":[{"type":"bb", "id":3, "name":"host_reader.B0", "details":[{"type":"table", "Latency":"17"}]}, {"type":"bb", "id":4, "name":"host_reader.B1", "details":[{"type":"table", "Latency":"0"}]}, {"type":"bb", "id":5, "name":"host_reader.B2", "children":[{"type":"inst", "id":6, "name":"Load", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":11}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Loads from":"data_in", "Start Cycle":"41", "Latency":"512", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.altera.com/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":7, "name":"Channel Write", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":11}]], "details":[{"type":"table", "Width":"32 bits", "Depth":"1", "Stall-free":"No", "Start Cycle":"553", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Channels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#qah1476410829821"}]}]}]}, {"type":"inst", "id":9, "name":"loop", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":10}]], "details":[{"type":"table", "Start Cycle":"0", "Latency":"1", "Loops To":"10"}]}, {"type":"inst", "id":10, "name":"loop end", "details":[{"type":"table", "Start Cycle":"617", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"617", "II":"1", "Subloops":"No", "Pipelined":"Yes", "Fmax Bottlenecks":"No", "Loop Info":""}]}]}, {"type":"kernel", "id":12, "name":"kernelA", "children":[{"type":"bb", "id":13, "name":"kernelA.B0", "details":[{"type":"table", "Latency":"17"}]}, {"type":"bb", "id":14, "name":"kernelA.B1", "details":[{"type":"table", "Latency":"0"}]}, {"type":"bb", "id":15, "name":"kernelA.B2", "children":[{"type":"inst", "id":16, "name":"Channel Read", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":19}]], "details":[{"type":"table", "Width":"32 bits", "Depth":"1", "Stall-free":"No", "Start Cycle":"37", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Channels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#qah1476410829821"}]}]}]}, {"type":"inst", "id":17, "name":"Channel Write", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":21}]], "details":[{"type":"table", "Width":"32 bits", "Depth":"1", "Stall-free":"No", "Start Cycle":"185", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Channels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#qah1476410829821"}]}]}]}, {"type":"inst", "id":19, "name":"loop", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":17}]], "details":[{"type":"table", "Start Cycle":"0", "Latency":"1", "Loops To":"20"}]}, {"type":"inst", "id":20, "name":"loop end", "details":[{"type":"table", "Start Cycle":"249", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"249", "II":"1", "Subloops":"No", "Pipelined":"Yes", "Fmax Bottlenecks":"No", "Loop Info":""}]}]}, {"type":"kernel", "id":21, "name":"host_writer", "children":[{"type":"bb", "id":22, "name":"host_writer.B0", "details":[{"type":"table", "Latency":"17"}]}, {"type":"bb", "id":23, "name":"host_writer.B1", "details":[{"type":"table", "Latency":"0"}]}, {"type":"bb", "id":24, "name":"host_writer.B2", "children":[{"type":"inst", "id":25, "name":"Channel Read", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":28}]], "details":[{"type":"table", "Width":"32 bits", "Depth":"1", "Stall-free":"No", "Start Cycle":"37", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Channels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#qah1476410829821"}]}]}]}, {"type":"inst", "id":26, "name":"Store", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":28}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Stores to":"data_out", "Start Cycle":"101", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.altera.com/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":27, "name":"loop", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":27}]], "details":[{"type":"table", "Start Cycle":"0", "Latency":"1", "Loops To":"28"}]}, {"type":"inst", "id":28, "name":"loop end", "details":[{"type":"table", "Start Cycle":"165", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"165", "II":"1", "Subloops":"No", "Pipelined":"Yes", "Fmax Bottlenecks":"No", "Loop Info":""}]}]}, {"type":"memtype", "id":1, "name":"Global Memory", "children":[{"type":"memsys", "id":11, "name":"DDR", "details":[{"type":"table", "Number of banks":"4"}]}]}, {"type":"channel", "id":8, "name":"DATA_IN", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":8}]], "details":[{"type":"table", "Width":"32 bits", "Depth":"1"}]}, {"type":"channel", "id":18, "name":"DATA_OUT", "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":15}]], "details":[{"type":"table", "Width":"32 bits", "Depth":"1"}]}], "links":[{"from":7, "to":8}, {"from":10, "to":4}, {"from":3, "to":9}, {"from":6, "to":10}, {"from":7, "to":10}, {"from":9, "to":6}, {"from":6, "to":7}, {"from":11, "to":6}, {"from":8, "to":16}, {"from":17, "to":18}, {"from":20, "to":14}, {"from":13, "to":19}, {"from":16, "to":20}, {"from":17, "to":20}, {"from":19, "to":16}, {"from":16, "to":17}, {"from":18, "to":25}, {"from":28, "to":23}, {"from":22, "to":27}, {"from":25, "to":28}, {"from":26, "to":28}, {"from":27, "to":25}, {"from":25, "to":26}, {"from":26, "to":11}]}';
var lmvJSON='{"nodes":[], "links":[]}';
var loopsJSON='{"columns":["", "Pipelined", "II", "Bottleneck", "Details"], "children":[{"name":"Kernel: host_reader", "data":["", "", ""], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":8}]], "details":[{"type":"brief", "text":"Single work-item execution"}, {"type":"text", "text":"Single work-item execution"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#ipp1476408832230"}]}], "children":[{"name":"host_reader.B2", "data":["Yes", "~1", "n/a"], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":10}]], "details":[{"type":"text", "text":"Loop orchestration compiler optimization is enabled."}, {"type":"brief", "text":"II is an approximation."}, {"type":"text", "text":"II is an approximation due to the following stallable instructions:", "details":[{"type":"text", "text":"Load Operation (%L)", "links":[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":"11"}]}, {"type":"text", "text":"Channel Write Operation (%L)", "links":[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":"11"}]}]}], "children":[]}]}, {"name":"Kernel: kernelA", "data":["", "", ""], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":15}]], "details":[{"type":"brief", "text":"Single work-item execution"}, {"type":"text", "text":"Single work-item execution"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#ipp1476408832230"}]}], "children":[{"name":"kernelA.B2", "data":["Yes", "~1", "n/a"], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":17}]], "details":[{"type":"text", "text":"Loop orchestration compiler optimization is enabled."}, {"type":"brief", "text":"II is an approximation."}, {"type":"text", "text":"II is an approximation due to the following stallable instructions:", "details":[{"type":"text", "text":"Channel Read Operation (%L)", "links":[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":"19"}]}, {"type":"text", "text":"Channel Write Operation (%L)", "links":[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":"21"}]}]}], "children":[]}]}, {"name":"Kernel: host_writer", "data":["", "", ""], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":25}]], "details":[{"type":"brief", "text":"Single work-item execution"}, {"type":"text", "text":"Single work-item execution"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.altera.com/documentation/mwh1391807516407.html#ipp1476408832230"}]}], "children":[{"name":"host_writer.B2", "data":["Yes", "~1", "n/a"], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":27}]], "details":[{"type":"text", "text":"Loop orchestration compiler optimization is enabled."}, {"type":"brief", "text":"II is an approximation."}, {"type":"text", "text":"II is an approximation due to the following stallable instructions:", "details":[{"type":"text", "text":"Channel Read Operation (%L)", "links":[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":"28"}]}, {"type":"text", "text":"Store Operation (%L)", "links":[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":"28"}]}]}], "children":[]}]}]}';
var summaryJSON='{"performanceSummary":{"name":"Kernel Summary", "columns":["Kernel Name", "Kernel Type", "Autorun", "Workgroup Size", "# Compute Units", "HyperFlex Control Optimizations"], "children":[{"name":"host_reader", "data":["Single work-item", "No", [1, 1, 1], 1, "On"], "details":[{"type":"text", "text":"Kernel type: Single work-item"}, {"type":"text", "text":"Required workgroup size: (1, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 1"}], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":8}]]}, {"name":"host_writer", "data":["Single work-item", "No", [1, 1, 1], 1, "On"], "details":[{"type":"text", "text":"Kernel type: Single work-item"}, {"type":"text", "text":"Required workgroup size: (1, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 1"}], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":25}]]}, {"name":"kernelA", "data":["Single work-item", "No", [1, 1, 1], 1, "On"], "details":[{"type":"text", "text":"Kernel type: Single work-item"}, {"type":"text", "text":"Required workgroup size: (1, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 1"}], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":15}]]}]}, "estimatedResources":{"name":"Estimated Resource Usage", "columns":["Kernel Name", "ALUTs ", "FFs  ", "RAMs ", "DSPs ", "MLABs"], "children":[{"name":"host_reader", "data":[2164, 3830, 16, 0, 6], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":8}]]}, {"name":"host_writer", "data":[2093, 3976, 19, 0, 7], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":25}]]}, {"name":"kernelA", "data":[3981, 4877, 8, 5.5, 18], "debug":[[{"filename":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "line":15}]]}, {"name":"Kernel Subtotal", "classes":["summary-highlight", "nohover"], "data":[8238, 12683, 43, 5, 31]}, {"name":"Global Interconnect", "classes":["summary-highlight", "nohover"], "data":[7490, 15614, 52, 0, 0]}, {"name":"Board Interface", "classes":["summary-highlight", "nohover"], "data":[480580, 961160, 2766, 1292, 0]}, {"name":"Total", "classes":["summary-highlight", "nohover"], "data":[496332, 989668, 2863, 1297, 31], "data_percent":[35.8192, 35.7111, 31.971, 29.051, 69.4419]}, {"name":"Available", "classes":["summary-highlight", "nohover"], "data":[1385660, 2771320, 8955, 4468, 0]}]}, "compileWarnings":{"name":"Compile Warnings", "children":[]}}';
var infoJSON='{"name":"Info","rows":[{"classes":["info-table"],"name":"Project Name","data":["channels"]},{"name":"Target Family, Device, Board","data":["Stratix 10, 1SG280LU3F50E1VGS1, nalla_pcie:p520_max_sg280l"]},{"name":"AOC Version","data":["18.1.1 Build 263"]},{"name":"Quartus Version","data":["18.1.1 Build 263 Pro"]},{"name":"Command","data":["aoc -v -board=p520_max_sg280l channels.cl -global-ring -duplicate-ring -o channels.aocx"]},{"name":"Reports Generated At","data":["Sat Apr 27 01:19:36 2019"]}]}';
var warningsJSON='{"rows":[]}';
var quartusJSON='{"quartusFitClockSummary":{  "name":"Quartus Fit Clock Summary"  ,"columns":["", "Kernel fmax"]  ,"children":[  {    "name":"Frequency (MHz)","data":[385.0]  }]},"quartusFitResourceUsageSummary":{  "name":"Quartus Fit Resource Utilization Summary"  ,"columns":["", "ALMs", "FFs", "RAMs", "DSPs", "MLABs"]  ,"children":[  {"name":"Full design (all kernels)","data":[5212.1 ,14348 ,49 ,6 ,17  ]  },  {"name":"host_reader","data":[1282.1 ,3373 ,17 ,0 ,4]  },  {"name":"host_writer","data":[1794.7 ,5935 ,22 ,0 ,0]  },  {"name":"kernelA","data":[2135.3 ,5040 ,10 ,6 ,13]  }]}}';
var fileJSON=[{"path":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "name":"channels.cl", "has_active_debug_locs":false, "absName":"/scratch/hpc-prf-cosmo/andreas/lab7/channels.cl", "content":"#pragma OPENCL EXTENSION cl_intel_channels : enable\012\012#define N 1024\012\012channel float DATA_IN;\012channel float DATA_OUT;\012\012kernel void host_reader(__global const float * restrict data_in) {\012\012	for(unsigned i = 0; i < N; i++){\012  		write_channel_intel(DATA_IN, data_in[i]);\012	}\012}\012\012kernel void kernelA() {\012\012	for(unsigned i = 0; i < N; i++){\012\012		float data = read_channel_intel(DATA_IN);\012		float result = sin(data);\012		write_channel_intel(DATA_OUT, result);\012	}\012}\012\012kernel void host_writer(__global float * restrict data_out) {\012\012	for(unsigned i = 0; i < N; i++){\012  		data_out[i] = read_channel_intel(DATA_OUT);\012	}\012}"}];