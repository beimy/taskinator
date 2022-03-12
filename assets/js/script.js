var buttonEl = document.querySelector("#save-task");
var tasksToDoEl= document.querySelector("#tasks-to-do");

var creatTaskHandler = function(){
    var listItemEl = document.createElement("li");
    listItemEl.textContent = "This is a new task.";
    listItemEl.className = "task-item";
    tasksToDoEl.append(listItemEl);
}

buttonEl.addEventListener("click", creatTaskHandler);

