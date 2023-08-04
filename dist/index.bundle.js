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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --color-secondary: #101d2c;\n  --color-grey-light-1: #f9f7f6;\n  --color-grey-light-2: #aaa;\n  --color-grey-dark-1: #54483a;\n  --color-grey-dark-2: #6d5d4b;\n\n  /* FONT VARIABLES */\n  --font-primary: \"Nunito\", sans-serif;\n  --font-display: \"Josefin Sans\", sans-serif;\n\n  /* RESPONSIVE BREAKPOINTS */\n  --bp-largest: 75em;\n  --bp-large: 62.5em;\n  --bp-medium: 50em;\n  --bp-small: 37.5em;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n\n  @media only screen and (max-width: var(--bp-largest)) {\n    font-size: 50%;\n  }\n}\n\nbody {\n  font-family: var(--font-primary);\n  color: var(--color-grey-dark-2);\n  font-weight: 300;\n  line-height: 1.6;\n}\n\n.container {\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n.header {\n  height: 8rem;\n  background-color: var(--color-grey-dark-2);\n}\n\n.navigation {\n  display: flex;\n  font-size: 1.6rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem;\n}\n\n.logo {\n  width: 40%;\n}\n\n.logo a {\n  text-decoration: none;\n  font-weight: bolder;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 3rem;\n  color: var(--color-grey-light-1);\n}\n\n.nav-list {\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  width: 60%;\n}\n\n.nav-item {\n  margin-left: 4rem;\n}\n\n.nav-item a {\n  text-decoration: none;\n  color: var(--color-grey-light-1);\n  font-size: 1.8rem;\n}\n\nh1 {\n  margin-top: 3rem;\n}\n\n.shows-list {\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\n  grid-gap: 4rem;\n}\n\n.show-card {\n  border: 1px solid #ccc;\n  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 0.5rem;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.show-image {\n  width: 100%;\n  height: 70%;\n}\n\n.show-title {\n  margin-top: 1rem;\n  font-size: 1.6rem;\n  font-weight: bold;\n  padding: 1rem;\n}\n\n/* ///////////////////style comment////////////////////////// */\n.btn {\n  background-color: transparent;\n  margin: 1rem;\n  padding: 1rem 2rem;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.btn-comment {\n  justify-self: end;\n  margin-top: auto;\n}\n\n.btn-comment:hover {\n  background-color: var(--color-secondary);\n  color: var(--color-grey-light-1);\n}\n\n.shows-comment {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  position: fixed;\n  left: 0;\n  top: 0;\n  align-items: center;\n  flex-direction: column;\n  padding: 4rem;\n  overflow: scroll;\n  display: none;\n}\n\n.container-comment {\n  max-width: 100rem;\n  padding: 2rem 0 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.6rem;\n  border: 3px solid var(--color-secondary);\n  position: relative;\n}\n\n.image-container {\n  width: 50%;\n  height: 50%;\n}\n\n.comment-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.shows-name {\n  display: flex;\n  flex-direction: column;\n  color: var(--color-secondary);\n  padding: 0 8rem;\n}\n\n.show-detail {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-height: 60rem;\n  gap: 4rem;\n}\n\n.detail span {\n  margin: 0 4rem;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 40%;\n}\n\n.nameInput,\n.commentInput {\n  width: 100%;\n  padding: 1rem;\n}\n\n.close-btn {\n  font-weight: bolder;\n  font-size: 4rem;\n  border: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.box-comment {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n  background-color: var(--color-secondary);\n  color: var(--color-grey-light-1);\n  padding: 3rem 2rem;\n  width: 80%;\n}\n\n.footer {\n  padding: 8rem 4rem;\n  font-size: 1.8rem;\n  text-transform: capitalize;\n  background-color: var(--color-grey-dark-2);\n  color: var(--color-grey-light-1);\n}\n\n/* //////// Style Box of Like ///////// */\n.box-like {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 4rem;\n}\n\n.btn-like {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.btn-like span {\n  font-size: 2.5rem;\n}\n\n.counter-like {\n  font-size: 2.2rem;\n  font-weight: bolder;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayCard.js */ \"./src/modules/displayCard.js\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n\n\n\n\nconst tvAPI = new _modules_api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  try {\n    const showsData = await tvAPI.searchShows('byos');\n    (0,_modules_displayCard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(showsData);\n  } catch (error) {\n    throw new Error(`Error fetching data: ${error}`);\n  }\n});\n\n\n//# sourceURL=webpack://js-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ShowAPI {\n  constructor() {\n    this.API = 'https://api.tvmaze.com';\n  }\n\n  async searchShows(query) {\n    try {\n      const response = await fetch(`${this.API}/search/shows?q=${query}`);\n      const data = await response.json();\n      const result = await data.map((show) => show.show);\n      return result;\n    } catch (error) {\n      throw new Error('Error fetching data:', error);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowAPI);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentsApi.js":
/*!************************************!*\
  !*** ./src/modules/commentsApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createComment: () => (/* binding */ createComment),\n/* harmony export */   getItemComments: () => (/* binding */ getItemComments)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst appId = '8ge52RZ4xe8gKMYNyxDN';\n\n// Function to create a new app\n/* async function createApp() {\n  const url = `${baseUrl}apps/`;\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n    });\n    if (response.ok) {\n      const data = await response.text(); // Get the response as text\n      appId = data.trim(); // Trim whitespace from the response\n      console.log('App created. App ID:', appId);\n    } else {\n      console.error('Failed to create app:', response.status, response.statusText);\n    }\n  } catch (error) {\n    console.error('Error creating app:', error);\n  }\n} */\n\n// Function to create a new comment for an item\nasync function createComment(itemId, username, comment) {\n  const url = `${baseUrl}apps/${appId}/comments`;\n  const data = {\n    item_id: itemId,\n    username,\n    comment,\n  };\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n    return response.status === 201;\n  } catch (error) {\n    return false;\n  }\n}\n\n// Function to get comments for a specific item\nasync function getItemComments(itemId) {\n  const url = `${baseUrl}apps/${appId}/comments?item_id=${itemId}`;\n  try {\n    const response = await fetch(url);\n    if (response.ok) {\n      const comments = await response.json();\n      return comments;\n    }\n    return [];\n  } catch (error) {\n    return [];\n  }\n}\n\n\n//# sourceURL=webpack://js-capstone-project/./src/modules/commentsApi.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countComments)\n/* harmony export */ });\nfunction countComments() {\n  const commentElements = document.querySelectorAll('.itemComment');\n  const commentCount = commentElements.length;\n  return commentCount;\n}\n\n\n//# sourceURL=webpack://js-capstone-project/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/displayCard.js":
