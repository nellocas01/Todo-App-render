//dichiarare un array cotenente le seguenti stringhe : nota1,nota2,nota3
var todos = ["nota1", "nota2", "nota3"];

var taskInput = document.querySelector('#input');
var inputButton = document.querySelector('#input-button');
var taskList = document.querySelector('#task-list');


inputButton.addEventListener("click", render);
taskList.addEventListener('click', removeTask);

    
function render(){
        var fullString = " ";
        for (var i = 0; i < todos.length; i++) {
          fullString = fullString + todos[i];
        }
        document.getElementById("task-list").innerHTML = todos.push(taskInput.value);

        

   // Creare nuovo li e aggiungere classe
    var li = document.createElement('li');
    li.className = 'task';

    //creare nuovo textnode e metterlo dentro li
    li.appendChild(document.createTextNode(taskInput.value));

    //creare link
    var link = document.createElement('a');

    //aggiungere classe a <a>
    link.className = "delete-todo"

    //aggiungi X al <a>

    link.innerHTML = '<h3>X</h3>'

    //mettere link nel li (list items)
    li.appendChild(link)
    

        //mettere li dentro ul
        taskList.appendChild(li);
   

     //taskInput = todos;
  
}

    
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}