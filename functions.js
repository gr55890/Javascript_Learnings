function sayHello(){
	console.log("Hello");
}
sayHello();

var sayBye= function(){
	console.log("Bye")
}
sayBye();

function sing(song){ //song -- parameter
	console.log(song)
}
sing("Laaaa Deeee Daaaa") //"Laaaa Deeee Daaaa" -- arguments
sing("Hellloooooooo")
sing("Meowwwww")

function multiply(a,b){
	return a*b
}
multiply(5,10);

/*New Multiply */
function neoMultiply(a,b){
	if(a>10 || b>10){
		return "that\'s too hard"
	}
	else{
		return a*b
	}
	return a*b
}
neoMultiply(3,4);
neoMultiply(3,40);
