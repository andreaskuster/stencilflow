#pragma OPENCL EXTENSION cl_intel_channels : enable

#define DEBUG 1
#define DimX 12
#define DimY 12
#define N DimX*DimX
#define SHIFT_REG_SIZE  2*DimX + 1 // for this kernel: internal buffer [0, 2, 1]

channel float DATA_IN;
channel float DATA_OUT;

kernel void host_reader(__global const float * restrict data_in) {

	if(DEBUG){printf("hello from host_reader kernel\n");}

	for(unsigned i = 0; i < N; i++){
  		write_channel_intel(DATA_IN, data_in[i]);
		if(DEBUG){printf("host_reader: read %i-th element.\n", i);}
	}
}

kernel void kernelA() {

	if(DEBUG){printf("hello from kernelA kernel\n");}
	float shift_register_buffer[SHIFT_REG_SIZE];	

	/*
		INITIALIZATION
	*/
	if(DEBUG){printf("kernelA: initialization\n");}
	// zero pad first row
	for(unsigned i = 0; i < DimX; i++){
		shift_register_buffer[SHIFT_REG_SIZE-i-1] = 0;
		if(DEBUG){printf("kernelA: %i, %i\n", SHIFT_REG_SIZE-i-1, shift_register_buffer[SHIFT_REG_SIZE-i-1]);}
	}

	// fill the remaining buffer with data
	for(unsigned i = 0; i < SHIFT_REG_SIZE-DimX; i++){
		shift_register_buffer[SHIFT_REG_SIZE-DimX-i-1] = read_channel_intel(DATA_IN);
		if(DEBUG){printf("kernelA: %i, %i\n", SHIFT_REG_SIZE-DimX-i-1, shift_register_buffer[SHIFT_REG_SIZE-DimX-i-1]);}
	}


	/*	
		COMPUTATION
	*/
	if(DEBUG){printf("kernelA: computation\n");}
	for(unsigned i = 0; i < N; i++){

		// this is the actual kernel computation
		if(DEBUG){printf("kernelA: do computation\n");}
		float result = (float)(1.0/3.0) * (shift_register_buffer[0] + shift_register_buffer[1*DimX] + shift_register_buffer[2*DimX]);

		if(DEBUG){printf("kernelA: write result to channel\n");}
		write_channel_intel(DATA_OUT, result);

		// shift all forward and load new element into free space	
		if(DEBUG){printf("kernelA: shift data\n");}
		#pragma unroll
		for(unsigned j = SHIFT_REG_SIZE-1; j > 0 ; j--){
			shift_register_buffer[j] = shift_register_buffer[j-1];
		}

		if(i < N-(SHIFT_REG_SIZE-DimX)){ // read data
			if(DEBUG){printf("kernelA: read data from channel\n");}
			shift_register_buffer[0] = read_channel_intel(DATA_IN);
		} else { // pad last row
			if(DEBUG){printf("kernelA: read data: 0\n");}
			shift_register_buffer[0] = 0; 
		}

	}
}

kernel void host_writer(__global float * restrict data_out) {

	if(DEBUG){printf("hello from host_writer kernel\n");}
	for(unsigned i = 0; i < N; i++){
  		data_out[i] = read_channel_intel(DATA_OUT);
		if(DEBUG){printf("host_writer: wrote %i-th element.\n", i);}
 	}
}