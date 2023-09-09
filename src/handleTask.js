import { appendChildren } from "./helperFunction";
import { assignClass } from "./helperFunction";

//Function to create the form used for new tasks.
//Requires an argument for the element the form will be 
//created in
export const openTaskForm = function(elementToAppendTo, currentProject){

    //Select the "Add task" that we want to always append the 
    //form after
    const addTaskBtn = document.querySelector('.add-task-button');

    //Create all of the field elements required for a task
    const taskFormWrapper = document.createElement('div');
    const taskTitleInput = document.createElement('input');
    const taskDescriptionInput = document.createElement('input');
    const taskDueDateInput = document.createElement('input');
    const taskPriorityInput = document.createElement('select');

    //Assign all of the field elements a class name
    taskFormWrapper.className = 'task-form';
    taskTitleInput.className = 'task-input';
    taskDescriptionInput.className = 'task-input';
    taskDueDateInput.className = 'task-input';
    taskPriorityInput.className = 'task-input';

    //Assign placeholder values to all of the inputs
    taskTitleInput.setAttribute('placeholder', 'Task Title');
    taskDescriptionInput.setAttribute('placeholder', 'Task Description');
    taskDueDateInput.setAttribute('placeholder', 'Task Due Date');
    taskPriorityInput.setAttribute('placeholder', 'Task Priority Level');

    //Assign field elements an ID
    taskTitleInput.id = 'task-title-input';
    taskDescriptionInput.id = 'task-description-input';
    taskDueDateInput.id = 'task-due-date-input';
    taskPriorityInput.id = 'task-priority-input';

    //Assign options to the priority drop down field
    const highPriority = document.createElement('option');
    const mediumPriority = document.createElement('option');
    const lowPriority = document.createElement('option');

    highPriority.innerText = 'High Priority';
    mediumPriority.innerText = 'Medium Priority';
    lowPriority.innerText = 'Low Priority';

    appendChildren(taskPriorityInput, highPriority, mediumPriority, lowPriority);


    //Create the button elements for the form
    const newTaskBtns = document.createElement('div');
    const newTaskSubmitBtn = document.createElement('button');
    const newTaskCancelBtn = document.createElement('button');

    //Assign the button elements with a class name
    newTaskBtns.className = 'new-task-buttons-wrapper'
    newTaskSubmitBtn.className = 'submit-task';
    newTaskCancelBtn.className = 'cancel-task';

    //Insert inner text into the buttons to display use
    newTaskSubmitBtn.innerText = 'Submit';
    newTaskCancelBtn.innerText = 'Cancel';

    //Add event listener to cancel and remove the form from 
    //the DOM
    newTaskCancelBtn.addEventListener('click', ()=> {
        removeTaskForm();
        renderCreateAddTaskBtn(elementToAppendTo, currentProject);
    })

    //Add event listener to render the task to submit button
    newTaskSubmitBtn.addEventListener('click', () => {
        addTaskToProject(currentProject);
        renderCreateAddTaskBtn(document.querySelector('.task-section-header') ,currentProject)
        renderTasks(currentProject);
        removeTaskForm();
    });

    //Append the field elements to the given container element
    appendChildren(newTaskBtns, newTaskSubmitBtn, newTaskCancelBtn);
    appendChildren(taskFormWrapper, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput, newTaskBtns);

    //Append the form to after the "Add Task Button";
    addTaskBtn.parentNode.insertBefore(taskFormWrapper, addTaskBtn.nextSibling);

};

//Function that removes all of the form elements from the DOM
export const removeTaskForm = function(){
    //Select all of the form elements using their class name
    const taskForm = document.querySelector('.task-form');

    //For every field input in the list of field inputs
    if(!taskForm){
        return;
    }else{
        taskForm.remove();
    };

};

