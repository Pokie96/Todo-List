import { appendChildren, assignClass, findThisMonth, findThisWeek, reformatDate, reformatThisMonth, reformatThisWeek, todaysDate} from "./helperFunction";
import { Controller , Storer} from "./classes";
import { removeAllActiveButtons } from "./handleProject";

//Function to create the form used for new tasks.
//Requires an argument for the element the form will be 
//created in
export const openTaskForm = function(elementToAppendTo, currentProject){

    //Select the "Add task" that we want to always append the 
    //form after
    const addTaskBtn = document.querySelector('.add-task-button');

    console.log(currentProject);

    //Create all of the field elements and their wrappers 
    //required for a task
    const taskFormWrapper = document.createElement('div');

    const taskTitleWrapper = document.createElement('div');
    const taskTitleLabel = document.createElement('label');
    const taskTitleInput = document.createElement('input');

    const taskDescriptionWrapper = document.createElement('div');
    const taskDescriptionLabel = document.createElement('label');
    const taskDescriptionInput = document.createElement('input');

    const taskDueDateWrapper = document.createElement('div');
    const taskDueDateLabel = document.createElement('label');
    const taskDueDateInput = document.createElement('input');

    const taskPriorityWrapper = document.createElement('div');
    const taskPriorityLabel = document.createElement('label');
    const taskPriorityInput = document.createElement('select');

    //Assign options to the priority drop down field
    const highPriority = document.createElement('option');
    const mediumPriority = document.createElement('option');
    const lowPriority = document.createElement('option');

    //Set the attributes for the due date elements in the form
    taskTitleInput.setAttribute("name", "title-input");
    taskTitleLabel.setAttribute("for", "title-input");

    taskDescriptionInput.setAttribute("name", "description-input");
    taskDescriptionLabel.setAttribute("for", "description-input");

    taskDueDateInput.setAttribute("name", "due-date-input");
    taskDueDateInput.setAttribute("type", "date");
    taskDueDateLabel.setAttribute("for", "due-date-input");

    taskPriorityInput.setAttribute("name", "priority-input");
    taskPriorityLabel.setAttribute("for", "priority-input");

    //Set the label values
    taskTitleLabel.innerText = "Title:";
    taskDescriptionLabel.innerText = "Description:";
    taskDueDateLabel.innerText = "Due Date:";
    taskPriorityLabel.innerText = "Priority Level";

    //Assign a class to the field element wrappers
    assignClass("field-element-wrapper", taskTitleWrapper, taskDescriptionWrapper, taskDueDateWrapper, taskPriorityWrapper);

    //Append any elements to their wrappers
    appendChildren(taskTitleWrapper, taskTitleLabel, taskTitleInput);
    appendChildren(taskDescriptionWrapper, taskDescriptionLabel, taskDescriptionInput);
    appendChildren(taskDueDateWrapper, taskDueDateLabel, taskDueDateInput);
    appendChildren(taskPriorityWrapper, taskPriorityLabel, taskPriorityInput);

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
        Storer.storeArrayLocal(`${currentProject.title} tasks`, currentProject.taskList);
        renderCreateAddTaskBtn(document.querySelector('.add-task-btn-wrapper') ,currentProject)
        chooseRenderType('Project', currentProject);
        removeTaskForm();
    });

    //Append the field elements to the given container element
    appendChildren(newTaskBtns, newTaskSubmitBtn, newTaskCancelBtn);
    appendChildren(taskFormWrapper, taskTitleWrapper, taskDescriptionWrapper, taskDueDateWrapper, taskPriorityWrapper, newTaskBtns);

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
export const renderProjectTasks = function(project){
    //First the tasks container must be emptied
    removeAllTasksDOM()

    //Assign a variable to an array of the key names from each
    //project.
    let taskList = project.taskList;

    //Loop through the key arrays to find any to do keys inside 
    //of the projects.
    for(let i = 0; i < taskList.length; i++){
        let currentTask = taskList[i];
        //Initialize all of the variables that will be 
        //used through the function to their dom elements
        renderIndividualTask(currentTask, taskList, project)
    };
};

//Function renders a given individual task onto the DOM
export const renderIndividualTask = function(task, taskList, project){
    const tasksContainer = document.querySelector(".to-do-list-container")

    //Initialize all of the variables that will be 
    //used through the function to their dom elements
    const taskWrapper = document.createElement('div');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const check = renderTaskCheckBox(task, taskList);
    const taskDeleteBtn = renderDeleteTaskBtn(project, task);


    //Append text to elements from their respective 
    //properties
    title.innerText = task.title;
    description.innerText = task.description;
    dueDate.innerText = reformatDate(task.dueDate);
    priority.innerText = task.priority;

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
    });

    if(thisTask.complete === true){
        taskCheckBox.checked = true;
    };

    taskCheck.className = 'task-check-wrapper';

    //Append elements to the wrapper
    appendChildren(taskCheck, taskCheckBoxLabel, taskCheckBox);

    return taskCheck;

};

