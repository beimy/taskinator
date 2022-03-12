var formEl = document.querySelector("#task-form");
var tasksToDoEl= document.querySelector("#tasks-to-do");

var creatTaskHandler = function(event){
    event.preventDefault();


    var listItemEl = document.createElement("li");
    listItemEl.textContent = "This is a new task.";
    listItemEl.className = "task-item";
    tasksToDoEl.append(listItemEl);
};

formEl.addEventListener("submit", creatTaskHandler);

