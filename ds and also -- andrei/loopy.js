const nemo=['nemo'];
const ne=['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank'];
const n= new Array(1000).fill('Nemo');


function findNemo(array){
	
	for(let i=0;i<array.length;i++){
		if(array[i]=='nemo'){
			console.log('Found NEMO!');
		}
	}
}

const findNemo2 = array =>{
	array.forEach(fish=> {
		if(fish === 'nemo'){
			console.log("Found Nemo!");
		}
	});
}

const findNemo3 = array =>{
	for(let fish of array){
		if(fish === 'nemo'){
			console.log("Found Nemo!");
		}
	}
}