/*!************************************!*\
  !*** ./src/modules/displayCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likeApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeApi.js */ \"./src/modules/likeApi.js\");\n/* harmony import */ var _eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventHandlers.js */ \"./src/modules/eventHandlers.js\");\n\n\n\nconst showsList = document.getElementById('shows-list');\n\nconst init = async (Data) => {\n  const likesPromises = Data.map(async (item) => {\n    const likes = await (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_0__.getItemLikes)(item.id);\n    const numOfLike = likes.find((like) => like.item_id === item.id);\n    return { item, numOfLike };\n  });\n\n  const itemsWithLikes = await Promise.all(likesPromises);\n\n  itemsWithLikes.forEach(({ item, numOfLike }) => {\n    const showCard = document.createElement('div');\n    showCard.className = 'show-card';\n    showCard.dataset.id = item.id;\n\n    showCard.innerHTML = `\n      <img class=\"show-image\" src=\"${item.image.medium}\">\n      <div class=\"show-title\">${item.name}</div>\n      <div class=\"box-like\">\n        <button class=\"btn-like\"><span>👍</span></button>\n        <span class=\"counter-like\">${numOfLike ? numOfLike.likes : 0}</span>\n      </div>\n      <button class=\"btn btn-comment\">Add Comment</button>\n    `;\n\n    showsList.appendChild(showCard);\n\n    (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ showCard, itemId: item.id, itemData: item });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/modules/displayCard.js?");

/***/ }),

/***/ "./src/modules/displayDetailCard.js":
/*!******************************************!*\
  !*** ./src/modules/displayDetailCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearField: () => (/* binding */ clearField),\n/* harmony export */   displayComments: () => (/* binding */ displayComments),\n/* harmony export */   displayCounterOfComments: () => (/* binding */ displayCounterOfComments),\n/* harmony export */   displayDetailCard: () => (/* binding */ displayDetailCard)\n/* harmony export */ });\n/* harmony import */ var _commentsApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsApi.js */ \"./src/modules/commentsApi.js\");\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countComments.js */ \"./src/modules/countComments.js\");\n\n\n\nconst displayDetailCard = (data) => {\n  const showDetail = document.querySelector('.show-detail');\n  document.getElementById('shows-comment').style.display = 'flex';\n  const htmlDetail = `<div class=\"image-container\">\n                          <img class=\"comment-image\" src=\"${data.image.medium}\" />\n                      </div>\n                      <div class=\"shows-name\">\n                        <h2>${data.name}</h2>\n                        <div class=\"detail\">\n                          <span><strong>type:</strong> ${data.type}</span>\n                          <span><strong>ended:</strong> ${data.ended}</span>\n                          <span><strong>language:</strong> ${data.language}</span>\n                          <div>\n                            <strong>summary:</strong>\n                            <p>\n                            ${data.summary}\n                            </p>\n                          </div>\n                         </div>\n                      </div>\n                          `;\n\n  showDetail.innerHTML = htmlDetail;\n};\n\nconst displayComments = async (commentId) => {\n  const listCommet = document.querySelector('.listComment');\n  const comments = await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_0__.getItemComments)(commentId);\n  listCommet.innerHTML = '';\n\n  comments.forEach((comment) => {\n    const li = document.createElement('li');\n    li.classList.add('itemComment');\n    li.innerHTML = `Date: ${comment.creation_date} <strong>${comment.username}</strong>  : ${comment.comment} `;\n    listCommet.appendChild(li);\n  });\n};\n\nconst displayCounterOfComments = () => {\n  const numberCommet = document.querySelector('.numberCommet');\n  const commentCounter = (0,_countComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  numberCommet.innerHTML = `comments (${commentCounter})`;\n};\n\nconst clearField = (nameInput, commentInput) => {\n  nameInput.value = '';\n  commentInput.value = '';\n};\n\n\n\n//# sourceURL=webpack://js-capstone-project/./src/modules/displayDetailCard.js?");

