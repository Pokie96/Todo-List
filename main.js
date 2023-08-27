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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject.js */ \"./src/newProject.js\");\n/* harmony import */ var _renderProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProject.js */ \"./src/renderProject.js\");\n/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createToDo.js */ \"./src/createToDo.js\");\n\n\n\n\nconst ProjectArray = [];\n\nconst project1 = new _newProject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testproject1\", \"testdate\", ProjectArray);\nproject1.addProject();\n\nconst project2 = new _newProject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testproject2\", \"testdate\", ProjectArray);\nproject2.addProject();\n\nconst project3 = new _newProject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testproject3\", \"testdate\", ProjectArray);\nproject3.addProject();\n\nconst project4 = new _newProject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testproject4\", \"testdate\", ProjectArray);\nproject4.addProject();\n\n\nproject1.addToDo('TestToDo1', 'test title', 'test description', 'test due date', 'test priority', false);\n\n(0,_renderProject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ProjectArray, document.querySelector('.projects-container'))\n\n//# sourceURL=webpack://y/./src/index.js?");

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n\n\nclass Project {\n    constructor(title, date, array){\n        this.title = title;\n        this.date = date;\n        this.array = array;\n    }\n\n    addProject(){\n        this.array.push(this);\n    }\n\n    removeProject(){\n        this.array.splice(this.array.indexOf(this), 1);\n    }\n\n    addToDo(toDoName, title, description, dueDate, priority, complete){\n        const toDo = new _createToDo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, complete);\n        this[toDoName] = toDo;\n    }\n\n    removeToDo(key){\n        delete this[key];\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://y/./src/newProject.js?");

/***/ }),

/***/ "./src/renderProject.js":
/*!******************************!*\
  !*** ./src/renderProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderToDos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderToDos */ \"./src/renderToDos.js\");\n\n\nconst renderProject = function(array, container){\n    //Loop through the given array\n    for(let i = 0; i < array.length; i++){\n        //Initialise our variables used throughout the function\n        let project = array[i];\n        let projectElement = document.createElement('div');\n        let projectTitle = document.createElement('h2');\n        let projectDate = document.createElement('p');\n\n        //Set inner text of the elements to the values inside\n        //of the given objects\n        projectTitle.innerText = project.title;\n        projectDate.innerText = project.date;\n\n        //Append the child elements to their parent element\n        projectElement.appendChild(projectTitle);\n        projectElement.appendChild(projectDate);\n\n        //Append the div to the given container\n        container.appendChild(projectElement);\n        container.appendChild((0,_renderToDos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(project))\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProject);\n\n//# sourceURL=webpack://y/./src/renderProject.js?");

/***/ }),

/***/ "./src/renderToDos.js":
/*!****************************!*\
  !*** ./src/renderToDos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n\n\n//Main function to be exported\nconst renderToDos = function(project){\n    //Assign a variable to an array of the key names from each\n    //project.\n    let keyArray = Object.keys(project);\n\n    //Create an element to contain all of the to do properties\n    const toDoContainer = document.createElement('div');\n\n    //Loop through the key arrays to find any to do keys inside \n    //of the projects.\n    for(let i = 0; i < keyArray.length; i++){\n        let currentKey = keyArray[i];\n        if(project[keyArray[i]].type === \"ToDo\"){\n            //Initialize all of the variables that will be \n            //used through the function to their dom elements\n            const title = document.createElement('p');\n            const description = document.createElement('p');\n            const dueDate = document.createElement('p');\n            const priority = document.createElement('p');\n            const complete = document.createElement('p');\n\n            //Append text to elements from their respective \n            //properties\n            title.innerText = project[currentKey].title;\n            description.innerText = project[currentKey].description;\n            dueDate.innerText = project[currentKey].dueDate;\n            priority.innerText = project[currentKey].priority;\n            complete.innerText = project[currentKey].complete;\n\n            //Append all of the new elements to the container\n            //for this to do object\n            appendChildren(toDoContainer, title, description, dueDate, priority, complete);\n\n        } \n    }\n    //Return the container containing all of the to do properties\n    return toDoContainer\n}\n\n//Function to help append multiple children at once to a parent\n//element\nconst appendChildren = function(parent, ...children){ \n    for(let i = 0; i < children.length; i++){\n        parent.appendChild(children[i]);\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderToDos);\n\n//# sourceURL=webpack://y/./src/renderToDos.js?");

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