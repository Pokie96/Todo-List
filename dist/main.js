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
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

body{
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 50px 100px 80px auto 50px;
    height: 100vh;
    width: 100vw;
}

.header{
    grid-column: 1/3;
    display: flex;;
    justify-content: center;
    align-items: center;
    background-color: #214E34;
    box-shadow: inset 0px -1px 3px white;
}

.new-projects-form{
    grid-row: 2/4;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #b8e1dd;
    box-shadow: inset 0px 2px 3px ;
}

.new-projects-form h2{
    color: #214E34;
    text-shadow: 1px 1px white, -1px -1px white, 1px -1px white, -1px 1px white;
}

#new-project-button{
    background-color: #214E34;
    border: none;
    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;
    color: #DFF8EB;
    font-weight: bolder;
    cursor: pointer;
    height: 30px;
}

.new-project-button-wrapper{
    height: 30px;
}

.project-date-nav{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 110px;
}

.project-date-nav button{
    background-color: #214E34;
    border: none;
    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;
    color: #DFF8EB;
    font-weight: bolder;
    cursor: pointer;
    height: 30px;
}

.task-section{
    grid-row: 2/5;
    grid-column: 2/3;
    background-color: #b8e1dd;
    box-shadow: inset 0px 2px 3px;
}

.task-section-header{
    display: flex;
    flex-direction: row;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    width: 100%;

}

.to-do-list-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-template-rows: repeat(auto-fit, 200px);
    gap: 20px;
    padding: 20px;
}

.projects-container{
    grid-column: 1/2;
    grid-row: 4/5;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #b8e1dd;
    box-shadow: inset 0px 2px 3px;
}

.task-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 300px;
    height: 200px;
    text-align: center;
    background-color: #214E34;
    color: #DFF8EB;
    font-weight: bolder;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;
}

.header h1{
    color: #DFF8EB;
}

.footer{
    grid-column: 1/3;
    grid-row: 5/6;
    background-color: #214E34;
    box-shadow: inset 0px -1px 3px white;
}

.project-form-wrapper{
    position: fixed;
    width: 200px;
    height: 100px;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #214E34;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;
}

.project-form-wrapper input{
    height: 30px
}

.project-form-wrapper input:focus{
    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;
}

.project-form-wrapper button{
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #011638;
    color: #DFF8EB;
    font-weight: bolder;
    cursor: pointer;
}

.project-form-wrapper button:hover{
    background-color: #022864;
    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;
}

.project-form-buttons-wrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.indiv-project-containers{
    background-color: #214E34;
    color: #DFF8EB;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;
    width: 90%;
    min-height: 100px;
    cursor: pointer;
    padding: 5px;
    text-align: center;
}

.project-titles{
    margin-left: 5px;
    font-size: 20px;
    padding: 5px;
}

.project-dates{
    font-size: 14px;
}

.remove-project-button{
    margin-left: 5px;
    margin-right: 5px;
    border: 1px black solid;
    background-color: red;
    color: white;;
    font-weight: bolder;
    border-radius: 6px;
    cursor: pointer;
}

#project-title{
    text-align: center;
    color: #044a42;
    font-size: 32px;
    text-decoration: underline;
    text-shadow: 1px 1px white, -1px -1px white, 1px -1px white, -1px 1px white;
}

.add-task-button{
    background-color: #214E34;
    border: none;
    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;
    color: #DFF8EB;
    font-weight: bolder;
    width: 80px;
    height: 40px;
    cursor: pointer;
    margin-left: 10px;
}

#remove-complete-tasks-button{
    background-color: #214E34;
    border: none;
    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;
    color: #DFF8EB;
    font-weight: bolder;
    width: 140px;
    height: 40px;
    cursor: pointer;
    margin-right: 10px;
}

.remove-project-button:hover{
    box-shadow: inset 1px 1px 2px black, inset -1px -1px 2px black;
    background-color: rgb(201, 0, 0);
}

.task-form{
    position: fixed;
    width: 250px;
    height: 350px;
    top: 50%;
    left: 50%;
    margin-top: -175px;
    margin-left: -125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #214E34;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;
}

.field-element-wrapper{
    display: flex;
    flex-direction: column;
    align-items: start;
}

.field-element-wrapper label{
    color: #DFF8EB;
    font-weight: bolder;
}

.new-task-buttons-wrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.task-form button{
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #011638;
    color: #DFF8EB;
    font-weight: bolder;
    cursor: pointer;
}

.task-form button:hover{
    background-color: #022864;
    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;
}

.task-input{
    height: 30px
}

.task-input:focus{
    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;
}

.task-check-wrapper{
    width: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.task-check-wrapper input{
    height: 16px;
    width: 16px;
}

.task-delete-button{
    border: 1px black solid;
    background-color: red;
    color: white;;
    font-weight: bolder;
    border-radius: 6px;
    cursor: pointer; 
}`, "",{"version":3,"sources":["webpack://./src/styles/indexStyle.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-template-rows: 50px 100px 80px auto 50px;\n    height: 100vh;\n    width: 100vw;\n}\n\n.header{\n    grid-column: 1/3;\n    display: flex;;\n    justify-content: center;\n    align-items: center;\n    background-color: #214E34;\n    box-shadow: inset 0px -1px 3px white;\n}\n\n.new-projects-form{\n    grid-row: 2/4;\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: #b8e1dd;\n    box-shadow: inset 0px 2px 3px ;\n}\n\n.new-projects-form h2{\n    color: #214E34;\n    text-shadow: 1px 1px white, -1px -1px white, 1px -1px white, -1px 1px white;\n}\n\n#new-project-button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n    cursor: pointer;\n    height: 30px;\n}\n\n.new-project-button-wrapper{\n    height: 30px;\n}\n\n.project-date-nav{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 110px;\n}\n\n.project-date-nav button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n    cursor: pointer;\n    height: 30px;\n}\n\n.task-section{\n    grid-row: 2/5;\n    grid-column: 2/3;\n    background-color: #b8e1dd;\n    box-shadow: inset 0px 2px 3px;\n}\n\n.task-section-header{\n    display: flex;\n    flex-direction: row;\n    height: 100px;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n}\n\n.to-do-list-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 300px);\n    grid-template-rows: repeat(auto-fit, 200px);\n    gap: 20px;\n    padding: 20px;\n}\n\n.projects-container{\n    grid-column: 1/2;\n    grid-row: 4/5;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #b8e1dd;\n    box-shadow: inset 0px 2px 3px;\n}\n\n.task-wrapper{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 300px;\n    height: 200px;\n    text-align: center;\n    background-color: #214E34;\n    color: #DFF8EB;\n    font-weight: bolder;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.header h1{\n    color: #DFF8EB;\n}\n\n.footer{\n    grid-column: 1/3;\n    grid-row: 5/6;\n    background-color: #214E34;\n    box-shadow: inset 0px -1px 3px white;\n}\n\n.project-form-wrapper{\n    position: fixed;\n    width: 200px;\n    height: 100px;\n    top: 50%;\n    left: 50%;\n    margin-top: -50px;\n    margin-left: -100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #214E34;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.project-form-wrapper input{\n    height: 30px\n}\n\n.project-form-wrapper input:focus{\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.project-form-wrapper button{\n    width: 60px;\n    height: 30px;\n    border: none;\n    border-radius: 5px;\n    background-color: #011638;\n    color: #DFF8EB;\n    font-weight: bolder;\n    cursor: pointer;\n}\n\n.project-form-wrapper button:hover{\n    background-color: #022864;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.project-form-buttons-wrapper{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.indiv-project-containers{\n    background-color: #214E34;\n    color: #DFF8EB;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n    width: 90%;\n    min-height: 100px;\n    cursor: pointer;\n    padding: 5px;\n    text-align: center;\n}\n\n.project-titles{\n    margin-left: 5px;\n    font-size: 20px;\n    padding: 5px;\n}\n\n.project-dates{\n    font-size: 14px;\n}\n\n.remove-project-button{\n    margin-left: 5px;\n    margin-right: 5px;\n    border: 1px black solid;\n    background-color: red;\n    color: white;;\n    font-weight: bolder;\n    border-radius: 6px;\n    cursor: pointer;\n}\n\n#project-title{\n    text-align: center;\n    color: #044a42;\n    font-size: 32px;\n    text-decoration: underline;\n    text-shadow: 1px 1px white, -1px -1px white, 1px -1px white, -1px 1px white;\n}\n\n.add-task-button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n    width: 80px;\n    height: 40px;\n    cursor: pointer;\n    margin-left: 10px;\n}\n\n#remove-complete-tasks-button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n    width: 140px;\n    height: 40px;\n    cursor: pointer;\n    margin-right: 10px;\n}\n\n.remove-project-button:hover{\n    box-shadow: inset 1px 1px 2px black, inset -1px -1px 2px black;\n    background-color: rgb(201, 0, 0);\n}\n\n.task-form{\n    position: fixed;\n    width: 250px;\n    height: 350px;\n    top: 50%;\n    left: 50%;\n    margin-top: -175px;\n    margin-left: -125px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #214E34;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.field-element-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.field-element-wrapper label{\n    color: #DFF8EB;\n    font-weight: bolder;\n}\n\n.new-task-buttons-wrapper{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.task-form button{\n    width: 70px;\n    height: 30px;\n    border: none;\n    border-radius: 5px;\n    background-color: #011638;\n    color: #DFF8EB;\n    font-weight: bolder;\n    cursor: pointer;\n}\n\n.task-form button:hover{\n    background-color: #022864;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.task-input{\n    height: 30px\n}\n\n.task-input:focus{\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.task-check-wrapper{\n    width: 120px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.task-check-wrapper input{\n    height: 16px;\n    width: 16px;\n}\n\n.task-delete-button{\n    border: 1px black solid;\n    background-color: red;\n    color: white;;\n    font-weight: bolder;\n    border-radius: 6px;\n    cursor: pointer; \n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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
/* harmony export */   Storer: () => (/* binding */ Storer),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _helperFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunction */ "./src/helperFunction.js");
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

//This class has control over the collection of the projects
class Controller {
    static projectsArray = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.getArrayLocal)('Projects Array');

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

//Class to store values that are shared throughout the whole of the program
class Storer {
    constructor(){

    };

    static get currentlySelected() {
        return this._currentlySelected || undefined;
    }

    static set currentlySelected(value) {
        this._currentlySelected = value;
    }
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
/* harmony export */   removeAllActiveButtons: () => (/* binding */ removeAllActiveButtons),
/* harmony export */   renderNewProjectBtn: () => (/* binding */ renderNewProjectBtn),
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   setActiveCalenderButton: () => (/* binding */ setActiveCalenderButton),
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
    const projectFormWrapper = document.querySelector('.project-form-wrapper');

    //Remove the form input fields
    if(projectFormWrapper){
        projectFormWrapper.remove();
    };

    //Re-Render the "New Project" button for use again
    renderNewProjectBtn(projectsList);

};

//This function will open a project form allowing user to 
//enter their project input
const openProjectForm = function(arrayToSubmit){

    //Create the field elements for the form
    const projectFormWrapper = document.createElement('div');
    const buttonsWrapper = document.createElement('div');
    const newProjectTitleInput = document.createElement('input');
    const newProjectSubmit = document.createElement('button');
    const cancelNewProjectForm = document.createElement('button');

    //Add the inner text to the button elements
    newProjectSubmit.innerText = 'Submit';
    cancelNewProjectForm.innerText = 'Cancel';

    //Assign a placeholder to the input element
    newProjectTitleInput.setAttribute('placeholder', 'Project Title');
    
    //Assign classes to the elements
    projectFormWrapper.className = 'project-form-wrapper';
    buttonsWrapper.className = 'project-form-buttons-wrapper';
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
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(buttonsWrapper, newProjectSubmit, cancelNewProjectForm);
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(projectFormWrapper, newProjectTitleInput, buttonsWrapper);

    newProjectsForm.appendChild(projectFormWrapper);
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
        let removeProjectBtn = document.createElement('button');
        const controller = new _classes__WEBPACK_IMPORTED_MODULE_1__.Controller;

        //Set inner text of the elements to the values inside
        //of the given objects
        projectTitle.innerText = project.title;
        projectDate.innerText = project.date;
        removeProjectBtn.innerText = 'X';

        //Give the project elements class names for future styling
        projectElement.className = 'indiv-project-containers';
        projectElement.id = `project-${i}`;
        projectTitle.className = 'project-titles';
        projectDate.className = 'project-dates';
        removeProjectBtn.className = 'remove-project-button';
        removeProjectBtn.id = `remove-project-button-${i}`;

        //Render the Add Task Button
        //renderCreateAddTaskBtn(projectElement, project);

        projectElement.addEventListener('click', (e) => {
            if(e.target === document.querySelector(`#remove-project-button-${i}`)){
                controller.deleteProject(project);
                let currentArray = controller.getProjectsArray();
                (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.removeArrayLocal)('Projects Array');
                (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.storeArrayLocal)('Projects Array', currentArray);
                renderProject(array, container);
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderProjectTasks)(project);
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAddTaskButton)();
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAllTasksDOM)();
                document.querySelector('#project-title').innerText = '';
            }else{
                _classes__WEBPACK_IMPORTED_MODULE_1__.Storer.currentlySelected = 'Project';
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAllTasksDOM)();
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAddTaskButton)();
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeTaskForm)();
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderCreateAddTaskBtn)(document.querySelector('.add-task-btn-wrapper'),project);
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderProjectTasks)(project);
                setActiveProject(document.querySelector(`#project-${i}`));
            }
        })

        //Append the child elements to their parent element
        ;(0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(projectElement, projectTitle, projectDate, removeProjectBtn);


        //Append the div to the given container
        container.appendChild(projectElement);

    }
};

