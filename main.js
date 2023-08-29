/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
//Contains the classes required for my JavaScript application

//A class constructor that can be used to create new projects
class Project {
    constructor(title, date, array){
        this.title = title;
        this.date = date;
        this.array = array;
        this.taskList = [];
    }

    addProject(){
        this.array.push(this);
    }

    removeProject(){
        this.array.splice(this.array.indexOf(this), 1);
    }

    addTask(title, description, dueDate, priority, complete){
        const task = new Task(title, description, dueDate, priority, complete);
        this.taskList.push(task);
    }

    removeTask(key){
        delete this[key];
    }
};

//This is the class constructor for our Tasks
class Task {
    constructor(title, description, dueDate, priority, complete = false){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
        this.type = "Task";
    }; 

    changeCompleteStatus(){
        if(this.complete === false){
            this.complete = true;
        } else{
            this.complete = false;
        };
    };
};


/***/ }),

/***/ "./src/handleProject.js":
/*!******************************!*\
  !*** ./src/handleProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeProjectForm: () => (/* binding */ closeProjectForm),
/* harmony export */   openProjectForm: () => (/* binding */ openProjectForm),
/* harmony export */   renderNewProjectBtn: () => (/* binding */ renderNewProjectBtn),
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   submitNewProject: () => (/* binding */ submitNewProject)
/* harmony export */ });
/* harmony import */ var _helperFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunction */ "./src/helperFunction.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _handleTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleTask */ "./src/handleTask.js");




//A function to close the form that will be used in other 
//functions within this module
const closeProjectForm = function(projectsList){
    //Select the form input fields
    const newProjectTitleInput = document.querySelector('.new-project-title-input');
    const newProjectSubmit = document.querySelector('.new-project-submit');
    const cancelNewProjectForm = document.querySelector('.cancel-new-project');

    //Remove the form input fields
    newProjectTitleInput.remove();
    newProjectSubmit.remove();
    cancelNewProjectForm.remove();

    //Re-Render the "New Project" button for use again
    renderNewProjectBtn(projectsList);

};

//This function will open a project form allowing user to 
//enter their project input
const openProjectForm = function(arrayToSubmit){

    //Create the field elements for the form
    const newProjectTitleInput = document.createElement('input');
    const newProjectSubmit = document.createElement('button');
    const cancelNewProjectForm = document.createElement('button');

    //Add the inner text to the button elements
    newProjectSubmit.innerText = 'Submit';
    cancelNewProjectForm.innerText = 'Cancel';
    
    //Assign classes to the elements
    newProjectTitleInput.className = 'new-project-title-input';
    newProjectSubmit.className = 'new-project-submit';
    cancelNewProjectForm.className = 'cancel-new-project';

    //Add the relative event listeners to the button elements
    cancelNewProjectForm.addEventListener('click', () => {
        closeProjectForm(arrayToSubmit);
    });
    newProjectSubmit.addEventListener('click', () => {
        submitNewProject(arrayToSubmit);
    });

    //Select the element where the form will be attached to
    const newProjectsForm = document.querySelector('.new-projects-form');

    //Attach the form to the previous element
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(newProjectsForm, newProjectTitleInput, newProjectSubmit, cancelNewProjectForm);

};

