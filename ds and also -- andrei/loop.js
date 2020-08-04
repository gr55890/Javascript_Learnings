var todos=[
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

for (var i=0; i < todos.length; i++){
	todos[i] = todos[i]+"!";
}

todos.forEach(function(todo,i)){
	console.log(todo,i);
}

function logTodos(todo,i){
	console.log(todo,i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

////////////////////////////////////////////////
var todosLength = todos.length
for (var i=0; i < todosLength; i++){
	todos.pop();
}

var counterOne =0;
while (counterOne < 10){
	console.log("while",counterOne);
	counterOne++;
}

var counterTwo=10;
do{
	console.log("do while",counterTwo);
	counterTwo--;
}while(counterTwo > 0)