//Function re-renders the "New Project" button again to the 
//DOM
const renderNewProjectBtn = function(projectArray){
    if(!document.querySelector('#new-project-button')){
        const newProjectBtn = document.createElement('button');
        newProjectBtn.innerText = 'New Project';
        newProjectBtn.id = 'new-project-button';

        //Add the event listener back to the "New Project" button
        newProjectBtn.addEventListener('click', (e) => {
            openProjectForm(projectArray);
            e.target.remove();
        });

        //Append the button back to the correct div
        const buttonContainer = document.querySelector('.new-project-button-wrapper');
        buttonContainer.appendChild(newProjectBtn);

        (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAllTasksDOM)();
    };
};

//Function to create and add a new Project to a given projectsList
const submitNewProject = function(projectsList){
    //Select the title input element for the project form
    const newProjectTitleInput = document.querySelector('.new-project-title-input');

    //Assign the value entered into the title element to a variable
    const newProjectTitle = newProjectTitleInput.value;    

    //Create a new project with the given title, date and projectsList
    //to store it
    const newProject = new _classes__WEBPACK_IMPORTED_MODULE_1__.Project(newProjectTitle, (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.todaysDate)());

    const controller = new _classes__WEBPACK_IMPORTED_MODULE_1__.Controller();
    
    //Add the project to the given projects List
    controller.addProject(newProject);

    //Clear the local storage of the projects array before 
    //creating a new modified one
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.removeArrayLocal)('Projects Array');

    //Store the projects array into local storage
    let projectsArray = controller.getProjectsArray();
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.storeArrayLocal)('Projects Array', projectsArray);

    //Render the projects in the projects list into the given container
    renderProject(projectsList, document.querySelector('.projects-container'));

    //Close the project form
    closeProjectForm(projectsList);

    //Remove any currently active project title and task 
    //creation button
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAddTaskButton)();
    document.querySelector('#project-title').innerText = '';
};

//Function removes the active style effect from all the buttons of the nav 
//in the side bar
const removeAllActiveButtons = function(){
    const allProjectElements = document.querySelectorAll('.indiv-project-containers');
    const allCalenderButtons = document.querySelectorAll('.project-date-nav button');

    for(let project of allProjectElements){
        project.style.boxShadow = '1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB';
    };

    for(let calenderButton of allCalenderButtons){
        calenderButton.style.boxShadow = '1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB';
    };
}

//Function to show which project is currently chosen.
const setActiveProject = function(currentProject){
    const projectTitle = document.querySelector("#project-title");
    projectTitle.innerText = '';
    
    removeAllActiveButtons()

    if(currentProject){
        projectTitle.innerText = currentProject.firstChild.textContent;
        currentProject.style.boxShadow = 'inset 4px 4px 6px black, inset -4px -4px 6px black, 1px 1px 3px #DFF8EB,-1px -1px 3px #DFF8EB';
    };
};

//Function shows which calender nav button is currently chosen.
const setActiveCalenderButton = function(button){
    removeAllActiveButtons();
    button.style.boxShadow = 'inset 4px 4px 6px black, inset -4px -4px 6px black, 1px 1px 3px #DFF8EB,-1px -1px 3px #DFF8EB';
}


/***/ }),

/***/ "./src/handleTask.js":
/*!***************************!*\
  !*** ./src/handleTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject),
/* harmony export */   chooseRenderType: () => (/* binding */ chooseRenderType),
/* harmony export */   openTaskForm: () => (/* binding */ openTaskForm),
/* harmony export */   removeAddTaskButton: () => (/* binding */ removeAddTaskButton),
/* harmony export */   removeAllTasksDOM: () => (/* binding */ removeAllTasksDOM),
/* harmony export */   removeCompletedTasks: () => (/* binding */ removeCompletedTasks),
/* harmony export */   removeTaskForm: () => (/* binding */ removeTaskForm),
/* harmony export */   renderCreateAddTaskBtn: () => (/* binding */ renderCreateAddTaskBtn),
/* harmony export */   renderDeleteTaskBtn: () => (/* binding */ renderDeleteTaskBtn),
/* harmony export */   renderIndividualTask: () => (/* binding */ renderIndividualTask),
/* harmony export */   renderProjectTasks: () => (/* binding */ renderProjectTasks),
/* harmony export */   renderTaskCheckBox: () => (/* binding */ renderTaskCheckBox),
/* harmony export */   renderTasksForMonth: () => (/* binding */ renderTasksForMonth),
/* harmony export */   renderTasksForToday: () => (/* binding */ renderTasksForToday),
/* harmony export */   renderTasksForWeek: () => (/* binding */ renderTasksForWeek)
/* harmony export */ });
/* harmony import */ var _helperFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunction */ "./src/helperFunction.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _handleProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleProject */ "./src/handleProject.js");




//Function to create the form used for new tasks.
//Requires an argument for the element the form will be 
//created in
const openTaskForm = function(elementToAppendTo, currentProject){

    //Select the "Add task" that we want to always append the 
    //form after
    const addTaskBtn = document.querySelector('.add-task-button');

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
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.assignClass)("field-element-wrapper", taskTitleWrapper, taskDescriptionWrapper, taskDueDateWrapper, taskPriorityWrapper);

    //Append any elements to their wrappers
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskTitleWrapper, taskTitleLabel, taskTitleInput);
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskDescriptionWrapper, taskDescriptionLabel, taskDescriptionInput);
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskDueDateWrapper, taskDueDateLabel, taskDueDateInput);
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskPriorityWrapper, taskPriorityLabel, taskPriorityInput);

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

    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskPriorityInput, highPriority, mediumPriority, lowPriority);


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
        renderCreateAddTaskBtn(document.querySelector('.add-task-btn-wrapper') ,currentProject)
        chooseRenderType('Project', currentProject);
        removeTaskForm();
    });

    //Append the field elements to the given container element
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(newTaskBtns, newTaskSubmitBtn, newTaskCancelBtn);
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskFormWrapper, taskTitleWrapper, taskDescriptionWrapper, taskDueDateWrapper, taskPriorityWrapper, newTaskBtns);

    //Append the form to after the "Add Task Button";
    addTaskBtn.parentNode.insertBefore(taskFormWrapper, addTaskBtn.nextSibling);

};

//Function that removes all of the form elements from the DOM
const removeTaskForm = function(){
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
const renderProjectTasks = function(project){
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
const renderIndividualTask = function(task, taskList, project){
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
    dueDate.innerText = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.reformatDate)(task.dueDate);
    priority.innerText = task.priority;

    //Assign a class name to these elements for future
    //styling.
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.assignClass)('task-properties', title, description, dueDate, priority)
    taskWrapper.className = 'task-wrapper';
    taskDeleteBtn.className = 'task-delete-button';

    //Append all of the new elements to the container
    //for this to do object
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskWrapper, title, description, dueDate, priority, check, taskDeleteBtn);
    tasksContainer.appendChild(taskWrapper)
};

//Function creates and return the checkbox for each task
const renderTaskCheckBox = function(thisTask, taskArray){
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
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskCheck, taskCheckBoxLabel, taskCheckBox);

    return taskCheck;

};

//Function creates and returns the 'delete button' which will 
//be used of each task
const renderDeleteTaskBtn = function(thisProject, thisTask){
    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.innerText = 'X';
    deleteTaskBtn.addEventListener('click', ()=>{
        let currentRenderType = _classes__WEBPACK_IMPORTED_MODULE_1__.Storer.currentlySelected;
        console.log(currentRenderType);
        thisProject.removeTask(thisTask);
        chooseRenderType(currentRenderType, thisProject);
    })
    return deleteTaskBtn;
};

//Function creates our "Add Task Button" given a parent element
//to append to.
const renderCreateAddTaskBtn = function(elementToPrependTo, currentProject){
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
};

//Function to remove all tasks from the screen.
const removeAllTasksDOM = function(){
    const displayedTasks = document.querySelectorAll('.task-wrapper');
    for (let task of displayedTasks){
        task.remove();
    };
};

//Function removed the 'Add Task' button from the DOM
const removeAddTaskButton = function(){
    const addTaskButton = document.querySelector('.add-task-button');
    if(addTaskButton){
        addTaskButton.remove();
    };
};

const removeCompletedTasks = function(){
    const controller = new _classes__WEBPACK_IMPORTED_MODULE_1__.Controller;
    const allProjects = controller.getProjectsArray();

    for(let i = 0; i < allProjects.length; i++){
        const taskList = allProjects[i].taskList;
        for(let j = 0; j < taskList.length; j++){
            if(taskList[j].complete === true){
                allProjects[i].removeTask(taskList[j]);
            };
        };
    };

    removeAllTasksDOM();
    (0,_handleProject__WEBPACK_IMPORTED_MODULE_2__.removeAllActiveButtons)();
    removeAddTaskButton();
    document.querySelector('#project-title').innerText = '';
};

//Function finds and renders all of the tasks that are due for this week.
const renderTasksForWeek = function(){
    const controller = new _classes__WEBPACK_IMPORTED_MODULE_1__.Controller();
    const projectsArray = controller.getProjectsArray();
    const datesInThisWeek = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.reformatThisWeek)((0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.findThisWeek)());
    const title = document.querySelector('#project-title');

    removeAllTasksDOM();

    title.innerText = 'Due This Week';

    for(let i = 0; i < projectsArray.length; i++){
        let taskList = projectsArray[i].taskList;
        for(let j = 0; j < taskList.length; j++){
            if(datesInThisWeek.includes((0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.reformatDate)(taskList[j].dueDate))){
                renderIndividualTask(taskList[j], taskList, projectsArray[i]);
            }
        }
    }
};

//Function finds and renders all of the tasks that are due for today
const renderTasksForToday = function(){
    const controller = new _classes__WEBPACK_IMPORTED_MODULE_1__.Controller();
    const projectsArray = controller.getProjectsArray();
    const today = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.todaysDate)();
    const title = document.querySelector('#project-title');

    removeAllTasksDOM();

    title.innerText = 'Due Today';

    for(let i = 0; i < projectsArray.length; i++){
        let taskList = projectsArray[i].taskList;
        for(let j = 0; j < taskList.length; j++){
            if(today === (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.reformatDate)(taskList[j].dueDate)){
                renderIndividualTask(taskList[j], taskList, projectsArray[i]);
            }
        }
    }
};

//Function finds and renders all of the tasks that are due for this month
const renderTasksForMonth = function(){
    const controller = new _classes__WEBPACK_IMPORTED_MODULE_1__.Controller();
    const projectsArray = controller.getProjectsArray();
    const datesInThisMonth = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.reformatThisMonth)((0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.findThisMonth)());
    const title = document.querySelector('#project-title');

    removeAllTasksDOM();

    title.innerText = 'Due This Month';

    for(let i = 0; i < projectsArray.length; i++){
        let taskList = projectsArray[i].taskList;
        for(let j = 0; j < taskList.length; j++){
            if(datesInThisMonth.includes((0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.reformatDate)(taskList[j].dueDate))){
                renderIndividualTask(taskList[j], taskList, projectsArray[i]);
            }
        }
    }
};