//Function that renders the project into the DOM to be 
//displayed on the page
const renderProject = function(array, container){
    
    //Clear the DOM before rendering again
    container.innerHTML = '';

    //Loop through the given array
    for(let i = 0; i < array.length; i++){
        //Initialise our variables used throughout the function
        let project = array[i];
        let projectElement = document.createElement('div');
        let projectTitle = document.createElement('h2');
        let projectDate = document.createElement('p');

        //Set inner text of the elements to the values inside
        //of the given objects
        projectTitle.innerText = project.title;
        projectDate.innerText = project.date;

        //Give the project elements class names for future styling
        projectElement.className = 'indiv-project-containers';
        projectTitle.className = 'project-titles';
        projectDate.className = 'project-dates';

        //Append the child elements to their parent element
        (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(projectElement, projectTitle, projectDate)


        //Append the div to the given container
        container.appendChild(projectElement);

        //Render the Add Task Button
        (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderCreateAddTaskBtn)(projectElement, project);
    }
};

//Function re-renders the "New Project" button again to the 
//DOM
const renderNewProjectBtn = function(projectArray){
    const newProjectBtn = document.createElement('button');
    newProjectBtn.innerText = 'New Project';
    newProjectBtn.id = 'new-project-button';

    //Add the event listener back to the "New Project" button
    newProjectBtn.addEventListener('click', (e) => {
        openProjectForm(projectArray);
        e.target.remove();
    });

    //Append the button back to the correct div
    const buttonContainer = document.querySelector('.new-projects-form');
    buttonContainer.appendChild(newProjectBtn);
};

//Function to create and add a new Project to a given projectsList
const submitNewProject = function(projectsList){
    //Select the title input element for the project form
    const newProjectTitleInput = document.querySelector('.new-project-title-input');

    //Assign the value entered into the title element to a variable
    const newProjectTitle = newProjectTitleInput.value;    

    //Create a new project with the given title, date and projectsList
    //to store it
    const newProject = new _classes__WEBPACK_IMPORTED_MODULE_1__.Project(newProjectTitle, 2023,projectsList);

    //Add the project to the given projects List
    newProject.addProject();

    //Render the projects in the projects list into the given container
    renderProject(projectsList, document.querySelector('.projects-container'));

    //Close the project form
    closeProjectForm(projectsList);

    //Re-Render the "New Project" button for use again.
    /*const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.addEventListener('click', openProjectForm);*/
};

/***/ }),

/***/ "./src/handleTask.js":
/*!***************************!*\
  !*** ./src/handleTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject),
/* harmony export */   openTaskForm: () => (/* binding */ openTaskForm),
/* harmony export */   removeTaskForm: () => (/* binding */ removeTaskForm),
/* harmony export */   renderCreateAddTaskBtn: () => (/* binding */ renderCreateAddTaskBtn),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _helperFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunction */ "./src/helperFunction.js");



//Function to create the form used for new tasks.
//Requires an argument for the element the form will be 
//created in
const openTaskForm = function(elementToAppendTo, currentProject){

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
    });

    //Append the field elements to the given container element
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(elementToAppendTo, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput, newTaskSubmitBtn, newTaskCancelBtn);

};

//Function that removes all of the form elements from the DOM
const removeTaskForm = function(){
    //Select all of the form elements using their class name
    const taskInputs = document.querySelectorAll('.task-input');

    //For every field input in the list of field inputs
    for(let i = 0; i < taskInputs.length; i++){
        //Remove the field input
        taskInputs[i].remove();
    }
};

//Function to render the tasks of a project on to the DOM
//to be displayed on the page
const renderTasks = function(project){
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
        (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.assignClass)('task-properties', title, description, dueDate, priority, complete)

        //Append all of the new elements to the container
        //for this to do object
        ;(0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tasksContainer, title, description, dueDate, priority, complete);
    };
};

//Function creates our "Add Task Button" given a parent element
//to append to.
const renderCreateAddTaskBtn = function(elementToAppendTo, currentProject){
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
const addTaskToProject = function(project){
    const titleInput = document.querySelector('#task-title-input');
    const descriptionInput = document.querySelector('#task-description-input');
    const dueDateInput = document.querySelector('#task-due-date-input');
    const priorityInput = document.querySelector('#task-priority-input');
    project.addTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value)
}

/***/ }),

/***/ "./src/helperFunction.js":
/*!*******************************!*\
  !*** ./src/helperFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChildren: () => (/* binding */ appendChildren),
/* harmony export */   assignClass: () => (/* binding */ assignClass)
/* harmony export */ });
//Function to help append multiple children at once to a parent
//element
const appendChildren = function(parent, ...children){ 
    for(let i = 0; i < children.length; i++){
        parent.appendChild(children[i]);
    };
};

//Function to allow me to add the same class name to multiple
//elements.
const assignClass = function(className, ...elements){
    for(let i = 0; i < elements.length; i++){
        elements[i].className = className;
    };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handleProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleProject */ "./src/handleProject.js");
/* harmony import */ var _handleTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleTask */ "./src/handleTask.js");



const projectsList = [];

