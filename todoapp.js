var todos = ["nota1" , "nota2", "nota3"];

var taskInput = document.querySelector("#input");
var inputButton = document.querySelector("#input-button");
var removeTodoButton = document.querySelector("#task-list");

inputButton.addEventListener('click', addTodo);
removeTodoButton.addEventListener('click', removeTodo);



function addTodo(){
 
    //ciclo che aggiunge elemento nella lista todos ho usato il break altrimenti lo aggiungeva più volte
    var string = "";
    for(i in todos){
        if (string > 1){
            break;
        }
        string = string + todos.push(taskInput.value);
    }console.log(todos);

    //chiamare/invocare metodo di render
    render();

    taskInput.value = "";
 }

 function render(){
    /*
        var txt = "";
        todos.forEach(myFunction);
        document.getElementById("list").innerHTML = txt;

        function myFunction(value, index, array) {
        txt += value + "<br>"; 
        }

      */
  
 }

function removeTodo(){
   /*
    var string = "";
    for(i in todos){
        if (string > 1){
            break;
        }
        string = string + todos.remove(removeTodoButton.value);
    }console.log(todos);

    taskInput.value = ""

    render();
    */
}
