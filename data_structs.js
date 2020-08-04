
//****************ARRAYS*******************************************
var list=['tiger','cat','bear','bird'];
console.log(list[1]);

var numbers=[1,2,3,4,5];
var booleans=[true,false,true];
var functionList=[function apple(){
	console.log("apple");
}];
var mixedList=["apples",3,undefined,true,null,function apple(){
	console.log("apple");
}];
var list=[
['tiger','cat','bear','bird']
];
console.log(list[0][2]);
list.shift()
list.pop()
list.push("elephant")
var drip=list.concat(["bee","deer"])
list.sort();

//*****************OBJECTS*******************************************
var user={
	name:"John",
	age:34,
	hobby:"Soccer",
	isMarried:false,
};
user.name
user.age
user.hobby
user.isMarried

user.favouriteFood="spinach";
user
user.isMarried=true;

var user1={
	name:"Harry Potter",
	age:18,
	hobby:"Witchcraft",
	spells:["valar morghulus","abracadabra","boom"]
	shout:function(){
		console.log("Yahooooooooo");
	}
};

user.spells
user.spells[0]
user.shout() //method -- func inside object

var list=[
	{
		username:"andy",
		password:"secrecy",
	},
	{
		username:"jesus",
		password:"12345"
	}
];
list[0].password; //secrecy

console //builtin object
console.log()
console.info("hello")
console.error()

user2{} //empty object
lst=[] //empty list
var a; //undefined
var emptyObj={} 
var nullObj=null
nullObj.name ="Andy" //ERROR
emptyObj.name ="Andy"