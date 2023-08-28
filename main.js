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

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");


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
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");





const openProjectField = function(arrayToSubmit){
    
    tempRemoveNewProjectBtn();
    
    const newProjectTitleInput = document.createElement('input');
    const newProjectSubmit = document.createElement('button');
    const cancelNewProjectForm = document.createElement('button');

    newProjectSubmit.innerText = 'Submit';
    cancelNewProjectForm.innerText = 'Cancel';
    
    newProjectTitleInput.className = 'new-project-title-input';
    newProjectSubmit.className = 'new-project-submit';
    cancelNewProjectForm.className = 'cancel-new-project';

    cancelNewProjectForm.addEventListener('click', closeProjectForm);
    newProjectSubmit.addEventListener('click', () => {
        submitNewProject(arrayToSubmit);
    });

    const newProjectsForm = document.querySelector('.new-projects-form');

    (0,_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(newProjectsForm, newProjectTitleInput, newProjectSubmit, cancelNewProjectForm);

};

const closeProjectForm = function(){
    const newProjectTitleInput = document.querySelector('.new-project-title-input');
    const newProjectSubmit = document.querySelector('.new-project-submit');
    const cancelNewProjectForm = document.querySelector('.cancel-new-project');

    newProjectTitleInput.remove();
    newProjectSubmit.remove();
    cancelNewProjectForm.remove();

    const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.addEventListener('click', openProjectField);

};

const submitNewProject = function(array){
    const newProjectTitleInput = document.querySelector('.new-project-title-input');
    const newProjectTitle = newProjectTitleInput.value;    
    const newProject = new _newProject__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectTitle, 2023,array);
    console.log(newProject);
    newProject.addProject();
    console.log(array)
    
    ;(0,_renderProject__WEBPACK_IMPORTED_MODULE_2__["default"])(array, document.querySelector('.projects-container'));

    closeProjectForm();

    const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.addEventListener('click', openProjectField);
};

const tempRemoveNewProjectBtn = function(){
    const newProjectBtn = document.querySelector('#new-project-button');
    newProjectBtn.removeEventListener('click', openProjectField);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openProjectField);

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