//Function creates and returns the 'delete button' which will 
//be used of each task
export const renderDeleteTaskBtn = function(thisProject, thisTask){
    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.innerText = 'X';
    deleteTaskBtn.addEventListener('click', ()=>{
        let currentRenderType = Storer.currentlySelected;
        thisProject.removeTask(thisTask);
        Storer.removeArrayLocal(`${thisProject.title} tasks`);
        Storer.storeArrayLocal(`${thisProject.title} tasks`, thisProject.taskList);
        chooseRenderType(currentRenderType, thisProject);
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
    
    console.log(project);

    if(!titleInput.value || !descriptionInput.value || !dueDateInput.value || !priorityInput.value){
        alert('All fields should be completed before submitting!');
    } else{
        project.addTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value)
    };
};

//Function to remove all tasks from the screen.
export const removeAllTasksDOM = function(){
    const displayedTasks = document.querySelectorAll('.task-wrapper');
    for (let task of displayedTasks){
        task.remove();
    };
};

//Function removed the 'Add Task' button from the DOM
export const removeAddTaskButton = function(){
    const addTaskButton = document.querySelector('.add-task-button');
    if(addTaskButton){
        addTaskButton.remove();
    };
};

export const removeCompletedTasks = function(){
    const controller = new Controller;
    const allProjects = controller.getProjectsArray();

    for(let i = 0; i < allProjects.length; i++){
        const taskList = allProjects[i].taskList;
        for(let j = 0; j < taskList.length; j++){
            if(taskList[j].complete === true){
                allProjects[i].removeTask(taskList[j]);
                Storer.removeArrayLocal(`${allProjects[i].title} tasks`);
                Storer.storeArrayLocal(`${allProjects[i].title} tasks`, allProjects[i].taskList);
            };
        };
    };

    removeAllTasksDOM();
    removeAllActiveButtons();
    removeAddTaskButton();
    document.querySelector('#project-title').innerText = '';
};

//Function finds and renders all of the tasks that are due for this week.
export const renderTasksForWeek = function(){
    const controller = new Controller();
    const projectsArray = controller.getProjectsArray();
    const datesInThisWeek = reformatThisWeek(findThisWeek());
    const title = document.querySelector('#project-title');

    removeAllTasksDOM();

    title.innerText = 'Due This Week';

    for(let i = 0; i < projectsArray.length; i++){
        let taskList = projectsArray[i].taskList;
        for(let j = 0; j < taskList.length; j++){
            if(datesInThisWeek.includes(reformatDate(taskList[j].dueDate))){
                renderIndividualTask(taskList[j], taskList, projectsArray[i]);
            }
        }
    }
};

//Function finds and renders all of the tasks that are due for today
export const renderTasksForToday = function(){
    const controller = new Controller();
    const projectsArray = controller.getProjectsArray();
    const today = todaysDate();
    const title = document.querySelector('#project-title');

    removeAllTasksDOM();

    title.innerText = 'Due Today';

    for(let i = 0; i < projectsArray.length; i++){
        let taskList = projectsArray[i].taskList;
        for(let j = 0; j < taskList.length; j++){
            if(today === reformatDate(taskList[j].dueDate)){
                renderIndividualTask(taskList[j], taskList, projectsArray[i]);
            }
        }
    }
};

//Function finds and renders all of the tasks that are due for this month
export const renderTasksForMonth = function(){
    const controller = new Controller();
    const projectsArray = controller.getProjectsArray();
    const datesInThisMonth = reformatThisMonth(findThisMonth());
    const title = document.querySelector('#project-title');

    removeAllTasksDOM();

    title.innerText = 'Due This Month';

    for(let i = 0; i < projectsArray.length; i++){
        let taskList = projectsArray[i].taskList;
        for(let j = 0; j < taskList.length; j++){
            if(datesInThisMonth.includes(reformatDate(taskList[j].dueDate))){
                renderIndividualTask(taskList[j], taskList, projectsArray[i]);
            }
        }
    }
};

//Function makes the decision on how the tasks should be rendered (by project 
//or time frame)
export const chooseRenderType = function(selectedTasksType, project){
    if(selectedTasksType === 'Today'){
        renderTasksForToday();
    } else if(selectedTasksType === 'Week'){
        renderTasksForWeek();
    } else if(selectedTasksType === 'Month'){
        renderTasksForMonth();
    } else if(selectedTasksType === 'Project'){
        renderProjectTasks(project)
    }
};
