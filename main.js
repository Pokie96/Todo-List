/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addTaskBtn.js":
/*!***************************!*\
  !*** ./src/addTaskBtn.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _openTaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openTaskForm */ "./src/openTaskForm.js");


//Function creates our "Add Task Button" given a parent element
//to append to.
const createAddTaskBtn = function(elementToAppendTo){
    //Create the button element with text.
    const addTaskBtn = document.createElement('button');
    addTaskBtn.innerText = 'Add Task';

    //Add the event listener to the button which opens the 
    //"Task Form" on the element that was given.
    addTaskBtn.addEventListener('click', () => {
     (0,_openTaskForm__WEBPACK_IMPORTED_MODULE_0__["default"])(elementToAppendTo)
    })

    //Append the button to the given element.
    elementToAppendTo.appendChild(addTaskBtn);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddTaskBtn);

/***/ }),

/***/ "./src/appendChildren.js":
/*!*******************************!*\
  !*** ./src/appendChildren.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Function to help append multiple children at once to a parent
//element
const appendChildren = function(parent, ...children){ 
    for(let i = 0; i < children.length; i++){
        parent.appendChild(children[i]);
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendChildren);

/***/ }),

/***/ "./src/closeProjectForm.js":
/*!*********************************!*\
  !*** ./src/closeProjectForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderProjectBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjectBtn */ "./src/renderProjectBtn.js");


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
    (0,_renderProjectBtn__WEBPACK_IMPORTED_MODULE_0__["default"])(projectsList);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeProjectForm);

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");


//A class constructor that can be used to create new projects
class Project {
    constructor(title, date, array){
        this.title = title;
        this.date = date;
        this.array = array;
    }

    addProject(){
        this.array.push(this);
    }

    removeProject(){
        this.array.splice(this.array.indexOf(this), 1);
    }

    addTask(taskName, title, description, dueDate, priority, complete){
        const task = new _createTask__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority, complete);
        this[taskName] = task;
    }

    removeTask(key){
        delete this[key];
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/openProjectForm.js":
/*!********************************!*\
  !*** ./src/openProjectForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendChildren */ "./src/appendChildren.js");
/* harmony import */ var _submitProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitProject */ "./src/submitProject.js");
/* harmony import */ var _closeProjectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closeProjectForm */ "./src/closeProjectForm.js");




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
        (0,_closeProjectForm__WEBPACK_IMPORTED_MODULE_2__["default"])(arrayToSubmit);
    });
    newProjectSubmit.addEventListener('click', () => {
        (0,_submitProject__WEBPACK_IMPORTED_MODULE_1__["default"])(arrayToSubmit);
    });

    //Select the element where the form will be attached to
    const newProjectsForm = document.querySelector('.new-projects-form');

    //Attach the form to the previous element
    (0,_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(newProjectsForm, newProjectTitleInput, newProjectSubmit, cancelNewProjectForm);

};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openProjectForm);

/***/ }),

/***/ "./src/openTaskForm.js":
/*!*****************************!*\
  !*** ./src/openTaskForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendChildren */ "./src/appendChildren.js");


//Function to create the form used for new tasks.
//Requires an argument for the element the form will be 
//created in
const openTaskForm = function(elementToAppendTo){

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

    //Create the button elements for the form
    const newTaskSubmitBtn = document.createElement('button');
    const newTaskCancelBtn = document.createElement('button');

    //Assign the button elements with a class name
    newTaskSubmitBtn.className = 'task-input';
    newTaskCancelBtn.className = 'task-input';

    //Insert inner text into the buttons to display use
    newTaskSubmitBtn.innerText = 'Submit';
    newTaskCancelBtn.innerText = 'Cancel';

    //Add event listener to cancel and remove the form from 
    //the DOM
    newTaskCancelBtn.addEventListener('click', removeTaskForm)

    //Append the field elements to the given container element
    ;(0,_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(elementToAppendTo, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput, newTaskSubmitBtn, newTaskCancelBtn);

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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openTaskForm);

/***/ }),

/***/ "./src/renderProject.js":
/*!******************************!*\
  !*** ./src/renderProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendChildren */ "./src/appendChildren.js");
