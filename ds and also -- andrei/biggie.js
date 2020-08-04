function pt(items){
	console.log(items[0]);

	var middleIndex=Math.floor(items.length/2);
	var index = 0;

	while(index < middleIndex){
		console.log(items[index]);
		index++;
	}
	for(var i=0; i< 100; i++){
		console.log('hi');
	}
} //O(2n+1+100) = O(n)

function compressBoxesTwice(boxes,boxes2){
	boxes.forEach(function(boxes){
		console.log(boxes);
	});

	boxes2.forEach(function(boxes){
		console.log(boxes);
	});

} //O(a+b)