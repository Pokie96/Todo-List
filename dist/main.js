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
}
`, "",{"version":3,"sources":["webpack://./src/styles/indexStyle.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,wCAAwC;IACxC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,0DAA0D;IAC1D,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,SAAS;IACT,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;IAClB,sDAAsD;AAC1D;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,sDAAsD;IACtD,UAAU;AACd","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-template-rows: 80px 100px auto 50px;\n    height: 100vh;\n    width: 100vw;\n}\n\n.header{\n    grid-column: 1/3;\n    display: flex;;\n    justify-content: center;\n    align-items: center;\n    background-color: #011638;\n}\n\n.new-projects-form{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: #364156;\n}\n\n.new-projects-form h2{\n    color: #DFF8EB;\n}\n\n#new-project-button{\n    background-color: #214E34;\n    border: none;\n    box-shadow: 1px 1px 3px #CDCDCD, 1px 1px 3px inset #CDCDCD;\n    color: #DFF8EB;\n    font-weight: bolder;\n}\n\n.projects-container{\n    background-color: #364156;\n}\n\n.to-do-list-container{\n    background-color: #364156;\n}\n\n.projects-container{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.to-do-list-container{\n    grid-row: 2/4;\n    grid-column: 2/3;\n}\n\n.task-wrapper{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 300px;\n    height: 200px;\n    text-align: center;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\n.header h1{\n    color: #DFF8EB;\n}\n\n.footer{\n    grid-column: 1/3;\n    grid-row: 4/5;\n    background-color: #011638;\n}\n\n.project-form-wrapper{\n    position: fixed;\n    width: 200px;\n    height: 100px;\n    top: 50%;\n    left: 50%;\n    margin-top: -50px;\n    margin-left: -100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #214E34;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n}\n\n.project-form-wrapper button{\n    width: 60px;\n    border: none;\n    border-radius: 5px;\n    background-color: #011638;\n    color: #DFF8EB;\n    font-weight: bolder;\n}\n\n.indiv-project-containers{\n    background-color: #214E34;\n    color: #DFF8EB;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-bottom: 5px;\n    box-shadow: 1px 1px 3px #DFF8EB, -1px -1px 3px #DFF8EB;\n    width: 90%;\n}\n"],"sourceRoot":""}]);
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
            (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeAddTaskButton)();
            (0,_handleTask__WEBPACK_IMPORTED_MODULE_2__.removeTaskForm)();
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
};

//A function to show which project is currently chosen.
const setActiveProject = function(currentProject){
    const allProjectTitles = document.querySelectorAll('.project-titles');
    const projectTitle = document.querySelector("#project-title");
    projectTitle.innerText = '';
    projectTitle.innerText = currentProject.textContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7O0FBRUw7QUFDQSxJQUFJLCtEQUFjOztBQUVsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UEE7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDZjtBQUNOOztBQUVqQyxtRUFBbUIsQ0FBQyxnREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3kvLi9zcmMvc3R5bGVzL2luZGV4U3R5bGUuY3NzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlcy9pbmRleFN0eWxlLmNzcz9lY2Q4Iiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3kvLi9zcmMvaGFuZGxlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2hhbmRsZVRhc2suanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9oZWxwZXJGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly95L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxMDBweCBhdXRvIDUwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5oZWFkZXJ7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBkaXNwbGF5OiBmbGV4OztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XG59XG5cbi5uZXctcHJvamVjdHMtZm9ybXtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDE1Njtcbn1cblxuLm5ldy1wcm9qZWN0cy1mb3JtIGgye1xuICAgIGNvbG9yOiAjREZGOEVCO1xufVxuXG4jbmV3LXByb2plY3QtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XG4gICAgY29sb3I6ICNERkY4RUI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0MTU2O1xufVxuXG4udG8tZG8tbGlzdC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDE1Njtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lcntcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGdyaWQtcm93OiAzLzQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50by1kby1saXN0LWNvbnRhaW5lcntcbiAgICBncmlkLXJvdzogMi80O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbi50YXNrLXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaGVhZGVyIGgxe1xuICAgIGNvbG9yOiAjREZGOEVCO1xufVxuXG4uZm9vdGVye1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgZ3JpZC1yb3c6IDQvNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xufVxuXG4ucHJvamVjdC1mb3JtLXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTRFMzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcbn1cblxuLnByb2plY3QtZm9ybS13cmFwcGVyIGJ1dHRvbntcbiAgICB3aWR0aDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XG4gICAgY29sb3I6ICNERkY4RUI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmluZGl2LXByb2plY3QtY29udGFpbmVyc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xuICAgIGNvbG9yOiAjREZGOEVCO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjREZGOEVCLCAtMXB4IC0xcHggM3B4ICNERkY4RUI7XG4gICAgd2lkdGg6IDkwJTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleFN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwwREFBMEQ7SUFDMUQsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHNEQUFzRDtJQUN0RCxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxMDBweCBhdXRvIDUwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDs7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xcbn1cXG5cXG4ubmV3LXByb2plY3RzLWZvcm17XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0MTU2O1xcbn1cXG5cXG4ubmV3LXByb2plY3RzLWZvcm0gaDJ7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNDRENEQ0QsIDFweCAxcHggM3B4IGluc2V0ICNDRENEQ0Q7XFxuICAgIGNvbG9yOiAjREZGOEVCO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0MTU2O1xcbn1cXG5cXG4udG8tZG8tbGlzdC1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQxNTY7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50by1kby1saXN0LWNvbnRhaW5lcntcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLnRhc2std3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGgxe1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcXG59XFxuXFxuLnByb2plY3QtZm9ybS13cmFwcGVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0RTM0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS13cmFwcGVyIGJ1dHRvbntcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xcbiAgICBjb2xvcjogI0RGRjhFQjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmluZGl2LXByb2plY3QtY29udGFpbmVyc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNEUzNDtcXG4gICAgY29sb3I6ICNERkY4RUI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNERkY4RUIsIC0xcHggLTFweCAzcHggI0RGRjhFQjtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXhTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4U3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0NvbnRhaW5zIHRoZSBjbGFzc2VzIHJlcXVpcmVkIGZvciBteSBKYXZhU2NyaXB0IGFwcGxpY2F0aW9uXG5cbi8vQSBjbGFzcyBjb25zdHJ1Y3RvciB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBuZXcgcHJvamVjdHNcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpe1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpO1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5zcGxpY2UodGhpcy50YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcbiAgICB9XG59O1xuXG4vL1RoaXMgaXMgdGhlIGNsYXNzIGNvbnN0cnVjdG9yIGZvciBvdXIgVGFza3NcbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSA9IGZhbHNlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRhc2tcIjtcbiAgICB9OyBcblxuICAgIGNoYW5nZUNvbXBsZXRlU3RhdHVzKCl7XG4gICAgICAgIGlmKHRoaXMuY29tcGxldGUgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbi8vVGhpcyBjbGFzcyBoYXMgY29udHJvbCBvdmVyIHRoZSBjb2xsZWN0aW9uIG9mIHRoZSBwcm9qZWN0c1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBwcm9qZWN0c0FycmF5ID0gW107XG5cbiAgICBnZXRQcm9qZWN0c0FycmF5KCl7XG4gICAgICAgIHJldHVybiBDb250cm9sbGVyLnByb2plY3RzQXJyYXk7XG4gICAgfTtcblxuICAgIGFkZFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIENvbnRyb2xsZXIucHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICAgIH07XG5cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBDb250cm9sbGVyLnByb2plY3RzQXJyYXkuc3BsaWNlKENvbnRyb2xsZXIucHJvamVjdHNBcnJheS5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICB9O1xuICAgIFxufTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25cIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyByZW5kZXJDcmVhdGVBZGRUYXNrQnRuLCByZW5kZXJUYXNrcywgcmVtb3ZlQWxsVGFza3NET00sIHJlbW92ZUFkZFRhc2tCdXR0b24sIHJlbW92ZVRhc2tGb3JtIH0gZnJvbSBcIi4vaGFuZGxlVGFza1wiO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuLy9BIGZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBmb3JtIHRoYXQgd2lsbCBiZSB1c2VkIGluIG90aGVyIFxuLy9mdW5jdGlvbnMgd2l0aGluIHRoaXMgbW9kdWxlXG5leHBvcnQgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKHByb2plY3RzTGlzdCl7XG4gICAgLy9TZWxlY3QgdGhlIGZvcm0gaW5wdXQgZmllbGRzXG4gICAgY29uc3QgcHJvamVjdEZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS13cmFwcGVyJyk7XG5cbiAgICAvL1JlbW92ZSB0aGUgZm9ybSBpbnB1dCBmaWVsZHNcbiAgICBwcm9qZWN0Rm9ybVdyYXBwZXIucmVtb3ZlKCk7XG4gICAgXG4gICAgLy9SZS1SZW5kZXIgdGhlIFwiTmV3IFByb2plY3RcIiBidXR0b24gZm9yIHVzZSBhZ2FpblxuICAgIHJlbmRlck5ld1Byb2plY3RCdG4ocHJvamVjdHNMaXN0KTtcblxufTtcblxuLy9UaGlzIGZ1bmN0aW9uIHdpbGwgb3BlbiBhIHByb2plY3QgZm9ybSBhbGxvd2luZyB1c2VyIHRvIFxuLy9lbnRlciB0aGVpciBwcm9qZWN0IGlucHV0XG5leHBvcnQgY29uc3Qgb3BlblByb2plY3RGb3JtID0gZnVuY3Rpb24oYXJyYXlUb1N1Ym1pdCl7XG5cbiAgICAvL0NyZWF0ZSB0aGUgZmllbGQgZWxlbWVudHMgZm9yIHRoZSBmb3JtXG4gICAgY29uc3QgcHJvamVjdEZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9BZGQgdGhlIGlubmVyIHRleHQgdG8gdGhlIGJ1dHRvbiBlbGVtZW50c1xuICAgIG5ld1Byb2plY3RTdWJtaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICAvL0Fzc2lnbiBhIHBsYWNlaG9sZGVyIHRvIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgXG4gICAgLy9Bc3NpZ24gY2xhc3NlcyB0byB0aGUgZWxlbWVudHNcbiAgICBwcm9qZWN0Rm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtZm9ybS13cmFwcGVyJztcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC5jbGFzc05hbWUgPSAnbmV3LXByb2plY3QtdGl0bGUtaW5wdXQnO1xuICAgIG5ld1Byb2plY3RTdWJtaXQuY2xhc3NOYW1lID0gJ25ldy1wcm9qZWN0LXN1Ym1pdCc7XG4gICAgY2FuY2VsTmV3UHJvamVjdEZvcm0uY2xhc3NOYW1lID0gJ2NhbmNlbC1uZXctcHJvamVjdCc7XG5cbiAgICAvL0FkZCB0aGUgcmVsYXRpdmUgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBidXR0b24gZWxlbWVudHNcbiAgICBjYW5jZWxOZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VQcm9qZWN0Rm9ybShhcnJheVRvU3VibWl0KTtcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZighbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1lvdSBtdXN0IGVudGVyIGEgdGl0bGUgZm9yIHRoZSBwcm9qZWN0IScpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBzdWJtaXROZXdQcm9qZWN0KGFycmF5VG9TdWJtaXQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL1NlbGVjdCB0aGUgZWxlbWVudCB3aGVyZSB0aGUgZm9ybSB3aWxsIGJlIGF0dGFjaGVkIHRvXG4gICAgY29uc3QgbmV3UHJvamVjdHNGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0cy1mb3JtJyk7XG5cbiAgICAvL0F0dGFjaCB0aGUgZm9ybSB0byB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgIGFwcGVuZENoaWxkcmVuKHByb2plY3RGb3JtV3JhcHBlciwgbmV3UHJvamVjdFRpdGxlSW5wdXQsIG5ld1Byb2plY3RTdWJtaXQsIGNhbmNlbE5ld1Byb2plY3RGb3JtKTtcblxuICAgIG5ld1Byb2plY3RzRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybVdyYXBwZXIpO1xufTtcblxuLy9GdW5jdGlvbiB0aGF0IHJlbmRlcnMgdGhlIHByb2plY3QgaW50byB0aGUgRE9NIHRvIGJlIFxuLy9kaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24oYXJyYXksIGNvbnRhaW5lcil7XG4gICAgXG4gICAgLy9DbGVhciB0aGUgRE9NIGJlZm9yZSByZW5kZXJpbmcgYWdhaW5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvL0xvb3AgdGhyb3VnaCB0aGUgZ2l2ZW4gYXJyYXlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAvL0luaXRpYWxpc2Ugb3VyIHZhcmlhYmxlcyB1c2VkIHRocm91Z2hvdXQgdGhlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBwcm9qZWN0ID0gYXJyYXlbaV07XG4gICAgICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbGV0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIC8vU2V0IGlubmVyIHRleHQgb2YgdGhlIGVsZW1lbnRzIHRvIHRoZSB2YWx1ZXMgaW5zaWRlXG4gICAgICAgIC8vb2YgdGhlIGdpdmVuIG9iamVjdHNcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHByb2plY3REYXRlLmlubmVyVGV4dCA9IHByb2plY3QuZGF0ZTtcblxuICAgICAgICAvL0dpdmUgdGhlIHByb2plY3QgZWxlbWVudHMgY2xhc3MgbmFtZXMgZm9yIGZ1dHVyZSBzdHlsaW5nXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTmFtZSA9ICdpbmRpdi1wcm9qZWN0LWNvbnRhaW5lcnMnO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGl0bGVzJztcbiAgICAgICAgcHJvamVjdERhdGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtZGF0ZXMnO1xuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBjaGlsZCBlbGVtZW50cyB0byB0aGVpciBwYXJlbnQgZWxlbWVudFxuICAgICAgICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0RWxlbWVudCwgcHJvamVjdFRpdGxlLCBwcm9qZWN0RGF0ZSlcblxuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBkaXYgdG8gdGhlIGdpdmVuIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vUmVuZGVyIHRoZSBBZGQgVGFzayBCdXR0b25cbiAgICAgICAgLy9yZW5kZXJDcmVhdGVBZGRUYXNrQnRuKHByb2plY3RFbGVtZW50LCBwcm9qZWN0KTtcblxuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVBbGxUYXNrc0RPTSgpO1xuICAgICAgICAgICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgICAgICAgICAgcmVtb3ZlVGFza0Zvcm0oKTtcbiAgICAgICAgICAgIHJlbmRlckNyZWF0ZUFkZFRhc2tCdG4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QtY29udGFpbmVyJykscHJvamVjdCk7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG4vL0Z1bmN0aW9uIHJlLXJlbmRlcnMgdGhlIFwiTmV3IFByb2plY3RcIiBidXR0b24gYWdhaW4gdG8gdGhlIFxuLy9ET01cbmV4cG9ydCBjb25zdCByZW5kZXJOZXdQcm9qZWN0QnRuID0gZnVuY3Rpb24ocHJvamVjdEFycmF5KXtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdEJ0bi5pbm5lclRleHQgPSAnTmV3IFByb2plY3QnO1xuICAgIG5ld1Byb2plY3RCdG4uaWQgPSAnbmV3LXByb2plY3QtYnV0dG9uJztcblxuICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciBiYWNrIHRvIHRoZSBcIk5ldyBQcm9qZWN0XCIgYnV0dG9uXG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG9wZW5Qcm9qZWN0Rm9ybShwcm9qZWN0QXJyYXkpO1xuICAgICAgICBlLnRhcmdldC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIC8vQXBwZW5kIHRoZSBidXR0b24gYmFjayB0byB0aGUgY29ycmVjdCBkaXZcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3RzLWZvcm0nKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG5cbiAgICByZW1vdmVBbGxUYXNrc0RPTSgpO1xufTtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgYW5kIGFkZCBhIG5ldyBQcm9qZWN0IHRvIGEgZ2l2ZW4gcHJvamVjdHNMaXN0XG5leHBvcnQgY29uc3Qgc3VibWl0TmV3UHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3RzTGlzdCl7XG4gICAgLy9TZWxlY3QgdGhlIHRpdGxlIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBwcm9qZWN0IGZvcm1cbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC10aXRsZS1pbnB1dCcpO1xuXG4gICAgLy9Bc3NpZ24gdGhlIHZhbHVlIGVudGVyZWQgaW50byB0aGUgdGl0bGUgZWxlbWVudCB0byBhIHZhcmlhYmxlXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWU7ICAgIFxuXG4gICAgLy9DcmVhdGUgYSBuZXcgcHJvamVjdCB3aXRoIHRoZSBnaXZlbiB0aXRsZSwgZGF0ZSBhbmQgcHJvamVjdHNMaXN0XG4gICAgLy90byBzdG9yZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0VGl0bGUsIDIwMjMpO1xuXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG4gICAgXG4gICAgLy9BZGQgdGhlIHByb2plY3QgdG8gdGhlIGdpdmVuIHByb2plY3RzIExpc3RcbiAgICBjb250cm9sbGVyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAvL1JlbmRlciB0aGUgcHJvamVjdHMgaW4gdGhlIHByb2plY3RzIGxpc3QgaW50byB0aGUgZ2l2ZW4gY29udGFpbmVyXG4gICAgcmVuZGVyUHJvamVjdChwcm9qZWN0c0xpc3QsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKSk7XG5cbiAgICAvL0Nsb3NlIHRoZSBwcm9qZWN0IGZvcm1cbiAgICBjbG9zZVByb2plY3RGb3JtKHByb2plY3RzTGlzdCk7XG59O1xuXG4vL0EgZnVuY3Rpb24gdG8gc2hvdyB3aGljaCBwcm9qZWN0IGlzIGN1cnJlbnRseSBjaG9zZW4uXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IGZ1bmN0aW9uKGN1cnJlbnRQcm9qZWN0KXtcbiAgICBjb25zdCBhbGxQcm9qZWN0VGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGl0bGVzJyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSAnJztcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3QudGV4dENvbnRlbnQ7XG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RUaXRsZXMpe1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICB9XG4gICAgY3VycmVudFByb2plY3Quc3R5bGUuY29sb3IgPSAncGluayc7XG59OyIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25cIjtcbmltcG9ydCB7IGFzc2lnbkNsYXNzIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25cIjtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZvcm0gdXNlZCBmb3IgbmV3IHRhc2tzLlxuLy9SZXF1aXJlcyBhbiBhcmd1bWVudCBmb3IgdGhlIGVsZW1lbnQgdGhlIGZvcm0gd2lsbCBiZSBcbi8vY3JlYXRlZCBpblxuZXhwb3J0IGNvbnN0IG9wZW5UYXNrRm9ybSA9IGZ1bmN0aW9uKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdCl7XG5cbiAgICAvL1NlbGVjdCB0aGUgXCJBZGQgdGFza1wiIHRoYXQgd2Ugd2FudCB0byBhbHdheXMgYXBwZW5kIHRoZSBcbiAgICAvL2Zvcm0gYWZ0ZXJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpO1xuXG4gICAgLy9DcmVhdGUgYWxsIG9mIHRoZSBmaWVsZCBlbGVtZW50cyByZXF1aXJlZCBmb3IgYSB0YXNrXG4gICAgY29uc3QgdGFza0Zvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgLy9Bc3NpZ24gYWxsIG9mIHRoZSBmaWVsZCBlbGVtZW50cyBhIGNsYXNzIG5hbWVcbiAgICB0YXNrRm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gJ3Rhc2sgZm9ybSc7XG4gICAgdGFza1RpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2staW5wdXQnO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrRHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG5cbiAgICAvL0Fzc2lnbiBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gYWxsIG9mIHRoZSBpbnB1dHNcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgVGl0bGUnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgRGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBEdWUgRGF0ZScpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBQcmlvcml0eSBMZXZlbCcpO1xuXG4gICAgLy9Bc3NpZ24gZmllbGQgZWxlbWVudHMgYW4gSURcbiAgICB0YXNrVGl0bGVJbnB1dC5pZCA9ICd0YXNrLXRpdGxlLWlucHV0JztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uLWlucHV0JztcbiAgICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2stZHVlLWRhdGUtaW5wdXQnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmlkID0gJ3Rhc2stcHJpb3JpdHktaW5wdXQnO1xuXG4gICAgLy9Bc3NpZ24gb3B0aW9ucyB0byB0aGUgcHJpb3JpdHkgZHJvcCBkb3duIGZpZWxkXG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgaGlnaFByaW9yaXR5LmlubmVyVGV4dCA9ICdIaWdoIFByaW9yaXR5JztcbiAgICBtZWRpdW1Qcmlvcml0eS5pbm5lclRleHQgPSAnTWVkaXVtIFByaW9yaXR5JztcbiAgICBsb3dQcmlvcml0eS5pbm5lclRleHQgPSAnTG93IFByaW9yaXR5JztcblxuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tQcmlvcml0eUlucHV0LCBoaWdoUHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBsb3dQcmlvcml0eSk7XG5cblxuICAgIC8vQ3JlYXRlIHRoZSBidXR0b24gZWxlbWVudHMgZm9yIHRoZSBmb3JtXG4gICAgY29uc3QgbmV3VGFza1N1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5ld1Rhc2tDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vQXNzaWduIHRoZSBidXR0b24gZWxlbWVudHMgd2l0aCBhIGNsYXNzIG5hbWVcbiAgICBuZXdUYXNrU3VibWl0QnRuLmNsYXNzTmFtZSA9ICdzdWJtaXQtdGFzayc7XG4gICAgbmV3VGFza0NhbmNlbEJ0bi5jbGFzc05hbWUgPSAnY2FuY2VsLXRhc2snO1xuXG4gICAgLy9JbnNlcnQgaW5uZXIgdGV4dCBpbnRvIHRoZSBidXR0b25zIHRvIGRpc3BsYXkgdXNlXG4gICAgbmV3VGFza1N1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gICAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2FuY2VsIGFuZCByZW1vdmUgdGhlIGZvcm0gZnJvbSBcbiAgICAvL3RoZSBET01cbiAgICBuZXdUYXNrQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVGFza0Zvcm0pXG5cbiAgICAvL0FkZCBldmVudCBsaXN0ZW5lciB0byByZW5kZXIgdGhlIHRhc2sgdG8gc3VibWl0IGJ1dHRvblxuICAgIG5ld1Rhc2tTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFRhc2tUb1Byb2plY3QoY3VycmVudFByb2plY3QpO1xuICAgICAgICByZW5kZXJDcmVhdGVBZGRUYXNrQnRuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0LWNvbnRhaW5lcicpICxjdXJyZW50UHJvamVjdClcbiAgICAgICAgcmVuZGVyVGFza3MoY3VycmVudFByb2plY3QpO1xuICAgICAgICByZW1vdmVUYXNrRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgLy9BcHBlbmQgdGhlIGZpZWxkIGVsZW1lbnRzIHRvIHRoZSBnaXZlbiBjb250YWluZXIgZWxlbWVudFxuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tGb3JtV3JhcHBlciwgdGFza1RpdGxlSW5wdXQsIHRhc2tEZXNjcmlwdGlvbklucHV0LCB0YXNrRHVlRGF0ZUlucHV0LCB0YXNrUHJpb3JpdHlJbnB1dCwgbmV3VGFza1N1Ym1pdEJ0biwgbmV3VGFza0NhbmNlbEJ0bik7XG5cbiAgICAvL0FwcGVuZCB0aGUgZm9ybSB0byBhZnRlciB0aGUgXCJBZGQgVGFzayBCdXR0b25cIjtcbiAgICBhZGRUYXNrQnRuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tGb3JtV3JhcHBlciwgYWRkVGFza0J0bi5uZXh0U2libGluZyk7XG5cbn07XG5cbi8vRnVuY3Rpb24gdGhhdCByZW1vdmVzIGFsbCBvZiB0aGUgZm9ybSBlbGVtZW50cyBmcm9tIHRoZSBET01cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgLy9TZWxlY3QgYWxsIG9mIHRoZSBmb3JtIGVsZW1lbnRzIHVzaW5nIHRoZWlyIGNsYXNzIG5hbWVcbiAgICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2staW5wdXQnKTtcbiAgICBjb25zdCB0YXNrU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC10YXNrJyk7XG4gICAgY29uc3QgdGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzaycpO1xuXG4gICAgLy9Gb3IgZXZlcnkgZmllbGQgaW5wdXQgaW4gdGhlIGxpc3Qgb2YgZmllbGQgaW5wdXRzXG4gICAgaWYoIXRhc2tJbnB1dHMpe1xuICAgICAgICByZXR1cm47XG4gICAgfWVsc2V7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrSW5wdXRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vUmVtb3ZlIHRoZSBmaWVsZCBpbnB1dFxuICAgICAgICAgICAgdGFza0lucHV0c1tpXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZighdGFza1N1Ym1pdEJ0bil7XG4gICAgICAgIHJldHVybjtcbiAgICB9ZWxzZXtcbiAgICAgICAgdGFza1N1Ym1pdEJ0bi5yZW1vdmUoKTtcbiAgICAgICAgdGFza0NhbmNlbEJ0bi5yZW1vdmUoKTtcbiAgICB9O1xufTtcblxuLy9GdW5jdGlvbiB0byByZW5kZXIgdGhlIHRhc2tzIG9mIGEgcHJvamVjdCBvbiB0byB0aGUgRE9NXG4vL3RvIGJlIGRpc3BsYXllZCBvbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tzID0gZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgLy9GaXJzdCB0aGUgdGFza3MgY29udGFpbmVyIG11c3QgYmUgZW1wdGllZFxuICAgIHJlbW92ZUFsbFRhc2tzRE9NKClcblxuICAgIC8vQXNzaWduIGEgdmFyaWFibGUgdG8gYW4gYXJyYXkgb2YgdGhlIGtleSBuYW1lcyBmcm9tIGVhY2hcbiAgICAvL3Byb2plY3QuXG4gICAgbGV0IHRhc2tMaXN0ID0gcHJvamVjdC50YXNrTGlzdDtcblxuICAgIC8vU2VsZWN0IHRoZSBjb250YWluZXIgaW4gSFRNTCBkb2N1bWVudCB3aGVyZSB0YXNrcyB3aWxsXG4gICAgLy9iZSBhcHBlbmRlZCB0by5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0LWNvbnRhaW5lcicpXG5cbiAgICAvL0xvb3AgdGhyb3VnaCB0aGUga2V5IGFycmF5cyB0byBmaW5kIGFueSB0byBkbyBrZXlzIGluc2lkZSBcbiAgICAvL29mIHRoZSBwcm9qZWN0cy5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgY3VycmVudFRhc2sgPSB0YXNrTGlzdFtpXTtcbiAgICAgICAgLy9Jbml0aWFsaXplIGFsbCBvZiB0aGUgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSBcbiAgICAgICAgLy91c2VkIHRocm91Z2ggdGhlIGZ1bmN0aW9uIHRvIHRoZWlyIGRvbSBlbGVtZW50c1xuICAgICAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjaGVjayA9IHJlbmRlclRhc2tDaGVja0JveChjdXJyZW50VGFzaywgdGFza0xpc3QpO1xuICAgICAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gcmVuZGVyRGVsZXRlVGFza0J0bihwcm9qZWN0LCBjdXJyZW50VGFzayk7XG5cblxuICAgICAgICAvL0FwcGVuZCB0ZXh0IHRvIGVsZW1lbnRzIGZyb20gdGhlaXIgcmVzcGVjdGl2ZSBcbiAgICAgICAgLy9wcm9wZXJ0aWVzXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGN1cnJlbnRUYXNrLnRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBjdXJyZW50VGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSBjdXJyZW50VGFzay5kdWVEYXRlO1xuICAgICAgICBwcmlvcml0eS5pbm5lclRleHQgPSBjdXJyZW50VGFzay5wcmlvcml0eTtcblxuICAgICAgICAvL0Fzc2lnbiBhIGNsYXNzIG5hbWUgdG8gdGhlc2UgZWxlbWVudHMgZm9yIGZ1dHVyZVxuICAgICAgICAvL3N0eWxpbmcuXG4gICAgICAgIGFzc2lnbkNsYXNzKCd0YXNrLXByb3BlcnRpZXMnLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgICAgICB0YXNrV3JhcHBlci5jbGFzc05hbWUgPSAndGFzay13cmFwcGVyJztcblxuICAgICAgICAvL0FwcGVuZCBhbGwgb2YgdGhlIG5ldyBlbGVtZW50cyB0byB0aGUgY29udGFpbmVyXG4gICAgICAgIC8vZm9yIHRoaXMgdG8gZG8gb2JqZWN0XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tXcmFwcGVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVjaywgdGFza0RlbGV0ZUJ0bik7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKVxuICAgIH07XG59O1xuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgYW5kIHJldHVybiB0aGUgY2hlY2tib3ggZm9yIGVhY2ggdGFza1xuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tDaGVja0JveCA9IGZ1bmN0aW9uKHRoaXNUYXNrLCB0YXNrQXJyYXkpe1xuICAgIC8vQ3JlYXRlIHdyYXBwZXIgZm9yIGNoZWNrXG4gICAgY29uc3QgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkuaW5kZXhPZih0aGlzVGFzaykpO1xuICAgIFxuICAgIC8vQ3JlYXRlIHRoZSBjaGVja2JveCBlbGVtZW50XG4gICAgY29uc3QgdGFza0NoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrQ2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgdGFza0NoZWNrQm94LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzVGFzay50aXRsZSArICh0YXNrQXJyYXkuaW5kZXhPZih0aGlzVGFzaykpfS1jaGVjay1ib3hgKTtcblxuICAgIC8vQ3JlYXRlIHRoZSBsYWJlbCBmb3IgdGhlIGNoZWNrYm94XG4gICAgY29uc3QgdGFza0NoZWNrQm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tDaGVja0JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7dGhpc1Rhc2sudGl0bGUgKyAodGFza0FycmF5LmluZGV4T2YodGhpc1Rhc2spKX0tY2hlY2stYm94YCk7XG4gICAgdGFza0NoZWNrQm94LmlubmVyVGV4dCA9ICdDb21wbGV0ZWQ/JztcblxuICAgIC8vRXZlbnQgbGlzdGVuZXIgZm9yIGNoZWNrYm94XG4gICAgdGFza0NoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT4ge1xuICAgICAgICB0aGlzVGFzay5jaGFuZ2VDb21wbGV0ZVN0YXR1cygpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzVGFzayk7XG4gICAgfSk7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50cyB0byB0aGUgd3JhcHBlclxuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tDaGVjaywgdGFza0NoZWNrQm94TGFiZWwsIHRhc2tDaGVja0JveCk7XG5cbiAgICByZXR1cm4gdGFza0NoZWNrO1xuXG59XG5cbi8vRnVuY3Rpb24gY3JlYXRlcyBhbmQgcmV0dXJucyB0aGUgJ2RlbGV0ZSBidXR0b24nIHdoaWNoIHdpbGwgXG4vL2JlIHVzZWQgb2YgZWFjaCB0YXNrXG5leHBvcnQgY29uc3QgcmVuZGVyRGVsZXRlVGFza0J0biA9IGZ1bmN0aW9uKHRoaXNQcm9qZWN0LCB0aGlzVGFzayl7XG4gICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRhc2tCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICB0aGlzUHJvamVjdC5yZW1vdmVUYXNrKHRoaXNUYXNrKTtcbiAgICAgICAgcmVuZGVyVGFza3ModGhpc1Byb2plY3QpO1xuICAgIH0pXG4gICAgcmV0dXJuIGRlbGV0ZVRhc2tCdG47XG59O1xuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgb3VyIFwiQWRkIFRhc2sgQnV0dG9uXCIgZ2l2ZW4gYSBwYXJlbnQgZWxlbWVudFxuLy90byBhcHBlbmQgdG8uXG5leHBvcnQgY29uc3QgcmVuZGVyQ3JlYXRlQWRkVGFza0J0biA9IGZ1bmN0aW9uKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdCl7XG4gICAgLy9DcmVhdGUgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggdGV4dC5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xuXG4gICAgLy9BZGQgY2xhc3MgdG8gdGhlIGJ1dHRvblxuICAgIGFkZFRhc2tCdG4uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1idXR0b25cIjtcblxuICAgIC8vQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uIHdoaWNoIG9wZW5zIHRoZSBcbiAgICAvL1wiVGFzayBGb3JtXCIgb24gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZ2l2ZW4uXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgb3BlblRhc2tGb3JtKGVsZW1lbnRUb0FwcGVuZFRvLCBjdXJyZW50UHJvamVjdClcbiAgICAgcmVtb3ZlQWRkVGFza0J1dHRvbigpO1xuICAgIH0pXG5cbiAgICAvL0FwcGVuZCB0aGUgYnV0dG9uIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgIGVsZW1lbnRUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xufTtcblxuLy9GdW5jdGlvbiB0byBhZGQgYSBcIlRhc2tcIiB0byBhIHByb2plY3QncyB0YXNrIGFycmF5LlxuZXhwb3J0IGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kdWUtZGF0ZS1pbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1pbnB1dCcpO1xuICAgIFxuICAgIGlmKCF0aXRsZUlucHV0LnZhbHVlIHx8ICFkZXNjcmlwdGlvbklucHV0LnZhbHVlIHx8ICFkdWVEYXRlSW5wdXQudmFsdWUgfHwgIXByaW9yaXR5SW5wdXQudmFsdWUpe1xuICAgICAgICBhbGVydCgnQWxsIGZpZWxkcyBzaG91bGQgYmUgY29tcGxldGVkIGJlZm9yZSBzdWJtaXR0aW5nIScpO1xuICAgIH0gZWxzZXtcbiAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dC52YWx1ZSlcbiAgICB9O1xufVxuXG4vL0Z1bmN0aW9uIHRvIHJlbW92ZSBhbGwgdGFza3MgZnJvbSB0aGUgc2NyZWVuLlxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbFRhc2tzRE9NID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkaXNwbGF5ZWRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXdyYXBwZXInKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIGRpc3BsYXllZFRhc2tzKXtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICB9O1xufVxuXG4vL0Z1bmN0aW9uIHJlbW92ZWQgdGhlICdBZGQgVGFzaycgYnV0dG9uIGZyb20gdGhlIERPTVxuZXhwb3J0IGNvbnN0IHJlbW92ZUFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgaWYoYWRkVGFza0J1dHRvbil7XG4gICAgICAgIGFkZFRhc2tCdXR0b24ucmVtb3ZlKCk7XG4gICAgfTtcbn1cbiIsIi8vRnVuY3Rpb24gdG8gaGVscCBhcHBlbmQgbXVsdGlwbGUgY2hpbGRyZW4gYXQgb25jZSB0byBhIHBhcmVudFxuLy9lbGVtZW50XG5leHBvcnQgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbihwYXJlbnQsIC4uLmNoaWxkcmVuKXsgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuW2ldKTtcbiAgICB9O1xufTtcblxuLy9GdW5jdGlvbiB0byBhbGxvdyBtZSB0byBhZGQgdGhlIHNhbWUgY2xhc3MgbmFtZSB0byBtdWx0aXBsZVxuLy9lbGVtZW50cy5cbmV4cG9ydCBjb25zdCBhc3NpZ25DbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgLi4uZWxlbWVudHMpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGVsZW1lbnRzW2ldLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJlbmRlck5ld1Byb2plY3RCdG4gfSBmcm9tIFwiLi9oYW5kbGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleFN0eWxlLmNzcyc7XG5cbnJlbmRlck5ld1Byb2plY3RCdG4oQ29udHJvbGxlci5wcm9qZWN0c0FycmF5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==