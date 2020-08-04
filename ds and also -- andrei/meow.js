function funChallenge(input){
	let a= 10; //O(1)
	a = 50+3; //O(1)
	for(let i=0; i<input.length;i++){ //O(n)
		anotherFunction(); //O(n)
		let stranger=true; //O(n)
		a++; //O(n)
	}
	return a; //O(1)
}

//O(3+4n)
funChallenge() 

//function declaration
function newFunction(){

}

//function expression
function newFunction1 = function (){

}; //anonymous fn
function newFunction1 = function name(){

};

//expression
1+3;
var a=2;
return true;

//calling or invoking a function
alert();
newFunction1(param1, param2);

//function vs method
function thisIsAFunction(){

}
var obj ={
	thisIsAMethod: function(){

	}
}

thisIsAFunction()
obj.thisIsAMethod()