var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
    event.preventDefault();

    var taskNameInput = document.querySelector('input[name="task-name"]').value;
    var taskTypeInput = document.querySelector('select[name="task-type"]').value;
    //Check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task Form");
        return false;
    }
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    //Reset the form
    formEl.reset();

    createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
    // Create a list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //Create the <div> to hold the task info and add the list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task=info";
    //add inner html elements
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    console.log(taskInfoEl);

    listItemEl.appendChild(taskInfoEl);
    //appent the list item
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);