//Function to render the tasks of a project on to the DOM
//to be displayed on the page
export const renderTasks = function(project){
    //First the tasks container must be emptied
    removeAllTasksDOM()

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
        const taskWrapper = document.createElement('div');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const check = renderTaskCheckBox(currentTask, taskList);
        const taskDeleteBtn = renderDeleteTaskBtn(project, currentTask);


        //Append text to elements from their respective 
        //properties
        title.innerText = currentTask.title;
        description.innerText = currentTask.description;
        dueDate.innerText = currentTask.dueDate;
        priority.innerText = currentTask.priority;

        //Assign a class name to these elements for future
        //styling.
        assignClass('task-properties', title, description, dueDate, priority)
        taskWrapper.className = 'task-wrapper';
        taskDeleteBtn.className = 'task-delete-button';

        //Append all of the new elements to the container
        //for this to do object
        appendChildren(taskWrapper, title, description, dueDate, priority, check, taskDeleteBtn);
        tasksContainer.appendChild(taskWrapper)
    };
};

//Function creates and return the checkbox for each task
export const renderTaskCheckBox = function(thisTask, taskArray){
    //Create wrapper for check
    const taskCheck = document.createElement('div');
    
    //Create the checkbox element
    const taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute('type', 'checkbox');
    taskCheckBox.setAttribute('id', `${thisTask.title + (taskArray.indexOf(thisTask))}-check-box`);

    //Create the label for the checkbox
    const taskCheckBoxLabel = document.createElement('label');
    taskCheckBoxLabel.setAttribute('for', `${thisTask.title + (taskArray.indexOf(thisTask))}-check-box`);
    taskCheckBoxLabel.innerText = 'Completed?';

    //Event listener for checkbox
    taskCheckBox.addEventListener('change', ()=> {
        thisTask.changeCompleteStatus();
        console.log(thisTask);
    });

    if(thisTask.complete === true){
        taskCheckBox.checked = true;
    };

    taskCheck.className = 'task-check-wrapper';

    //Append elements to the wrapper
    appendChildren(taskCheck, taskCheckBoxLabel, taskCheckBox);

    return taskCheck;

}

//Function creates and returns the 'delete button' which will 
//be used of each task
export const renderDeleteTaskBtn = function(thisProject, thisTask){
    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.innerText = 'X';
    deleteTaskBtn.addEventListener('click', ()=>{
        thisProject.removeTask(thisTask);
        renderTasks(thisProject);
    })
    return deleteTaskBtn;
};

//Function creates our "Add Task Button" given a parent element
//to append to.
export const renderCreateAddTaskBtn = function(elementToPrependTo, currentProject){
    //Create the button element with text.
    const addTaskBtn = document.createElement('button');
    addTaskBtn.innerText = 'Add Task';

    //Add class to the button
    addTaskBtn.className = "add-task-button";

    //Add the event listener to the button which opens the 
    //"Task Form" on the element that was given.
    addTaskBtn.addEventListener('click', () => {
     openTaskForm(elementToPrependTo, currentProject)
     removeAddTaskButton();
    })

    //Append the button to the given element.
    elementToPrependTo.prepend(addTaskBtn);
};

//Function to add a "Task" to a project's task array.
export const addTaskToProject = function(project){
    const titleInput = document.querySelector('#task-title-input');
    const descriptionInput = document.querySelector('#task-description-input');
    const dueDateInput = document.querySelector('#task-due-date-input');
    const priorityInput = document.querySelector('#task-priority-input');
    
    if(!titleInput.value || !descriptionInput.value || !dueDateInput.value || !priorityInput.value){
        alert('All fields should be completed before submitting!');
    } else{
        project.addTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value)
    };
}

//Function to remove all tasks from the screen.
export const removeAllTasksDOM = function(){
    const displayedTasks = document.querySelectorAll('.task-wrapper');
    for (let task of displayedTasks){
        task.remove();
    };
}

//Function removed the 'Add Task' button from the DOM
export const removeAddTaskButton = function(){
    const addTaskButton = document.querySelector('.add-task-button');
    if(addTaskButton){
        addTaskButton.remove();
    };
}
