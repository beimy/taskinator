var formEl = document.querySelector("#task-form");
var tasksToDoEl= document.querySelector("#tasks-to-do");

var creatTaskHandler = function(event){
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var listItemEl = document.createElement("li");
    listItemEl.textContent = taskNameInput;
    listItemEl.className = "task-item";
    tasksToDoEl.append(listItemEl);
};

formEl.addEventListener("submit", creatTaskHandler);