/***/ }),

/***/ "./src/modules/eventHandlers.js":
/*!**************************************!*\
  !*** ./src/modules/eventHandlers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayDetailCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayDetailCard.js */ \"./src/modules/displayDetailCard.js\");\n/* harmony import */ var _commentsApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsApi.js */ \"./src/modules/commentsApi.js\");\n/* harmony import */ var _likeApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeApi.js */ \"./src/modules/likeApi.js\");\n\n\n\n\nconst initializeEventHandlers = (item) => {\n  const { showCard, itemId, itemData } = item;\n\n  const likeButton = showCard.querySelector('.btn-like');\n  likeButton.addEventListener('click', async () => {\n    try {\n      await (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_2__.createLike)(itemId);\n      const likes = await (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_2__.getItemLikes)(itemId);\n      const numOfLike = likes.find((like) => like.item_id === itemId);\n      const counterLike = showCard.querySelector('.counter-like');\n      counterLike.textContent = numOfLike ? numOfLike.likes : 0;\n    } catch (error) {\n      throw new Error(`Error fetching data: ${error}`);\n    }\n  });\n\n  const commentButton = showCard.querySelector('.btn-comment');\n  commentButton.addEventListener('click', async () => {\n    try {\n      await (0,_displayDetailCard_js__WEBPACK_IMPORTED_MODULE_0__.displayDetailCard)(itemData);\n      await (0,_displayDetailCard_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(itemId);\n      await (0,_displayDetailCard_js__WEBPACK_IMPORTED_MODULE_0__.displayCounterOfComments)();\n\n      const addComment = document.querySelector('.form');\n      const nameInput = document.querySelector('.nameInput');\n      const commentInput = document.querySelector('.commentInput');\n\n      addComment.addEventListener('submit', async (e) => {\n        e.preventDefault();\n\n        await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_1__.createComment)(itemId, nameInput.value, commentInput.value);\n        await (0,_displayDetailCard_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(itemId);\n        await (0,_displayDetailCard_js__WEBPACK_IMPORTED_MODULE_0__.displayCounterOfComments)();\n\n        (0,_displayDetailCard_js__WEBPACK_IMPORTED_MODULE_0__.clearField)(nameInput, commentInput);\n      });\n    } catch (error) {\n      throw new Error(`Error fetching data: ${error}`);\n    }\n  });\n\n  const closeBtn = document.querySelector('.close-btn');\n  closeBtn.addEventListener('click', () => {\n    document.getElementById('shows-comment').style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeEventHandlers);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/modules/eventHandlers.js?");

/***/ }),

/***/ "./src/modules/likeApi.js":
/*!********************************!*\
  !*** ./src/modules/likeApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLike: () => (/* binding */ createLike),\n/* harmony export */   getItemLikes: () => (/* binding */ getItemLikes)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst appId = 'g5tsgrRdaxLZ6ykMVZ2Z';\n\n// Function to create a new like for an item\nasync function createLike(itemId) {\n  const url = `${baseUrl}apps/${appId}/likes`;\n  const data = {\n    item_id: itemId,\n  };\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n    return response.status === 201;\n  } catch (error) {\n    return false;\n  }\n}\n\n// Function to get likes for a specific item\nasync function getItemLikes(itemId) {\n  const url = `${baseUrl}apps/${appId}/likes`;\n  const params = new URLSearchParams({ item_id: itemId });\n  try {\n    const response = await fetch(`${url}?${params}`);\n    if (response.ok) {\n      const likes = await response.json();\n      return likes;\n    }\n    return [];\n  } catch (error) {\n    return [];\n  }\n}\n\n//# sourceURL=webpack://js-capstone-project/./src/modules/likeApi.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;