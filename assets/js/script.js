var formEl = document.querySelector("#task-form");
// var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
    event.preventDefault();

    var taskNameInput = document.querySelector('input[name="task-name"]').value;
    // console.log(taskNameInput);

    var taskTypeInput = document.querySelector('select[name="task-type"]').value;
    console.log(taskTypeInput);

    // Create a list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //Create the <div> to hold the task info and add the list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task=info";
    //add inner html elements
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    console.log(taskInfoEl);

    listItemEl.appendChild(taskInfoEl);
    //appent the list item
    tasksToDoEl.appendChild(listItemEl);

};

// buttonEl.addEventListener("click", createTaskHandler);

formEl.addEventListener("submit", createTaskHandler);