//Function makes the decision on how the tasks should be rendered (by project 
//or time frame)
const chooseRenderType = function(selectedTasksType, project){
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


/***/ }),

/***/ "./src/helperFunction.js":
/*!*******************************!*\
  !*** ./src/helperFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChildren: () => (/* binding */ appendChildren),
/* harmony export */   assignClass: () => (/* binding */ assignClass),
/* harmony export */   checkLocal: () => (/* binding */ checkLocal),
/* harmony export */   clearLocal: () => (/* binding */ clearLocal),
/* harmony export */   findThisMonth: () => (/* binding */ findThisMonth),
/* harmony export */   findThisWeek: () => (/* binding */ findThisWeek),
/* harmony export */   getArrayLocal: () => (/* binding */ getArrayLocal),
/* harmony export */   reformatDate: () => (/* binding */ reformatDate),
/* harmony export */   reformatThisMonth: () => (/* binding */ reformatThisMonth),
/* harmony export */   reformatThisWeek: () => (/* binding */ reformatThisWeek),
/* harmony export */   removeArrayLocal: () => (/* binding */ removeArrayLocal),
/* harmony export */   removeCharacter: () => (/* binding */ removeCharacter),
/* harmony export */   storeArrayLocal: () => (/* binding */ storeArrayLocal),
/* harmony export */   todaysDate: () => (/* binding */ todaysDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");



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

//Function gets the current date and returns it in a suitable format
//to be displayed on the page
const todaysDate = function(){
    const fullDate = new Date();

    let day = fullDate.getDate();
    let month = fullDate.getMonth() + 1;
    let year = fullDate.getFullYear();

    let currentDate = `${day}/${month}/${year}`;
    return currentDate;
};

//This function gets a date created from the date input and reformats 
//it to be more suitable for display on the page
const reformatDate = function(date){
    const reformattedDate =  date.split("-").reverse().join("/");
    let newReformattedDate = '';
    let character = '0';
    if(reformattedDate[3] === character){
        newReformattedDate = removeCharacter(4, reformattedDate);
    } else{
        newReformattedDate = reformattedDate;
    }
    
    return newReformattedDate;
};

//Function finds all the days in the current week and returns them as an 
//array  
const findThisWeek = function(){
    const dateArray = [];
    const date = new Date();
    let nextDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date, 1);

    dateArray.push(date);

    while(nextDay.getDay() !== 1){
        dateArray.push(nextDay);
        nextDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(nextDay, 1);
    };

    return dateArray;
};


//Function reformats the full dates in the week array so that the dates only 
//contain the relevant information
const reformatThisWeek = function(week){
    const weekDayArray = [];
    for(let i = 0; i < week.length; i++){
        let day = week[i].getDate();
        let month = week[i].getMonth() + 1;
        let year = week[i].getFullYear();

        let thisFullDay = `${day}/${month}/${year}`;
        
        weekDayArray.push(thisFullDay);
    }
    return weekDayArray;
};

//Function finds all the dates in the current month and returns it as an 
//array
const findThisMonth = function(){
    const dateArray = [];
    const date = new Date();
    let nextDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date, 1);
    let currentMonth = date.getMonth() + 1;

    dateArray.push(date);

    while(nextDay.getMonth()+ 1 === currentMonth){
        dateArray.push(nextDay);
        nextDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(nextDay, 1);
    }
    return dateArray;
};

//Function reformats the dates in the month array so that the dates contain 
//only the relevant information
const reformatThisMonth = function(originalMonthArray){
    const monthArray = [];
    for(let i = 0; i < originalMonthArray.length; i++){
        let day = originalMonthArray[i].getDate();
        let month = originalMonthArray[i].getMonth() + 1;
        let year = originalMonthArray[i].getFullYear();

        let thisFullDay = `${day}/${month}/${year}`;
        
        monthArray.push(thisFullDay);
    };
    return monthArray
};


//Function removes a character from a specified position of a given string
const removeCharacter = function(position, string) {
    let newString =
        string.substr(0, position - 1)+
        string.substr(
            position,
            string.length
        );
    return newString;
};


//Function to store an array into local storage
const storeArrayLocal = function(keyName, array){
    localStorage.setItem(keyName, JSON.stringify(array));
};

//Function returns an array from local storage
const getArrayLocal = function(keyName){
    let array;
    if(checkLocal(keyName) === true){
        array = JSON.parse(localStorage.getItem(keyName));
    } else{
        array = [];
    }
    return array;
};

//Function checks for existing array stored in local storage
//and removes it
const removeArrayLocal = function(keyName){
    localStorage.removeItem(keyName);
};

//Function clears the local storage
const clearLocal = function(){
    localStorage.clear();
}

//Check local storage for a key
const checkLocal = function(key){
    if(key in localStorage){
        return true;
    } else{
        return false;
    }
};

console.log(checkLocal('Projects Array'));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
/* harmony import */ var _handleTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleTask */ "./src/handleTask.js");





(0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.renderNewProjectBtn)(_classes__WEBPACK_IMPORTED_MODULE_1__.Controller.projectsArray);

document.querySelector('#tasks-today').addEventListener('click', ()=>{
    _classes__WEBPACK_IMPORTED_MODULE_1__.Storer.currentlySelected = 'Today';
    (0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.closeProjectForm)();
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.removeTaskForm)();
    (0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.setActiveCalenderButton)(document.querySelector('#tasks-today'))
    ;(0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.removeAddTaskButton)();
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.renderTasksForToday)();
});

document.querySelector('#tasks-week').addEventListener('click', ()=>{
    _classes__WEBPACK_IMPORTED_MODULE_1__.Storer.currentlySelected = 'Week';
    (0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.closeProjectForm)();
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.removeTaskForm)();
    (0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.setActiveCalenderButton)(document.querySelector('#tasks-week'))
    ;(0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.removeAddTaskButton)();
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.renderTasksForWeek)();
});

document.querySelector('#tasks-month').addEventListener('click', ()=>{
    _classes__WEBPACK_IMPORTED_MODULE_1__.Storer.currentlySelected = 'Month';
    (0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.closeProjectForm)();
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.removeTaskForm)();
    (0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.setActiveCalenderButton)(document.querySelector('#tasks-month'))
    ;(0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.removeAddTaskButton)();
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.renderTasksForMonth)();
});

document.querySelector('#remove-complete-tasks-button').addEventListener('click', () => {
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.removeCompletedTasks)();
    (0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.closeProjectForm)();
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_3__.removeTaskForm)();
});

let controller = new _classes__WEBPACK_IMPORTED_MODULE_1__.Controller();

console.log(controller.getProjectsArray());

