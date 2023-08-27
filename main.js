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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ToDo {\n    constructor(title, description, dueDate, priority, complete = false){\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.complete = complete;\n    }; \n\n    addToDo(project, keyName){\n        project[keyName] = this;\n    }\n\n    removeToDo(project, key){\n        delete project[key];\n    }\n\n    changeCompleteStatus(){\n        if(this.complete === false){\n            this.complete = true;\n        } else{\n            this.complete = false;\n        };\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\n\n//# sourceURL=webpack://y/./src/createToDo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject.js */ \"./src/newProject.js\");\n/* harmony import */ var _renderProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProject.js */ \"./src/renderProject.js\");\n/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createToDo.js */ \"./src/createToDo.js\");\n\n\n\n\nconst ProjectArray = [];\n\nconst project1 = new _newProject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testproject1\", \"testdate\", ProjectArray);\nproject1.addProject();\n\nconst project2 = new _newProject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testproject2\", \"testdate\", ProjectArray);\nproject2.addProject();\n\nconst project3 = new _newProject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testproject3\", \"testdate\", ProjectArray);\nproject3.addProject();\n\nconst project4 = new _newProject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testproject4\", \"testdate\", ProjectArray);\nproject4.addProject();\n\n(0,_renderProject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ProjectArray, document.querySelector('.projects-container'))\nconsole.log(ProjectArray);\n\nconst testToDo1 = new _createToDo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('TestTitle1', \"TestDescription\", 'TestDate', 'TestPriority', false);\nconst testToDo2 = new _createToDo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('TestTitle2', \"TestDescription\", 'TestDate', 'TestPriority', false);\nconst testToDo3 = new _createToDo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('TestTitle3', \"TestDescription\", 'TestDate', 'TestPriority', false);\nconst testToDo4 = new _createToDo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('TestTitle4', \"TestDescription\", 'TestDate', 'TestPriority', false);\n\ntestToDo1.addToDo(project1, \"ToDo1\");\ntestToDo2.addToDo(project1, \"ToDo2\");\ntestToDo3.addToDo(project1, \"ToDo3\");\ntestToDo4.addToDo(project1, \"ToDo4\");\n\ntestToDo3.removeToDo(project1, \"ToDo3\");\n\ntestToDo1.changeCompleteStatus();\n\n//# sourceURL=webpack://y/./src/index.js?");

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n    constructor(title, date, array){\n        this.title = title;\n        this.date = date;\n        this.array = array;\n    }\n\n    addProject(){\n        this.array.push(this);\n    }\n\n    removeProject(){\n        this.array.splice(this.array.indexOf(this), 1);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://y/./src/newProject.js?");

/***/ }),

/***/ "./src/renderProject.js":
/*!******************************!*\
  !*** ./src/renderProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderProject = function(array, container){\n    //Loop through the given array\n    for(let i = 0; i < array.length; i++){\n        //Initialise our variables used throughout the function\n        let project = array[i];\n        let projectElement = document.createElement('div');\n        let projectTitle = document.createElement('h2');\n        let projectDate = document.createElement('p');\n\n        //Set inner text of the elements to the values inside\n        //of the given objects\n        projectTitle.innerText = project.title;\n        projectDate.innerText = project.date;\n\n        //Append the child elements to their parent element\n        projectElement.appendChild(projectTitle);\n        projectElement.appendChild(projectDate);\n\n        //Append the div to the given container\n        container.appendChild(projectElement);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProject);\n\n//# sourceURL=webpack://y/./src/renderProject.js?");

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