/* harmony import */ var _addTaskBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskBtn */ "./src/addTaskBtn.js");



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
        (0,_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(projectElement, projectTitle, projectDate)


        //Append the div to the given container
        container.appendChild(projectElement);

        //Render the Add Task Button
        (0,_addTaskBtn__WEBPACK_IMPORTED_MODULE_1__["default"])(projectElement);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProject);

/***/ }),

/***/ "./src/renderProjectBtn.js":
/*!*********************************!*\
  !*** ./src/renderProjectBtn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _openProjectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openProjectForm */ "./src/openProjectForm.js");


const renderNewProjectBtn = function(projectArray){
    const newProjectBtn = document.createElement('button');
    newProjectBtn.innerText = 'New Project';
    newProjectBtn.id = 'new-project-button';

    //Add the event listener back to the "New Project" button
    newProjectBtn.addEventListener('click', (e) => {
        (0,_openProjectForm__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray);
        e.target.remove();
    });

    //Append the button back to the correct div
    const buttonContainer = document.querySelector('.new-projects-form');
    buttonContainer.appendChild(newProjectBtn);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNewProjectBtn);

/***/ }),

/***/ "./src/submitProject.js":
/*!******************************!*\
  !*** ./src/submitProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");
/* harmony import */ var _closeProjectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closeProjectForm */ "./src/closeProjectForm.js");




//Function to create and add a new Project to a given projectsList
const submitNewProject = function(projectsList){
    //Select the title input element for the project form
    const newProjectTitleInput = document.querySelector('.new-project-title-input');

    //Assign the value entered into the title element to a variable
    const newProjectTitle = newProjectTitleInput.value;    

    //Create a new project with the given title, date and projectsList
    //to store it
    const newProject = new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"](newProjectTitle, 2023,projectsList);

    //Add the project to the given projects List
    newProject.addProject();

    //Render the projects in the projects list into the given container
    (0,_renderProject__WEBPACK_IMPORTED_MODULE_1__["default"])(projectsList, document.querySelector('.projects-container'));

    //Close the project form
    (0,_closeProjectForm__WEBPACK_IMPORTED_MODULE_2__["default"])(projectsList);

    //Re-Render the "New Project" button for use again.
    /*const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.addEventListener('click', openProjectForm);*/
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitNewProject);

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
/* harmony import */ var _openProjectForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openProjectForm.js */ "./src/openProjectForm.js");



const projectsList = [];

