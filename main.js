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
    grid-template-rows: 80px 100px auto 50px;
    height: 100vh;
    width: 100vw;
}

.header{
    grid-column: 1/3;
    display: flex;;
    justify-content: center;
    align-items: center;
    background-color: #011638;
}

.new-projects-form{
    grid-row: 2/3;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #364156;
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
}

.projects-container{
    background-color: #364156;
}

.to-do-list-container{
    background-color: #364156;
}

.projects-container{
    grid-column: 1/2;
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.to-do-list-container{
    grid-row: 2/4;
    grid-column: 2/3;
}

.task-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 300px;
    height: 200px;
    text-align: center;
    border: 1px solid black;
    margin-top: 10px;
    margin-right: 10px;
}

.header h1{
    color: #DFF8EB;
}

.footer{
    grid-column: 1/3;
    grid-row: 4/5;
    background-color: #011638;
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

.project-form-wrapper button{
    width: 60px;
    border: none;
    border-radius: 5px;
    background-color: #011638;
    color: #DFF8EB;
    font-weight: bolder;
}

.indiv-project-containers{
    background-color: #214E34;
    color: #DFF8EB;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 5px;
    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;
    width: 90%;
    height: 40px;
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
    margin-top: 5px;
    margin-left: 5px;
    width: 80px;
    height: 40px;
}

.remove-project-button{
    border: 1px black solid;
    background-color: red;
    color: white;;
    font-weight: bolder;
    border-radius: 6px;
    cursor: pointer;
}

.remove-project-button:hover{
    box-shadow: inset 1px 1px 2px black, inset -1px -1px 2px black;
    background-color: rgb(201, 0, 0);
}
`, "",{"version":3,"sources":["webpack://./src/styles/indexStyle.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,wEAAwE;AAC5E;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,wCAAwC;IACxC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,0DAA0D;IAC1D,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,SAAS;IACT,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;IAClB,sDAAsD;AAC1D;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,sDAAsD;IACtD,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,0BAA0B;IAC1B,2EAA2E;AAC/E;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,0DAA0D;IAC1D,cAAc;IACd,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,8DAA8D;IAC9D,gCAAgC;AACpC","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-template-rows: 80px 100px auto 50px;\n    height: 100vh;\n    width: 100vw;\n}\n\n.header{\n    grid-column: 1/3;\n    display: flex;;\n    justify-content: center;\n    align-items: center;\n    background-color: #011638;\n}\n\n.new-projects-form{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: #364156;\n}\n\n.new-projects-form h2{\n    color: #DFF8EB;\n}\n\n#new-project-button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n}\n\n.projects-container{\n    background-color: #364156;\n}\n\n.to-do-list-container{\n    background-color: #364156;\n}\n\n.projects-container{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.to-do-list-container{\n    grid-row: 2/4;\n    grid-column: 2/3;\n}\n\n.task-wrapper{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 300px;\n    height: 200px;\n    text-align: center;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\n.header h1{\n    color: #DFF8EB;\n}\n\n.footer{\n    grid-column: 1/3;\n    grid-row: 4/5;\n    background-color: #011638;\n}\n\n.project-form-wrapper{\n    position: fixed;\n    width: 200px;\n    height: 100px;\n    top: 50%;\n    left: 50%;\n    margin-top: -50px;\n    margin-left: -100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #214E34;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.project-form-wrapper button{\n    width: 60px;\n    border: none;\n    border-radius: 5px;\n    background-color: #011638;\n    color: #DFF8EB;\n    font-weight: bolder;\n}\n\n.indiv-project-containers{\n    background-color: #214E34;\n    color: #DFF8EB;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-bottom: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n    width: 90%;\n    height: 40px;\n    cursor: pointer;\n}\n\n#project-title{\n    text-align: center;\n    color: #DFF8EB;\n    font-size: 32px;\n    text-decoration: underline;\n    text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;\n}\n\n.add-task-button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n    margin-top: 5px;\n    margin-left: 5px;\n    width: 80px;\n    height: 40px;\n}\n\n.remove-project-button{\n    border: 1px black solid;\n    background-color: red;\n    color: white;;\n    font-weight: bolder;\n    border-radius: 6px;\n    cursor: pointer;\n}\n\n.remove-project-button:hover{\n    box-shadow: inset 1px 1px 2px black, inset -1px -1px 2px black;\n    background-color: rgb(201, 0, 0);\n}\n"],"sourceRoot":""}]);
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
    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(projectFormWrapper, newProjectTitleInput, newProjectSubmit, cancelNewProjectForm);

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
                (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.renderCreateAddTaskBtn)(document.querySelector('.to-do-list-container'),project);
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
    const buttonContainer = document.querySelector('.new-projects-form');
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
    const newProject = new _classes__WEBPACK_IMPORTED_MODULE_1__.Project(newProjectTitle, 2023);

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
        currentProject.style.boxShadow = 'inset 1px 1px 3px black, inset -1px -1px 3px black';
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
/* harmony export */   openTaskForm: () => (/* binding */ openTaskForm),
/* harmony export */   removeAddTaskButton: () => (/* binding */ removeAddTaskButton),
/* harmony export */   removeAllTasksDOM: () => (/* binding */ removeAllTasksDOM),
/* harmony export */   removeTaskForm: () => (/* binding */ removeTaskForm),
/* harmony export */   renderCreateAddTaskBtn: () => (/* binding */ renderCreateAddTaskBtn),
/* harmony export */   renderDeleteTaskBtn: () => (/* binding */ renderDeleteTaskBtn),
/* harmony export */   renderTaskCheckBox: () => (/* binding */ renderTaskCheckBox),
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
    const taskPriorityInput = document.createElement('select');

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

    //Assign options to the priority drop down field
    const highPriority = document.createElement('option');
    const mediumPriority = document.createElement('option');
    const lowPriority = document.createElement('option');

    highPriority.innerText = 'High Priority';
    mediumPriority.innerText = 'Medium Priority';
    lowPriority.innerText = 'Low Priority';

    (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskPriorityInput, highPriority, mediumPriority, lowPriority);


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
        renderCreateAddTaskBtn(document.querySelector('.to-do-list-container') ,currentProject)
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
    if(!taskInputs){
        return;
    }else{
        for(let i = 0; i < taskInputs.length; i++){
            //Remove the field input
            taskInputs[i].remove();
        }
    };

    if(!taskSubmitBtn){
        return;
    }else{
        taskSubmitBtn.remove();
        taskCancelBtn.remove();
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
        dueDate.innerText = currentTask.dueDate;
        priority.innerText = currentTask.priority;

        //Assign a class name to these elements for future
        //styling.
        (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.assignClass)('task-properties', title, description, dueDate, priority)
        taskWrapper.className = 'task-wrapper';

        //Append all of the new elements to the container
        //for this to do object
        (0,_helperFunction__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskWrapper, title, description, dueDate, priority, check, taskDeleteBtn);
        tasksContainer.appendChild(taskWrapper)
    };
};

//Function creates and return the checkbox for each task
const renderTaskCheckBox = function(thisTask, taskArray){
    //Create wrapper for check
    const taskCheck = document.createElement('div');

    console.log(taskArray.indexOf(thisTask));
    
    //Create the checkbox element
    const taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute('type', 'checkbox');
    taskCheckBox.setAttribute('id', `${thisTask.title + (taskArray.indexOf(thisTask))}-check-box`);

    //Create the label for the checkbox
    const taskCheckBoxLabel = document.createElement('label');
    taskCheckBoxLabel.setAttribute('for', `${thisTask.title + (taskArray.indexOf(thisTask))}-check-box`);
    taskCheckBox.innerText = 'Completed?';

    //Event listener for checkbox
    taskCheckBox.addEventListener('change', ()=> {
        thisTask.changeCompleteStatus();
        console.log(thisTask);
    });

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
     removeAddTaskButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UEE7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDZjtBQUNOOztBQUVqQyxtRUFBbUIsQ0FBQyxnREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3kvLi9zcmMvc3R5bGVzL2luZGV4U3R5bGUuY3NzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlcy9pbmRleFN0eWxlLmNzcz9lY2Q4Iiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3kvLi9zcmMvaGFuZGxlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2hhbmRsZVRhc2suanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9oZWxwZXJGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly95L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuYm9keXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMTAwcHggYXV0byA1MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uaGVhZGVye1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgZGlzcGxheTogZmxleDs7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xufVxuXG4ubmV3LXByb2plY3RzLWZvcm17XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQxNTY7XG59XG5cbi5uZXctcHJvamVjdHMtZm9ybSBoMntcbiAgICBjb2xvcjogI0RGRjhFQjtcbn1cblxuI25ldy1wcm9qZWN0LWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjQ0RDRENELCAxcHggMXB4IDNweCBpbnNldCAjQ0RDRENEO1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDE1Njtcbn1cblxuLnRvLWRvLWxpc3QtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQxNTY7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXJ7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogMy80O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG8tZG8tbGlzdC1jb250YWluZXJ7XG4gICAgZ3JpZC1yb3c6IDIvNDtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xufVxuXG4udGFzay13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRlciBoMXtcbiAgICBjb2xvcjogI0RGRjhFQjtcbn1cblxuLmZvb3RlcntcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGdyaWQtcm93OiA0LzU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcbn1cblxuLnByb2plY3QtZm9ybS13cmFwcGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XG59XG5cbi5wcm9qZWN0LWZvcm0td3JhcHBlciBidXR0b257XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5pbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0RGRjhFQiwgLTFweCAtMXB4IDNweCAjREZGOEVCO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Byb2plY3QtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaywgLTFweCAtMXB4IGJsYWNrLCAxcHggLTFweCBibGFjaywgLTFweCAxcHggYmxhY2s7XG59XG5cbi5hZGQtdGFzay1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0NEQ0RDRCwgMXB4IDFweCAzcHggaW5zZXQgI0NEQ0RDRDtcbiAgICBjb2xvcjogI0RGRjhFQjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbntcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlOztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZW1vdmUtcHJvamVjdC1idXR0b246aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggYmxhY2ssIGluc2V0IC0xcHggLTFweCAycHggYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMCwgMCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXhTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBEQUEwRDtJQUMxRCxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsc0RBQXNEO0lBQ3RELFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQiwyRUFBMkU7QUFDL0U7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBEQUEwRDtJQUMxRCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4REFBOEQ7SUFDOUQsZ0NBQWdDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxMDBweCBhdXRvIDUwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDs7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xcbn1cXG5cXG4ubmV3LXByb2plY3RzLWZvcm17XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0MTU2O1xcbn1cXG5cXG4ubmV3LXByb2plY3RzLWZvcm0gaDJ7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0MTU2O1xcbn1cXG5cXG4udG8tZG8tbGlzdC1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQxNTY7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50by1kby1saXN0LWNvbnRhaW5lcntcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLnRhc2std3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGgxe1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcXG59XFxuXFxuLnByb2plY3QtZm9ybS13cmFwcGVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS13cmFwcGVyIGJ1dHRvbntcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmluZGl2LXByb2plY3QtY29udGFpbmVyc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaywgLTFweCAtMXB4IGJsYWNrLCAxcHggLTFweCBibGFjaywgLTFweCAxcHggYmxhY2s7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI0NEQ0RDRCwgMXB4IDFweCAzcHggaW5zZXQgI0NEQ0RDRDtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbntcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlOztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdC1idXR0b246aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4IGJsYWNrLCBpbnNldCAtMXB4IC0xcHggMnB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAwLCAwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXhTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4U3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0NvbnRhaW5zIHRoZSBjbGFzc2VzIHJlcXVpcmVkIGZvciBteSBKYXZhU2NyaXB0IGFwcGxpY2F0aW9uXG5cbi8vQSBjbGFzcyBjb25zdHJ1Y3RvciB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBuZXcgcHJvamVjdHNcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpe1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpO1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5zcGxpY2UodGhpcy50YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcbiAgICB9XG59O1xuXG4vL1RoaXMgaXMgdGhlIGNsYXNzIGNvbnN0cnVjdG9yIGZvciBvdXIgVGFza3NcbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSA9IGZhbHNlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRhc2tcIjtcbiAgICB9OyBcblxuICAgIGNoYW5nZUNvbXBsZXRlU3RhdHVzKCl7XG4gICAgICAgIGlmKHRoaXMuY29tcGxldGUgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbi8vVGhpcyBjbGFzcyBoYXMgY29udHJvbCBvdmVyIHRoZSBjb2xsZWN0aW9uIG9mIHRoZSBwcm9qZWN0c1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBwcm9qZWN0c0FycmF5ID0gW107XG5cbiAgICBnZXRQcm9qZWN0c0FycmF5KCl7XG4gICAgICAgIHJldHVybiBDb250cm9sbGVyLnByb2plY3RzQXJyYXk7XG4gICAgfTtcblxuICAgIGFkZFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIENvbnRyb2xsZXIucHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICAgIH07XG5cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBDb250cm9sbGVyLnByb2plY3RzQXJyYXkuc3BsaWNlKENvbnRyb2xsZXIucHJvamVjdHNBcnJheS5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICB9O1xuICAgIFxufTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25cIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyByZW5kZXJDcmVhdGVBZGRUYXNrQnRuLCByZW5kZXJUYXNrcywgcmVtb3ZlQWxsVGFza3NET00sIHJlbW92ZUFkZFRhc2tCdXR0b24sIHJlbW92ZVRhc2tGb3JtIH0gZnJvbSBcIi4vaGFuZGxlVGFza1wiO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuLy9BIGZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBmb3JtIHRoYXQgd2lsbCBiZSB1c2VkIGluIG90aGVyIFxuLy9mdW5jdGlvbnMgd2l0aGluIHRoaXMgbW9kdWxlXG5leHBvcnQgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKHByb2plY3RzTGlzdCl7XG4gICAgLy9TZWxlY3QgdGhlIGZvcm0gaW5wdXQgZmllbGRzXG4gICAgY29uc3QgcHJvamVjdEZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS13cmFwcGVyJyk7XG5cbiAgICAvL1JlbW92ZSB0aGUgZm9ybSBpbnB1dCBmaWVsZHNcbiAgICBwcm9qZWN0Rm9ybVdyYXBwZXIucmVtb3ZlKCk7XG5cbiAgICAvL1JlLVJlbmRlciB0aGUgXCJOZXcgUHJvamVjdFwiIGJ1dHRvbiBmb3IgdXNlIGFnYWluXG4gICAgcmVuZGVyTmV3UHJvamVjdEJ0bihwcm9qZWN0c0xpc3QpO1xuXG59O1xuXG4vL1RoaXMgZnVuY3Rpb24gd2lsbCBvcGVuIGEgcHJvamVjdCBmb3JtIGFsbG93aW5nIHVzZXIgdG8gXG4vL2VudGVyIHRoZWlyIHByb2plY3QgaW5wdXRcbmV4cG9ydCBjb25zdCBvcGVuUHJvamVjdEZvcm0gPSBmdW5jdGlvbihhcnJheVRvU3VibWl0KXtcblxuICAgIC8vQ3JlYXRlIHRoZSBmaWVsZCBlbGVtZW50cyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBwcm9qZWN0Rm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbE5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAvL0FkZCB0aGUgaW5uZXIgdGV4dCB0byB0aGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgbmV3UHJvamVjdFN1Ym1pdC5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICAgIC8vQXNzaWduIGEgcGxhY2Vob2xkZXIgdG8gdGhlIGlucHV0IGVsZW1lbnRcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgVGl0bGUnKTtcbiAgICBcbiAgICAvL0Fzc2lnbiBjbGFzc2VzIHRvIHRoZSBlbGVtZW50c1xuICAgIHByb2plY3RGb3JtV3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdC1mb3JtLXdyYXBwZXInO1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LmNsYXNzTmFtZSA9ICduZXctcHJvamVjdC10aXRsZS1pbnB1dCc7XG4gICAgbmV3UHJvamVjdFN1Ym1pdC5jbGFzc05hbWUgPSAnbmV3LXByb2plY3Qtc3VibWl0JztcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5jbGFzc05hbWUgPSAnY2FuY2VsLW5ldy1wcm9qZWN0JztcblxuICAgIC8vQWRkIHRoZSByZWxhdGl2ZSBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbiBlbGVtZW50c1xuICAgIGNhbmNlbE5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZVByb2plY3RGb3JtKGFycmF5VG9TdWJtaXQpO1xuICAgIH0pO1xuICAgIG5ld1Byb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKCFuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSl7XG4gICAgICAgICAgICBhbGVydCgnWW91IG11c3QgZW50ZXIgYSB0aXRsZSBmb3IgdGhlIHByb2plY3QhJyk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHN1Ym1pdE5ld1Byb2plY3QoYXJyYXlUb1N1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vU2VsZWN0IHRoZSBlbGVtZW50IHdoZXJlIHRoZSBmb3JtIHdpbGwgYmUgYXR0YWNoZWQgdG9cbiAgICBjb25zdCBuZXdQcm9qZWN0c0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3RzLWZvcm0nKTtcblxuICAgIC8vQXR0YWNoIHRoZSBmb3JtIHRvIHRoZSBwcmV2aW91cyBlbGVtZW50XG4gICAgYXBwZW5kQ2hpbGRyZW4ocHJvamVjdEZvcm1XcmFwcGVyLCBuZXdQcm9qZWN0VGl0bGVJbnB1dCwgbmV3UHJvamVjdFN1Ym1pdCwgY2FuY2VsTmV3UHJvamVjdEZvcm0pO1xuXG4gICAgbmV3UHJvamVjdHNGb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtV3JhcHBlcik7XG59O1xuXG4vL0Z1bmN0aW9uIHRoYXQgcmVuZGVycyB0aGUgcHJvamVjdCBpbnRvIHRoZSBET00gdG8gYmUgXG4vL2Rpc3BsYXllZCBvbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2plY3QgPSBmdW5jdGlvbihhcnJheSwgY29udGFpbmVyKXtcbiAgICBcbiAgICAvL0NsZWFyIHRoZSBET00gYmVmb3JlIHJlbmRlcmluZyBhZ2FpblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vTG9vcCB0aHJvdWdoIHRoZSBnaXZlbiBhcnJheVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vSW5pdGlhbGlzZSBvdXIgdmFyaWFibGVzIHVzZWQgdGhyb3VnaG91dCB0aGUgZnVuY3Rpb25cbiAgICAgICAgbGV0IHByb2plY3QgPSBhcnJheVtpXTtcbiAgICAgICAgbGV0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBsZXQgcHJvamVjdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcjtcblxuICAgICAgICAvL1NldCBpbm5lciB0ZXh0IG9mIHRoZSBlbGVtZW50cyB0byB0aGUgdmFsdWVzIGluc2lkZVxuICAgICAgICAvL29mIHRoZSBnaXZlbiBvYmplY3RzXG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBwcm9qZWN0RGF0ZS5pbm5lclRleHQgPSBwcm9qZWN0LmRhdGU7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuXG4gICAgICAgIC8vR2l2ZSB0aGUgcHJvamVjdCBlbGVtZW50cyBjbGFzcyBuYW1lcyBmb3IgZnV0dXJlIHN0eWxpbmdcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NOYW1lID0gJ2luZGl2LXByb2plY3QtY29udGFpbmVycyc7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC10aXRsZXMnO1xuICAgICAgICBwcm9qZWN0RGF0ZS5jbGFzc05hbWUgPSAncHJvamVjdC1kYXRlcyc7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NOYW1lID0gJ3JlbW92ZS1wcm9qZWN0LWJ1dHRvbic7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uaWQgPSBgcmVtb3ZlLXByb2plY3QtYnV0dG9uLSR7aX1gO1xuXG4gICAgICAgIC8vUmVuZGVyIHRoZSBBZGQgVGFzayBCdXR0b25cbiAgICAgICAgLy9yZW5kZXJDcmVhdGVBZGRUYXNrQnRuKHByb2plY3RFbGVtZW50LCBwcm9qZWN0KTtcblxuICAgICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3JlbW92ZS1wcm9qZWN0LWJ1dHRvbi0ke2l9YCkpe1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0KGFycmF5LCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oKTtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxUYXNrc0RPTSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJykuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxUYXNrc0RPTSgpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUYXNrRm9ybSgpO1xuICAgICAgICAgICAgICAgIHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtY29udGFpbmVyJykscHJvamVjdCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2l9YCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBjaGlsZCBlbGVtZW50cyB0byB0aGVpciBwYXJlbnQgZWxlbWVudFxuICAgICAgICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0RWxlbWVudCwgcHJvamVjdFRpdGxlLCBwcm9qZWN0RGF0ZSwgcmVtb3ZlUHJvamVjdEJ0bik7XG5cblxuICAgICAgICAvL0FwcGVuZCB0aGUgZGl2IHRvIHRoZSBnaXZlbiBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcblxuICAgIH1cbn07XG5cbi8vRnVuY3Rpb24gcmUtcmVuZGVycyB0aGUgXCJOZXcgUHJvamVjdFwiIGJ1dHRvbiBhZ2FpbiB0byB0aGUgXG4vL0RPTVxuZXhwb3J0IGNvbnN0IHJlbmRlck5ld1Byb2plY3RCdG4gPSBmdW5jdGlvbihwcm9qZWN0QXJyYXkpe1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmlubmVyVGV4dCA9ICdOZXcgUHJvamVjdCc7XG4gICAgbmV3UHJvamVjdEJ0bi5pZCA9ICduZXctcHJvamVjdC1idXR0b24nO1xuXG4gICAgLy9BZGQgdGhlIGV2ZW50IGxpc3RlbmVyIGJhY2sgdG8gdGhlIFwiTmV3IFByb2plY3RcIiBidXR0b25cbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgb3BlblByb2plY3RGb3JtKHByb2plY3RBcnJheSk7XG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgLy9BcHBlbmQgdGhlIGJ1dHRvbiBiYWNrIHRvIHRoZSBjb3JyZWN0IGRpdlxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdHMtZm9ybScpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKTtcblxuICAgIHJlbW92ZUFsbFRhc2tzRE9NKCk7XG59O1xuXG4vL0Z1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgYWRkIGEgbmV3IFByb2plY3QgdG8gYSBnaXZlbiBwcm9qZWN0c0xpc3RcbmV4cG9ydCBjb25zdCBzdWJtaXROZXdQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdHNMaXN0KXtcbiAgICAvL1NlbGVjdCB0aGUgdGl0bGUgaW5wdXQgZWxlbWVudCBmb3IgdGhlIHByb2plY3QgZm9ybVxuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LXRpdGxlLWlucHV0Jyk7XG5cbiAgICAvL0Fzc2lnbiB0aGUgdmFsdWUgZW50ZXJlZCBpbnRvIHRoZSB0aXRsZSBlbGVtZW50IHRvIGEgdmFyaWFibGVcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTsgICAgXG5cbiAgICAvL0NyZWF0ZSBhIG5ldyBwcm9qZWN0IHdpdGggdGhlIGdpdmVuIHRpdGxlLCBkYXRlIGFuZCBwcm9qZWN0c0xpc3RcbiAgICAvL3RvIHN0b3JlIGl0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSwgMjAyMyk7XG5cbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbiAgICBcbiAgICAvL0FkZCB0aGUgcHJvamVjdCB0byB0aGUgZ2l2ZW4gcHJvamVjdHMgTGlzdFxuICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAgIC8vUmVuZGVyIHRoZSBwcm9qZWN0cyBpbiB0aGUgcHJvamVjdHMgbGlzdCBpbnRvIHRoZSBnaXZlbiBjb250YWluZXJcbiAgICByZW5kZXJQcm9qZWN0KHByb2plY3RzTGlzdCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpKTtcblxuICAgIC8vQ2xvc2UgdGhlIHByb2plY3QgZm9ybVxuICAgIGNsb3NlUHJvamVjdEZvcm0ocHJvamVjdHNMaXN0KTtcblxuICAgIC8vUmVtb3ZlIGFueSBjdXJyZW50bHkgYWN0aXZlIHByb2plY3QgdGl0bGUgYW5kIHRhc2sgXG4gICAgLy9jcmVhdGlvbiBidXR0b25cbiAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS5pbm5lclRleHQgPSAnJztcbn07XG5cbi8vQSBmdW5jdGlvbiB0byBzaG93IHdoaWNoIHByb2plY3QgaXMgY3VycmVudGx5IGNob3Nlbi5cbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gZnVuY3Rpb24oY3VycmVudFByb2plY3Qpe1xuICAgIGNvbnN0IGFsbFByb2plY3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnMnKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICcnO1xuICAgIFxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0RWxlbWVudHMpe1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmJveFNoYWRvdyA9ICcxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUInO1xuICAgIH1cbiAgICBpZihjdXJyZW50UHJvamVjdCl7XG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgICAgICBjdXJyZW50UHJvamVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgMXB4IDFweCAzcHggYmxhY2ssIGluc2V0IC0xcHggLTFweCAzcHggYmxhY2snO1xuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvblwiO1xuaW1wb3J0IHsgYXNzaWduQ2xhc3MgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvblwiO1xuXG4vL0Z1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZm9ybSB1c2VkIGZvciBuZXcgdGFza3MuXG4vL1JlcXVpcmVzIGFuIGFyZ3VtZW50IGZvciB0aGUgZWxlbWVudCB0aGUgZm9ybSB3aWxsIGJlIFxuLy9jcmVhdGVkIGluXG5leHBvcnQgY29uc3Qgb3BlblRhc2tGb3JtID0gZnVuY3Rpb24oZWxlbWVudFRvQXBwZW5kVG8sIGN1cnJlbnRQcm9qZWN0KXtcblxuICAgIC8vU2VsZWN0IHRoZSBcIkFkZCB0YXNrXCIgdGhhdCB3ZSB3YW50IHRvIGFsd2F5cyBhcHBlbmQgdGhlIFxuICAgIC8vZm9ybSBhZnRlclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJyk7XG5cbiAgICAvL0NyZWF0ZSBhbGwgb2YgdGhlIGZpZWxkIGVsZW1lbnRzIHJlcXVpcmVkIGZvciBhIHRhc2tcbiAgICBjb25zdCB0YXNrRm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAvL0Fzc2lnbiBhbGwgb2YgdGhlIGZpZWxkIGVsZW1lbnRzIGEgY2xhc3MgbmFtZVxuICAgIHRhc2tGb3JtV3JhcHBlci5jbGFzc05hbWUgPSAndGFzayBmb3JtJztcbiAgICB0YXNrVGl0bGVJbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcblxuICAgIC8vQXNzaWduIHBsYWNlaG9sZGVyIHZhbHVlcyB0byBhbGwgb2YgdGhlIGlucHV0c1xuICAgIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBUaXRsZScpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBEZXNjcmlwdGlvbicpO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIER1ZSBEYXRlJyk7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIFByaW9yaXR5IExldmVsJyk7XG5cbiAgICAvL0Fzc2lnbiBmaWVsZCBlbGVtZW50cyBhbiBJRFxuICAgIHRhc2tUaXRsZUlucHV0LmlkID0gJ3Rhc2stdGl0bGUtaW5wdXQnO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LmlkID0gJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQuaWQgPSAndGFzay1kdWUtZGF0ZS1pbnB1dCc7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuaWQgPSAndGFzay1wcmlvcml0eS1pbnB1dCc7XG5cbiAgICAvL0Fzc2lnbiBvcHRpb25zIHRvIHRoZSBwcmlvcml0eSBkcm9wIGRvd24gZmllbGRcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICBoaWdoUHJpb3JpdHkuaW5uZXJUZXh0ID0gJ0hpZ2ggUHJpb3JpdHknO1xuICAgIG1lZGl1bVByaW9yaXR5LmlubmVyVGV4dCA9ICdNZWRpdW0gUHJpb3JpdHknO1xuICAgIGxvd1ByaW9yaXR5LmlubmVyVGV4dCA9ICdMb3cgUHJpb3JpdHknO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza1ByaW9yaXR5SW5wdXQsIGhpZ2hQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGxvd1ByaW9yaXR5KTtcblxuXG4gICAgLy9DcmVhdGUgdGhlIGJ1dHRvbiBlbGVtZW50cyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdUYXNrU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3VGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9Bc3NpZ24gdGhlIGJ1dHRvbiBlbGVtZW50cyB3aXRoIGEgY2xhc3MgbmFtZVxuICAgIG5ld1Rhc2tTdWJtaXRCdG4uY2xhc3NOYW1lID0gJ3N1Ym1pdC10YXNrJztcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmNsYXNzTmFtZSA9ICdjYW5jZWwtdGFzayc7XG5cbiAgICAvL0luc2VydCBpbm5lciB0ZXh0IGludG8gdGhlIGJ1dHRvbnMgdG8gZGlzcGxheSB1c2VcbiAgICBuZXdUYXNrU3VibWl0QnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAgIG5ld1Rhc2tDYW5jZWxCdG4uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICAvL0FkZCBldmVudCBsaXN0ZW5lciB0byBjYW5jZWwgYW5kIHJlbW92ZSB0aGUgZm9ybSBmcm9tIFxuICAgIC8vdGhlIERPTVxuICAgIG5ld1Rhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVUYXNrRm9ybSlcblxuICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHJlbmRlciB0aGUgdGFzayB0byBzdWJtaXQgYnV0dG9uXG4gICAgbmV3VGFza1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtY29udGFpbmVyJykgLGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICByZW5kZXJUYXNrcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHJlbW92ZVRhc2tGb3JtKCk7XG4gICAgfSk7XG5cbiAgICAvL0FwcGVuZCB0aGUgZmllbGQgZWxlbWVudHMgdG8gdGhlIGdpdmVuIGNvbnRhaW5lciBlbGVtZW50XG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza0Zvcm1XcmFwcGVyLCB0YXNrVGl0bGVJbnB1dCwgdGFza0Rlc2NyaXB0aW9uSW5wdXQsIHRhc2tEdWVEYXRlSW5wdXQsIHRhc2tQcmlvcml0eUlucHV0LCBuZXdUYXNrU3VibWl0QnRuLCBuZXdUYXNrQ2FuY2VsQnRuKTtcblxuICAgIC8vQXBwZW5kIHRoZSBmb3JtIHRvIGFmdGVyIHRoZSBcIkFkZCBUYXNrIEJ1dHRvblwiO1xuICAgIGFkZFRhc2tCdG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFza0Zvcm1XcmFwcGVyLCBhZGRUYXNrQnRuLm5leHRTaWJsaW5nKTtcblxufTtcblxuLy9GdW5jdGlvbiB0aGF0IHJlbW92ZXMgYWxsIG9mIHRoZSBmb3JtIGVsZW1lbnRzIGZyb20gdGhlIERPTVxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2tGb3JtID0gZnVuY3Rpb24oKXtcbiAgICAvL1NlbGVjdCBhbGwgb2YgdGhlIGZvcm0gZWxlbWVudHMgdXNpbmcgdGhlaXIgY2xhc3MgbmFtZVxuICAgIGNvbnN0IHRhc2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1pbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRhc2snKTtcbiAgICBjb25zdCB0YXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC10YXNrJyk7XG5cbiAgICAvL0ZvciBldmVyeSBmaWVsZCBpbnB1dCBpbiB0aGUgbGlzdCBvZiBmaWVsZCBpbnB1dHNcbiAgICBpZighdGFza0lucHV0cyl7XG4gICAgICAgIHJldHVybjtcbiAgICB9ZWxzZXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tJbnB1dHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy9SZW1vdmUgdGhlIGZpZWxkIGlucHV0XG4gICAgICAgICAgICB0YXNrSW5wdXRzW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmKCF0YXNrU3VibWl0QnRuKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1lbHNle1xuICAgICAgICB0YXNrU3VibWl0QnRuLnJlbW92ZSgpO1xuICAgICAgICB0YXNrQ2FuY2VsQnRuLnJlbW92ZSgpO1xuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIHRvIHJlbmRlciB0aGUgdGFza3Mgb2YgYSBwcm9qZWN0IG9uIHRvIHRoZSBET01cbi8vdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBwYWdlXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza3MgPSBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICAvL0ZpcnN0IHRoZSB0YXNrcyBjb250YWluZXIgbXVzdCBiZSBlbXB0aWVkXG4gICAgcmVtb3ZlQWxsVGFza3NET00oKVxuXG4gICAgLy9Bc3NpZ24gYSB2YXJpYWJsZSB0byBhbiBhcnJheSBvZiB0aGUga2V5IG5hbWVzIGZyb20gZWFjaFxuICAgIC8vcHJvamVjdC5cbiAgICBsZXQgdGFza0xpc3QgPSBwcm9qZWN0LnRhc2tMaXN0O1xuXG4gICAgLy9TZWxlY3QgdGhlIGNvbnRhaW5lciBpbiBIVE1MIGRvY3VtZW50IHdoZXJlIHRhc2tzIHdpbGxcbiAgICAvL2JlIGFwcGVuZGVkIHRvLlxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtY29udGFpbmVyJylcblxuICAgIC8vTG9vcCB0aHJvdWdoIHRoZSBrZXkgYXJyYXlzIHRvIGZpbmQgYW55IHRvIGRvIGtleXMgaW5zaWRlIFxuICAgIC8vb2YgdGhlIHByb2plY3RzLlxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IHRhc2tMaXN0W2ldO1xuICAgICAgICAvL0luaXRpYWxpemUgYWxsIG9mIHRoZSB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIFxuICAgICAgICAvL3VzZWQgdGhyb3VnaCB0aGUgZnVuY3Rpb24gdG8gdGhlaXIgZG9tIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrID0gcmVuZGVyVGFza0NoZWNrQm94KGN1cnJlbnRUYXNrLCB0YXNrTGlzdCk7XG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSByZW5kZXJEZWxldGVUYXNrQnRuKHByb2plY3QsIGN1cnJlbnRUYXNrKTtcblxuXG4gICAgICAgIC8vQXBwZW5kIHRleHQgdG8gZWxlbWVudHMgZnJvbSB0aGVpciByZXNwZWN0aXZlIFxuICAgICAgICAvL3Byb3BlcnRpZXNcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gY3VycmVudFRhc2sudGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGN1cnJlbnRUYXNrLmR1ZURhdGU7XG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IGN1cnJlbnRUYXNrLnByaW9yaXR5O1xuXG4gICAgICAgIC8vQXNzaWduIGEgY2xhc3MgbmFtZSB0byB0aGVzZSBlbGVtZW50cyBmb3IgZnV0dXJlXG4gICAgICAgIC8vc3R5bGluZy5cbiAgICAgICAgYXNzaWduQ2xhc3MoJ3Rhc2stcHJvcGVydGllcycsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIHRhc2tXcmFwcGVyLmNsYXNzTmFtZSA9ICd0YXNrLXdyYXBwZXInO1xuXG4gICAgICAgIC8vQXBwZW5kIGFsbCBvZiB0aGUgbmV3IGVsZW1lbnRzIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgLy9mb3IgdGhpcyB0byBkbyBvYmplY3RcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza1dyYXBwZXIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrLCB0YXNrRGVsZXRlQnRuKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpXG4gICAgfTtcbn07XG5cbi8vRnVuY3Rpb24gY3JlYXRlcyBhbmQgcmV0dXJuIHRoZSBjaGVja2JveCBmb3IgZWFjaCB0YXNrXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza0NoZWNrQm94ID0gZnVuY3Rpb24odGhpc1Rhc2ssIHRhc2tBcnJheSl7XG4gICAgLy9DcmVhdGUgd3JhcHBlciBmb3IgY2hlY2tcbiAgICBjb25zdCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheS5pbmRleE9mKHRoaXNUYXNrKSk7XG4gICAgXG4gICAgLy9DcmVhdGUgdGhlIGNoZWNrYm94IGVsZW1lbnRcbiAgICBjb25zdCB0YXNrQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICB0YXNrQ2hlY2tCb3guc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXNUYXNrLnRpdGxlICsgKHRhc2tBcnJheS5pbmRleE9mKHRoaXNUYXNrKSl9LWNoZWNrLWJveGApO1xuXG4gICAgLy9DcmVhdGUgdGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3hcbiAgICBjb25zdCB0YXNrQ2hlY2tCb3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0NoZWNrQm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0aGlzVGFzay50aXRsZSArICh0YXNrQXJyYXkuaW5kZXhPZih0aGlzVGFzaykpfS1jaGVjay1ib3hgKTtcbiAgICB0YXNrQ2hlY2tCb3guaW5uZXJUZXh0ID0gJ0NvbXBsZXRlZD8nO1xuXG4gICAgLy9FdmVudCBsaXN0ZW5lciBmb3IgY2hlY2tib3hcbiAgICB0YXNrQ2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PiB7XG4gICAgICAgIHRoaXNUYXNrLmNoYW5nZUNvbXBsZXRlU3RhdHVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXNUYXNrKTtcbiAgICB9KTtcblxuICAgIC8vQXBwZW5kIGVsZW1lbnRzIHRvIHRoZSB3cmFwcGVyXG4gICAgYXBwZW5kQ2hpbGRyZW4odGFza0NoZWNrLCB0YXNrQ2hlY2tCb3hMYWJlbCwgdGFza0NoZWNrQm94KTtcblxuICAgIHJldHVybiB0YXNrQ2hlY2s7XG5cbn1cblxuLy9GdW5jdGlvbiBjcmVhdGVzIGFuZCByZXR1cm5zIHRoZSAnZGVsZXRlIGJ1dHRvbicgd2hpY2ggd2lsbCBcbi8vYmUgdXNlZCBvZiBlYWNoIHRhc2tcbmV4cG9ydCBjb25zdCByZW5kZXJEZWxldGVUYXNrQnRuID0gZnVuY3Rpb24odGhpc1Byb2plY3QsIHRoaXNUYXNrKXtcbiAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlVGFza0J0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIHRoaXNQcm9qZWN0LnJlbW92ZVRhc2sodGhpc1Rhc2spO1xuICAgICAgICByZW5kZXJUYXNrcyh0aGlzUHJvamVjdCk7XG4gICAgfSlcbiAgICByZXR1cm4gZGVsZXRlVGFza0J0bjtcbn07XG5cbi8vRnVuY3Rpb24gY3JlYXRlcyBvdXIgXCJBZGQgVGFzayBCdXR0b25cIiBnaXZlbiBhIHBhcmVudCBlbGVtZW50XG4vL3RvIGFwcGVuZCB0by5cbmV4cG9ydCBjb25zdCByZW5kZXJDcmVhdGVBZGRUYXNrQnRuID0gZnVuY3Rpb24oZWxlbWVudFRvQXBwZW5kVG8sIGN1cnJlbnRQcm9qZWN0KXtcbiAgICAvL0NyZWF0ZSB0aGUgYnV0dG9uIGVsZW1lbnQgd2l0aCB0ZXh0LlxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG5cbiAgICAvL0FkZCBjbGFzcyB0byB0aGUgYnV0dG9uXG4gICAgYWRkVGFza0J0bi5jbGFzc05hbWUgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xuXG4gICAgLy9BZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBidXR0b24gd2hpY2ggb3BlbnMgdGhlIFxuICAgIC8vXCJUYXNrIEZvcm1cIiBvbiB0aGUgZWxlbWVudCB0aGF0IHdhcyBnaXZlbi5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICBvcGVuVGFza0Zvcm0oZWxlbWVudFRvQXBwZW5kVG8sIGN1cnJlbnRQcm9qZWN0KVxuICAgICByZW1vdmVBZGRUYXNrQnV0dG9uKCk7XG4gICAgfSlcblxuICAgIC8vQXBwZW5kIHRoZSBidXR0b24gdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAgZWxlbWVudFRvQXBwZW5kVG8uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG59O1xuXG4vL0Z1bmN0aW9uIHRvIGFkZCBhIFwiVGFza1wiIHRvIGEgcHJvamVjdCdzIHRhc2sgYXJyYXkuXG5leHBvcnQgY29uc3QgYWRkVGFza1RvUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWR1ZS1kYXRlLWlucHV0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XG4gICAgXG4gICAgaWYoIXRpdGxlSW5wdXQudmFsdWUgfHwgIWRlc2NyaXB0aW9uSW5wdXQudmFsdWUgfHwgIWR1ZURhdGVJbnB1dC52YWx1ZSB8fCAhcHJpb3JpdHlJbnB1dC52YWx1ZSl7XG4gICAgICAgIGFsZXJ0KCdBbGwgZmllbGRzIHNob3VsZCBiZSBjb21wbGV0ZWQgYmVmb3JlIHN1Ym1pdHRpbmchJyk7XG4gICAgfSBlbHNle1xuICAgICAgICBwcm9qZWN0LmFkZFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LnZhbHVlKVxuICAgIH07XG59XG5cbi8vRnVuY3Rpb24gdG8gcmVtb3ZlIGFsbCB0YXNrcyBmcm9tIHRoZSBzY3JlZW4uXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsVGFza3NET00gPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRpc3BsYXllZFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2std3JhcHBlcicpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgZGlzcGxheWVkVGFza3Mpe1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgIH07XG59XG5cbi8vRnVuY3Rpb24gcmVtb3ZlZCB0aGUgJ0FkZCBUYXNrJyBidXR0b24gZnJvbSB0aGUgRE9NXG5leHBvcnQgY29uc3QgcmVtb3ZlQWRkVGFza0J1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcbiAgICBpZihhZGRUYXNrQnV0dG9uKXtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5yZW1vdmUoKTtcbiAgICB9O1xufVxuIiwiLy9GdW5jdGlvbiB0byBoZWxwIGFwcGVuZCBtdWx0aXBsZSBjaGlsZHJlbiBhdCBvbmNlIHRvIGEgcGFyZW50XG4vL2VsZW1lbnRcbmV4cG9ydCBjb25zdCBhcHBlbmRDaGlsZHJlbiA9IGZ1bmN0aW9uKHBhcmVudCwgLi4uY2hpbGRyZW4peyBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5baV0pO1xuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIHRvIGFsbG93IG1lIHRvIGFkZCB0aGUgc2FtZSBjbGFzcyBuYW1lIHRvIG11bHRpcGxlXG4vL2VsZW1lbnRzLlxuZXhwb3J0IGNvbnN0IGFzc2lnbkNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lLCAuLi5lbGVtZW50cyl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZWxlbWVudHNbaV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyTmV3UHJvamVjdEJ0biB9IGZyb20gXCIuL2hhbmRsZVByb2plY3RcIjtcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4U3R5bGUuY3NzJztcblxucmVuZGVyTmV3UHJvamVjdEJ0bihDb250cm9sbGVyLnByb2plY3RzQXJyYXkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9