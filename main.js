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
    grid-template-rows: 80px 100px 80px auto 50px;
    height: 100vh;
    width: 100vw;
}

.header{
    grid-column: 1/3;
    display: flex;;
    justify-content: center;
    align-items: center;
    background-color: #011638;
    box-shadow: inset 0px -5px 20px#022864;
}

.new-projects-form{
    grid-row: 2/4;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #364156;
    box-shadow: inset 0px 2px 6px #011638;
}

.new-projects-form h2{
    color: #DFF8EB;
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
    background-color: #364156;
    box-shadow: inset 0px 2px 6px #011638;
}

.task-section-header{
    display: flex;
    flex-direction: row;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    width: 50%;

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
    background-color: #364156;
    box-shadow: inset 0px 2px 6px #011638;
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
    background-color: #011638;
    box-shadow: inset 0px 5px 20px#022864;
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
    color: #DFF8EB;
    font-size: 32px;
    text-decoration: underline;
    text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/indexStyle.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-template-rows: 80px 100px 80px auto 50px;\n    height: 100vh;\n    width: 100vw;\n}\n\n.header{\n    grid-column: 1/3;\n    display: flex;;\n    justify-content: center;\n    align-items: center;\n    background-color: #011638;\n    box-shadow: inset 0px -5px 20px#022864;\n}\n\n.new-projects-form{\n    grid-row: 2/4;\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: #364156;\n    box-shadow: inset 0px 2px 6px #011638;\n}\n\n.new-projects-form h2{\n    color: #DFF8EB;\n}\n\n#new-project-button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n    cursor: pointer;\n    height: 30px;\n}\n\n.new-project-button-wrapper{\n    height: 30px;\n}\n\n.project-date-nav{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 110px;\n}\n\n.project-date-nav button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n    cursor: pointer;\n    height: 30px;\n}\n\n.task-section{\n    grid-row: 2/5;\n    grid-column: 2/3;\n    background-color: #364156;\n    box-shadow: inset 0px 2px 6px #011638;\n}\n\n.task-section-header{\n    display: flex;\n    flex-direction: row;\n    height: 100px;\n    justify-content: space-between;\n    align-items: center;\n    width: 50%;\n\n}\n\n.to-do-list-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 300px);\n    grid-template-rows: repeat(auto-fit, 200px);\n    gap: 20px;\n    padding: 20px;\n}\n\n.projects-container{\n    grid-column: 1/2;\n    grid-row: 4/5;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #364156;\n    box-shadow: inset 0px 2px 6px #011638;\n}\n\n.task-wrapper{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 300px;\n    height: 200px;\n    text-align: center;\n    background-color: #214E34;\n    color: #DFF8EB;\n    font-weight: bolder;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.header h1{\n    color: #DFF8EB;\n}\n\n.footer{\n    grid-column: 1/3;\n    grid-row: 5/6;\n    background-color: #011638;\n    box-shadow: inset 0px 5px 20px#022864;\n}\n\n.project-form-wrapper{\n    position: fixed;\n    width: 200px;\n    height: 100px;\n    top: 50%;\n    left: 50%;\n    margin-top: -50px;\n    margin-left: -100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #214E34;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.project-form-wrapper input{\n    height: 30px\n}\n\n.project-form-wrapper input:focus{\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.project-form-wrapper button{\n    width: 60px;\n    height: 30px;\n    border: none;\n    border-radius: 5px;\n    background-color: #011638;\n    color: #DFF8EB;\n    font-weight: bolder;\n    cursor: pointer;\n}\n\n.project-form-wrapper button:hover{\n    background-color: #022864;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.project-form-buttons-wrapper{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.indiv-project-containers{\n    background-color: #214E34;\n    color: #DFF8EB;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n    width: 90%;\n    min-height: 100px;\n    cursor: pointer;\n    padding: 5px;\n    text-align: center;\n}\n\n.project-titles{\n    margin-left: 5px;\n    font-size: 20px;\n    padding: 5px;\n}\n\n.project-dates{\n    font-size: 14px;\n}\n\n.remove-project-button{\n    margin-left: 5px;\n    margin-right: 5px;\n    border: 1px black solid;\n    background-color: red;\n    color: white;;\n    font-weight: bolder;\n    border-radius: 6px;\n    cursor: pointer;\n}\n\n#project-title{\n    text-align: center;\n    color: #DFF8EB;\n    font-size: 32px;\n    text-decoration: underline;\n    text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;\n}\n\n.add-task-button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n    width: 80px;\n    height: 40px;\n    cursor: pointer;\n    margin-left: 10px;\n}\n\n.remove-project-button:hover{\n    box-shadow: inset 1px 1px 2px black, inset -1px -1px 2px black;\n    background-color: rgb(201, 0, 0);\n}\n\n.task-form{\n    position: fixed;\n    width: 250px;\n    height: 350px;\n    top: 50%;\n    left: 50%;\n    margin-top: -175px;\n    margin-left: -125px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #214E34;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.field-element-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n.field-element-wrapper label{\n    color: #DFF8EB;\n    font-weight: bolder;\n}\n\n.new-task-buttons-wrapper{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.task-form button{\n    width: 70px;\n    height: 30px;\n    border: none;\n    border-radius: 5px;\n    background-color: #011638;\n    color: #DFF8EB;\n    font-weight: bolder;\n    cursor: pointer;\n}\n\n.task-form button:hover{\n    background-color: #022864;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.task-input{\n    height: 30px\n}\n\n.task-input:focus{\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.task-check-wrapper{\n    width: 120px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.task-check-wrapper input{\n    height: 16px;\n    width: 16px;\n}\n\n.task-delete-button{\n    border: 1px black solid;\n    background-color: red;\n    color: white;;\n    font-weight: bolder;\n    border-radius: 6px;\n    cursor: pointer; \n}"],"sourceRoot":""}]);
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

//This class has control over the collection of the projects
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
    const projectFormWrapper = document.querySelector('.project-form-wrapper');

    //Remove the form input fields
    projectFormWrapper.remove();

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
                renderProject(array, container);
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(project);
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAddTaskButton)();
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAllTasksDOM)();
                document.querySelector('#project-title').innerText = '';
            }else{
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAllTasksDOM)();
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAddTaskButton)();
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeTaskForm)();
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderCreateAddTaskBtn)(document.querySelector('.add-task-btn-wrapper'),project);
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(project);
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

    //Render the projects in the projects list into the given container
    renderProject(projectsList, document.querySelector('.projects-container'));

    //Close the project form
    closeProjectForm(projectsList);

    //Remove any currently active project title and task 
    //creation button
    (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAddTaskButton)();
    document.querySelector('#project-title').innerText = '';
};

//A function to show which project is currently chosen.
const setActiveProject = function(currentProject){
    const allProjectElements = document.querySelectorAll('.indiv-project-containers');
    const projectTitle = document.querySelector("#project-title");
    projectTitle.innerText = '';
    
    for(let project of allProjectElements){
        project.style.boxShadow = '1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB';
    }
    if(currentProject){
        projectTitle.innerText = currentProject.firstChild.textContent;
        currentProject.style.boxShadow = 'inset 4px 4px 6px black, inset -4px -4px 6px black, 1px 1px 3px #DFF8EB,-1px -1px 3px #DFF8EB';
    };
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
/* harmony export */   findTasksForMonth: () => (/* binding */ findTasksForMonth),
/* harmony export */   findTasksForToday: () => (/* binding */ findTasksForToday),
/* harmony export */   findTasksForWeek: () => (/* binding */ findTasksForWeek),
/* harmony export */   openTaskForm: () => (/* binding */ openTaskForm),
/* harmony export */   removeAddTaskButton: () => (/* binding */ removeAddTaskButton),
/* harmony export */   removeAllTasksDOM: () => (/* binding */ removeAllTasksDOM),
/* harmony export */   removeTaskForm: () => (/* binding */ removeTaskForm),
/* harmony export */   renderCreateAddTaskBtn: () => (/* binding */ renderCreateAddTaskBtn),
/* harmony export */   renderDeleteTaskBtn: () => (/* binding */ renderDeleteTaskBtn),
/* harmony export */   renderIndividualTask: () => (/* binding */ renderIndividualTask),
/* harmony export */   renderTaskCheckBox: () => (/* binding */ renderTaskCheckBox),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _helperFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunction */ "./src/helperFunction.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");



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
        renderCreateAddTaskBtn(document.querySelector('.task-section-header') ,currentProject)
        renderTasks(currentProject);
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
const renderTasks = function(project){
    //First the tasks container must be emptied
    removeAllTasksDOM()

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
        const check = renderTaskCheckBox(currentTask, taskList);
        const taskDeleteBtn = renderDeleteTaskBtn(project, currentTask);


        //Append text to elements from their respective 
        //properties
        title.innerText = currentTask.title;
        description.innerText = currentTask.description;
        dueDate.innerText = (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.reformatDate)(currentTask.dueDate);
        priority.innerText = currentTask.priority;

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
}

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
        console.log(thisTask);
    });

    if(thisTask.complete === true){
        taskCheckBox.checked = true;
    };

    taskCheck.className = 'task-check-wrapper';

    //Append elements to the wrapper
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskCheck, taskCheckBoxLabel, taskCheckBox);

    return taskCheck;

}

