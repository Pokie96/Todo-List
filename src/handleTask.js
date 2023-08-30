import { appendChildren } from "./helperFunction";
import { assignClass } from "./helperFunction";

//Function to create the form used for new tasks.
//Requires an argument for the element the form will be 
//created in
export const openTaskForm = function(elementToAppendTo, currentProject){

    //Create all of the field elements required for a task
    const taskTitleInput = document.createElement('input');
    const taskDescriptionInput = document.createElement('input');
    const taskDueDateInput = document.createElement('input');
    const taskPriorityInput = document.createElement('input');

    //Assign all of the field elements a class name
    taskTitleInput.className = 'task-input';
    taskDescriptionInput.className = 'task-input';
    taskDueDateInput.className = 'task-input';
    taskPriorityInput.className = 'task-input';

    //Assign field elements an ID
    taskTitleInput.id = 'task-title-input';
    taskDescriptionInput.id = 'task-description-input';
    taskDueDateInput.id = 'task-due-date-input';
    taskPriorityInput.id = 'task-priority-input';

    //Create the button elements for the form
    const newTaskSubmitBtn = document.createElement('button');
    const newTaskCancelBtn = document.createElement('button');

    //Assign the button elements with a class name
    newTaskSubmitBtn.className = 'submit-task';
    newTaskCancelBtn.className = 'cancel-task';

    //Insert inner text into the buttons to display use
    newTaskSubmitBtn.innerText = 'Submit';
    newTaskCancelBtn.innerText = 'Cancel';

    //Add event listener to cancel and remove the form from 
    //the DOM
    newTaskCancelBtn.addEventListener('click', removeTaskForm)

    //Add event listener to render the task to submit button
    newTaskSubmitBtn.addEventListener('click', () => {
        addTaskToProject(currentProject);
        renderTasks(currentProject);
        removeTaskForm();
    });

    //Append the field elements to the given container element
    appendChildren(elementToAppendTo, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput, newTaskSubmitBtn, newTaskCancelBtn);

};

//Function that removes all of the form elements from the DOM
export const removeTaskForm = function(){
    //Select all of the form elements using their class name
    const taskInputs = document.querySelectorAll('.task-input');
    const taskSubmitBtn = document.querySelector('.submit-task');
    const taskCancelBtn = document.querySelector('.cancel-task');

    //For every field input in the list of field inputs
    for(let i = 0; i < taskInputs.length; i++){
        //Remove the field input
        taskInputs[i].remove();
    }

    taskSubmitBtn.remove();
    taskCancelBtn.remove();
};

//Function to render the tasks of a project on to the DOM
//to be displayed on the page
export const renderTasks = function(project){
    //Assign a variable to an array of the key names from each
    //project.
    let taskList = project.taskList;

    //Select the container in HTML document where tasks will
    //be appended to.
    const tasksContainer = document.querySelector('.to-do-list-container')

    //Loop through the key arrays to find any to do keys inside 
    //of the projects.
    for(let i = 0; i < taskList.length; i++){
        let currentTask = taskList[i];
        //Initialize all of the variables that will be 
        //used through the function to their dom elements
        const title = document.createElement('p');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const complete = document.createElement('p');

        console.log(currentTask);

        //Append text to elements from their respective 
        //properties
        title.innerText = currentTask.title;
        description.innerText = currentTask.description;
        dueDate.innerText = currentTask.dueDate;
        priority.innerText = currentTask.priority;
        complete.innerText = currentTask.complete;

        //Assign a class name to these elements for future
        //styling.
        assignClass('task-properties', title, description, dueDate, priority, complete)

        //Append all of the new elements to the container
        //for this to do object
        appendChildren(tasksContainer, title, description, dueDate, priority, complete);
    };
};

//Function creates our "Add Task Button" given a parent element
//to append to.
export const renderCreateAddTaskBtn = function(elementToAppendTo, currentProject){
    //Create the button element with text.
    const addTaskBtn = document.createElement('button');
    addTaskBtn.innerText = 'Add Task';

    //Add class to the button
    addTaskBtn.className = "add-task-button";

    //Add the event listener to the button which opens the 
    //"Task Form" on the element that was given.
    addTaskBtn.addEventListener('click', () => {
     openTaskForm(elementToAppendTo, currentProject)
    })

    //Append the button to the given element.
    elementToAppendTo.appendChild(addTaskBtn);
};

//Function to add a "Task" to a project's task array.
export const addTaskToProject = function(project){
    const titleInput = document.querySelector('#task-title-input');
    const descriptionInput = document.querySelector('#task-description-input');
    const dueDateInput = document.querySelector('#task-due-date-input');
    const priorityInput = document.querySelector('#task-priority-input');
    project.addTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value)
}