(0,_handleProject__WEBPACK_IMPORTED_MODULE_0__.renderProject)(controller.getProjectsArray(), document.querySelector('.projects-container'));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlB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QUksZ0VBQWdCO0FBQ3BCLElBQUksMkRBQWM7QUFDbEIsSUFBSSx1RUFBdUI7QUFDM0IsSUFBSSxpRUFBbUI7QUFDdkIsSUFBSSxnRUFBbUI7QUFDdkIsQ0FBQzs7QUFFRDtBQUNBLElBQUksNENBQU07QUFDVixJQUFJLGdFQUFnQjtBQUNwQixJQUFJLDJEQUFjO0FBQ2xCLElBQUksdUVBQXVCO0FBQzNCLElBQUksaUVBQW1CO0FBQ3ZCLElBQUksK0RBQWtCO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQSxJQUFJLDRDQUFNO0FBQ1YsSUFBSSxnRUFBZ0I7QUFDcEIsSUFBSSwyREFBYztBQUNsQixJQUFJLHVFQUF1QjtBQUMzQixJQUFJLGlFQUFtQjtBQUN2QixJQUFJLGdFQUFtQjtBQUN2QixDQUFDOztBQUVEO0FBQ0EsSUFBSSxpRUFBb0I7QUFDeEIsSUFBSSxnRUFBZ0I7QUFDcEIsSUFBSSwyREFBYztBQUNsQixDQUFDOztBQUVELHFCQUFxQixnREFBVTs7QUFFL0I7O0FBRUEsNkRBQWEsK0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlcy9pbmRleFN0eWxlLmNzcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZXMvaW5kZXhTdHlsZS5jc3M/ZWNkOCIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3kvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2hhbmRsZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9oYW5kbGVUYXNrLmpzIiwid2VicGFjazovL3kvLi9zcmMvaGVscGVyRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHl7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDEwMHB4IDgwcHggYXV0byA1MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uaGVhZGVye1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgZGlzcGxheTogZmxleDs7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDNweCB3aGl0ZTtcbn1cblxuLm5ldy1wcm9qZWN0cy1mb3Jte1xuICAgIGdyaWQtcm93OiAyLzQ7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhlMWRkO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDtcbn1cblxuLm5ldy1wcm9qZWN0cy1mb3JtIGgye1xuICAgIGNvbG9yOiAjMjE0RTM0O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHdoaXRlLCAtMXB4IC0xcHggd2hpdGUsIDFweCAtMXB4IHdoaXRlLCAtMXB4IDFweCB3aGl0ZTtcbn1cblxuI25ldy1wcm9qZWN0LWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjQ0RDRENELCAxcHggMXB4IDNweCBpbnNldCAjQ0RDRENEO1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbi13cmFwcGVye1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLnByb2plY3QtZGF0ZS1uYXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLnByb2plY3QtZGF0ZS1uYXYgYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XG4gICAgY29sb3I6ICNERkY4RUI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udGFzay1zZWN0aW9ue1xuICAgIGdyaWQtcm93OiAyLzU7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhlMWRkO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4O1xufVxuXG4udGFzay1zZWN0aW9uLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG4udG8tZG8tbGlzdC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzAwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXJ7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogNC81O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGUxZGQ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAzcHg7XG59XG5cbi50YXNrLXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XG4gICAgY29sb3I6ICNERkY4RUI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xufVxuXG4uaGVhZGVyIGgxe1xuICAgIGNvbG9yOiAjREZGOEVCO1xufVxuXG4uZm9vdGVye1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgZ3JpZC1yb3c6IDUvNjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDNweCB3aGl0ZTtcbn1cblxuLnByb2plY3QtZm9ybS13cmFwcGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XG59XG5cbi5wcm9qZWN0LWZvcm0td3JhcHBlciBpbnB1dHtcbiAgICBoZWlnaHQ6IDMwcHhcbn1cblxuLnByb2plY3QtZm9ybS13cmFwcGVyIGlucHV0OmZvY3Vze1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbn1cblxuLnByb2plY3QtZm9ybS13cmFwcGVyIGJ1dHRvbntcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1mb3JtLXdyYXBwZXIgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjI4NjQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xufVxuXG4ucHJvamVjdC1mb3JtLWJ1dHRvbnMtd3JhcHBlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5pbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdC10aXRsZXN7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ucHJvamVjdC1kYXRlc3tcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yZW1vdmUtcHJvamVjdC1idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlOztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNwcm9qZWN0LXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzA0NGE0MjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggd2hpdGUsIC0xcHggLTFweCB3aGl0ZSwgMXB4IC0xcHggd2hpdGUsIC0xcHggMXB4IHdoaXRlO1xufVxuXG4uYWRkLXRhc2stYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XG4gICAgY29sb3I6ICNERkY4RUI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4jcmVtb3ZlLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjQ0RDRENELCAxcHggMXB4IDNweCBpbnNldCAjQ0RDRENEO1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucmVtb3ZlLXByb2plY3QtYnV0dG9uOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4IGJsYWNrLCBpbnNldCAtMXB4IC0xcHggMnB4IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDAsIDApO1xufVxuXG4udGFzay1mb3Jte1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTE3NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xufVxuXG4uZmllbGQtZWxlbWVudC13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5maWVsZC1lbGVtZW50LXdyYXBwZXIgbGFiZWx7XG4gICAgY29sb3I6ICNERkY4RUI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLm5ldy10YXNrLWJ1dHRvbnMtd3JhcHBlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi50YXNrLWZvcm0gYnV0dG9ue1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XG4gICAgY29sb3I6ICNERkY4RUI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWZvcm0gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjI4NjQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xufVxuXG4udGFzay1pbnB1dHtcbiAgICBoZWlnaHQ6IDMwcHhcbn1cblxuLnRhc2staW5wdXQ6Zm9jdXN7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xufVxuXG4udGFzay1jaGVjay13cmFwcGVye1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stY2hlY2std3JhcHBlciBpbnB1dHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG59XG5cbi50YXNrLWRlbGV0ZS1idXR0b257XG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTs7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXhTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsNkNBQTZDO0lBQzdDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJFQUEyRTtBQUMvRTs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMERBQTBEO0lBQzFELGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIs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QjtBQUN0Qjs7QUFFQTtJQUNJLDhEQUE4RDtJQUM5RCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxMDBweCA4MHB4IGF1dG8gNTBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4OztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDNweCB3aGl0ZTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0cy1mb3Jte1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZTFkZDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAzcHggO1xcbn1cXG5cXG4ubmV3LXByb2plY3RzLWZvcm0gaDJ7XFxuICAgIGNvbG9yOiAjMjE0RTM0O1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCB3aGl0ZSwgLTFweCAtMXB4IHdoaXRlLCAxcHggLTFweCB3aGl0ZSwgLTFweCAxcHggd2hpdGU7XFxufVxcblxcbiNuZXctcHJvamVjdC1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0NEQ0RDRCwgMXB4IDFweCAzcHggaW5zZXQgI0NEQ0RDRDtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uLXdyYXBwZXJ7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnByb2plY3QtZGF0ZS1uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDExMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1kYXRlLW5hdiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0NEQ0RDRCwgMXB4IDFweCAzcHggaW5zZXQgI0NEQ0RDRDtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGFzay1zZWN0aW9ue1xcbiAgICBncmlkLXJvdzogMi81O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhlMWRkO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweDtcXG59XFxuXFxuLnRhc2stc2VjdGlvbi1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi50by1kby1saXN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMwMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDIwMHB4KTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhlMWRkO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweDtcXG59XFxuXFxuLnRhc2std3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XFxufVxcblxcbi5oZWFkZXIgaDF7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAzcHggd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0td3JhcHBlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0td3JhcHBlciBpbnB1dHtcXG4gICAgaGVpZ2h0OiAzMHB4XFxufVxcblxcbi5wcm9qZWN0LWZvcm0td3JhcHBlciBpbnB1dDpmb2N1c3tcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLXdyYXBwZXIgYnV0dG9ue1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS13cmFwcGVyIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMjg2NDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ1dHRvbnMtd3JhcHBlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uaW5kaXYtcHJvamVjdC1jb250YWluZXJze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXN7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1kYXRlc3tcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3QtYnV0dG9ue1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlOztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMDQ0YTQyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCB3aGl0ZSwgLTFweCAtMXB4IHdoaXRlLCAxcHggLTFweCB3aGl0ZSwgLTFweCAxcHggd2hpdGU7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0NEQ0RDRCwgMXB4IDFweCAzcHggaW5zZXQgI0NEQ0RDRDtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNyZW1vdmUtY29tcGxldGUtdGFza3MtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdC1idXR0b246aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4IGJsYWNrLCBpbnNldCAtMXB4IC0xcHggMnB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAwLCAwKTtcXG59XFxuXFxuLnRhc2stZm9ybXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IC0xNzVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xcbn1cXG5cXG4uZmllbGQtZWxlbWVudC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5maWVsZC1lbGVtZW50LXdyYXBwZXIgbGFiZWx7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ubmV3LXRhc2stYnV0dG9ucy13cmFwcGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50YXNrLWZvcm0gYnV0dG9ue1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stZm9ybSBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjI4NjQ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG59XFxuXFxuLnRhc2staW5wdXR7XFxuICAgIGhlaWdodDogMzBweFxcbn1cXG5cXG4udGFzay1pbnB1dDpmb2N1c3tcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xcbn1cXG5cXG4udGFzay1jaGVjay13cmFwcGVye1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jaGVjay13cmFwcGVyIGlucHV0e1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9ue1xcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXhTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4U3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0NvbnRhaW5zIHRoZSBjbGFzc2VzIHJlcXVpcmVkIGZvciBteSBKYXZhU2NyaXB0IGFwcGxpY2F0aW9uXG5cbmltcG9ydCB7IGdldEFycmF5TG9jYWwgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvblwiO1xuXG4vL0EgY2xhc3MgY29uc3RydWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgbmV3IHByb2plY3RzXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKXtcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKTtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKHRoaXMudGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgfVxufTtcblxuLy9UaGlzIGlzIHRoZSBjbGFzcyBjb25zdHJ1Y3RvciBmb3Igb3VyIFRhc2tzXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUgPSBmYWxzZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUYXNrXCI7XG4gICAgfTsgXG5cbiAgICBjaGFuZ2VDb21wbGV0ZVN0YXR1cygpe1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRlID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG4vL1RoaXMgY2xhc3MgaGFzIGNvbnRyb2wgb3ZlciB0aGUgY29sbGVjdGlvbiBvZiB0aGUgcHJvamVjdHNcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgcHJvamVjdHNBcnJheSA9IGdldEFycmF5TG9jYWwoJ1Byb2plY3RzIEFycmF5Jyk7XG5cbiAgICBnZXRQcm9qZWN0c0FycmF5KCl7XG4gICAgICAgIHJldHVybiBDb250cm9sbGVyLnByb2plY3RzQXJyYXk7XG4gICAgfTtcblxuICAgIGFkZFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIENvbnRyb2xsZXIucHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICAgIH07XG5cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBDb250cm9sbGVyLnByb2plY3RzQXJyYXkuc3BsaWNlKENvbnRyb2xsZXIucHJvamVjdHNBcnJheS5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICB9O1xuICAgIFxufTtcblxuLy9DbGFzcyB0byBzdG9yZSB2YWx1ZXMgdGhhdCBhcmUgc2hhcmVkIHRocm91Z2hvdXQgdGhlIHdob2xlIG9mIHRoZSBwcm9ncmFtXG5leHBvcnQgY2xhc3MgU3RvcmVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfTtcblxuICAgIHN0YXRpYyBnZXQgY3VycmVudGx5U2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50bHlTZWxlY3RlZCB8fCB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50bHlTZWxlY3RlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50bHlTZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiwgcmVtb3ZlQXJyYXlMb2NhbCwgc3RvcmVBcnJheUxvY2FsLCB0b2RheXNEYXRlIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25cIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyByZW5kZXJDcmVhdGVBZGRUYXNrQnRuLCByZW5kZXJQcm9qZWN0VGFza3MsIHJlbW92ZUFsbFRhc2tzRE9NLCByZW1vdmVBZGRUYXNrQnV0dG9uLCByZW1vdmVUYXNrRm9ybSB9IGZyb20gXCIuL2hhbmRsZVRhc2tcIjtcbmltcG9ydCB7IENvbnRyb2xsZXIsIFN0b3Jlcn0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG4vL0EgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIGZvcm0gdGhhdCB3aWxsIGJlIHVzZWQgaW4gb3RoZXIgXG4vL2Z1bmN0aW9ucyB3aXRoaW4gdGhpcyBtb2R1bGVcbmV4cG9ydCBjb25zdCBjbG9zZVByb2plY3RGb3JtID0gZnVuY3Rpb24ocHJvamVjdHNMaXN0KXtcbiAgICAvL1NlbGVjdCB0aGUgZm9ybSBpbnB1dCBmaWVsZHNcbiAgICBjb25zdCBwcm9qZWN0Rm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLXdyYXBwZXInKTtcblxuICAgIC8vUmVtb3ZlIHRoZSBmb3JtIGlucHV0IGZpZWxkc1xuICAgIGlmKHByb2plY3RGb3JtV3JhcHBlcil7XG4gICAgICAgIHByb2plY3RGb3JtV3JhcHBlci5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgLy9SZS1SZW5kZXIgdGhlIFwiTmV3IFByb2plY3RcIiBidXR0b24gZm9yIHVzZSBhZ2FpblxuICAgIHJlbmRlck5ld1Byb2plY3RCdG4ocHJvamVjdHNMaXN0KTtcblxufTtcblxuLy9UaGlzIGZ1bmN0aW9uIHdpbGwgb3BlbiBhIHByb2plY3QgZm9ybSBhbGxvd2luZyB1c2VyIHRvIFxuLy9lbnRlciB0aGVpciBwcm9qZWN0IGlucHV0XG5leHBvcnQgY29uc3Qgb3BlblByb2plY3RGb3JtID0gZnVuY3Rpb24oYXJyYXlUb1N1Ym1pdCl7XG5cbiAgICAvL0NyZWF0ZSB0aGUgZmllbGQgZWxlbWVudHMgZm9yIHRoZSBmb3JtXG4gICAgY29uc3QgcHJvamVjdEZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbE5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAvL0FkZCB0aGUgaW5uZXIgdGV4dCB0byB0aGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgbmV3UHJvamVjdFN1Ym1pdC5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICAgIC8vQXNzaWduIGEgcGxhY2Vob2xkZXIgdG8gdGhlIGlucHV0IGVsZW1lbnRcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgVGl0bGUnKTtcbiAgICBcbiAgICAvL0Fzc2lnbiBjbGFzc2VzIHRvIHRoZSBlbGVtZW50c1xuICAgIHByb2plY3RGb3JtV3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdC1mb3JtLXdyYXBwZXInO1xuICAgIGJ1dHRvbnNXcmFwcGVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWZvcm0tYnV0dG9ucy13cmFwcGVyJztcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC5jbGFzc05hbWUgPSAnbmV3LXByb2plY3QtdGl0bGUtaW5wdXQnO1xuICAgIG5ld1Byb2plY3RTdWJtaXQuY2xhc3NOYW1lID0gJ25ldy1wcm9qZWN0LXN1Ym1pdCc7XG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0uY2xhc3NOYW1lID0gJ2NhbmNlbC1uZXctcHJvamVjdCc7XG5cbiAgICAvL0FkZCB0aGUgcmVsYXRpdmUgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBidXR0b24gZWxlbWVudHNcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VQcm9qZWN0Rm9ybShhcnJheVRvU3VibWl0KTtcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZighbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1lvdSBtdXN0IGVudGVyIGEgdGl0bGUgZm9yIHRoZSBwcm9qZWN0IScpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBzdWJtaXROZXdQcm9qZWN0KGFycmF5VG9TdWJtaXQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL1NlbGVjdCB0aGUgZWxlbWVudCB3aGVyZSB0aGUgZm9ybSB3aWxsIGJlIGF0dGFjaGVkIHRvXG4gICAgY29uc3QgbmV3UHJvamVjdHNGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0cy1mb3JtJyk7XG5cbiAgICAvL0F0dGFjaCB0aGUgZm9ybSB0byB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgIGFwcGVuZENoaWxkcmVuKGJ1dHRvbnNXcmFwcGVyLCBuZXdQcm9qZWN0U3VibWl0LCBjYW5jZWxOZXdQcm9qZWN0Rm9ybSk7XG4gICAgYXBwZW5kQ2hpbGRyZW4ocHJvamVjdEZvcm1XcmFwcGVyLCBuZXdQcm9qZWN0VGl0bGVJbnB1dCwgYnV0dG9uc1dyYXBwZXIpO1xuXG4gICAgbmV3UHJvamVjdHNGb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtV3JhcHBlcik7XG59O1xuXG4vL0Z1bmN0aW9uIHRoYXQgcmVuZGVycyB0aGUgcHJvamVjdCBpbnRvIHRoZSBET00gdG8gYmUgXG4vL2Rpc3BsYXllZCBvbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2plY3QgPSBmdW5jdGlvbihhcnJheSwgY29udGFpbmVyKXtcbiAgICBcbiAgICAvL0NsZWFyIHRoZSBET00gYmVmb3JlIHJlbmRlcmluZyBhZ2FpblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vTG9vcCB0aHJvdWdoIHRoZSBnaXZlbiBhcnJheVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vSW5pdGlhbGlzZSBvdXIgdmFyaWFibGVzIHVzZWQgdGhyb3VnaG91dCB0aGUgZnVuY3Rpb25cbiAgICAgICAgbGV0IHByb2plY3QgPSBhcnJheVtpXTtcbiAgICAgICAgbGV0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBsZXQgcHJvamVjdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcjtcblxuICAgICAgICAvL1NldCBpbm5lciB0ZXh0IG9mIHRoZSBlbGVtZW50cyB0byB0aGUgdmFsdWVzIGluc2lkZVxuICAgICAgICAvL29mIHRoZSBnaXZlbiBvYmplY3RzXG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBwcm9qZWN0RGF0ZS5pbm5lclRleHQgPSBwcm9qZWN0LmRhdGU7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuXG4gICAgICAgIC8vR2l2ZSB0aGUgcHJvamVjdCBlbGVtZW50cyBjbGFzcyBuYW1lcyBmb3IgZnV0dXJlIHN0eWxpbmdcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NOYW1lID0gJ2luZGl2LXByb2plY3QtY29udGFpbmVycyc7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC10aXRsZXMnO1xuICAgICAgICBwcm9qZWN0RGF0ZS5jbGFzc05hbWUgPSAncHJvamVjdC1kYXRlcyc7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NOYW1lID0gJ3JlbW92ZS1wcm9qZWN0LWJ1dHRvbic7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uaWQgPSBgcmVtb3ZlLXByb2plY3QtYnV0dG9uLSR7aX1gO1xuXG4gICAgICAgIC8vUmVuZGVyIHRoZSBBZGQgVGFzayBCdXR0b25cbiAgICAgICAgLy9yZW5kZXJDcmVhdGVBZGRUYXNrQnRuKHByb2plY3RFbGVtZW50LCBwcm9qZWN0KTtcblxuICAgICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3JlbW92ZS1wcm9qZWN0LWJ1dHRvbi0ke2l9YCkpe1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFycmF5ID0gY29udHJvbGxlci5nZXRQcm9qZWN0c0FycmF5KCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQXJyYXlMb2NhbCgnUHJvamVjdHMgQXJyYXknKTtcbiAgICAgICAgICAgICAgICBzdG9yZUFycmF5TG9jYWwoJ1Byb2plY3RzIEFycmF5JywgY3VycmVudEFycmF5KTtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0KGFycmF5LCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsVGFza3NET00oKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgU3RvcmVyLmN1cnJlbnRseVNlbGVjdGVkID0gJ1Byb2plY3QnO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsbFRhc2tzRE9NKCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVRhc2tGb3JtKCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ3JlYXRlQWRkVGFza0J0bihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuLXdyYXBwZXInKSxwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2l9YCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBjaGlsZCBlbGVtZW50cyB0byB0aGVpciBwYXJlbnQgZWxlbWVudFxuICAgICAgICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0RWxlbWVudCwgcHJvamVjdFRpdGxlLCBwcm9qZWN0RGF0ZSwgcmVtb3ZlUHJvamVjdEJ0bik7XG5cblxuICAgICAgICAvL0FwcGVuZCB0aGUgZGl2IHRvIHRoZSBnaXZlbiBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcblxuICAgIH1cbn07XG5cbi8vRnVuY3Rpb24gcmUtcmVuZGVycyB0aGUgXCJOZXcgUHJvamVjdFwiIGJ1dHRvbiBhZ2FpbiB0byB0aGUgXG4vL0RPTVxuZXhwb3J0IGNvbnN0IHJlbmRlck5ld1Byb2plY3RCdG4gPSBmdW5jdGlvbihwcm9qZWN0QXJyYXkpe1xuICAgIGlmKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtYnV0dG9uJykpe1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld1Byb2plY3RCdG4uaW5uZXJUZXh0ID0gJ05ldyBQcm9qZWN0JztcbiAgICAgICAgbmV3UHJvamVjdEJ0bi5pZCA9ICduZXctcHJvamVjdC1idXR0b24nO1xuXG4gICAgICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciBiYWNrIHRvIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uXG4gICAgICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgb3BlblByb2plY3RGb3JtKHByb2plY3RBcnJheSk7XG4gICAgICAgICAgICBlLnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9BcHBlbmQgdGhlIGJ1dHRvbiBiYWNrIHRvIHRoZSBjb3JyZWN0IGRpdlxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtYnV0dG9uLXdyYXBwZXInKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuXG4gICAgICAgIHJlbW92ZUFsbFRhc2tzRE9NKCk7XG4gICAgfTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBhZGQgYSBuZXcgUHJvamVjdCB0byBhIGdpdmVuIHByb2plY3RzTGlzdFxuZXhwb3J0IGNvbnN0IHN1Ym1pdE5ld1Byb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0c0xpc3Qpe1xuICAgIC8vU2VsZWN0IHRoZSB0aXRsZSBpbnB1dCBlbGVtZW50IGZvciB0aGUgcHJvamVjdCBmb3JtXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtdGl0bGUtaW5wdXQnKTtcblxuICAgIC8vQXNzaWduIHRoZSB2YWx1ZSBlbnRlcmVkIGludG8gdGhlIHRpdGxlIGVsZW1lbnQgdG8gYSB2YXJpYWJsZVxuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlOyAgICBcblxuICAgIC8vQ3JlYXRlIGEgbmV3IHByb2plY3Qgd2l0aCB0aGUgZ2l2ZW4gdGl0bGUsIGRhdGUgYW5kIHByb2plY3RzTGlzdFxuICAgIC8vdG8gc3RvcmUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdFRpdGxlLCB0b2RheXNEYXRlKCkpO1xuXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG4gICAgXG4gICAgLy9BZGQgdGhlIHByb2plY3QgdG8gdGhlIGdpdmVuIHByb2plY3RzIExpc3RcbiAgICBjb250cm9sbGVyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAvL0NsZWFyIHRoZSBsb2NhbCBzdG9yYWdlIG9mIHRoZSBwcm9qZWN0cyBhcnJheSBiZWZvcmUgXG4gICAgLy9jcmVhdGluZyBhIG5ldyBtb2RpZmllZCBvbmVcbiAgICByZW1vdmVBcnJheUxvY2FsKCdQcm9qZWN0cyBBcnJheScpO1xuXG4gICAgLy9TdG9yZSB0aGUgcHJvamVjdHMgYXJyYXkgaW50byBsb2NhbCBzdG9yYWdlXG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBjb250cm9sbGVyLmdldFByb2plY3RzQXJyYXkoKTtcbiAgICBzdG9yZUFycmF5TG9jYWwoJ1Byb2plY3RzIEFycmF5JywgcHJvamVjdHNBcnJheSk7XG5cbiAgICAvL1JlbmRlciB0aGUgcHJvamVjdHMgaW4gdGhlIHByb2plY3RzIGxpc3QgaW50byB0aGUgZ2l2ZW4gY29udGFpbmVyXG4gICAgcmVuZGVyUHJvamVjdChwcm9qZWN0c0xpc3QsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKSk7XG5cbiAgICAvL0Nsb3NlIHRoZSBwcm9qZWN0IGZvcm1cbiAgICBjbG9zZVByb2plY3RGb3JtKHByb2plY3RzTGlzdCk7XG5cbiAgICAvL1JlbW92ZSBhbnkgY3VycmVudGx5IGFjdGl2ZSBwcm9qZWN0IHRpdGxlIGFuZCB0YXNrIFxuICAgIC8vY3JlYXRpb24gYnV0dG9uXG4gICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJykuaW5uZXJUZXh0ID0gJyc7XG59O1xuXG4vL0Z1bmN0aW9uIHJlbW92ZXMgdGhlIGFjdGl2ZSBzdHlsZSBlZmZlY3QgZnJvbSBhbGwgdGhlIGJ1dHRvbnMgb2YgdGhlIG5hdiBcbi8vaW4gdGhlIHNpZGUgYmFyXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsQWN0aXZlQnV0dG9ucyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgYWxsUHJvamVjdEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZGl2LXByb2plY3QtY29udGFpbmVycycpO1xuICAgIGNvbnN0IGFsbENhbGVuZGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWRhdGUtbmF2IGJ1dHRvbicpO1xuXG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RFbGVtZW50cyl7XG4gICAgICAgIHByb2plY3Quc3R5bGUuYm94U2hhZG93ID0gJzFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQic7XG4gICAgfTtcblxuICAgIGZvcihsZXQgY2FsZW5kZXJCdXR0b24gb2YgYWxsQ2FsZW5kZXJCdXR0b25zKXtcbiAgICAgICAgY2FsZW5kZXJCdXR0b24uc3R5bGUuYm94U2hhZG93ID0gJzFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQic7XG4gICAgfTtcbn1cblxuLy9GdW5jdGlvbiB0byBzaG93IHdoaWNoIHByb2plY3QgaXMgY3VycmVudGx5IGNob3Nlbi5cbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gZnVuY3Rpb24oY3VycmVudFByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gJyc7XG4gICAgXG4gICAgcmVtb3ZlQWxsQWN0aXZlQnV0dG9ucygpXG5cbiAgICBpZihjdXJyZW50UHJvamVjdCl7XG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgICAgICBjdXJyZW50UHJvamVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgNHB4IDRweCA2cHggYmxhY2ssIGluc2V0IC00cHggLTRweCA2cHggYmxhY2ssIDFweCAxcHggM3B4ICNERkY4RUIsLTFweCAtMXB4IDNweCAjREZGOEVCJztcbiAgICB9O1xufTtcblxuLy9GdW5jdGlvbiBzaG93cyB3aGljaCBjYWxlbmRlciBuYXYgYnV0dG9uIGlzIGN1cnJlbnRseSBjaG9zZW4uXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlQ2FsZW5kZXJCdXR0b24gPSBmdW5jdGlvbihidXR0b24pe1xuICAgIHJlbW92ZUFsbEFjdGl2ZUJ1dHRvbnMoKTtcbiAgICBidXR0b24uc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDRweCA0cHggNnB4IGJsYWNrLCBpbnNldCAtNHB4IC00cHggNnB4IGJsYWNrLCAxcHggMXB4IDNweCAjREZGOEVCLC0xcHggLTFweCAzcHggI0RGRjhFQic7XG59XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiwgYXNzaWduQ2xhc3MsIGZpbmRUaGlzTW9udGgsIGZpbmRUaGlzV2VlaywgcmVmb3JtYXREYXRlLCByZWZvcm1hdFRoaXNNb250aCwgcmVmb3JtYXRUaGlzV2VlaywgdG9kYXlzRGF0ZX0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25cIjtcbmltcG9ydCB7IENvbnRyb2xsZXIgLCBTdG9yZXJ9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IHJlbW92ZUFsbEFjdGl2ZUJ1dHRvbnMgfSBmcm9tIFwiLi9oYW5kbGVQcm9qZWN0XCI7XG5cbi8vRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmb3JtIHVzZWQgZm9yIG5ldyB0YXNrcy5cbi8vUmVxdWlyZXMgYW4gYXJndW1lbnQgZm9yIHRoZSBlbGVtZW50IHRoZSBmb3JtIHdpbGwgYmUgXG4vL2NyZWF0ZWQgaW5cbmV4cG9ydCBjb25zdCBvcGVuVGFza0Zvcm0gPSBmdW5jdGlvbihlbGVtZW50VG9BcHBlbmRUbywgY3VycmVudFByb2plY3Qpe1xuXG4gICAgLy9TZWxlY3QgdGhlIFwiQWRkIHRhc2tcIiB0aGF0IHdlIHdhbnQgdG8gYWx3YXlzIGFwcGVuZCB0aGUgXG4gICAgLy9mb3JtIGFmdGVyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcblxuICAgIC8vQ3JlYXRlIGFsbCBvZiB0aGUgZmllbGQgZWxlbWVudHMgYW5kIHRoZWlyIHdyYXBwZXJzIFxuICAgIC8vcmVxdWlyZWQgZm9yIGEgdGFza1xuICAgIGNvbnN0IHRhc2tGb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvbnN0IHRhc2tEdWVEYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgLy9Bc3NpZ24gb3B0aW9ucyB0byB0aGUgcHJpb3JpdHkgZHJvcCBkb3duIGZpZWxkXG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgLy9TZXQgdGhlIGF0dHJpYnV0ZXMgZm9yIHRoZSBkdWUgZGF0ZSBlbGVtZW50cyBpbiB0aGUgZm9ybVxuICAgIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZS1pbnB1dFwiKTtcbiAgICB0YXNrVGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZS1pbnB1dFwiKTtcblxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgICB0YXNrRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcblxuICAgIHRhc2tEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZS1kYXRlLWlucHV0XCIpO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdGFza0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWUtZGF0ZS1pbnB1dFwiKTtcblxuICAgIHRhc2tQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eS1pbnB1dFwiKTtcbiAgICB0YXNrUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eS1pbnB1dFwiKTtcblxuICAgIC8vU2V0IHRoZSBsYWJlbCB2YWx1ZXNcbiAgICB0YXNrVGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdGxlOlwiO1xuICAgIHRhc2tEZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246XCI7XG4gICAgdGFza0R1ZURhdGVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOlwiO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHkgTGV2ZWxcIjtcblxuICAgIC8vQXNzaWduIGEgY2xhc3MgdG8gdGhlIGZpZWxkIGVsZW1lbnQgd3JhcHBlcnNcbiAgICBhc3NpZ25DbGFzcyhcImZpZWxkLWVsZW1lbnQtd3JhcHBlclwiLCB0YXNrVGl0bGVXcmFwcGVyLCB0YXNrRGVzY3JpcHRpb25XcmFwcGVyLCB0YXNrRHVlRGF0ZVdyYXBwZXIsIHRhc2tQcmlvcml0eVdyYXBwZXIpO1xuXG4gICAgLy9BcHBlbmQgYW55IGVsZW1lbnRzIHRvIHRoZWlyIHdyYXBwZXJzXG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza1RpdGxlV3JhcHBlciwgdGFza1RpdGxlTGFiZWwsIHRhc2tUaXRsZUlucHV0KTtcbiAgICBhcHBlbmRDaGlsZHJlbih0YXNrRGVzY3JpcHRpb25XcmFwcGVyLCB0YXNrRGVzY3JpcHRpb25MYWJlbCwgdGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tEdWVEYXRlV3JhcHBlciwgdGFza0R1ZURhdGVMYWJlbCwgdGFza0R1ZURhdGVJbnB1dCk7XG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza1ByaW9yaXR5V3JhcHBlciwgdGFza1ByaW9yaXR5TGFiZWwsIHRhc2tQcmlvcml0eUlucHV0KTtcblxuICAgIC8vQXNzaWduIGFsbCBvZiB0aGUgZmllbGQgZWxlbWVudHMgYSBjbGFzcyBuYW1lXG4gICAgdGFza0Zvcm1XcmFwcGVyLmNsYXNzTmFtZSA9ICd0YXNrLWZvcm0nO1xuICAgIHRhc2tUaXRsZUlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG4gICAgdGFza0R1ZURhdGVJbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuXG4gICAgLy9Bc3NpZ24gcGxhY2Vob2xkZXIgdmFsdWVzIHRvIGFsbCBvZiB0aGUgaW5wdXRzXG4gICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIFRpdGxlJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIERlc2NyaXB0aW9uJyk7XG4gICAgdGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgRHVlIERhdGUnKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgUHJpb3JpdHkgTGV2ZWwnKTtcblxuICAgIC8vQXNzaWduIGZpZWxkIGVsZW1lbnRzIGFuIElEXG4gICAgdGFza1RpdGxlSW5wdXQuaWQgPSAndGFzay10aXRsZS1pbnB1dCc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAndGFzay1kZXNjcmlwdGlvbi1pbnB1dCc7XG4gICAgdGFza0R1ZURhdGVJbnB1dC5pZCA9ICd0YXNrLWR1ZS1kYXRlLWlucHV0JztcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5pZCA9ICd0YXNrLXByaW9yaXR5LWlucHV0JztcblxuXG4gICAgaGlnaFByaW9yaXR5LmlubmVyVGV4dCA9ICdIaWdoIFByaW9yaXR5JztcbiAgICBtZWRpdW1Qcmlvcml0eS5pbm5lclRleHQgPSAnTWVkaXVtIFByaW9yaXR5JztcbiAgICBsb3dQcmlvcml0eS5pbm5lclRleHQgPSAnTG93IFByaW9yaXR5JztcblxuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tQcmlvcml0eUlucHV0LCBoaWdoUHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBsb3dQcmlvcml0eSk7XG5cblxuICAgIC8vQ3JlYXRlIHRoZSBidXR0b24gZWxlbWVudHMgZm9yIHRoZSBmb3JtXG4gICAgY29uc3QgbmV3VGFza0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdUYXNrU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3VGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9Bc3NpZ24gdGhlIGJ1dHRvbiBlbGVtZW50cyB3aXRoIGEgY2xhc3MgbmFtZVxuICAgIG5ld1Rhc2tCdG5zLmNsYXNzTmFtZSA9ICduZXctdGFzay1idXR0b25zLXdyYXBwZXInXG4gICAgbmV3VGFza1N1Ym1pdEJ0bi5jbGFzc05hbWUgPSAnc3VibWl0LXRhc2snO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uY2xhc3NOYW1lID0gJ2NhbmNlbC10YXNrJztcblxuICAgIC8vSW5zZXJ0IGlubmVyIHRleHQgaW50byB0aGUgYnV0dG9ucyB0byBkaXNwbGF5IHVzZVxuICAgIG5ld1Rhc2tTdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNhbmNlbCBhbmQgcmVtb3ZlIHRoZSBmb3JtIGZyb20gXG4gICAgLy90aGUgRE9NXG4gICAgbmV3VGFza0NhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICByZW1vdmVUYXNrRm9ybSgpO1xuICAgICAgICByZW5kZXJDcmVhdGVBZGRUYXNrQnRuKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdCk7XG4gICAgfSlcblxuICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHJlbmRlciB0aGUgdGFzayB0byBzdWJtaXQgYnV0dG9uXG4gICAgbmV3VGFza1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bi13cmFwcGVyJykgLGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICBjaG9vc2VSZW5kZXJUeXBlKCdQcm9qZWN0JywgY3VycmVudFByb2plY3QpO1xuICAgICAgICByZW1vdmVUYXNrRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgLy9BcHBlbmQgdGhlIGZpZWxkIGVsZW1lbnRzIHRvIHRoZSBnaXZlbiBjb250YWluZXIgZWxlbWVudFxuICAgIGFwcGVuZENoaWxkcmVuKG5ld1Rhc2tCdG5zLCBuZXdUYXNrU3VibWl0QnRuLCBuZXdUYXNrQ2FuY2VsQnRuKTtcbiAgICBhcHBlbmRDaGlsZHJlbih0YXNrRm9ybVdyYXBwZXIsIHRhc2tUaXRsZVdyYXBwZXIsIHRhc2tEZXNjcmlwdGlvbldyYXBwZXIsIHRhc2tEdWVEYXRlV3JhcHBlciwgdGFza1ByaW9yaXR5V3JhcHBlciwgbmV3VGFza0J0bnMpO1xuXG4gICAgLy9BcHBlbmQgdGhlIGZvcm0gdG8gYWZ0ZXIgdGhlIFwiQWRkIFRhc2sgQnV0dG9uXCI7XG4gICAgYWRkVGFza0J0bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXNrRm9ybVdyYXBwZXIsIGFkZFRhc2tCdG4ubmV4dFNpYmxpbmcpO1xuXG59O1xuXG4vL0Z1bmN0aW9uIHRoYXQgcmVtb3ZlcyBhbGwgb2YgdGhlIGZvcm0gZWxlbWVudHMgZnJvbSB0aGUgRE9NXG5leHBvcnQgY29uc3QgcmVtb3ZlVGFza0Zvcm0gPSBmdW5jdGlvbigpe1xuICAgIC8vU2VsZWN0IGFsbCBvZiB0aGUgZm9ybSBlbGVtZW50cyB1c2luZyB0aGVpciBjbGFzcyBuYW1lXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5cbiAgICAvL0ZvciBldmVyeSBmaWVsZCBpbnB1dCBpbiB0aGUgbGlzdCBvZiBmaWVsZCBpbnB1dHNcbiAgICBpZighdGFza0Zvcm0pe1xuICAgICAgICByZXR1cm47XG4gICAgfWVsc2V7XG4gICAgICAgIHRhc2tGb3JtLnJlbW92ZSgpO1xuICAgIH07XG5cbn07XG5cbi8vRnVuY3Rpb24gdG8gcmVuZGVyIHRoZSB0YXNrcyBvZiBhIHByb2plY3Qgb24gdG8gdGhlIERPTVxuLy90byBiZSBkaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0VGFza3MgPSBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICAvL0ZpcnN0IHRoZSB0YXNrcyBjb250YWluZXIgbXVzdCBiZSBlbXB0aWVkXG4gICAgcmVtb3ZlQWxsVGFza3NET00oKVxuXG4gICAgLy9Bc3NpZ24gYSB2YXJpYWJsZSB0byBhbiBhcnJheSBvZiB0aGUga2V5IG5hbWVzIGZyb20gZWFjaFxuICAgIC8vcHJvamVjdC5cbiAgICBsZXQgdGFza0xpc3QgPSBwcm9qZWN0LnRhc2tMaXN0O1xuXG4gICAgLy9Mb29wIHRocm91Z2ggdGhlIGtleSBhcnJheXMgdG8gZmluZCBhbnkgdG8gZG8ga2V5cyBpbnNpZGUgXG4gICAgLy9vZiB0aGUgcHJvamVjdHMuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gdGFza0xpc3RbaV07XG4gICAgICAgIC8vSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgXG4gICAgICAgIC8vdXNlZCB0aHJvdWdoIHRoZSBmdW5jdGlvbiB0byB0aGVpciBkb20gZWxlbWVudHNcbiAgICAgICAgcmVuZGVySW5kaXZpZHVhbFRhc2soY3VycmVudFRhc2ssIHRhc2tMaXN0LCBwcm9qZWN0KVxuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIHJlbmRlcnMgYSBnaXZlbiBpbmRpdmlkdWFsIHRhc2sgb250byB0aGUgRE9NXG5leHBvcnQgY29uc3QgcmVuZGVySW5kaXZpZHVhbFRhc2sgPSBmdW5jdGlvbih0YXNrLCB0YXNrTGlzdCwgcHJvamVjdCl7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWxpc3QtY29udGFpbmVyXCIpXG5cbiAgICAvL0luaXRpYWxpemUgYWxsIG9mIHRoZSB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIFxuICAgIC8vdXNlZCB0aHJvdWdoIHRoZSBmdW5jdGlvbiB0byB0aGVpciBkb20gZWxlbWVudHNcbiAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY2hlY2sgPSByZW5kZXJUYXNrQ2hlY2tCb3godGFzaywgdGFza0xpc3QpO1xuICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSByZW5kZXJEZWxldGVUYXNrQnRuKHByb2plY3QsIHRhc2spO1xuXG5cbiAgICAvL0FwcGVuZCB0ZXh0IHRvIGVsZW1lbnRzIGZyb20gdGhlaXIgcmVzcGVjdGl2ZSBcbiAgICAvL3Byb3BlcnRpZXNcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSByZWZvcm1hdERhdGUodGFzay5kdWVEYXRlKTtcbiAgICBwcmlvcml0eS5pbm5lclRleHQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgLy9Bc3NpZ24gYSBjbGFzcyBuYW1lIHRvIHRoZXNlIGVsZW1lbnRzIGZvciBmdXR1cmVcbiAgICAvL3N0eWxpbmcuXG4gICAgYXNzaWduQ2xhc3MoJ3Rhc2stcHJvcGVydGllcycsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgdGFza1dyYXBwZXIuY2xhc3NOYW1lID0gJ3Rhc2std3JhcHBlcic7XG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc05hbWUgPSAndGFzay1kZWxldGUtYnV0dG9uJztcblxuICAgIC8vQXBwZW5kIGFsbCBvZiB0aGUgbmV3IGVsZW1lbnRzIHRvIHRoZSBjb250YWluZXJcbiAgICAvL2ZvciB0aGlzIHRvIGRvIG9iamVjdFxuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tXcmFwcGVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVjaywgdGFza0RlbGV0ZUJ0bik7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpXG59O1xuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgYW5kIHJldHVybiB0aGUgY2hlY2tib3ggZm9yIGVhY2ggdGFza1xuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tDaGVja0JveCA9IGZ1bmN0aW9uKHRoaXNUYXNrLCB0YXNrQXJyYXkpe1xuICAgIC8vQ3JlYXRlIHdyYXBwZXIgZm9yIGNoZWNrXG4gICAgY29uc3QgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgLy9DcmVhdGUgdGhlIGNoZWNrYm94IGVsZW1lbnRcbiAgICBjb25zdCB0YXNrQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICB0YXNrQ2hlY2tCb3guc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXNUYXNrLnRpdGxlICsgKHRhc2tBcnJheS5pbmRleE9mKHRoaXNUYXNrKSl9LWNoZWNrLWJveGApO1xuXG4gICAgLy9DcmVhdGUgdGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3hcbiAgICBjb25zdCB0YXNrQ2hlY2tCb3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0NoZWNrQm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0aGlzVGFzay50aXRsZSArICh0YXNrQXJyYXkuaW5kZXhPZih0aGlzVGFzaykpfS1jaGVjay1ib3hgKTtcbiAgICB0YXNrQ2hlY2tCb3hMYWJlbC5pbm5lclRleHQgPSAnQ29tcGxldGVkPyc7XG5cbiAgICAvL0V2ZW50IGxpc3RlbmVyIGZvciBjaGVja2JveFxuICAgIHRhc2tDaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKT0+IHtcbiAgICAgICAgdGhpc1Rhc2suY2hhbmdlQ29tcGxldGVTdGF0dXMoKTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXNUYXNrLmNvbXBsZXRlID09PSB0cnVlKXtcbiAgICAgICAgdGFza0NoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICB0YXNrQ2hlY2suY2xhc3NOYW1lID0gJ3Rhc2stY2hlY2std3JhcHBlcic7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50cyB0byB0aGUgd3JhcHBlclxuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tDaGVjaywgdGFza0NoZWNrQm94TGFiZWwsIHRhc2tDaGVja0JveCk7XG5cbiAgICByZXR1cm4gdGFza0NoZWNrO1xuXG59O1xuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgYW5kIHJldHVybnMgdGhlICdkZWxldGUgYnV0dG9uJyB3aGljaCB3aWxsIFxuLy9iZSB1c2VkIG9mIGVhY2ggdGFza1xuZXhwb3J0IGNvbnN0IHJlbmRlckRlbGV0ZVRhc2tCdG4gPSBmdW5jdGlvbih0aGlzUHJvamVjdCwgdGhpc1Rhc2spe1xuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVUYXNrQnRuLmlubmVyVGV4dCA9ICdYJztcbiAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgbGV0IGN1cnJlbnRSZW5kZXJUeXBlID0gU3RvcmVyLmN1cnJlbnRseVNlbGVjdGVkO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UmVuZGVyVHlwZSk7XG4gICAgICAgIHRoaXNQcm9qZWN0LnJlbW92ZVRhc2sodGhpc1Rhc2spO1xuICAgICAgICBjaG9vc2VSZW5kZXJUeXBlKGN1cnJlbnRSZW5kZXJUeXBlLCB0aGlzUHJvamVjdCk7XG4gICAgfSlcbiAgICByZXR1cm4gZGVsZXRlVGFza0J0bjtcbn07XG5cbi8vRnVuY3Rpb24gY3JlYXRlcyBvdXIgXCJBZGQgVGFzayBCdXR0b25cIiBnaXZlbiBhIHBhcmVudCBlbGVtZW50XG4vL3RvIGFwcGVuZCB0by5cbmV4cG9ydCBjb25zdCByZW5kZXJDcmVhdGVBZGRUYXNrQnRuID0gZnVuY3Rpb24oZWxlbWVudFRvUHJlcGVuZFRvLCBjdXJyZW50UHJvamVjdCl7XG4gICAgLy9DcmVhdGUgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggdGV4dC5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xuXG4gICAgLy9BZGQgY2xhc3MgdG8gdGhlIGJ1dHRvblxuICAgIGFkZFRhc2tCdG4uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1idXR0b25cIjtcblxuICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uIHdoaWNoIG9wZW5zIHRoZSBcbiAgICAvL1wiVGFzayBGb3JtXCIgb24gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZ2l2ZW4uXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgb3BlblRhc2tGb3JtKGVsZW1lbnRUb1ByZXBlbmRUbywgY3VycmVudFByb2plY3QpXG4gICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oKTtcbiAgICB9KVxuXG4gICAgLy9BcHBlbmQgdGhlIGJ1dHRvbiB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICBlbGVtZW50VG9QcmVwZW5kVG8ucHJlcGVuZChhZGRUYXNrQnRuKTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gYWRkIGEgXCJUYXNrXCIgdG8gYSBwcm9qZWN0J3MgdGFzayBhcnJheS5cbmV4cG9ydCBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZHVlLWRhdGUtaW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHktaW5wdXQnKTtcbiAgICBcbiAgICBpZighdGl0bGVJbnB1dC52YWx1ZSB8fCAhZGVzY3JpcHRpb25JbnB1dC52YWx1ZSB8fCAhZHVlRGF0ZUlucHV0LnZhbHVlIHx8ICFwcmlvcml0eUlucHV0LnZhbHVlKXtcbiAgICAgICAgYWxlcnQoJ0FsbCBmaWVsZHMgc2hvdWxkIGJlIGNvbXBsZXRlZCBiZWZvcmUgc3VibWl0dGluZyEnKTtcbiAgICB9IGVsc2V7XG4gICAgICAgIHByb2plY3QuYWRkVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUpXG4gICAgfTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gcmVtb3ZlIGFsbCB0YXNrcyBmcm9tIHRoZSBzY3JlZW4uXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsVGFza3NET00gPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRpc3BsYXllZFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2std3JhcHBlcicpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgZGlzcGxheWVkVGFza3Mpe1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIHJlbW92ZWQgdGhlICdBZGQgVGFzaycgYnV0dG9uIGZyb20gdGhlIERPTVxuZXhwb3J0IGNvbnN0IHJlbW92ZUFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgaWYoYWRkVGFza0J1dHRvbil7XG4gICAgICAgIGFkZFRhc2tCdXR0b24ucmVtb3ZlKCk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDb21wbGV0ZWRUYXNrcyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyO1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gY29udHJvbGxlci5nZXRQcm9qZWN0c0FycmF5KCk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGFsbFByb2plY3RzW2ldLnRhc2tMaXN0O1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGFza0xpc3QubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgaWYodGFza0xpc3Rbal0uY29tcGxldGUgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzW2ldLnJlbW92ZVRhc2sodGFza0xpc3Rbal0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmVtb3ZlQWxsVGFza3NET00oKTtcbiAgICByZW1vdmVBbGxBY3RpdmVCdXR0b25zKCk7XG4gICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJykuaW5uZXJUZXh0ID0gJyc7XG59O1xuXG4vL0Z1bmN0aW9uIGZpbmRzIGFuZCByZW5kZXJzIGFsbCBvZiB0aGUgdGFza3MgdGhhdCBhcmUgZHVlIGZvciB0aGlzIHdlZWsuXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza3NGb3JXZWVrID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBwcm9qZWN0c0FycmF5ID0gY29udHJvbGxlci5nZXRQcm9qZWN0c0FycmF5KCk7XG4gICAgY29uc3QgZGF0ZXNJblRoaXNXZWVrID0gcmVmb3JtYXRUaGlzV2VlayhmaW5kVGhpc1dlZWsoKSk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXG4gICAgcmVtb3ZlQWxsVGFza3NET00oKTtcblxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdEdWUgVGhpcyBXZWVrJztcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRhc2tMaXN0ID0gcHJvamVjdHNBcnJheVtpXS50YXNrTGlzdDtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRhc2tMaXN0Lmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGlmKGRhdGVzSW5UaGlzV2Vlay5pbmNsdWRlcyhyZWZvcm1hdERhdGUodGFza0xpc3Rbal0uZHVlRGF0ZSkpKXtcbiAgICAgICAgICAgICAgICByZW5kZXJJbmRpdmlkdWFsVGFzayh0YXNrTGlzdFtqXSwgdGFza0xpc3QsIHByb2plY3RzQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLy9GdW5jdGlvbiBmaW5kcyBhbmQgcmVuZGVycyBhbGwgb2YgdGhlIHRhc2tzIHRoYXQgYXJlIGR1ZSBmb3IgdG9kYXlcbmV4cG9ydCBjb25zdCByZW5kZXJUYXNrc0ZvclRvZGF5ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBwcm9qZWN0c0FycmF5ID0gY29udHJvbGxlci5nZXRQcm9qZWN0c0FycmF5KCk7XG4gICAgY29uc3QgdG9kYXkgPSB0b2RheXNEYXRlKCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXG4gICAgcmVtb3ZlQWxsVGFza3NET00oKTtcblxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdEdWUgVG9kYXknO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdGFza0xpc3QgPSBwcm9qZWN0c0FycmF5W2ldLnRhc2tMaXN0O1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGFza0xpc3QubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgaWYodG9kYXkgPT09IHJlZm9ybWF0RGF0ZSh0YXNrTGlzdFtqXS5kdWVEYXRlKSl7XG4gICAgICAgICAgICAgICAgcmVuZGVySW5kaXZpZHVhbFRhc2sodGFza0xpc3Rbal0sIHRhc2tMaXN0LCBwcm9qZWN0c0FycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vRnVuY3Rpb24gZmluZHMgYW5kIHJlbmRlcnMgYWxsIG9mIHRoZSB0YXNrcyB0aGF0IGFyZSBkdWUgZm9yIHRoaXMgbW9udGhcbmV4cG9ydCBjb25zdCByZW5kZXJUYXNrc0Zvck1vbnRoID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBwcm9qZWN0c0FycmF5ID0gY29udHJvbGxlci5nZXRQcm9qZWN0c0FycmF5KCk7XG4gICAgY29uc3QgZGF0ZXNJblRoaXNNb250aCA9IHJlZm9ybWF0VGhpc01vbnRoKGZpbmRUaGlzTW9udGgoKSk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXG4gICAgcmVtb3ZlQWxsVGFza3NET00oKTtcblxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdEdWUgVGhpcyBNb250aCc7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0YXNrTGlzdCA9IHByb2plY3RzQXJyYXlbaV0udGFza0xpc3Q7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0YXNrTGlzdC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZihkYXRlc0luVGhpc01vbnRoLmluY2x1ZGVzKHJlZm9ybWF0RGF0ZSh0YXNrTGlzdFtqXS5kdWVEYXRlKSkpe1xuICAgICAgICAgICAgICAgIHJlbmRlckluZGl2aWR1YWxUYXNrKHRhc2tMaXN0W2pdLCB0YXNrTGlzdCwgcHJvamVjdHNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vL0Z1bmN0aW9uIG1ha2VzIHRoZSBkZWNpc2lvbiBvbiBob3cgdGhlIHRhc2tzIHNob3VsZCBiZSByZW5kZXJlZCAoYnkgcHJvamVjdCBcbi8vb3IgdGltZSBmcmFtZSlcbmV4cG9ydCBjb25zdCBjaG9vc2VSZW5kZXJUeXBlID0gZnVuY3Rpb24oc2VsZWN0ZWRUYXNrc1R5cGUsIHByb2plY3Qpe1xuICAgIGlmKHNlbGVjdGVkVGFza3NUeXBlID09PSAnVG9kYXknKXtcbiAgICAgICAgcmVuZGVyVGFza3NGb3JUb2RheSgpO1xuICAgIH0gZWxzZSBpZihzZWxlY3RlZFRhc2tzVHlwZSA9PT0gJ1dlZWsnKXtcbiAgICAgICAgcmVuZGVyVGFza3NGb3JXZWVrKCk7XG4gICAgfSBlbHNlIGlmKHNlbGVjdGVkVGFza3NUeXBlID09PSAnTW9udGgnKXtcbiAgICAgICAgcmVuZGVyVGFza3NGb3JNb250aCgpO1xuICAgIH0gZWxzZSBpZihzZWxlY3RlZFRhc2tzVHlwZSA9PT0gJ1Byb2plY3QnKXtcbiAgICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3QpXG4gICAgfVxufTtcbiIsImltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuXG4vL0Z1bmN0aW9uIHRvIGhlbHAgYXBwZW5kIG11bHRpcGxlIGNoaWxkcmVuIGF0IG9uY2UgdG8gYSBwYXJlbnRcbi8vZWxlbWVudFxuZXhwb3J0IGNvbnN0IGFwcGVuZENoaWxkcmVuID0gZnVuY3Rpb24ocGFyZW50LCAuLi5jaGlsZHJlbil7IFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZHJlbltpXSk7XG4gICAgfTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gYWxsb3cgbWUgdG8gYWRkIHRoZSBzYW1lIGNsYXNzIG5hbWUgdG8gbXVsdGlwbGVcbi8vZWxlbWVudHMuXG5leHBvcnQgY29uc3QgYXNzaWduQ2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUsIC4uLmVsZW1lbnRzKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBlbGVtZW50c1tpXS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfTtcbn07XG5cbi8vRnVuY3Rpb24gZ2V0cyB0aGUgY3VycmVudCBkYXRlIGFuZCByZXR1cm5zIGl0IGluIGEgc3VpdGFibGUgZm9ybWF0XG4vL3RvIGJlIGRpc3BsYXllZCBvbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IHRvZGF5c0RhdGUgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGZ1bGxEYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGxldCBkYXkgPSBmdWxsRGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gZnVsbERhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IHllYXIgPSBmdWxsRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgbGV0IGN1cnJlbnREYXRlID0gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcbiAgICByZXR1cm4gY3VycmVudERhdGU7XG59O1xuXG4vL1RoaXMgZnVuY3Rpb24gZ2V0cyBhIGRhdGUgY3JlYXRlZCBmcm9tIHRoZSBkYXRlIGlucHV0IGFuZCByZWZvcm1hdHMgXG4vL2l0IHRvIGJlIG1vcmUgc3VpdGFibGUgZm9yIGRpc3BsYXkgb24gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCByZWZvcm1hdERhdGUgPSBmdW5jdGlvbihkYXRlKXtcbiAgICBjb25zdCByZWZvcm1hdHRlZERhdGUgPSAgZGF0ZS5zcGxpdChcIi1cIikucmV2ZXJzZSgpLmpvaW4oXCIvXCIpO1xuICAgIGxldCBuZXdSZWZvcm1hdHRlZERhdGUgPSAnJztcbiAgICBsZXQgY2hhcmFjdGVyID0gJzAnO1xuICAgIGlmKHJlZm9ybWF0dGVkRGF0ZVszXSA9PT0gY2hhcmFjdGVyKXtcbiAgICAgICAgbmV3UmVmb3JtYXR0ZWREYXRlID0gcmVtb3ZlQ2hhcmFjdGVyKDQsIHJlZm9ybWF0dGVkRGF0ZSk7XG4gICAgfSBlbHNle1xuICAgICAgICBuZXdSZWZvcm1hdHRlZERhdGUgPSByZWZvcm1hdHRlZERhdGU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXdSZWZvcm1hdHRlZERhdGU7XG59O1xuXG4vL0Z1bmN0aW9uIGZpbmRzIGFsbCB0aGUgZGF5cyBpbiB0aGUgY3VycmVudCB3ZWVrIGFuZCByZXR1cm5zIHRoZW0gYXMgYW4gXG4vL2FycmF5ICBcbmV4cG9ydCBjb25zdCBmaW5kVGhpc1dlZWsgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRhdGVBcnJheSA9IFtdO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBuZXh0RGF5ID0gYWRkRGF5cyhkYXRlLCAxKTtcblxuICAgIGRhdGVBcnJheS5wdXNoKGRhdGUpO1xuXG4gICAgd2hpbGUobmV4dERheS5nZXREYXkoKSAhPT0gMSl7XG4gICAgICAgIGRhdGVBcnJheS5wdXNoKG5leHREYXkpO1xuICAgICAgICBuZXh0RGF5ID0gYWRkRGF5cyhuZXh0RGF5LCAxKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGVBcnJheTtcbn07XG5cblxuLy9GdW5jdGlvbiByZWZvcm1hdHMgdGhlIGZ1bGwgZGF0ZXMgaW4gdGhlIHdlZWsgYXJyYXkgc28gdGhhdCB0aGUgZGF0ZXMgb25seSBcbi8vY29udGFpbiB0aGUgcmVsZXZhbnQgaW5mb3JtYXRpb25cbmV4cG9ydCBjb25zdCByZWZvcm1hdFRoaXNXZWVrID0gZnVuY3Rpb24od2Vlayl7XG4gICAgY29uc3Qgd2Vla0RheUFycmF5ID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdlZWsubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgZGF5ID0gd2Vla1tpXS5nZXREYXRlKCk7XG4gICAgICAgIGxldCBtb250aCA9IHdlZWtbaV0uZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGxldCB5ZWFyID0gd2Vla1tpXS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGxldCB0aGlzRnVsbERheSA9IGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XG4gICAgICAgIFxuICAgICAgICB3ZWVrRGF5QXJyYXkucHVzaCh0aGlzRnVsbERheSk7XG4gICAgfVxuICAgIHJldHVybiB3ZWVrRGF5QXJyYXk7XG59O1xuXG4vL0Z1bmN0aW9uIGZpbmRzIGFsbCB0aGUgZGF0ZXMgaW4gdGhlIGN1cnJlbnQgbW9udGggYW5kIHJldHVybnMgaXQgYXMgYW4gXG4vL2FycmF5XG5leHBvcnQgY29uc3QgZmluZFRoaXNNb250aCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGF0ZUFycmF5ID0gW107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG5leHREYXkgPSBhZGREYXlzKGRhdGUsIDEpO1xuICAgIGxldCBjdXJyZW50TW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuXG4gICAgZGF0ZUFycmF5LnB1c2goZGF0ZSk7XG5cbiAgICB3aGlsZShuZXh0RGF5LmdldE1vbnRoKCkrIDEgPT09IGN1cnJlbnRNb250aCl7XG4gICAgICAgIGRhdGVBcnJheS5wdXNoKG5leHREYXkpO1xuICAgICAgICBuZXh0RGF5ID0gYWRkRGF5cyhuZXh0RGF5LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVBcnJheTtcbn07XG5cbi8vRnVuY3Rpb24gcmVmb3JtYXRzIHRoZSBkYXRlcyBpbiB0aGUgbW9udGggYXJyYXkgc28gdGhhdCB0aGUgZGF0ZXMgY29udGFpbiBcbi8vb25seSB0aGUgcmVsZXZhbnQgaW5mb3JtYXRpb25cbmV4cG9ydCBjb25zdCByZWZvcm1hdFRoaXNNb250aCA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9udGhBcnJheSl7XG4gICAgY29uc3QgbW9udGhBcnJheSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvcmlnaW5hbE1vbnRoQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgZGF5ID0gb3JpZ2luYWxNb250aEFycmF5W2ldLmdldERhdGUoKTtcbiAgICAgICAgbGV0IG1vbnRoID0gb3JpZ2luYWxNb250aEFycmF5W2ldLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBsZXQgeWVhciA9IG9yaWdpbmFsTW9udGhBcnJheVtpXS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGxldCB0aGlzRnVsbERheSA9IGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XG4gICAgICAgIFxuICAgICAgICBtb250aEFycmF5LnB1c2godGhpc0Z1bGxEYXkpO1xuICAgIH07XG4gICAgcmV0dXJuIG1vbnRoQXJyYXlcbn07XG5cblxuLy9GdW5jdGlvbiByZW1vdmVzIGEgY2hhcmFjdGVyIGZyb20gYSBzcGVjaWZpZWQgcG9zaXRpb24gb2YgYSBnaXZlbiBzdHJpbmdcbmV4cG9ydCBjb25zdCByZW1vdmVDaGFyYWN0ZXIgPSBmdW5jdGlvbihwb3NpdGlvbiwgc3RyaW5nKSB7XG4gICAgbGV0IG5ld1N0cmluZyA9XG4gICAgICAgIHN0cmluZy5zdWJzdHIoMCwgcG9zaXRpb24gLSAxKStcbiAgICAgICAgc3RyaW5nLnN1YnN0cihcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgc3RyaW5nLmxlbmd0aFxuICAgICAgICApO1xuICAgIHJldHVybiBuZXdTdHJpbmc7XG59O1xuXG5cbi8vRnVuY3Rpb24gdG8gc3RvcmUgYW4gYXJyYXkgaW50byBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3Qgc3RvcmVBcnJheUxvY2FsID0gZnVuY3Rpb24oa2V5TmFtZSwgYXJyYXkpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleU5hbWUsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG59O1xuXG4vL0Z1bmN0aW9uIHJldHVybnMgYW4gYXJyYXkgZnJvbSBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3QgZ2V0QXJyYXlMb2NhbCA9IGZ1bmN0aW9uKGtleU5hbWUpe1xuICAgIGxldCBhcnJheTtcbiAgICBpZihjaGVja0xvY2FsKGtleU5hbWUpID09PSB0cnVlKXtcbiAgICAgICAgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleU5hbWUpKTtcbiAgICB9IGVsc2V7XG4gICAgICAgIGFycmF5ID0gW107XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn07XG5cbi8vRnVuY3Rpb24gY2hlY2tzIGZvciBleGlzdGluZyBhcnJheSBzdG9yZWQgaW4gbG9jYWwgc3RvcmFnZVxuLy9hbmQgcmVtb3ZlcyBpdFxuZXhwb3J0IGNvbnN0IHJlbW92ZUFycmF5TG9jYWwgPSBmdW5jdGlvbihrZXlOYW1lKXtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXlOYW1lKTtcbn07XG5cbi8vRnVuY3Rpb24gY2xlYXJzIHRoZSBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3QgY2xlYXJMb2NhbCA9IGZ1bmN0aW9uKCl7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG59XG5cbi8vQ2hlY2sgbG9jYWwgc3RvcmFnZSBmb3IgYSBrZXlcbmV4cG9ydCBjb25zdCBjaGVja0xvY2FsID0gZnVuY3Rpb24oa2V5KXtcbiAgICBpZihrZXkgaW4gbG9jYWxTdG9yYWdlKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNle1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuY29uc29sZS5sb2coY2hlY2tMb2NhbCgnUHJvamVjdHMgQXJyYXknKSk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjbG9zZVByb2plY3RGb3JtLCByZW5kZXJOZXdQcm9qZWN0QnRuLCByZW5kZXJQcm9qZWN0LCBzZXRBY3RpdmVDYWxlbmRlckJ1dHRvbiB9IGZyb20gXCIuL2hhbmRsZVByb2plY3RcIjtcbmltcG9ydCB7IENvbnRyb2xsZXIsIFN0b3Jlcn0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleFN0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW1vdmVBZGRUYXNrQnV0dG9uLCByZW1vdmVDb21wbGV0ZWRUYXNrcywgcmVtb3ZlVGFza0Zvcm0sIHJlbmRlclRhc2tzRm9yTW9udGgsIHJlbmRlclRhc2tzRm9yVG9kYXksIHJlbmRlclRhc2tzRm9yV2VlayB9IGZyb20gXCIuL2hhbmRsZVRhc2tcIjtcblxucmVuZGVyTmV3UHJvamVjdEJ0bihDb250cm9sbGVyLnByb2plY3RzQXJyYXkpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtdG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgU3RvcmVyLmN1cnJlbnRseVNlbGVjdGVkID0gJ1RvZGF5JztcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgcmVtb3ZlVGFza0Zvcm0oKTtcbiAgICBzZXRBY3RpdmVDYWxlbmRlckJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtdG9kYXknKSlcbiAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgcmVuZGVyVGFza3NGb3JUb2RheSgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy13ZWVrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIFN0b3Jlci5jdXJyZW50bHlTZWxlY3RlZCA9ICdXZWVrJztcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgcmVtb3ZlVGFza0Zvcm0oKTtcbiAgICBzZXRBY3RpdmVDYWxlbmRlckJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3Mtd2VlaycpKVxuICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oKTtcbiAgICByZW5kZXJUYXNrc0ZvcldlZWsoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtbW9udGgnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgU3RvcmVyLmN1cnJlbnRseVNlbGVjdGVkID0gJ01vbnRoJztcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgcmVtb3ZlVGFza0Zvcm0oKTtcbiAgICBzZXRBY3RpdmVDYWxlbmRlckJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtbW9udGgnKSlcbiAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgcmVuZGVyVGFza3NGb3JNb250aCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUtY29tcGxldGUtdGFza3MtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQ29tcGxldGVkVGFza3MoKTtcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgcmVtb3ZlVGFza0Zvcm0oKTtcbn0pO1xuXG5sZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cbmNvbnNvbGUubG9nKGNvbnRyb2xsZXIuZ2V0UHJvamVjdHNBcnJheSgpKTtcblxucmVuZGVyUHJvamVjdChjb250cm9sbGVyLmdldFByb2plY3RzQXJyYXkoKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=