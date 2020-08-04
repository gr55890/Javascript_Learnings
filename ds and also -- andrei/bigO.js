
//BigO O(n)
const nemo=['nemo'];
const ne=['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank'];
const n= new Array(1000).fill('Nemo');


function findNemo(array){
	let t0=performance.now();
	for(let i=0;i<array.length;i++){
		if(array[i]=='nemo'){
			console.log('Found NEMO!');
		}
	}
	let t1=performance.now()
	console.log('Call to find NEMO took '+(t1-t0)+' milliseconds');
}

findNemo(nemo);
findNemo(ne);
findNemo(n);

//constant BigO O(1)
const boxes=[0,1,2,3,4,5,6,7];

function logFirstTwoBoxes(boxes){
	console.log(boxes[0])
	console.log(boxes[1])
}

logFirstTwoBoxes(boxes);

//ES5
function compressAllBoxes(boxes){
	boxes.forEach(function(item){
		console.log(item)
	});
}

//ES6
const compressAllBoxes = boxes =>{
	boxes.forEach(box => console.log(box));
}