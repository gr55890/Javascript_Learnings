var database=[
	{
		username:"andrei",
		password:"supersecret"
	},
	{
		username:"ingrid",
		password:"777"
	}
];

var newsFeed=[
	{
		username:"Bobby",
		timeline:"I have been having an amazing day!"
	},
	{
		username:"Sally",
		timeline:"I\'m back"
	},
	{
		username:"Mitch",
		timeline:"Javascript is pretty coooooool!"
	}
];

var userNamePrompt=prompt("What\'s your username?")
var passwordPrompt=prompt("What\'s your password?")

function isUserValid(username,password){
	for(var i=0;i < database.length;i++){
		if (database[i].username === username && 
			database[i].password === password){
			return true;
		}
	}
	return false;
}

function signIn(username,password){
	//console.log(isUserValid(username,password));
	if(isUserValid(username,password)){
		console.log(newsFeed);
	}else{
		alert("Sorry, wrong username and password!")
	}
}

signIn(userNamePrompt,passwordPrompt);