const openTaskForm = function(elementToAppendTo){
    const taskTitleInput = document.createElement('input');
    const taskDescriptionInput = document.createElement('input');
    const taskDueDateInput = document.createElement('input');
    const taskPriorityInput = document.createElement('input');

    taskTitleInput.className = 'task-input';
    taskDescriptionInput.className = 'task-input';
    taskDueDateInput.className = 'task-input';
    taskPriorityInput.className = 'task-input';
    
    const newTaskSubmitBtn = document.createElement('button');
    const newTaskCancelBtn = document.createElement('button');

    newTaskSubmitBtn.className = 'task-input';
    newTaskCancelBtn.className = 'task-input';

    newTaskSubmitBtn.innerText = 'Submit';
    newTaskCancelBtn.innerText = 'Cancel';

    newTaskCancelBtn.addEventListener('click', removeTaskForm)

    ;(0,_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(elementToAppendTo, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput, newTaskSubmitBtn, newTaskCancelBtn);

};

const removeTaskForm = function(){
    const taskInputs = document.querySelectorAll('.task-input');
    for(let i = 0; i < taskInputs.length; i++){
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

const newProjectBtn = document.querySelector('#new-project-button');
newProjectBtn.addEventListener('click', () => {
    (0,_openProjectForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectsList);
    console.log(projectsList);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlEQUFZO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ25CZjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNSZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtREFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0J3QjtBQUNYO0FBQ1M7OztBQUc1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxJQUFJLDJEQUFjOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFhOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7QUNsRWU7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLElBQUksNERBQWM7O0FBRWxCOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNtQjtBQUNGOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkRBQWM7OztBQUd0QjtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1REFBZ0I7QUFDeEI7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7VUN0QzVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTG1EOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwrREFBZTtBQUNuQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2FkZFRhc2tCdG4uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9hcHBlbmRDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3kvLi9zcmMvb3BlblByb2plY3RGb3JtLmpzIiwid2VicGFjazovL3kvLi9zcmMvb3BlblRhc2tGb3JtLmpzIiwid2VicGFjazovL3kvLi9zcmMvcmVuZGVyUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb3BlblRhc2tGb3JtIGZyb20gXCIuL29wZW5UYXNrRm9ybVwiO1xuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgb3VyIFwiQWRkIFRhc2sgQnV0dG9uXCIgZ2l2ZW4gYSBwYXJlbnQgZWxlbWVudFxuLy90byBhcHBlbmQgdG8uXG5jb25zdCBjcmVhdGVBZGRUYXNrQnRuID0gZnVuY3Rpb24oZWxlbWVudFRvQXBwZW5kVG8pe1xuICAgIC8vQ3JlYXRlIHRoZSBidXR0b24gZWxlbWVudCB3aXRoIHRleHQuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdG4uaW5uZXJUZXh0ID0gJ0FkZCBUYXNrJztcblxuICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uIHdoaWNoIG9wZW5zIHRoZSBcbiAgICAvL1wiVGFzayBGb3JtXCIgb24gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZ2l2ZW4uXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgb3BlblRhc2tGb3JtKGVsZW1lbnRUb0FwcGVuZFRvKVxuICAgIH0pXG5cbiAgICAvL0FwcGVuZCB0aGUgYnV0dG9uIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgIGVsZW1lbnRUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkVGFza0J0biIsIi8vRnVuY3Rpb24gdG8gaGVscCBhcHBlbmQgbXVsdGlwbGUgY2hpbGRyZW4gYXQgb25jZSB0byBhIHBhcmVudFxuLy9lbGVtZW50XG5jb25zdCBhcHBlbmRDaGlsZHJlbiA9IGZ1bmN0aW9uKHBhcmVudCwgLi4uY2hpbGRyZW4peyBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5baV0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZENoaWxkcmVuIiwiLy9UaGlzIGlzIHRoZSBjbGFzcyBjb25zdHJ1Y3RvciBmb3Igb3VyIFRhc2tzXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSA9IGZhbHNlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRhc2tcIjtcbiAgICB9OyBcblxuICAgIGNoYW5nZUNvbXBsZXRlU3RhdHVzKCl7XG4gICAgICAgIGlmKHRoaXMuY29tcGxldGUgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSwgYXJyYXkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KCl7XG4gICAgICAgIHRoaXMuYXJyYXkucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KCl7XG4gICAgICAgIHRoaXMuYXJyYXkuc3BsaWNlKHRoaXMuYXJyYXkuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrTmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpe1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpO1xuICAgICAgICB0aGlzW3Rhc2tOYW1lXSA9IHRhc2s7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayhrZXkpe1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4vYXBwZW5kQ2hpbGRyZW5cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0IGZyb20gXCIuL3JlbmRlclByb2plY3RcIjtcblxuXG5jb25zdCBvcGVuUHJvamVjdEZpZWxkID0gZnVuY3Rpb24oYXJyYXlUb1N1Ym1pdCl7XG4gICAgXG4gICAgdGVtcFJlbW92ZU5ld1Byb2plY3RCdG4oKTtcbiAgICBcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbE5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBuZXdQcm9qZWN0U3VibWl0LmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAgIGNhbmNlbE5ld1Byb2plY3RGb3JtLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuICAgIFxuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LmNsYXNzTmFtZSA9ICduZXctcHJvamVjdC10aXRsZS1pbnB1dCc7XG4gICAgbmV3UHJvamVjdFN1Ym1pdC5jbGFzc05hbWUgPSAnbmV3LXByb2plY3Qtc3VibWl0JztcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5jbGFzc05hbWUgPSAnY2FuY2VsLW5ldy1wcm9qZWN0JztcblxuICAgIGNhbmNlbE5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0Rm9ybSk7XG4gICAgbmV3UHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3VibWl0TmV3UHJvamVjdChhcnJheVRvU3VibWl0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdHMtZm9ybScpO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4obmV3UHJvamVjdHNGb3JtLCBuZXdQcm9qZWN0VGl0bGVJbnB1dCwgbmV3UHJvamVjdFN1Ym1pdCwgY2FuY2VsTmV3UHJvamVjdEZvcm0pO1xuXG59O1xuXG5jb25zdCBjbG9zZVByb2plY3RGb3JtID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC10aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3Qtc3VibWl0Jyk7XG4gICAgY29uc3QgY2FuY2VsTmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLW5ldy1wcm9qZWN0Jyk7XG5cbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC5yZW1vdmUoKTtcbiAgICBuZXdQcm9qZWN0U3VibWl0LnJlbW92ZSgpO1xuICAgIGNhbmNlbE5ld1Byb2plY3RGb3JtLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1idXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3RGaWVsZCk7XG5cbn07XG5cbmNvbnN0IHN1Ym1pdE5ld1Byb2plY3QgPSBmdW5jdGlvbihhcnJheSl7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtdGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTsgICAgXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSwgMjAyMyxhcnJheSk7XG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4gICAgbmV3UHJvamVjdC5hZGRQcm9qZWN0KCk7XG4gICAgY29uc29sZS5sb2coYXJyYXkpXG4gICAgXG4gICAgcmVuZGVyUHJvamVjdChhcnJheSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpKTtcblxuICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0RmllbGQpO1xufTtcblxuY29uc3QgdGVtcFJlbW92ZU5ld1Byb2plY3RCdG4gPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0RmllbGQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvcGVuUHJvamVjdEZpZWxkOyIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi9hcHBlbmRDaGlsZHJlblwiO1xuXG5jb25zdCBvcGVuVGFza0Zvcm0gPSBmdW5jdGlvbihlbGVtZW50VG9BcHBlbmRUbyl7XG4gICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICB0YXNrVGl0bGVJbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICBcbiAgICBjb25zdCBuZXdUYXNrU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3VGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbmV3VGFza1N1Ym1pdEJ0bi5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG5cbiAgICBuZXdUYXNrU3VibWl0QnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVGFza0Zvcm0pXG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbGVtZW50VG9BcHBlbmRUbywgdGFza1RpdGxlSW5wdXQsIHRhc2tEZXNjcmlwdGlvbklucHV0LCB0YXNrRHVlRGF0ZUlucHV0LCB0YXNrUHJpb3JpdHlJbnB1dCwgbmV3VGFza1N1Ym1pdEJ0biwgbmV3VGFza0NhbmNlbEJ0bik7XG5cbn07XG5cbmNvbnN0IHJlbW92ZVRhc2tGb3JtID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2staW5wdXQnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0lucHV0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRhc2tJbnB1dHNbaV0ucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBvcGVuVGFza0Zvcm07IiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuL2FwcGVuZENoaWxkcmVuXCI7XG5pbXBvcnQgY3JlYXRlQWRkVGFza0J0biBmcm9tIFwiLi9hZGRUYXNrQnRuXCI7XG5cbmNvbnN0IHJlbmRlclByb2plY3QgPSBmdW5jdGlvbihhcnJheSwgY29udGFpbmVyKXtcbiAgICBcbiAgICAvL0NsZWFyIHRoZSBET00gYmVmb3JlIHJlbmRlcmluZyBhZ2FpblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vTG9vcCB0aHJvdWdoIHRoZSBnaXZlbiBhcnJheVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vSW5pdGlhbGlzZSBvdXIgdmFyaWFibGVzIHVzZWQgdGhyb3VnaG91dCB0aGUgZnVuY3Rpb25cbiAgICAgICAgbGV0IHByb2plY3QgPSBhcnJheVtpXTtcbiAgICAgICAgbGV0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBsZXQgcHJvamVjdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgLy9TZXQgaW5uZXIgdGV4dCBvZiB0aGUgZWxlbWVudHMgdG8gdGhlIHZhbHVlcyBpbnNpZGVcbiAgICAgICAgLy9vZiB0aGUgZ2l2ZW4gb2JqZWN0c1xuICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgcHJvamVjdERhdGUuaW5uZXJUZXh0ID0gcHJvamVjdC5kYXRlO1xuXG4gICAgICAgIC8vR2l2ZSB0aGUgcHJvamVjdCBlbGVtZW50cyBjbGFzcyBuYW1lcyBmb3IgZnV0dXJlIHN0eWxpbmdcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NOYW1lID0gJ2luZGl2LXByb2plY3QtY29udGFpbmVycyc7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC10aXRsZXMnO1xuICAgICAgICBwcm9qZWN0RGF0ZS5jbGFzc05hbWUgPSAncHJvamVjdC1kYXRlcyc7XG5cbiAgICAgICAgLy9BcHBlbmQgdGhlIGNoaWxkIGVsZW1lbnRzIHRvIHRoZWlyIHBhcmVudCBlbGVtZW50XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHByb2plY3RFbGVtZW50LCBwcm9qZWN0VGl0bGUsIHByb2plY3REYXRlKVxuXG5cbiAgICAgICAgLy9BcHBlbmQgdGhlIGRpdiB0byB0aGUgZ2l2ZW4gY29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG5cbiAgICAgICAgLy9SZW5kZXIgdGhlIEFkZCBUYXNrIEJ1dHRvblxuICAgICAgICBjcmVhdGVBZGRUYXNrQnRuKHByb2plY3RFbGVtZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclByb2plY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCBvcGVuUHJvamVjdEZvcm0gZnJvbSBcIi4vb3BlblByb2plY3RGb3JtLmpzXCI7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LWJ1dHRvbicpO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuUHJvamVjdEZvcm0ocHJvamVjdHNMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0xpc3QpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=