//Function creates and returns the 'delete button' which will 
//be used of each task
const renderDeleteTaskBtn = function(thisProject, thisTask){
    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.innerText = 'X';
    deleteTaskBtn.addEventListener('click', ()=>{
        thisProject.removeTask(thisTask);
        renderTasks(thisProject);
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
}

//Function to remove all tasks from the screen.
const removeAllTasksDOM = function(){
    const displayedTasks = document.querySelectorAll('.task-wrapper');
    for (let task of displayedTasks){
        task.remove();
    };
}

//Function removed the 'Add Task' button from the DOM
const removeAddTaskButton = function(){
    const addTaskButton = document.querySelector('.add-task-button');
    if(addTaskButton){
        addTaskButton.remove();
    };
}

//Function finds and renders all of the tasks that are due for this week.
const findTasksForWeek = function(){
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
}

//Function finds and renders all of the tasks that are due for today
const findTasksForToday = function(){
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
const findTasksForMonth = function(){
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
/* harmony export */   assignClass: () => (/* binding */ assignClass),
/* harmony export */   findThisMonth: () => (/* binding */ findThisMonth),
/* harmony export */   findThisWeek: () => (/* binding */ findThisWeek),
/* harmony export */   reformatDate: () => (/* binding */ reformatDate),
/* harmony export */   reformatThisMonth: () => (/* binding */ reformatThisMonth),
/* harmony export */   reformatThisWeek: () => (/* binding */ reformatThisWeek),
/* harmony export */   removeCharacter: () => (/* binding */ removeCharacter),
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

document.querySelector('#tasks-today').addEventListener('click', _handleTask__WEBPACK_IMPORTED_MODULE_3__.findTasksForToday);
document.querySelector('#tasks-week').addEventListener('click', _handleTask__WEBPACK_IMPORTED_MODULE_3__.findTasksForWeek);
document.querySelector('#tasks-month').addEventListener('click', _handleTask__WEBPACK_IMPORTED_MODULE_3__.findTasksForMonth);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEZBQTRGLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFB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O1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzRDtBQUNmO0FBQ047QUFDcUQ7O0FBRXRGLG1FQUFtQixDQUFDLGdEQUFVOztBQUU5QixpRUFBaUUsMERBQWlCO0FBQ2xGLGdFQUFnRSx5REFBZ0I7QUFDaEYsaUVBQWlFLDBEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3kvLi9zcmMvc3R5bGVzL2luZGV4U3R5bGUuY3NzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlcy9pbmRleFN0eWxlLmNzcz9lY2Q4Iiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3kvLi9zcmMvaGFuZGxlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2hhbmRsZVRhc2suanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9oZWxwZXJGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly95L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuYm9keXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMTAwcHggODBweCBhdXRvIDUwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5oZWFkZXJ7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBkaXNwbGF5OiBmbGV4OztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC01cHggMjBweCMwMjI4NjQ7XG59XG5cbi5uZXctcHJvamVjdHMtZm9ybXtcbiAgICBncmlkLXJvdzogMi80O1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDE1NjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDZweCAjMDExNjM4O1xufVxuXG4ubmV3LXByb2plY3RzLWZvcm0gaDJ7XG4gICAgY29sb3I6ICNERkY4RUI7XG59XG5cbiNuZXctcHJvamVjdC1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0NEQ0RDRCwgMXB4IDFweCAzcHggaW5zZXQgI0NEQ0RDRDtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24td3JhcHBlcntcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5wcm9qZWN0LWRhdGUtbmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTEwcHg7XG59XG5cbi5wcm9qZWN0LWRhdGUtbmF2IGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjQ0RDRENELCAxcHggMXB4IDNweCBpbnNldCAjQ0RDRENEO1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLnRhc2stc2VjdGlvbntcbiAgICBncmlkLXJvdzogMi81O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDE1NjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDZweCAjMDExNjM4O1xufVxuXG4udGFzay1zZWN0aW9uLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuXG59XG5cbi50by1kby1saXN0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMDBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDIwMHB4KTtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lcntcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGdyaWQtcm93OiA0LzU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDE1NjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDZweCAjMDExNjM4O1xufVxuXG4udGFzay13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbn1cblxuLmhlYWRlciBoMXtcbiAgICBjb2xvcjogI0RGRjhFQjtcbn1cblxuLmZvb3RlcntcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGdyaWQtcm93OiA1LzY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNXB4IDIwcHgjMDIyODY0O1xufVxuXG4ucHJvamVjdC1mb3JtLXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbn1cblxuLnByb2plY3QtZm9ybS13cmFwcGVyIGlucHV0e1xuICAgIGhlaWdodDogMzBweFxufVxuXG4ucHJvamVjdC1mb3JtLXdyYXBwZXIgaW5wdXQ6Zm9jdXN7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xufVxuXG4ucHJvamVjdC1mb3JtLXdyYXBwZXIgYnV0dG9ue1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XG4gICAgY29sb3I6ICNERkY4RUI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWZvcm0td3JhcHBlciBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMjg2NDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XG59XG5cbi5wcm9qZWN0LWZvcm0tYnV0dG9ucy13cmFwcGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmluZGl2LXByb2plY3QtY29udGFpbmVyc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXRpdGxlc3tcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9qZWN0LWRhdGVze1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Byb2plY3QtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaywgLTFweCAtMXB4IGJsYWNrLCAxcHggLTFweCBibGFjaywgLTFweCAxcHggYmxhY2s7XG59XG5cbi5hZGQtdGFzay1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0NEQ0RDRCwgMXB4IDFweCAzcHggaW5zZXQgI0NEQ0RDRDtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5yZW1vdmUtcHJvamVjdC1idXR0b246aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggYmxhY2ssIGluc2V0IC0xcHggLTFweCAycHggYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMCwgMCk7XG59XG5cbi50YXNrLWZvcm17XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTc1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XG59XG5cbi5maWVsZC1lbGVtZW50LXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmZpZWxkLWVsZW1lbnQtd3JhcHBlciBsYWJlbHtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ubmV3LXRhc2stYnV0dG9ucy13cmFwcGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnRhc2stZm9ybSBidXR0b257XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stZm9ybSBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMjg2NDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XG59XG5cbi50YXNrLWlucHV0e1xuICAgIGhlaWdodDogMzBweFxufVxuXG4udGFzay1pbnB1dDpmb2N1c3tcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XG59XG5cbi50YXNrLWNoZWNrLXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1jaGVjay13cmFwcGVyIGlucHV0e1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbn1cblxuLnRhc2stZGVsZXRlLWJ1dHRvbntcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlOztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleFN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyw2Q0FBNkM7SUFDN0MsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIs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ICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxMDBweCA4MHB4IGF1dG8gNTBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4OztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtNXB4IDIwcHgjMDIyODY0O1xcbn1cXG5cXG4ubmV3LXByb2plY3RzLWZvcm17XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0MTU2O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDZweCAjMDExNjM4O1xcbn1cXG5cXG4ubmV3LXByb2plY3RzLWZvcm0gaDJ7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbi13cmFwcGVye1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUtbmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMTBweDtcXG59XFxuXFxuLnByb2plY3QtZGF0ZS1uYXYgYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnRhc2stc2VjdGlvbntcXG4gICAgZ3JpZC1yb3c6IDIvNTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDE1NjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCA2cHggIzAxMTYzODtcXG59XFxuXFxuLnRhc2stc2VjdGlvbi1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG5cXG59XFxuXFxuLnRvLWRvLWxpc3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQxNTY7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggNnB4ICMwMTE2Mzg7XFxufVxcblxcbi50YXNrLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xcbn1cXG5cXG4uaGVhZGVyIGgxe1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDVweCAyMHB4IzAyMjg2NDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS13cmFwcGVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS13cmFwcGVyIGlucHV0e1xcbiAgICBoZWlnaHQ6IDMwcHhcXG59XFxuXFxuLnByb2plY3QtZm9ybS13cmFwcGVyIGlucHV0OmZvY3Vze1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0td3JhcHBlciBidXR0b257XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLXdyYXBwZXIgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyODY0O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnV0dG9ucy13cmFwcGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5pbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlc3tcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWRhdGVze1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdC1idXR0b257XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrLCAtMXB4IC0xcHggYmxhY2ssIDFweCAtMXB4IGJsYWNrLCAtMXB4IDFweCBibGFjaztcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjQ0RDRENELCAxcHggMXB4IDNweCBpbnNldCAjQ0RDRENEO1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggYmxhY2ssIGluc2V0IC0xcHggLTFweCAycHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDAsIDApO1xcbn1cXG5cXG4udGFzay1mb3Jte1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTE3NXB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XFxufVxcblxcbi5maWVsZC1lbGVtZW50LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmZpZWxkLWVsZW1lbnQtd3JhcHBlciBsYWJlbHtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5uZXctdGFzay1idXR0b25zLXdyYXBwZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnRhc2stZm9ybSBidXR0b257XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1mb3JtIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMjg2NDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xcbn1cXG5cXG4udGFzay1pbnB1dHtcXG4gICAgaGVpZ2h0OiAzMHB4XFxufVxcblxcbi50YXNrLWlucHV0OmZvY3Vze1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XFxufVxcblxcbi50YXNrLWNoZWNrLXdyYXBwZXJ7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNoZWNrLXdyYXBwZXIgaW5wdXR7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b257XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTs7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleFN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXhTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vQ29udGFpbnMgdGhlIGNsYXNzZXMgcmVxdWlyZWQgZm9yIG15IEphdmFTY3JpcHQgYXBwbGljYXRpb25cblxuLy9BIGNsYXNzIGNvbnN0cnVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIG5ldyBwcm9qZWN0c1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgfVxuXG4gICAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSl7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSk7XG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2spe1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnNwbGljZSh0aGlzLnRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xuICAgIH1cbn07XG5cbi8vVGhpcyBpcyB0aGUgY2xhc3MgY29uc3RydWN0b3IgZm9yIG91ciBUYXNrc1xuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlID0gZmFsc2Upe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGFza1wiO1xuICAgIH07IFxuXG4gICAgY2hhbmdlQ29tcGxldGVTdGF0dXMoKXtcbiAgICAgICAgaWYodGhpcy5jb21wbGV0ZSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuLy9UaGlzIGNsYXNzIGhhcyBjb250cm9sIG92ZXIgdGhlIGNvbGxlY3Rpb24gb2YgdGhlIHByb2plY3RzXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHByb2plY3RzQXJyYXkgPSBbXTtcblxuICAgIGdldFByb2plY3RzQXJyYXkoKXtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xsZXIucHJvamVjdHNBcnJheTtcbiAgICB9O1xuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KXtcbiAgICAgICAgQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCk7XG4gICAgfTtcblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCl7XG4gICAgICAgIENvbnRyb2xsZXIucHJvamVjdHNBcnJheS5zcGxpY2UoQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgIH07XG4gICAgXG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIHRvZGF5c0RhdGUgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvblwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4sIHJlbmRlclRhc2tzLCByZW1vdmVBbGxUYXNrc0RPTSwgcmVtb3ZlQWRkVGFza0J1dHRvbiwgcmVtb3ZlVGFza0Zvcm0gfSBmcm9tIFwiLi9oYW5kbGVUYXNrXCI7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG4vL0EgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIGZvcm0gdGhhdCB3aWxsIGJlIHVzZWQgaW4gb3RoZXIgXG4vL2Z1bmN0aW9ucyB3aXRoaW4gdGhpcyBtb2R1bGVcbmV4cG9ydCBjb25zdCBjbG9zZVByb2plY3RGb3JtID0gZnVuY3Rpb24ocHJvamVjdHNMaXN0KXtcbiAgICAvL1NlbGVjdCB0aGUgZm9ybSBpbnB1dCBmaWVsZHNcbiAgICBjb25zdCBwcm9qZWN0Rm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLXdyYXBwZXInKTtcblxuICAgIC8vUmVtb3ZlIHRoZSBmb3JtIGlucHV0IGZpZWxkc1xuICAgIHByb2plY3RGb3JtV3JhcHBlci5yZW1vdmUoKTtcblxuICAgIC8vUmUtUmVuZGVyIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uIGZvciB1c2UgYWdhaW5cbiAgICByZW5kZXJOZXdQcm9qZWN0QnRuKHByb2plY3RzTGlzdCk7XG5cbn07XG5cbi8vVGhpcyBmdW5jdGlvbiB3aWxsIG9wZW4gYSBwcm9qZWN0IGZvcm0gYWxsb3dpbmcgdXNlciB0byBcbi8vZW50ZXIgdGhlaXIgcHJvamVjdCBpbnB1dFxuZXhwb3J0IGNvbnN0IG9wZW5Qcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKGFycmF5VG9TdWJtaXQpe1xuXG4gICAgLy9DcmVhdGUgdGhlIGZpZWxkIGVsZW1lbnRzIGZvciB0aGUgZm9ybVxuICAgIGNvbnN0IHByb2plY3RGb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9BZGQgdGhlIGlubmVyIHRleHQgdG8gdGhlIGJ1dHRvbiBlbGVtZW50c1xuICAgIG5ld1Byb2plY3RTdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICAvL0Fzc2lnbiBhIHBsYWNlaG9sZGVyIHRvIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgXG4gICAgLy9Bc3NpZ24gY2xhc3NlcyB0byB0aGUgZWxlbWVudHNcbiAgICBwcm9qZWN0Rm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtZm9ybS13cmFwcGVyJztcbiAgICBidXR0b25zV3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdC1mb3JtLWJ1dHRvbnMtd3JhcHBlcic7XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ25ldy1wcm9qZWN0LXRpdGxlLWlucHV0JztcbiAgICBuZXdQcm9qZWN0U3VibWl0LmNsYXNzTmFtZSA9ICduZXctcHJvamVjdC1zdWJtaXQnO1xuICAgIGNhbmNlbE5ld1Byb2plY3RGb3JtLmNsYXNzTmFtZSA9ICdjYW5jZWwtbmV3LXByb2plY3QnO1xuXG4gICAgLy9BZGQgdGhlIHJlbGF0aXZlIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlUHJvamVjdEZvcm0oYXJyYXlUb1N1Ym1pdCk7XG4gICAgfSk7XG4gICAgbmV3UHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoIW5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlKXtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3UgbXVzdCBlbnRlciBhIHRpdGxlIGZvciB0aGUgcHJvamVjdCEnKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgc3VibWl0TmV3UHJvamVjdChhcnJheVRvU3VibWl0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9TZWxlY3QgdGhlIGVsZW1lbnQgd2hlcmUgdGhlIGZvcm0gd2lsbCBiZSBhdHRhY2hlZCB0b1xuICAgIGNvbnN0IG5ld1Byb2plY3RzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdHMtZm9ybScpO1xuXG4gICAgLy9BdHRhY2ggdGhlIGZvcm0gdG8gdGhlIHByZXZpb3VzIGVsZW1lbnRcbiAgICBhcHBlbmRDaGlsZHJlbihidXR0b25zV3JhcHBlciwgbmV3UHJvamVjdFN1Ym1pdCwgY2FuY2VsTmV3UHJvamVjdEZvcm0pO1xuICAgIGFwcGVuZENoaWxkcmVuKHByb2plY3RGb3JtV3JhcHBlciwgbmV3UHJvamVjdFRpdGxlSW5wdXQsIGJ1dHRvbnNXcmFwcGVyKTtcblxuICAgIG5ld1Byb2plY3RzRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybVdyYXBwZXIpO1xufTtcblxuLy9GdW5jdGlvbiB0aGF0IHJlbmRlcnMgdGhlIHByb2plY3QgaW50byB0aGUgRE9NIHRvIGJlIFxuLy9kaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24oYXJyYXksIGNvbnRhaW5lcil7XG4gICAgXG4gICAgLy9DbGVhciB0aGUgRE9NIGJlZm9yZSByZW5kZXJpbmcgYWdhaW5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvL0xvb3AgdGhyb3VnaCB0aGUgZ2l2ZW4gYXJyYXlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAvL0luaXRpYWxpc2Ugb3VyIHZhcmlhYmxlcyB1c2VkIHRocm91Z2hvdXQgdGhlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBwcm9qZWN0ID0gYXJyYXlbaV07XG4gICAgICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbGV0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXI7XG5cbiAgICAgICAgLy9TZXQgaW5uZXIgdGV4dCBvZiB0aGUgZWxlbWVudHMgdG8gdGhlIHZhbHVlcyBpbnNpZGVcbiAgICAgICAgLy9vZiB0aGUgZ2l2ZW4gb2JqZWN0c1xuICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgcHJvamVjdERhdGUuaW5uZXJUZXh0ID0gcHJvamVjdC5kYXRlO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmlubmVyVGV4dCA9ICdYJztcblxuICAgICAgICAvL0dpdmUgdGhlIHByb2plY3QgZWxlbWVudHMgY2xhc3MgbmFtZXMgZm9yIGZ1dHVyZSBzdHlsaW5nXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTmFtZSA9ICdpbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnMnO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5pZCA9IGBwcm9qZWN0LSR7aX1gO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGl0bGVzJztcbiAgICAgICAgcHJvamVjdERhdGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtZGF0ZXMnO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmNsYXNzTmFtZSA9ICdyZW1vdmUtcHJvamVjdC1idXR0b24nO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmlkID0gYHJlbW92ZS1wcm9qZWN0LWJ1dHRvbi0ke2l9YDtcblxuICAgICAgICAvL1JlbmRlciB0aGUgQWRkIFRhc2sgQnV0dG9uXG4gICAgICAgIC8vcmVuZGVyQ3JlYXRlQWRkVGFza0J0bihwcm9qZWN0RWxlbWVudCwgcHJvamVjdCk7XG5cbiAgICAgICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyZW1vdmUtcHJvamVjdC1idXR0b24tJHtpfWApKXtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdChhcnJheSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsVGFza3NET00oKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsVGFza3NET00oKTtcbiAgICAgICAgICAgICAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVGFza0Zvcm0oKTtcbiAgICAgICAgICAgICAgICByZW5kZXJDcmVhdGVBZGRUYXNrQnRuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4td3JhcHBlcicpLHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpfWApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvL0FwcGVuZCB0aGUgY2hpbGQgZWxlbWVudHMgdG8gdGhlaXIgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocHJvamVjdEVsZW1lbnQsIHByb2plY3RUaXRsZSwgcHJvamVjdERhdGUsIHJlbW92ZVByb2plY3RCdG4pO1xuXG5cbiAgICAgICAgLy9BcHBlbmQgdGhlIGRpdiB0byB0aGUgZ2l2ZW4gY29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG5cbiAgICB9XG59O1xuXG4vL0Z1bmN0aW9uIHJlLXJlbmRlcnMgdGhlIFwiTmV3IFByb2plY3RcIiBidXR0b24gYWdhaW4gdG8gdGhlIFxuLy9ET01cbmV4cG9ydCBjb25zdCByZW5kZXJOZXdQcm9qZWN0QnRuID0gZnVuY3Rpb24ocHJvamVjdEFycmF5KXtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdEJ0bi5pbm5lclRleHQgPSAnTmV3IFByb2plY3QnO1xuICAgIG5ld1Byb2plY3RCdG4uaWQgPSAnbmV3LXByb2plY3QtYnV0dG9uJztcblxuICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciBiYWNrIHRvIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uXG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG9wZW5Qcm9qZWN0Rm9ybShwcm9qZWN0QXJyYXkpO1xuICAgICAgICBlLnRhcmdldC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIC8vQXBwZW5kIHRoZSBidXR0b24gYmFjayB0byB0aGUgY29ycmVjdCBkaXZcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtYnV0dG9uLXdyYXBwZXInKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG5cbiAgICByZW1vdmVBbGxUYXNrc0RPTSgpO1xufTtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgYW5kIGFkZCBhIG5ldyBQcm9qZWN0IHRvIGEgZ2l2ZW4gcHJvamVjdHNMaXN0XG5leHBvcnQgY29uc3Qgc3VibWl0TmV3UHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3RzTGlzdCl7XG4gICAgLy9TZWxlY3QgdGhlIHRpdGxlIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBwcm9qZWN0IGZvcm1cbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC10aXRsZS1pbnB1dCcpO1xuXG4gICAgLy9Bc3NpZ24gdGhlIHZhbHVlIGVudGVyZWQgaW50byB0aGUgdGl0bGUgZWxlbWVudCB0byBhIHZhcmlhYmxlXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWU7ICAgIFxuXG4gICAgLy9DcmVhdGUgYSBuZXcgcHJvamVjdCB3aXRoIHRoZSBnaXZlbiB0aXRsZSwgZGF0ZSBhbmQgcHJvamVjdHNMaXN0XG4gICAgLy90byBzdG9yZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0VGl0bGUsIHRvZGF5c0RhdGUoKSk7XG5cbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbiAgICBcbiAgICAvL0FkZCB0aGUgcHJvamVjdCB0byB0aGUgZ2l2ZW4gcHJvamVjdHMgTGlzdFxuICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAgIC8vUmVuZGVyIHRoZSBwcm9qZWN0cyBpbiB0aGUgcHJvamVjdHMgbGlzdCBpbnRvIHRoZSBnaXZlbiBjb250YWluZXJcbiAgICByZW5kZXJQcm9qZWN0KHByb2plY3RzTGlzdCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpKTtcblxuICAgIC8vQ2xvc2UgdGhlIHByb2plY3QgZm9ybVxuICAgIGNsb3NlUHJvamVjdEZvcm0ocHJvamVjdHNMaXN0KTtcblxuICAgIC8vUmVtb3ZlIGFueSBjdXJyZW50bHkgYWN0aXZlIHByb2plY3QgdGl0bGUgYW5kIHRhc2sgXG4gICAgLy9jcmVhdGlvbiBidXR0b25cbiAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS5pbm5lclRleHQgPSAnJztcbn07XG5cbi8vQSBmdW5jdGlvbiB0byBzaG93IHdoaWNoIHByb2plY3QgaXMgY3VycmVudGx5IGNob3Nlbi5cbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gZnVuY3Rpb24oY3VycmVudFByb2plY3Qpe1xuICAgIGNvbnN0IGFsbFByb2plY3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnMnKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICcnO1xuICAgIFxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0RWxlbWVudHMpe1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmJveFNoYWRvdyA9ICcxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUInO1xuICAgIH1cbiAgICBpZihjdXJyZW50UHJvamVjdCl7XG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgICAgICBjdXJyZW50UHJvamVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgNHB4IDRweCA2cHggYmxhY2ssIGluc2V0IC00cHggLTRweCA2cHggYmxhY2ssIDFweCAxcHggM3B4ICNERkY4RUIsLTFweCAtMXB4IDNweCAjREZGOEVCJztcbiAgICB9O1xufTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBhc3NpZ25DbGFzcywgZmluZFRoaXNNb250aCwgZmluZFRoaXNXZWVrLCByZWZvcm1hdERhdGUsIHJlZm9ybWF0VGhpc01vbnRoLCByZWZvcm1hdFRoaXNXZWVrLCB0b2RheXNEYXRlfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvblwiO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZvcm0gdXNlZCBmb3IgbmV3IHRhc2tzLlxuLy9SZXF1aXJlcyBhbiBhcmd1bWVudCBmb3IgdGhlIGVsZW1lbnQgdGhlIGZvcm0gd2lsbCBiZSBcbi8vY3JlYXRlZCBpblxuZXhwb3J0IGNvbnN0IG9wZW5UYXNrRm9ybSA9IGZ1bmN0aW9uKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdCl7XG5cbiAgICAvL1NlbGVjdCB0aGUgXCJBZGQgdGFza1wiIHRoYXQgd2Ugd2FudCB0byBhbHdheXMgYXBwZW5kIHRoZSBcbiAgICAvL2Zvcm0gYWZ0ZXJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpO1xuXG4gICAgLy9DcmVhdGUgYWxsIG9mIHRoZSBmaWVsZCBlbGVtZW50cyBhbmQgdGhlaXIgd3JhcHBlcnMgXG4gICAgLy9yZXF1aXJlZCBmb3IgYSB0YXNrXG4gICAgY29uc3QgdGFza0Zvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgY29uc3QgdGFza0R1ZURhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAvL0Fzc2lnbiBvcHRpb25zIHRvIHRoZSBwcmlvcml0eSBkcm9wIGRvd24gZmllbGRcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAvL1NldCB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIGR1ZSBkYXRlIGVsZW1lbnRzIGluIHRoZSBmb3JtXG4gICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlLWlucHV0XCIpO1xuICAgIHRhc2tUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlLWlucHV0XCIpO1xuXG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICAgIHRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuXG4gICAgdGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlLWRhdGUtaW5wdXRcIik7XG4gICAgdGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZS1kYXRlLWlucHV0XCIpO1xuXG4gICAgdGFza1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5LWlucHV0XCIpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5LWlucHV0XCIpO1xuXG4gICAgLy9TZXQgdGhlIGxhYmVsIHZhbHVlc1xuICAgIHRhc2tUaXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG4gICAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6XCI7XG4gICAgdGFza1ByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eSBMZXZlbFwiO1xuXG4gICAgLy9Bc3NpZ24gYSBjbGFzcyB0byB0aGUgZmllbGQgZWxlbWVudCB3cmFwcGVyc1xuICAgIGFzc2lnbkNsYXNzKFwiZmllbGQtZWxlbWVudC13cmFwcGVyXCIsIHRhc2tUaXRsZVdyYXBwZXIsIHRhc2tEZXNjcmlwdGlvbldyYXBwZXIsIHRhc2tEdWVEYXRlV3JhcHBlciwgdGFza1ByaW9yaXR5V3JhcHBlcik7XG5cbiAgICAvL0FwcGVuZCBhbnkgZWxlbWVudHMgdG8gdGhlaXIgd3JhcHBlcnNcbiAgICBhcHBlbmRDaGlsZHJlbih0YXNrVGl0bGVXcmFwcGVyLCB0YXNrVGl0bGVMYWJlbCwgdGFza1RpdGxlSW5wdXQpO1xuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tEZXNjcmlwdGlvbldyYXBwZXIsIHRhc2tEZXNjcmlwdGlvbkxhYmVsLCB0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza0R1ZURhdGVXcmFwcGVyLCB0YXNrRHVlRGF0ZUxhYmVsLCB0YXNrRHVlRGF0ZUlucHV0KTtcbiAgICBhcHBlbmRDaGlsZHJlbih0YXNrUHJpb3JpdHlXcmFwcGVyLCB0YXNrUHJpb3JpdHlMYWJlbCwgdGFza1ByaW9yaXR5SW5wdXQpO1xuXG4gICAgLy9Bc3NpZ24gYWxsIG9mIHRoZSBmaWVsZCBlbGVtZW50cyBhIGNsYXNzIG5hbWVcbiAgICB0YXNrRm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybSc7XG4gICAgdGFza1RpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrRHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG5cbiAgICAvL0Fzc2lnbiBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gYWxsIG9mIHRoZSBpbnB1dHNcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgVGl0bGUnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgRGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBEdWUgRGF0ZScpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBQcmlvcml0eSBMZXZlbCcpO1xuXG4gICAgLy9Bc3NpZ24gZmllbGQgZWxlbWVudHMgYW4gSURcbiAgICB0YXNrVGl0bGVJbnB1dC5pZCA9ICd0YXNrLXRpdGxlLWlucHV0JztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uLWlucHV0JztcbiAgICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2stZHVlLWRhdGUtaW5wdXQnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmlkID0gJ3Rhc2stcHJpb3JpdHktaW5wdXQnO1xuXG5cbiAgICBoaWdoUHJpb3JpdHkuaW5uZXJUZXh0ID0gJ0hpZ2ggUHJpb3JpdHknO1xuICAgIG1lZGl1bVByaW9yaXR5LmlubmVyVGV4dCA9ICdNZWRpdW0gUHJpb3JpdHknO1xuICAgIGxvd1ByaW9yaXR5LmlubmVyVGV4dCA9ICdMb3cgUHJpb3JpdHknO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza1ByaW9yaXR5SW5wdXQsIGhpZ2hQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGxvd1ByaW9yaXR5KTtcblxuXG4gICAgLy9DcmVhdGUgdGhlIGJ1dHRvbiBlbGVtZW50cyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdUYXNrQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld1Rhc2tTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBuZXdUYXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAvL0Fzc2lnbiB0aGUgYnV0dG9uIGVsZW1lbnRzIHdpdGggYSBjbGFzcyBuYW1lXG4gICAgbmV3VGFza0J0bnMuY2xhc3NOYW1lID0gJ25ldy10YXNrLWJ1dHRvbnMtd3JhcHBlcidcbiAgICBuZXdUYXNrU3VibWl0QnRuLmNsYXNzTmFtZSA9ICdzdWJtaXQtdGFzayc7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5jbGFzc05hbWUgPSAnY2FuY2VsLXRhc2snO1xuXG4gICAgLy9JbnNlcnQgaW5uZXIgdGV4dCBpbnRvIHRoZSBidXR0b25zIHRvIGRpc3BsYXkgdXNlXG4gICAgbmV3VGFza1N1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gICAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2FuY2VsIGFuZCByZW1vdmUgdGhlIGZvcm0gZnJvbSBcbiAgICAvL3RoZSBET01cbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIHJlbW92ZVRhc2tGb3JtKCk7XG4gICAgICAgIHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4oZWxlbWVudFRvQXBwZW5kVG8sIGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gcmVuZGVyIHRoZSB0YXNrIHRvIHN1Ym1pdCBidXR0b25cbiAgICBuZXdUYXNrU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgcmVuZGVyQ3JlYXRlQWRkVGFza0J0bihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1zZWN0aW9uLWhlYWRlcicpICxjdXJyZW50UHJvamVjdClcbiAgICAgICAgcmVuZGVyVGFza3MoY3VycmVudFByb2plY3QpO1xuICAgICAgICByZW1vdmVUYXNrRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgLy9BcHBlbmQgdGhlIGZpZWxkIGVsZW1lbnRzIHRvIHRoZSBnaXZlbiBjb250YWluZXIgZWxlbWVudFxuICAgIGFwcGVuZENoaWxkcmVuKG5ld1Rhc2tCdG5zLCBuZXdUYXNrU3VibWl0QnRuLCBuZXdUYXNrQ2FuY2VsQnRuKTtcbiAgICBhcHBlbmRDaGlsZHJlbih0YXNrRm9ybVdyYXBwZXIsIHRhc2tUaXRsZVdyYXBwZXIsIHRhc2tEZXNjcmlwdGlvbldyYXBwZXIsIHRhc2tEdWVEYXRlV3JhcHBlciwgdGFza1ByaW9yaXR5V3JhcHBlciwgbmV3VGFza0J0bnMpO1xuXG4gICAgLy9BcHBlbmQgdGhlIGZvcm0gdG8gYWZ0ZXIgdGhlIFwiQWRkIFRhc2sgQnV0dG9uXCI7XG4gICAgYWRkVGFza0J0bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXNrRm9ybVdyYXBwZXIsIGFkZFRhc2tCdG4ubmV4dFNpYmxpbmcpO1xuXG59O1xuXG4vL0Z1bmN0aW9uIHRoYXQgcmVtb3ZlcyBhbGwgb2YgdGhlIGZvcm0gZWxlbWVudHMgZnJvbSB0aGUgRE9NXG5leHBvcnQgY29uc3QgcmVtb3ZlVGFza0Zvcm0gPSBmdW5jdGlvbigpe1xuICAgIC8vU2VsZWN0IGFsbCBvZiB0aGUgZm9ybSBlbGVtZW50cyB1c2luZyB0aGVpciBjbGFzcyBuYW1lXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5cbiAgICAvL0ZvciBldmVyeSBmaWVsZCBpbnB1dCBpbiB0aGUgbGlzdCBvZiBmaWVsZCBpbnB1dHNcbiAgICBpZighdGFza0Zvcm0pe1xuICAgICAgICByZXR1cm47XG4gICAgfWVsc2V7XG4gICAgICAgIHRhc2tGb3JtLnJlbW92ZSgpO1xuICAgIH07XG5cbn07XG5cbi8vRnVuY3Rpb24gdG8gcmVuZGVyIHRoZSB0YXNrcyBvZiBhIHByb2plY3Qgb24gdG8gdGhlIERPTVxuLy90byBiZSBkaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCByZW5kZXJUYXNrcyA9IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgIC8vRmlyc3QgdGhlIHRhc2tzIGNvbnRhaW5lciBtdXN0IGJlIGVtcHRpZWRcbiAgICByZW1vdmVBbGxUYXNrc0RPTSgpXG5cbiAgICAvL0Fzc2lnbiBhIHZhcmlhYmxlIHRvIGFuIGFycmF5IG9mIHRoZSBrZXkgbmFtZXMgZnJvbSBlYWNoXG4gICAgLy9wcm9qZWN0LlxuICAgIGxldCB0YXNrTGlzdCA9IHByb2plY3QudGFza0xpc3Q7XG5cbiAgICAvL1NlbGVjdCB0aGUgY29udGFpbmVyIGluIEhUTUwgZG9jdW1lbnQgd2hlcmUgdGFza3Mgd2lsbFxuICAgIC8vYmUgYXBwZW5kZWQgdG8uXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdC1jb250YWluZXInKVxuXG4gICAgLy9Mb29wIHRocm91Z2ggdGhlIGtleSBhcnJheXMgdG8gZmluZCBhbnkgdG8gZG8ga2V5cyBpbnNpZGUgXG4gICAgLy9vZiB0aGUgcHJvamVjdHMuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gdGFza0xpc3RbaV07XG4gICAgICAgIC8vSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgXG4gICAgICAgIC8vdXNlZCB0aHJvdWdoIHRoZSBmdW5jdGlvbiB0byB0aGVpciBkb20gZWxlbWVudHNcbiAgICAgICAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY2hlY2sgPSByZW5kZXJUYXNrQ2hlY2tCb3goY3VycmVudFRhc2ssIHRhc2tMaXN0KTtcbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IHJlbmRlckRlbGV0ZVRhc2tCdG4ocHJvamVjdCwgY3VycmVudFRhc2spO1xuXG5cbiAgICAgICAgLy9BcHBlbmQgdGV4dCB0byBlbGVtZW50cyBmcm9tIHRoZWlyIHJlc3BlY3RpdmUgXG4gICAgICAgIC8vcHJvcGVydGllc1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBjdXJyZW50VGFzay50aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gY3VycmVudFRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gcmVmb3JtYXREYXRlKGN1cnJlbnRUYXNrLmR1ZURhdGUpO1xuICAgICAgICBwcmlvcml0eS5pbm5lclRleHQgPSBjdXJyZW50VGFzay5wcmlvcml0eTtcblxuICAgICAgICAvL0Fzc2lnbiBhIGNsYXNzIG5hbWUgdG8gdGhlc2UgZWxlbWVudHMgZm9yIGZ1dHVyZVxuICAgICAgICAvL3N0eWxpbmcuXG4gICAgICAgIGFzc2lnbkNsYXNzKCd0YXNrLXByb3BlcnRpZXMnLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgICAgICB0YXNrV3JhcHBlci5jbGFzc05hbWUgPSAndGFzay13cmFwcGVyJztcbiAgICAgICAgdGFza0RlbGV0ZUJ0bi5jbGFzc05hbWUgPSAndGFzay1kZWxldGUtYnV0dG9uJztcblxuICAgICAgICAvL0FwcGVuZCBhbGwgb2YgdGhlIG5ldyBlbGVtZW50cyB0byB0aGUgY29udGFpbmVyXG4gICAgICAgIC8vZm9yIHRoaXMgdG8gZG8gb2JqZWN0XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tXcmFwcGVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVjaywgdGFza0RlbGV0ZUJ0bik7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKVxuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIHJlbmRlcnMgYSBnaXZlbiBpbmRpdmlkdWFsIHRhc2sgb250byB0aGUgRE9NXG5leHBvcnQgY29uc3QgcmVuZGVySW5kaXZpZHVhbFRhc2sgPSBmdW5jdGlvbih0YXNrLCB0YXNrTGlzdCwgcHJvamVjdCl7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWxpc3QtY29udGFpbmVyXCIpXG5cbiAgICAvL0luaXRpYWxpemUgYWxsIG9mIHRoZSB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIFxuICAgIC8vdXNlZCB0aHJvdWdoIHRoZSBmdW5jdGlvbiB0byB0aGVpciBkb20gZWxlbWVudHNcbiAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY2hlY2sgPSByZW5kZXJUYXNrQ2hlY2tCb3godGFzaywgdGFza0xpc3QpO1xuICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSByZW5kZXJEZWxldGVUYXNrQnRuKHByb2plY3QsIHRhc2spO1xuXG5cbiAgICAvL0FwcGVuZCB0ZXh0IHRvIGVsZW1lbnRzIGZyb20gdGhlaXIgcmVzcGVjdGl2ZSBcbiAgICAvL3Byb3BlcnRpZXNcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSByZWZvcm1hdERhdGUodGFzay5kdWVEYXRlKTtcbiAgICBwcmlvcml0eS5pbm5lclRleHQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgLy9Bc3NpZ24gYSBjbGFzcyBuYW1lIHRvIHRoZXNlIGVsZW1lbnRzIGZvciBmdXR1cmVcbiAgICAvL3N0eWxpbmcuXG4gICAgYXNzaWduQ2xhc3MoJ3Rhc2stcHJvcGVydGllcycsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgdGFza1dyYXBwZXIuY2xhc3NOYW1lID0gJ3Rhc2std3JhcHBlcic7XG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc05hbWUgPSAndGFzay1kZWxldGUtYnV0dG9uJztcblxuICAgIC8vQXBwZW5kIGFsbCBvZiB0aGUgbmV3IGVsZW1lbnRzIHRvIHRoZSBjb250YWluZXJcbiAgICAvL2ZvciB0aGlzIHRvIGRvIG9iamVjdFxuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tXcmFwcGVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVjaywgdGFza0RlbGV0ZUJ0bik7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpXG59XG5cbi8vRnVuY3Rpb24gY3JlYXRlcyBhbmQgcmV0dXJuIHRoZSBjaGVja2JveCBmb3IgZWFjaCB0YXNrXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza0NoZWNrQm94ID0gZnVuY3Rpb24odGhpc1Rhc2ssIHRhc2tBcnJheSl7XG4gICAgLy9DcmVhdGUgd3JhcHBlciBmb3IgY2hlY2tcbiAgICBjb25zdCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAvL0NyZWF0ZSB0aGUgY2hlY2tib3ggZWxlbWVudFxuICAgIGNvbnN0IHRhc2tDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0NoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIHRhc2tDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpc1Rhc2sudGl0bGUgKyAodGFza0FycmF5LmluZGV4T2YodGhpc1Rhc2spKX0tY2hlY2stYm94YCk7XG5cbiAgICAvL0NyZWF0ZSB0aGUgbGFiZWwgZm9yIHRoZSBjaGVja2JveFxuICAgIGNvbnN0IHRhc2tDaGVja0JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrQ2hlY2tCb3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke3RoaXNUYXNrLnRpdGxlICsgKHRhc2tBcnJheS5pbmRleE9mKHRoaXNUYXNrKSl9LWNoZWNrLWJveGApO1xuICAgIHRhc2tDaGVja0JveExhYmVsLmlubmVyVGV4dCA9ICdDb21wbGV0ZWQ/JztcblxuICAgIC8vRXZlbnQgbGlzdGVuZXIgZm9yIGNoZWNrYm94XG4gICAgdGFza0NoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT4ge1xuICAgICAgICB0aGlzVGFzay5jaGFuZ2VDb21wbGV0ZVN0YXR1cygpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzVGFzayk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzVGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSl7XG4gICAgICAgIHRhc2tDaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdGFza0NoZWNrLmNsYXNzTmFtZSA9ICd0YXNrLWNoZWNrLXdyYXBwZXInO1xuXG4gICAgLy9BcHBlbmQgZWxlbWVudHMgdG8gdGhlIHdyYXBwZXJcbiAgICBhcHBlbmRDaGlsZHJlbih0YXNrQ2hlY2ssIHRhc2tDaGVja0JveExhYmVsLCB0YXNrQ2hlY2tCb3gpO1xuXG4gICAgcmV0dXJuIHRhc2tDaGVjaztcblxufVxuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgYW5kIHJldHVybnMgdGhlICdkZWxldGUgYnV0dG9uJyB3aGljaCB3aWxsIFxuLy9iZSB1c2VkIG9mIGVhY2ggdGFza1xuZXhwb3J0IGNvbnN0IHJlbmRlckRlbGV0ZVRhc2tCdG4gPSBmdW5jdGlvbih0aGlzUHJvamVjdCwgdGhpc1Rhc2spe1xuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVUYXNrQnRuLmlubmVyVGV4dCA9ICdYJztcbiAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgdGhpc1Byb2plY3QucmVtb3ZlVGFzayh0aGlzVGFzayk7XG4gICAgICAgIHJlbmRlclRhc2tzKHRoaXNQcm9qZWN0KTtcbiAgICB9KVxuICAgIHJldHVybiBkZWxldGVUYXNrQnRuO1xufTtcblxuLy9GdW5jdGlvbiBjcmVhdGVzIG91ciBcIkFkZCBUYXNrIEJ1dHRvblwiIGdpdmVuIGEgcGFyZW50IGVsZW1lbnRcbi8vdG8gYXBwZW5kIHRvLlxuZXhwb3J0IGNvbnN0IHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4gPSBmdW5jdGlvbihlbGVtZW50VG9QcmVwZW5kVG8sIGN1cnJlbnRQcm9qZWN0KXtcbiAgICAvL0NyZWF0ZSB0aGUgYnV0dG9uIGVsZW1lbnQgd2l0aCB0ZXh0LlxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG5cbiAgICAvL0FkZCBjbGFzcyB0byB0aGUgYnV0dG9uXG4gICAgYWRkVGFza0J0bi5jbGFzc05hbWUgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xuXG4gICAgLy9BZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBidXR0b24gd2hpY2ggb3BlbnMgdGhlIFxuICAgIC8vXCJUYXNrIEZvcm1cIiBvbiB0aGUgZWxlbWVudCB0aGF0IHdhcyBnaXZlbi5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICBvcGVuVGFza0Zvcm0oZWxlbWVudFRvUHJlcGVuZFRvLCBjdXJyZW50UHJvamVjdClcbiAgICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgIH0pXG5cbiAgICAvL0FwcGVuZCB0aGUgYnV0dG9uIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgIGVsZW1lbnRUb1ByZXBlbmRUby5wcmVwZW5kKGFkZFRhc2tCdG4pO1xufTtcblxuLy9GdW5jdGlvbiB0byBhZGQgYSBcIlRhc2tcIiB0byBhIHByb2plY3QncyB0YXNrIGFycmF5LlxuZXhwb3J0IGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kdWUtZGF0ZS1pbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1pbnB1dCcpO1xuICAgIFxuICAgIGlmKCF0aXRsZUlucHV0LnZhbHVlIHx8ICFkZXNjcmlwdGlvbklucHV0LnZhbHVlIHx8ICFkdWVEYXRlSW5wdXQudmFsdWUgfHwgIXByaW9yaXR5SW5wdXQudmFsdWUpe1xuICAgICAgICBhbGVydCgnQWxsIGZpZWxkcyBzaG91bGQgYmUgY29tcGxldGVkIGJlZm9yZSBzdWJtaXR0aW5nIScpO1xuICAgIH0gZWxzZXtcbiAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dC52YWx1ZSlcbiAgICB9O1xufVxuXG4vL0Z1bmN0aW9uIHRvIHJlbW92ZSBhbGwgdGFza3MgZnJvbSB0aGUgc2NyZWVuLlxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbFRhc2tzRE9NID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkaXNwbGF5ZWRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXdyYXBwZXInKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIGRpc3BsYXllZFRhc2tzKXtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICB9O1xufVxuXG4vL0Z1bmN0aW9uIHJlbW92ZWQgdGhlICdBZGQgVGFzaycgYnV0dG9uIGZyb20gdGhlIERPTVxuZXhwb3J0IGNvbnN0IHJlbW92ZUFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgaWYoYWRkVGFza0J1dHRvbil7XG4gICAgICAgIGFkZFRhc2tCdXR0b24ucmVtb3ZlKCk7XG4gICAgfTtcbn1cblxuLy9GdW5jdGlvbiBmaW5kcyBhbmQgcmVuZGVycyBhbGwgb2YgdGhlIHRhc2tzIHRoYXQgYXJlIGR1ZSBmb3IgdGhpcyB3ZWVrLlxuZXhwb3J0IGNvbnN0IGZpbmRUYXNrc0ZvcldlZWsgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuICAgIGNvbnN0IHByb2plY3RzQXJyYXkgPSBjb250cm9sbGVyLmdldFByb2plY3RzQXJyYXkoKTtcbiAgICBjb25zdCBkYXRlc0luVGhpc1dlZWsgPSByZWZvcm1hdFRoaXNXZWVrKGZpbmRUaGlzV2VlaygpKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICByZW1vdmVBbGxUYXNrc0RPTSgpO1xuXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0R1ZSBUaGlzIFdlZWsnO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdGFza0xpc3QgPSBwcm9qZWN0c0FycmF5W2ldLnRhc2tMaXN0O1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGFza0xpc3QubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgaWYoZGF0ZXNJblRoaXNXZWVrLmluY2x1ZGVzKHJlZm9ybWF0RGF0ZSh0YXNrTGlzdFtqXS5kdWVEYXRlKSkpe1xuICAgICAgICAgICAgICAgIHJlbmRlckluZGl2aWR1YWxUYXNrKHRhc2tMaXN0W2pdLCB0YXNrTGlzdCwgcHJvamVjdHNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vRnVuY3Rpb24gZmluZHMgYW5kIHJlbmRlcnMgYWxsIG9mIHRoZSB0YXNrcyB0aGF0IGFyZSBkdWUgZm9yIHRvZGF5XG5leHBvcnQgY29uc3QgZmluZFRhc2tzRm9yVG9kYXkgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuICAgIGNvbnN0IHByb2plY3RzQXJyYXkgPSBjb250cm9sbGVyLmdldFByb2plY3RzQXJyYXkoKTtcbiAgICBjb25zdCB0b2RheSA9IHRvZGF5c0RhdGUoKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICByZW1vdmVBbGxUYXNrc0RPTSgpO1xuXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0R1ZSBUb2RheSc7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0YXNrTGlzdCA9IHByb2plY3RzQXJyYXlbaV0udGFza0xpc3Q7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0YXNrTGlzdC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZih0b2RheSA9PT0gcmVmb3JtYXREYXRlKHRhc2tMaXN0W2pdLmR1ZURhdGUpKXtcbiAgICAgICAgICAgICAgICByZW5kZXJJbmRpdmlkdWFsVGFzayh0YXNrTGlzdFtqXSwgdGFza0xpc3QsIHByb2plY3RzQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLy9GdW5jdGlvbiBmaW5kcyBhbmQgcmVuZGVycyBhbGwgb2YgdGhlIHRhc2tzIHRoYXQgYXJlIGR1ZSBmb3IgdGhpcyBtb250aFxuZXhwb3J0IGNvbnN0IGZpbmRUYXNrc0Zvck1vbnRoID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBwcm9qZWN0c0FycmF5ID0gY29udHJvbGxlci5nZXRQcm9qZWN0c0FycmF5KCk7XG4gICAgY29uc3QgZGF0ZXNJblRoaXNNb250aCA9IHJlZm9ybWF0VGhpc01vbnRoKGZpbmRUaGlzTW9udGgoKSk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXG4gICAgcmVtb3ZlQWxsVGFza3NET00oKTtcblxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdEdWUgVGhpcyBNb250aCc7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0YXNrTGlzdCA9IHByb2plY3RzQXJyYXlbaV0udGFza0xpc3Q7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0YXNrTGlzdC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZihkYXRlc0luVGhpc01vbnRoLmluY2x1ZGVzKHJlZm9ybWF0RGF0ZSh0YXNrTGlzdFtqXS5kdWVEYXRlKSkpe1xuICAgICAgICAgICAgICAgIHJlbmRlckluZGl2aWR1YWxUYXNrKHRhc2tMaXN0W2pdLCB0YXNrTGlzdCwgcHJvamVjdHNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5cbi8vRnVuY3Rpb24gdG8gaGVscCBhcHBlbmQgbXVsdGlwbGUgY2hpbGRyZW4gYXQgb25jZSB0byBhIHBhcmVudFxuLy9lbGVtZW50XG5leHBvcnQgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbihwYXJlbnQsIC4uLmNoaWxkcmVuKXsgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuW2ldKTtcbiAgICB9O1xufTtcblxuLy9GdW5jdGlvbiB0byBhbGxvdyBtZSB0byBhZGQgdGhlIHNhbWUgY2xhc3MgbmFtZSB0byBtdWx0aXBsZVxuLy9lbGVtZW50cy5cbmV4cG9ydCBjb25zdCBhc3NpZ25DbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgLi4uZWxlbWVudHMpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGVsZW1lbnRzW2ldLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9O1xufTtcblxuLy9GdW5jdGlvbiBnZXRzIHRoZSBjdXJyZW50IGRhdGUgYW5kIHJldHVybnMgaXQgaW4gYSBzdWl0YWJsZSBmb3JtYXRcbi8vdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBwYWdlXG5leHBvcnQgY29uc3QgdG9kYXlzRGF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZnVsbERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgbGV0IGRheSA9IGZ1bGxEYXRlLmdldERhdGUoKTtcbiAgICBsZXQgbW9udGggPSBmdWxsRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBsZXQgeWVhciA9IGZ1bGxEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICBsZXQgY3VycmVudERhdGUgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xuICAgIHJldHVybiBjdXJyZW50RGF0ZTtcbn07XG5cbi8vVGhpcyBmdW5jdGlvbiBnZXRzIGEgZGF0ZSBjcmVhdGVkIGZyb20gdGhlIGRhdGUgaW5wdXQgYW5kIHJlZm9ybWF0cyBcbi8vaXQgdG8gYmUgbW9yZSBzdWl0YWJsZSBmb3IgZGlzcGxheSBvbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IHJlZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKGRhdGUpe1xuICAgIGNvbnN0IHJlZm9ybWF0dGVkRGF0ZSA9ICBkYXRlLnNwbGl0KFwiLVwiKS5yZXZlcnNlKCkuam9pbihcIi9cIik7XG4gICAgbGV0IG5ld1JlZm9ybWF0dGVkRGF0ZSA9ICcnO1xuICAgIGxldCBjaGFyYWN0ZXIgPSAnMCc7XG4gICAgaWYocmVmb3JtYXR0ZWREYXRlWzNdID09PSBjaGFyYWN0ZXIpe1xuICAgICAgICBuZXdSZWZvcm1hdHRlZERhdGUgPSByZW1vdmVDaGFyYWN0ZXIoNCwgcmVmb3JtYXR0ZWREYXRlKTtcbiAgICB9IGVsc2V7XG4gICAgICAgIG5ld1JlZm9ybWF0dGVkRGF0ZSA9IHJlZm9ybWF0dGVkRGF0ZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5ld1JlZm9ybWF0dGVkRGF0ZTtcbn07XG5cbi8vRnVuY3Rpb24gZmluZHMgYWxsIHRoZSBkYXlzIGluIHRoZSBjdXJyZW50IHdlZWsgYW5kIHJldHVybnMgdGhlbSBhcyBhbiBcbi8vYXJyYXkgIFxuZXhwb3J0IGNvbnN0IGZpbmRUaGlzV2VlayA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGF0ZUFycmF5ID0gW107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG5leHREYXkgPSBhZGREYXlzKGRhdGUsIDEpO1xuXG4gICAgZGF0ZUFycmF5LnB1c2goZGF0ZSk7XG5cbiAgICB3aGlsZShuZXh0RGF5LmdldERheSgpICE9PSAxKXtcbiAgICAgICAgZGF0ZUFycmF5LnB1c2gobmV4dERheSk7XG4gICAgICAgIG5leHREYXkgPSBhZGREYXlzKG5leHREYXksIDEpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGF0ZUFycmF5O1xufTtcblxuXG4vL0Z1bmN0aW9uIHJlZm9ybWF0cyB0aGUgZnVsbCBkYXRlcyBpbiB0aGUgd2VlayBhcnJheSBzbyB0aGF0IHRoZSBkYXRlcyBvbmx5IFxuLy9jb250YWluIHRoZSByZWxldmFudCBpbmZvcm1hdGlvblxuZXhwb3J0IGNvbnN0IHJlZm9ybWF0VGhpc1dlZWsgPSBmdW5jdGlvbih3ZWVrKXtcbiAgICBjb25zdCB3ZWVrRGF5QXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2Vlay5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBkYXkgPSB3ZWVrW2ldLmdldERhdGUoKTtcbiAgICAgICAgbGV0IG1vbnRoID0gd2Vla1tpXS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgbGV0IHllYXIgPSB3ZWVrW2ldLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgbGV0IHRoaXNGdWxsRGF5ID0gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcbiAgICAgICAgXG4gICAgICAgIHdlZWtEYXlBcnJheS5wdXNoKHRoaXNGdWxsRGF5KTtcbiAgICB9XG4gICAgcmV0dXJuIHdlZWtEYXlBcnJheTtcbn07XG5cbi8vRnVuY3Rpb24gZmluZHMgYWxsIHRoZSBkYXRlcyBpbiB0aGUgY3VycmVudCBtb250aCBhbmQgcmV0dXJucyBpdCBhcyBhbiBcbi8vYXJyYXlcbmV4cG9ydCBjb25zdCBmaW5kVGhpc01vbnRoID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkYXRlQXJyYXkgPSBbXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbmV4dERheSA9IGFkZERheXMoZGF0ZSwgMSk7XG4gICAgbGV0IGN1cnJlbnRNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG5cbiAgICBkYXRlQXJyYXkucHVzaChkYXRlKTtcblxuICAgIHdoaWxlKG5leHREYXkuZ2V0TW9udGgoKSsgMSA9PT0gY3VycmVudE1vbnRoKXtcbiAgICAgICAgZGF0ZUFycmF5LnB1c2gobmV4dERheSk7XG4gICAgICAgIG5leHREYXkgPSBhZGREYXlzKG5leHREYXksIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZUFycmF5O1xufTtcblxuLy9GdW5jdGlvbiByZWZvcm1hdHMgdGhlIGRhdGVzIGluIHRoZSBtb250aCBhcnJheSBzbyB0aGF0IHRoZSBkYXRlcyBjb250YWluIFxuLy9vbmx5IHRoZSByZWxldmFudCBpbmZvcm1hdGlvblxuZXhwb3J0IGNvbnN0IHJlZm9ybWF0VGhpc01vbnRoID0gZnVuY3Rpb24ob3JpZ2luYWxNb250aEFycmF5KXtcbiAgICBjb25zdCBtb250aEFycmF5ID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG9yaWdpbmFsTW9udGhBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBkYXkgPSBvcmlnaW5hbE1vbnRoQXJyYXlbaV0uZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgbW9udGggPSBvcmlnaW5hbE1vbnRoQXJyYXlbaV0uZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGxldCB5ZWFyID0gb3JpZ2luYWxNb250aEFycmF5W2ldLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgbGV0IHRoaXNGdWxsRGF5ID0gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcbiAgICAgICAgXG4gICAgICAgIG1vbnRoQXJyYXkucHVzaCh0aGlzRnVsbERheSk7XG4gICAgfTtcbiAgICByZXR1cm4gbW9udGhBcnJheVxufTtcblxuXG4vL0Z1bmN0aW9uIHJlbW92ZXMgYSBjaGFyYWN0ZXIgZnJvbSBhIHNwZWNpZmllZCBwb3NpdGlvbiBvZiBhIGdpdmVuIHN0cmluZ1xuZXhwb3J0IGNvbnN0IHJlbW92ZUNoYXJhY3RlciA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzdHJpbmcpIHtcbiAgICBsZXQgbmV3U3RyaW5nID1cbiAgICAgICAgc3RyaW5nLnN1YnN0cigwLCBwb3NpdGlvbiAtIDEpK1xuICAgICAgICBzdHJpbmcuc3Vic3RyKFxuICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICBzdHJpbmcubGVuZ3RoXG4gICAgICAgICk7XG4gICAgcmV0dXJuIG5ld1N0cmluZztcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJlbmRlck5ld1Byb2plY3RCdG4gfSBmcm9tIFwiLi9oYW5kbGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleFN0eWxlLmNzcyc7XG5pbXBvcnQgeyBmaW5kVGFza3NGb3JNb250aCwgZmluZFRhc2tzRm9yVG9kYXksIGZpbmRUYXNrc0ZvcldlZWsgfSBmcm9tIFwiLi9oYW5kbGVUYXNrXCI7XG5cbnJlbmRlck5ld1Byb2plY3RCdG4oQ29udHJvbGxlci5wcm9qZWN0c0FycmF5KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLXRvZGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaW5kVGFza3NGb3JUb2RheSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3Mtd2VlaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmluZFRhc2tzRm9yV2Vlayk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtbW9udGgnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbmRUYXNrc0Zvck1vbnRoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=