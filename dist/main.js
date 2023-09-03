/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/indexStyle.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/indexStyle.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    margin: 0;
}

body{
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 100px 100px auto 100px;
    height: 100vh;
    width: 100vw;
}

.header{
    grid-column: 1/3;
}

.new-projects-form{
    grid-row: 2/3;
    grid-column: 1/2;
}

.projects-container{
    grid-column: 1/2;
    grid-row: 3/4;
}

.to-do-list-container{
    grid-row: 2/4;
    grid-column: 2/3;
}

.task-wrapper{
    display: flex;
    flex-direction: row;
}`, "",{"version":3,"sources":["webpack://./src/styles/indexStyle.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,0CAA0C;IAC1C,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-template-rows: 100px 100px auto 100px;\n    height: 100vh;\n    width: 100vw;\n}\n\n.header{\n    grid-column: 1/3;\n}\n\n.new-projects-form{\n    grid-row: 2/3;\n    grid-column: 1/2;\n}\n\n.projects-container{\n    grid-column: 1/2;\n    grid-row: 3/4;\n}\n\n.to-do-list-container{\n    grid-row: 2/4;\n    grid-column: 2/3;\n}\n\n.task-wrapper{\n    display: flex;\n    flex-direction: row;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/indexStyle.css":
/*!***********************************!*\
  !*** ./src/styles/indexStyle.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_indexStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./indexStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/indexStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_indexStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_indexStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_indexStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_indexStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
//Contains the classes required for my JavaScript application

//A class constructor that can be used to create new projects
class Project {
    constructor(title, date){
        this.title = title;
        this.date = date;
        this.taskList = [];
    }

    addTask(title, description, dueDate, priority, complete){
        const task = new Task(title, description, dueDate, priority, complete);
        this.taskList.push(task);
    }

    removeTask(task){
        this.taskList.splice(this.taskList.indexOf(task), 1);
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

class Controller {
    static projectsArray = [];

    getProjectsArray(){
        return Controller.projectsArray;
    };

    addProject(project){
        Controller.projectsArray.push(project);
    };

    deleteProject(project){
        Controller.projectsArray.splice(Controller.projectsArray.indexOf(project), 1);
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
/* harmony export */   setActiveProject: () => (/* binding */ setActiveProject),
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

    //Assign a placeholder to the input element
    newProjectTitleInput.setAttribute('placeholder', 'Project Title');
    
    //Assign classes to the elements
    newProjectTitleInput.className = 'new-project-title-input';
    newProjectSubmit.className = 'new-project-submit';
    cancelNewProjectForm.className = 'cancel-new-project';

    //Add the relative event listeners to the button elements
    cancelNewProjectForm.addEventListener('click', () => {
        closeProjectForm(arrayToSubmit);
    });
    newProjectSubmit.addEventListener('click', () => {
        if(!newProjectTitleInput.value){
            alert('You must enter a title for the project!');
        } else{
            submitNewProject(arrayToSubmit);
        }
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
        //renderCreateAddTaskBtn(projectElement, project);

        projectTitle.addEventListener('click', () => {
            (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAllTasksDOM)();
            (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderCreateAddTaskBtn)(document.querySelector('.to-do-list-container'),project);
            (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(project);
            setActiveProject(projectTitle);
        })
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
    const newProject = new _classes__WEBPACK_IMPORTED_MODULE_1__.Project(newProjectTitle, 2023);

    const controller = new _classes__WEBPACK_IMPORTED_MODULE_1__.Controller();
    
    //Add the project to the given projects List
    controller.addProject(newProject);

    //Render the projects in the projects list into the given container
    renderProject(projectsList, document.querySelector('.projects-container'));

    //Close the project form
    closeProjectForm(projectsList);
};

//A function to show which project is currently chosen.
const setActiveProject = function(currentProject){
    const allProjectTitles = document.querySelectorAll('.project-titles');
    for(let project of allProjectTitles){
        project.style.color = 'black';
    }
    currentProject.style.color = 'pink';
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
/* harmony export */   removeAllTasksDOM: () => (/* binding */ removeAllTasksDOM),
/* harmony export */   removeTaskForm: () => (/* binding */ removeTaskForm),
/* harmony export */   renderCreateAddTaskBtn: () => (/* binding */ renderCreateAddTaskBtn),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _helperFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunction */ "./src/helperFunction.js");



//Function to create the form used for new tasks.
//Requires an argument for the element the form will be 
//created in
const openTaskForm = function(elementToAppendTo, currentProject){

    //Select the "Add task" that we want to always append the 
    //form after
    const addTaskBtn = document.querySelector('.add-task-button');

    //Create all of the field elements required for a task
    const taskFormWrapper = document.createElement('div');
    const taskTitleInput = document.createElement('input');
    const taskDescriptionInput = document.createElement('input');
    const taskDueDateInput = document.createElement('input');
    const taskPriorityInput = document.createElement('input');

    //Assign all of the field elements a class name
    taskFormWrapper.className = 'task form';
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
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskFormWrapper, taskTitleInput, taskDescriptionInput, taskDueDateInput, taskPriorityInput, newTaskSubmitBtn, newTaskCancelBtn);

    //Append the form to after the "Add Task Button";
    addTaskBtn.parentNode.insertBefore(taskFormWrapper, addTaskBtn.nextSibling);

};

//Function that removes all of the form elements from the DOM
const removeTaskForm = function(){
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
        const taskWrapper = document.createElement('div');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const complete = document.createElement('p');


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
        taskWrapper.className = 'task-wrapper';

        //Append all of the new elements to the container
        //for this to do object
        (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskWrapper, title, description, dueDate, priority, complete);
        tasksContainer.appendChild(taskWrapper)
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
    
    if(!titleInput.value || !descriptionInput.value || !dueDateInput.value || !priorityInput.value){
        alert('All fields should be completed before submitting!');
    } else{
        project.addTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value)
    };
}

const removeAllTasksDOM = function(){
    const displayedTasks = document.querySelectorAll('.task-wrapper');
    for (let task of displayedTasks){
        task.remove();
    };
    const addTaskButton = document.querySelector('.add-task-button');
    if(addTaskButton){
        addTaskButton.remove();
    };
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _styles_indexStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/indexStyle.css */ "./src/styles/indexStyle.css");




(0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.renderNewProjectBtn)(_classes__WEBPACK_IMPORTED_MODULE_1__.Controller.projectsArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZXMvaW5kZXhTdHlsZS5jc3M/ZWNkOCIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3kvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2hhbmRsZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9oYW5kbGVUYXNrLmpzIiwid2VicGFjazovL3kvLi9zcmMvaGVscGVyRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbn1cblxuYm9keXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDEwMHB4IGF1dG8gMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5oZWFkZXJ7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbn1cblxuLm5ldy1wcm9qZWN0cy1mb3Jte1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lcntcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGdyaWQtcm93OiAzLzQ7XG59XG5cbi50by1kby1saXN0LWNvbnRhaW5lcntcbiAgICBncmlkLXJvdzogMi80O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbi50YXNrLXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleFN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDEwMHB4IGF1dG8gMTAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLm5ldy1wcm9qZWN0cy1mb3Jte1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4udG8tZG8tbGlzdC1jb250YWluZXJ7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi50YXNrLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4U3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleFN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9Db250YWlucyB0aGUgY2xhc3NlcyByZXF1aXJlZCBmb3IgbXkgSmF2YVNjcmlwdCBhcHBsaWNhdGlvblxuXG4vL0EgY2xhc3MgY29uc3RydWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgbmV3IHByb2plY3RzXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKXtcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKTtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKHRoaXMudGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgfVxufTtcblxuLy9UaGlzIGlzIHRoZSBjbGFzcyBjb25zdHJ1Y3RvciBmb3Igb3VyIFRhc2tzXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUgPSBmYWxzZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUYXNrXCI7XG4gICAgfTsgXG5cbiAgICBjaGFuZ2VDb21wbGV0ZVN0YXR1cygpe1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRlID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHByb2plY3RzQXJyYXkgPSBbXTtcblxuICAgIGdldFByb2plY3RzQXJyYXkoKXtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xsZXIucHJvamVjdHNBcnJheTtcbiAgICB9O1xuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KXtcbiAgICAgICAgQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCk7XG4gICAgfTtcblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCl7XG4gICAgICAgIENvbnRyb2xsZXIucHJvamVjdHNBcnJheS5zcGxpY2UoQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgIH07XG4gICAgXG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvblwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4sIHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vaGFuZGxlVGFza1wiO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IHJlbW92ZUFsbFRhc2tzRE9NIH0gZnJvbSBcIi4vaGFuZGxlVGFza1wiO1xuXG4vL0EgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIGZvcm0gdGhhdCB3aWxsIGJlIHVzZWQgaW4gb3RoZXIgXG4vL2Z1bmN0aW9ucyB3aXRoaW4gdGhpcyBtb2R1bGVcbmV4cG9ydCBjb25zdCBjbG9zZVByb2plY3RGb3JtID0gZnVuY3Rpb24ocHJvamVjdHNMaXN0KXtcbiAgICAvL1NlbGVjdCB0aGUgZm9ybSBpbnB1dCBmaWVsZHNcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC10aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3Qtc3VibWl0Jyk7XG4gICAgY29uc3QgY2FuY2VsTmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLW5ldy1wcm9qZWN0Jyk7XG5cbiAgICAvL1JlbW92ZSB0aGUgZm9ybSBpbnB1dCBmaWVsZHNcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC5yZW1vdmUoKTtcbiAgICBuZXdQcm9qZWN0U3VibWl0LnJlbW92ZSgpO1xuICAgIGNhbmNlbE5ld1Byb2plY3RGb3JtLnJlbW92ZSgpO1xuXG4gICAgLy9SZS1SZW5kZXIgdGhlIFwiTmV3IFByb2plY3RcIiBidXR0b24gZm9yIHVzZSBhZ2FpblxuICAgIHJlbmRlck5ld1Byb2plY3RCdG4ocHJvamVjdHNMaXN0KTtcblxufTtcblxuLy9UaGlzIGZ1bmN0aW9uIHdpbGwgb3BlbiBhIHByb2plY3QgZm9ybSBhbGxvd2luZyB1c2VyIHRvIFxuLy9lbnRlciB0aGVpciBwcm9qZWN0IGlucHV0XG5leHBvcnQgY29uc3Qgb3BlblByb2plY3RGb3JtID0gZnVuY3Rpb24oYXJyYXlUb1N1Ym1pdCl7XG5cbiAgICAvL0NyZWF0ZSB0aGUgZmllbGQgZWxlbWVudHMgZm9yIHRoZSBmb3JtXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9BZGQgdGhlIGlubmVyIHRleHQgdG8gdGhlIGJ1dHRvbiBlbGVtZW50c1xuICAgIG5ld1Byb2plY3RTdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICAvL0Fzc2lnbiBhIHBsYWNlaG9sZGVyIHRvIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgXG4gICAgLy9Bc3NpZ24gY2xhc3NlcyB0byB0aGUgZWxlbWVudHNcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC5jbGFzc05hbWUgPSAnbmV3LXByb2plY3QtdGl0bGUtaW5wdXQnO1xuICAgIG5ld1Byb2plY3RTdWJtaXQuY2xhc3NOYW1lID0gJ25ldy1wcm9qZWN0LXN1Ym1pdCc7XG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0uY2xhc3NOYW1lID0gJ2NhbmNlbC1uZXctcHJvamVjdCc7XG5cbiAgICAvL0FkZCB0aGUgcmVsYXRpdmUgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBidXR0b24gZWxlbWVudHNcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VQcm9qZWN0Rm9ybShhcnJheVRvU3VibWl0KTtcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZighbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1lvdSBtdXN0IGVudGVyIGEgdGl0bGUgZm9yIHRoZSBwcm9qZWN0IScpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBzdWJtaXROZXdQcm9qZWN0KGFycmF5VG9TdWJtaXQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL1NlbGVjdCB0aGUgZWxlbWVudCB3aGVyZSB0aGUgZm9ybSB3aWxsIGJlIGF0dGFjaGVkIHRvXG4gICAgY29uc3QgbmV3UHJvamVjdHNGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0cy1mb3JtJyk7XG5cbiAgICAvL0F0dGFjaCB0aGUgZm9ybSB0byB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgIGFwcGVuZENoaWxkcmVuKG5ld1Byb2plY3RzRm9ybSwgbmV3UHJvamVjdFRpdGxlSW5wdXQsIG5ld1Byb2plY3RTdWJtaXQsIGNhbmNlbE5ld1Byb2plY3RGb3JtKTtcblxufTtcblxuLy9GdW5jdGlvbiB0aGF0IHJlbmRlcnMgdGhlIHByb2plY3QgaW50byB0aGUgRE9NIHRvIGJlIFxuLy9kaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24oYXJyYXksIGNvbnRhaW5lcil7XG4gICAgXG4gICAgLy9DbGVhciB0aGUgRE9NIGJlZm9yZSByZW5kZXJpbmcgYWdhaW5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvL0xvb3AgdGhyb3VnaCB0aGUgZ2l2ZW4gYXJyYXlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAvL0luaXRpYWxpc2Ugb3VyIHZhcmlhYmxlcyB1c2VkIHRocm91Z2hvdXQgdGhlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBwcm9qZWN0ID0gYXJyYXlbaV07XG4gICAgICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbGV0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIC8vU2V0IGlubmVyIHRleHQgb2YgdGhlIGVsZW1lbnRzIHRvIHRoZSB2YWx1ZXMgaW5zaWRlXG4gICAgICAgIC8vb2YgdGhlIGdpdmVuIG9iamVjdHNcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHByb2plY3REYXRlLmlubmVyVGV4dCA9IHByb2plY3QuZGF0ZTtcblxuICAgICAgICAvL0dpdmUgdGhlIHByb2plY3QgZWxlbWVudHMgY2xhc3MgbmFtZXMgZm9yIGZ1dHVyZSBzdHlsaW5nXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTmFtZSA9ICdpbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnMnO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGl0bGVzJztcbiAgICAgICAgcHJvamVjdERhdGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtZGF0ZXMnO1xuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBjaGlsZCBlbGVtZW50cyB0byB0aGVpciBwYXJlbnQgZWxlbWVudFxuICAgICAgICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0RWxlbWVudCwgcHJvamVjdFRpdGxlLCBwcm9qZWN0RGF0ZSlcblxuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBkaXYgdG8gdGhlIGdpdmVuIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vUmVuZGVyIHRoZSBBZGQgVGFzayBCdXR0b25cbiAgICAgICAgLy9yZW5kZXJDcmVhdGVBZGRUYXNrQnRuKHByb2plY3RFbGVtZW50LCBwcm9qZWN0KTtcblxuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVBbGxUYXNrc0RPTSgpO1xuICAgICAgICAgICAgcmVuZGVyQ3JlYXRlQWRkVGFza0J0bihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdC1jb250YWluZXInKSxwcm9qZWN0KTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xuICAgICAgICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbi8vRnVuY3Rpb24gcmUtcmVuZGVycyB0aGUgXCJOZXcgUHJvamVjdFwiIGJ1dHRvbiBhZ2FpbiB0byB0aGUgXG4vL0RPTVxuZXhwb3J0IGNvbnN0IHJlbmRlck5ld1Byb2plY3RCdG4gPSBmdW5jdGlvbihwcm9qZWN0QXJyYXkpe1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmlubmVyVGV4dCA9ICdOZXcgUHJvamVjdCc7XG4gICAgbmV3UHJvamVjdEJ0bi5pZCA9ICduZXctcHJvamVjdC1idXR0b24nO1xuXG4gICAgLy9BZGQgdGhlIGV2ZW50IGxpc3RlbmVyIGJhY2sgdG8gdGhlIFwiTmV3IFByb2plY3RcIiBidXR0b25cbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgb3BlblByb2plY3RGb3JtKHByb2plY3RBcnJheSk7XG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgLy9BcHBlbmQgdGhlIGJ1dHRvbiBiYWNrIHRvIHRoZSBjb3JyZWN0IGRpdlxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdHMtZm9ybScpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBhZGQgYSBuZXcgUHJvamVjdCB0byBhIGdpdmVuIHByb2plY3RzTGlzdFxuZXhwb3J0IGNvbnN0IHN1Ym1pdE5ld1Byb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0c0xpc3Qpe1xuICAgIC8vU2VsZWN0IHRoZSB0aXRsZSBpbnB1dCBlbGVtZW50IGZvciB0aGUgcHJvamVjdCBmb3JtXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtdGl0bGUtaW5wdXQnKTtcblxuICAgIC8vQXNzaWduIHRoZSB2YWx1ZSBlbnRlcmVkIGludG8gdGhlIHRpdGxlIGVsZW1lbnQgdG8gYSB2YXJpYWJsZVxuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlOyAgICBcblxuICAgIC8vQ3JlYXRlIGEgbmV3IHByb2plY3Qgd2l0aCB0aGUgZ2l2ZW4gdGl0bGUsIGRhdGUgYW5kIHByb2plY3RzTGlzdFxuICAgIC8vdG8gc3RvcmUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdFRpdGxlLCAyMDIzKTtcblxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuICAgIFxuICAgIC8vQWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBnaXZlbiBwcm9qZWN0cyBMaXN0XG4gICAgY29udHJvbGxlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gICAgLy9SZW5kZXIgdGhlIHByb2plY3RzIGluIHRoZSBwcm9qZWN0cyBsaXN0IGludG8gdGhlIGdpdmVuIGNvbnRhaW5lclxuICAgIHJlbmRlclByb2plY3QocHJvamVjdHNMaXN0LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJykpO1xuXG4gICAgLy9DbG9zZSB0aGUgcHJvamVjdCBmb3JtXG4gICAgY2xvc2VQcm9qZWN0Rm9ybShwcm9qZWN0c0xpc3QpO1xufTtcblxuLy9BIGZ1bmN0aW9uIHRvIHNob3cgd2hpY2ggcHJvamVjdCBpcyBjdXJyZW50bHkgY2hvc2VuLlxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSBmdW5jdGlvbihjdXJyZW50UHJvamVjdCl7XG4gICAgY29uc3QgYWxsUHJvamVjdFRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRpdGxlcycpO1xuICAgIGZvcihsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0VGl0bGVzKXtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgfVxuICAgIGN1cnJlbnRQcm9qZWN0LnN0eWxlLmNvbG9yID0gJ3BpbmsnO1xufTsiLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uXCI7XG5pbXBvcnQgeyBhc3NpZ25DbGFzcyB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uXCI7XG5cbi8vRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmb3JtIHVzZWQgZm9yIG5ldyB0YXNrcy5cbi8vUmVxdWlyZXMgYW4gYXJndW1lbnQgZm9yIHRoZSBlbGVtZW50IHRoZSBmb3JtIHdpbGwgYmUgXG4vL2NyZWF0ZWQgaW5cbmV4cG9ydCBjb25zdCBvcGVuVGFza0Zvcm0gPSBmdW5jdGlvbihlbGVtZW50VG9BcHBlbmRUbywgY3VycmVudFByb2plY3Qpe1xuXG4gICAgLy9TZWxlY3QgdGhlIFwiQWRkIHRhc2tcIiB0aGF0IHdlIHdhbnQgdG8gYWx3YXlzIGFwcGVuZCB0aGUgXG4gICAgLy9mb3JtIGFmdGVyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcblxuICAgIC8vQ3JlYXRlIGFsbCBvZiB0aGUgZmllbGQgZWxlbWVudHMgcmVxdWlyZWQgZm9yIGEgdGFza1xuICAgIGNvbnN0IHRhc2tGb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgLy9Bc3NpZ24gYWxsIG9mIHRoZSBmaWVsZCBlbGVtZW50cyBhIGNsYXNzIG5hbWVcbiAgICB0YXNrRm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gJ3Rhc2sgZm9ybSc7XG4gICAgdGFza1RpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrRHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG5cbiAgICAvL0Fzc2lnbiBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gYWxsIG9mIHRoZSBpbnB1dHNcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgVGl0bGUnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgRGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBEdWUgRGF0ZScpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBQcmlvcml0eSBMZXZlbCcpO1xuXG4gICAgLy9Bc3NpZ24gZmllbGQgZWxlbWVudHMgYW4gSURcbiAgICB0YXNrVGl0bGVJbnB1dC5pZCA9ICd0YXNrLXRpdGxlLWlucHV0JztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uLWlucHV0JztcbiAgICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2stZHVlLWRhdGUtaW5wdXQnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmlkID0gJ3Rhc2stcHJpb3JpdHktaW5wdXQnO1xuXG4gICAgLy9DcmVhdGUgdGhlIGJ1dHRvbiBlbGVtZW50cyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdUYXNrU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3VGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9Bc3NpZ24gdGhlIGJ1dHRvbiBlbGVtZW50cyB3aXRoIGEgY2xhc3MgbmFtZVxuICAgIG5ld1Rhc2tTdWJtaXRCdG4uY2xhc3NOYW1lID0gJ3N1Ym1pdC10YXNrJztcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmNsYXNzTmFtZSA9ICdjYW5jZWwtdGFzayc7XG5cbiAgICAvL0luc2VydCBpbm5lciB0ZXh0IGludG8gdGhlIGJ1dHRvbnMgdG8gZGlzcGxheSB1c2VcbiAgICBuZXdUYXNrU3VibWl0QnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICAvL0FkZCBldmVudCBsaXN0ZW5lciB0byBjYW5jZWwgYW5kIHJlbW92ZSB0aGUgZm9ybSBmcm9tIFxuICAgIC8vdGhlIERPTVxuICAgIG5ld1Rhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVUYXNrRm9ybSlcblxuICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHJlbmRlciB0aGUgdGFzayB0byBzdWJtaXQgYnV0dG9uXG4gICAgbmV3VGFza1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHJlbmRlclRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlVGFza0Zvcm0oKTtcbiAgICB9KTtcblxuICAgIC8vQXBwZW5kIHRoZSBmaWVsZCBlbGVtZW50cyB0byB0aGUgZ2l2ZW4gY29udGFpbmVyIGVsZW1lbnRcbiAgICBhcHBlbmRDaGlsZHJlbih0YXNrRm9ybVdyYXBwZXIsIHRhc2tUaXRsZUlucHV0LCB0YXNrRGVzY3JpcHRpb25JbnB1dCwgdGFza0R1ZURhdGVJbnB1dCwgdGFza1ByaW9yaXR5SW5wdXQsIG5ld1Rhc2tTdWJtaXRCdG4sIG5ld1Rhc2tDYW5jZWxCdG4pO1xuXG4gICAgLy9BcHBlbmQgdGhlIGZvcm0gdG8gYWZ0ZXIgdGhlIFwiQWRkIFRhc2sgQnV0dG9uXCI7XG4gICAgYWRkVGFza0J0bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXNrRm9ybVdyYXBwZXIsIGFkZFRhc2tCdG4ubmV4dFNpYmxpbmcpO1xuXG59O1xuXG4vL0Z1bmN0aW9uIHRoYXQgcmVtb3ZlcyBhbGwgb2YgdGhlIGZvcm0gZWxlbWVudHMgZnJvbSB0aGUgRE9NXG5leHBvcnQgY29uc3QgcmVtb3ZlVGFza0Zvcm0gPSBmdW5jdGlvbigpe1xuICAgIC8vU2VsZWN0IGFsbCBvZiB0aGUgZm9ybSBlbGVtZW50cyB1c2luZyB0aGVpciBjbGFzcyBuYW1lXG4gICAgY29uc3QgdGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWlucHV0Jyk7XG4gICAgY29uc3QgdGFza1N1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtdGFzaycpO1xuICAgIGNvbnN0IHRhc2tDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXRhc2snKTtcblxuICAgIC8vRm9yIGV2ZXJ5IGZpZWxkIGlucHV0IGluIHRoZSBsaXN0IG9mIGZpZWxkIGlucHV0c1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrSW5wdXRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy9SZW1vdmUgdGhlIGZpZWxkIGlucHV0XG4gICAgICAgIHRhc2tJbnB1dHNbaV0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGFza1N1Ym1pdEJ0bi5yZW1vdmUoKTtcbiAgICB0YXNrQ2FuY2VsQnRuLnJlbW92ZSgpO1xufTtcblxuLy9GdW5jdGlvbiB0byByZW5kZXIgdGhlIHRhc2tzIG9mIGEgcHJvamVjdCBvbiB0byB0aGUgRE9NXG4vL3RvIGJlIGRpc3BsYXllZCBvbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tzID0gZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgLy9Bc3NpZ24gYSB2YXJpYWJsZSB0byBhbiBhcnJheSBvZiB0aGUga2V5IG5hbWVzIGZyb20gZWFjaFxuICAgIC8vcHJvamVjdC5cbiAgICBsZXQgdGFza0xpc3QgPSBwcm9qZWN0LnRhc2tMaXN0O1xuXG4gICAgLy9TZWxlY3QgdGhlIGNvbnRhaW5lciBpbiBIVE1MIGRvY3VtZW50IHdoZXJlIHRhc2tzIHdpbGxcbiAgICAvL2JlIGFwcGVuZGVkIHRvLlxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtY29udGFpbmVyJylcblxuICAgIC8vTG9vcCB0aHJvdWdoIHRoZSBrZXkgYXJyYXlzIHRvIGZpbmQgYW55IHRvIGRvIGtleXMgaW5zaWRlIFxuICAgIC8vb2YgdGhlIHByb2plY3RzLlxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IHRhc2tMaXN0W2ldO1xuICAgICAgICAvL0luaXRpYWxpemUgYWxsIG9mIHRoZSB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIFxuICAgICAgICAvL3VzZWQgdGhyb3VnaCB0aGUgZnVuY3Rpb24gdG8gdGhlaXIgZG9tIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG5cbiAgICAgICAgLy9BcHBlbmQgdGV4dCB0byBlbGVtZW50cyBmcm9tIHRoZWlyIHJlc3BlY3RpdmUgXG4gICAgICAgIC8vcHJvcGVydGllc1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBjdXJyZW50VGFzay50aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gY3VycmVudFRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gY3VycmVudFRhc2suZHVlRGF0ZTtcbiAgICAgICAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gY3VycmVudFRhc2sucHJpb3JpdHk7XG4gICAgICAgIGNvbXBsZXRlLmlubmVyVGV4dCA9IGN1cnJlbnRUYXNrLmNvbXBsZXRlO1xuXG4gICAgICAgIC8vQXNzaWduIGEgY2xhc3MgbmFtZSB0byB0aGVzZSBlbGVtZW50cyBmb3IgZnV0dXJlXG4gICAgICAgIC8vc3R5bGluZy5cbiAgICAgICAgYXNzaWduQ2xhc3MoJ3Rhc2stcHJvcGVydGllcycsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKVxuICAgICAgICB0YXNrV3JhcHBlci5jbGFzc05hbWUgPSAndGFzay13cmFwcGVyJztcblxuICAgICAgICAvL0FwcGVuZCBhbGwgb2YgdGhlIG5ldyBlbGVtZW50cyB0byB0aGUgY29udGFpbmVyXG4gICAgICAgIC8vZm9yIHRoaXMgdG8gZG8gb2JqZWN0XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tXcmFwcGVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKVxuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgb3VyIFwiQWRkIFRhc2sgQnV0dG9uXCIgZ2l2ZW4gYSBwYXJlbnQgZWxlbWVudFxuLy90byBhcHBlbmQgdG8uXG5leHBvcnQgY29uc3QgcmVuZGVyQ3JlYXRlQWRkVGFza0J0biA9IGZ1bmN0aW9uKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdCl7XG4gICAgLy9DcmVhdGUgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggdGV4dC5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xuXG4gICAgLy9BZGQgY2xhc3MgdG8gdGhlIGJ1dHRvblxuICAgIGFkZFRhc2tCdG4uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1idXR0b25cIjtcblxuICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uIHdoaWNoIG9wZW5zIHRoZSBcbiAgICAvL1wiVGFzayBGb3JtXCIgb24gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZ2l2ZW4uXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgb3BlblRhc2tGb3JtKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdClcbiAgICB9KVxuXG4gICAgLy9BcHBlbmQgdGhlIGJ1dHRvbiB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICBlbGVtZW50VG9BcHBlbmRUby5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gYWRkIGEgXCJUYXNrXCIgdG8gYSBwcm9qZWN0J3MgdGFzayBhcnJheS5cbmV4cG9ydCBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZHVlLWRhdGUtaW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHktaW5wdXQnKTtcbiAgICBcbiAgICBpZighdGl0bGVJbnB1dC52YWx1ZSB8fCAhZGVzY3JpcHRpb25JbnB1dC52YWx1ZSB8fCAhZHVlRGF0ZUlucHV0LnZhbHVlIHx8ICFwcmlvcml0eUlucHV0LnZhbHVlKXtcbiAgICAgICAgYWxlcnQoJ0FsbCBmaWVsZHMgc2hvdWxkIGJlIGNvbXBsZXRlZCBiZWZvcmUgc3VibWl0dGluZyEnKTtcbiAgICB9IGVsc2V7XG4gICAgICAgIHByb2plY3QuYWRkVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUpXG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbFRhc2tzRE9NID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkaXNwbGF5ZWRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXdyYXBwZXInKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIGRpc3BsYXllZFRhc2tzKXtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICB9O1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgaWYoYWRkVGFza0J1dHRvbil7XG4gICAgICAgIGFkZFRhc2tCdXR0b24ucmVtb3ZlKCk7XG4gICAgfTtcbn0iLCIvL0Z1bmN0aW9uIHRvIGhlbHAgYXBwZW5kIG11bHRpcGxlIGNoaWxkcmVuIGF0IG9uY2UgdG8gYSBwYXJlbnRcbi8vZWxlbWVudFxuZXhwb3J0IGNvbnN0IGFwcGVuZENoaWxkcmVuID0gZnVuY3Rpb24ocGFyZW50LCAuLi5jaGlsZHJlbil7IFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZHJlbltpXSk7XG4gICAgfTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gYWxsb3cgbWUgdG8gYWRkIHRoZSBzYW1lIGNsYXNzIG5hbWUgdG8gbXVsdGlwbGVcbi8vZWxlbWVudHMuXG5leHBvcnQgY29uc3QgYXNzaWduQ2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUsIC4uLmVsZW1lbnRzKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBlbGVtZW50c1tpXS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZW5kZXJOZXdQcm9qZWN0QnRuIH0gZnJvbSBcIi4vaGFuZGxlUHJvamVjdFwiO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXhTdHlsZS5jc3MnO1xuXG5yZW5kZXJOZXdQcm9qZWN0QnRuKENvbnRyb2xsZXIucHJvamVjdHNBcnJheSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=