//Add functionality to the "New Project" button, which will 
//open a form, allowing the user to input their project 
//information
const newProjectBtn = document.querySelector('#new-project-button');
newProjectBtn.addEventListener('click', (e) => {
    (0,_openProjectForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectsList);
    e.target.remove();
});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTG1EOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBZTtBQUNuQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2FkZFRhc2tCdG4uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9hcHBlbmRDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2Nsb3NlUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3kvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL29wZW5Qcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL29wZW5UYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3JlbmRlclByb2plY3QuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9yZW5kZXJQcm9qZWN0QnRuLmpzIiwid2VicGFjazovL3kvLi9zcmMvc3VibWl0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly95L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb3BlblRhc2tGb3JtIGZyb20gXCIuL29wZW5UYXNrRm9ybVwiO1xuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgb3VyIFwiQWRkIFRhc2sgQnV0dG9uXCIgZ2l2ZW4gYSBwYXJlbnQgZWxlbWVudFxuLy90byBhcHBlbmQgdG8uXG5jb25zdCBjcmVhdGVBZGRUYXNrQnRuID0gZnVuY3Rpb24oZWxlbWVudFRvQXBwZW5kVG8pe1xuICAgIC8vQ3JlYXRlIHRoZSBidXR0b24gZWxlbWVudCB3aXRoIHRleHQuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdG4uaW5uZXJUZXh0ID0gJ0FkZCBUYXNrJztcblxuICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uIHdoaWNoIG9wZW5zIHRoZSBcbiAgICAvL1wiVGFzayBGb3JtXCIgb24gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZ2l2ZW4uXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgb3BlblRhc2tGb3JtKGVsZW1lbnRUb0FwcGVuZFRvKVxuICAgIH0pXG5cbiAgICAvL0FwcGVuZCB0aGUgYnV0dG9uIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgIGVsZW1lbnRUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkVGFza0J0biIsIi8vRnVuY3Rpb24gdG8gaGVscCBhcHBlbmQgbXVsdGlwbGUgY2hpbGRyZW4gYXQgb25jZSB0byBhIHBhcmVudFxuLy9lbGVtZW50XG5jb25zdCBhcHBlbmRDaGlsZHJlbiA9IGZ1bmN0aW9uKHBhcmVudCwgLi4uY2hpbGRyZW4peyBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5baV0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZENoaWxkcmVuIiwiaW1wb3J0IHJlbmRlck5ld1Byb2plY3RCdG4gZnJvbSBcIi4vcmVuZGVyUHJvamVjdEJ0blwiO1xuXG4vL0EgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIGZvcm0gdGhhdCB3aWxsIGJlIHVzZWQgaW4gb3RoZXIgXG4vL2Z1bmN0aW9ucyB3aXRoaW4gdGhpcyBtb2R1bGVcbmNvbnN0IGNsb3NlUHJvamVjdEZvcm0gPSBmdW5jdGlvbihwcm9qZWN0c0xpc3Qpe1xuICAgIC8vU2VsZWN0IHRoZSBmb3JtIGlucHV0IGZpZWxkc1xuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1zdWJtaXQnKTtcbiAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtbmV3LXByb2plY3QnKTtcblxuICAgIC8vUmVtb3ZlIHRoZSBmb3JtIGlucHV0IGZpZWxkc1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LnJlbW92ZSgpO1xuICAgIG5ld1Byb2plY3RTdWJtaXQucmVtb3ZlKCk7XG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0ucmVtb3ZlKCk7XG5cbiAgICAvL1JlLVJlbmRlciB0aGUgXCJOZXcgUHJvamVjdFwiIGJ1dHRvbiBmb3IgdXNlIGFnYWluXG4gICAgcmVuZGVyTmV3UHJvamVjdEJ0bihwcm9qZWN0c0xpc3QpO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbG9zZVByb2plY3RGb3JtIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG4vL0EgY2xhc3MgY29uc3RydWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgbmV3IHByb2plY3RzXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSwgYXJyYXkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KCl7XG4gICAgICAgIHRoaXMuYXJyYXkucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KCl7XG4gICAgICAgIHRoaXMuYXJyYXkuc3BsaWNlKHRoaXMuYXJyYXkuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrTmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpe1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpO1xuICAgICAgICB0aGlzW3Rhc2tOYW1lXSA9IHRhc2s7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayhrZXkpe1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCIvL1RoaXMgaXMgdGhlIGNsYXNzIGNvbnN0cnVjdG9yIGZvciBvdXIgVGFza3NcbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlID0gZmFsc2Upe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGFza1wiO1xuICAgIH07IFxuXG4gICAgY2hhbmdlQ29tcGxldGVTdGF0dXMoKXtcbiAgICAgICAgaWYodGhpcy5jb21wbGV0ZSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4vYXBwZW5kQ2hpbGRyZW5cIjtcbmltcG9ydCBzdWJtaXROZXdQcm9qZWN0IGZyb20gXCIuL3N1Ym1pdFByb2plY3RcIjtcbmltcG9ydCBjbG9zZVByb2plY3RGb3JtIGZyb20gXCIuL2Nsb3NlUHJvamVjdEZvcm1cIjtcblxuLy9UaGlzIGZ1bmN0aW9uIHdpbGwgb3BlbiBhIHByb2plY3QgZm9ybSBhbGxvd2luZyB1c2VyIHRvIFxuLy9lbnRlciB0aGVpciBwcm9qZWN0IGlucHV0XG5jb25zdCBvcGVuUHJvamVjdEZvcm0gPSBmdW5jdGlvbihhcnJheVRvU3VibWl0KXtcblxuICAgIC8vQ3JlYXRlIHRoZSBmaWVsZCBlbGVtZW50cyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbE5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAvL0FkZCB0aGUgaW5uZXIgdGV4dCB0byB0aGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgbmV3UHJvamVjdFN1Ym1pdC5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5pbm5lclRleHQgPSAnQ2FuY2VsJztcbiAgICBcbiAgICAvL0Fzc2lnbiBjbGFzc2VzIHRvIHRoZSBlbGVtZW50c1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LmNsYXNzTmFtZSA9ICduZXctcHJvamVjdC10aXRsZS1pbnB1dCc7XG4gICAgbmV3UHJvamVjdFN1Ym1pdC5jbGFzc05hbWUgPSAnbmV3LXByb2plY3Qtc3VibWl0JztcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5jbGFzc05hbWUgPSAnY2FuY2VsLW5ldy1wcm9qZWN0JztcblxuICAgIC8vQWRkIHRoZSByZWxhdGl2ZSBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbiBlbGVtZW50c1xuICAgIGNhbmNlbE5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKGFycmF5VG9TdWJtaXQpO1xuICAgIH0pO1xuICAgIG5ld1Byb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN1Ym1pdE5ld1Byb2plY3QoYXJyYXlUb1N1Ym1pdCk7XG4gICAgfSk7XG5cbiAgICAvL1NlbGVjdCB0aGUgZWxlbWVudCB3aGVyZSB0aGUgZm9ybSB3aWxsIGJlIGF0dGFjaGVkIHRvXG4gICAgY29uc3QgbmV3UHJvamVjdHNGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0cy1mb3JtJyk7XG5cbiAgICAvL0F0dGFjaCB0aGUgZm9ybSB0byB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgIGFwcGVuZENoaWxkcmVuKG5ld1Byb2plY3RzRm9ybSwgbmV3UHJvamVjdFRpdGxlSW5wdXQsIG5ld1Byb2plY3RTdWJtaXQsIGNhbmNlbE5ld1Byb2plY3RGb3JtKTtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBvcGVuUHJvamVjdEZvcm07IiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuL2FwcGVuZENoaWxkcmVuXCI7XG5cbi8vRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmb3JtIHVzZWQgZm9yIG5ldyB0YXNrcy5cbi8vUmVxdWlyZXMgYW4gYXJndW1lbnQgZm9yIHRoZSBlbGVtZW50IHRoZSBmb3JtIHdpbGwgYmUgXG4vL2NyZWF0ZWQgaW5cbmNvbnN0IG9wZW5UYXNrRm9ybSA9IGZ1bmN0aW9uKGVsZW1lbnRUb0FwcGVuZFRvKXtcblxuICAgIC8vQ3JlYXRlIGFsbCBvZiB0aGUgZmllbGQgZWxlbWVudHMgcmVxdWlyZWQgZm9yIGEgdGFza1xuICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgLy9Bc3NpZ24gYWxsIG9mIHRoZSBmaWVsZCBlbGVtZW50cyBhIGNsYXNzIG5hbWVcbiAgICB0YXNrVGl0bGVJbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcblxuICAgIC8vQ3JlYXRlIHRoZSBidXR0b24gZWxlbWVudHMgZm9yIHRoZSBmb3JtXG4gICAgY29uc3QgbmV3VGFza1N1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5ld1Rhc2tDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vQXNzaWduIHRoZSBidXR0b24gZWxlbWVudHMgd2l0aCBhIGNsYXNzIG5hbWVcbiAgICBuZXdUYXNrU3VibWl0QnRuLmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcblxuICAgIC8vSW5zZXJ0IGlubmVyIHRleHQgaW50byB0aGUgYnV0dG9ucyB0byBkaXNwbGF5IHVzZVxuICAgIG5ld1Rhc2tTdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNhbmNlbCBhbmQgcmVtb3ZlIHRoZSBmb3JtIGZyb20gXG4gICAgLy90aGUgRE9NXG4gICAgbmV3VGFza0NhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRhc2tGb3JtKVxuXG4gICAgLy9BcHBlbmQgdGhlIGZpZWxkIGVsZW1lbnRzIHRvIHRoZSBnaXZlbiBjb250YWluZXIgZWxlbWVudFxuICAgIGFwcGVuZENoaWxkcmVuKGVsZW1lbnRUb0FwcGVuZFRvLCB0YXNrVGl0bGVJbnB1dCwgdGFza0Rlc2NyaXB0aW9uSW5wdXQsIHRhc2tEdWVEYXRlSW5wdXQsIHRhc2tQcmlvcml0eUlucHV0LCBuZXdUYXNrU3VibWl0QnRuLCBuZXdUYXNrQ2FuY2VsQnRuKTtcblxufTtcblxuLy9GdW5jdGlvbiB0aGF0IHJlbW92ZXMgYWxsIG9mIHRoZSBmb3JtIGVsZW1lbnRzIGZyb20gdGhlIERPTVxuY29uc3QgcmVtb3ZlVGFza0Zvcm0gPSBmdW5jdGlvbigpe1xuICAgIC8vU2VsZWN0IGFsbCBvZiB0aGUgZm9ybSBlbGVtZW50cyB1c2luZyB0aGVpciBjbGFzcyBuYW1lXG4gICAgY29uc3QgdGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWlucHV0Jyk7XG5cbiAgICAvL0ZvciBldmVyeSBmaWVsZCBpbnB1dCBpbiB0aGUgbGlzdCBvZiBmaWVsZCBpbnB1dHNcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0lucHV0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vUmVtb3ZlIHRoZSBmaWVsZCBpbnB1dFxuICAgICAgICB0YXNrSW5wdXRzW2ldLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlblRhc2tGb3JtOyIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi9hcHBlbmRDaGlsZHJlblwiO1xuaW1wb3J0IGNyZWF0ZUFkZFRhc2tCdG4gZnJvbSBcIi4vYWRkVGFza0J0blwiO1xuXG4vL0Z1bmN0aW9uIHRoYXQgcmVuZGVycyB0aGUgcHJvamVjdCBpbnRvIHRoZSBET00gdG8gYmUgXG4vL2Rpc3BsYXllZCBvbiB0aGUgcGFnZVxuY29uc3QgcmVuZGVyUHJvamVjdCA9IGZ1bmN0aW9uKGFycmF5LCBjb250YWluZXIpe1xuICAgIFxuICAgIC8vQ2xlYXIgdGhlIERPTSBiZWZvcmUgcmVuZGVyaW5nIGFnYWluXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgLy9Mb29wIHRocm91Z2ggdGhlIGdpdmVuIGFycmF5XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy9Jbml0aWFsaXNlIG91ciB2YXJpYWJsZXMgdXNlZCB0aHJvdWdob3V0IHRoZSBmdW5jdGlvblxuICAgICAgICBsZXQgcHJvamVjdCA9IGFycmF5W2ldO1xuICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGxldCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAvL1NldCBpbm5lciB0ZXh0IG9mIHRoZSBlbGVtZW50cyB0byB0aGUgdmFsdWVzIGluc2lkZVxuICAgICAgICAvL29mIHRoZSBnaXZlbiBvYmplY3RzXG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBwcm9qZWN0RGF0ZS5pbm5lclRleHQgPSBwcm9qZWN0LmRhdGU7XG5cbiAgICAgICAgLy9HaXZlIHRoZSBwcm9qZWN0IGVsZW1lbnRzIGNsYXNzIG5hbWVzIGZvciBmdXR1cmUgc3R5bGluZ1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc05hbWUgPSAnaW5kaXYtcHJvamVjdC1jb250YWluZXJzJztcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXRpdGxlcyc7XG4gICAgICAgIHByb2plY3REYXRlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWRhdGVzJztcblxuICAgICAgICAvL0FwcGVuZCB0aGUgY2hpbGQgZWxlbWVudHMgdG8gdGhlaXIgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocHJvamVjdEVsZW1lbnQsIHByb2plY3RUaXRsZSwgcHJvamVjdERhdGUpXG5cblxuICAgICAgICAvL0FwcGVuZCB0aGUgZGl2IHRvIHRoZSBnaXZlbiBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcblxuICAgICAgICAvL1JlbmRlciB0aGUgQWRkIFRhc2sgQnV0dG9uXG4gICAgICAgIGNyZWF0ZUFkZFRhc2tCdG4ocHJvamVjdEVsZW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUHJvamVjdDsiLCJpbXBvcnQgb3BlblByb2plY3RGb3JtIGZyb20gXCIuL29wZW5Qcm9qZWN0Rm9ybVwiO1xuXG5jb25zdCByZW5kZXJOZXdQcm9qZWN0QnRuID0gZnVuY3Rpb24ocHJvamVjdEFycmF5KXtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdEJ0bi5pbm5lclRleHQgPSAnTmV3IFByb2plY3QnO1xuICAgIG5ld1Byb2plY3RCdG4uaWQgPSAnbmV3LXByb2plY3QtYnV0dG9uJztcblxuICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciBiYWNrIHRvIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uXG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG9wZW5Qcm9qZWN0Rm9ybShwcm9qZWN0QXJyYXkpO1xuICAgICAgICBlLnRhcmdldC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIC8vQXBwZW5kIHRoZSBidXR0b24gYmFjayB0byB0aGUgY29ycmVjdCBkaXZcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3RzLWZvcm0nKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJOZXdQcm9qZWN0QnRuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHJlbmRlclByb2plY3QgZnJvbSBcIi4vcmVuZGVyUHJvamVjdFwiO1xuaW1wb3J0IGNsb3NlUHJvamVjdEZvcm0gZnJvbSBcIi4vY2xvc2VQcm9qZWN0Rm9ybVwiO1xuXG4vL0Z1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgYWRkIGEgbmV3IFByb2plY3QgdG8gYSBnaXZlbiBwcm9qZWN0c0xpc3RcbmNvbnN0IHN1Ym1pdE5ld1Byb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0c0xpc3Qpe1xuICAgIC8vU2VsZWN0IHRoZSB0aXRsZSBpbnB1dCBlbGVtZW50IGZvciB0aGUgcHJvamVjdCBmb3JtXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtdGl0bGUtaW5wdXQnKTtcblxuICAgIC8vQXNzaWduIHRoZSB2YWx1ZSBlbnRlcmVkIGludG8gdGhlIHRpdGxlIGVsZW1lbnQgdG8gYSB2YXJpYWJsZVxuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlOyAgICBcblxuICAgIC8vQ3JlYXRlIGEgbmV3IHByb2plY3Qgd2l0aCB0aGUgZ2l2ZW4gdGl0bGUsIGRhdGUgYW5kIHByb2plY3RzTGlzdFxuICAgIC8vdG8gc3RvcmUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdFRpdGxlLCAyMDIzLHByb2plY3RzTGlzdCk7XG5cbiAgICAvL0FkZCB0aGUgcHJvamVjdCB0byB0aGUgZ2l2ZW4gcHJvamVjdHMgTGlzdFxuICAgIG5ld1Byb2plY3QuYWRkUHJvamVjdCgpO1xuXG4gICAgLy9SZW5kZXIgdGhlIHByb2plY3RzIGluIHRoZSBwcm9qZWN0cyBsaXN0IGludG8gdGhlIGdpdmVuIGNvbnRhaW5lclxuICAgIHJlbmRlclByb2plY3QocHJvamVjdHNMaXN0LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJykpO1xuXG4gICAgLy9DbG9zZSB0aGUgcHJvamVjdCBmb3JtXG4gICAgY2xvc2VQcm9qZWN0Rm9ybShwcm9qZWN0c0xpc3QpO1xuXG4gICAgLy9SZS1SZW5kZXIgdGhlIFwiTmV3IFByb2plY3RcIiBidXR0b24gZm9yIHVzZSBhZ2Fpbi5cbiAgICAvKmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0Rm9ybSk7Ki9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdE5ld1Byb2plY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCBvcGVuUHJvamVjdEZvcm0gZnJvbSBcIi4vb3BlblByb2plY3RGb3JtLmpzXCI7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG4vL0FkZCBmdW5jdGlvbmFsaXR5IHRvIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uLCB3aGljaCB3aWxsIFxuLy9vcGVuIGEgZm9ybSwgYWxsb3dpbmcgdGhlIHVzZXIgdG8gaW5wdXQgdGhlaXIgcHJvamVjdCBcbi8vaW5mb3JtYXRpb25cbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtYnV0dG9uJyk7XG5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBvcGVuUHJvamVjdEZvcm0ocHJvamVjdHNMaXN0KTtcbiAgICBlLnRhcmdldC5yZW1vdmUoKTtcbn0pO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==