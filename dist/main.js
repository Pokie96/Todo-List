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
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderCreateAddTaskBtn)(document.querySelector('.add-task-btn-wrapper'), project);
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
    
    console.log(project);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlB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QUFDVixJQUFJLGdFQUFnQjtBQUNwQixJQUFJLDJEQUFjO0FBQ2xCLElBQUksdUVBQXVCO0FBQzNCLElBQUksaUVBQW1CO0FBQ3ZCLElBQUksZ0VBQW1CO0FBQ3ZCLENBQUM7O0FBRUQ7QUFDQSxJQUFJLDRDQUFNO0FBQ1YsSUFBSSxnRUFBZ0I7QUFDcEIsSUFBSSwyREFBYztBQUNsQixJQUFJLHVFQUF1QjtBQUMzQixJQUFJLGlFQUFtQjtBQUN2QixJQUFJLCtEQUFrQjtBQUN0QixDQUFDOztBQUVEO0FBQ0EsSUFBSSw0Q0FBTTtBQUNWLElBQUksZ0VBQWdCO0FBQ3BCLElBQUksMkRBQWM7QUFDbEIsSUFBSSx1RUFBdUI7QUFDM0IsSUFBSSxpRUFBbUI7QUFDdkIsSUFBSSxnRUFBbUI7QUFDdkIsQ0FBQzs7QUFFRDtBQUNBLElBQUksaUVBQW9CO0FBQ3hCLElBQUksZ0VBQWdCO0FBQ3BCLElBQUksMkRBQWM7QUFDbEIsQ0FBQzs7QUFFRCxxQkFBcUIsZ0RBQVU7O0FBRS9COztBQUVBLDZEQUFhLCtFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZXMvaW5kZXhTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3kvLi9zcmMvc3R5bGVzL2luZGV4U3R5bGUuY3NzP2VjZDgiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9oYW5kbGVQcm9qZWN0LmpzIiwid2VicGFjazovL3kvLi9zcmMvaGFuZGxlVGFzay5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2hlbHBlckZ1bmN0aW9uLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxMDBweCA4MHB4IGF1dG8gNTBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLmhlYWRlcntcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGRpc3BsYXk6IGZsZXg7O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAzcHggd2hpdGU7XG59XG5cbi5uZXctcHJvamVjdHMtZm9ybXtcbiAgICBncmlkLXJvdzogMi80O1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZTFkZDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweCA7XG59XG5cbi5uZXctcHJvamVjdHMtZm9ybSBoMntcbiAgICBjb2xvcjogIzIxNEUzNDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCB3aGl0ZSwgLTFweCAtMXB4IHdoaXRlLCAxcHggLTFweCB3aGl0ZSwgLTFweCAxcHggd2hpdGU7XG59XG5cbiNuZXctcHJvamVjdC1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0NEQ0RDRCwgMXB4IDFweCAzcHggaW5zZXQgI0NEQ0RDRDtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24td3JhcHBlcntcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5wcm9qZWN0LWRhdGUtbmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTEwcHg7XG59XG5cbi5wcm9qZWN0LWRhdGUtbmF2IGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjQ0RDRENELCAxcHggMXB4IDNweCBpbnNldCAjQ0RDRENEO1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLnRhc2stc2VjdGlvbntcbiAgICBncmlkLXJvdzogMi81O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZTFkZDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweDtcbn1cblxuLnRhc2stc2VjdGlvbi1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLnRvLWRvLWxpc3QtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMwMHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVye1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDQvNTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhlMWRkO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4O1xufVxuXG4udGFzay13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbn1cblxuLmhlYWRlciBoMXtcbiAgICBjb2xvcjogI0RGRjhFQjtcbn1cblxuLmZvb3RlcntcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGdyaWQtcm93OiA1LzY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAzcHggd2hpdGU7XG59XG5cbi5wcm9qZWN0LWZvcm0td3JhcHBlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xufVxuXG4ucHJvamVjdC1mb3JtLXdyYXBwZXIgaW5wdXR7XG4gICAgaGVpZ2h0OiAzMHB4XG59XG5cbi5wcm9qZWN0LWZvcm0td3JhcHBlciBpbnB1dDpmb2N1c3tcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XG59XG5cbi5wcm9qZWN0LWZvcm0td3JhcHBlciBidXR0b257XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtZm9ybS13cmFwcGVyIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyODY0O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbn1cblxuLnByb2plY3QtZm9ybS1idXR0b25zLXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uaW5kaXYtcHJvamVjdC1jb250YWluZXJze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XG4gICAgY29sb3I6ICNERkY4RUI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3QtdGl0bGVze1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3QtZGF0ZXN7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmVtb3ZlLXByb2plY3QtYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTs7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcHJvamVjdC10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwNDRhNDI7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHdoaXRlLCAtMXB4IC0xcHggd2hpdGUsIDFweCAtMXB4IHdoaXRlLCAtMXB4IDFweCB3aGl0ZTtcbn1cblxuLmFkZC10YXNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjQ0RDRENELCAxcHggMXB4IDNweCBpbnNldCAjQ0RDRENEO1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuI3JlbW92ZS1jb21wbGV0ZS10YXNrcy1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0NEQ0RDRCwgMXB4IDFweCAzcHggaW5zZXQgI0NEQ0RDRDtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlcntcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCBibGFjaywgaW5zZXQgLTFweCAtMXB4IDJweCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAwLCAwKTtcbn1cblxuLnRhc2stZm9ybXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xNzVweDtcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbn1cblxuLmZpZWxkLWVsZW1lbnQtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uZmllbGQtZWxlbWVudC13cmFwcGVyIGxhYmVse1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5uZXctdGFzay1idXR0b25zLXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4udGFzay1mb3JtIGJ1dHRvbntcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1mb3JtIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyODY0O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbn1cblxuLnRhc2staW5wdXR7XG4gICAgaGVpZ2h0OiAzMHB4XG59XG5cbi50YXNrLWlucHV0OmZvY3Vze1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbn1cblxuLnRhc2stY2hlY2std3JhcHBlcntcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWNoZWNrLXdyYXBwZXIgaW5wdXR7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xufVxuXG4udGFzay1kZWxldGUtYnV0dG9ue1xuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4U3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCwyRUFBMkU7QUFDL0U7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBEQUEwRDtJQUMxRCxjQUFjO0lBQ2QsbUJBQW1C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ZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4REFBOEQ7SUFDOUQsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMTAwcHggODBweCBhdXRvIDUwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDs7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAzcHggd2hpdGU7XFxufVxcblxcbi5uZXctcHJvamVjdHMtZm9ybXtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGUxZGQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0cy1mb3JtIGgye1xcbiAgICBjb2xvcjogIzIxNEUzNDtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggd2hpdGUsIC0xcHggLTFweCB3aGl0ZSwgMXB4IC0xcHggd2hpdGUsIC0xcHggMXB4IHdoaXRlO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbi13cmFwcGVye1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUtbmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMTBweDtcXG59XFxuXFxuLnByb2plY3QtZGF0ZS1uYXYgYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnRhc2stc2VjdGlvbntcXG4gICAgZ3JpZC1yb3c6IDIvNTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZTFkZDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAzcHg7XFxufVxcblxcbi50YXNrLXNlY3Rpb24taGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4udG8tZG8tbGlzdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZTFkZDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAzcHg7XFxufVxcblxcbi50YXNrLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xcbn1cXG5cXG4uaGVhZGVyIGgxe1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0xcHggM3B4IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLXdyYXBwZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLXdyYXBwZXIgaW5wdXR7XFxuICAgIGhlaWdodDogMzBweFxcbn1cXG5cXG4ucHJvamVjdC1mb3JtLXdyYXBwZXIgaW5wdXQ6Zm9jdXN7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS13cmFwcGVyIGJ1dHRvbntcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0td3JhcHBlciBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjI4NjQ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idXR0b25zLXdyYXBwZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmluZGl2LXByb2plY3QtY29udGFpbmVyc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGVze1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3QtZGF0ZXN7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbntcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTs7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzA0NGE0MjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggd2hpdGUsIC0xcHggLTFweCB3aGl0ZSwgMXB4IC0xcHggd2hpdGUsIC0xcHggMXB4IHdoaXRlO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jcmVtb3ZlLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjQ0RDRENELCAxcHggMXB4IDNweCBpbnNldCAjQ0RDRENEO1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3QtYnV0dG9uOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCBibGFjaywgaW5zZXQgLTFweCAtMXB4IDJweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMCwgMCk7XFxufVxcblxcbi50YXNrLWZvcm17XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMTc1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG59XFxuXFxuLmZpZWxkLWVsZW1lbnQtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uZmllbGQtZWxlbWVudC13cmFwcGVyIGxhYmVse1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm5ldy10YXNrLWJ1dHRvbnMtd3JhcHBlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udGFzay1mb3JtIGJ1dHRvbntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWZvcm0gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyODY0O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XFxufVxcblxcbi50YXNrLWlucHV0e1xcbiAgICBoZWlnaHQ6IDMwcHhcXG59XFxuXFxuLnRhc2staW5wdXQ6Zm9jdXN7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG59XFxuXFxuLnRhc2stY2hlY2std3JhcHBlcntcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY2hlY2std3JhcHBlciBpbnB1dHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDogMTZweDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbntcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlOztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4U3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleFN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9Db250YWlucyB0aGUgY2xhc3NlcyByZXF1aXJlZCBmb3IgbXkgSmF2YVNjcmlwdCBhcHBsaWNhdGlvblxuXG5pbXBvcnQgeyBnZXRBcnJheUxvY2FsIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25cIjtcblxuLy9BIGNsYXNzIGNvbnN0cnVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIG5ldyBwcm9qZWN0c1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgfVxuXG4gICAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSl7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSk7XG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2spe1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnNwbGljZSh0aGlzLnRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xuICAgIH1cbn07XG5cbi8vVGhpcyBpcyB0aGUgY2xhc3MgY29uc3RydWN0b3IgZm9yIG91ciBUYXNrc1xuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlID0gZmFsc2Upe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGFza1wiO1xuICAgIH07IFxuXG4gICAgY2hhbmdlQ29tcGxldGVTdGF0dXMoKXtcbiAgICAgICAgaWYodGhpcy5jb21wbGV0ZSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuLy9UaGlzIGNsYXNzIGhhcyBjb250cm9sIG92ZXIgdGhlIGNvbGxlY3Rpb24gb2YgdGhlIHByb2plY3RzXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHByb2plY3RzQXJyYXkgPSBnZXRBcnJheUxvY2FsKCdQcm9qZWN0cyBBcnJheScpO1xuXG4gICAgZ2V0UHJvamVjdHNBcnJheSgpe1xuICAgICAgICByZXR1cm4gQ29udHJvbGxlci5wcm9qZWN0c0FycmF5O1xuICAgIH07XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBDb250cm9sbGVyLnByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0KXtcbiAgICAgICAgQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LnNwbGljZShDb250cm9sbGVyLnByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgfTtcbiAgICBcbn07XG5cbi8vQ2xhc3MgdG8gc3RvcmUgdmFsdWVzIHRoYXQgYXJlIHNoYXJlZCB0aHJvdWdob3V0IHRoZSB3aG9sZSBvZiB0aGUgcHJvZ3JhbVxuZXhwb3J0IGNsYXNzIFN0b3JlciB7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH07XG5cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRseVNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudGx5U2VsZWN0ZWQgfHwgdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXQgY3VycmVudGx5U2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudGx5U2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIHJlbW92ZUFycmF5TG9jYWwsIHN0b3JlQXJyYXlMb2NhbCwgdG9kYXlzRGF0ZSB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgcmVuZGVyQ3JlYXRlQWRkVGFza0J0biwgcmVuZGVyUHJvamVjdFRhc2tzLCByZW1vdmVBbGxUYXNrc0RPTSwgcmVtb3ZlQWRkVGFza0J1dHRvbiwgcmVtb3ZlVGFza0Zvcm0gfSBmcm9tIFwiLi9oYW5kbGVUYXNrXCI7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBTdG9yZXJ9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuLy9BIGZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBmb3JtIHRoYXQgd2lsbCBiZSB1c2VkIGluIG90aGVyIFxuLy9mdW5jdGlvbnMgd2l0aGluIHRoaXMgbW9kdWxlXG5leHBvcnQgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKHByb2plY3RzTGlzdCl7XG4gICAgLy9TZWxlY3QgdGhlIGZvcm0gaW5wdXQgZmllbGRzXG4gICAgY29uc3QgcHJvamVjdEZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS13cmFwcGVyJyk7XG5cbiAgICAvL1JlbW92ZSB0aGUgZm9ybSBpbnB1dCBmaWVsZHNcbiAgICBpZihwcm9qZWN0Rm9ybVdyYXBwZXIpe1xuICAgICAgICBwcm9qZWN0Rm9ybVdyYXBwZXIucmVtb3ZlKCk7XG4gICAgfTtcblxuICAgIC8vUmUtUmVuZGVyIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uIGZvciB1c2UgYWdhaW5cbiAgICByZW5kZXJOZXdQcm9qZWN0QnRuKHByb2plY3RzTGlzdCk7XG5cbn07XG5cbi8vVGhpcyBmdW5jdGlvbiB3aWxsIG9wZW4gYSBwcm9qZWN0IGZvcm0gYWxsb3dpbmcgdXNlciB0byBcbi8vZW50ZXIgdGhlaXIgcHJvamVjdCBpbnB1dFxuZXhwb3J0IGNvbnN0IG9wZW5Qcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKGFycmF5VG9TdWJtaXQpe1xuXG4gICAgLy9DcmVhdGUgdGhlIGZpZWxkIGVsZW1lbnRzIGZvciB0aGUgZm9ybVxuICAgIGNvbnN0IHByb2plY3RGb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9BZGQgdGhlIGlubmVyIHRleHQgdG8gdGhlIGJ1dHRvbiBlbGVtZW50c1xuICAgIG5ld1Byb2plY3RTdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICAvL0Fzc2lnbiBhIHBsYWNlaG9sZGVyIHRvIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgXG4gICAgLy9Bc3NpZ24gY2xhc3NlcyB0byB0aGUgZWxlbWVudHNcbiAgICBwcm9qZWN0Rm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtZm9ybS13cmFwcGVyJztcbiAgICBidXR0b25zV3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdC1mb3JtLWJ1dHRvbnMtd3JhcHBlcic7XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ25ldy1wcm9qZWN0LXRpdGxlLWlucHV0JztcbiAgICBuZXdQcm9qZWN0U3VibWl0LmNsYXNzTmFtZSA9ICduZXctcHJvamVjdC1zdWJtaXQnO1xuICAgIGNhbmNlbE5ld1Byb2plY3RGb3JtLmNsYXNzTmFtZSA9ICdjYW5jZWwtbmV3LXByb2plY3QnO1xuXG4gICAgLy9BZGQgdGhlIHJlbGF0aXZlIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlUHJvamVjdEZvcm0oYXJyYXlUb1N1Ym1pdCk7XG4gICAgfSk7XG4gICAgbmV3UHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoIW5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlKXtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3UgbXVzdCBlbnRlciBhIHRpdGxlIGZvciB0aGUgcHJvamVjdCEnKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgc3VibWl0TmV3UHJvamVjdChhcnJheVRvU3VibWl0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9TZWxlY3QgdGhlIGVsZW1lbnQgd2hlcmUgdGhlIGZvcm0gd2lsbCBiZSBhdHRhY2hlZCB0b1xuICAgIGNvbnN0IG5ld1Byb2plY3RzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdHMtZm9ybScpO1xuXG4gICAgLy9BdHRhY2ggdGhlIGZvcm0gdG8gdGhlIHByZXZpb3VzIGVsZW1lbnRcbiAgICBhcHBlbmRDaGlsZHJlbihidXR0b25zV3JhcHBlciwgbmV3UHJvamVjdFN1Ym1pdCwgY2FuY2VsTmV3UHJvamVjdEZvcm0pO1xuICAgIGFwcGVuZENoaWxkcmVuKHByb2plY3RGb3JtV3JhcHBlciwgbmV3UHJvamVjdFRpdGxlSW5wdXQsIGJ1dHRvbnNXcmFwcGVyKTtcblxuICAgIG5ld1Byb2plY3RzRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybVdyYXBwZXIpO1xufTtcblxuLy9GdW5jdGlvbiB0aGF0IHJlbmRlcnMgdGhlIHByb2plY3QgaW50byB0aGUgRE9NIHRvIGJlIFxuLy9kaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24oYXJyYXksIGNvbnRhaW5lcil7XG4gICAgXG4gICAgLy9DbGVhciB0aGUgRE9NIGJlZm9yZSByZW5kZXJpbmcgYWdhaW5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvL0xvb3AgdGhyb3VnaCB0aGUgZ2l2ZW4gYXJyYXlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAvL0luaXRpYWxpc2Ugb3VyIHZhcmlhYmxlcyB1c2VkIHRocm91Z2hvdXQgdGhlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBwcm9qZWN0ID0gYXJyYXlbaV07XG4gICAgICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbGV0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXI7XG5cbiAgICAgICAgLy9TZXQgaW5uZXIgdGV4dCBvZiB0aGUgZWxlbWVudHMgdG8gdGhlIHZhbHVlcyBpbnNpZGVcbiAgICAgICAgLy9vZiB0aGUgZ2l2ZW4gb2JqZWN0c1xuICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgcHJvamVjdERhdGUuaW5uZXJUZXh0ID0gcHJvamVjdC5kYXRlO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmlubmVyVGV4dCA9ICdYJztcblxuICAgICAgICAvL0dpdmUgdGhlIHByb2plY3QgZWxlbWVudHMgY2xhc3MgbmFtZXMgZm9yIGZ1dHVyZSBzdHlsaW5nXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTmFtZSA9ICdpbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnMnO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5pZCA9IGBwcm9qZWN0LSR7aX1gO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGl0bGVzJztcbiAgICAgICAgcHJvamVjdERhdGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtZGF0ZXMnO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmNsYXNzTmFtZSA9ICdyZW1vdmUtcHJvamVjdC1idXR0b24nO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmlkID0gYHJlbW92ZS1wcm9qZWN0LWJ1dHRvbi0ke2l9YDtcblxuICAgICAgICAvL1JlbmRlciB0aGUgQWRkIFRhc2sgQnV0dG9uXG4gICAgICAgIC8vcmVuZGVyQ3JlYXRlQWRkVGFza0J0bihwcm9qZWN0RWxlbWVudCwgcHJvamVjdCk7XG5cbiAgICAgICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyZW1vdmUtcHJvamVjdC1idXR0b24tJHtpfWApKXtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBcnJheSA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdHNBcnJheSgpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFycmF5TG9jYWwoJ1Byb2plY3RzIEFycmF5Jyk7XG4gICAgICAgICAgICAgICAgc3RvcmVBcnJheUxvY2FsKCdQcm9qZWN0cyBBcnJheScsIGN1cnJlbnRBcnJheSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdChhcnJheSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsbFRhc2tzRE9NKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS5pbm5lclRleHQgPSAnJztcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIFN0b3Jlci5jdXJyZW50bHlTZWxlY3RlZCA9ICdQcm9qZWN0JztcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxUYXNrc0RPTSgpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUYXNrRm9ybSgpO1xuICAgICAgICAgICAgICAgIHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bi13cmFwcGVyJyksIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aX1gKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9BcHBlbmQgdGhlIGNoaWxkIGVsZW1lbnRzIHRvIHRoZWlyIHBhcmVudCBlbGVtZW50XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHByb2plY3RFbGVtZW50LCBwcm9qZWN0VGl0bGUsIHByb2plY3REYXRlLCByZW1vdmVQcm9qZWN0QnRuKTtcblxuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBkaXYgdG8gdGhlIGdpdmVuIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuXG4gICAgfVxufTtcblxuLy9GdW5jdGlvbiByZS1yZW5kZXJzIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uIGFnYWluIHRvIHRoZSBcbi8vRE9NXG5leHBvcnQgY29uc3QgcmVuZGVyTmV3UHJvamVjdEJ0biA9IGZ1bmN0aW9uKHByb2plY3RBcnJheSl7XG4gICAgaWYoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1idXR0b24nKSl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3UHJvamVjdEJ0bi5pbm5lclRleHQgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICBuZXdQcm9qZWN0QnRuLmlkID0gJ25ldy1wcm9qZWN0LWJ1dHRvbic7XG5cbiAgICAgICAgLy9BZGQgdGhlIGV2ZW50IGxpc3RlbmVyIGJhY2sgdG8gdGhlIFwiTmV3IFByb2plY3RcIiBidXR0b25cbiAgICAgICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBvcGVuUHJvamVjdEZvcm0ocHJvamVjdEFycmF5KTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0FwcGVuZCB0aGUgYnV0dG9uIGJhY2sgdG8gdGhlIGNvcnJlY3QgZGl2XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1idXR0b24td3JhcHBlcicpO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG5cbiAgICAgICAgcmVtb3ZlQWxsVGFza3NET00oKTtcbiAgICB9O1xufTtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgYW5kIGFkZCBhIG5ldyBQcm9qZWN0IHRvIGEgZ2l2ZW4gcHJvamVjdHNMaXN0XG5leHBvcnQgY29uc3Qgc3VibWl0TmV3UHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3RzTGlzdCl7XG4gICAgLy9TZWxlY3QgdGhlIHRpdGxlIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBwcm9qZWN0IGZvcm1cbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC10aXRsZS1pbnB1dCcpO1xuXG4gICAgLy9Bc3NpZ24gdGhlIHZhbHVlIGVudGVyZWQgaW50byB0aGUgdGl0bGUgZWxlbWVudCB0byBhIHZhcmlhYmxlXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWU7ICAgIFxuXG4gICAgLy9DcmVhdGUgYSBuZXcgcHJvamVjdCB3aXRoIHRoZSBnaXZlbiB0aXRsZSwgZGF0ZSBhbmQgcHJvamVjdHNMaXN0XG4gICAgLy90byBzdG9yZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0VGl0bGUsIHRvZGF5c0RhdGUoKSk7XG5cbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbiAgICBcbiAgICAvL0FkZCB0aGUgcHJvamVjdCB0byB0aGUgZ2l2ZW4gcHJvamVjdHMgTGlzdFxuICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAgIC8vQ2xlYXIgdGhlIGxvY2FsIHN0b3JhZ2Ugb2YgdGhlIHByb2plY3RzIGFycmF5IGJlZm9yZSBcbiAgICAvL2NyZWF0aW5nIGEgbmV3IG1vZGlmaWVkIG9uZVxuICAgIHJlbW92ZUFycmF5TG9jYWwoJ1Byb2plY3RzIEFycmF5Jyk7XG5cbiAgICAvL1N0b3JlIHRoZSBwcm9qZWN0cyBhcnJheSBpbnRvIGxvY2FsIHN0b3JhZ2VcbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdHNBcnJheSgpO1xuICAgIHN0b3JlQXJyYXlMb2NhbCgnUHJvamVjdHMgQXJyYXknLCBwcm9qZWN0c0FycmF5KTtcblxuICAgIC8vUmVuZGVyIHRoZSBwcm9qZWN0cyBpbiB0aGUgcHJvamVjdHMgbGlzdCBpbnRvIHRoZSBnaXZlbiBjb250YWluZXJcbiAgICByZW5kZXJQcm9qZWN0KHByb2plY3RzTGlzdCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpKTtcblxuICAgIC8vQ2xvc2UgdGhlIHByb2plY3QgZm9ybVxuICAgIGNsb3NlUHJvamVjdEZvcm0ocHJvamVjdHNMaXN0KTtcblxuICAgIC8vUmVtb3ZlIGFueSBjdXJyZW50bHkgYWN0aXZlIHByb2plY3QgdGl0bGUgYW5kIHRhc2sgXG4gICAgLy9jcmVhdGlvbiBidXR0b25cbiAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS5pbm5lclRleHQgPSAnJztcbn07XG5cbi8vRnVuY3Rpb24gcmVtb3ZlcyB0aGUgYWN0aXZlIHN0eWxlIGVmZmVjdCBmcm9tIGFsbCB0aGUgYnV0dG9ucyBvZiB0aGUgbmF2IFxuLy9pbiB0aGUgc2lkZSBiYXJcbmV4cG9ydCBjb25zdCByZW1vdmVBbGxBY3RpdmVCdXR0b25zID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBhbGxQcm9qZWN0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5kaXYtcHJvamVjdC1jb250YWluZXJzJyk7XG4gICAgY29uc3QgYWxsQ2FsZW5kZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZGF0ZS1uYXYgYnV0dG9uJyk7XG5cbiAgICBmb3IobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdEVsZW1lbnRzKXtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCJztcbiAgICB9O1xuXG4gICAgZm9yKGxldCBjYWxlbmRlckJ1dHRvbiBvZiBhbGxDYWxlbmRlckJ1dHRvbnMpe1xuICAgICAgICBjYWxlbmRlckJ1dHRvbi5zdHlsZS5ib3hTaGFkb3cgPSAnMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCJztcbiAgICB9O1xufVxuXG4vL0Z1bmN0aW9uIHRvIHNob3cgd2hpY2ggcHJvamVjdCBpcyBjdXJyZW50bHkgY2hvc2VuLlxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSBmdW5jdGlvbihjdXJyZW50UHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSAnJztcbiAgICBcbiAgICByZW1vdmVBbGxBY3RpdmVCdXR0b25zKClcblxuICAgIGlmKGN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCA0cHggNHB4IDZweCBibGFjaywgaW5zZXQgLTRweCAtNHB4IDZweCBibGFjaywgMXB4IDFweCAzcHggI0RGRjhFQiwtMXB4IC0xcHggM3B4ICNERkY4RUInO1xuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIHNob3dzIHdoaWNoIGNhbGVuZGVyIG5hdiBidXR0b24gaXMgY3VycmVudGx5IGNob3Nlbi5cbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVDYWxlbmRlckJ1dHRvbiA9IGZ1bmN0aW9uKGJ1dHRvbil7XG4gICAgcmVtb3ZlQWxsQWN0aXZlQnV0dG9ucygpO1xuICAgIGJ1dHRvbi5zdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgNHB4IDRweCA2cHggYmxhY2ssIGluc2V0IC00cHggLTRweCA2cHggYmxhY2ssIDFweCAxcHggM3B4ICNERkY4RUIsLTFweCAtMXB4IDNweCAjREZGOEVCJztcbn1cbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBhc3NpZ25DbGFzcywgZmluZFRoaXNNb250aCwgZmluZFRoaXNXZWVrLCByZWZvcm1hdERhdGUsIHJlZm9ybWF0VGhpc01vbnRoLCByZWZvcm1hdFRoaXNXZWVrLCB0b2RheXNEYXRlfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvblwiO1xuaW1wb3J0IHsgQ29udHJvbGxlciAsIFN0b3Jlcn0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQWN0aXZlQnV0dG9ucyB9IGZyb20gXCIuL2hhbmRsZVByb2plY3RcIjtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZvcm0gdXNlZCBmb3IgbmV3IHRhc2tzLlxuLy9SZXF1aXJlcyBhbiBhcmd1bWVudCBmb3IgdGhlIGVsZW1lbnQgdGhlIGZvcm0gd2lsbCBiZSBcbi8vY3JlYXRlZCBpblxuZXhwb3J0IGNvbnN0IG9wZW5UYXNrRm9ybSA9IGZ1bmN0aW9uKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdCl7XG5cbiAgICAvL1NlbGVjdCB0aGUgXCJBZGQgdGFza1wiIHRoYXQgd2Ugd2FudCB0byBhbHdheXMgYXBwZW5kIHRoZSBcbiAgICAvL2Zvcm0gYWZ0ZXJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpO1xuXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXG4gICAgLy9DcmVhdGUgYWxsIG9mIHRoZSBmaWVsZCBlbGVtZW50cyBhbmQgdGhlaXIgd3JhcHBlcnMgXG4gICAgLy9yZXF1aXJlZCBmb3IgYSB0YXNrXG4gICAgY29uc3QgdGFza0Zvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgY29uc3QgdGFza0R1ZURhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAvL0Fzc2lnbiBvcHRpb25zIHRvIHRoZSBwcmlvcml0eSBkcm9wIGRvd24gZmllbGRcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAvL1NldCB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIGR1ZSBkYXRlIGVsZW1lbnRzIGluIHRoZSBmb3JtXG4gICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlLWlucHV0XCIpO1xuICAgIHRhc2tUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlLWlucHV0XCIpO1xuXG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICAgIHRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuXG4gICAgdGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlLWRhdGUtaW5wdXRcIik7XG4gICAgdGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZS1kYXRlLWlucHV0XCIpO1xuXG4gICAgdGFza1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5LWlucHV0XCIpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5LWlucHV0XCIpO1xuXG4gICAgLy9TZXQgdGhlIGxhYmVsIHZhbHVlc1xuICAgIHRhc2tUaXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG4gICAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6XCI7XG4gICAgdGFza1ByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eSBMZXZlbFwiO1xuXG4gICAgLy9Bc3NpZ24gYSBjbGFzcyB0byB0aGUgZmllbGQgZWxlbWVudCB3cmFwcGVyc1xuICAgIGFzc2lnbkNsYXNzKFwiZmllbGQtZWxlbWVudC13cmFwcGVyXCIsIHRhc2tUaXRsZVdyYXBwZXIsIHRhc2tEZXNjcmlwdGlvbldyYXBwZXIsIHRhc2tEdWVEYXRlV3JhcHBlciwgdGFza1ByaW9yaXR5V3JhcHBlcik7XG5cbiAgICAvL0FwcGVuZCBhbnkgZWxlbWVudHMgdG8gdGhlaXIgd3JhcHBlcnNcbiAgICBhcHBlbmRDaGlsZHJlbih0YXNrVGl0bGVXcmFwcGVyLCB0YXNrVGl0bGVMYWJlbCwgdGFza1RpdGxlSW5wdXQpO1xuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tEZXNjcmlwdGlvbldyYXBwZXIsIHRhc2tEZXNjcmlwdGlvbkxhYmVsLCB0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza0R1ZURhdGVXcmFwcGVyLCB0YXNrRHVlRGF0ZUxhYmVsLCB0YXNrRHVlRGF0ZUlucHV0KTtcbiAgICBhcHBlbmRDaGlsZHJlbih0YXNrUHJpb3JpdHlXcmFwcGVyLCB0YXNrUHJpb3JpdHlMYWJlbCwgdGFza1ByaW9yaXR5SW5wdXQpO1xuXG4gICAgLy9Bc3NpZ24gYWxsIG9mIHRoZSBmaWVsZCBlbGVtZW50cyBhIGNsYXNzIG5hbWVcbiAgICB0YXNrRm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybSc7XG4gICAgdGFza1RpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrRHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG5cbiAgICAvL0Fzc2lnbiBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gYWxsIG9mIHRoZSBpbnB1dHNcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgVGl0bGUnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgRGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBEdWUgRGF0ZScpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBQcmlvcml0eSBMZXZlbCcpO1xuXG4gICAgLy9Bc3NpZ24gZmllbGQgZWxlbWVudHMgYW4gSURcbiAgICB0YXNrVGl0bGVJbnB1dC5pZCA9ICd0YXNrLXRpdGxlLWlucHV0JztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uLWlucHV0JztcbiAgICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2stZHVlLWRhdGUtaW5wdXQnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmlkID0gJ3Rhc2stcHJpb3JpdHktaW5wdXQnO1xuXG5cbiAgICBoaWdoUHJpb3JpdHkuaW5uZXJUZXh0ID0gJ0hpZ2ggUHJpb3JpdHknO1xuICAgIG1lZGl1bVByaW9yaXR5LmlubmVyVGV4dCA9ICdNZWRpdW0gUHJpb3JpdHknO1xuICAgIGxvd1ByaW9yaXR5LmlubmVyVGV4dCA9ICdMb3cgUHJpb3JpdHknO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza1ByaW9yaXR5SW5wdXQsIGhpZ2hQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGxvd1ByaW9yaXR5KTtcblxuXG4gICAgLy9DcmVhdGUgdGhlIGJ1dHRvbiBlbGVtZW50cyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdUYXNrQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld1Rhc2tTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBuZXdUYXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAvL0Fzc2lnbiB0aGUgYnV0dG9uIGVsZW1lbnRzIHdpdGggYSBjbGFzcyBuYW1lXG4gICAgbmV3VGFza0J0bnMuY2xhc3NOYW1lID0gJ25ldy10YXNrLWJ1dHRvbnMtd3JhcHBlcidcbiAgICBuZXdUYXNrU3VibWl0QnRuLmNsYXNzTmFtZSA9ICdzdWJtaXQtdGFzayc7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5jbGFzc05hbWUgPSAnY2FuY2VsLXRhc2snO1xuXG4gICAgLy9JbnNlcnQgaW5uZXIgdGV4dCBpbnRvIHRoZSBidXR0b25zIHRvIGRpc3BsYXkgdXNlXG4gICAgbmV3VGFza1N1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gICAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2FuY2VsIGFuZCByZW1vdmUgdGhlIGZvcm0gZnJvbSBcbiAgICAvL3RoZSBET01cbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIHJlbW92ZVRhc2tGb3JtKCk7XG4gICAgICAgIHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4oZWxlbWVudFRvQXBwZW5kVG8sIGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gcmVuZGVyIHRoZSB0YXNrIHRvIHN1Ym1pdCBidXR0b25cbiAgICBuZXdUYXNrU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgcmVuZGVyQ3JlYXRlQWRkVGFza0J0bihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuLXdyYXBwZXInKSAsY3VycmVudFByb2plY3QpXG4gICAgICAgIGNob29zZVJlbmRlclR5cGUoJ1Byb2plY3QnLCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHJlbW92ZVRhc2tGb3JtKCk7XG4gICAgfSk7XG5cbiAgICAvL0FwcGVuZCB0aGUgZmllbGQgZWxlbWVudHMgdG8gdGhlIGdpdmVuIGNvbnRhaW5lciBlbGVtZW50XG4gICAgYXBwZW5kQ2hpbGRyZW4obmV3VGFza0J0bnMsIG5ld1Rhc2tTdWJtaXRCdG4sIG5ld1Rhc2tDYW5jZWxCdG4pO1xuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tGb3JtV3JhcHBlciwgdGFza1RpdGxlV3JhcHBlciwgdGFza0Rlc2NyaXB0aW9uV3JhcHBlciwgdGFza0R1ZURhdGVXcmFwcGVyLCB0YXNrUHJpb3JpdHlXcmFwcGVyLCBuZXdUYXNrQnRucyk7XG5cbiAgICAvL0FwcGVuZCB0aGUgZm9ybSB0byBhZnRlciB0aGUgXCJBZGQgVGFzayBCdXR0b25cIjtcbiAgICBhZGRUYXNrQnRuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tGb3JtV3JhcHBlciwgYWRkVGFza0J0bi5uZXh0U2libGluZyk7XG5cbn07XG5cbi8vRnVuY3Rpb24gdGhhdCByZW1vdmVzIGFsbCBvZiB0aGUgZm9ybSBlbGVtZW50cyBmcm9tIHRoZSBET01cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgLy9TZWxlY3QgYWxsIG9mIHRoZSBmb3JtIGVsZW1lbnRzIHVzaW5nIHRoZWlyIGNsYXNzIG5hbWVcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcblxuICAgIC8vRm9yIGV2ZXJ5IGZpZWxkIGlucHV0IGluIHRoZSBsaXN0IG9mIGZpZWxkIGlucHV0c1xuICAgIGlmKCF0YXNrRm9ybSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9ZWxzZXtcbiAgICAgICAgdGFza0Zvcm0ucmVtb3ZlKCk7XG4gICAgfTtcblxufTtcblxuLy9GdW5jdGlvbiB0byByZW5kZXIgdGhlIHRhc2tzIG9mIGEgcHJvamVjdCBvbiB0byB0aGUgRE9NXG4vL3RvIGJlIGRpc3BsYXllZCBvbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2plY3RUYXNrcyA9IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgIC8vRmlyc3QgdGhlIHRhc2tzIGNvbnRhaW5lciBtdXN0IGJlIGVtcHRpZWRcbiAgICByZW1vdmVBbGxUYXNrc0RPTSgpXG5cbiAgICAvL0Fzc2lnbiBhIHZhcmlhYmxlIHRvIGFuIGFycmF5IG9mIHRoZSBrZXkgbmFtZXMgZnJvbSBlYWNoXG4gICAgLy9wcm9qZWN0LlxuICAgIGxldCB0YXNrTGlzdCA9IHByb2plY3QudGFza0xpc3Q7XG5cbiAgICAvL0xvb3AgdGhyb3VnaCB0aGUga2V5IGFycmF5cyB0byBmaW5kIGFueSB0byBkbyBrZXlzIGluc2lkZSBcbiAgICAvL29mIHRoZSBwcm9qZWN0cy5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgY3VycmVudFRhc2sgPSB0YXNrTGlzdFtpXTtcbiAgICAgICAgLy9Jbml0aWFsaXplIGFsbCBvZiB0aGUgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSBcbiAgICAgICAgLy91c2VkIHRocm91Z2ggdGhlIGZ1bmN0aW9uIHRvIHRoZWlyIGRvbSBlbGVtZW50c1xuICAgICAgICByZW5kZXJJbmRpdmlkdWFsVGFzayhjdXJyZW50VGFzaywgdGFza0xpc3QsIHByb2plY3QpXG4gICAgfTtcbn07XG5cbi8vRnVuY3Rpb24gcmVuZGVycyBhIGdpdmVuIGluZGl2aWR1YWwgdGFzayBvbnRvIHRoZSBET01cbmV4cG9ydCBjb25zdCByZW5kZXJJbmRpdmlkdWFsVGFzayA9IGZ1bmN0aW9uKHRhc2ssIHRhc2tMaXN0LCBwcm9qZWN0KXtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tbGlzdC1jb250YWluZXJcIilcblxuICAgIC8vSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgXG4gICAgLy91c2VkIHRocm91Z2ggdGhlIGZ1bmN0aW9uIHRvIHRoZWlyIGRvbSBlbGVtZW50c1xuICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBjaGVjayA9IHJlbmRlclRhc2tDaGVja0JveCh0YXNrLCB0YXNrTGlzdCk7XG4gICAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IHJlbmRlckRlbGV0ZVRhc2tCdG4ocHJvamVjdCwgdGFzayk7XG5cblxuICAgIC8vQXBwZW5kIHRleHQgdG8gZWxlbWVudHMgZnJvbSB0aGVpciByZXNwZWN0aXZlIFxuICAgIC8vcHJvcGVydGllc1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IHJlZm9ybWF0RGF0ZSh0YXNrLmR1ZURhdGUpO1xuICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAvL0Fzc2lnbiBhIGNsYXNzIG5hbWUgdG8gdGhlc2UgZWxlbWVudHMgZm9yIGZ1dHVyZVxuICAgIC8vc3R5bGluZy5cbiAgICBhc3NpZ25DbGFzcygndGFzay1wcm9wZXJ0aWVzJywgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICB0YXNrV3JhcHBlci5jbGFzc05hbWUgPSAndGFzay13cmFwcGVyJztcbiAgICB0YXNrRGVsZXRlQnRuLmNsYXNzTmFtZSA9ICd0YXNrLWRlbGV0ZS1idXR0b24nO1xuXG4gICAgLy9BcHBlbmQgYWxsIG9mIHRoZSBuZXcgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lclxuICAgIC8vZm9yIHRoaXMgdG8gZG8gb2JqZWN0XG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza1dyYXBwZXIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrLCB0YXNrRGVsZXRlQnRuKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcilcbn07XG5cbi8vRnVuY3Rpb24gY3JlYXRlcyBhbmQgcmV0dXJuIHRoZSBjaGVja2JveCBmb3IgZWFjaCB0YXNrXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza0NoZWNrQm94ID0gZnVuY3Rpb24odGhpc1Rhc2ssIHRhc2tBcnJheSl7XG4gICAgLy9DcmVhdGUgd3JhcHBlciBmb3IgY2hlY2tcbiAgICBjb25zdCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAvL0NyZWF0ZSB0aGUgY2hlY2tib3ggZWxlbWVudFxuICAgIGNvbnN0IHRhc2tDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0NoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIHRhc2tDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpc1Rhc2sudGl0bGUgKyAodGFza0FycmF5LmluZGV4T2YodGhpc1Rhc2spKX0tY2hlY2stYm94YCk7XG5cbiAgICAvL0NyZWF0ZSB0aGUgbGFiZWwgZm9yIHRoZSBjaGVja2JveFxuICAgIGNvbnN0IHRhc2tDaGVja0JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrQ2hlY2tCb3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke3RoaXNUYXNrLnRpdGxlICsgKHRhc2tBcnJheS5pbmRleE9mKHRoaXNUYXNrKSl9LWNoZWNrLWJveGApO1xuICAgIHRhc2tDaGVja0JveExhYmVsLmlubmVyVGV4dCA9ICdDb21wbGV0ZWQ/JztcblxuICAgIC8vRXZlbnQgbGlzdGVuZXIgZm9yIGNoZWNrYm94XG4gICAgdGFza0NoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT4ge1xuICAgICAgICB0aGlzVGFzay5jaGFuZ2VDb21wbGV0ZVN0YXR1cygpO1xuICAgIH0pO1xuXG4gICAgaWYodGhpc1Rhc2suY29tcGxldGUgPT09IHRydWUpe1xuICAgICAgICB0YXNrQ2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIHRhc2tDaGVjay5jbGFzc05hbWUgPSAndGFzay1jaGVjay13cmFwcGVyJztcblxuICAgIC8vQXBwZW5kIGVsZW1lbnRzIHRvIHRoZSB3cmFwcGVyXG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza0NoZWNrLCB0YXNrQ2hlY2tCb3hMYWJlbCwgdGFza0NoZWNrQm94KTtcblxuICAgIHJldHVybiB0YXNrQ2hlY2s7XG5cbn07XG5cbi8vRnVuY3Rpb24gY3JlYXRlcyBhbmQgcmV0dXJucyB0aGUgJ2RlbGV0ZSBidXR0b24nIHdoaWNoIHdpbGwgXG4vL2JlIHVzZWQgb2YgZWFjaCB0YXNrXG5leHBvcnQgY29uc3QgcmVuZGVyRGVsZXRlVGFza0J0biA9IGZ1bmN0aW9uKHRoaXNQcm9qZWN0LCB0aGlzVGFzayl7XG4gICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRhc2tCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBsZXQgY3VycmVudFJlbmRlclR5cGUgPSBTdG9yZXIuY3VycmVudGx5U2VsZWN0ZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRSZW5kZXJUeXBlKTtcbiAgICAgICAgdGhpc1Byb2plY3QucmVtb3ZlVGFzayh0aGlzVGFzayk7XG4gICAgICAgIGNob29zZVJlbmRlclR5cGUoY3VycmVudFJlbmRlclR5cGUsIHRoaXNQcm9qZWN0KTtcbiAgICB9KVxuICAgIHJldHVybiBkZWxldGVUYXNrQnRuO1xufTtcblxuLy9GdW5jdGlvbiBjcmVhdGVzIG91ciBcIkFkZCBUYXNrIEJ1dHRvblwiIGdpdmVuIGEgcGFyZW50IGVsZW1lbnRcbi8vdG8gYXBwZW5kIHRvLlxuZXhwb3J0IGNvbnN0IHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4gPSBmdW5jdGlvbihlbGVtZW50VG9QcmVwZW5kVG8sIGN1cnJlbnRQcm9qZWN0KXtcbiAgICAvL0NyZWF0ZSB0aGUgYnV0dG9uIGVsZW1lbnQgd2l0aCB0ZXh0LlxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG5cbiAgICAvL0FkZCBjbGFzcyB0byB0aGUgYnV0dG9uXG4gICAgYWRkVGFza0J0bi5jbGFzc05hbWUgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xuXG4gICAgLy9BZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBidXR0b24gd2hpY2ggb3BlbnMgdGhlIFxuICAgIC8vXCJUYXNrIEZvcm1cIiBvbiB0aGUgZWxlbWVudCB0aGF0IHdhcyBnaXZlbi5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICBvcGVuVGFza0Zvcm0oZWxlbWVudFRvUHJlcGVuZFRvLCBjdXJyZW50UHJvamVjdClcbiAgICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgIH0pXG5cbiAgICAvL0FwcGVuZCB0aGUgYnV0dG9uIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgIGVsZW1lbnRUb1ByZXBlbmRUby5wcmVwZW5kKGFkZFRhc2tCdG4pO1xufTtcblxuLy9GdW5jdGlvbiB0byBhZGQgYSBcIlRhc2tcIiB0byBhIHByb2plY3QncyB0YXNrIGFycmF5LlxuZXhwb3J0IGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kdWUtZGF0ZS1pbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1pbnB1dCcpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuXG4gICAgaWYoIXRpdGxlSW5wdXQudmFsdWUgfHwgIWRlc2NyaXB0aW9uSW5wdXQudmFsdWUgfHwgIWR1ZURhdGVJbnB1dC52YWx1ZSB8fCAhcHJpb3JpdHlJbnB1dC52YWx1ZSl7XG4gICAgICAgIGFsZXJ0KCdBbGwgZmllbGRzIHNob3VsZCBiZSBjb21wbGV0ZWQgYmVmb3JlIHN1Ym1pdHRpbmchJyk7XG4gICAgfSBlbHNle1xuICAgICAgICBwcm9qZWN0LmFkZFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LnZhbHVlKVxuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIHRvIHJlbW92ZSBhbGwgdGFza3MgZnJvbSB0aGUgc2NyZWVuLlxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbFRhc2tzRE9NID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkaXNwbGF5ZWRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXdyYXBwZXInKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIGRpc3BsYXllZFRhc2tzKXtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICB9O1xufTtcblxuLy9GdW5jdGlvbiByZW1vdmVkIHRoZSAnQWRkIFRhc2snIGJ1dHRvbiBmcm9tIHRoZSBET01cbmV4cG9ydCBjb25zdCByZW1vdmVBZGRUYXNrQnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpO1xuICAgIGlmKGFkZFRhc2tCdXR0b24pe1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnJlbW92ZSgpO1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29tcGxldGVkVGFza3MgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcjtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdHNBcnJheSgpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBhbGxQcm9qZWN0c1tpXS50YXNrTGlzdDtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRhc2tMaXN0Lmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGlmKHRhc2tMaXN0W2pdLmNvbXBsZXRlID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1tpXS5yZW1vdmVUYXNrKHRhc2tMaXN0W2pdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJlbW92ZUFsbFRhc2tzRE9NKCk7XG4gICAgcmVtb3ZlQWxsQWN0aXZlQnV0dG9ucygpO1xuICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpLmlubmVyVGV4dCA9ICcnO1xufTtcblxuLy9GdW5jdGlvbiBmaW5kcyBhbmQgcmVuZGVycyBhbGwgb2YgdGhlIHRhc2tzIHRoYXQgYXJlIGR1ZSBmb3IgdGhpcyB3ZWVrLlxuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tzRm9yV2VlayA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG4gICAgY29uc3QgcHJvamVjdHNBcnJheSA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdHNBcnJheSgpO1xuICAgIGNvbnN0IGRhdGVzSW5UaGlzV2VlayA9IHJlZm9ybWF0VGhpc1dlZWsoZmluZFRoaXNXZWVrKCkpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcblxuICAgIHJlbW92ZUFsbFRhc2tzRE9NKCk7XG5cbiAgICB0aXRsZS5pbm5lclRleHQgPSAnRHVlIFRoaXMgV2Vlayc7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0YXNrTGlzdCA9IHByb2plY3RzQXJyYXlbaV0udGFza0xpc3Q7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0YXNrTGlzdC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZihkYXRlc0luVGhpc1dlZWsuaW5jbHVkZXMocmVmb3JtYXREYXRlKHRhc2tMaXN0W2pdLmR1ZURhdGUpKSl7XG4gICAgICAgICAgICAgICAgcmVuZGVySW5kaXZpZHVhbFRhc2sodGFza0xpc3Rbal0sIHRhc2tMaXN0LCBwcm9qZWN0c0FycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vRnVuY3Rpb24gZmluZHMgYW5kIHJlbmRlcnMgYWxsIG9mIHRoZSB0YXNrcyB0aGF0IGFyZSBkdWUgZm9yIHRvZGF5XG5leHBvcnQgY29uc3QgcmVuZGVyVGFza3NGb3JUb2RheSA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG4gICAgY29uc3QgcHJvamVjdHNBcnJheSA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdHNBcnJheSgpO1xuICAgIGNvbnN0IHRvZGF5ID0gdG9kYXlzRGF0ZSgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcblxuICAgIHJlbW92ZUFsbFRhc2tzRE9NKCk7XG5cbiAgICB0aXRsZS5pbm5lclRleHQgPSAnRHVlIFRvZGF5JztcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRhc2tMaXN0ID0gcHJvamVjdHNBcnJheVtpXS50YXNrTGlzdDtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRhc2tMaXN0Lmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGlmKHRvZGF5ID09PSByZWZvcm1hdERhdGUodGFza0xpc3Rbal0uZHVlRGF0ZSkpe1xuICAgICAgICAgICAgICAgIHJlbmRlckluZGl2aWR1YWxUYXNrKHRhc2tMaXN0W2pdLCB0YXNrTGlzdCwgcHJvamVjdHNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vL0Z1bmN0aW9uIGZpbmRzIGFuZCByZW5kZXJzIGFsbCBvZiB0aGUgdGFza3MgdGhhdCBhcmUgZHVlIGZvciB0aGlzIG1vbnRoXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza3NGb3JNb250aCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG4gICAgY29uc3QgcHJvamVjdHNBcnJheSA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdHNBcnJheSgpO1xuICAgIGNvbnN0IGRhdGVzSW5UaGlzTW9udGggPSByZWZvcm1hdFRoaXNNb250aChmaW5kVGhpc01vbnRoKCkpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcblxuICAgIHJlbW92ZUFsbFRhc2tzRE9NKCk7XG5cbiAgICB0aXRsZS5pbm5lclRleHQgPSAnRHVlIFRoaXMgTW9udGgnO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdGFza0xpc3QgPSBwcm9qZWN0c0FycmF5W2ldLnRhc2tMaXN0O1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGFza0xpc3QubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgaWYoZGF0ZXNJblRoaXNNb250aC5pbmNsdWRlcyhyZWZvcm1hdERhdGUodGFza0xpc3Rbal0uZHVlRGF0ZSkpKXtcbiAgICAgICAgICAgICAgICByZW5kZXJJbmRpdmlkdWFsVGFzayh0YXNrTGlzdFtqXSwgdGFza0xpc3QsIHByb2plY3RzQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLy9GdW5jdGlvbiBtYWtlcyB0aGUgZGVjaXNpb24gb24gaG93IHRoZSB0YXNrcyBzaG91bGQgYmUgcmVuZGVyZWQgKGJ5IHByb2plY3QgXG4vL29yIHRpbWUgZnJhbWUpXG5leHBvcnQgY29uc3QgY2hvb3NlUmVuZGVyVHlwZSA9IGZ1bmN0aW9uKHNlbGVjdGVkVGFza3NUeXBlLCBwcm9qZWN0KXtcbiAgICBpZihzZWxlY3RlZFRhc2tzVHlwZSA9PT0gJ1RvZGF5Jyl7XG4gICAgICAgIHJlbmRlclRhc2tzRm9yVG9kYXkoKTtcbiAgICB9IGVsc2UgaWYoc2VsZWN0ZWRUYXNrc1R5cGUgPT09ICdXZWVrJyl7XG4gICAgICAgIHJlbmRlclRhc2tzRm9yV2VlaygpO1xuICAgIH0gZWxzZSBpZihzZWxlY3RlZFRhc2tzVHlwZSA9PT0gJ01vbnRoJyl7XG4gICAgICAgIHJlbmRlclRhc2tzRm9yTW9udGgoKTtcbiAgICB9IGVsc2UgaWYoc2VsZWN0ZWRUYXNrc1R5cGUgPT09ICdQcm9qZWN0Jyl7XG4gICAgICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0KVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cblxuLy9GdW5jdGlvbiB0byBoZWxwIGFwcGVuZCBtdWx0aXBsZSBjaGlsZHJlbiBhdCBvbmNlIHRvIGEgcGFyZW50XG4vL2VsZW1lbnRcbmV4cG9ydCBjb25zdCBhcHBlbmRDaGlsZHJlbiA9IGZ1bmN0aW9uKHBhcmVudCwgLi4uY2hpbGRyZW4peyBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5baV0pO1xuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIHRvIGFsbG93IG1lIHRvIGFkZCB0aGUgc2FtZSBjbGFzcyBuYW1lIHRvIG11bHRpcGxlXG4vL2VsZW1lbnRzLlxuZXhwb3J0IGNvbnN0IGFzc2lnbkNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lLCAuLi5lbGVtZW50cyl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZWxlbWVudHNbaV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIGdldHMgdGhlIGN1cnJlbnQgZGF0ZSBhbmQgcmV0dXJucyBpdCBpbiBhIHN1aXRhYmxlIGZvcm1hdFxuLy90byBiZSBkaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCB0b2RheXNEYXRlID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBmdWxsRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBsZXQgZGF5ID0gZnVsbERhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aCA9IGZ1bGxEYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGxldCB5ZWFyID0gZnVsbERhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGxldCBjdXJyZW50RGF0ZSA9IGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XG4gICAgcmV0dXJuIGN1cnJlbnREYXRlO1xufTtcblxuLy9UaGlzIGZ1bmN0aW9uIGdldHMgYSBkYXRlIGNyZWF0ZWQgZnJvbSB0aGUgZGF0ZSBpbnB1dCBhbmQgcmVmb3JtYXRzIFxuLy9pdCB0byBiZSBtb3JlIHN1aXRhYmxlIGZvciBkaXNwbGF5IG9uIHRoZSBwYWdlXG5leHBvcnQgY29uc3QgcmVmb3JtYXREYXRlID0gZnVuY3Rpb24oZGF0ZSl7XG4gICAgY29uc3QgcmVmb3JtYXR0ZWREYXRlID0gIGRhdGUuc3BsaXQoXCItXCIpLnJldmVyc2UoKS5qb2luKFwiL1wiKTtcbiAgICBsZXQgbmV3UmVmb3JtYXR0ZWREYXRlID0gJyc7XG4gICAgbGV0IGNoYXJhY3RlciA9ICcwJztcbiAgICBpZihyZWZvcm1hdHRlZERhdGVbM10gPT09IGNoYXJhY3Rlcil7XG4gICAgICAgIG5ld1JlZm9ybWF0dGVkRGF0ZSA9IHJlbW92ZUNoYXJhY3Rlcig0LCByZWZvcm1hdHRlZERhdGUpO1xuICAgIH0gZWxzZXtcbiAgICAgICAgbmV3UmVmb3JtYXR0ZWREYXRlID0gcmVmb3JtYXR0ZWREYXRlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3UmVmb3JtYXR0ZWREYXRlO1xufTtcblxuLy9GdW5jdGlvbiBmaW5kcyBhbGwgdGhlIGRheXMgaW4gdGhlIGN1cnJlbnQgd2VlayBhbmQgcmV0dXJucyB0aGVtIGFzIGFuIFxuLy9hcnJheSAgXG5leHBvcnQgY29uc3QgZmluZFRoaXNXZWVrID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkYXRlQXJyYXkgPSBbXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbmV4dERheSA9IGFkZERheXMoZGF0ZSwgMSk7XG5cbiAgICBkYXRlQXJyYXkucHVzaChkYXRlKTtcblxuICAgIHdoaWxlKG5leHREYXkuZ2V0RGF5KCkgIT09IDEpe1xuICAgICAgICBkYXRlQXJyYXkucHVzaChuZXh0RGF5KTtcbiAgICAgICAgbmV4dERheSA9IGFkZERheXMobmV4dERheSwgMSk7XG4gICAgfTtcblxuICAgIHJldHVybiBkYXRlQXJyYXk7XG59O1xuXG5cbi8vRnVuY3Rpb24gcmVmb3JtYXRzIHRoZSBmdWxsIGRhdGVzIGluIHRoZSB3ZWVrIGFycmF5IHNvIHRoYXQgdGhlIGRhdGVzIG9ubHkgXG4vL2NvbnRhaW4gdGhlIHJlbGV2YW50IGluZm9ybWF0aW9uXG5leHBvcnQgY29uc3QgcmVmb3JtYXRUaGlzV2VlayA9IGZ1bmN0aW9uKHdlZWspe1xuICAgIGNvbnN0IHdlZWtEYXlBcnJheSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3ZWVrLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGRheSA9IHdlZWtbaV0uZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgbW9udGggPSB3ZWVrW2ldLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBsZXQgeWVhciA9IHdlZWtbaV0uZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICBsZXQgdGhpc0Z1bGxEYXkgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xuICAgICAgICBcbiAgICAgICAgd2Vla0RheUFycmF5LnB1c2godGhpc0Z1bGxEYXkpO1xuICAgIH1cbiAgICByZXR1cm4gd2Vla0RheUFycmF5O1xufTtcblxuLy9GdW5jdGlvbiBmaW5kcyBhbGwgdGhlIGRhdGVzIGluIHRoZSBjdXJyZW50IG1vbnRoIGFuZCByZXR1cm5zIGl0IGFzIGFuIFxuLy9hcnJheVxuZXhwb3J0IGNvbnN0IGZpbmRUaGlzTW9udGggPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRhdGVBcnJheSA9IFtdO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBuZXh0RGF5ID0gYWRkRGF5cyhkYXRlLCAxKTtcbiAgICBsZXQgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcblxuICAgIGRhdGVBcnJheS5wdXNoKGRhdGUpO1xuXG4gICAgd2hpbGUobmV4dERheS5nZXRNb250aCgpKyAxID09PSBjdXJyZW50TW9udGgpe1xuICAgICAgICBkYXRlQXJyYXkucHVzaChuZXh0RGF5KTtcbiAgICAgICAgbmV4dERheSA9IGFkZERheXMobmV4dERheSwgMSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlQXJyYXk7XG59O1xuXG4vL0Z1bmN0aW9uIHJlZm9ybWF0cyB0aGUgZGF0ZXMgaW4gdGhlIG1vbnRoIGFycmF5IHNvIHRoYXQgdGhlIGRhdGVzIGNvbnRhaW4gXG4vL29ubHkgdGhlIHJlbGV2YW50IGluZm9ybWF0aW9uXG5leHBvcnQgY29uc3QgcmVmb3JtYXRUaGlzTW9udGggPSBmdW5jdGlvbihvcmlnaW5hbE1vbnRoQXJyYXkpe1xuICAgIGNvbnN0IG1vbnRoQXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgb3JpZ2luYWxNb250aEFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGRheSA9IG9yaWdpbmFsTW9udGhBcnJheVtpXS5nZXREYXRlKCk7XG4gICAgICAgIGxldCBtb250aCA9IG9yaWdpbmFsTW9udGhBcnJheVtpXS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgbGV0IHllYXIgPSBvcmlnaW5hbE1vbnRoQXJyYXlbaV0uZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICBsZXQgdGhpc0Z1bGxEYXkgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xuICAgICAgICBcbiAgICAgICAgbW9udGhBcnJheS5wdXNoKHRoaXNGdWxsRGF5KTtcbiAgICB9O1xuICAgIHJldHVybiBtb250aEFycmF5XG59O1xuXG5cbi8vRnVuY3Rpb24gcmVtb3ZlcyBhIGNoYXJhY3RlciBmcm9tIGEgc3BlY2lmaWVkIHBvc2l0aW9uIG9mIGEgZ2l2ZW4gc3RyaW5nXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hhcmFjdGVyID0gZnVuY3Rpb24ocG9zaXRpb24sIHN0cmluZykge1xuICAgIGxldCBuZXdTdHJpbmcgPVxuICAgICAgICBzdHJpbmcuc3Vic3RyKDAsIHBvc2l0aW9uIC0gMSkrXG4gICAgICAgIHN0cmluZy5zdWJzdHIoXG4gICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgIHN0cmluZy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICByZXR1cm4gbmV3U3RyaW5nO1xufTtcblxuXG4vL0Z1bmN0aW9uIHRvIHN0b3JlIGFuIGFycmF5IGludG8gbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGNvbnN0IHN0b3JlQXJyYXlMb2NhbCA9IGZ1bmN0aW9uKGtleU5hbWUsIGFycmF5KXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlOYW1lLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xufTtcblxuLy9GdW5jdGlvbiByZXR1cm5zIGFuIGFycmF5IGZyb20gbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGNvbnN0IGdldEFycmF5TG9jYWwgPSBmdW5jdGlvbihrZXlOYW1lKXtcbiAgICBsZXQgYXJyYXk7XG4gICAgaWYoY2hlY2tMb2NhbChrZXlOYW1lKSA9PT0gdHJ1ZSl7XG4gICAgICAgIGFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlOYW1lKSk7XG4gICAgfSBlbHNle1xuICAgICAgICBhcnJheSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59O1xuXG4vL0Z1bmN0aW9uIGNoZWNrcyBmb3IgZXhpc3RpbmcgYXJyYXkgc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2Vcbi8vYW5kIHJlbW92ZXMgaXRcbmV4cG9ydCBjb25zdCByZW1vdmVBcnJheUxvY2FsID0gZnVuY3Rpb24oa2V5TmFtZSl7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5TmFtZSk7XG59O1xuXG4vL0Z1bmN0aW9uIGNsZWFycyB0aGUgbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGNvbnN0IGNsZWFyTG9jYWwgPSBmdW5jdGlvbigpe1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xufVxuXG4vL0NoZWNrIGxvY2FsIHN0b3JhZ2UgZm9yIGEga2V5XG5leHBvcnQgY29uc3QgY2hlY2tMb2NhbCA9IGZ1bmN0aW9uKGtleSl7XG4gICAgaWYoa2V5IGluIGxvY2FsU3RvcmFnZSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNsb3NlUHJvamVjdEZvcm0sIHJlbmRlck5ld1Byb2plY3RCdG4sIHJlbmRlclByb2plY3QsIHNldEFjdGl2ZUNhbGVuZGVyQnV0dG9uIH0gZnJvbSBcIi4vaGFuZGxlUHJvamVjdFwiO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgU3RvcmVyfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4U3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbW92ZUFkZFRhc2tCdXR0b24sIHJlbW92ZUNvbXBsZXRlZFRhc2tzLCByZW1vdmVUYXNrRm9ybSwgcmVuZGVyVGFza3NGb3JNb250aCwgcmVuZGVyVGFza3NGb3JUb2RheSwgcmVuZGVyVGFza3NGb3JXZWVrIH0gZnJvbSBcIi4vaGFuZGxlVGFza1wiO1xuXG5yZW5kZXJOZXdQcm9qZWN0QnRuKENvbnRyb2xsZXIucHJvamVjdHNBcnJheSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy10b2RheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBTdG9yZXIuY3VycmVudGx5U2VsZWN0ZWQgPSAnVG9kYXknO1xuICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICByZW1vdmVUYXNrRm9ybSgpO1xuICAgIHNldEFjdGl2ZUNhbGVuZGVyQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy10b2RheScpKVxuICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oKTtcbiAgICByZW5kZXJUYXNrc0ZvclRvZGF5KCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLXdlZWsnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgU3RvcmVyLmN1cnJlbnRseVNlbGVjdGVkID0gJ1dlZWsnO1xuICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICByZW1vdmVUYXNrRm9ybSgpO1xuICAgIHNldEFjdGl2ZUNhbGVuZGVyQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy13ZWVrJykpXG4gICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgIHJlbmRlclRhc2tzRm9yV2VlaygpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1tb250aCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBTdG9yZXIuY3VycmVudGx5U2VsZWN0ZWQgPSAnTW9udGgnO1xuICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICByZW1vdmVUYXNrRm9ybSgpO1xuICAgIHNldEFjdGl2ZUNhbGVuZGVyQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1tb250aCcpKVxuICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oKTtcbiAgICByZW5kZXJUYXNrc0Zvck1vbnRoKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZS1jb21wbGV0ZS10YXNrcy1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVDb21wbGV0ZWRUYXNrcygpO1xuICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICByZW1vdmVUYXNrRm9ybSgpO1xufSk7XG5cbmxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcblxuY29uc29sZS5sb2coY29udHJvbGxlci5nZXRQcm9qZWN0c0FycmF5KCkpO1xuXG5yZW5kZXJQcm9qZWN0KGNvbnRyb2xsZXIuZ2V0UHJvamVjdHNBcnJheSgpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJykpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==