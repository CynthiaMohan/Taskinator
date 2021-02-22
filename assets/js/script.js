var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;

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

    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    //Create the <div> to hold the task info and add the list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task=info";
    //add inner html elements
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    console.log(taskInfoEl);

    listItemEl.appendChild(taskInfoEl);
    var taskActionsEl = createTaskActions(taskIdCounter);
    console.log(taskActionsEl);
    listItemEl.appendChild(taskActionsEl);
    //appent the list item
    tasksToDoEl.appendChild(listItemEl);
    //increase task id counter
    taskIdCounter++;

};

var createTaskActions = function (taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    //create the edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    //create the delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i < statusChoices.length; i++) {
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);
        //append select

        statusSelectEl.appendChild(statusOptionEl);
    };

    actionContainerEl.appendChild(statusSelectEl);
    return actionContainerEl;
};

formEl.addEventListener("submit", taskFormHandler);