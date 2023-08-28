/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appendChildren.js":
/*!*******************************!*\
  !*** ./src/appendChildren.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Function to help append multiple children at once to a parent\n//element\nconst appendChildren = function(parent, ...children){ \n    for(let i = 0; i < children.length; i++){\n        parent.appendChild(children[i]);\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendChildren);\n\n//# sourceURL=webpack://y/./src/appendChildren.js?");

/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ToDo {\n    constructor(title, description, dueDate, priority, complete = false){\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.complete = complete;\n        this.type = \"ToDo\";\n    }; \n\n    changeCompleteStatus(){\n        if(this.complete === false){\n            this.complete = true;\n        } else{\n            this.complete = false;\n        };\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\n\n//# sourceURL=webpack://y/./src/createToDo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openProjectField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openProjectField.js */ \"./src/openProjectField.js\");\n\n\n\nconst projectsList = [];\n\nconst newProjectBtn = document.querySelector('#new-project-button');\nnewProjectBtn.addEventListener('click', () => {\n    (0,_openProjectField_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectsList);\n    console.log(projectsList);\n});\n\n\n//# sourceURL=webpack://y/./src/index.js?");

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n\n\nclass Project {\n    constructor(title, date, array){\n        this.title = title;\n        this.date = date;\n        this.array = array;\n    }\n\n    addProject(){\n        this.array.push(this);\n    }\n\n    removeProject(){\n        this.array.splice(this.array.indexOf(this), 1);\n    }\n\n    addToDo(toDoName, title, description, dueDate, priority, complete){\n        const toDo = new _createToDo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, complete);\n        this[toDoName] = toDo;\n    }\n\n    removeToDo(key){\n        delete this[key];\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://y/./src/newProject.js?");

/***/ }),

/***/ "./src/openProjectField.js":
/*!*********************************!*\
  !*** ./src/openProjectField.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendChildren */ \"./src/appendChildren.js\");\n/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ \"./src/newProject.js\");\n/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProject */ \"./src/renderProject.js\");\n\n\n\n\n\nconst openProjectField = function(arrayToSubmit){\n    \n    tempRemoveNewProjectBtn();\n    \n    const newProjectTitleInput = document.createElement('input');\n    const newProjectSubmit = document.createElement('button');\n    const cancelNewProjectForm = document.createElement('button');\n\n    newProjectSubmit.innerText = 'Submit';\n    cancelNewProjectForm.innerText = 'Cancel';\n    \n    newProjectTitleInput.className = 'new-project-title-input';\n    newProjectSubmit.className = 'new-project-submit';\n    cancelNewProjectForm.className = 'cancel-new-project';\n\n    cancelNewProjectForm.addEventListener('click', closeProjectForm);\n    newProjectSubmit.addEventListener('click', () => {\n        submitNewProject(arrayToSubmit);\n    });\n\n    const newProjectsForm = document.querySelector('.new-projects-form');\n\n    (0,_appendChildren__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newProjectsForm, newProjectTitleInput, newProjectSubmit, cancelNewProjectForm);\n\n};\n\nconst closeProjectForm = function(){\n    const newProjectTitleInput = document.querySelector('.new-project-title-input');\n    const newProjectSubmit = document.querySelector('.new-project-submit');\n    const cancelNewProjectForm = document.querySelector('.cancel-new-project');\n\n    newProjectTitleInput.remove();\n    newProjectSubmit.remove();\n    cancelNewProjectForm.remove();\n\n    const newProjectBtn = document.querySelector('#new-project-button');\n    newProjectBtn.addEventListener('click', openProjectField);\n\n};\n\nconst submitNewProject = function(array){\n    const newProjectTitleInput = document.querySelector('.new-project-title-input');\n    const newProjectTitle = newProjectTitleInput.value;    \n    const newProject = new _newProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newProjectTitle, 2023,array);\n    console.log(newProject);\n    newProject.addProject();\n    console.log(array)\n    \n    ;(0,_renderProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(array, document.querySelector('.projects-container'));\n\n    closeProjectForm();\n\n    const newProjectBtn = document.querySelector('#new-project-button');\n    newProjectBtn.addEventListener('click', openProjectField);\n};\n\nconst tempRemoveNewProjectBtn = function(){\n    const newProjectBtn = document.querySelector('#new-project-button');\n    newProjectBtn.removeEventListener('click', openProjectField);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openProjectField);\n\n//# sourceURL=webpack://y/./src/openProjectField.js?");

/***/ }),

/***/ "./src/renderProject.js":
/*!******************************!*\
  !*** ./src/renderProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendChildren */ \"./src/appendChildren.js\");\n\n\nconst renderProject = function(array, container){\n    \n    //Clear the DOM before rendering again\n    container.innerHTML = '';\n\n    //Loop through the given array\n    for(let i = 0; i < array.length; i++){\n        //Initialise our variables used throughout the function\n        let project = array[i];\n        let projectElement = document.createElement('div');\n        let projectTitle = document.createElement('h2');\n        let projectDate = document.createElement('p');\n\n        //Set inner text of the elements to the values inside\n        //of the given objects\n        projectTitle.innerText = project.title;\n        projectDate.innerText = project.date;\n\n        //Give the project elements class names for future styling\n        projectElement.className = 'ind-project-containers';\n        projectTitle.className = 'project-titles';\n        projectDate.className = 'project-dates';\n\n        //Append the child elements to their parent element\n        (0,_appendChildren__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectElement, projectTitle, projectDate)\n\n\n        //Append the div to the given container\n        container.appendChild(projectElement);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProject);\n\n//# sourceURL=webpack://y/./src/renderProject.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;