//Add functionality to the "New Project" button, which will 
//open a form, allowing the user to input their project 
//information
const newProjectBtn = document.querySelector('#new-project-button');
newProjectBtn.addEventListener('click', (e) => {
    (0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.openProjectForm)(projectsList);
    e.target.remove();
});




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ1A7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFlO0FBQ25CO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3kvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2hhbmRsZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9oYW5kbGVUYXNrLmpzIiwid2VicGFjazovL3kvLi9zcmMvaGVscGVyRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9Db250YWlucyB0aGUgY2xhc3NlcyByZXF1aXJlZCBmb3IgbXkgSmF2YVNjcmlwdCBhcHBsaWNhdGlvblxuXG4vL0EgY2xhc3MgY29uc3RydWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgbmV3IHByb2plY3RzXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIGFycmF5KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KCl7XG4gICAgICAgIHRoaXMuYXJyYXkucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KCl7XG4gICAgICAgIHRoaXMuYXJyYXkuc3BsaWNlKHRoaXMuYXJyYXkuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSl7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSk7XG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKGtleSl7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgfVxufTtcblxuLy9UaGlzIGlzIHRoZSBjbGFzcyBjb25zdHJ1Y3RvciBmb3Igb3VyIFRhc2tzXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUgPSBmYWxzZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUYXNrXCI7XG4gICAgfTsgXG5cbiAgICBjaGFuZ2VDb21wbGV0ZVN0YXR1cygpe1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRlID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvblwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4gfSBmcm9tIFwiLi9oYW5kbGVUYXNrXCI7XG5cbi8vQSBmdW5jdGlvbiB0byBjbG9zZSB0aGUgZm9ybSB0aGF0IHdpbGwgYmUgdXNlZCBpbiBvdGhlciBcbi8vZnVuY3Rpb25zIHdpdGhpbiB0aGlzIG1vZHVsZVxuZXhwb3J0IGNvbnN0IGNsb3NlUHJvamVjdEZvcm0gPSBmdW5jdGlvbihwcm9qZWN0c0xpc3Qpe1xuICAgIC8vU2VsZWN0IHRoZSBmb3JtIGlucHV0IGZpZWxkc1xuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1zdWJtaXQnKTtcbiAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtbmV3LXByb2plY3QnKTtcblxuICAgIC8vUmVtb3ZlIHRoZSBmb3JtIGlucHV0IGZpZWxkc1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LnJlbW92ZSgpO1xuICAgIG5ld1Byb2plY3RTdWJtaXQucmVtb3ZlKCk7XG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0ucmVtb3ZlKCk7XG5cbiAgICAvL1JlLVJlbmRlciB0aGUgXCJOZXcgUHJvamVjdFwiIGJ1dHRvbiBmb3IgdXNlIGFnYWluXG4gICAgcmVuZGVyTmV3UHJvamVjdEJ0bihwcm9qZWN0c0xpc3QpO1xuXG59O1xuXG4vL1RoaXMgZnVuY3Rpb24gd2lsbCBvcGVuIGEgcHJvamVjdCBmb3JtIGFsbG93aW5nIHVzZXIgdG8gXG4vL2VudGVyIHRoZWlyIHByb2plY3QgaW5wdXRcbmV4cG9ydCBjb25zdCBvcGVuUHJvamVjdEZvcm0gPSBmdW5jdGlvbihhcnJheVRvU3VibWl0KXtcblxuICAgIC8vQ3JlYXRlIHRoZSBmaWVsZCBlbGVtZW50cyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbE5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAvL0FkZCB0aGUgaW5uZXIgdGV4dCB0byB0aGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgbmV3UHJvamVjdFN1Ym1pdC5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5pbm5lclRleHQgPSAnQ2FuY2VsJztcbiAgICBcbiAgICAvL0Fzc2lnbiBjbGFzc2VzIHRvIHRoZSBlbGVtZW50c1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LmNsYXNzTmFtZSA9ICduZXctcHJvamVjdC10aXRsZS1pbnB1dCc7XG4gICAgbmV3UHJvamVjdFN1Ym1pdC5jbGFzc05hbWUgPSAnbmV3LXByb2plY3Qtc3VibWl0JztcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5jbGFzc05hbWUgPSAnY2FuY2VsLW5ldy1wcm9qZWN0JztcblxuICAgIC8vQWRkIHRoZSByZWxhdGl2ZSBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbiBlbGVtZW50c1xuICAgIGNhbmNlbE5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKGFycmF5VG9TdWJtaXQpO1xuICAgIH0pO1xuICAgIG5ld1Byb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN1Ym1pdE5ld1Byb2plY3QoYXJyYXlUb1N1Ym1pdCk7XG4gICAgfSk7XG5cbiAgICAvL1NlbGVjdCB0aGUgZWxlbWVudCB3aGVyZSB0aGUgZm9ybSB3aWxsIGJlIGF0dGFjaGVkIHRvXG4gICAgY29uc3QgbmV3UHJvamVjdHNGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0cy1mb3JtJyk7XG5cbiAgICAvL0F0dGFjaCB0aGUgZm9ybSB0byB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgIGFwcGVuZENoaWxkcmVuKG5ld1Byb2plY3RzRm9ybSwgbmV3UHJvamVjdFRpdGxlSW5wdXQsIG5ld1Byb2plY3RTdWJtaXQsIGNhbmNlbE5ld1Byb2plY3RGb3JtKTtcblxufTtcblxuLy9GdW5jdGlvbiB0aGF0IHJlbmRlcnMgdGhlIHByb2plY3QgaW50byB0aGUgRE9NIHRvIGJlIFxuLy9kaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24oYXJyYXksIGNvbnRhaW5lcil7XG4gICAgXG4gICAgLy9DbGVhciB0aGUgRE9NIGJlZm9yZSByZW5kZXJpbmcgYWdhaW5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvL0xvb3AgdGhyb3VnaCB0aGUgZ2l2ZW4gYXJyYXlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAvL0luaXRpYWxpc2Ugb3VyIHZhcmlhYmxlcyB1c2VkIHRocm91Z2hvdXQgdGhlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBwcm9qZWN0ID0gYXJyYXlbaV07XG4gICAgICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbGV0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIC8vU2V0IGlubmVyIHRleHQgb2YgdGhlIGVsZW1lbnRzIHRvIHRoZSB2YWx1ZXMgaW5zaWRlXG4gICAgICAgIC8vb2YgdGhlIGdpdmVuIG9iamVjdHNcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHByb2plY3REYXRlLmlubmVyVGV4dCA9IHByb2plY3QuZGF0ZTtcblxuICAgICAgICAvL0dpdmUgdGhlIHByb2plY3QgZWxlbWVudHMgY2xhc3MgbmFtZXMgZm9yIGZ1dHVyZSBzdHlsaW5nXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTmFtZSA9ICdpbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnMnO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGl0bGVzJztcbiAgICAgICAgcHJvamVjdERhdGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtZGF0ZXMnO1xuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBjaGlsZCBlbGVtZW50cyB0byB0aGVpciBwYXJlbnQgZWxlbWVudFxuICAgICAgICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0RWxlbWVudCwgcHJvamVjdFRpdGxlLCBwcm9qZWN0RGF0ZSlcblxuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBkaXYgdG8gdGhlIGdpdmVuIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vUmVuZGVyIHRoZSBBZGQgVGFzayBCdXR0b25cbiAgICAgICAgcmVuZGVyQ3JlYXRlQWRkVGFza0J0bihwcm9qZWN0RWxlbWVudCwgcHJvamVjdCk7XG4gICAgfVxufTtcblxuLy9GdW5jdGlvbiByZS1yZW5kZXJzIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uIGFnYWluIHRvIHRoZSBcbi8vRE9NXG5leHBvcnQgY29uc3QgcmVuZGVyTmV3UHJvamVjdEJ0biA9IGZ1bmN0aW9uKHByb2plY3RBcnJheSl7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3RCdG4uaW5uZXJUZXh0ID0gJ05ldyBQcm9qZWN0JztcbiAgICBuZXdQcm9qZWN0QnRuLmlkID0gJ25ldy1wcm9qZWN0LWJ1dHRvbic7XG5cbiAgICAvL0FkZCB0aGUgZXZlbnQgbGlzdGVuZXIgYmFjayB0byB0aGUgXCJOZXcgUHJvamVjdFwiIGJ1dHRvblxuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBvcGVuUHJvamVjdEZvcm0ocHJvamVjdEFycmF5KTtcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAvL0FwcGVuZCB0aGUgYnV0dG9uIGJhY2sgdG8gdGhlIGNvcnJlY3QgZGl2XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0cy1mb3JtJyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xufTtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgYW5kIGFkZCBhIG5ldyBQcm9qZWN0IHRvIGEgZ2l2ZW4gcHJvamVjdHNMaXN0XG5leHBvcnQgY29uc3Qgc3VibWl0TmV3UHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3RzTGlzdCl7XG4gICAgLy9TZWxlY3QgdGhlIHRpdGxlIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBwcm9qZWN0IGZvcm1cbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC10aXRsZS1pbnB1dCcpO1xuXG4gICAgLy9Bc3NpZ24gdGhlIHZhbHVlIGVudGVyZWQgaW50byB0aGUgdGl0bGUgZWxlbWVudCB0byBhIHZhcmlhYmxlXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWU7ICAgIFxuXG4gICAgLy9DcmVhdGUgYSBuZXcgcHJvamVjdCB3aXRoIHRoZSBnaXZlbiB0aXRsZSwgZGF0ZSBhbmQgcHJvamVjdHNMaXN0XG4gICAgLy90byBzdG9yZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0VGl0bGUsIDIwMjMscHJvamVjdHNMaXN0KTtcblxuICAgIC8vQWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBnaXZlbiBwcm9qZWN0cyBMaXN0XG4gICAgbmV3UHJvamVjdC5hZGRQcm9qZWN0KCk7XG5cbiAgICAvL1JlbmRlciB0aGUgcHJvamVjdHMgaW4gdGhlIHByb2plY3RzIGxpc3QgaW50byB0aGUgZ2l2ZW4gY29udGFpbmVyXG4gICAgcmVuZGVyUHJvamVjdChwcm9qZWN0c0xpc3QsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKSk7XG5cbiAgICAvL0Nsb3NlIHRoZSBwcm9qZWN0IGZvcm1cbiAgICBjbG9zZVByb2plY3RGb3JtKHByb2plY3RzTGlzdCk7XG5cbiAgICAvL1JlLVJlbmRlciB0aGUgXCJOZXcgUHJvamVjdFwiIGJ1dHRvbiBmb3IgdXNlIGFnYWluLlxuICAgIC8qY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1idXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3RGb3JtKTsqL1xufTsiLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uXCI7XG5pbXBvcnQgeyBhc3NpZ25DbGFzcyB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uXCI7XG5cbi8vRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmb3JtIHVzZWQgZm9yIG5ldyB0YXNrcy5cbi8vUmVxdWlyZXMgYW4gYXJndW1lbnQgZm9yIHRoZSBlbGVtZW50IHRoZSBmb3JtIHdpbGwgYmUgXG4vL2NyZWF0ZWQgaW5cbmV4cG9ydCBjb25zdCBvcGVuVGFza0Zvcm0gPSBmdW5jdGlvbihlbGVtZW50VG9BcHBlbmRUbywgY3VycmVudFByb2plY3Qpe1xuXG4gICAgLy9DcmVhdGUgYWxsIG9mIHRoZSBmaWVsZCBlbGVtZW50cyByZXF1aXJlZCBmb3IgYSB0YXNrXG4gICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAvL0Fzc2lnbiBhbGwgb2YgdGhlIGZpZWxkIGVsZW1lbnRzIGEgY2xhc3MgbmFtZVxuICAgIHRhc2tUaXRsZUlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG4gICAgdGFza0R1ZURhdGVJbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuXG4gICAgLy9Bc3NpZ24gZmllbGQgZWxlbWVudHMgYW4gSURcbiAgICB0YXNrVGl0bGVJbnB1dC5pZCA9ICd0YXNrLXRpdGxlLWlucHV0JztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uLWlucHV0JztcbiAgICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2stZHVlLWRhdGUtaW5wdXQnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmlkID0gJ3Rhc2stcHJpb3JpdHktaW5wdXQnO1xuXG4gICAgLy9DcmVhdGUgdGhlIGJ1dHRvbiBlbGVtZW50cyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdUYXNrU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3VGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9Bc3NpZ24gdGhlIGJ1dHRvbiBlbGVtZW50cyB3aXRoIGEgY2xhc3MgbmFtZVxuICAgIG5ld1Rhc2tTdWJtaXRCdG4uY2xhc3NOYW1lID0gJ3N1Ym1pdC10YXNrJztcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmNsYXNzTmFtZSA9ICdjYW5jZWwtdGFzayc7XG5cbiAgICAvL0luc2VydCBpbm5lciB0ZXh0IGludG8gdGhlIGJ1dHRvbnMgdG8gZGlzcGxheSB1c2VcbiAgICBuZXdUYXNrU3VibWl0QnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICAvL0FkZCBldmVudCBsaXN0ZW5lciB0byBjYW5jZWwgYW5kIHJlbW92ZSB0aGUgZm9ybSBmcm9tIFxuICAgIC8vdGhlIERPTVxuICAgIG5ld1Rhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVUYXNrRm9ybSlcblxuICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHJlbmRlciB0aGUgdGFzayB0byBzdWJtaXQgYnV0dG9uXG4gICAgbmV3VGFza1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHJlbmRlclRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vQXBwZW5kIHRoZSBmaWVsZCBlbGVtZW50cyB0byB0aGUgZ2l2ZW4gY29udGFpbmVyIGVsZW1lbnRcbiAgICBhcHBlbmRDaGlsZHJlbihlbGVtZW50VG9BcHBlbmRUbywgdGFza1RpdGxlSW5wdXQsIHRhc2tEZXNjcmlwdGlvbklucHV0LCB0YXNrRHVlRGF0ZUlucHV0LCB0YXNrUHJpb3JpdHlJbnB1dCwgbmV3VGFza1N1Ym1pdEJ0biwgbmV3VGFza0NhbmNlbEJ0bik7XG5cbn07XG5cbi8vRnVuY3Rpb24gdGhhdCByZW1vdmVzIGFsbCBvZiB0aGUgZm9ybSBlbGVtZW50cyBmcm9tIHRoZSBET01cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgLy9TZWxlY3QgYWxsIG9mIHRoZSBmb3JtIGVsZW1lbnRzIHVzaW5nIHRoZWlyIGNsYXNzIG5hbWVcbiAgICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2staW5wdXQnKTtcblxuICAgIC8vRm9yIGV2ZXJ5IGZpZWxkIGlucHV0IGluIHRoZSBsaXN0IG9mIGZpZWxkIGlucHV0c1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrSW5wdXRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy9SZW1vdmUgdGhlIGZpZWxkIGlucHV0XG4gICAgICAgIHRhc2tJbnB1dHNbaV0ucmVtb3ZlKCk7XG4gICAgfVxufTtcblxuLy9GdW5jdGlvbiB0byByZW5kZXIgdGhlIHRhc2tzIG9mIGEgcHJvamVjdCBvbiB0byB0aGUgRE9NXG4vL3RvIGJlIGRpc3BsYXllZCBvbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tzID0gZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgLy9Bc3NpZ24gYSB2YXJpYWJsZSB0byBhbiBhcnJheSBvZiB0aGUga2V5IG5hbWVzIGZyb20gZWFjaFxuICAgIC8vcHJvamVjdC5cbiAgICBsZXQgdGFza0xpc3QgPSBwcm9qZWN0LnRhc2tMaXN0O1xuXG4gICAgLy9TZWxlY3QgdGhlIGNvbnRhaW5lciBpbiBIVE1MIGRvY3VtZW50IHdoZXJlIHRhc2tzIHdpbGxcbiAgICAvL2JlIGFwcGVuZGVkIHRvLlxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtY29udGFpbmVyJylcblxuICAgIC8vTG9vcCB0aHJvdWdoIHRoZSBrZXkgYXJyYXlzIHRvIGZpbmQgYW55IHRvIGRvIGtleXMgaW5zaWRlIFxuICAgIC8vb2YgdGhlIHByb2plY3RzLlxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IHRhc2tMaXN0W2ldO1xuICAgICAgICAvL0luaXRpYWxpemUgYWxsIG9mIHRoZSB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIFxuICAgICAgICAvL3VzZWQgdGhyb3VnaCB0aGUgZnVuY3Rpb24gdG8gdGhlaXIgZG9tIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKTtcblxuICAgICAgICAvL0FwcGVuZCB0ZXh0IHRvIGVsZW1lbnRzIGZyb20gdGhlaXIgcmVzcGVjdGl2ZSBcbiAgICAgICAgLy9wcm9wZXJ0aWVzXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGN1cnJlbnRUYXNrLnRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBjdXJyZW50VGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSBjdXJyZW50VGFzay5kdWVEYXRlO1xuICAgICAgICBwcmlvcml0eS5pbm5lclRleHQgPSBjdXJyZW50VGFzay5wcmlvcml0eTtcbiAgICAgICAgY29tcGxldGUuaW5uZXJUZXh0ID0gY3VycmVudFRhc2suY29tcGxldGU7XG5cbiAgICAgICAgLy9Bc3NpZ24gYSBjbGFzcyBuYW1lIHRvIHRoZXNlIGVsZW1lbnRzIGZvciBmdXR1cmVcbiAgICAgICAgLy9zdHlsaW5nLlxuICAgICAgICBhc3NpZ25DbGFzcygndGFzay1wcm9wZXJ0aWVzJywgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpXG5cbiAgICAgICAgLy9BcHBlbmQgYWxsIG9mIHRoZSBuZXcgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAvL2ZvciB0aGlzIHRvIGRvIG9iamVjdFxuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrc0NvbnRhaW5lciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpO1xuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgb3VyIFwiQWRkIFRhc2sgQnV0dG9uXCIgZ2l2ZW4gYSBwYXJlbnQgZWxlbWVudFxuLy90byBhcHBlbmQgdG8uXG5leHBvcnQgY29uc3QgcmVuZGVyQ3JlYXRlQWRkVGFza0J0biA9IGZ1bmN0aW9uKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdCl7XG4gICAgLy9DcmVhdGUgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggdGV4dC5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xuXG4gICAgLy9BZGQgY2xhc3MgdG8gdGhlIGJ1dHRvblxuICAgIGFkZFRhc2tCdG4uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1idXR0b25cIjtcblxuICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uIHdoaWNoIG9wZW5zIHRoZSBcbiAgICAvL1wiVGFzayBGb3JtXCIgb24gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZ2l2ZW4uXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgb3BlblRhc2tGb3JtKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdClcbiAgICB9KVxuXG4gICAgLy9BcHBlbmQgdGhlIGJ1dHRvbiB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICBlbGVtZW50VG9BcHBlbmRUby5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gYWRkIGEgXCJUYXNrXCIgdG8gYSBwcm9qZWN0J3MgdGFzayBhcnJheS5cbmV4cG9ydCBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZHVlLWRhdGUtaW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHktaW5wdXQnKTtcbiAgICBwcm9qZWN0LmFkZFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LnZhbHVlKVxufSIsIi8vRnVuY3Rpb24gdG8gaGVscCBhcHBlbmQgbXVsdGlwbGUgY2hpbGRyZW4gYXQgb25jZSB0byBhIHBhcmVudFxuLy9lbGVtZW50XG5leHBvcnQgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbihwYXJlbnQsIC4uLmNoaWxkcmVuKXsgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuW2ldKTtcbiAgICB9O1xufTtcblxuLy9GdW5jdGlvbiB0byBhbGxvdyBtZSB0byBhZGQgdGhlIHNhbWUgY2xhc3MgbmFtZSB0byBtdWx0aXBsZVxuLy9lbGVtZW50cy5cbmV4cG9ydCBjb25zdCBhc3NpZ25DbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgLi4uZWxlbWVudHMpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGVsZW1lbnRzW2ldLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgb3BlblByb2plY3RGb3JtIH0gZnJvbSBcIi4vaGFuZGxlUHJvamVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tIFwiLi9oYW5kbGVUYXNrXCI7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG4vL0FkZCBmdW5jdGlvbmFsaXR5IHRvIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uLCB3aGljaCB3aWxsIFxuLy9vcGVuIGEgZm9ybSwgYWxsb3dpbmcgdGhlIHVzZXIgdG8gaW5wdXQgdGhlaXIgcHJvamVjdCBcbi8vaW5mb3JtYXRpb25cbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtYnV0dG9uJyk7XG5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBvcGVuUHJvamVjdEZvcm0ocHJvamVjdHNMaXN0KTtcbiAgICBlLnRhcmdldC5yZW1vdmUoKTtcbn0pO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9