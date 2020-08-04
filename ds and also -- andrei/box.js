//Log all pairs of array
const boxes=[1,2,3,4,5];
function boxLog(array){
	for (var i=0; i<array.length; i++){
		for(var j=0; j<array.length; j++){
			console.log(array[i],array[j]);
		}
	}

}
boxLog(boxes) //O(n*n) = O(n^2)

//ES5

function logAllPairsOfBoxes(boxes){
	boxes.forEach(function(firstBox){
		boxes.forEach(function(secondBox){
			console.log(firstBox,secondBox)
	});

}