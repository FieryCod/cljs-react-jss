/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/react-jss.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/css-jss/dist/css-jss.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/css-jss/dist/css-jss.esm.js ***!
  \**************************************************/
/*! exports provided: default, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return createCss; });
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-preset-default */ "./node_modules/jss-preset-default/dist/jss-preset-default.esm.js");



// I have been trying to benchmark and I have seen a slow down after about 10k rules.
// Since we are in a single sheet mode, user shouldn't care about this.
var MAX_RULES_PER_SHEET = 10000;
var defaultJss = Object(jss__WEBPACK_IMPORTED_MODULE_0__["create"])(Object(jss_preset_default__WEBPACK_IMPORTED_MODULE_1__["default"])());

var createCss = function createCss(jss) {
  if (jss === void 0) {
    jss = defaultJss;
  }

  var cache = new Map();
  var ruleIndex = 0;
  var sheet;

  var getSheet = function getSheet() {
    if (!sheet || sheet.rules.index.length > MAX_RULES_PER_SHEET) {
      sheet = jss.createStyleSheet().attach();
    }

    return sheet;
  };

  function css() {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments; // We can avoid the need for stringification with a babel plugin,
    // which could generate a hash at build time and add it to the object.

    var argsStr = JSON.stringify(args);
    var cached = cache.get(argsStr);
    if (cached) return cached.className;
    var flatArgs = []; // Flatten arguments which can be
    // - style objects
    // - array of style objects
    // - arrays of style objects

    for (var argIndex in args) {
      var arg = args[argIndex];

      if (!Array.isArray(arg)) {
        flatArgs.push(arg);
        continue;
      }

      for (var innerArgIndex = 0; innerArgIndex < arg.length; innerArgIndex++) {
        flatArgs.push(arg[innerArgIndex]);
      }
    }

    var mergedStyle = {};
    var labels = [];

    for (var i = 0; i < flatArgs.length; i++) {
      var style = flatArgs[i];
      if (!style) continue; // It can be a class name that css() has previously generated.

      if (typeof style === 'string') {
        // eslint-disable-next-line no-shadow
        var _cached = cache.get(style);

        if (_cached) {
          // eslint-disable-next-line prefer-spread
          if (_cached.labels.length) labels.push.apply(labels, _cached.labels);
          style = _cached.style;
        }
      }

      if (style.label && labels.indexOf(style.label) === -1) labels.push(style.label);
      Object.assign(mergedStyle, style);
    }

    delete mergedStyle.label;
    var label = labels.length === 0 ? 'css' : labels.join('-');
    var key = label + "-" + ruleIndex++;
    getSheet().addRule(key, mergedStyle);
    var className = getSheet().classes[key];
    var cacheValue = {
      style: mergedStyle,
      labels: labels,
      className: className
    };
    cache.set(argsStr, cacheValue);
    cache.set(className, cacheValue);
    return className;
  } // For testing only.


  css.getSheet = getSheet;
  return css;
};

var index = createCss();

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/css-vendor/dist/css-vendor.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/css-vendor/dist/css-vendor.esm.js ***!
  \********************************************************/
/*! exports provided: prefix, supportedKeyframes, supportedProperty, supportedValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedKeyframes", function() { return supportedKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedProperty", function() { return supportedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedValue", function() { return supportedValue; });
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");



// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"] && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(p.noPrefill));
  return a;
}, []);

var el;
var cache = {};

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && cache[prop] != null) {
    return cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/*!***************************************************!*\
  !*** ./node_modules/is-in-browser/dist/module.js ***!
  \***************************************************/
/*! exports provided: isBrowser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");


/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (camelCase);


/***/ }),

/***/ "./node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");


/**
 * Set selector.
 *
 * @param {Object} original rule
 * @param {String} className class string
 * @return {Boolean} flag, indicating function was successfull or not
 */
function registerClass(rule, className) {
  // Skip falsy values
  if (!className) return true; // Support array of class names `{composes: ['foo', 'bar']}`

  if (Array.isArray(className)) {
    for (var index = 0; index < className.length; index++) {
      var isSetted = registerClass(rule, className[index]);
      if (!isSetted) return false;
    }

    return true;
  } // Support space separated class names `{composes: 'foo bar'}`


  if (className.indexOf(' ') > -1) {
    return registerClass(rule, className.split(' '));
  }

  var _ref = rule.options,
      parent = _ref.parent; // It is a ref to a local rule.

  if (className[0] === '$') {
    var refRule = parent.getRule(className.substr(1));

    if (!refRule) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "[JSS] Referenced rule is not defined. \n" + rule.toString()) : undefined;
      return false;
    }

    if (refRule === rule) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "[JSS] Cyclic composition detected. \n" + rule.toString()) : undefined;
      return false;
    }

    parent.classes[rule.key] += " " + parent.classes[refRule.key];
    return true;
  }

  parent.classes[rule.key] += " " + className;
  return true;
}
/**
 * Convert compose property to additional class, remove property from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssCompose() {
  function onProcessStyle(style, rule) {
    if (!('composes' in style)) return style;
    registerClass(rule, style.composes); // Remove composes property to prevent infinite loop.

    delete style.composes;
    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssCompose);


/***/ }),

/***/ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");


var px = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.px : 'px';
var ms = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.ms : 'ms';
var percent = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (!value) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    var unit = options[prop] || units[prop];

    if (unit) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (defaultUnit);


/***/ }),

/***/ "./node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A scheme for converting properties from array to regular style.
 * All properties listed below will be transformed to a string separated by space.
 */
var propArray = {
  'background-size': true,
  'background-position': true,
  border: true,
  'border-bottom': true,
  'border-left': true,
  'border-top': true,
  'border-right': true,
  'border-radius': true,
  'border-image': true,
  'border-width': true,
  'border-style': true,
  'border-color': true,
  'box-shadow': true,
  flex: true,
  margin: true,
  padding: true,
  outline: true,
  'transform-origin': true,
  transform: true,
  transition: true
  /**
   * A scheme for converting arrays to regular styles inside of objects.
   * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
   */

};
var propArrayInObj = {
  position: true,
  // background-position
  size: true // background-size

  /**
   * A scheme for parsing and building correct styles from passed objects.
   */

};
var propObj = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  background: {
    attachment: null,
    color: null,
    image: null,
    position: null,
    repeat: null
  },
  border: {
    width: null,
    style: null,
    color: null
  },
  'border-top': {
    width: null,
    style: null,
    color: null
  },
  'border-right': {
    width: null,
    style: null,
    color: null
  },
  'border-bottom': {
    width: null,
    style: null,
    color: null
  },
  'border-left': {
    width: null,
    style: null,
    color: null
  },
  outline: {
    width: null,
    style: null,
    color: null
  },
  'list-style': {
    type: null,
    position: null,
    image: null
  },
  transition: {
    property: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed for avoiding comilation issues with jss-plugin-camel-case
    delay: null
  },
  animation: {
    name: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    delay: null,
    'iteration-count': null,
    iterationCount: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    direction: null,
    'fill-mode': null,
    fillMode: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'play-state': null,
    playState: null // Needed to avoid compilation issues with jss-plugin-camel-case

  },
  'box-shadow': {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: null,
    inset: null
  },
  'text-shadow': {
    x: 0,
    y: 0,
    blur: null,
    color: null
  }
  /**
   * A scheme for converting non-standart properties inside object.
   * For e.g.: include 'border-radius' property inside 'border' object.
   */

};
var customPropObj = {
  border: {
    radius: 'border-radius',
    image: 'border-image',
    width: 'border-width',
    style: 'border-style',
    color: 'border-color'
  },
  'border-bottom': {
    width: 'border-bottom-width',
    style: 'border-bottom-style',
    color: 'border-bottom-color'
  },
  'border-top': {
    width: 'border-top-width',
    style: 'border-top-style',
    color: 'border-top-color'
  },
  'border-left': {
    width: 'border-left-width',
    style: 'border-left-style',
    color: 'border-left-color'
  },
  'border-right': {
    width: 'border-right-width',
    style: 'border-right-style',
    color: 'border-right-color'
  },
  background: {
    size: 'background-size',
    image: 'background-image'
  },
  font: {
    style: 'font-style',
    variant: 'font-variant',
    weight: 'font-weight',
    stretch: 'font-stretch',
    size: 'font-size',
    family: 'font-family',
    lineHeight: 'line-height',
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'line-height': 'line-height'
  },
  flex: {
    grow: 'flex-grow',
    basis: 'flex-basis',
    direction: 'flex-direction',
    wrap: 'flex-wrap',
    flow: 'flex-flow',
    shrink: 'flex-shrink'
  },
  align: {
    self: 'align-self',
    items: 'align-items',
    content: 'align-content'
  },
  grid: {
    'template-columns': 'grid-template-columns',
    templateColumns: 'grid-template-columns',
    'template-rows': 'grid-template-rows',
    templateRows: 'grid-template-rows',
    'template-areas': 'grid-template-areas',
    templateAreas: 'grid-template-areas',
    template: 'grid-template',
    'auto-columns': 'grid-auto-columns',
    autoColumns: 'grid-auto-columns',
    'auto-rows': 'grid-auto-rows',
    autoRows: 'grid-auto-rows',
    'auto-flow': 'grid-auto-flow',
    autoFlow: 'grid-auto-flow',
    row: 'grid-row',
    column: 'grid-column',
    'row-start': 'grid-row-start',
    rowStart: 'grid-row-start',
    'row-end': 'grid-row-end',
    rowEnd: 'grid-row-end',
    'column-start': 'grid-column-start',
    columnStart: 'grid-column-start',
    'column-end': 'grid-column-end',
    columnEnd: 'grid-column-end',
    area: 'grid-area',
    gap: 'grid-gap',
    'row-gap': 'grid-row-gap',
    rowGap: 'grid-row-gap',
    'column-gap': 'grid-column-gap',
    columnGap: 'grid-column-gap'
  }
};

/* eslint-disable no-use-before-define */

/**
 * Map values by given prop.
 *
 * @param {Array} array of values
 * @param {String} original property
 * @param {String} original rule
 * @return {String} mapped values
 */
function mapValuesByProp(value, prop, rule) {
  return value.map(function (item) {
    return objectToArray(item, prop, rule, false, true);
  });
}
/**
 * Convert array to nested array, if needed
 */


function processArray(value, prop, scheme, rule) {
  if (scheme[prop] == null) return value;
  if (value.length === 0) return [];
  if (Array.isArray(value[0])) return processArray(value[0], prop, scheme, rule);

  if (typeof value[0] === 'object') {
    return mapValuesByProp(value, prop, rule);
  }

  return [value];
}
/**
 * Convert object to array.
 */


function objectToArray(value, prop, rule, isFallback, isInArray) {
  if (!(propObj[prop] || customPropObj[prop])) return [];
  var result = []; // Check if exists any non-standard property

  if (customPropObj[prop]) {
    // eslint-disable-next-line no-param-reassign
    value = customPropsToStyle(value, rule, customPropObj[prop], isFallback);
  } // Pass throught all standart props


  if (Object.keys(value).length) {
    for (var baseProp in propObj[prop]) {
      if (value[baseProp]) {
        if (Array.isArray(value[baseProp])) {
          result.push(propArrayInObj[baseProp] === null ? value[baseProp] : value[baseProp].join(' '));
        } else result.push(value[baseProp]);

        continue;
      } // Add default value from props config.


      if (propObj[prop][baseProp] != null) {
        result.push(propObj[prop][baseProp]);
      }
    }
  }

  if (!result.length || isInArray) return result;
  return [result];
}
/**
 * Convert custom properties values to styles adding them to rule directly
 */


function customPropsToStyle(value, rule, customProps, isFallback) {
  for (var prop in customProps) {
    var propName = customProps[prop]; // If current property doesn't exist already in rule - add new one

    if (typeof value[prop] !== 'undefined' && (isFallback || !rule.prop(propName))) {
      var _styleDetector;

      var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value[prop], _styleDetector), rule)[propName]; // Add style directly in rule

      if (isFallback) rule.style.fallbacks[propName] = appendedValue;else rule.style[propName] = appendedValue;
    } // Delete converted property to avoid double converting


    delete value[prop];
  }

  return value;
}
/**
 * Detect if a style needs to be converted.
 */


function styleDetector(style, rule, isFallback) {
  for (var prop in style) {
    var value = style[prop];

    if (Array.isArray(value)) {
      // Check double arrays to avoid recursion.
      if (!Array.isArray(value[0])) {
        if (prop === 'fallbacks') {
          for (var index = 0; index < style.fallbacks.length; index++) {
            style.fallbacks[index] = styleDetector(style.fallbacks[index], rule, true);
          }

          continue;
        }

        style[prop] = processArray(value, prop, propArray, rule); // Avoid creating properties with empty values

        if (!style[prop].length) delete style[prop];
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        style.fallbacks = styleDetector(style.fallbacks, rule, true);
        continue;
      }

      style[prop] = objectToArray(value, prop, rule, isFallback); // Avoid creating properties with empty values

      if (!style[prop].length) delete style[prop];
    } // Maybe a computed value resulting in an empty string
    else if (style[prop] === '') delete style[prop];
  }

  return style;
}
/**
 * Adds possibility to write expanded styles.
 */


function jssExpand() {
  function onProcessStyle(style, rule) {
    if (!style || rule.type !== 'style') return style;

    if (Array.isArray(style)) {
      // Pass rules one by one and reformat them
      for (var index = 0; index < style.length; index++) {
        style[index] = styleDetector(style[index], rule);
      }

      return style;
    }

    return styleDetector(style, rule);
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssExpand);


/***/ }),

/***/ "./node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");


/* eslint-disable no-use-before-define */

var isObject = function isObject(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
};

var valueNs = "extendCurrValue" + Date.now();

function mergeExtend(style, rule, sheet, newStyle) {
  var extendType = typeof style.extend; // Extend using a rule name.

  if (extendType === 'string') {
    if (!sheet) return;
    var refRule = sheet.getRule(style.extend);
    if (!refRule) return;

    if (refRule === rule) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "[JSS] A rule tries to extend itself \n" + rule.toString()) : undefined;
      return;
    }

    var parent = refRule.options.parent;

    if (parent) {
      var originalStyle = parent.rules.raw[style.extend];
      extend(originalStyle, rule, sheet, newStyle);
    }

    return;
  } // Extend using an array of objects.


  if (Array.isArray(style.extend)) {
    for (var index = 0; index < style.extend.length; index++) {
      extend(style.extend[index], rule, sheet, newStyle);
    }

    return;
  } // Extend is a style object.


  for (var prop in style.extend) {
    if (prop === 'extend') {
      extend(style.extend.extend, rule, sheet, newStyle);
      continue;
    }

    if (isObject(style.extend[prop])) {
      if (!(prop in newStyle)) newStyle[prop] = {};
      extend(style.extend[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    newStyle[prop] = style.extend[prop];
  }
}

function mergeRest(style, rule, sheet, newStyle) {
  // Copy base style.
  for (var prop in style) {
    if (prop === 'extend') continue;

    if (isObject(newStyle[prop]) && isObject(style[prop])) {
      extend(style[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    if (isObject(style[prop])) {
      newStyle[prop] = extend(style[prop], rule, sheet);
      continue;
    }

    newStyle[prop] = style[prop];
  }
}
/**
 * Recursively extend styles.
 */


function extend(style, rule, sheet, newStyle) {
  if (newStyle === void 0) {
    newStyle = {};
  }

  mergeExtend(style, rule, sheet, newStyle);
  mergeRest(style, rule, sheet, newStyle);
  return newStyle;
}
/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */


function jssExtend() {
  function onProcessStyle(style, rule, sheet) {
    if ('extend' in style) return extend(style, rule, sheet);
    return style;
  }

  function onChangeValue(value, prop, rule) {
    if (prop !== 'extend') return value; // Value is empty, remove properties set previously.

    if (value == null || value === false) {
      // $FlowFixMe: Flow complains because there is no indexer property in StyleRule
      for (var key in rule[valueNs]) {
        rule.prop(key, null);
      } // $FlowFixMe: Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = null;
      return null;
    }

    if (typeof value === 'object') {
      // $FlowFixMe: This will be an object
      for (var _key in value) {
        rule.prop(_key, value[_key]);
      } // $FlowFixMe: Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = value;
    } // Make sure we don't set the value in the core.


    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssExtend);


/***/ }),

/***/ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss__WEBPACK_IMPORTED_MODULE_1__["RuleList"](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    options.sheet.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;
    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssGlobal);


/***/ }),

/***/ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");



var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : undefined;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        container.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssNested);


/***/ }),

/***/ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssPropsSort);


/***/ }),

/***/ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = Object(jss__WEBPACK_IMPORTED_MODULE_1__["createRule"])(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};

        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === 'function') {
               true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, '[JSS] Function values inside function rules are not supported.') : undefined;
              break;
            }
          }
        }
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (functionPlugin);


/***/ }),

/***/ "./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var isObservable = function isObservable(value) {
  return value && value[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] && value === value[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]]();
};

function observablePlugin(updateOptions) {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (!isObservable(decl)) return null; // Cast `decl` to `Observable`, since it passed the type guard.

      var style$ = decl;
      var rule = Object(jss__WEBPACK_IMPORTED_MODULE_1__["createRule"])(name, {}, options); // TODO
      // Call `stream.subscribe()` returns a subscription, which should be explicitly
      // unsubscribed from when we know this sheet is no longer needed.

      style$.subscribe(function (style) {
        for (var prop in style) {
          rule.prop(prop, style[prop], updateOptions);
        }
      });
      return rule;
    },
    onProcessRule: function onProcessRule(rule) {
      if (rule && rule.type !== 'style') return;
      var styleRule = rule;
      var style = styleRule.style;

      var _loop = function _loop(prop) {
        var value = style[prop];
        if (!isObservable(value)) return "continue";
        delete style[prop];
        value.subscribe({
          next: function next(nextValue) {
            styleRule.prop(prop, nextValue, updateOptions);
          }
        });
      };

      for (var prop in style) {
        var _ret = _loop(prop);

        if (_ret === "continue") continue;
      }
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (observablePlugin);


/***/ }),

/***/ "./node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");


var semiWithNl = /;\n/;
/**
 * Naive CSS parser.
 * - Supports only rule body (no selectors)
 * - Requires semicolon and new line after the value (except of last line)
 * - No nested rules support
 */

var parse = (function (cssText) {
  var style = {};
  var split = cssText.split(semiWithNl);

  for (var i = 0; i < split.length; i++) {
    var decl = (split[i] || '').trim();
    if (!decl) continue;
    var colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "[JSS] Malformed CSS string \"" + decl + "\"") : undefined;
      continue;
    }

    var prop = decl.substr(0, colonIndex).trim();
    var value = decl.substr(colonIndex + 1).trim();
    style[prop] = value;
  }

  return style;
});

var onProcessRule = function onProcessRule(rule) {
  if (typeof rule.style === 'string') {
    // $FlowFixMe: We can safely assume that rule has the style property
    rule.style = parse(rule.style);
  }
};

function templatePlugin() {
  return {
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ __webpack_exports__["default"] = (templatePlugin);


/***/ }),

/***/ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vendor */ "./node_modules/css-vendor/dist/css-vendor.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedKeyframes"])(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedProperty"])(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(supportedProp, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(prop, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssVendorPrefixer);


/***/ }),

/***/ "./node_modules/jss-preset-default/dist/jss-preset-default.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/jss-preset-default/dist/jss-preset-default.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss-plugin-rule-value-function */ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js");
/* harmony import */ var jss_plugin_rule_value_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-plugin-rule-value-observable */ "./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js");
/* harmony import */ var jss_plugin_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss-plugin-template */ "./node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js");
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss-plugin-global */ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js");
/* harmony import */ var jss_plugin_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss-plugin-extend */ "./node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js");
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss-plugin-nested */ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js");
/* harmony import */ var jss_plugin_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss-plugin-compose */ "./node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js");
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jss-plugin-camel-case */ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js");
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jss-plugin-default-unit */ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js");
/* harmony import */ var jss_plugin_expand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jss-plugin-expand */ "./node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js");
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jss-plugin-vendor-prefixer */ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js");
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jss-plugin-props-sort */ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js");













var index = (function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    plugins: [Object(jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(jss_plugin_rule_value_observable__WEBPACK_IMPORTED_MODULE_1__["default"])(options.observable), Object(jss_plugin_template__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(jss_plugin_global__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(jss_plugin_extend__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(jss_plugin_nested__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(jss_plugin_compose__WEBPACK_IMPORTED_MODULE_6__["default"])(), Object(jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_7__["default"])(), Object(jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_8__["default"])(options.defaultUnit), Object(jss_plugin_expand__WEBPACK_IMPORTED_MODULE_9__["default"])(), Object(jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_10__["default"])(), Object(jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_11__["default"])()]
  };
});

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/jss/dist/jss.esm.js":
/*!******************************************!*\
  !*** ./node_modules/jss/dist/jss.esm.js ***!
  \******************************************/
/*! exports provided: default, RuleList, SheetsManager, SheetsRegistry, create, createGenerateId, createRule, getDynamicStyles, hasCSSTOMSupport, sheets, toCssValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleList", function() { return RuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsManager", function() { return SheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsRegistry", function() { return SheetsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGenerateId", function() { return createGenerateId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRule", function() { return createRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDynamicStyles", function() { return getDynamicStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCSSTOMSupport", function() { return hasCSSTOMSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheets", function() { return sheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCssValue", function() { return toCssValue; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");








var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown rule " + name) : undefined;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : undefined;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown';
    this.options = options;
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Bad keyframes name " + key) : undefined;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : undefined;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);
    if (!rule) return false;
    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown hook \"" + name + "\".") : undefined;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new SheetsRegistry();

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis[ns]++;

var maxRules = 1e10;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : undefined;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : undefined;
  }
}
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : undefined;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Insertion point is not in the DOM.') : undefined;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    index = maxIndex;
  }

  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] " + err.message) : undefined;
    return false;
  }

  return container.cssRules[index];
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element);
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        // We need to render the container without children first.
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), index);

        if (latestNativeParent === false) {
          return false;
        }
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    } // IE keeps the CSSStyleSheet after style node has been reattached,
    // so we need to check if the `renderable` reference the right style sheet and not
    // rerender those rules.


    if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
      return rule.renderable;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;

    var nativeRule = _insertRule(nativeParent, ruleStr, index);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    rule.renderable = nativeRule;
    return nativeRule;
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    var cssRules = this.element.sheet.cssRules;

    for (var index = 0; index < cssRules.length; index++) {
      if (cssRule === cssRules[index]) return index;
    }

    return -1;
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.3.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: is_in_browser__WEBPACK_IMPORTED_MODULE_1__["default"] ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}();

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var index = create();

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-display-name/lib/getDisplayName.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-display-name/lib/getDisplayName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayName;
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-jss/dist/react-jss.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/react-jss/dist/react-jss.esm.js ***!
  \******************************************************/
/*! exports provided: ThemeProvider, createTheming, useTheme, withTheme, SheetsRegistry, createGenerateId, default, JssContext, JssProvider, createJsx, createUseStyles, jss, jsx, styled, withStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JssContext", function() { return JssContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JssProvider", function() { return JssProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJsx", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUseStyles", function() { return createUseStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jss", function() { return defaultJss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return configureStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return withStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theming */ "./node_modules/theming/dist/theming.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return theming__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheming", function() { return theming__WEBPACK_IMPORTED_MODULE_5__["createTheming"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return theming__WEBPACK_IMPORTED_MODULE_5__["useTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return theming__WEBPACK_IMPORTED_MODULE_5__["withTheme"]; });

/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SheetsRegistry", function() { return jss__WEBPACK_IMPORTED_MODULE_7__["SheetsRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateId", function() { return jss__WEBPACK_IMPORTED_MODULE_7__["createGenerateId"]; });

/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jss-preset-default */ "./node_modules/jss-preset-default/dist/jss-preset-default.esm.js");
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shallow_equal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shallow-equal */ "./node_modules/shallow-equal/dist/index.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var css_jss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! css-jss */ "./node_modules/css-jss/dist/css-jss.esm.js");

















var getDisplayName = (function (Component) {
  return Component.displayName || Component.name || 'Component';
});

var memoize = function memoize(fn) {
  var lastArgs;
  var lastResult;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (Array.isArray(lastArgs) && args.length === lastArgs.length) {
      var isSame = true;

      for (var i = 0; i < args.length; i++) {
        if (args[i] !== lastArgs[i]) {
          isSame = false;
        }
      }

      if (isSame) {
        return lastResult;
      }
    }

    lastArgs = args;
    lastResult = fn.apply(void 0, args);
    return lastResult;
  };
};

function mergeClasses(baseClasses, additionalClasses) {
  var combinedClasses = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseClasses);

  for (var name in additionalClasses) {
    combinedClasses[name] = name in combinedClasses ? combinedClasses[name] + " " + additionalClasses[name] : additionalClasses[name];
  }

  return combinedClasses;
}

var JssContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({
  classNamePrefix: '',
  disableStylesGeneration: false
});

/**
 * Global index counter to preserve source order.
 * As we create the style sheet during componentWillMount lifecycle,
 * children are handled after the parents, so the order of style elements would
 * be parent->child. It is a problem though when a parent passes a className
 * which needs to override any childs styles. StyleSheet of the child has a higher
 * specificity, because of the source order.
 * So our solution is to render sheets them in the reverse order child->sheet, so
 * that parent has a higher specificity.
 *
 * We start at [Number.MIN_SAFE_INTEGER] to always insert sheets from react-jss first before any
 * sheet which might be inserted manually by the user.
 */
var index = Number.MIN_SAFE_INTEGER || -1e9;

var getSheetIndex = function getSheetIndex() {
  return index++;
};

var defaultManagers = new Map();
var getManager = function getManager(context, managerId) {
  // If `managers` map is present in the context, we use it in order to
  // let JssProvider reset them when new response has to render server-side.
  if (context.managers) {
    if (!context.managers[managerId]) {
      context.managers[managerId] = new jss__WEBPACK_IMPORTED_MODULE_7__["SheetsManager"]();
    }

    return context.managers[managerId];
  }

  var manager = defaultManagers.get(managerId);

  if (!manager) {
    manager = new jss__WEBPACK_IMPORTED_MODULE_7__["SheetsManager"]();
    defaultManagers.set(managerId, manager);
  }

  return manager;
};
var manageSheet = function manageSheet(options) {
  var sheet = options.sheet,
      context = options.context,
      index = options.index,
      theme = options.theme;

  if (!sheet) {
    return;
  }

  var manager = getManager(context, index);
  manager.manage(theme);

  if (context.registry) {
    context.registry.add(sheet);
  }
};
var unmanageSheet = function unmanageSheet(options) {
  if (!options.sheet) {
    return;
  }

  var manager = getManager(options.context, options.index);
  manager.unmanage(options.theme);
};

var defaultJss = Object(jss__WEBPACK_IMPORTED_MODULE_7__["create"])(Object(jss_preset_default__WEBPACK_IMPORTED_MODULE_8__["default"])());

var sheetsMeta = new WeakMap();
var getMeta = function getMeta(sheet) {
  return sheetsMeta.get(sheet);
};
var addMeta = function addMeta(sheet, meta) {
  sheetsMeta.set(sheet, meta);
};

var getStyles = function getStyles(options) {
  var styles = options.styles;

  if (typeof styles !== 'function') {
    return styles;
  }

   true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(styles.length !== 0, "[JSS] <" + (options.name || 'Hook') + " />'s styles function doesn't rely on the \"theme\" argument. We recommend declaring styles as an object instead.") : undefined;
  return styles(options.theme);
};

function getSheetOptions(options, link) {
  var minify;

  if (options.context.id && options.context.id.minify != null) {
    minify = options.context.id.minify;
  }

  var classNamePrefix = options.context.classNamePrefix || '';

  if (options.name && !minify) {
    classNamePrefix += options.name.replace(/\s/g, '-') + "-";
  }

  var meta = '';
  if (options.name) meta = options.name + ", ";
  meta += typeof options.styles === 'function' ? 'Themed' : 'Unthemed';
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options.sheetOptions, {
    index: options.index,
    meta: meta,
    classNamePrefix: classNamePrefix,
    link: link,
    generateId: options.sheetOptions.generateId || options.context.generateId
  });
}

var createStyleSheet = function createStyleSheet(options) {
  if (options.context.disableStylesGeneration) {
    return undefined;
  }

  var manager = getManager(options.context, options.index);
  var existingSheet = manager.get(options.theme);

  if (existingSheet) {
    return existingSheet;
  }

  var jss = options.context.jss || defaultJss;
  var styles = getStyles(options);
  var dynamicStyles = Object(jss__WEBPACK_IMPORTED_MODULE_7__["getDynamicStyles"])(styles);
  var sheet = jss.createStyleSheet(styles, getSheetOptions(options, dynamicStyles !== null));
  addMeta(sheet, {
    dynamicStyles: dynamicStyles,
    styles: styles
  });
  manager.add(options.theme, sheet);
  return sheet;
};
var removeDynamicRules = function removeDynamicRules(sheet, rules) {
  // Loop over each dynamic rule and remove the dynamic rule
  // We can't just remove the whole sheet as this has all of the rules for every component instance
  for (var key in rules) {
    sheet.deleteRule(rules[key]);
  }
};
var updateDynamicRules = function updateDynamicRules(data, sheet, rules) {
  // Loop over each dynamic rule and update it
  // We can't just update the whole sheet as this has all of the rules for every component instance
  for (var key in rules) {
    sheet.updateOne(rules[key], data);
  }
};
var addDynamicRules = function addDynamicRules(sheet, data) {
  var meta = getMeta(sheet);

  if (!meta) {
    return undefined;
  }

  var rules = {}; // Loop over each dynamic rule and add it to the stylesheet

  for (var key in meta.dynamicStyles) {
    var initialRuleCount = sheet.rules.index.length;
    var originalRule = sheet.addRule(key, meta.dynamicStyles[key]); // Loop through all created rules, fixes updating dynamic rules

    for (var i = initialRuleCount; i < sheet.rules.index.length; i++) {
      var rule = sheet.rules.index[i];
      sheet.updateOne(rule, data); // If it's the original rule, we need to add it by the correct key so the hook and hoc
      // can correctly concat the dynamic class with the static one

      rules[originalRule === rule ? key : rule.key] = rule;
    }
  }

  return rules;
};

var getSheetClasses = function getSheetClasses(sheet, dynamicRules) {
  if (!dynamicRules) {
    return sheet.classes;
  }

  var classes = {};
  var meta = getMeta(sheet);

  if (!meta) {
    return sheet.classes;
  }

  for (var key in meta.styles) {
    classes[key] = sheet.classes[key];

    if (key in dynamicRules) {
      classes[key] += " " + sheet.classes[dynamicRules[key].key];
    }
  }

  return classes;
};

var NoRenderer = function NoRenderer(props) {
  return props.children || null;
};

var noTheme = {};
/**
 * HOC creator function that wrapps the user component.
 *
 * `withStyles(styles, [options])(Component)`
 */

var withStyles = function withStyles(styles, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$index = _options.index,
      index = _options$index === void 0 ? getSheetIndex() : _options$index,
      theming = _options.theming,
      injectTheme = _options.injectTheme,
      sheetOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_options, ["index", "theming", "injectTheme"]);

  var isThemingEnabled = typeof styles === 'function';
  var ThemeConsumer = theming && theming.context.Consumer || theming__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"].Consumer;
  return function (InnerComponent) {
    if (InnerComponent === void 0) {
      InnerComponent = NoRenderer;
    }

    var displayName = getDisplayName(InnerComponent);

    var getTheme = function getTheme(props) {
      return isThemingEnabled ? props.theme : noTheme;
    };

    var WithStyles =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(WithStyles, _Component);

      // $FlowFixMe
      WithStyles.createState = function createState(props) {
        var sheet = createStyleSheet({
          styles: styles,
          theme: getTheme(props),
          index: index,
          name: displayName,
          context: props.jssContext,
          sheetOptions: sheetOptions
        });

        if (!sheet) {
          return {
            classes: {},
            dynamicRules: undefined,
            sheet: undefined
          };
        }

        var dynamicRules = addDynamicRules(sheet, props);
        return {
          sheet: sheet,
          dynamicRules: dynamicRules,
          classes: getSheetClasses(sheet, dynamicRules)
        };
      };

      WithStyles.manage = function manage(props, state) {
        var sheet = state.sheet;

        if (sheet) {
          manageSheet({
            sheet: sheet,
            index: index,
            context: props.jssContext,
            theme: getTheme(props)
          });
        }
      };

      WithStyles.unmanage = function unmanage(props, state) {
        var sheet = state.sheet,
            dynamicRules = state.dynamicRules;

        if (sheet) {
          unmanageSheet({
            context: props.jssContext,
            index: index,
            sheet: sheet,
            theme: getTheme(props)
          });

          if (dynamicRules) {
            removeDynamicRules(sheet, dynamicRules);
          }
        }
      };

      function WithStyles(props) {
        var _this;

        _this = _Component.call(this, props) || this;
        _this.mergeClassesProp = memoize(function (sheetClasses, classesProp) {
          return classesProp ? mergeClasses(sheetClasses, classesProp) : sheetClasses;
        });
        _this.state = WithStyles.createState(props);
        var registry = props.jssContext.registry;
        var sheet = _this.state.sheet;

        if (sheet && registry) {
          registry.add(sheet);
        }

        return _this;
      }

      var _proto = WithStyles.prototype;

      _proto.componentDidMount = function componentDidMount() {
        var props = this.props,
            state = this.state;

        if (props && state) {
          WithStyles.manage(props, state);
        }
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (isThemingEnabled && this.props.theme !== prevProps.theme) {
          var newState = WithStyles.createState(this.props);
          WithStyles.manage(this.props, newState);
          WithStyles.unmanage(prevProps, prevState); // eslint-disable-next-line react/no-did-update-set-state

          this.setState(newState);
        } else if (this.state.sheet && this.state.dynamicRules) {
          // Only update the rules when we don't generate a new sheet
          updateDynamicRules(this.props, this.state.sheet, this.state.dynamicRules);
        }
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        WithStyles.unmanage(this.props, this.state);
      };

      _proto.render = function render() {
        var _this$props = this.props,
            innerRef = _this$props.innerRef,
            jssContext = _this$props.jssContext,
            theme = _this$props.theme,
            classes = _this$props.classes,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["innerRef", "jssContext", "theme", "classes"]);

        var sheetClasses = this.state.classes;

        var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
          classes: this.mergeClassesProp(sheetClasses, classes)
        });

        if (innerRef) props.ref = innerRef;
        if (injectTheme) props.theme = theme;
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InnerComponent, props);
      };

      return WithStyles;
    }(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

    WithStyles.displayName = "WithStyles(" + displayName + ")";
    WithStyles.defaultProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, InnerComponent.defaultProps);
    var JssContextSubscriber = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(JssContext.Consumer, null, function (context) {
        if (isThemingEnabled || injectTheme) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ThemeConsumer, null, function (theme) {
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WithStyles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
              innerRef: ref,
              theme: theme
            }, props, {
              jssContext: context
            }));
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WithStyles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          innerRef: ref
        }, props, {
          jssContext: context,
          theme: noTheme
        }));
      });
    });
    JssContextSubscriber.displayName = "JssContextSubscriber(" + displayName + ")"; // $FlowFixMe - React's types should allow custom static properties on component.

    JssContextSubscriber.InnerComponent = InnerComponent;
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(JssContextSubscriber, InnerComponent);
  };
};

var useEffectOrLayoutEffect = is_in_browser__WEBPACK_IMPORTED_MODULE_9__["default"] ? react__WEBPACK_IMPORTED_MODULE_3___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect;
var noTheme$1 = {};

var createUseStyles = function createUseStyles(styles, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$index = _options.index,
      index = _options$index === void 0 ? getSheetIndex() : _options$index,
      theming = _options.theming,
      name = _options.name,
      sheetOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_options, ["index", "theming", "name"]);

  var ThemeContext$1 = theming && theming.context || theming__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"];
  var useTheme = typeof styles === 'function' ? // $FlowFixMe
  function () {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(ThemeContext$1) || noTheme$1;
  } : // $FlowFixMe
  function () {
    return noTheme$1;
  };
  return function useStyles(data) {
    var isFirstMount = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(true);
    var context = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(JssContext);
    var theme = useTheme();

    var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
      var newSheet = createStyleSheet({
        context: context,
        styles: styles,
        name: name,
        theme: theme,
        index: index,
        sheetOptions: sheetOptions
      });
      var newDynamicRules = newSheet ? addDynamicRules(newSheet, data) : null;

      if (newSheet) {
        manageSheet({
          index: index,
          context: context,
          sheet: newSheet,
          theme: theme
        });
      }

      return [newSheet, newDynamicRules];
    }, [context, theme]),
        sheet = _React$useMemo[0],
        dynamicRules = _React$useMemo[1];

    useEffectOrLayoutEffect(function () {
      // We only need to update the rules on a subsequent update and not in the first mount
      if (sheet && dynamicRules && !isFirstMount.current) {
        updateDynamicRules(data, sheet, dynamicRules);
      }
    }, [data]);
    useEffectOrLayoutEffect(function () {
      return (// cleanup only
        function () {
          if (sheet) {
            unmanageSheet({
              index: index,
              context: context,
              sheet: sheet,
              theme: theme
            });
          }

          if (sheet && dynamicRules) {
            removeDynamicRules(sheet, dynamicRules);
          }
        }
      );
    }, [sheet]);
    var classes = sheet && dynamicRules ? getSheetClasses(sheet, dynamicRules) : {}; // $FlowFixMe

    react__WEBPACK_IMPORTED_MODULE_3___default.a.useDebugValue(classes); // $FlowFixMe

    react__WEBPACK_IMPORTED_MODULE_3___default.a.useDebugValue(theme === noTheme$1 ? 'No theme' : theme);
    react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
      isFirstMount.current = false;
    });
    return classes;
  };
};

var initialContext = {};

var JssProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(JssProvider, _Component);

  function JssProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.managers = {};

    _this.createContext = function (parentContext, prevContext) {
      if (prevContext === void 0) {
        prevContext = initialContext;
      }

      var _this$props = _this.props,
          registry = _this$props.registry,
          classNamePrefix = _this$props.classNamePrefix,
          jss = _this$props.jss,
          generateId = _this$props.generateId,
          disableStylesGeneration = _this$props.disableStylesGeneration,
          media = _this$props.media,
          id = _this$props.id;

      var context = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parentContext);

      if (registry) {
        context.registry = registry; // This way we identify a new request on the server, because user will create
        // a new Registry instance for each.

        if (registry !== _this.registry) {
          // We reset managers because we have to regenerate all sheets for the new request.
          _this.managers = {};
          _this.registry = registry;
        }
      }

      context.managers = _this.managers;

      if (id !== undefined) {
        context.id = id;
      }

      if (generateId !== undefined) {
        context.generateId = generateId;
      } else if (!context.generateId || !prevContext || context.id !== prevContext.id) {
        context.generateId = Object(jss__WEBPACK_IMPORTED_MODULE_7__["createGenerateId"])(context.id);
      }

      if (classNamePrefix) {
        context.classNamePrefix += classNamePrefix;
      }

      if (media !== undefined) {
        context.media = media;
      }

      if (jss) {
        context.jss = jss;
      }

      if (disableStylesGeneration !== undefined) {
        context.disableStylesGeneration = disableStylesGeneration;
      }

      if (prevContext && Object(shallow_equal__WEBPACK_IMPORTED_MODULE_11__["shallowEqualObjects"])(prevContext, context)) {
        return prevContext;
      }

      return context;
    };

    _this.prevContext = void 0;
    _this.generateId = void 0;
    _this.registry = void 0;

    _this.renderProvider = function (parentContext) {
      var children = _this.props.children;

      var context = _this.createContext(parentContext, _this.prevContext);

      _this.prevContext = context;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(JssContext.Provider, {
        value: context
      }, children);
    };

    return _this;
  }

  var _proto = JssProvider.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(JssContext.Consumer, null, this.renderProvider);
  };

  return JssProvider;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

JssProvider.propTypes = {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.instanceOf(jss__WEBPACK_IMPORTED_MODULE_7__["SheetsRegistry"]),
  jss: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.instanceOf(jss__WEBPACK_IMPORTED_MODULE_7__["default"].constructor),
  generateId: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  classNamePrefix: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  disableStylesGeneration: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node.isRequired,
  media: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    minify: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
  })
};

/* eslint-disable react/prop-types, react/require-default-props */

var parseStyles = function parseStyles(args) {
  var dynamicStyles = [];
  var staticStyle;
  var labels = []; // Not using ...rest to optimize perf.

  for (var key in args) {
    var style = args[key];
    if (!style) continue;

    if (typeof style === 'function') {
      dynamicStyles.push(style);
    } else {
      if (!staticStyle) staticStyle = {};
      Object.assign(staticStyle, style);

      if (staticStyle.label) {
        if (labels.indexOf(staticStyle.label) === -1) labels.push(staticStyle.label);
      }
    }
  }

  var styles = {};
  var label = labels.length === 0 ? 'sc' : labels.join('-');

  if (staticStyle) {
    // Label should not leak to the core.
    if ('label' in staticStyle) delete staticStyle.label;
    styles[label] = staticStyle;
  } // When there is only one function rule, we don't need to wrap it.


  if (dynamicStyles.length === 1) {
    styles.scd = dynamicStyles[0];
  } // We create a new function rule which will call all other function rules
  // and merge the styles they return.


  if (dynamicStyles.length > 1) {
    styles.scd = function (props) {
      var merged = {};

      for (var i = 0; i < dynamicStyles.length; i++) {
        var dynamicStyle = dynamicStyles[i](props);
        if (dynamicStyle) Object.assign(merged, dynamicStyle);
      }

      return merged;
    };
  }

  return {
    styles: styles,
    label: label
  };
};

var shouldForwardPropSymbol = Symbol('react-jss-styled');

var getShouldForwardProp = function getShouldForwardProp(tagOrComponent, options) {
  var shouldForwardProp = options.shouldForwardProp; // $FlowIgnore that prop shouldn't be there.

  var childShouldForwardProp = tagOrComponent[shouldForwardPropSymbol];
  var finalShouldForwardProp = shouldForwardProp || childShouldForwardProp;

  if (shouldForwardProp && childShouldForwardProp) {
    finalShouldForwardProp = function finalShouldForwardProp(prop) {
      return childShouldForwardProp(prop) && shouldForwardProp(prop);
    };
  }

  return finalShouldForwardProp;
};

var getChildProps = function getChildProps(props, shouldForwardProp, isTag) {
  var childProps = {};

  for (var prop in props) {
    if (shouldForwardProp) {
      if (shouldForwardProp(prop) === true) {
        childProps[prop] = props[prop];
      }

      continue;
    } // We don't want to pass non-dom props to the DOM.


    if (isTag) {
      if (Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_12__["default"])(prop)) {
        childProps[prop] = props[prop];
      }

      continue;
    }

    childProps[prop] = props[prop];
  }

  return childProps;
};

var configureStyled = function configureStyled(tagOrComponent, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      theming = _options.theming;
  var isTag = typeof tagOrComponent === 'string';
  var ThemeContext$1 = theming ? theming.context : theming__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"];
  var shouldForwardProp = getShouldForwardProp(tagOrComponent, options);
  return function createStyledComponent() {
    // eslint-disable-next-line prefer-rest-params
    var _parseStyles = parseStyles(arguments),
        styles = _parseStyles.styles,
        label = _parseStyles.label;

    var useStyles = createUseStyles(styles, options);

    var Styled = function Styled(props) {
      var as = props.as,
          className = props.className; // $FlowFixMe theming ThemeContext types need to be fixed.

      var theme = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(ThemeContext$1);
      var propsWithTheme = Object.assign({
        theme: theme
      }, props);
      var classes = useStyles(propsWithTheme);
      var childProps = getChildProps(props, shouldForwardProp, isTag); // $FlowIgnore we don't care label might not exist in classes.

      var classNames = ((classes[label] || classes.sc || '') + " " + (classes.scd || '')).trim();
      childProps.className = className ? className + " " + classNames : classNames;

      if (!isTag && shouldForwardProp) {
        // $FlowIgnore we are not supposed to attach random properties to component functions.
        tagOrComponent[shouldForwardPropSymbol] = shouldForwardProp;
      }

      if (isTag && as) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(as, childProps);
      }

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(tagOrComponent, childProps);
    };

    return Styled;
  };
};

/* eslint-disable prefer-rest-params, prefer-spread */
var create = function create(css) {
  if (css === void 0) {
    css = css_jss__WEBPACK_IMPORTED_MODULE_13__["default"];
  }

  return (// $FlowIgnore we don't care about the types here, since this is going to be called by the build tool.
    function createElement(type, props) {
      var args = arguments;

      if (props && props.css) {
        var className = css(props.css);
        var newProps = Object.assign({}, props);
        newProps.className = props.className ? props.className + " " + className : className;
        delete newProps.css;
        args[1] = newProps;
      } // $FlowIgnore


      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement.apply(undefined, args);
    }
  );
};
var jsx = create();

/* harmony default export */ __webpack_exports__["default"] = (withStyles);



/***/ }),

/***/ "./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: shallowEqualArrays, shallowEqualObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqualArrays", function() { return shallowEqualArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqualObjects", function() { return shallowEqualObjects; });
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }

  return true;
}

function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}




/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/theming/dist/theming.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/theming/dist/theming.esm.js ***!
  \**************************************************/
/*! exports provided: useTheme, ThemeContext, withTheme, createTheming, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTheming", function() { return createTheming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_display_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-display-name */ "./node_modules/react-display-name/lib/getDisplayName.js");
/* harmony import */ var react_display_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_display_name__WEBPACK_IMPORTED_MODULE_4__);






function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

function createThemeProvider(context) {
  var ThemeProvider =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ThemeProvider, _React$Component);

    function ThemeProvider() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cachedTheme", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastOuterTheme", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastTheme", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderProvider", function (outerTheme) {
        var children = _this.props.children;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(context.Provider, {
          value: _this.getTheme(outerTheme)
        }, children);
      });

      return _this;
    }

    var _proto = ThemeProvider.prototype;

    // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
    _proto.getTheme = function getTheme(outerTheme) {
      if (this.props.theme !== this.lastTheme || outerTheme !== this.lastOuterTheme || !this.cachedTheme) {
        this.lastOuterTheme = outerTheme;
        this.lastTheme = this.props.theme;

        if (typeof this.lastTheme === 'function') {
          var theme = this.props.theme;
          this.cachedTheme = theme(outerTheme);
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(isObject(this.cachedTheme), '[ThemeProvider] Please return an object from your theme function') : undefined;
        } else {
          var _theme = this.props.theme;
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(isObject(_theme), '[ThemeProvider] Please make your theme prop a plain object') : undefined;
          this.cachedTheme = outerTheme ? _extends({}, outerTheme, _theme) : _theme;
        }
      }

      return this.cachedTheme;
    };

    _proto.render = function render() {
      var children = this.props.children;

      if (!children) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(context.Consumer, null, this.renderProvider);
    };

    return ThemeProvider;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  if (true) {
    ThemeProvider.propTypes = {
      // eslint-disable-next-line react/require-default-props
      children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
      theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({}), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]).isRequired
    };
  }

  return ThemeProvider;
}

function createWithTheme(context) {
  return function hoc(Component) {
    var withTheme = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(context.Consumer, null, function (theme) {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(isObject(theme), '[theming] Please use withTheme only with the ThemeProvider') : undefined;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
          theme: theme,
          ref: ref
        }, props));
      });
    });

    if (true) {
      withTheme.displayName = "WithTheme(" + react_display_name__WEBPACK_IMPORTED_MODULE_4___default()(Component) + ")";
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(withTheme, Component);
    return withTheme;
  };
}

function createUseTheme(context) {
  var useTheme = function useTheme() {
    var theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(context);
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(isObject(theme), '[theming] Please use useTheme only with the ThemeProvider') : undefined;
    return theme;
  };

  return useTheme;
}

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

function createTheming(context) {
  return {
    context: context,
    withTheme: createWithTheme(context),
    useTheme: createUseTheme(context),
    ThemeProvider: createThemeProvider(context)
  };
}

var _createTheming = createTheming(ThemeContext),
    withTheme = _createTheming.withTheme,
    ThemeProvider = _createTheming.ThemeProvider,
    useTheme = _createTheming.useTheme;




/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/react-jss.js":
/*!********************************!*\
  !*** ./resources/react-jss.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

ReactJSS = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWpzcy9kaXN0L2Nzcy1qc3MuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtdmVuZG9yL2Rpc3QvY3NzLXZlbmRvci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBoZW5hdGUtc3R5bGUtbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtaW4tYnJvd3Nlci9kaXN0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1jYW1lbC1jYXNlL2Rpc3QvanNzLXBsdWdpbi1jYW1lbC1jYXNlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1jb21wb3NlL2Rpc3QvanNzLXBsdWdpbi1jb21wb3NlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1kZWZhdWx0LXVuaXQvZGlzdC9qc3MtcGx1Z2luLWRlZmF1bHQtdW5pdC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tZXhwYW5kL2Rpc3QvanNzLXBsdWdpbi1leHBhbmQuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWV4dGVuZC9kaXN0L2pzcy1wbHVnaW4tZXh0ZW5kLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1nbG9iYWwvZGlzdC9qc3MtcGx1Z2luLWdsb2JhbC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tbmVzdGVkL2Rpc3QvanNzLXBsdWdpbi1uZXN0ZWQuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXByb3BzLXNvcnQvZGlzdC9qc3MtcGx1Z2luLXByb3BzLXNvcnQuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXJ1bGUtdmFsdWUtZnVuY3Rpb24vZGlzdC9qc3MtcGx1Z2luLXJ1bGUtdmFsdWUtZnVuY3Rpb24uZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXJ1bGUtdmFsdWUtb2JzZXJ2YWJsZS9kaXN0L2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1vYnNlcnZhYmxlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi10ZW1wbGF0ZS9kaXN0L2pzcy1wbHVnaW4tdGVtcGxhdGUuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXZlbmRvci1wcmVmaXhlci9kaXN0L2pzcy1wbHVnaW4tdmVuZG9yLXByZWZpeGVyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXByZXNldC1kZWZhdWx0L2Rpc3QvanNzLXByZXNldC1kZWZhdWx0LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzL2Rpc3QvanNzLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRpc3BsYXktbmFtZS9saWIvZ2V0RGlzcGxheU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWpzcy9kaXN0L3JlYWN0LWpzcy5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3ctZXF1YWwvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGhlbWluZy9kaXN0L3RoZW1pbmcuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXdhcm5pbmcvZGlzdC90aW55LXdhcm5pbmcuZXNtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9yZWFjdC1qc3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQyxxQ0FBcUM7O0FBRXJDO0FBQ0Esa0VBQWtFOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3BOM0I7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCLCtCQUErQjtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7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QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QiwyQkFBMkI7QUFDcEQsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixrRkFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxlQUFlO0FBQ3BCO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUE4RDs7QUFFOUQsOERBQThEOztBQUU5RDtBQUNBLEtBQUs7QUFDTCw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0EsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0ZBQVEsR0FBRztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1Q0FBdUM7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHdDQUF3QztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHlDQUF5QztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHlD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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RTtBQUFBLG1CQUFtQixhQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7O0FDbkJ2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQSxXQUFXLG1CQUFPLENBQUMsaUVBQVc7Ozs7Ozs7Ozs7OztBQ0E5Qix1QiIsImZpbGUiOiJyZWFjdC1qc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Jlc291cmNlcy9yZWFjdC1qc3MuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaW5kZXggPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2pzcyc7XG5pbXBvcnQgcHJlc2V0IGZyb20gJ2pzcy1wcmVzZXQtZGVmYXVsdCc7XG5cbi8vIEkgaGF2ZSBiZWVuIHRyeWluZyB0byBiZW5jaG1hcmsgYW5kIEkgaGF2ZSBzZWVuIGEgc2xvdyBkb3duIGFmdGVyIGFib3V0IDEwayBydWxlcy5cbi8vIFNpbmNlIHdlIGFyZSBpbiBhIHNpbmdsZSBzaGVldCBtb2RlLCB1c2VyIHNob3VsZG4ndCBjYXJlIGFib3V0IHRoaXMuXG52YXIgTUFYX1JVTEVTX1BFUl9TSEVFVCA9IDEwMDAwO1xudmFyIGRlZmF1bHRKc3MgPSBjcmVhdGUocHJlc2V0KCkpO1xuXG52YXIgY3JlYXRlQ3NzID0gZnVuY3Rpb24gY3JlYXRlQ3NzKGpzcykge1xuICBpZiAoanNzID09PSB2b2lkIDApIHtcbiAgICBqc3MgPSBkZWZhdWx0SnNzO1xuICB9XG5cbiAgdmFyIGNhY2hlID0gbmV3IE1hcCgpO1xuICB2YXIgcnVsZUluZGV4ID0gMDtcbiAgdmFyIHNoZWV0O1xuXG4gIHZhciBnZXRTaGVldCA9IGZ1bmN0aW9uIGdldFNoZWV0KCkge1xuICAgIGlmICghc2hlZXQgfHwgc2hlZXQucnVsZXMuaW5kZXgubGVuZ3RoID4gTUFYX1JVTEVTX1BFUl9TSEVFVCkge1xuICAgICAgc2hlZXQgPSBqc3MuY3JlYXRlU3R5bGVTaGVldCgpLmF0dGFjaCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVldDtcbiAgfTtcblxuICBmdW5jdGlvbiBjc3MoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzOyAvLyBXZSBjYW4gYXZvaWQgdGhlIG5lZWQgZm9yIHN0cmluZ2lmaWNhdGlvbiB3aXRoIGEgYmFiZWwgcGx1Z2luLFxuICAgIC8vIHdoaWNoIGNvdWxkIGdlbmVyYXRlIGEgaGFzaCBhdCBidWlsZCB0aW1lIGFuZCBhZGQgaXQgdG8gdGhlIG9iamVjdC5cblxuICAgIHZhciBhcmdzU3RyID0gSlNPTi5zdHJpbmdpZnkoYXJncyk7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLmdldChhcmdzU3RyKTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkLmNsYXNzTmFtZTtcbiAgICB2YXIgZmxhdEFyZ3MgPSBbXTsgLy8gRmxhdHRlbiBhcmd1bWVudHMgd2hpY2ggY2FuIGJlXG4gICAgLy8gLSBzdHlsZSBvYmplY3RzXG4gICAgLy8gLSBhcnJheSBvZiBzdHlsZSBvYmplY3RzXG4gICAgLy8gLSBhcnJheXMgb2Ygc3R5bGUgb2JqZWN0c1xuXG4gICAgZm9yICh2YXIgYXJnSW5kZXggaW4gYXJncykge1xuICAgICAgdmFyIGFyZyA9IGFyZ3NbYXJnSW5kZXhdO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICBmbGF0QXJncy5wdXNoKGFyZyk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpbm5lckFyZ0luZGV4ID0gMDsgaW5uZXJBcmdJbmRleCA8IGFyZy5sZW5ndGg7IGlubmVyQXJnSW5kZXgrKykge1xuICAgICAgICBmbGF0QXJncy5wdXNoKGFyZ1tpbm5lckFyZ0luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1lcmdlZFN0eWxlID0ge307XG4gICAgdmFyIGxhYmVscyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbGF0QXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHN0eWxlID0gZmxhdEFyZ3NbaV07XG4gICAgICBpZiAoIXN0eWxlKSBjb250aW51ZTsgLy8gSXQgY2FuIGJlIGEgY2xhc3MgbmFtZSB0aGF0IGNzcygpIGhhcyBwcmV2aW91c2x5IGdlbmVyYXRlZC5cblxuICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAgICAgICB2YXIgX2NhY2hlZCA9IGNhY2hlLmdldChzdHlsZSk7XG5cbiAgICAgICAgaWYgKF9jYWNoZWQpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgICAgIGlmIChfY2FjaGVkLmxhYmVscy5sZW5ndGgpIGxhYmVscy5wdXNoLmFwcGx5KGxhYmVscywgX2NhY2hlZC5sYWJlbHMpO1xuICAgICAgICAgIHN0eWxlID0gX2NhY2hlZC5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3R5bGUubGFiZWwgJiYgbGFiZWxzLmluZGV4T2Yoc3R5bGUubGFiZWwpID09PSAtMSkgbGFiZWxzLnB1c2goc3R5bGUubGFiZWwpO1xuICAgICAgT2JqZWN0LmFzc2lnbihtZXJnZWRTdHlsZSwgc3R5bGUpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBtZXJnZWRTdHlsZS5sYWJlbDtcbiAgICB2YXIgbGFiZWwgPSBsYWJlbHMubGVuZ3RoID09PSAwID8gJ2NzcycgOiBsYWJlbHMuam9pbignLScpO1xuICAgIHZhciBrZXkgPSBsYWJlbCArIFwiLVwiICsgcnVsZUluZGV4Kys7XG4gICAgZ2V0U2hlZXQoKS5hZGRSdWxlKGtleSwgbWVyZ2VkU3R5bGUpO1xuICAgIHZhciBjbGFzc05hbWUgPSBnZXRTaGVldCgpLmNsYXNzZXNba2V5XTtcbiAgICB2YXIgY2FjaGVWYWx1ZSA9IHtcbiAgICAgIHN0eWxlOiBtZXJnZWRTdHlsZSxcbiAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9O1xuICAgIGNhY2hlLnNldChhcmdzU3RyLCBjYWNoZVZhbHVlKTtcbiAgICBjYWNoZS5zZXQoY2xhc3NOYW1lLCBjYWNoZVZhbHVlKTtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9IC8vIEZvciB0ZXN0aW5nIG9ubHkuXG5cblxuICBjc3MuZ2V0U2hlZXQgPSBnZXRTaGVldDtcbiAgcmV0dXJuIGNzcztcbn07XG5cbnZhciBpbmRleCA9IGNyZWF0ZUNzcygpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbmV4cG9ydCB7IGNyZWF0ZUNzcyBhcyBjcmVhdGUgfTtcbiIsImltcG9ydCBpc0luQnJvd3NlciBmcm9tICdpcy1pbi1icm93c2VyJztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXknO1xuXG4vLyBFeHBvcnQgamF2YXNjcmlwdCBzdHlsZSBhbmQgY3NzIHN0eWxlIHZlbmRvciBwcmVmaXhlcy5cbnZhciBqcyA9ICcnO1xudmFyIGNzcyA9ICcnO1xudmFyIHZlbmRvciA9ICcnO1xudmFyIGJyb3dzZXIgPSAnJztcbnZhciBpc1RvdWNoID0gaXNJbkJyb3dzZXIgJiYgJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvLyBXZSBzaG91bGQgbm90IGRvIGFueXRoaW5nIGlmIHJlcXVpcmVkIHNlcnZlcnNpZGUuXG5cbmlmIChpc0luQnJvd3Nlcikge1xuICAvLyBPcmRlciBtYXR0ZXJzLiBXZSBuZWVkIHRvIGNoZWNrIFdlYmtpdCB0aGUgbGFzdCBvbmUgYmVjYXVzZVxuICAvLyBvdGhlciB2ZW5kb3JzIHVzZSB0byBhZGQgV2Via2l0IHByZWZpeGVzIHRvIHNvbWUgcHJvcGVydGllc1xuICB2YXIganNDc3NNYXAgPSB7XG4gICAgTW96OiAnLW1vei0nLFxuICAgIG1zOiAnLW1zLScsXG4gICAgTzogJy1vLScsXG4gICAgV2Via2l0OiAnLXdlYmtpdC0nXG4gIH07XG5cbiAgdmFyIF9kb2N1bWVudCRjcmVhdGVFbGVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgIHN0eWxlID0gX2RvY3VtZW50JGNyZWF0ZUVsZW1lLnN0eWxlO1xuXG4gIHZhciB0ZXN0UHJvcCA9ICdUcmFuc2Zvcm0nO1xuXG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAganMgPSBrZXk7XG4gICAgICBjc3MgPSBqc0Nzc01hcFtrZXldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IC8vIENvcnJlY3RseSBkZXRlY3QgdGhlIEVkZ2UgYnJvd3Nlci5cblxuXG4gIGlmIChqcyA9PT0gJ1dlYmtpdCcgJiYgJ21zSHlwaGVucycgaW4gc3R5bGUpIHtcbiAgICBqcyA9ICdtcyc7XG4gICAgY3NzID0ganNDc3NNYXAubXM7XG4gICAgYnJvd3NlciA9ICdlZGdlJztcbiAgfSAvLyBDb3JyZWN0bHkgZGV0ZWN0IHRoZSBTYWZhcmkgYnJvd3Nlci5cblxuXG4gIGlmIChqcyA9PT0gJ1dlYmtpdCcgJiYgJy1hcHBsZS10cmFpbGluZy13b3JkJyBpbiBzdHlsZSkge1xuICAgIHZlbmRvciA9ICdhcHBsZSc7XG4gIH1cbn1cbi8qKlxuICogVmVuZG9yIHByZWZpeCBzdHJpbmcgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKlxuICogQHR5cGUge3tqczogU3RyaW5nLCBjc3M6IFN0cmluZywgdmVuZG9yOiBTdHJpbmcsIGJyb3dzZXI6IFN0cmluZ319XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxudmFyIHByZWZpeCA9IHtcbiAganM6IGpzLFxuICBjc3M6IGNzcyxcbiAgdmVuZG9yOiB2ZW5kb3IsXG4gIGJyb3dzZXI6IGJyb3dzZXIsXG4gIGlzVG91Y2g6IGlzVG91Y2hcbn07XG5cbi8qKlxuICogVGVzdCBpZiBhIGtleWZyYW1lIGF0LXJ1bGUgc2hvdWxkIGJlIHByZWZpeGVkIG9yIG5vdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2ZW5kb3IgcHJlZml4IHN0cmluZyBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydGVkS2V5ZnJhbWVzKGtleSkge1xuICAvLyBLZXlmcmFtZXMgaXMgYWxyZWFkeSBwcmVmaXhlZC4gZS5nLiBrZXkgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGEnXG4gIGlmIChrZXlbMV0gPT09ICctJykgcmV0dXJuIGtleTsgLy8gTm8gbmVlZCB0byBwcmVmaXggSUUvRWRnZS4gT2xkZXIgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdW5zdXBwb3J0ZWQgcnVsZXMuXG4gIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1rZXlmcmFtZXNcblxuICBpZiAocHJlZml4LmpzID09PSAnbXMnKSByZXR1cm4ga2V5O1xuICByZXR1cm4gXCJAXCIgKyBwcmVmaXguY3NzICsgXCJrZXlmcmFtZXNcIiArIGtleS5zdWJzdHIoMTApO1xufVxuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9YXBwZWFyYW5jZVxuXG52YXIgYXBwZWFyZW5jZSA9IHtcbiAgbm9QcmVmaWxsOiBbJ2FwcGVhcmFuY2UnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ2FwcGVhcmFuY2UnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykgcmV0dXJuIFwiLXdlYmtpdC1cIiArIHByb3A7XG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y29sb3ItYWRqdXN0XG5cbnZhciBjb2xvckFkanVzdCA9IHtcbiAgbm9QcmVmaWxsOiBbJ2NvbG9yLWFkanVzdCddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAnY29sb3ItYWRqdXN0JykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnKSByZXR1cm4gcHJlZml4LmNzcyArIFwicHJpbnQtXCIgKyBwcm9wO1xuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG52YXIgcmVnRXhwID0gL1stXFxzXSsoLik/L2c7XG4vKipcbiAqIFJlcGxhY2VzIHRoZSBsZXR0ZXIgd2l0aCB0aGUgY2FwaXRhbCBsZXR0ZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWF0Y2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBjXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0b1VwcGVyKG1hdGNoLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7XG59XG4vKipcbiAqIENvbnZlcnQgZGFzaCBzZXBhcmF0ZWQgc3RyaW5ncyB0byBjYW1lbC1jYXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmVnRXhwLCB0b1VwcGVyKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGRhc2ggc2VwYXJhdGVkIHN0cmluZ3MgdG8gcGFzY2FsIGNhc2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhc2NhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIGNhbWVsaXplKFwiLVwiICsgc3RyKTtcbn1cblxuLy8gYnV0IHdlIGNhbiB1c2UgYSBsb25naGFuZCBwcm9wZXJ0eSBpbnN0ZWFkLlxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW1hc2tcblxudmFyIG1hc2sgPSB7XG4gIG5vUHJlZmlsbDogWydtYXNrJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL15tYXNrLy50ZXN0KHByb3ApKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnV2Via2l0Jykge1xuICAgICAgdmFyIGxvbmdoYW5kID0gJ21hc2staW1hZ2UnO1xuXG4gICAgICBpZiAoY2FtZWxpemUobG9uZ2hhbmQpIGluIHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJlZml4LmpzICsgcGFzY2FsaXplKGxvbmdoYW5kKSBpbiBzdHlsZSkge1xuICAgICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD10ZXh0LW9yaWVudGF0aW9uXG5cbnZhciB0ZXh0T3JpZW50YXRpb24gPSB7XG4gIG5vUHJlZmlsbDogWyd0ZXh0LW9yaWVudGF0aW9uJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICd0ZXh0LW9yaWVudGF0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC52ZW5kb3IgPT09ICdhcHBsZScgJiYgIXByZWZpeC5pc1RvdWNoKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD10cmFuc2Zvcm1cblxudmFyIHRyYW5zZm9ybSA9IHtcbiAgbm9QcmVmaWxsOiBbJ3RyYW5zZm9ybSddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvcCAhPT0gJ3RyYW5zZm9ybScpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChvcHRpb25zLnRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9dHJhbnNpdGlvblxuXG52YXIgdHJhbnNpdGlvbiA9IHtcbiAgbm9QcmVmaWxsOiBbJ3RyYW5zaXRpb24nXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb3AgIT09ICd0cmFuc2l0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9d3JpdGluZy1tb2RlXG5cbnZhciB3cml0aW5nTW9kZSA9IHtcbiAgbm9QcmVmaWxsOiBbJ3dyaXRpbmctbW9kZSddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAnd3JpdGluZy1tb2RlJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ1dlYmtpdCcgfHwgcHJlZml4LmpzID09PSAnbXMnICYmIHByZWZpeC5icm93c2VyICE9PSAnZWRnZScpIHtcbiAgICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXVzZXItc2VsZWN0XG5cbnZhciB1c2VyU2VsZWN0ID0ge1xuICBub1ByZWZpbGw6IFsndXNlci1zZWxlY3QnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ3VzZXItc2VsZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ01veicgfHwgcHJlZml4LmpzID09PSAnbXMnIHx8IHByZWZpeC52ZW5kb3IgPT09ICdhcHBsZScpIHtcbiAgICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW11bHRpY29sdW1uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXIvaXNzdWVzLzQ5MVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyL2lzc3Vlcy8xNzdcblxudmFyIGJyZWFrUHJvcHNPbGQgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL15icmVhay0vLnRlc3QocHJvcCkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnKSB7XG4gICAgICB2YXIganNQcm9wID0gXCJXZWJraXRDb2x1bW5cIiArIHBhc2NhbGl6ZShwcm9wKTtcbiAgICAgIHJldHVybiBqc1Byb3AgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgXCJjb2x1bW4tXCIgKyBwcm9wIDogZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ01veicpIHtcbiAgICAgIHZhciBfanNQcm9wID0gXCJwYWdlXCIgKyBwYXNjYWxpemUocHJvcCk7XG5cbiAgICAgIHJldHVybiBfanNQcm9wIGluIHN0eWxlID8gXCJwYWdlLVwiICsgcHJvcCA6IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N0Y3NzL2F1dG9wcmVmaXhlci9pc3N1ZXMvMzI0LlxuXG52YXIgaW5saW5lTG9naWNhbE9sZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgaWYgKCEvXihib3JkZXJ8bWFyZ2lufHBhZGRpbmcpLWlubGluZS8udGVzdChwcm9wKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdNb3onKSByZXR1cm4gcHJvcDtcbiAgICB2YXIgbmV3UHJvcCA9IHByb3AucmVwbGFjZSgnLWlubGluZScsICcnKTtcbiAgICByZXR1cm4gcHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3ApIGluIHN0eWxlID8gcHJlZml4LmNzcyArIG5ld1Byb3AgOiBmYWxzZTtcbiAgfVxufTtcblxuLy8gQ2FtZWxpemF0aW9uIGlzIHJlcXVpcmVkIGJlY2F1c2Ugd2UgY2FuJ3QgdGVzdCB1c2luZy5cbi8vIENTUyBzeW50YXggZm9yIGUuZy4gaW4gRkYuXG5cbnZhciB1bnByZWZpeGVkID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUpIHtcbiAgICByZXR1cm4gY2FtZWxpemUocHJvcCkgaW4gc3R5bGUgPyBwcm9wIDogZmFsc2U7XG4gIH1cbn07XG5cbnZhciBwcmVmaXhlZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgdmFyIHBhc2NhbGl6ZWQgPSBwYXNjYWxpemUocHJvcCk7IC8vIFJldHVybiBjdXN0b20gQ1NTIHZhcmlhYmxlIHdpdGhvdXQgcHJlZml4aW5nLlxuXG4gICAgaWYgKHByb3BbMF0gPT09ICctJykgcmV0dXJuIHByb3A7IC8vIFJldHVybiBhbHJlYWR5IHByZWZpeGVkIHZhbHVlIHdpdGhvdXQgcHJlZml4aW5nLlxuXG4gICAgaWYgKHByb3BbMF0gPT09ICctJyAmJiBwcm9wWzFdID09PSAnLScpIHJldHVybiBwcm9wO1xuICAgIGlmIChwcmVmaXguanMgKyBwYXNjYWxpemVkIGluIHN0eWxlKSByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7IC8vIFRyeSB3ZWJraXQgZmFsbGJhY2suXG5cbiAgICBpZiAocHJlZml4LmpzICE9PSAnV2Via2l0JyAmJiBcIldlYmtpdFwiICsgcGFzY2FsaXplZCBpbiBzdHlsZSkgcmV0dXJuIFwiLXdlYmtpdC1cIiArIHByb3A7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2Nyb2xsLXNuYXBcblxudmFyIHNjcm9sbFNuYXAgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3Auc3Vic3RyaW5nKDAsIDExKSAhPT0gJ3Njcm9sbC1zbmFwJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykge1xuICAgICAgcmV0dXJuIFwiXCIgKyBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW92ZXJzY3JvbGwtYmVoYXZpb3JcblxudmFyIG92ZXJzY3JvbGxCZWhhdmlvciA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ292ZXJzY3JvbGwtYmVoYXZpb3InKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnbXMnKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIFwic2Nyb2xsLWNoYWluaW5nXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbnZhciBwcm9wTWFwID0ge1xuICAnZmxleC1ncm93JzogJ2ZsZXgtcG9zaXRpdmUnLFxuICAnZmxleC1zaHJpbmsnOiAnZmxleC1uZWdhdGl2ZScsXG4gICdmbGV4LWJhc2lzJzogJ2ZsZXgtcHJlZmVycmVkLXNpemUnLFxuICAnanVzdGlmeS1jb250ZW50JzogJ2ZsZXgtcGFjaycsXG4gIG9yZGVyOiAnZmxleC1vcmRlcicsXG4gICdhbGlnbi1pdGVtcyc6ICdmbGV4LWFsaWduJyxcbiAgJ2FsaWduLWNvbnRlbnQnOiAnZmxleC1saW5lLXBhY2snIC8vICdhbGlnbi1zZWxmJyBpcyBoYW5kbGVkIGJ5ICdhbGlnbi1zZWxmJyBwbHVnaW4uXG5cbn07IC8vIFN1cHBvcnQgb2xkIGZsZXggc3BlYyBmcm9tIDIwMTIuXG5cbnZhciBmbGV4MjAxMiA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgdmFyIG5ld1Byb3AgPSBwcm9wTWFwW3Byb3BdO1xuICAgIGlmICghbmV3UHJvcCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcCkgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgbmV3UHJvcCA6IGZhbHNlO1xuICB9XG59O1xuXG52YXIgcHJvcE1hcCQxID0ge1xuICBmbGV4OiAnYm94LWZsZXgnLFxuICAnZmxleC1ncm93JzogJ2JveC1mbGV4JyxcbiAgJ2ZsZXgtZGlyZWN0aW9uJzogWydib3gtb3JpZW50JywgJ2JveC1kaXJlY3Rpb24nXSxcbiAgb3JkZXI6ICdib3gtb3JkaW5hbC1ncm91cCcsXG4gICdhbGlnbi1pdGVtcyc6ICdib3gtYWxpZ24nLFxuICAnZmxleC1mbG93JzogWydib3gtb3JpZW50JywgJ2JveC1kaXJlY3Rpb24nXSxcbiAgJ2p1c3RpZnktY29udGVudCc6ICdib3gtcGFjaydcbn07XG52YXIgcHJvcEtleXMgPSBPYmplY3Qua2V5cyhwcm9wTWFwJDEpO1xuXG52YXIgcHJlZml4Q3NzID0gZnVuY3Rpb24gcHJlZml4Q3NzKHApIHtcbiAgcmV0dXJuIHByZWZpeC5jc3MgKyBwO1xufTsgLy8gU3VwcG9ydCBvbGQgZmxleCBzcGVjIGZyb20gMjAwOS5cblxuXG52YXIgZmxleDIwMDkgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSwgX3JlZikge1xuICAgIHZhciBtdWx0aXBsZSA9IF9yZWYubXVsdGlwbGU7XG5cbiAgICBpZiAocHJvcEtleXMuaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICB2YXIgbmV3UHJvcCA9IHByb3BNYXAkMVtwcm9wXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5ld1Byb3ApKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcCkgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgbmV3UHJvcCA6IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW11bHRpcGxlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3UHJvcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIShwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcFswXSkgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdQcm9wLm1hcChwcmVmaXhDc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gcGx1Z2lucyA9IFtcbi8vICAgLi4ucGx1Z2lucyxcbi8vICAgIGJyZWFrUHJvcHNPbGQsXG4vLyAgICBpbmxpbmVMb2dpY2FsT2xkLFxuLy8gICAgdW5wcmVmaXhlZCxcbi8vICAgIHByZWZpeGVkLFxuLy8gICAgc2Nyb2xsU25hcCxcbi8vICAgIGZsZXgyMDEyLFxuLy8gICAgZmxleDIwMDlcbi8vIF1cbi8vIFBsdWdpbnMgd2l0aG91dCAnbm9QcmVmaWxsJyB2YWx1ZSwgZ29pbmcgbGFzdC5cbi8vICdmbGV4LSonIHBsdWdpbnMgc2hvdWxkIGJlIGF0IHRoZSBib3R0b20uXG4vLyAnZmxleDIwMDknIGdvaW5nIGFmdGVyICdmbGV4MjAxMicuXG4vLyAncHJlZml4ZWQnIGdvaW5nIGFmdGVyICd1bnByZWZpeGVkJ1xuXG52YXIgcGx1Z2lucyA9IFthcHBlYXJlbmNlLCBjb2xvckFkanVzdCwgbWFzaywgdGV4dE9yaWVudGF0aW9uLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIHdyaXRpbmdNb2RlLCB1c2VyU2VsZWN0LCBicmVha1Byb3BzT2xkLCBpbmxpbmVMb2dpY2FsT2xkLCB1bnByZWZpeGVkLCBwcmVmaXhlZCwgc2Nyb2xsU25hcCwgb3ZlcnNjcm9sbEJlaGF2aW9yLCBmbGV4MjAxMiwgZmxleDIwMDldO1xudmFyIHByb3BlcnR5RGV0ZWN0b3JzID0gcGx1Z2lucy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAuc3VwcG9ydGVkUHJvcGVydHk7XG59KS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAuc3VwcG9ydGVkUHJvcGVydHk7XG59KTtcbnZhciBub1ByZWZpbGwgPSBwbHVnaW5zLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcC5ub1ByZWZpbGw7XG59KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIHApIHtcbiAgYS5wdXNoLmFwcGx5KGEsIF90b0NvbnN1bWFibGVBcnJheShwLm5vUHJlZmlsbCkpO1xuICByZXR1cm4gYTtcbn0sIFtdKTtcblxudmFyIGVsO1xudmFyIGNhY2hlID0ge307XG5cbmlmIChpc0luQnJvd3Nlcikge1xuICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy8gV2UgdGVzdCBldmVyeSBwcm9wZXJ0eSBvbiB2ZW5kb3IgcHJlZml4IHJlcXVpcmVtZW50LlxuICAvLyBPbmNlIHRlc3RlZCwgcmVzdWx0IGlzIGNhY2hlZC4gSXQgZ2l2ZXMgdXMgdXAgdG8gNzAlIHBlcmYgYm9vc3QuXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2VsZW1lbnQtc3R5bGUtb2JqZWN0LWFjY2Vzcy12cy1wbGFpbi1vYmplY3RcbiAgLy9cbiAgLy8gUHJlZmlsbCBjYWNoZSB3aXRoIGtub3duIGNzcyBwcm9wZXJ0aWVzIHRvIHJlZHVjZSBhbW91bnQgb2ZcbiAgLy8gcHJvcGVydGllcyB3ZSBuZWVkIHRvIGZlYXR1cmUgdGVzdCBhdCBydW50aW1lLlxuICAvLyBodHRwOi8vZGF2aWR3YWxzaC5uYW1lL3ZlbmRvci1wcmVmaXhcblxuICB2YXIgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICcnKTtcblxuICBmb3IgKHZhciBrZXkkMSBpbiBjb21wdXRlZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBpZiAoIWlzTmFOKGtleSQxKSkgY2FjaGVbY29tcHV0ZWRba2V5JDFdXSA9IGNvbXB1dGVkW2tleSQxXTtcbiAgfSAvLyBQcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNvcnJlY3RseSBkZXRlY3RlZCB1c2luZyB0aGVcbiAgLy8gY2FjaGUgcHJlZmlsbCBtZXRob2QuXG5cblxuICBub1ByZWZpbGwuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBkZWxldGUgY2FjaGVbeF07XG4gIH0pO1xufVxuLyoqXG4gKiBUZXN0IGlmIGEgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCByZXR1cm5zIHN1cHBvcnRlZCBwcm9wZXJ0eSB3aXRoIHZlbmRvclxuICogcHJlZml4IGlmIHJlcXVpcmVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcCBkYXNoIHNlcGFyYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7U3RyaW5nfEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgLy8gRm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgaWYgKCFlbCkgcmV0dXJuIHByb3A7IC8vIFJlbW92ZSBjYWNoZSBmb3IgYmVuY2htYXJrIHRlc3RzIG9yIHJldHVybiBwcm9wZXJ0eSBmcm9tIHRoZSBjYWNoZS5cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdiZW5jaG1hcmsnICYmIGNhY2hlW3Byb3BdICE9IG51bGwpIHtcbiAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gIH0gLy8gQ2hlY2sgaWYgJ3RyYW5zaXRpb24nIG9yICd0cmFuc2Zvcm0nIG5hdGl2ZWx5IHN1cHBvcnRlZCBpbiBicm93c2VyLlxuXG5cbiAgaWYgKHByb3AgPT09ICd0cmFuc2l0aW9uJyB8fCBwcm9wID09PSAndHJhbnNmb3JtJykge1xuICAgIG9wdGlvbnNbcHJvcF0gPSBwcm9wIGluIGVsLnN0eWxlO1xuICB9IC8vIEZpbmQgYSBwbHVnaW4gZm9yIGN1cnJlbnQgcHJlZml4IHByb3BlcnR5LlxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eURldGVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGNhY2hlW3Byb3BdID0gcHJvcGVydHlEZXRlY3RvcnNbaV0ocHJvcCwgZWwuc3R5bGUsIG9wdGlvbnMpOyAvLyBCcmVhayBsb29wLCBpZiB2YWx1ZSBmb3VuZC5cblxuICAgIGlmIChjYWNoZVtwcm9wXSkgYnJlYWs7XG4gIH0gLy8gUmVzZXQgc3R5bGVzIGZvciBjdXJyZW50IHByb3BlcnR5LlxuICAvLyBGaXJlZm94IGNhbiBldmVuIHRocm93IGFuIGVycm9yIGZvciBpbnZhbGlkIHByb3BlcnRpZXMsIGUuZy4sIFwiMFwiLlxuXG5cbiAgdHJ5IHtcbiAgICBlbC5zdHlsZVtwcm9wXSA9ICcnO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY2FjaGVbcHJvcF07XG59XG5cbnZhciBjYWNoZSQxID0ge307XG52YXIgdHJhbnNpdGlvblByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IDEsXG4gICd0cmFuc2l0aW9uLXByb3BlcnR5JzogMSxcbiAgJy13ZWJraXQtdHJhbnNpdGlvbic6IDEsXG4gICctd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHknOiAxXG59O1xudmFyIHRyYW5zUHJvcHNSZWdFeHAgPSAvKF5cXHMqW1xcdy1dKyl8LCAoXFxzKltcXHctXSspKD8hW14oKV0qXFwpKS9nO1xudmFyIGVsJDE7XG4vKipcbiAqIFJldHVybnMgcHJlZml4ZWQgdmFsdWUgdHJhbnNpdGlvbi90cmFuc2Zvcm0gaWYgbmVlZGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYXRjaFxuICogQHBhcmFtIHtTdHJpbmd9IHAxXG4gKiBAcGFyYW0ge1N0cmluZ30gcDJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHByZWZpeFRyYW5zaXRpb25DYWxsYmFjayhtYXRjaCwgcDEsIHAyKSB7XG4gIGlmIChwMSA9PT0gJ3ZhcicpIHJldHVybiAndmFyJztcbiAgaWYgKHAxID09PSAnYWxsJykgcmV0dXJuICdhbGwnO1xuICBpZiAocDIgPT09ICdhbGwnKSByZXR1cm4gJywgYWxsJztcbiAgdmFyIHByZWZpeGVkVmFsdWUgPSBwMSA/IHN1cHBvcnRlZFByb3BlcnR5KHAxKSA6IFwiLCBcIiArIHN1cHBvcnRlZFByb3BlcnR5KHAyKTtcbiAgaWYgKCFwcmVmaXhlZFZhbHVlKSByZXR1cm4gcDEgfHwgcDI7XG4gIHJldHVybiBwcmVmaXhlZFZhbHVlO1xufVxuXG5pZiAoaXNJbkJyb3dzZXIpIGVsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4vKipcbiAqIFJldHVybnMgcHJlZml4ZWQgdmFsdWUgaWYgbmVlZGVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgdmFsdWUgaXMgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSkge1xuICAvLyBGb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nLlxuICB2YXIgcHJlZml4ZWRWYWx1ZSA9IHZhbHVlO1xuICBpZiAoIWVsJDEgfHwgcHJvcGVydHkgPT09ICdjb250ZW50JykgcmV0dXJuIHZhbHVlOyAvLyBJdCBpcyBhIHN0cmluZyBvciBhIG51bWJlciBhcyBhIHN0cmluZyBsaWtlICcxJy5cbiAgLy8gV2Ugd2FudCBvbmx5IHByZWZpeGFibGUgdmFsdWVzIGhlcmUuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcblxuICBpZiAodHlwZW9mIHByZWZpeGVkVmFsdWUgIT09ICdzdHJpbmcnIHx8ICFpc05hTihwYXJzZUludChwcmVmaXhlZFZhbHVlLCAxMCkpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVkVmFsdWU7XG4gIH0gLy8gQ3JlYXRlIGNhY2hlIGtleSBmb3IgY3VycmVudCB2YWx1ZS5cblxuXG4gIHZhciBjYWNoZUtleSA9IHByb3BlcnR5ICsgcHJlZml4ZWRWYWx1ZTsgLy8gUmVtb3ZlIGNhY2hlIGZvciBiZW5jaG1hcmsgdGVzdHMgb3IgcmV0dXJuIHZhbHVlIGZyb20gY2FjaGUuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnYmVuY2htYXJrJyAmJiBjYWNoZSQxW2NhY2hlS2V5XSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGNhY2hlJDFbY2FjaGVLZXldO1xuICB9IC8vIElFIGNhbiBldmVuIHRocm93IGFuIGVycm9yIGluIHNvbWUgY2FzZXMsIGZvciBlLmcuIHN0eWxlLmNvbnRlbnQgPSAnYmFyJy5cblxuXG4gIHRyeSB7XG4gICAgLy8gVGVzdCB2YWx1ZSBhcyBpdCBpcy5cbiAgICBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9IHByZWZpeGVkVmFsdWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFJldHVybiBmYWxzZSBpZiB2YWx1ZSBub3Qgc3VwcG9ydGVkLlxuICAgIGNhY2hlJDFbY2FjaGVLZXldID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIElmICd0cmFuc2l0aW9uJyBvciAndHJhbnNpdGlvbi1wcm9wZXJ0eScgcHJvcGVydHkuXG5cblxuICBpZiAodHJhbnNpdGlvblByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgcHJlZml4ZWRWYWx1ZSA9IHByZWZpeGVkVmFsdWUucmVwbGFjZSh0cmFuc1Byb3BzUmVnRXhwLCBwcmVmaXhUcmFuc2l0aW9uQ2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKGVsJDEuc3R5bGVbcHJvcGVydHldID09PSAnJykge1xuICAgIC8vIFZhbHVlIHdpdGggYSB2ZW5kb3IgcHJlZml4LlxuICAgIHByZWZpeGVkVmFsdWUgPSBwcmVmaXguY3NzICsgcHJlZml4ZWRWYWx1ZTsgLy8gSGFyZGNvZGUgdGVzdCB0byBjb252ZXJ0IFwiZmxleFwiIHRvIFwiLW1zLWZsZXhib3hcIiBmb3IgSUUxMC5cblxuICAgIGlmIChwcmVmaXhlZFZhbHVlID09PSAnLW1zLWZsZXgnKSBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9ICctbXMtZmxleGJveCc7IC8vIFRlc3QgcHJlZml4ZWQgdmFsdWUuXG5cbiAgICBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9IHByZWZpeGVkVmFsdWU7IC8vIFJldHVybiBmYWxzZSBpZiB2YWx1ZSBub3Qgc3VwcG9ydGVkLlxuXG4gICAgaWYgKGVsJDEuc3R5bGVbcHJvcGVydHldID09PSAnJykge1xuICAgICAgY2FjaGUkMVtjYWNoZUtleV0gPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gLy8gUmVzZXQgc3R5bGVzIGZvciBjdXJyZW50IHByb3BlcnR5LlxuXG5cbiAgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSAnJzsgLy8gV3JpdGUgY3VycmVudCB2YWx1ZSB0byBjYWNoZS5cblxuICBjYWNoZSQxW2NhY2hlS2V5XSA9IHByZWZpeGVkVmFsdWU7XG4gIHJldHVybiBjYWNoZSQxW2NhY2hlS2V5XTtcbn1cblxuZXhwb3J0IHsgcHJlZml4LCBzdXBwb3J0ZWRLZXlmcmFtZXMsIHN1cHBvcnRlZFByb3BlcnR5LCBzdXBwb3J0ZWRWYWx1ZSB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIsIHByZWZlci10ZW1wbGF0ZSAqL1xudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZ1xudmFyIG1zUGF0dGVybiA9IC9ebXMtL1xudmFyIGNhY2hlID0ge31cblxuZnVuY3Rpb24gdG9IeXBoZW5Mb3dlcihtYXRjaCkge1xuICByZXR1cm4gJy0nICsgbWF0Y2gudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICByZXR1cm4gY2FjaGVbbmFtZV1cbiAgfVxuXG4gIHZhciBoTmFtZSA9IG5hbWUucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCB0b0h5cGhlbkxvd2VyKVxuICByZXR1cm4gKGNhY2hlW25hbWVdID0gbXNQYXR0ZXJuLnRlc3QoaE5hbWUpID8gJy0nICsgaE5hbWUgOiBoTmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHlwaGVuYXRlU3R5bGVOYW1lXG4iLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydCB2YXIgaXNCcm93c2VyID0gKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih3aW5kb3cpKSA9PT0gXCJvYmplY3RcIiAmJiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZG9jdW1lbnQpKSA9PT0gJ29iamVjdCcgJiYgZG9jdW1lbnQubm9kZVR5cGUgPT09IDk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnJvd3NlcjtcbiIsImltcG9ydCBoeXBoZW5hdGUgZnJvbSAnaHlwaGVuYXRlLXN0eWxlLW5hbWUnO1xuXG4vKipcbiAqIENvbnZlcnQgY2FtZWwgY2FzZWQgcHJvcGVydHkgbmFtZXMgdG8gZGFzaCBzZXBhcmF0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gY29udmVydENhc2Uoc3R5bGUpIHtcbiAgdmFyIGNvbnZlcnRlZCA9IHt9O1xuXG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICB2YXIga2V5ID0gcHJvcC5pbmRleE9mKCctLScpID09PSAwID8gcHJvcCA6IGh5cGhlbmF0ZShwcm9wKTtcbiAgICBjb252ZXJ0ZWRba2V5XSA9IHN0eWxlW3Byb3BdO1xuICB9XG5cbiAgaWYgKHN0eWxlLmZhbGxiYWNrcykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlLmZhbGxiYWNrcykpIGNvbnZlcnRlZC5mYWxsYmFja3MgPSBzdHlsZS5mYWxsYmFja3MubWFwKGNvbnZlcnRDYXNlKTtlbHNlIGNvbnZlcnRlZC5mYWxsYmFja3MgPSBjb252ZXJ0Q2FzZShzdHlsZS5mYWxsYmFja3MpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnZlcnRlZDtcbn1cbi8qKlxuICogQWxsb3cgY2FtZWwgY2FzZWQgcHJvcGVydHkgbmFtZXMgYnkgY29udmVydGluZyB0aGVtIGJhY2sgdG8gZGFzaGVyaXplZC5cbiAqXG4gKiBAcGFyYW0ge1J1bGV9IHJ1bGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZSgpIHtcbiAgZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIC8vIEhhbmRsZSBydWxlcyBsaWtlIEBmb250LWZhY2UsIHdoaWNoIGNhbiBoYXZlIG11bHRpcGxlIHN0eWxlcyBpbiBhbiBhcnJheVxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHlsZVtpbmRleF0gPSBjb252ZXJ0Q2FzZShzdHlsZVtpbmRleF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnZlcnRDYXNlKHN0eWxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3AsIHJ1bGUpIHtcbiAgICBpZiAocHJvcC5pbmRleE9mKCctLScpID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGh5cGhlbmF0ZWRQcm9wID0gaHlwaGVuYXRlKHByb3ApOyAvLyBUaGVyZSB3YXMgbm8gY2FtZWwgY2FzZSBpbiBwbGFjZVxuXG4gICAgaWYgKHByb3AgPT09IGh5cGhlbmF0ZWRQcm9wKSByZXR1cm4gdmFsdWU7XG4gICAgcnVsZS5wcm9wKGh5cGhlbmF0ZWRQcm9wLCB2YWx1ZSk7IC8vIENvcmUgd2lsbCBpZ25vcmUgdGhhdCBwcm9wZXJ0eSB2YWx1ZSB3ZSBzZXQgdGhlIHByb3BlciBvbmUgYWJvdmUuXG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlLFxuICAgIG9uQ2hhbmdlVmFsdWU6IG9uQ2hhbmdlVmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FtZWxDYXNlO1xuIiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcblxuLyoqXG4gKiBTZXQgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9yaWdpbmFsIHJ1bGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3Mgc3RyaW5nXG4gKiBAcmV0dXJuIHtCb29sZWFufSBmbGFnLCBpbmRpY2F0aW5nIGZ1bmN0aW9uIHdhcyBzdWNjZXNzZnVsbCBvciBub3RcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJDbGFzcyhydWxlLCBjbGFzc05hbWUpIHtcbiAgLy8gU2tpcCBmYWxzeSB2YWx1ZXNcbiAgaWYgKCFjbGFzc05hbWUpIHJldHVybiB0cnVlOyAvLyBTdXBwb3J0IGFycmF5IG9mIGNsYXNzIG5hbWVzIGB7Y29tcG9zZXM6IFsnZm9vJywgJ2JhciddfWBcblxuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc05hbWUpKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGNsYXNzTmFtZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBpc1NldHRlZCA9IHJlZ2lzdGVyQ2xhc3MocnVsZSwgY2xhc3NOYW1lW2luZGV4XSk7XG4gICAgICBpZiAoIWlzU2V0dGVkKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gU3VwcG9ydCBzcGFjZSBzZXBhcmF0ZWQgY2xhc3MgbmFtZXMgYHtjb21wb3NlczogJ2ZvbyBiYXInfWBcblxuXG4gIGlmIChjbGFzc05hbWUuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICByZXR1cm4gcmVnaXN0ZXJDbGFzcyhydWxlLCBjbGFzc05hbWUuc3BsaXQoJyAnKSk7XG4gIH1cblxuICB2YXIgX3JlZiA9IHJ1bGUub3B0aW9ucyxcbiAgICAgIHBhcmVudCA9IF9yZWYucGFyZW50OyAvLyBJdCBpcyBhIHJlZiB0byBhIGxvY2FsIHJ1bGUuXG5cbiAgaWYgKGNsYXNzTmFtZVswXSA9PT0gJyQnKSB7XG4gICAgdmFyIHJlZlJ1bGUgPSBwYXJlbnQuZ2V0UnVsZShjbGFzc05hbWUuc3Vic3RyKDEpKTtcblxuICAgIGlmICghcmVmUnVsZSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBSZWZlcmVuY2VkIHJ1bGUgaXMgbm90IGRlZmluZWQuIFxcblwiICsgcnVsZS50b1N0cmluZygpKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocmVmUnVsZSA9PT0gcnVsZSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBDeWNsaWMgY29tcG9zaXRpb24gZGV0ZWN0ZWQuIFxcblwiICsgcnVsZS50b1N0cmluZygpKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJlbnQuY2xhc3Nlc1tydWxlLmtleV0gKz0gXCIgXCIgKyBwYXJlbnQuY2xhc3Nlc1tyZWZSdWxlLmtleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwYXJlbnQuY2xhc3Nlc1tydWxlLmtleV0gKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBDb252ZXJ0IGNvbXBvc2UgcHJvcGVydHkgdG8gYWRkaXRpb25hbCBjbGFzcywgcmVtb3ZlIHByb3BlcnR5IGZyb20gb3JpZ2luYWwgc3R5bGVzLlxuICpcbiAqIEBwYXJhbSB7UnVsZX0gcnVsZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIGpzc0NvbXBvc2UoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgaWYgKCEoJ2NvbXBvc2VzJyBpbiBzdHlsZSkpIHJldHVybiBzdHlsZTtcbiAgICByZWdpc3RlckNsYXNzKHJ1bGUsIHN0eWxlLmNvbXBvc2VzKTsgLy8gUmVtb3ZlIGNvbXBvc2VzIHByb3BlcnR5IHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcC5cblxuICAgIGRlbGV0ZSBzdHlsZS5jb21wb3NlcztcbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NDb21wb3NlO1xuIiwiaW1wb3J0IHsgaGFzQ1NTVE9NU3VwcG9ydCB9IGZyb20gJ2pzcyc7XG5cbnZhciBweCA9IGhhc0NTU1RPTVN1cHBvcnQgJiYgQ1NTID8gQ1NTLnB4IDogJ3B4JztcbnZhciBtcyA9IGhhc0NTU1RPTVN1cHBvcnQgJiYgQ1NTID8gQ1NTLm1zIDogJ21zJztcbnZhciBwZXJjZW50ID0gaGFzQ1NTVE9NU3VwcG9ydCAmJiBDU1MgPyBDU1MucGVyY2VudCA6ICclJztcbi8qKlxuICogR2VuZXJhdGVkIGpzcy1wbHVnaW4tZGVmYXVsdC11bml0IENTUyBwcm9wZXJ0eSB1bml0c1xuICpcbiAqIEB0eXBlIG9iamVjdFxuICovXG5cbnZhciBkZWZhdWx0VW5pdHMgPSB7XG4gIC8vIEFuaW1hdGlvbiBwcm9wZXJ0aWVzXG4gICdhbmltYXRpb24tZGVsYXknOiBtcyxcbiAgJ2FuaW1hdGlvbi1kdXJhdGlvbic6IG1zLFxuICAvLyBCYWNrZ3JvdW5kIHByb3BlcnRpZXNcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBweCxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24teCc6IHB4LFxuICAnYmFja2dyb3VuZC1wb3NpdGlvbi15JzogcHgsXG4gICdiYWNrZ3JvdW5kLXNpemUnOiBweCxcbiAgLy8gQm9yZGVyIFByb3BlcnRpZXNcbiAgYm9yZGVyOiBweCxcbiAgJ2JvcmRlci1ib3R0b20nOiBweCxcbiAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItYm90dG9tLXdpZHRoJzogcHgsXG4gICdib3JkZXItbGVmdCc6IHB4LFxuICAnYm9yZGVyLWxlZnQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1yaWdodCc6IHB4LFxuICAnYm9yZGVyLXJpZ2h0LXdpZHRoJzogcHgsXG4gICdib3JkZXItdG9wJzogcHgsXG4gICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLXRvcC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLXdpZHRoJzogcHgsXG4gIC8vIE1hcmdpbiBwcm9wZXJ0aWVzXG4gIG1hcmdpbjogcHgsXG4gICdtYXJnaW4tYm90dG9tJzogcHgsXG4gICdtYXJnaW4tbGVmdCc6IHB4LFxuICAnbWFyZ2luLXJpZ2h0JzogcHgsXG4gICdtYXJnaW4tdG9wJzogcHgsXG4gIC8vIFBhZGRpbmcgcHJvcGVydGllc1xuICBwYWRkaW5nOiBweCxcbiAgJ3BhZGRpbmctYm90dG9tJzogcHgsXG4gICdwYWRkaW5nLWxlZnQnOiBweCxcbiAgJ3BhZGRpbmctcmlnaHQnOiBweCxcbiAgJ3BhZGRpbmctdG9wJzogcHgsXG4gIC8vIE1hc2sgcHJvcGVydGllc1xuICAnbWFzay1wb3NpdGlvbi14JzogcHgsXG4gICdtYXNrLXBvc2l0aW9uLXknOiBweCxcbiAgJ21hc2stc2l6ZSc6IHB4LFxuICAvLyBXaWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAgaGVpZ2h0OiBweCxcbiAgd2lkdGg6IHB4LFxuICAnbWluLWhlaWdodCc6IHB4LFxuICAnbWF4LWhlaWdodCc6IHB4LFxuICAnbWluLXdpZHRoJzogcHgsXG4gICdtYXgtd2lkdGgnOiBweCxcbiAgLy8gUG9zaXRpb24gcHJvcGVydGllc1xuICBib3R0b206IHB4LFxuICBsZWZ0OiBweCxcbiAgdG9wOiBweCxcbiAgcmlnaHQ6IHB4LFxuICAvLyBTaGFkb3cgcHJvcGVydGllc1xuICAnYm94LXNoYWRvdyc6IHB4LFxuICAndGV4dC1zaGFkb3cnOiBweCxcbiAgLy8gQ29sdW1uIHByb3BlcnRpZXNcbiAgJ2NvbHVtbi1nYXAnOiBweCxcbiAgJ2NvbHVtbi1ydWxlJzogcHgsXG4gICdjb2x1bW4tcnVsZS13aWR0aCc6IHB4LFxuICAnY29sdW1uLXdpZHRoJzogcHgsXG4gIC8vIEZvbnQgYW5kIHRleHQgcHJvcGVydGllc1xuICAnZm9udC1zaXplJzogcHgsXG4gICdmb250LXNpemUtZGVsdGEnOiBweCxcbiAgJ2xldHRlci1zcGFjaW5nJzogcHgsXG4gICd0ZXh0LWluZGVudCc6IHB4LFxuICAndGV4dC1zdHJva2UnOiBweCxcbiAgJ3RleHQtc3Ryb2tlLXdpZHRoJzogcHgsXG4gICd3b3JkLXNwYWNpbmcnOiBweCxcbiAgLy8gTW90aW9uIHByb3BlcnRpZXNcbiAgbW90aW9uOiBweCxcbiAgJ21vdGlvbi1vZmZzZXQnOiBweCxcbiAgLy8gT3V0bGluZSBwcm9wZXJ0aWVzXG4gIG91dGxpbmU6IHB4LFxuICAnb3V0bGluZS1vZmZzZXQnOiBweCxcbiAgJ291dGxpbmUtd2lkdGgnOiBweCxcbiAgLy8gUGVyc3BlY3RpdmUgcHJvcGVydGllc1xuICBwZXJzcGVjdGl2ZTogcHgsXG4gICdwZXJzcGVjdGl2ZS1vcmlnaW4teCc6IHBlcmNlbnQsXG4gICdwZXJzcGVjdGl2ZS1vcmlnaW4teSc6IHBlcmNlbnQsXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICd0cmFuc2Zvcm0tb3JpZ2luJzogcGVyY2VudCxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4teCc6IHBlcmNlbnQsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXknOiBwZXJjZW50LFxuICAndHJhbnNmb3JtLW9yaWdpbi16JzogcGVyY2VudCxcbiAgLy8gVHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gICd0cmFuc2l0aW9uLWRlbGF5JzogbXMsXG4gICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogbXMsXG4gIC8vIEFsaWdubWVudCBwcm9wZXJ0aWVzXG4gICd2ZXJ0aWNhbC1hbGlnbic6IHB4LFxuICAnZmxleC1iYXNpcyc6IHB4LFxuICAvLyBTb21lIHJhbmRvbSBwcm9wZXJ0aWVzXG4gICdzaGFwZS1tYXJnaW4nOiBweCxcbiAgc2l6ZTogcHgsXG4gIC8vIEdyaWQgcHJvcGVydGllc1xuICBncmlkOiBweCxcbiAgJ2dyaWQtZ2FwJzogcHgsXG4gICdncmlkLXJvdy1nYXAnOiBweCxcbiAgJ2dyaWQtY29sdW1uLWdhcCc6IHB4LFxuICAnZ3JpZC10ZW1wbGF0ZS1yb3dzJzogcHgsXG4gICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnOiBweCxcbiAgJ2dyaWQtYXV0by1yb3dzJzogcHgsXG4gICdncmlkLWF1dG8tY29sdW1ucyc6IHB4LFxuICAvLyBOb3QgZXhpc3RpbmcgcHJvcGVydGllcy5cbiAgLy8gVXNlZCB0byBhdm9pZCBpc3N1ZXMgd2l0aCBqc3MtcGx1Z2luLWV4cGFuZCBpbnRlZ3JhdGlvbi5cbiAgJ2JveC1zaGFkb3cteCc6IHB4LFxuICAnYm94LXNoYWRvdy15JzogcHgsXG4gICdib3gtc2hhZG93LWJsdXInOiBweCxcbiAgJ2JveC1zaGFkb3ctc3ByZWFkJzogcHgsXG4gICdmb250LWxpbmUtaGVpZ2h0JzogcHgsXG4gICd0ZXh0LXNoYWRvdy14JzogcHgsXG4gICd0ZXh0LXNoYWRvdy15JzogcHgsXG4gICd0ZXh0LXNoYWRvdy1ibHVyJzogcHhcbn07XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBvYmplY3QgYW5kIGFkZHMgYSBjYW1lbCBjYXNlZCBwcm9wZXJ0eSB2ZXJzaW9uLlxuICovXG5mdW5jdGlvbiBhZGRDYW1lbENhc2VkVmVyc2lvbihvYmopIHtcbiAgdmFyIHJlZ0V4cCA9IC8oLVthLXpdKS9nO1xuXG4gIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShzdHIpIHtcbiAgICByZXR1cm4gc3RyWzFdLnRvVXBwZXJDYXNlKCk7XG4gIH07XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuXG4gIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgbmV3T2JqW19rZXldID0gb2JqW19rZXldO1xuICAgIG5ld09ialtfa2V5LnJlcGxhY2UocmVnRXhwLCByZXBsYWNlKV0gPSBvYmpbX2tleV07XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG52YXIgdW5pdHMgPSBhZGRDYW1lbENhc2VkVmVyc2lvbihkZWZhdWx0VW5pdHMpO1xuLyoqXG4gKiBSZWN1cnNpdmUgZGVlcCBzdHlsZSBwYXNzaW5nIGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gaXRlcmF0ZShwcm9wLCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVbaV0gPSBpdGVyYXRlKHByb3AsIHZhbHVlW2ldLCBvcHRpb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJykge1xuICAgICAgZm9yICh2YXIgaW5uZXJQcm9wIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlW2lubmVyUHJvcF0gPSBpdGVyYXRlKGlubmVyUHJvcCwgdmFsdWVbaW5uZXJQcm9wXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pbm5lclByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFsdWVbX2lubmVyUHJvcF0gPSBpdGVyYXRlKHByb3AgKyBcIi1cIiArIF9pbm5lclByb3AsIHZhbHVlW19pbm5lclByb3BdLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhciB1bml0ID0gb3B0aW9uc1twcm9wXSB8fCB1bml0c1twcm9wXTtcblxuICAgIGlmICh1bml0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHVuaXQgPT09ICdmdW5jdGlvbicgPyB1bml0KHZhbHVlKS50b1N0cmluZygpIDogXCJcIiArIHZhbHVlICsgdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQWRkIHVuaXQgdG8gbnVtZXJpYyB2YWx1ZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBkZWZhdWx0VW5pdChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgY2FtZWxDYXNlZE9wdGlvbnMgPSBhZGRDYW1lbENhc2VkVmVyc2lvbihvcHRpb25zKTtcblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcblxuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHN0eWxlW3Byb3BdID0gaXRlcmF0ZShwcm9wLCBzdHlsZVtwcm9wXSwgY2FtZWxDYXNlZE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3ApIHtcbiAgICByZXR1cm4gaXRlcmF0ZShwcm9wLCB2YWx1ZSwgY2FtZWxDYXNlZE9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VW5pdDtcbiIsIi8qKlxuICogQSBzY2hlbWUgZm9yIGNvbnZlcnRpbmcgcHJvcGVydGllcyBmcm9tIGFycmF5IHRvIHJlZ3VsYXIgc3R5bGUuXG4gKiBBbGwgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cgd2lsbCBiZSB0cmFuc2Zvcm1lZCB0byBhIHN0cmluZyBzZXBhcmF0ZWQgYnkgc3BhY2UuXG4gKi9cbnZhciBwcm9wQXJyYXkgPSB7XG4gICdiYWNrZ3JvdW5kLXNpemUnOiB0cnVlLFxuICAnYmFja2dyb3VuZC1wb3NpdGlvbic6IHRydWUsXG4gIGJvcmRlcjogdHJ1ZSxcbiAgJ2JvcmRlci1ib3R0b20nOiB0cnVlLFxuICAnYm9yZGVyLWxlZnQnOiB0cnVlLFxuICAnYm9yZGVyLXRvcCc6IHRydWUsXG4gICdib3JkZXItcmlnaHQnOiB0cnVlLFxuICAnYm9yZGVyLXJhZGl1cyc6IHRydWUsXG4gICdib3JkZXItaW1hZ2UnOiB0cnVlLFxuICAnYm9yZGVyLXdpZHRoJzogdHJ1ZSxcbiAgJ2JvcmRlci1zdHlsZSc6IHRydWUsXG4gICdib3JkZXItY29sb3InOiB0cnVlLFxuICAnYm94LXNoYWRvdyc6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIG1hcmdpbjogdHJ1ZSxcbiAgcGFkZGluZzogdHJ1ZSxcbiAgb3V0bGluZTogdHJ1ZSxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4nOiB0cnVlLFxuICB0cmFuc2Zvcm06IHRydWUsXG4gIHRyYW5zaXRpb246IHRydWVcbiAgLyoqXG4gICAqIEEgc2NoZW1lIGZvciBjb252ZXJ0aW5nIGFycmF5cyB0byByZWd1bGFyIHN0eWxlcyBpbnNpZGUgb2Ygb2JqZWN0cy5cbiAgICogRm9yIGUuZy46IFwie3Bvc2l0aW9uOiBbMCwgMF19XCIgPT4gXCJiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XCIuXG4gICAqL1xuXG59O1xudmFyIHByb3BBcnJheUluT2JqID0ge1xuICBwb3NpdGlvbjogdHJ1ZSxcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvblxuICBzaXplOiB0cnVlIC8vIGJhY2tncm91bmQtc2l6ZVxuXG4gIC8qKlxuICAgKiBBIHNjaGVtZSBmb3IgcGFyc2luZyBhbmQgYnVpbGRpbmcgY29ycmVjdCBzdHlsZXMgZnJvbSBwYXNzZWQgb2JqZWN0cy5cbiAgICovXG5cbn07XG52YXIgcHJvcE9iaiA9IHtcbiAgcGFkZGluZzoge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9LFxuICBtYXJnaW46IHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfSxcbiAgYmFja2dyb3VuZDoge1xuICAgIGF0dGFjaG1lbnQ6IG51bGwsXG4gICAgY29sb3I6IG51bGwsXG4gICAgaW1hZ2U6IG51bGwsXG4gICAgcG9zaXRpb246IG51bGwsXG4gICAgcmVwZWF0OiBudWxsXG4gIH0sXG4gIGJvcmRlcjoge1xuICAgIHdpZHRoOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNvbG9yOiBudWxsXG4gIH0sXG4gICdib3JkZXItdG9wJzoge1xuICAgIHdpZHRoOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNvbG9yOiBudWxsXG4gIH0sXG4gICdib3JkZXItcmlnaHQnOiB7XG4gICAgd2lkdGg6IG51bGwsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgY29sb3I6IG51bGxcbiAgfSxcbiAgJ2JvcmRlci1ib3R0b20nOiB7XG4gICAgd2lkdGg6IG51bGwsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgY29sb3I6IG51bGxcbiAgfSxcbiAgJ2JvcmRlci1sZWZ0Jzoge1xuICAgIHdpZHRoOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNvbG9yOiBudWxsXG4gIH0sXG4gIG91dGxpbmU6IHtcbiAgICB3aWR0aDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjb2xvcjogbnVsbFxuICB9LFxuICAnbGlzdC1zdHlsZSc6IHtcbiAgICB0eXBlOiBudWxsLFxuICAgIHBvc2l0aW9uOiBudWxsLFxuICAgIGltYWdlOiBudWxsXG4gIH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICBwcm9wZXJ0eTogbnVsbCxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICAndGltaW5nLWZ1bmN0aW9uJzogbnVsbCxcbiAgICB0aW1pbmdGdW5jdGlvbjogbnVsbCxcbiAgICAvLyBOZWVkZWQgZm9yIGF2b2lkaW5nIGNvbWlsYXRpb24gaXNzdWVzIHdpdGgganNzLXBsdWdpbi1jYW1lbC1jYXNlXG4gICAgZGVsYXk6IG51bGxcbiAgfSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgbmFtZTogbnVsbCxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICAndGltaW5nLWZ1bmN0aW9uJzogbnVsbCxcbiAgICB0aW1pbmdGdW5jdGlvbjogbnVsbCxcbiAgICAvLyBOZWVkZWQgdG8gYXZvaWQgY29tcGlsYXRpb24gaXNzdWVzIHdpdGgganNzLXBsdWdpbi1jYW1lbC1jYXNlXG4gICAgZGVsYXk6IG51bGwsXG4gICAgJ2l0ZXJhdGlvbi1jb3VudCc6IG51bGwsXG4gICAgaXRlcmF0aW9uQ291bnQ6IG51bGwsXG4gICAgLy8gTmVlZGVkIHRvIGF2b2lkIGNvbXBpbGF0aW9uIGlzc3VlcyB3aXRoIGpzcy1wbHVnaW4tY2FtZWwtY2FzZVxuICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAnZmlsbC1tb2RlJzogbnVsbCxcbiAgICBmaWxsTW9kZTogbnVsbCxcbiAgICAvLyBOZWVkZWQgdG8gYXZvaWQgY29tcGlsYXRpb24gaXNzdWVzIHdpdGgganNzLXBsdWdpbi1jYW1lbC1jYXNlXG4gICAgJ3BsYXktc3RhdGUnOiBudWxsLFxuICAgIHBsYXlTdGF0ZTogbnVsbCAvLyBOZWVkZWQgdG8gYXZvaWQgY29tcGlsYXRpb24gaXNzdWVzIHdpdGgganNzLXBsdWdpbi1jYW1lbC1jYXNlXG5cbiAgfSxcbiAgJ2JveC1zaGFkb3cnOiB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGJsdXI6IDAsXG4gICAgc3ByZWFkOiAwLFxuICAgIGNvbG9yOiBudWxsLFxuICAgIGluc2V0OiBudWxsXG4gIH0sXG4gICd0ZXh0LXNoYWRvdyc6IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgYmx1cjogbnVsbCxcbiAgICBjb2xvcjogbnVsbFxuICB9XG4gIC8qKlxuICAgKiBBIHNjaGVtZSBmb3IgY29udmVydGluZyBub24tc3RhbmRhcnQgcHJvcGVydGllcyBpbnNpZGUgb2JqZWN0LlxuICAgKiBGb3IgZS5nLjogaW5jbHVkZSAnYm9yZGVyLXJhZGl1cycgcHJvcGVydHkgaW5zaWRlICdib3JkZXInIG9iamVjdC5cbiAgICovXG5cbn07XG52YXIgY3VzdG9tUHJvcE9iaiA9IHtcbiAgYm9yZGVyOiB7XG4gICAgcmFkaXVzOiAnYm9yZGVyLXJhZGl1cycsXG4gICAgaW1hZ2U6ICdib3JkZXItaW1hZ2UnLFxuICAgIHdpZHRoOiAnYm9yZGVyLXdpZHRoJyxcbiAgICBzdHlsZTogJ2JvcmRlci1zdHlsZScsXG4gICAgY29sb3I6ICdib3JkZXItY29sb3InXG4gIH0sXG4gICdib3JkZXItYm90dG9tJzoge1xuICAgIHdpZHRoOiAnYm9yZGVyLWJvdHRvbS13aWR0aCcsXG4gICAgc3R5bGU6ICdib3JkZXItYm90dG9tLXN0eWxlJyxcbiAgICBjb2xvcjogJ2JvcmRlci1ib3R0b20tY29sb3InXG4gIH0sXG4gICdib3JkZXItdG9wJzoge1xuICAgIHdpZHRoOiAnYm9yZGVyLXRvcC13aWR0aCcsXG4gICAgc3R5bGU6ICdib3JkZXItdG9wLXN0eWxlJyxcbiAgICBjb2xvcjogJ2JvcmRlci10b3AtY29sb3InXG4gIH0sXG4gICdib3JkZXItbGVmdCc6IHtcbiAgICB3aWR0aDogJ2JvcmRlci1sZWZ0LXdpZHRoJyxcbiAgICBzdHlsZTogJ2JvcmRlci1sZWZ0LXN0eWxlJyxcbiAgICBjb2xvcjogJ2JvcmRlci1sZWZ0LWNvbG9yJ1xuICB9LFxuICAnYm9yZGVyLXJpZ2h0Jzoge1xuICAgIHdpZHRoOiAnYm9yZGVyLXJpZ2h0LXdpZHRoJyxcbiAgICBzdHlsZTogJ2JvcmRlci1yaWdodC1zdHlsZScsXG4gICAgY29sb3I6ICdib3JkZXItcmlnaHQtY29sb3InXG4gIH0sXG4gIGJhY2tncm91bmQ6IHtcbiAgICBzaXplOiAnYmFja2dyb3VuZC1zaXplJyxcbiAgICBpbWFnZTogJ2JhY2tncm91bmQtaW1hZ2UnXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBzdHlsZTogJ2ZvbnQtc3R5bGUnLFxuICAgIHZhcmlhbnQ6ICdmb250LXZhcmlhbnQnLFxuICAgIHdlaWdodDogJ2ZvbnQtd2VpZ2h0JyxcbiAgICBzdHJldGNoOiAnZm9udC1zdHJldGNoJyxcbiAgICBzaXplOiAnZm9udC1zaXplJyxcbiAgICBmYW1pbHk6ICdmb250LWZhbWlseScsXG4gICAgbGluZUhlaWdodDogJ2xpbmUtaGVpZ2h0JyxcbiAgICAvLyBOZWVkZWQgdG8gYXZvaWQgY29tcGlsYXRpb24gaXNzdWVzIHdpdGgganNzLXBsdWdpbi1jYW1lbC1jYXNlXG4gICAgJ2xpbmUtaGVpZ2h0JzogJ2xpbmUtaGVpZ2h0J1xuICB9LFxuICBmbGV4OiB7XG4gICAgZ3JvdzogJ2ZsZXgtZ3JvdycsXG4gICAgYmFzaXM6ICdmbGV4LWJhc2lzJyxcbiAgICBkaXJlY3Rpb246ICdmbGV4LWRpcmVjdGlvbicsXG4gICAgd3JhcDogJ2ZsZXgtd3JhcCcsXG4gICAgZmxvdzogJ2ZsZXgtZmxvdycsXG4gICAgc2hyaW5rOiAnZmxleC1zaHJpbmsnXG4gIH0sXG4gIGFsaWduOiB7XG4gICAgc2VsZjogJ2FsaWduLXNlbGYnLFxuICAgIGl0ZW1zOiAnYWxpZ24taXRlbXMnLFxuICAgIGNvbnRlbnQ6ICdhbGlnbi1jb250ZW50J1xuICB9LFxuICBncmlkOiB7XG4gICAgJ3RlbXBsYXRlLWNvbHVtbnMnOiAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJyxcbiAgICB0ZW1wbGF0ZUNvbHVtbnM6ICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnLFxuICAgICd0ZW1wbGF0ZS1yb3dzJzogJ2dyaWQtdGVtcGxhdGUtcm93cycsXG4gICAgdGVtcGxhdGVSb3dzOiAnZ3JpZC10ZW1wbGF0ZS1yb3dzJyxcbiAgICAndGVtcGxhdGUtYXJlYXMnOiAnZ3JpZC10ZW1wbGF0ZS1hcmVhcycsXG4gICAgdGVtcGxhdGVBcmVhczogJ2dyaWQtdGVtcGxhdGUtYXJlYXMnLFxuICAgIHRlbXBsYXRlOiAnZ3JpZC10ZW1wbGF0ZScsXG4gICAgJ2F1dG8tY29sdW1ucyc6ICdncmlkLWF1dG8tY29sdW1ucycsXG4gICAgYXV0b0NvbHVtbnM6ICdncmlkLWF1dG8tY29sdW1ucycsXG4gICAgJ2F1dG8tcm93cyc6ICdncmlkLWF1dG8tcm93cycsXG4gICAgYXV0b1Jvd3M6ICdncmlkLWF1dG8tcm93cycsXG4gICAgJ2F1dG8tZmxvdyc6ICdncmlkLWF1dG8tZmxvdycsXG4gICAgYXV0b0Zsb3c6ICdncmlkLWF1dG8tZmxvdycsXG4gICAgcm93OiAnZ3JpZC1yb3cnLFxuICAgIGNvbHVtbjogJ2dyaWQtY29sdW1uJyxcbiAgICAncm93LXN0YXJ0JzogJ2dyaWQtcm93LXN0YXJ0JyxcbiAgICByb3dTdGFydDogJ2dyaWQtcm93LXN0YXJ0JyxcbiAgICAncm93LWVuZCc6ICdncmlkLXJvdy1lbmQnLFxuICAgIHJvd0VuZDogJ2dyaWQtcm93LWVuZCcsXG4gICAgJ2NvbHVtbi1zdGFydCc6ICdncmlkLWNvbHVtbi1zdGFydCcsXG4gICAgY29sdW1uU3RhcnQ6ICdncmlkLWNvbHVtbi1zdGFydCcsXG4gICAgJ2NvbHVtbi1lbmQnOiAnZ3JpZC1jb2x1bW4tZW5kJyxcbiAgICBjb2x1bW5FbmQ6ICdncmlkLWNvbHVtbi1lbmQnLFxuICAgIGFyZWE6ICdncmlkLWFyZWEnLFxuICAgIGdhcDogJ2dyaWQtZ2FwJyxcbiAgICAncm93LWdhcCc6ICdncmlkLXJvdy1nYXAnLFxuICAgIHJvd0dhcDogJ2dyaWQtcm93LWdhcCcsXG4gICAgJ2NvbHVtbi1nYXAnOiAnZ3JpZC1jb2x1bW4tZ2FwJyxcbiAgICBjb2x1bW5HYXA6ICdncmlkLWNvbHVtbi1nYXAnXG4gIH1cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbi8qKlxuICogTWFwIHZhbHVlcyBieSBnaXZlbiBwcm9wLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IG9mIHZhbHVlc1xuICogQHBhcmFtIHtTdHJpbmd9IG9yaWdpbmFsIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gb3JpZ2luYWwgcnVsZVxuICogQHJldHVybiB7U3RyaW5nfSBtYXBwZWQgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIG1hcFZhbHVlc0J5UHJvcCh2YWx1ZSwgcHJvcCwgcnVsZSkge1xuICByZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIG9iamVjdFRvQXJyYXkoaXRlbSwgcHJvcCwgcnVsZSwgZmFsc2UsIHRydWUpO1xuICB9KTtcbn1cbi8qKlxuICogQ29udmVydCBhcnJheSB0byBuZXN0ZWQgYXJyYXksIGlmIG5lZWRlZFxuICovXG5cblxuZnVuY3Rpb24gcHJvY2Vzc0FycmF5KHZhbHVlLCBwcm9wLCBzY2hlbWUsIHJ1bGUpIHtcbiAgaWYgKHNjaGVtZVtwcm9wXSA9PSBudWxsKSByZXR1cm4gdmFsdWU7XG4gIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSByZXR1cm4gcHJvY2Vzc0FycmF5KHZhbHVlWzBdLCBwcm9wLCBzY2hlbWUsIHJ1bGUpO1xuXG4gIGlmICh0eXBlb2YgdmFsdWVbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcFZhbHVlc0J5UHJvcCh2YWx1ZSwgcHJvcCwgcnVsZSk7XG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXTtcbn1cbi8qKlxuICogQ29udmVydCBvYmplY3QgdG8gYXJyYXkuXG4gKi9cblxuXG5mdW5jdGlvbiBvYmplY3RUb0FycmF5KHZhbHVlLCBwcm9wLCBydWxlLCBpc0ZhbGxiYWNrLCBpc0luQXJyYXkpIHtcbiAgaWYgKCEocHJvcE9ialtwcm9wXSB8fCBjdXN0b21Qcm9wT2JqW3Byb3BdKSkgcmV0dXJuIFtdO1xuICB2YXIgcmVzdWx0ID0gW107IC8vIENoZWNrIGlmIGV4aXN0cyBhbnkgbm9uLXN0YW5kYXJkIHByb3BlcnR5XG5cbiAgaWYgKGN1c3RvbVByb3BPYmpbcHJvcF0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB2YWx1ZSA9IGN1c3RvbVByb3BzVG9TdHlsZSh2YWx1ZSwgcnVsZSwgY3VzdG9tUHJvcE9ialtwcm9wXSwgaXNGYWxsYmFjayk7XG4gIH0gLy8gUGFzcyB0aHJvdWdodCBhbGwgc3RhbmRhcnQgcHJvcHNcblxuXG4gIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgYmFzZVByb3AgaW4gcHJvcE9ialtwcm9wXSkge1xuICAgICAgaWYgKHZhbHVlW2Jhc2VQcm9wXSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZVtiYXNlUHJvcF0pKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gocHJvcEFycmF5SW5PYmpbYmFzZVByb3BdID09PSBudWxsID8gdmFsdWVbYmFzZVByb3BdIDogdmFsdWVbYmFzZVByb3BdLmpvaW4oJyAnKSk7XG4gICAgICAgIH0gZWxzZSByZXN1bHQucHVzaCh2YWx1ZVtiYXNlUHJvcF0pO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSAvLyBBZGQgZGVmYXVsdCB2YWx1ZSBmcm9tIHByb3BzIGNvbmZpZy5cblxuXG4gICAgICBpZiAocHJvcE9ialtwcm9wXVtiYXNlUHJvcF0gIT0gbnVsbCkge1xuICAgICAgICByZXN1bHQucHVzaChwcm9wT2JqW3Byb3BdW2Jhc2VQcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFyZXN1bHQubGVuZ3RoIHx8IGlzSW5BcnJheSkgcmV0dXJuIHJlc3VsdDtcbiAgcmV0dXJuIFtyZXN1bHRdO1xufVxuLyoqXG4gKiBDb252ZXJ0IGN1c3RvbSBwcm9wZXJ0aWVzIHZhbHVlcyB0byBzdHlsZXMgYWRkaW5nIHRoZW0gdG8gcnVsZSBkaXJlY3RseVxuICovXG5cblxuZnVuY3Rpb24gY3VzdG9tUHJvcHNUb1N0eWxlKHZhbHVlLCBydWxlLCBjdXN0b21Qcm9wcywgaXNGYWxsYmFjaykge1xuICBmb3IgKHZhciBwcm9wIGluIGN1c3RvbVByb3BzKSB7XG4gICAgdmFyIHByb3BOYW1lID0gY3VzdG9tUHJvcHNbcHJvcF07IC8vIElmIGN1cnJlbnQgcHJvcGVydHkgZG9lc24ndCBleGlzdCBhbHJlYWR5IGluIHJ1bGUgLSBhZGQgbmV3IG9uZVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcgJiYgKGlzRmFsbGJhY2sgfHwgIXJ1bGUucHJvcChwcm9wTmFtZSkpKSB7XG4gICAgICB2YXIgX3N0eWxlRGV0ZWN0b3I7XG5cbiAgICAgIHZhciBhcHBlbmRlZFZhbHVlID0gc3R5bGVEZXRlY3RvcigoX3N0eWxlRGV0ZWN0b3IgPSB7fSwgX3N0eWxlRGV0ZWN0b3JbcHJvcE5hbWVdID0gdmFsdWVbcHJvcF0sIF9zdHlsZURldGVjdG9yKSwgcnVsZSlbcHJvcE5hbWVdOyAvLyBBZGQgc3R5bGUgZGlyZWN0bHkgaW4gcnVsZVxuXG4gICAgICBpZiAoaXNGYWxsYmFjaykgcnVsZS5zdHlsZS5mYWxsYmFja3NbcHJvcE5hbWVdID0gYXBwZW5kZWRWYWx1ZTtlbHNlIHJ1bGUuc3R5bGVbcHJvcE5hbWVdID0gYXBwZW5kZWRWYWx1ZTtcbiAgICB9IC8vIERlbGV0ZSBjb252ZXJ0ZWQgcHJvcGVydHkgdG8gYXZvaWQgZG91YmxlIGNvbnZlcnRpbmdcblxuXG4gICAgZGVsZXRlIHZhbHVlW3Byb3BdO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBEZXRlY3QgaWYgYSBzdHlsZSBuZWVkcyB0byBiZSBjb252ZXJ0ZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBzdHlsZURldGVjdG9yKHN0eWxlLCBydWxlLCBpc0ZhbGxiYWNrKSB7XG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgLy8gQ2hlY2sgZG91YmxlIGFycmF5cyB0byBhdm9pZCByZWN1cnNpb24uXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XG4gICAgICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJykge1xuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdHlsZS5mYWxsYmFja3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBzdHlsZS5mYWxsYmFja3NbaW5kZXhdID0gc3R5bGVEZXRlY3RvcihzdHlsZS5mYWxsYmFja3NbaW5kZXhdLCBydWxlLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlW3Byb3BdID0gcHJvY2Vzc0FycmF5KHZhbHVlLCBwcm9wLCBwcm9wQXJyYXksIHJ1bGUpOyAvLyBBdm9pZCBjcmVhdGluZyBwcm9wZXJ0aWVzIHdpdGggZW1wdHkgdmFsdWVzXG5cbiAgICAgICAgaWYgKCFzdHlsZVtwcm9wXS5sZW5ndGgpIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJykge1xuICAgICAgICBzdHlsZS5mYWxsYmFja3MgPSBzdHlsZURldGVjdG9yKHN0eWxlLmZhbGxiYWNrcywgcnVsZSwgdHJ1ZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBzdHlsZVtwcm9wXSA9IG9iamVjdFRvQXJyYXkodmFsdWUsIHByb3AsIHJ1bGUsIGlzRmFsbGJhY2spOyAvLyBBdm9pZCBjcmVhdGluZyBwcm9wZXJ0aWVzIHdpdGggZW1wdHkgdmFsdWVzXG5cbiAgICAgIGlmICghc3R5bGVbcHJvcF0ubGVuZ3RoKSBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgfSAvLyBNYXliZSBhIGNvbXB1dGVkIHZhbHVlIHJlc3VsdGluZyBpbiBhbiBlbXB0eSBzdHJpbmdcbiAgICBlbHNlIGlmIChzdHlsZVtwcm9wXSA9PT0gJycpIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cbi8qKlxuICogQWRkcyBwb3NzaWJpbGl0eSB0byB3cml0ZSBleHBhbmRlZCBzdHlsZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBqc3NFeHBhbmQoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgaWYgKCFzdHlsZSB8fCBydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSkge1xuICAgICAgLy8gUGFzcyBydWxlcyBvbmUgYnkgb25lIGFuZCByZWZvcm1hdCB0aGVtXG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHN0eWxlW2luZGV4XSA9IHN0eWxlRGV0ZWN0b3Ioc3R5bGVbaW5kZXhdLCBydWxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZURldGVjdG9yKHN0eWxlLCBydWxlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzc0V4cGFuZDtcbiIsImltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbnZhciBpc09iamVjdCA9IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KG9iaik7XG59O1xuXG52YXIgdmFsdWVOcyA9IFwiZXh0ZW5kQ3VyclZhbHVlXCIgKyBEYXRlLm5vdygpO1xuXG5mdW5jdGlvbiBtZXJnZUV4dGVuZChzdHlsZSwgcnVsZSwgc2hlZXQsIG5ld1N0eWxlKSB7XG4gIHZhciBleHRlbmRUeXBlID0gdHlwZW9mIHN0eWxlLmV4dGVuZDsgLy8gRXh0ZW5kIHVzaW5nIGEgcnVsZSBuYW1lLlxuXG4gIGlmIChleHRlbmRUeXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmICghc2hlZXQpIHJldHVybjtcbiAgICB2YXIgcmVmUnVsZSA9IHNoZWV0LmdldFJ1bGUoc3R5bGUuZXh0ZW5kKTtcbiAgICBpZiAoIXJlZlJ1bGUpIHJldHVybjtcblxuICAgIGlmIChyZWZSdWxlID09PSBydWxlKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIEEgcnVsZSB0cmllcyB0byBleHRlbmQgaXRzZWxmIFxcblwiICsgcnVsZS50b1N0cmluZygpKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gcmVmUnVsZS5vcHRpb25zLnBhcmVudDtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHZhciBvcmlnaW5hbFN0eWxlID0gcGFyZW50LnJ1bGVzLnJhd1tzdHlsZS5leHRlbmRdO1xuICAgICAgZXh0ZW5kKG9yaWdpbmFsU3R5bGUsIHJ1bGUsIHNoZWV0LCBuZXdTdHlsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9IC8vIEV4dGVuZCB1c2luZyBhbiBhcnJheSBvZiBvYmplY3RzLlxuXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUuZXh0ZW5kKSkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdHlsZS5leHRlbmQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBleHRlbmQoc3R5bGUuZXh0ZW5kW2luZGV4XSwgcnVsZSwgc2hlZXQsIG5ld1N0eWxlKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gLy8gRXh0ZW5kIGlzIGEgc3R5bGUgb2JqZWN0LlxuXG5cbiAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZS5leHRlbmQpIHtcbiAgICBpZiAocHJvcCA9PT0gJ2V4dGVuZCcpIHtcbiAgICAgIGV4dGVuZChzdHlsZS5leHRlbmQuZXh0ZW5kLCBydWxlLCBzaGVldCwgbmV3U3R5bGUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHN0eWxlLmV4dGVuZFtwcm9wXSkpIHtcbiAgICAgIGlmICghKHByb3AgaW4gbmV3U3R5bGUpKSBuZXdTdHlsZVtwcm9wXSA9IHt9O1xuICAgICAgZXh0ZW5kKHN0eWxlLmV4dGVuZFtwcm9wXSwgcnVsZSwgc2hlZXQsIG5ld1N0eWxlW3Byb3BdKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIG5ld1N0eWxlW3Byb3BdID0gc3R5bGUuZXh0ZW5kW3Byb3BdO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlUmVzdChzdHlsZSwgcnVsZSwgc2hlZXQsIG5ld1N0eWxlKSB7XG4gIC8vIENvcHkgYmFzZSBzdHlsZS5cbiAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgIGlmIChwcm9wID09PSAnZXh0ZW5kJykgY29udGludWU7XG5cbiAgICBpZiAoaXNPYmplY3QobmV3U3R5bGVbcHJvcF0pICYmIGlzT2JqZWN0KHN0eWxlW3Byb3BdKSkge1xuICAgICAgZXh0ZW5kKHN0eWxlW3Byb3BdLCBydWxlLCBzaGVldCwgbmV3U3R5bGVbcHJvcF0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHN0eWxlW3Byb3BdKSkge1xuICAgICAgbmV3U3R5bGVbcHJvcF0gPSBleHRlbmQoc3R5bGVbcHJvcF0sIHJ1bGUsIHNoZWV0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIG5ld1N0eWxlW3Byb3BdID0gc3R5bGVbcHJvcF07XG4gIH1cbn1cbi8qKlxuICogUmVjdXJzaXZlbHkgZXh0ZW5kIHN0eWxlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGV4dGVuZChzdHlsZSwgcnVsZSwgc2hlZXQsIG5ld1N0eWxlKSB7XG4gIGlmIChuZXdTdHlsZSA9PT0gdm9pZCAwKSB7XG4gICAgbmV3U3R5bGUgPSB7fTtcbiAgfVxuXG4gIG1lcmdlRXh0ZW5kKHN0eWxlLCBydWxlLCBzaGVldCwgbmV3U3R5bGUpO1xuICBtZXJnZVJlc3Qoc3R5bGUsIHJ1bGUsIHNoZWV0LCBuZXdTdHlsZSk7XG4gIHJldHVybiBuZXdTdHlsZTtcbn1cbi8qKlxuICogSGFuZGxlIGBleHRlbmRgIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7UnVsZX0gcnVsZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIGpzc0V4dGVuZCgpIHtcbiAgZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUsIHNoZWV0KSB7XG4gICAgaWYgKCdleHRlbmQnIGluIHN0eWxlKSByZXR1cm4gZXh0ZW5kKHN0eWxlLCBydWxlLCBzaGVldCk7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWx1ZSwgcHJvcCwgcnVsZSkge1xuICAgIGlmIChwcm9wICE9PSAnZXh0ZW5kJykgcmV0dXJuIHZhbHVlOyAvLyBWYWx1ZSBpcyBlbXB0eSwgcmVtb3ZlIHByb3BlcnRpZXMgc2V0IHByZXZpb3VzbHkuXG5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGJlY2F1c2UgdGhlcmUgaXMgbm8gaW5kZXhlciBwcm9wZXJ0eSBpbiBTdHlsZVJ1bGVcbiAgICAgIGZvciAodmFyIGtleSBpbiBydWxlW3ZhbHVlTnNdKSB7XG4gICAgICAgIHJ1bGUucHJvcChrZXksIG51bGwpO1xuICAgICAgfSAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBiZWNhdXNlIHRoZXJlIGlzIG5vIGluZGV4ZXIgcHJvcGVydHkgaW4gU3R5bGVSdWxlXG5cblxuICAgICAgcnVsZVt2YWx1ZU5zXSA9IG51bGw7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gJEZsb3dGaXhNZTogVGhpcyB3aWxsIGJlIGFuIG9iamVjdFxuICAgICAgZm9yICh2YXIgX2tleSBpbiB2YWx1ZSkge1xuICAgICAgICBydWxlLnByb3AoX2tleSwgdmFsdWVbX2tleV0pO1xuICAgICAgfSAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBiZWNhdXNlIHRoZXJlIGlzIG5vIGluZGV4ZXIgcHJvcGVydHkgaW4gU3R5bGVSdWxlXG5cblxuICAgICAgcnVsZVt2YWx1ZU5zXSA9IHZhbHVlO1xuICAgIH0gLy8gTWFrZSBzdXJlIHdlIGRvbid0IHNldCB0aGUgdmFsdWUgaW4gdGhlIGNvcmUuXG5cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NFeHRlbmQ7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBSdWxlTGlzdCB9IGZyb20gJ2pzcyc7XG5cbnZhciBhdCA9ICdAZ2xvYmFsJztcbnZhciBhdFByZWZpeCA9ICdAZ2xvYmFsICc7XG5cbnZhciBHbG9iYWxDb250YWluZXJSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2xvYmFsQ29udGFpbmVyUnVsZShrZXksIHN0eWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdnbG9iYWwnO1xuICAgIHRoaXMuYXQgPSBhdDtcbiAgICB0aGlzLnJ1bGVzID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJ1bGVzID0gbmV3IFJ1bGVMaXN0KF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBzZWxlY3RvciBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKHNlbGVjdG9yLCBzdHlsZXNbc2VsZWN0b3JdKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcnVsZS5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gR2xvYmFsQ29udGFpbmVyUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgcmVnaXN0ZXIgcnVsZSwgcnVuIHBsdWdpbnMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZFJ1bGUgPSBmdW5jdGlvbiBhZGRSdWxlKG5hbWUsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJ1bGUgPSB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbENvbnRhaW5lclJ1bGU7XG59KCk7XG5cbnZhciBHbG9iYWxQcmVmaXhlZFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxQcmVmaXhlZFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdnbG9iYWwnO1xuICAgIHRoaXMuYXQgPSBhdDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5ydWxlID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHZhciBzZWxlY3RvciA9IGtleS5zdWJzdHIoYXRQcmVmaXgubGVuZ3RoKTtcbiAgICB0aGlzLnJ1bGUgPSBvcHRpb25zLmpzcy5jcmVhdGVSdWxlKHNlbGVjdG9yLCBzdHlsZSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gR2xvYmFsUHJlZml4ZWRSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnJ1bGUgPyB0aGlzLnJ1bGUudG9TdHJpbmcob3B0aW9ucykgOiAnJztcbiAgfTtcblxuICByZXR1cm4gR2xvYmFsUHJlZml4ZWRSdWxlO1xufSgpO1xuXG52YXIgc2VwYXJhdG9yUmVnRXhwID0gL1xccyosXFxzKi9nO1xuXG5mdW5jdGlvbiBhZGRTY29wZShzZWxlY3Rvciwgc2NvcGUpIHtcbiAgdmFyIHBhcnRzID0gc2VsZWN0b3Iuc3BsaXQoc2VwYXJhdG9yUmVnRXhwKTtcbiAgdmFyIHNjb3BlZCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzY29wZWQgKz0gc2NvcGUgKyBcIiBcIiArIHBhcnRzW2ldLnRyaW0oKTtcbiAgICBpZiAocGFydHNbaSArIDFdKSBzY29wZWQgKz0gJywgJztcbiAgfVxuXG4gIHJldHVybiBzY29wZWQ7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5lc3RlZEdsb2JhbENvbnRhaW5lclJ1bGUocnVsZSkge1xuICB2YXIgb3B0aW9ucyA9IHJ1bGUub3B0aW9ucyxcbiAgICAgIHN0eWxlID0gcnVsZS5zdHlsZTtcbiAgdmFyIHJ1bGVzID0gc3R5bGUgPyBzdHlsZVthdF0gOiBudWxsO1xuICBpZiAoIXJ1bGVzKSByZXR1cm47XG5cbiAgZm9yICh2YXIgbmFtZSBpbiBydWxlcykge1xuICAgIG9wdGlvbnMuc2hlZXQuYWRkUnVsZShuYW1lLCBydWxlc1tuYW1lXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHNlbGVjdG9yOiBhZGRTY29wZShuYW1lLCBydWxlLnNlbGVjdG9yKVxuICAgIH0pKTtcbiAgfVxuXG4gIGRlbGV0ZSBzdHlsZVthdF07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByZWZpeGVkR2xvYmFsUnVsZShydWxlKSB7XG4gIHZhciBvcHRpb25zID0gcnVsZS5vcHRpb25zLFxuICAgICAgc3R5bGUgPSBydWxlLnN0eWxlO1xuXG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICBpZiAocHJvcFswXSAhPT0gJ0AnIHx8IHByb3Auc3Vic3RyKDAsIGF0Lmxlbmd0aCkgIT09IGF0KSBjb250aW51ZTtcbiAgICB2YXIgc2VsZWN0b3IgPSBhZGRTY29wZShwcm9wLnN1YnN0cihhdC5sZW5ndGgpLCBydWxlLnNlbGVjdG9yKTtcbiAgICBvcHRpb25zLnNoZWV0LmFkZFJ1bGUoc2VsZWN0b3IsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgfSkpO1xuICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgfVxufVxuLyoqXG4gKiBDb252ZXJ0IG5lc3RlZCBydWxlcyB0byBzZXBhcmF0ZSwgcmVtb3ZlIHRoZW0gZnJvbSBvcmlnaW5hbCBzdHlsZXMuXG4gKlxuICogQHBhcmFtIHtSdWxlfSBydWxlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24ganNzR2xvYmFsKCkge1xuICBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gbnVsbDtcblxuICAgIGlmIChuYW1lID09PSBhdCkge1xuICAgICAgcmV0dXJuIG5ldyBHbG9iYWxDb250YWluZXJSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVbMF0gPT09ICdAJyAmJiBuYW1lLnN1YnN0cigwLCBhdFByZWZpeC5sZW5ndGgpID09PSBhdFByZWZpeCkge1xuICAgICAgcmV0dXJuIG5ldyBHbG9iYWxQcmVmaXhlZFJ1bGUobmFtZSwgc3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50LnR5cGUgPT09ICdnbG9iYWwnIHx8IHBhcmVudC5vcHRpb25zLnBhcmVudCAmJiBwYXJlbnQub3B0aW9ucy5wYXJlbnQudHlwZSA9PT0gJ2dsb2JhbCcpIHtcbiAgICAgICAgb3B0aW9ucy5zY29wZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zY29wZWQgPT09IGZhbHNlKSB7XG4gICAgICBvcHRpb25zLnNlbGVjdG9yID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybjtcbiAgICBoYW5kbGVOZXN0ZWRHbG9iYWxDb250YWluZXJSdWxlKHJ1bGUpO1xuICAgIGhhbmRsZVByZWZpeGVkR2xvYmFsUnVsZShydWxlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25DcmVhdGVSdWxlOiBvbkNyZWF0ZVJ1bGUsXG4gICAgb25Qcm9jZXNzUnVsZTogb25Qcm9jZXNzUnVsZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NHbG9iYWw7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuXG52YXIgc2VwYXJhdG9yUmVnRXhwID0gL1xccyosXFxzKi9nO1xudmFyIHBhcmVudFJlZ0V4cCA9IC8mL2c7XG52YXIgcmVmUmVnRXhwID0gL1xcJChbXFx3LV0rKS9nO1xuLyoqXG4gKiBDb252ZXJ0IG5lc3RlZCBydWxlcyB0byBzZXBhcmF0ZSwgcmVtb3ZlIHRoZW0gZnJvbSBvcmlnaW5hbCBzdHlsZXMuXG4gKlxuICogQHBhcmFtIHtSdWxlfSBydWxlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGpzc05lc3RlZCgpIHtcbiAgLy8gR2V0IGEgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgJHJlZiByZXBsYWNlbWVudC5cbiAgZnVuY3Rpb24gZ2V0UmVwbGFjZVJlZihjb250YWluZXIsIHNoZWV0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaCwga2V5KSB7XG4gICAgICB2YXIgcnVsZSA9IGNvbnRhaW5lci5nZXRSdWxlKGtleSkgfHwgc2hlZXQgJiYgc2hlZXQuZ2V0UnVsZShrZXkpO1xuXG4gICAgICBpZiAocnVsZSkge1xuICAgICAgICBydWxlID0gcnVsZTtcbiAgICAgICAgcmV0dXJuIHJ1bGUuc2VsZWN0b3I7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gQ291bGQgbm90IGZpbmQgdGhlIHJlZmVyZW5jZWQgcnVsZSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaW4gXFxcIlwiICsgKGNvbnRhaW5lci5vcHRpb25zLm1ldGEgfHwgY29udGFpbmVyLnRvU3RyaW5nKCkpICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VQYXJlbnRSZWZzKG5lc3RlZFByb3AsIHBhcmVudFByb3ApIHtcbiAgICB2YXIgcGFyZW50U2VsZWN0b3JzID0gcGFyZW50UHJvcC5zcGxpdChzZXBhcmF0b3JSZWdFeHApO1xuICAgIHZhciBuZXN0ZWRTZWxlY3RvcnMgPSBuZXN0ZWRQcm9wLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRTZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJlbnQgPSBwYXJlbnRTZWxlY3RvcnNbaV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmVzdGVkU2VsZWN0b3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBuZXN0ZWQgPSBuZXN0ZWRTZWxlY3RvcnNbal07XG4gICAgICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSAnLCAnOyAvLyBSZXBsYWNlIGFsbCAmIGJ5IHRoZSBwYXJlbnQgb3IgcHJlZml4ICYgd2l0aCB0aGUgcGFyZW50LlxuXG4gICAgICAgIHJlc3VsdCArPSBuZXN0ZWQuaW5kZXhPZignJicpICE9PSAtMSA/IG5lc3RlZC5yZXBsYWNlKHBhcmVudFJlZ0V4cCwgcGFyZW50KSA6IHBhcmVudCArIFwiIFwiICsgbmVzdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHRpb25zKHJ1bGUsIGNvbnRhaW5lciwgcHJldk9wdGlvbnMpIHtcbiAgICAvLyBPcHRpb25zIGhhcyBiZWVuIGFscmVhZHkgY3JlYXRlZCwgbm93IHdlIG9ubHkgaW5jcmVhc2UgaW5kZXguXG4gICAgaWYgKHByZXZPcHRpb25zKSByZXR1cm4gX2V4dGVuZHMoe30sIHByZXZPcHRpb25zLCB7XG4gICAgICBpbmRleDogcHJldk9wdGlvbnMuaW5kZXggKyAxXG4gICAgfSk7XG4gICAgdmFyIG5lc3RpbmdMZXZlbCA9IHJ1bGUub3B0aW9ucy5uZXN0aW5nTGV2ZWw7XG4gICAgbmVzdGluZ0xldmVsID0gbmVzdGluZ0xldmVsID09PSB1bmRlZmluZWQgPyAxIDogbmVzdGluZ0xldmVsICsgMTtcblxuICAgIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe30sIHJ1bGUub3B0aW9ucywge1xuICAgICAgbmVzdGluZ0xldmVsOiBuZXN0aW5nTGV2ZWwsXG4gICAgICBpbmRleDogY29udGFpbmVyLmluZGV4T2YocnVsZSkgKyAxIC8vIFdlIGRvbid0IG5lZWQgdGhlIHBhcmVudCBuYW1lIHRvIGJlIHNldCBvcHRpb25zIGZvciBjaGxpZC5cblxuICAgIH0pO1xuXG4gICAgZGVsZXRlIG9wdGlvbnMubmFtZTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlLCBzaGVldCkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICB2YXIgY29udGFpbmVyID0gc3R5bGVSdWxlLm9wdGlvbnMucGFyZW50O1xuICAgIHZhciBvcHRpb25zO1xuICAgIHZhciByZXBsYWNlUmVmO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIGlzTmVzdGVkID0gcHJvcC5pbmRleE9mKCcmJykgIT09IC0xO1xuICAgICAgdmFyIGlzTmVzdGVkQ29uZGl0aW9uYWwgPSBwcm9wWzBdID09PSAnQCc7XG4gICAgICBpZiAoIWlzTmVzdGVkICYmICFpc05lc3RlZENvbmRpdGlvbmFsKSBjb250aW51ZTtcbiAgICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKHN0eWxlUnVsZSwgY29udGFpbmVyLCBvcHRpb25zKTtcblxuICAgICAgaWYgKGlzTmVzdGVkKSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHJlcGxhY2VQYXJlbnRSZWZzKHByb3AsIHN0eWxlUnVsZS5zZWxlY3Rvcik7IC8vIExhemlseSBjcmVhdGUgdGhlIHJlZiByZXBsYWNlciBmdW5jdGlvbiBqdXN0IG9uY2UgZm9yXG4gICAgICAgIC8vIGFsbCBuZXN0ZWQgcnVsZXMgd2l0aGluIHRoZSBzaGVldC5cblxuICAgICAgICBpZiAoIXJlcGxhY2VSZWYpIHJlcGxhY2VSZWYgPSBnZXRSZXBsYWNlUmVmKGNvbnRhaW5lciwgc2hlZXQpOyAvLyBSZXBsYWNlIGFsbCAkcmVmcy5cblxuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UocmVmUmVnRXhwLCByZXBsYWNlUmVmKTtcbiAgICAgICAgY29udGFpbmVyLmFkZFJ1bGUoc2VsZWN0b3IsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTmVzdGVkQ29uZGl0aW9uYWwpIHtcbiAgICAgICAgLy8gUGxhY2UgY29uZGl0aW9uYWwgcmlnaHQgYWZ0ZXIgdGhlIHBhcmVudCBydWxlIHRvIGVuc3VyZSByaWdodCBvcmRlcmluZy5cbiAgICAgICAgY29udGFpbmVyLmFkZFJ1bGUocHJvcCwge30sIG9wdGlvbnMpIC8vIEZsb3cgZXhwZWN0cyBtb3JlIG9wdGlvbnMgYnV0IHRoZXkgYXJlbid0IHJlcXVpcmVkXG4gICAgICAgIC8vIEFuZCBmbG93IGRvZXNuJ3Qga25vdyB0aGlzIHdpbGwgYWx3YXlzIGJlIGEgU3R5bGVSdWxlIHdoaWNoIGhhcyB0aGUgYWRkUnVsZSBtZXRob2RcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAuYWRkUnVsZShzdHlsZVJ1bGUua2V5LCBzdHlsZVtwcm9wXSwge1xuICAgICAgICAgIHNlbGVjdG9yOiBzdHlsZVJ1bGUuc2VsZWN0b3JcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NOZXN0ZWQ7XG4iLCIvKipcbiAqIFNvcnQgcHJvcHMgYnkgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiBqc3NQcm9wc1NvcnQoKSB7XG4gIHZhciBzb3J0ID0gZnVuY3Rpb24gc29ydChwcm9wMCwgcHJvcDEpIHtcbiAgICBpZiAocHJvcDAubGVuZ3RoID09PSBwcm9wMS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBwcm9wMCA+IHByb3AxID8gMSA6IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wMC5sZW5ndGggLSBwcm9wMS5sZW5ndGg7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUpIHtcbiAgICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICAgIHZhciBuZXdTdHlsZSA9IHt9O1xuICAgICAgdmFyIHByb3BzID0gT2JqZWN0LmtleXMoc3R5bGUpLnNvcnQoc29ydCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3U3R5bGVbcHJvcHNbaV1dID0gc3R5bGVbcHJvcHNbaV1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3R5bGU7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NQcm9wc1NvcnQ7XG4iLCJpbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IHsgY3JlYXRlUnVsZSB9IGZyb20gJ2pzcyc7XG5cbnZhciBub3cgPSBEYXRlLm5vdygpO1xudmFyIGZuVmFsdWVzTnMgPSBcImZuVmFsdWVzXCIgKyBub3c7XG52YXIgZm5SdWxlTnMgPSBcImZuU3R5bGVcIiArICsrbm93O1xuZnVuY3Rpb24gZnVuY3Rpb25QbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgICAgaWYgKHR5cGVvZiBkZWNsICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBydWxlID0gY3JlYXRlUnVsZShuYW1lLCB7fSwgb3B0aW9ucyk7XG4gICAgICBydWxlW2ZuUnVsZU5zXSA9IGRlY2w7XG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9LFxuICAgIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgICAgLy8gV2UgbmVlZCB0byBleHRyYWN0IGZ1bmN0aW9uIHZhbHVlcyBmcm9tIHRoZSBkZWNsYXJhdGlvbiwgc28gdGhhdCB3ZSBjYW4ga2VlcCBjb3JlIHVuYXdhcmUgb2YgdGhlbS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gZG8gdGhhdCBvbmx5IG9uY2UuXG4gICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGV4dHJhY3QgZnVuY3Rpb25zIG9uIGVhY2ggc3R5bGUgdXBkYXRlLCBzaW5jZSB0aGlzIGNhbiBoYXBwZW4gb25seSBvbmNlLlxuICAgICAgLy8gV2UgZG9uJ3Qgc3VwcG9ydCBmdW5jdGlvbiB2YWx1ZXMgaW5zaWRlIG9mIGZ1bmN0aW9uIHJ1bGVzLlxuICAgICAgaWYgKGZuVmFsdWVzTnMgaW4gcnVsZSB8fCBmblJ1bGVOcyBpbiBydWxlKSByZXR1cm4gc3R5bGU7XG4gICAgICB2YXIgZm5WYWx1ZXMgPSB7fTtcblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wXTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykgY29udGludWU7XG4gICAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgICAgICAgZm5WYWx1ZXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIHJ1bGVbZm5WYWx1ZXNOc10gPSBmblZhbHVlcztcbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9LFxuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShkYXRhLCBydWxlLCBzaGVldCwgb3B0aW9ucykge1xuICAgICAgdmFyIHN0eWxlUnVsZSA9IHJ1bGU7XG4gICAgICB2YXIgZm5SdWxlID0gc3R5bGVSdWxlW2ZuUnVsZU5zXTsgLy8gSWYgd2UgaGF2ZSBhIHN0eWxlIGZ1bmN0aW9uLCB0aGUgZW50aXJlIHJ1bGUgaXMgZHluYW1pYyBhbmQgc3R5bGUgb2JqZWN0XG4gICAgICAvLyB3aWxsIGJlIHJldHVybmVkIGZyb20gdGhhdCBmdW5jdGlvbi5cblxuICAgICAgaWYgKGZuUnVsZSkge1xuICAgICAgICAvLyBFbXB0eSBvYmplY3Qgd2lsbCByZW1vdmUgYWxsIGN1cnJlbnRseSBkZWZpbmVkIHByb3BzXG4gICAgICAgIC8vIGluIGNhc2UgZnVuY3Rpb24gcnVsZSByZXR1cm5zIGEgZmFsc3kgdmFsdWUuXG4gICAgICAgIHN0eWxlUnVsZS5zdHlsZSA9IGZuUnVsZShkYXRhKSB8fCB7fTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlUnVsZS5zdHlsZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZVJ1bGUuc3R5bGVbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgJ1tKU1NdIEZ1bmN0aW9uIHZhbHVlcyBpbnNpZGUgZnVuY3Rpb24gcnVsZXMgYXJlIG5vdCBzdXBwb3J0ZWQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZm5WYWx1ZXMgPSBzdHlsZVJ1bGVbZm5WYWx1ZXNOc107IC8vIElmIHdlIGhhdmUgYSBmbiB2YWx1ZXMgbWFwLCBpdCBpcyBhIHJ1bGUgd2l0aCBmdW5jdGlvbiB2YWx1ZXMuXG5cbiAgICAgIGlmIChmblZhbHVlcykge1xuICAgICAgICBmb3IgKHZhciBfcHJvcCBpbiBmblZhbHVlcykge1xuICAgICAgICAgIHN0eWxlUnVsZS5wcm9wKF9wcm9wLCBmblZhbHVlc1tfcHJvcF0oZGF0YSksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvblBsdWdpbjtcbiIsImltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlUnVsZSB9IGZyb20gJ2pzcyc7XG5cbnZhciBpc09ic2VydmFibGUgPSBmdW5jdGlvbiBpc09ic2VydmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlWyQkb2JzZXJ2YWJsZV0gJiYgdmFsdWUgPT09IHZhbHVlWyQkb2JzZXJ2YWJsZV0oKTtcbn07XG5cbmZ1bmN0aW9uIG9ic2VydmFibGVQbHVnaW4odXBkYXRlT3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICAgIGlmICghaXNPYnNlcnZhYmxlKGRlY2wpKSByZXR1cm4gbnVsbDsgLy8gQ2FzdCBgZGVjbGAgdG8gYE9ic2VydmFibGVgLCBzaW5jZSBpdCBwYXNzZWQgdGhlIHR5cGUgZ3VhcmQuXG5cbiAgICAgIHZhciBzdHlsZSQgPSBkZWNsO1xuICAgICAgdmFyIHJ1bGUgPSBjcmVhdGVSdWxlKG5hbWUsIHt9LCBvcHRpb25zKTsgLy8gVE9ET1xuICAgICAgLy8gQ2FsbCBgc3RyZWFtLnN1YnNjcmliZSgpYCByZXR1cm5zIGEgc3Vic2NyaXB0aW9uLCB3aGljaCBzaG91bGQgYmUgZXhwbGljaXRseVxuICAgICAgLy8gdW5zdWJzY3JpYmVkIGZyb20gd2hlbiB3ZSBrbm93IHRoaXMgc2hlZXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cblxuICAgICAgc3R5bGUkLnN1YnNjcmliZShmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICAgIHJ1bGUucHJvcChwcm9wLCBzdHlsZVtwcm9wXSwgdXBkYXRlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfSxcbiAgICBvblByb2Nlc3NSdWxlOiBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUpIHtcbiAgICAgIGlmIChydWxlICYmIHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuO1xuICAgICAgdmFyIHN0eWxlUnVsZSA9IHJ1bGU7XG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVJ1bGUuc3R5bGU7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHByb3ApIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG4gICAgICAgIGlmICghaXNPYnNlcnZhYmxlKHZhbHVlKSkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgICAgICB2YWx1ZS5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQobmV4dFZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZVJ1bGUucHJvcChwcm9wLCBuZXh0VmFsdWUsIHVwZGF0ZU9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgICAgIHZhciBfcmV0ID0gX2xvb3AocHJvcCk7XG5cbiAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZhYmxlUGx1Z2luO1xuIiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcblxudmFyIHNlbWlXaXRoTmwgPSAvO1xcbi87XG4vKipcbiAqIE5haXZlIENTUyBwYXJzZXIuXG4gKiAtIFN1cHBvcnRzIG9ubHkgcnVsZSBib2R5IChubyBzZWxlY3RvcnMpXG4gKiAtIFJlcXVpcmVzIHNlbWljb2xvbiBhbmQgbmV3IGxpbmUgYWZ0ZXIgdGhlIHZhbHVlIChleGNlcHQgb2YgbGFzdCBsaW5lKVxuICogLSBObyBuZXN0ZWQgcnVsZXMgc3VwcG9ydFxuICovXG5cbnZhciBwYXJzZSA9IChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICB2YXIgc3R5bGUgPSB7fTtcbiAgdmFyIHNwbGl0ID0gY3NzVGV4dC5zcGxpdChzZW1pV2l0aE5sKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlY2wgPSAoc3BsaXRbaV0gfHwgJycpLnRyaW0oKTtcbiAgICBpZiAoIWRlY2wpIGNvbnRpbnVlO1xuICAgIHZhciBjb2xvbkluZGV4ID0gZGVjbC5pbmRleE9mKCc6Jyk7XG5cbiAgICBpZiAoY29sb25JbmRleCA9PT0gLTEpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gTWFsZm9ybWVkIENTUyBzdHJpbmcgXFxcIlwiICsgZGVjbCArIFwiXFxcIlwiKSA6IHZvaWQgMDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9wID0gZGVjbC5zdWJzdHIoMCwgY29sb25JbmRleCkudHJpbSgpO1xuICAgIHZhciB2YWx1ZSA9IGRlY2wuc3Vic3RyKGNvbG9uSW5kZXggKyAxKS50cmltKCk7XG4gICAgc3R5bGVbcHJvcF0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn0pO1xuXG52YXIgb25Qcm9jZXNzUnVsZSA9IGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICBpZiAodHlwZW9mIHJ1bGUuc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gJEZsb3dGaXhNZTogV2UgY2FuIHNhZmVseSBhc3N1bWUgdGhhdCBydWxlIGhhcyB0aGUgc3R5bGUgcHJvcGVydHlcbiAgICBydWxlLnN0eWxlID0gcGFyc2UocnVsZS5zdHlsZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHRlbXBsYXRlUGx1Z2luKCkge1xuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1J1bGU6IG9uUHJvY2Vzc1J1bGVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVQbHVnaW47XG4iLCJpbXBvcnQgeyBzdXBwb3J0ZWRLZXlmcmFtZXMsIHN1cHBvcnRlZFZhbHVlLCBzdXBwb3J0ZWRQcm9wZXJ0eSB9IGZyb20gJ2Nzcy12ZW5kb3InO1xuaW1wb3J0IHsgdG9Dc3NWYWx1ZSB9IGZyb20gJ2pzcyc7XG5cbi8qKlxuICogQWRkIHZlbmRvciBwcmVmaXggdG8gYSBwcm9wZXJ0eSBuYW1lIHdoZW4gbmVlZGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24ganNzVmVuZG9yUHJlZml4ZXIoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICB2YXIgYXRSdWxlID0gcnVsZTtcbiAgICAgIGF0UnVsZS5hdCA9IHN1cHBvcnRlZEtleWZyYW1lcyhhdFJ1bGUuYXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZpeFN0eWxlKHN0eWxlKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG5cbiAgICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJyAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBzdHlsZVtwcm9wXSA9IHZhbHVlLm1hcChwcmVmaXhTdHlsZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlUHJvcCA9IGZhbHNlO1xuICAgICAgdmFyIHN1cHBvcnRlZFByb3AgPSBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKTtcbiAgICAgIGlmIChzdXBwb3J0ZWRQcm9wICYmIHN1cHBvcnRlZFByb3AgIT09IHByb3ApIGNoYW5nZVByb3AgPSB0cnVlO1xuICAgICAgdmFyIGNoYW5nZVZhbHVlID0gZmFsc2U7XG4gICAgICB2YXIgc3VwcG9ydGVkVmFsdWUkMSA9IHN1cHBvcnRlZFZhbHVlKHN1cHBvcnRlZFByb3AsIHRvQ3NzVmFsdWUodmFsdWUpKTtcbiAgICAgIGlmIChzdXBwb3J0ZWRWYWx1ZSQxICYmIHN1cHBvcnRlZFZhbHVlJDEgIT09IHZhbHVlKSBjaGFuZ2VWYWx1ZSA9IHRydWU7XG5cbiAgICAgIGlmIChjaGFuZ2VQcm9wIHx8IGNoYW5nZVZhbHVlKSB7XG4gICAgICAgIGlmIChjaGFuZ2VQcm9wKSBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgICAgIHN0eWxlW3N1cHBvcnRlZFByb3AgfHwgcHJvcF0gPSBzdXBwb3J0ZWRWYWx1ZSQxIHx8IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuICAgIHJldHVybiBwcmVmaXhTdHlsZShzdHlsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRlZFZhbHVlKHByb3AsIHRvQ3NzVmFsdWUodmFsdWUpKSB8fCB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzUnVsZTogb25Qcm9jZXNzUnVsZSxcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NWZW5kb3JQcmVmaXhlcjtcbiIsImltcG9ydCBmdW5jdGlvbnMgZnJvbSAnanNzLXBsdWdpbi1ydWxlLXZhbHVlLWZ1bmN0aW9uJztcbmltcG9ydCBvYnNlcnZhYmxlIGZyb20gJ2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1vYnNlcnZhYmxlJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICdqc3MtcGx1Z2luLXRlbXBsYXRlJztcbmltcG9ydCBnbG9iYWwgZnJvbSAnanNzLXBsdWdpbi1nbG9iYWwnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICdqc3MtcGx1Z2luLWV4dGVuZCc7XG5pbXBvcnQgbmVzdGVkIGZyb20gJ2pzcy1wbHVnaW4tbmVzdGVkJztcbmltcG9ydCBjb21wb3NlIGZyb20gJ2pzcy1wbHVnaW4tY29tcG9zZSc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2pzcy1wbHVnaW4tY2FtZWwtY2FzZSc7XG5pbXBvcnQgZGVmYXVsdFVuaXQgZnJvbSAnanNzLXBsdWdpbi1kZWZhdWx0LXVuaXQnO1xuaW1wb3J0IGV4cGFuZCBmcm9tICdqc3MtcGx1Z2luLWV4cGFuZCc7XG5pbXBvcnQgdmVuZG9yUHJlZml4ZXIgZnJvbSAnanNzLXBsdWdpbi12ZW5kb3ItcHJlZml4ZXInO1xuaW1wb3J0IHByb3BzU29ydCBmcm9tICdqc3MtcGx1Z2luLXByb3BzLXNvcnQnO1xuXG52YXIgaW5kZXggPSAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW2Z1bmN0aW9ucygpLCBvYnNlcnZhYmxlKG9wdGlvbnMub2JzZXJ2YWJsZSksIHRlbXBsYXRlKCksIGdsb2JhbCgpLCBleHRlbmQoKSwgbmVzdGVkKCksIGNvbXBvc2UoKSwgY2FtZWxDYXNlKCksIGRlZmF1bHRVbml0KG9wdGlvbnMuZGVmYXVsdFVuaXQpLCBleHBhbmQoKSwgdmVuZG9yUHJlZml4ZXIoKSwgcHJvcHNTb3J0KCldXG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgaXNJbkJyb3dzZXIgZnJvbSAnaXMtaW4tYnJvd3Nlcic7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuXG52YXIgcGxhaW5PYmplY3RDb25zdHJ1cmN0b3IgPSB7fS5jb25zdHJ1Y3RvcjtcbmZ1bmN0aW9uIGNsb25lU3R5bGUoc3R5bGUpIHtcbiAgaWYgKHN0eWxlID09IG51bGwgfHwgdHlwZW9mIHN0eWxlICE9PSAnb2JqZWN0JykgcmV0dXJuIHN0eWxlO1xuICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHJldHVybiBzdHlsZS5tYXAoY2xvbmVTdHlsZSk7XG4gIGlmIChzdHlsZS5jb25zdHJ1Y3RvciAhPT0gcGxhaW5PYmplY3RDb25zdHJ1cmN0b3IpIHJldHVybiBzdHlsZTtcbiAgdmFyIG5ld1N0eWxlID0ge307XG5cbiAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZSkge1xuICAgIG5ld1N0eWxlW25hbWVdID0gY2xvbmVTdHlsZShzdHlsZVtuYW1lXSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3R5bGU7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcnVsZSBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgIG5hbWUgPSAndW5uYW1lZCc7XG4gIH1cblxuICB2YXIganNzID0gb3B0aW9ucy5qc3M7XG4gIHZhciBkZWNsQ29weSA9IGNsb25lU3R5bGUoZGVjbCk7XG4gIHZhciBydWxlID0ganNzLnBsdWdpbnMub25DcmVhdGVSdWxlKG5hbWUsIGRlY2xDb3B5LCBvcHRpb25zKTtcbiAgaWYgKHJ1bGUpIHJldHVybiBydWxlOyAvLyBJdCBpcyBhbiBhdC1ydWxlIGFuZCBpdCBoYXMgbm8gaW5zdGFuY2UuXG5cbiAgaWYgKG5hbWVbMF0gPT09ICdAJykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gVW5rbm93biBydWxlIFwiICsgbmFtZSkgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGpvaW4gPSBmdW5jdGlvbiBqb2luKHZhbHVlLCBieSkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgIC8vIFJlbW92ZSAhaW1wb3J0YW50IGZyb20gdGhlIHZhbHVlLCBpdCB3aWxsIGJlIHJlYWRkZWQgbGF0ZXIuXG4gICAgaWYgKHZhbHVlW2ldID09PSAnIWltcG9ydGFudCcpIGJyZWFrO1xuICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSBieTtcbiAgICByZXN1bHQgKz0gdmFsdWVbaV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogQ29udmVydHMgYXJyYXkgdmFsdWVzIHRvIHN0cmluZy5cbiAqXG4gKiBgbWFyZ2luOiBbWyc1cHgnLCAnMTBweCddXWAgPiBgbWFyZ2luOiA1cHggMTBweDtgXG4gKiBgYm9yZGVyOiBbJzFweCcsICcycHgnXWAgPiBgYm9yZGVyOiAxcHgsIDJweDtgXG4gKiBgbWFyZ2luOiBbWyc1cHgnLCAnMTBweCddLCAnIWltcG9ydGFudCddYCA+IGBtYXJnaW46IDVweCAxMHB4ICFpbXBvcnRhbnQ7YFxuICogYGNvbG9yOiBbJ3JlZCcsICFpbXBvcnRhbnRdYCA+IGBjb2xvcjogcmVkICFpbXBvcnRhbnQ7YFxuICovXG5cblxuZnVuY3Rpb24gdG9Dc3NWYWx1ZSh2YWx1ZSwgaWdub3JlSW1wb3J0YW50KSB7XG4gIGlmIChpZ25vcmVJbXBvcnRhbnQgPT09IHZvaWQgMCkge1xuICAgIGlnbm9yZUltcG9ydGFudCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICB2YXIgY3NzVmFsdWUgPSAnJzsgLy8gU3VwcG9ydCBzcGFjZSBzZXBhcmF0ZWQgdmFsdWVzIHZpYSBgW1snNXB4JywgJzEwcHgnXV1gLlxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlWzBdKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZVtpXSA9PT0gJyFpbXBvcnRhbnQnKSBicmVhaztcbiAgICAgIGlmIChjc3NWYWx1ZSkgY3NzVmFsdWUgKz0gJywgJztcbiAgICAgIGNzc1ZhbHVlICs9IGpvaW4odmFsdWVbaV0sICcgJyk7XG4gICAgfVxuICB9IGVsc2UgY3NzVmFsdWUgPSBqb2luKHZhbHVlLCAnLCAnKTsgLy8gQWRkICFpbXBvcnRhbnQsIGJlY2F1c2UgaXQgd2FzIGlnbm9yZWQuXG5cblxuICBpZiAoIWlnbm9yZUltcG9ydGFudCAmJiB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSA9PT0gJyFpbXBvcnRhbnQnKSB7XG4gICAgY3NzVmFsdWUgKz0gJyAhaW1wb3J0YW50JztcbiAgfVxuXG4gIHJldHVybiBjc3NWYWx1ZTtcbn1cblxuLyoqXG4gKiBJbmRlbnQgYSBzdHJpbmcuXG4gKiBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1qb2luLXZzLWZvclxuICovXG5mdW5jdGlvbiBpbmRlbnRTdHIoc3RyLCBpbmRlbnQpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBpbmRlbnQ7IGluZGV4KyspIHtcbiAgICByZXN1bHQgKz0gJyAgJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzdHI7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgUnVsZSB0byBDU1Mgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gdG9Dc3Moc2VsZWN0b3IsIHN0eWxlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICghc3R5bGUpIHJldHVybiByZXN1bHQ7XG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRpbmRlbnQgPSBfb3B0aW9ucy5pbmRlbnQsXG4gICAgICBpbmRlbnQgPSBfb3B0aW9ucyRpbmRlbnQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRpbmRlbnQ7XG4gIHZhciBmYWxsYmFja3MgPSBzdHlsZS5mYWxsYmFja3M7XG4gIGlmIChzZWxlY3RvcikgaW5kZW50Kys7IC8vIEFwcGx5IGZhbGxiYWNrcyBmaXJzdC5cblxuICBpZiAoZmFsbGJhY2tzKSB7XG4gICAgLy8gQXJyYXkgc3ludGF4IHtmYWxsYmFja3M6IFt7cHJvcDogdmFsdWV9XX1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmYWxsYmFja3MpKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZmFsbGJhY2tzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZmFsbGJhY2sgPSBmYWxsYmFja3NbaW5kZXhdO1xuXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gZmFsbGJhY2spIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBmYWxsYmFja1twcm9wXTtcblxuICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gJ1xcbic7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCJcIiArIGluZGVudFN0cihwcm9wICsgXCI6IFwiICsgdG9Dc3NWYWx1ZSh2YWx1ZSkgKyBcIjtcIiwgaW5kZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT2JqZWN0IHN5bnRheCB7ZmFsbGJhY2tzOiB7cHJvcDogdmFsdWV9fVxuICAgICAgZm9yICh2YXIgX3Byb3AgaW4gZmFsbGJhY2tzKSB7XG4gICAgICAgIHZhciBfdmFsdWUgPSBmYWxsYmFja3NbX3Byb3BdO1xuXG4gICAgICAgIGlmIChfdmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSAnXFxuJztcbiAgICAgICAgICByZXN1bHQgKz0gXCJcIiArIGluZGVudFN0cihfcHJvcCArIFwiOiBcIiArIHRvQ3NzVmFsdWUoX3ZhbHVlKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX3Byb3AyIGluIHN0eWxlKSB7XG4gICAgdmFyIF92YWx1ZTIgPSBzdHlsZVtfcHJvcDJdO1xuXG4gICAgaWYgKF92YWx1ZTIgIT0gbnVsbCAmJiBfcHJvcDIgIT09ICdmYWxsYmFja3MnKSB7XG4gICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gJ1xcbic7XG4gICAgICByZXN1bHQgKz0gXCJcIiArIGluZGVudFN0cihfcHJvcDIgKyBcIjogXCIgKyB0b0Nzc1ZhbHVlKF92YWx1ZTIpICsgXCI7XCIsIGluZGVudCk7XG4gICAgfVxuICB9IC8vIEFsbG93IGVtcHR5IHN0eWxlIGluIHRoaXMgY2FzZSwgYmVjYXVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgYWRkZWQgZHluYW1pY2FsbHkuXG5cblxuICBpZiAoIXJlc3VsdCAmJiAhb3B0aW9ucy5hbGxvd0VtcHR5KSByZXR1cm4gcmVzdWx0OyAvLyBXaGVuIHJ1bGUgaXMgYmVpbmcgc3RyaW5naWZpZWQgYmVmb3JlIHNlbGVjdG9yIHdhcyBkZWZpbmVkLlxuXG4gIGlmICghc2VsZWN0b3IpIHJldHVybiByZXN1bHQ7XG4gIGluZGVudC0tO1xuICBpZiAocmVzdWx0KSByZXN1bHQgPSBcIlxcblwiICsgcmVzdWx0ICsgXCJcXG5cIjtcbiAgcmV0dXJuIGluZGVudFN0cihzZWxlY3RvciArIFwiIHtcIiArIHJlc3VsdCwgaW5kZW50KSArIGluZGVudFN0cignfScsIGluZGVudCk7XG59XG5cbnZhciBlc2NhcGVSZWdleCA9IC8oW1tcXF0uIyokPjwrfj18XjooKSxcIidgXFxzXSkvZztcbnZhciBuYXRpdmVFc2NhcGUgPSB0eXBlb2YgQ1NTICE9PSAndW5kZWZpbmVkJyAmJiBDU1MuZXNjYXBlO1xudmFyIGVzY2FwZSA9IChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBuYXRpdmVFc2NhcGUgPyBuYXRpdmVFc2NhcGUoc3RyKSA6IHN0ci5yZXBsYWNlKGVzY2FwZVJlZ2V4LCAnXFxcXCQxJyk7XG59KTtcblxudmFyIEJhc2VTdHlsZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBCYXNlU3R5bGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnc3R5bGUnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0eWxlID0gdm9pZCAwO1xuICAgIHRoaXMucmVuZGVyZXIgPSB2b2lkIDA7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB2YXIgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBSZW5kZXJlciA9IG9wdGlvbnMuUmVuZGVyZXI7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgaWYgKHNoZWV0KSB0aGlzLnJlbmRlcmVyID0gc2hlZXQucmVuZGVyZXI7ZWxzZSBpZiAoUmVuZGVyZXIpIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcbiAgfVxuICAvKipcbiAgICogR2V0IG9yIHNldCBhIHN0eWxlIHByb3BlcnR5LlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBCYXNlU3R5bGVSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucHJvcCA9IGZ1bmN0aW9uIHByb3AobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAvLyBJdCdzIGEgZ2V0dGVyLlxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5zdHlsZVtuYW1lXTsgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgdGhlIHZhbHVlIGhhcyBub3QgY2hhbmdlZC5cblxuICAgIHZhciBmb3JjZSA9IG9wdGlvbnMgPyBvcHRpb25zLmZvcmNlIDogZmFsc2U7XG4gICAgaWYgKCFmb3JjZSAmJiB0aGlzLnN0eWxlW25hbWVdID09PSB2YWx1ZSkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG5ld1ZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucy5wcm9jZXNzICE9PSBmYWxzZSkge1xuICAgICAgbmV3VmFsdWUgPSB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25DaGFuZ2VWYWx1ZSh2YWx1ZSwgbmFtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIGlzRW1wdHkgPSBuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZTtcbiAgICB2YXIgaXNEZWZpbmVkID0gbmFtZSBpbiB0aGlzLnN0eWxlOyAvLyBWYWx1ZSBpcyBlbXB0eSBhbmQgd2Fzbid0IGRlZmluZWQgYmVmb3JlLlxuXG4gICAgaWYgKGlzRW1wdHkgJiYgIWlzRGVmaW5lZCAmJiAhZm9yY2UpIHJldHVybiB0aGlzOyAvLyBXZSBhcmUgZ29pbmcgdG8gcmVtb3ZlIHRoaXMgdmFsdWUuXG5cbiAgICB2YXIgcmVtb3ZlID0gaXNFbXB0eSAmJiBpc0RlZmluZWQ7XG4gICAgaWYgKHJlbW92ZSkgZGVsZXRlIHRoaXMuc3R5bGVbbmFtZV07ZWxzZSB0aGlzLnN0eWxlW25hbWVdID0gbmV3VmFsdWU7IC8vIFJlbmRlcmFibGUgaXMgZGVmaW5lZCBpZiBTdHlsZVNoZWV0IG9wdGlvbiBgbGlua2AgaXMgdHJ1ZS5cblxuICAgIGlmICh0aGlzLnJlbmRlcmFibGUgJiYgdGhpcy5yZW5kZXJlcikge1xuICAgICAgaWYgKHJlbW92ZSkgdGhpcy5yZW5kZXJlci5yZW1vdmVQcm9wZXJ0eSh0aGlzLnJlbmRlcmFibGUsIG5hbWUpO2Vsc2UgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLnJlbmRlcmFibGUsIG5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcblxuICAgIGlmIChzaGVldCAmJiBzaGVldC5hdHRhY2hlZCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgJ1tKU1NdIFJ1bGUgaXMgbm90IGxpbmtlZC4gTWlzc2luZyBzaGVldCBvcHRpb24gXCJsaW5rOiB0cnVlXCIuJykgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VTdHlsZVJ1bGU7XG59KCk7XG52YXIgU3R5bGVSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQmFzZVN0eWxlUnVsZSkge1xuICBfaW5oZXJpdHNMb29zZShTdHlsZVJ1bGUsIF9CYXNlU3R5bGVSdWxlKTtcblxuICBmdW5jdGlvbiBTdHlsZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0Jhc2VTdHlsZVJ1bGUuY2FsbCh0aGlzLCBrZXksIHN0eWxlLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgIF90aGlzLnNlbGVjdG9yVGV4dCA9IHZvaWQgMDtcbiAgICBfdGhpcy5pZCA9IHZvaWQgMDtcbiAgICBfdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHZhciBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IsXG4gICAgICAgIHNjb3BlZCA9IG9wdGlvbnMuc2NvcGVkLFxuICAgICAgICBzaGVldCA9IG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIGdlbmVyYXRlSWQgPSBvcHRpb25zLmdlbmVyYXRlSWQ7XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIF90aGlzLnNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yO1xuICAgIH0gZWxzZSBpZiAoc2NvcGVkICE9PSBmYWxzZSkge1xuICAgICAgX3RoaXMuaWQgPSBnZW5lcmF0ZUlkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBzaGVldCk7XG4gICAgICBfdGhpcy5zZWxlY3RvclRleHQgPSBcIi5cIiArIGVzY2FwZShfdGhpcy5pZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0b3Igc3RyaW5nLlxuICAgKiBBdHRlbnRpb246IHVzZSB0aGlzIHdpdGggY2F1dGlvbi4gTW9zdCBicm93c2VycyBkaWRuJ3QgaW1wbGVtZW50XG4gICAqIHNlbGVjdG9yVGV4dCBzZXR0ZXIsIHNvIHRoaXMgbWF5IHJlc3VsdCBpbiByZXJlbmRlcmluZyBvZiBlbnRpcmUgU3R5bGUgU2hlZXQuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90bzIgPSBTdHlsZVJ1bGUucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBBcHBseSBydWxlIHRvIGFuIGVsZW1lbnQgaW5saW5lLlxuICAgKi9cbiAgX3Byb3RvMi5hcHBseVRvID0gZnVuY3Rpb24gYXBwbHlUbyhyZW5kZXJhYmxlKSB7XG4gICAgdmFyIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcblxuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgdmFyIGpzb24gPSB0aGlzLnRvSlNPTigpO1xuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIGpzb24pIHtcbiAgICAgICAgcmVuZGVyZXIuc2V0UHJvcGVydHkocmVuZGVyYWJsZSwgcHJvcCwganNvbltwcm9wXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgcnVsZS5cbiAgICogRmFsbGJhY2tzIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgKiBVc2VmdWwgZm9yIGlubGluZSBzdHlsZXMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvMi50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgdmFyIGpzb24gPSB7fTtcblxuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5zdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdHlsZVtwcm9wXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSBqc29uW3Byb3BdID0gdmFsdWU7ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGpzb25bcHJvcF0gPSB0b0Nzc1ZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8yLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcbiAgICB2YXIgbGluayA9IHNoZWV0ID8gc2hlZXQub3B0aW9ucy5saW5rIDogZmFsc2U7XG4gICAgdmFyIG9wdHMgPSBsaW5rID8gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGFsbG93RW1wdHk6IHRydWVcbiAgICB9KSA6IG9wdGlvbnM7XG4gICAgcmV0dXJuIHRvQ3NzKHRoaXMuc2VsZWN0b3JUZXh0LCB0aGlzLnN0eWxlLCBvcHRzKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3R5bGVSdWxlLCBbe1xuICAgIGtleTogXCJzZWxlY3RvclwiLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHNlbGVjdG9yKSB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IHRoaXMuc2VsZWN0b3JUZXh0KSByZXR1cm47XG4gICAgICB0aGlzLnNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yO1xuICAgICAgdmFyIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcixcbiAgICAgICAgICByZW5kZXJhYmxlID0gdGhpcy5yZW5kZXJhYmxlO1xuICAgICAgaWYgKCFyZW5kZXJhYmxlIHx8ICFyZW5kZXJlcikgcmV0dXJuO1xuICAgICAgdmFyIGhhc0NoYW5nZWQgPSByZW5kZXJlci5zZXRTZWxlY3RvcihyZW5kZXJhYmxlLCBzZWxlY3Rvcik7IC8vIElmIHNlbGVjdG9yIHNldHRlciBpcyBub3QgaW1wbGVtZW50ZWQsIHJlcmVuZGVyIHRoZSBydWxlLlxuXG4gICAgICBpZiAoIWhhc0NoYW5nZWQpIHtcbiAgICAgICAgcmVuZGVyZXIucmVwbGFjZVJ1bGUocmVuZGVyYWJsZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RvciBzdHJpbmcuXG4gICAgICovXG4gICAgLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JUZXh0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHlsZVJ1bGU7XG59KEJhc2VTdHlsZVJ1bGUpO1xudmFyIHBsdWdpblN0eWxlUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAobmFtZVswXSA9PT0gJ0AnIHx8IG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFN0eWxlUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0VG9TdHJpbmdPcHRpb25zID0ge1xuICBpbmRlbnQ6IDEsXG4gIGNoaWxkcmVuOiB0cnVlXG59O1xudmFyIGF0UmVnRXhwID0gL0AoW1xcdy1dKykvO1xuLyoqXG4gKiBDb25kaXRpb25hbCBydWxlIGZvciBAbWVkaWEsIEBzdXBwb3J0c1xuICovXG5cbnZhciBDb25kaXRpb25hbFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb25kaXRpb25hbFJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnY29uZGl0aW9uYWwnO1xuICAgIHRoaXMuYXQgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5xdWVyeSA9IHZvaWQgMDtcbiAgICB0aGlzLnJ1bGVzID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0ga2V5OyAvLyBLZXkgbWlnaHQgY29udGFpbiBhIHVuaXF1ZSBzdWZmaXggaW4gY2FzZSB0aGUgYG5hbWVgIHBhc3NlZCBieSB1c2VyIHdhcyBkdXBsaWNhdGUuXG5cbiAgICB0aGlzLnF1ZXJ5ID0gb3B0aW9ucy5uYW1lO1xuICAgIHZhciBhdE1hdGNoID0ga2V5Lm1hdGNoKGF0UmVnRXhwKTtcbiAgICB0aGlzLmF0ID0gYXRNYXRjaCA/IGF0TWF0Y2hbMV0gOiAndW5rbm93bic7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJ1bGVzID0gbmV3IFJ1bGVMaXN0KF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGVzW25hbWVdKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcnVsZS5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gQ29uZGl0aW9uYWxSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0UnVsZSA9IGZ1bmN0aW9uIGdldFJ1bGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgcmVnaXN0ZXIgcnVsZSwgcnVuIHBsdWdpbnMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZFJ1bGUgPSBmdW5jdGlvbiBhZGRSdWxlKG5hbWUsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJ1bGUgPSB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgaWYgKCFydWxlKSByZXR1cm4gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW5kZW50ID09IG51bGwpIG9wdGlvbnMuaW5kZW50ID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucy5pbmRlbnQ7XG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT0gbnVsbCkgb3B0aW9ucy5jaGlsZHJlbiA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMuY2hpbGRyZW47XG5cbiAgICBpZiAob3B0aW9ucy5jaGlsZHJlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXJ5ICsgXCIge31cIjtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnJ1bGVzLnRvU3RyaW5nKG9wdGlvbnMpO1xuICAgIHJldHVybiBjaGlsZHJlbiA/IHRoaXMucXVlcnkgKyBcIiB7XFxuXCIgKyBjaGlsZHJlbiArIFwiXFxufVwiIDogJyc7XG4gIH07XG5cbiAgcmV0dXJuIENvbmRpdGlvbmFsUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAgPSAvQG1lZGlhfEBzdXBwb3J0c1xccysvO1xudmFyIHBsdWdpbkNvbmRpdGlvbmFsUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5UmVnRXhwLnRlc3Qoa2V5KSA/IG5ldyBDb25kaXRpb25hbFJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIDogbnVsbDtcbiAgfVxufTtcblxudmFyIGRlZmF1bHRUb1N0cmluZ09wdGlvbnMkMSA9IHtcbiAgaW5kZW50OiAxLFxuICBjaGlsZHJlbjogdHJ1ZVxufTtcbnZhciBuYW1lUmVnRXhwID0gL0BrZXlmcmFtZXNcXHMrKFtcXHctXSspLztcbi8qKlxuICogUnVsZSBmb3IgQGtleWZyYW1lc1xuICovXG5cbnZhciBLZXlmcmFtZXNSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gS2V5ZnJhbWVzUnVsZShrZXksIGZyYW1lcywgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdrZXlmcmFtZXMnO1xuICAgIHRoaXMuYXQgPSAnQGtleWZyYW1lcyc7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5uYW1lID0gdm9pZCAwO1xuICAgIHRoaXMuaWQgPSB2b2lkIDA7XG4gICAgdGhpcy5ydWxlcyA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB2YXIgbmFtZU1hdGNoID0ga2V5Lm1hdGNoKG5hbWVSZWdFeHApO1xuXG4gICAgaWYgKG5hbWVNYXRjaCAmJiBuYW1lTWF0Y2hbMV0pIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWVNYXRjaFsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYW1lID0gJ25vbmFtZSc7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIEJhZCBrZXlmcmFtZXMgbmFtZSBcIiArIGtleSkgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdGhpcy5rZXkgPSB0aGlzLnR5cGUgKyBcIi1cIiArIHRoaXMubmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHZhciBzY29wZWQgPSBvcHRpb25zLnNjb3BlZCxcbiAgICAgICAgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBnZW5lcmF0ZUlkID0gb3B0aW9ucy5nZW5lcmF0ZUlkO1xuICAgIHRoaXMuaWQgPSBzY29wZWQgPT09IGZhbHNlID8gdGhpcy5uYW1lIDogZXNjYXBlKGdlbmVyYXRlSWQodGhpcywgc2hlZXQpKTtcbiAgICB0aGlzLnJ1bGVzID0gbmV3IFJ1bGVMaXN0KF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIGZyYW1lcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQobmFtZSwgZnJhbWVzW25hbWVdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gS2V5ZnJhbWVzUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zJDE7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW5kZW50ID09IG51bGwpIG9wdGlvbnMuaW5kZW50ID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmluZGVudDtcbiAgICBpZiAob3B0aW9ucy5jaGlsZHJlbiA9PSBudWxsKSBvcHRpb25zLmNoaWxkcmVuID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmNoaWxkcmVuO1xuXG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdCArIFwiIFwiICsgdGhpcy5pZCArIFwiIHt9XCI7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgICBpZiAoY2hpbGRyZW4pIGNoaWxkcmVuID0gXCJcXG5cIiArIGNoaWxkcmVuICsgXCJcXG5cIjtcbiAgICByZXR1cm4gdGhpcy5hdCArIFwiIFwiICsgdGhpcy5pZCArIFwiIHtcIiArIGNoaWxkcmVuICsgXCJ9XCI7XG4gIH07XG5cbiAgcmV0dXJuIEtleWZyYW1lc1J1bGU7XG59KCk7XG52YXIga2V5UmVnRXhwJDEgPSAvQGtleWZyYW1lc1xccysvO1xudmFyIHJlZlJlZ0V4cCA9IC9cXCQoW1xcdy1dKykvZztcblxudmFyIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUgPSBmdW5jdGlvbiBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbCwga2V5ZnJhbWVzKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWwucmVwbGFjZShyZWZSZWdFeHAsIGZ1bmN0aW9uIChtYXRjaCwgbmFtZSkge1xuICAgICAgaWYgKG5hbWUgaW4ga2V5ZnJhbWVzKSB7XG4gICAgICAgIHJldHVybiBrZXlmcmFtZXNbbmFtZV07XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gUmVmZXJlbmNlZCBrZXlmcmFtZXMgcnVsZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkLlwiKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuLyoqXG4gKiBSZXBsYWNlIHRoZSByZWZlcmVuY2UgZm9yIGEgYW5pbWF0aW9uIG5hbWUuXG4gKi9cblxuXG52YXIgcmVwbGFjZVJlZiA9IGZ1bmN0aW9uIHJlcGxhY2VSZWYoc3R5bGUsIHByb3AsIGtleWZyYW1lcykge1xuICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wXTtcbiAgdmFyIHJlZktleWZyYW1lID0gZmluZFJlZmVyZW5jZWRLZXlmcmFtZSh2YWx1ZSwga2V5ZnJhbWVzKTtcblxuICBpZiAocmVmS2V5ZnJhbWUgIT09IHZhbHVlKSB7XG4gICAgc3R5bGVbcHJvcF0gPSByZWZLZXlmcmFtZTtcbiAgfVxufTtcblxudmFyIHBsdWdpbiA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5UmVnRXhwJDEudGVzdChrZXkpID8gbmV3IEtleWZyYW1lc1J1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIDogbnVsbDtcbiAgfSxcbiAgLy8gQW5pbWF0aW9uIG5hbWUgcmVmIHJlcGxhY2VyLlxuICBvblByb2Nlc3NTdHlsZTogZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUsIHNoZWV0KSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJyB8fCAhc2hlZXQpIHJldHVybiBzdHlsZTtcbiAgICBpZiAoJ2FuaW1hdGlvbi1uYW1lJyBpbiBzdHlsZSkgcmVwbGFjZVJlZihzdHlsZSwgJ2FuaW1hdGlvbi1uYW1lJywgc2hlZXQua2V5ZnJhbWVzKTtcbiAgICBpZiAoJ2FuaW1hdGlvbicgaW4gc3R5bGUpIHJlcGxhY2VSZWYoc3R5bGUsICdhbmltYXRpb24nLCBzaGVldC5rZXlmcmFtZXMpO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfSxcbiAgb25DaGFuZ2VWYWx1ZTogZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWwsIHByb3AsIHJ1bGUpIHtcbiAgICB2YXIgc2hlZXQgPSBydWxlLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICBpZiAoIXNoZWV0KSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgcmV0dXJuIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUodmFsLCBzaGVldC5rZXlmcmFtZXMpO1xuXG4gICAgICBjYXNlICdhbmltYXRpb24tbmFtZSc6XG4gICAgICAgIHJldHVybiBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbCwgc2hlZXQua2V5ZnJhbWVzKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBLZXlmcmFtZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlU3R5bGVSdWxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKEtleWZyYW1lUnVsZSwgX0Jhc2VTdHlsZVJ1bGUpO1xuXG4gIGZ1bmN0aW9uIEtleWZyYW1lUnVsZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQmFzZVN0eWxlUnVsZS5jYWxsLmFwcGx5KF9CYXNlU3R5bGVSdWxlLCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEtleWZyYW1lUnVsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcbiAgICB2YXIgb3B0cyA9IGxpbmsgPyBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYWxsb3dFbXB0eTogdHJ1ZVxuICAgIH0pIDogb3B0aW9ucztcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5rZXksIHRoaXMuc3R5bGUsIG9wdHMpO1xuICB9O1xuXG4gIHJldHVybiBLZXlmcmFtZVJ1bGU7XG59KEJhc2VTdHlsZVJ1bGUpO1xudmFyIHBsdWdpbktleWZyYW1lUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgcmV0dXJuIG5ldyBLZXlmcmFtZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbnZhciBGb250RmFjZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGb250RmFjZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdmb250LWZhY2UnO1xuICAgIHRoaXMuYXQgPSAnQGZvbnQtZmFjZSc7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5zdHlsZSA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gRm9udEZhY2VSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zdHlsZSkpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHN0ciArPSB0b0Nzcyh0aGlzLmF0LCB0aGlzLnN0eWxlW2luZGV4XSk7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlW2luZGV4ICsgMV0pIHN0ciArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9Dc3ModGhpcy5hdCwgdGhpcy5zdHlsZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIEZvbnRGYWNlUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAkMiA9IC9AZm9udC1mYWNlLztcbnZhciBwbHVnaW5Gb250RmFjZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5UmVnRXhwJDIudGVzdChrZXkpID8gbmV3IEZvbnRGYWNlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBWaWV3cG9ydFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaWV3cG9ydFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICd2aWV3cG9ydCc7XG4gICAgdGhpcy5hdCA9ICdAdmlld3BvcnQnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuc3R5bGUgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFZpZXdwb3J0UnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiB0b0Nzcyh0aGlzLmtleSwgdGhpcy5zdHlsZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIFZpZXdwb3J0UnVsZTtcbn0oKTtcbnZhciBwbHVnaW5WaWV3cG9ydFJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5ID09PSAnQHZpZXdwb3J0JyB8fCBrZXkgPT09ICdALW1zLXZpZXdwb3J0JyA/IG5ldyBWaWV3cG9ydFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykgOiBudWxsO1xuICB9XG59O1xuXG52YXIgU2ltcGxlUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNpbXBsZVJ1bGUoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdzaW1wbGUnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMudmFsdWUgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gIHZhciBfcHJvdG8gPSBTaW1wbGVSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHN0ciArPSB0aGlzLmtleSArIFwiIFwiICsgdGhpcy52YWx1ZVtpbmRleF0gKyBcIjtcIjtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVbaW5kZXggKyAxXSkgc3RyICs9ICdcXG4nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmtleSArIFwiIFwiICsgdGhpcy52YWx1ZSArIFwiO1wiO1xuICB9O1xuXG4gIHJldHVybiBTaW1wbGVSdWxlO1xufSgpO1xudmFyIGtleXNNYXAgPSB7XG4gICdAY2hhcnNldCc6IHRydWUsXG4gICdAaW1wb3J0JzogdHJ1ZSxcbiAgJ0BuYW1lc3BhY2UnOiB0cnVlXG59O1xudmFyIHBsdWdpblNpbXBsZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5IGluIGtleXNNYXAgPyBuZXcgU2ltcGxlUnVsZShrZXksIHZhbHVlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBwbHVnaW5zID0gW3BsdWdpblN0eWxlUnVsZSwgcGx1Z2luQ29uZGl0aW9uYWxSdWxlLCBwbHVnaW4sIHBsdWdpbktleWZyYW1lUnVsZSwgcGx1Z2luRm9udEZhY2VSdWxlLCBwbHVnaW5WaWV3cG9ydFJ1bGUsIHBsdWdpblNpbXBsZVJ1bGVdO1xuXG52YXIgZGVmYXVsdFVwZGF0ZU9wdGlvbnMgPSB7XG4gIHByb2Nlc3M6IHRydWVcbn07XG52YXIgZm9yY2VVcGRhdGVPcHRpb25zID0ge1xuICBmb3JjZTogdHJ1ZSxcbiAgcHJvY2VzczogdHJ1ZVxuICAvKipcbiAgICogQ29udGFpbnMgcnVsZXMgb2JqZWN0cyBhbmQgYWxsb3dzIGFkZGluZy9yZW1vdmluZyBldGMuXG4gICAqIElzIHVzZWQgZm9yIGUuZy4gYnkgYFN0eWxlU2hlZXRgIG9yIGBDb25kaXRpb25hbFJ1bGVgLlxuICAgKi9cblxufTtcblxudmFyIFJ1bGVMaXN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLy8gUnVsZXMgcmVnaXN0cnkgZm9yIGFjY2VzcyBieSAuZ2V0KCkgbWV0aG9kLlxuICAvLyBJdCBjb250YWlucyB0aGUgc2FtZSBydWxlIHJlZ2lzdGVyZWQgYnkgbmFtZSBhbmQgYnkgc2VsZWN0b3IuXG4gIC8vIE9yaWdpbmFsIHN0eWxlcyBvYmplY3QuXG4gIC8vIFVzZWQgdG8gZW5zdXJlIGNvcnJlY3QgcnVsZXMgb3JkZXIuXG4gIGZ1bmN0aW9uIFJ1bGVMaXN0KG9wdGlvbnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuICAgIHRoaXMucmF3ID0ge307XG4gICAgdGhpcy5pbmRleCA9IFtdO1xuICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuY2xhc3NlcyA9IHZvaWQgMDtcbiAgICB0aGlzLmtleWZyYW1lcyA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcztcbiAgICB0aGlzLmtleWZyYW1lcyA9IG9wdGlvbnMua2V5ZnJhbWVzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUuXG4gICAqXG4gICAqIFdpbGwgbm90IHJlbmRlciBhZnRlciBTdHlsZSBTaGVldCB3YXMgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFJ1bGVMaXN0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKG5hbWUsIGRlY2wsIHJ1bGVPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHBhcmVudCA9IF90aGlzJG9wdGlvbnMucGFyZW50LFxuICAgICAgICBzaGVldCA9IF90aGlzJG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIGpzcyA9IF90aGlzJG9wdGlvbnMuanNzLFxuICAgICAgICBSZW5kZXJlciA9IF90aGlzJG9wdGlvbnMuUmVuZGVyZXIsXG4gICAgICAgIGdlbmVyYXRlSWQgPSBfdGhpcyRvcHRpb25zLmdlbmVyYXRlSWQsXG4gICAgICAgIHNjb3BlZCA9IF90aGlzJG9wdGlvbnMuc2NvcGVkO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgIGpzczoganNzLFxuICAgICAgUmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgICAgZ2VuZXJhdGVJZDogZ2VuZXJhdGVJZCxcbiAgICAgIHNjb3BlZDogc2NvcGVkLFxuICAgICAgbmFtZTogbmFtZVxuICAgIH0sIHJ1bGVPcHRpb25zKTsgLy8gV2hlbiB1c2VyIHVzZXMgLmNyZWF0ZVN0eWxlU2hlZXQoKSwgZHVwbGljYXRlIG5hbWVzIGFyZSBub3QgcG9zc2libGUsIGJ1dFxuICAgIC8vIGBzaGVldC5hZGRSdWxlKClgIG9wZW5zIHRoZSBkb29yIGZvciBhbnkgZHVwbGljYXRlIHJ1bGUgbmFtZS4gV2hlbiB0aGlzIGhhcHBlbnNcbiAgICAvLyB3ZSBuZWVkIHRvIG1ha2UgdGhlIGtleSB1bmlxdWUgd2l0aGluIHRoaXMgUnVsZUxpc3QgaW5zdGFuY2Ugc2NvcGUuXG5cblxuICAgIHZhciBrZXkgPSBuYW1lO1xuXG4gICAgaWYgKG5hbWUgaW4gdGhpcy5yYXcpIHtcbiAgICAgIGtleSA9IG5hbWUgKyBcIi1kXCIgKyB0aGlzLmNvdW50ZXIrKztcbiAgICB9IC8vIFdlIG5lZWQgdG8gc2F2ZSB0aGUgb3JpZ2luYWwgZGVjbCBiZWZvcmUgY3JlYXRpbmcgdGhlIHJ1bGVcbiAgICAvLyBiZWNhdXNlIGNhY2hlIHBsdWdpbiBuZWVkcyB0byB1c2UgaXQgYXMgYSBrZXkgdG8gcmV0dXJuIGEgY2FjaGVkIHJ1bGUuXG5cblxuICAgIHRoaXMucmF3W2tleV0gPSBkZWNsO1xuXG4gICAgaWYgKGtleSBpbiB0aGlzLmNsYXNzZXMpIHtcbiAgICAgIC8vIEUuZy4gcnVsZXMgaW5zaWRlIG9mIEBtZWRpYSBjb250YWluZXJcbiAgICAgIG9wdGlvbnMuc2VsZWN0b3IgPSBcIi5cIiArIGVzY2FwZSh0aGlzLmNsYXNzZXNba2V5XSk7XG4gICAgfVxuXG4gICAgdmFyIHJ1bGUgPSBjcmVhdGVSdWxlKGtleSwgZGVjbCwgb3B0aW9ucyk7XG4gICAgaWYgKCFydWxlKSByZXR1cm4gbnVsbDtcbiAgICB0aGlzLnJlZ2lzdGVyKHJ1bGUpO1xuICAgIHZhciBpbmRleCA9IG9wdGlvbnMuaW5kZXggPT09IHVuZGVmaW5lZCA/IHRoaXMuaW5kZXgubGVuZ3RoIDogb3B0aW9ucy5pbmRleDtcbiAgICB0aGlzLmluZGV4LnNwbGljZShpbmRleCwgMCwgcnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwW25hbWVdO1xuICB9XG4gIC8qKlxuICAgKiBEZWxldGUgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocnVsZSkge1xuICAgIHRoaXMudW5yZWdpc3RlcihydWxlKTtcbiAgICBkZWxldGUgdGhpcy5yYXdbcnVsZS5rZXldO1xuICAgIHRoaXMuaW5kZXguc3BsaWNlKHRoaXMuaW5kZXguaW5kZXhPZihydWxlKSwgMSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleC5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBSdW4gYG9uUHJvY2Vzc1J1bGUoKWAgcGx1Z2lucyBvbiBldmVyeSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wcm9jZXNzID0gZnVuY3Rpb24gcHJvY2VzcygpIHtcbiAgICB2YXIgcGx1Z2lucyA9IHRoaXMub3B0aW9ucy5qc3MucGx1Z2luczsgLy8gV2UgbmVlZCB0byBjbG9uZSBhcnJheSBiZWNhdXNlIGlmIHdlIG1vZGlmeSB0aGUgaW5kZXggc29tZXdoZXJlIGVsc2UgZHVyaW5nIGEgbG9vcFxuICAgIC8vIHdlIGVuZCB1cCB3aXRoIHZlcnkgaGFyZC10by10cmFjay1kb3duIHNpZGUgZWZmZWN0cy5cblxuICAgIHRoaXMuaW5kZXguc2xpY2UoMCkuZm9yRWFjaChwbHVnaW5zLm9uUHJvY2Vzc1J1bGUsIHBsdWdpbnMpO1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIHJ1bGUgaW4gYC5tYXBgLCBgLmNsYXNzZXNgIGFuZCBgLmtleWZyYW1lc2AgbWFwcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlcihydWxlKSB7XG4gICAgdGhpcy5tYXBbcnVsZS5rZXldID0gcnVsZTtcblxuICAgIGlmIChydWxlIGluc3RhbmNlb2YgU3R5bGVSdWxlKSB7XG4gICAgICB0aGlzLm1hcFtydWxlLnNlbGVjdG9yXSA9IHJ1bGU7XG4gICAgICBpZiAocnVsZS5pZCkgdGhpcy5jbGFzc2VzW3J1bGUua2V5XSA9IHJ1bGUuaWQ7XG4gICAgfSBlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgS2V5ZnJhbWVzUnVsZSAmJiB0aGlzLmtleWZyYW1lcykge1xuICAgICAgdGhpcy5rZXlmcmFtZXNbcnVsZS5uYW1lXSA9IHJ1bGUuaWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udW5yZWdpc3RlciA9IGZ1bmN0aW9uIHVucmVnaXN0ZXIocnVsZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtydWxlLmtleV07XG5cbiAgICBpZiAocnVsZSBpbnN0YW5jZW9mIFN0eWxlUnVsZSkge1xuICAgICAgZGVsZXRlIHRoaXMubWFwW3J1bGUuc2VsZWN0b3JdO1xuICAgICAgZGVsZXRlIHRoaXMuY2xhc3Nlc1tydWxlLmtleV07XG4gICAgfSBlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgS2V5ZnJhbWVzUnVsZSkge1xuICAgICAgZGVsZXRlIHRoaXMua2V5ZnJhbWVzW3J1bGUubmFtZV07XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGZ1bmN0aW9uIHZhbHVlcyB3aXRoIGEgbmV3IGRhdGEuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgbmFtZTtcbiAgICB2YXIgZGF0YTtcbiAgICB2YXIgb3B0aW9ucztcblxuICAgIGlmICh0eXBlb2YgKGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07IC8vICRGbG93Rml4TWVcblxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgICAgbmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHRoaXMudXBkYXRlT25lKHRoaXMubWFwW25hbWVdLCBkYXRhLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW5kZXgubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT25lKHRoaXMuaW5kZXhbaW5kZXhdLCBkYXRhLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEV4ZWN1dGUgcGx1Z2lucywgdXBkYXRlIHJ1bGUgcHJvcHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVwZGF0ZU9uZSA9IGZ1bmN0aW9uIHVwZGF0ZU9uZShydWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRVcGRhdGVPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRvcHRpb25zMiA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgcGx1Z2lucyA9IF90aGlzJG9wdGlvbnMyLmpzcy5wbHVnaW5zLFxuICAgICAgICBzaGVldCA9IF90aGlzJG9wdGlvbnMyLnNoZWV0OyAvLyBJdCBpcyBhIHJ1bGVzIGNvbnRhaW5lciBsaWtlIGZvciBlLmcuIENvbmRpdGlvbmFsUnVsZS5cblxuICAgIGlmIChydWxlLnJ1bGVzIGluc3RhbmNlb2YgUnVsZUxpc3QpIHtcbiAgICAgIHJ1bGUucnVsZXMudXBkYXRlKGRhdGEsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzdHlsZVJ1bGUgPSBydWxlO1xuICAgIHZhciBzdHlsZSA9IHN0eWxlUnVsZS5zdHlsZTtcbiAgICBwbHVnaW5zLm9uVXBkYXRlKGRhdGEsIHJ1bGUsIHNoZWV0LCBvcHRpb25zKTsgLy8gV2UgcmVseSBvbiBhIG5ldyBgc3R5bGVgIHJlZiBpbiBjYXNlIGl0IHdhcyBtdXRhdGVkIGR1cmluZyBvblVwZGF0ZSBob29rLlxuXG4gICAgaWYgKG9wdGlvbnMucHJvY2VzcyAmJiBzdHlsZSAmJiBzdHlsZSAhPT0gc3R5bGVSdWxlLnN0eWxlKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHJ1biB0aGUgcGx1Z2lucyBpbiBjYXNlIG5ldyBgc3R5bGVgIHJlbGllcyBvbiBzeW50YXggcGx1Z2lucy5cbiAgICAgIHBsdWdpbnMub25Qcm9jZXNzU3R5bGUoc3R5bGVSdWxlLnN0eWxlLCBzdHlsZVJ1bGUsIHNoZWV0KTsgLy8gVXBkYXRlIGFuZCBhZGQgcHJvcHMuXG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVSdWxlLnN0eWxlKSB7XG4gICAgICAgIHZhciBuZXh0VmFsdWUgPSBzdHlsZVJ1bGUuc3R5bGVbcHJvcF07XG4gICAgICAgIHZhciBwcmV2VmFsdWUgPSBzdHlsZVtwcm9wXTsgLy8gV2UgbmVlZCB0byB1c2UgYGZvcmNlOiB0cnVlYCBiZWNhdXNlIGBydWxlLnN0eWxlYCBoYXMgYmVlbiB1cGRhdGVkIGR1cmluZyBvblVwZGF0ZSBob29rLCBzbyBgcnVsZS5wcm9wKClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgQ1NTT00gcnVsZS5cbiAgICAgICAgLy8gV2UgZG8gdGhpcyBjb21wYXJpc29uIHRvIGF2b2lkIHVubmVlZGVkIGBydWxlLnByb3AoKWAgY2FsbHMsIHNpbmNlIHdlIGhhdmUgdGhlIG9sZCBgc3R5bGVgIG9iamVjdCBoZXJlLlxuXG4gICAgICAgIGlmIChuZXh0VmFsdWUgIT09IHByZXZWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlUnVsZS5wcm9wKHByb3AsIG5leHRWYWx1ZSwgZm9yY2VVcGRhdGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZW1vdmUgcHJvcHMuXG5cblxuICAgICAgZm9yICh2YXIgX3Byb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgdmFyIF9uZXh0VmFsdWUgPSBzdHlsZVJ1bGUuc3R5bGVbX3Byb3BdO1xuICAgICAgICB2YXIgX3ByZXZWYWx1ZSA9IHN0eWxlW19wcm9wXTsgLy8gV2UgbmVlZCB0byB1c2UgYGZvcmNlOiB0cnVlYCBiZWNhdXNlIGBydWxlLnN0eWxlYCBoYXMgYmVlbiB1cGRhdGVkIGR1cmluZyBvblVwZGF0ZSBob29rLCBzbyBgcnVsZS5wcm9wKClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgQ1NTT00gcnVsZS5cbiAgICAgICAgLy8gV2UgZG8gdGhpcyBjb21wYXJpc29uIHRvIGF2b2lkIHVubmVlZGVkIGBydWxlLnByb3AoKWAgY2FsbHMsIHNpbmNlIHdlIGhhdmUgdGhlIG9sZCBgc3R5bGVgIG9iamVjdCBoZXJlLlxuXG4gICAgICAgIGlmIChfbmV4dFZhbHVlID09IG51bGwgJiYgX25leHRWYWx1ZSAhPT0gX3ByZXZWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlUnVsZS5wcm9wKF9wcm9wLCBudWxsLCBmb3JjZVVwZGF0ZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IHJ1bGVzIHRvIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcbiAgICB2YXIgbGluayA9IHNoZWV0ID8gc2hlZXQub3B0aW9ucy5saW5rIDogZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbmRleC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBydWxlID0gdGhpcy5pbmRleFtpbmRleF07XG4gICAgICB2YXIgY3NzID0gcnVsZS50b1N0cmluZyhvcHRpb25zKTsgLy8gTm8gbmVlZCB0byByZW5kZXIgYW4gZW1wdHkgcnVsZS5cblxuICAgICAgaWYgKCFjc3MgJiYgIWxpbmspIGNvbnRpbnVlO1xuICAgICAgaWYgKHN0cikgc3RyICs9ICdcXG4nO1xuICAgICAgc3RyICs9IGNzcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIHJldHVybiBSdWxlTGlzdDtcbn0oKTtcblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KHN0eWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmRlcGxveWVkID0gdm9pZCAwO1xuICAgIHRoaXMuYXR0YWNoZWQgPSB2b2lkIDA7XG4gICAgdGhpcy5ydWxlcyA9IHZvaWQgMDtcbiAgICB0aGlzLnJlbmRlcmVyID0gdm9pZCAwO1xuICAgIHRoaXMuY2xhc3NlcyA9IHZvaWQgMDtcbiAgICB0aGlzLmtleWZyYW1lcyA9IHZvaWQgMDtcbiAgICB0aGlzLnF1ZXVlID0gdm9pZCAwO1xuICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlcGxveWVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGFzc2VzID0ge307XG4gICAgdGhpcy5rZXlmcmFtZXMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgc2hlZXQ6IHRoaXMsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBrZXlmcmFtZXM6IHRoaXMua2V5ZnJhbWVzXG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9ucy5SZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBvcHRpb25zLlJlbmRlcmVyKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMgPSBuZXcgUnVsZUxpc3QodGhpcy5vcHRpb25zKTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZXNbbmFtZV0pO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucHJvY2VzcygpO1xuICB9XG4gIC8qKlxuICAgKiBBdHRhY2ggcmVuZGVyYWJsZSB0byB0aGUgcmVuZGVyIHRyZWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHJldHVybiB0aGlzO1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB0aGlzLnJlbmRlcmVyLmF0dGFjaCgpO1xuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlOyAvLyBPcmRlciBpcyBpbXBvcnRhbnQsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIGluc2VydFJ1bGUgQVBJIGlmIHN0eWxlIGVsZW1lbnQgaXMgbm90IGF0dGFjaGVkLlxuXG4gICAgaWYgKCF0aGlzLmRlcGxveWVkKSB0aGlzLmRlcGxveSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgcmVuZGVyYWJsZSBmcm9tIHJlbmRlciB0cmVlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpcztcbiAgICBpZiAodGhpcy5yZW5kZXJlcikgdGhpcy5yZW5kZXJlci5kZXRhY2goKTtcbiAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIHJ1bGUgdG8gdGhlIGN1cnJlbnQgc3R5bGVzaGVldC5cbiAgICogV2lsbCBpbnNlcnQgYSBydWxlIGFsc28gYWZ0ZXIgdGhlIHN0eWxlc2hlZXQgaGFzIGJlZW4gcmVuZGVyZWQgZmlyc3QgdGltZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZSA9IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWU7IC8vIFBsdWdpbnMgY2FuIGNyZWF0ZSBydWxlcy5cbiAgICAvLyBJbiBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgcmlnaHQgb3JkZXIsIHdlIG5lZWQgdG8gcXVldWUgYWxsIGAuYWRkUnVsZWAgY2FsbHMsXG4gICAgLy8gd2hpY2ggaGFwcGVuIGFmdGVyIHRoZSBmaXJzdCBgcnVsZXMuYWRkKClgIGNhbGwuXG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCAmJiAhcXVldWUpIHRoaXMucXVldWUgPSBbXTtcbiAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXMuYWRkKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xuICAgICAgaWYgKCF0aGlzLmRlcGxveWVkKSByZXR1cm4gcnVsZTsgLy8gRG9uJ3QgaW5zZXJ0IHJ1bGUgZGlyZWN0bHkgaWYgdGhlcmUgaXMgbm8gc3RyaW5naWZpZWQgdmVyc2lvbiB5ZXQuXG4gICAgICAvLyBJdCB3aWxsIGJlIGluc2VydGVkIGFsbCB0b2dldGhlciB3aGVuIC5hdHRhY2ggaXMgY2FsbGVkLlxuXG4gICAgICBpZiAocXVldWUpIHF1ZXVlLnB1c2gocnVsZSk7ZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0UnVsZShydWxlKTtcblxuICAgICAgICBpZiAodGhpcy5xdWV1ZSkge1xuICAgICAgICAgIHRoaXMucXVldWUuZm9yRWFjaCh0aGlzLmluc2VydFJ1bGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucXVldWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBydWxlO1xuICAgIH0gLy8gV2UgY2FuJ3QgYWRkIHJ1bGVzIHRvIGEgZGV0YWNoZWQgc3R5bGUgbm9kZS5cbiAgICAvLyBXZSB3aWxsIHJlZGVwbG95IHRoZSBzaGVldCBvbmNlIHVzZXIgd2lsbCBhdHRhY2ggaXQuXG5cblxuICAgIHRoaXMuZGVwbG95ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IHJ1bGUgaW50byB0aGUgU3R5bGVTaGVldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgYWRkIHJ1bGVzLlxuICAgKiBXaWxsIHJlbmRlciBhbHNvIGFmdGVyIFN0eWxlIFNoZWV0IHdhcyByZW5kZXJlZCB0aGUgZmlyc3QgdGltZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZXMgPSBmdW5jdGlvbiBhZGRSdWxlcyhzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgYWRkZWQgPSBbXTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICB2YXIgcnVsZSA9IHRoaXMuYWRkUnVsZShuYW1lLCBzdHlsZXNbbmFtZV0sIG9wdGlvbnMpO1xuICAgICAgaWYgKHJ1bGUpIGFkZGVkLnB1c2gocnVsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZGVkO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlIGJ5IG5hbWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUgYnkgbmFtZS5cbiAgICogUmV0dXJucyBgdHJ1ZWA6IGlmIHJ1bGUgaGFzIGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBET00uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKG5hbWUpIHtcbiAgICB2YXIgcnVsZSA9IHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyA/IG5hbWUgOiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgICBpZiAoIXJ1bGUpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLnJ1bGVzLnJlbW92ZShydWxlKTtcblxuICAgIGlmICh0aGlzLmF0dGFjaGVkICYmIHJ1bGUucmVuZGVyYWJsZSAmJiB0aGlzLnJlbmRlcmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5kZWxldGVSdWxlKHJ1bGUucmVuZGVyYWJsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBEZXBsb3kgcHVyZSBDU1Mgc3RyaW5nIHRvIGEgcmVuZGVyYWJsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVwbG95ID0gZnVuY3Rpb24gZGVwbG95KCkge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB0aGlzLnJlbmRlcmVyLmRlcGxveSgpO1xuICAgIHRoaXMuZGVwbG95ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGZ1bmN0aW9uIHZhbHVlcyB3aXRoIGEgbmV3IGRhdGEuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3RoaXMkcnVsZXM7XG5cbiAgICAoX3RoaXMkcnVsZXMgPSB0aGlzLnJ1bGVzKS51cGRhdGUuYXBwbHkoX3RoaXMkcnVsZXMsIGFyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyBhIHNpbmdsZSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51cGRhdGVPbmUgPSBmdW5jdGlvbiB1cGRhdGVPbmUocnVsZSwgZGF0YSwgb3B0aW9ucykge1xuICAgIHRoaXMucnVsZXMudXBkYXRlT25lKHJ1bGUsIGRhdGEsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IHJ1bGVzIHRvIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMudG9TdHJpbmcob3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbnZhciBQbHVnaW5zUmVnaXN0cnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQbHVnaW5zUmVnaXN0cnkoKSB7XG4gICAgdGhpcy5wbHVnaW5zID0ge1xuICAgICAgaW50ZXJuYWw6IFtdLFxuICAgICAgZXh0ZXJuYWw6IFtdXG4gICAgfTtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gdm9pZCAwO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFBsdWdpbnNSZWdpc3RyeS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIENhbGwgYG9uQ3JlYXRlUnVsZWAgaG9va3MgYW5kIHJldHVybiBhbiBvYmplY3QgaWYgcmV0dXJuZWQgYnkgYSBob29rLlxuICAgKi9cbiAgX3Byb3RvLm9uQ3JlYXRlUnVsZSA9IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShuYW1lLCBkZWNsLCBvcHRpb25zKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lm9uQ3JlYXRlUnVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLnJlZ2lzdHJ5Lm9uQ3JlYXRlUnVsZVtpXShuYW1lLCBkZWNsLCBvcHRpb25zKTtcbiAgICAgIGlmIChydWxlKSByZXR1cm4gcnVsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogQ2FsbCBgb25Qcm9jZXNzUnVsZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uUHJvY2Vzc1J1bGUgPSBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUpIHtcbiAgICBpZiAocnVsZS5pc1Byb2Nlc3NlZCkgcmV0dXJuO1xuICAgIHZhciBzaGVldCA9IHJ1bGUub3B0aW9ucy5zaGVldDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NSdWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1J1bGVbaV0ocnVsZSwgc2hlZXQpO1xuICAgIH1cblxuICAgIGlmIChydWxlLnN0eWxlKSB0aGlzLm9uUHJvY2Vzc1N0eWxlKHJ1bGUuc3R5bGUsIHJ1bGUsIHNoZWV0KTtcbiAgICBydWxlLmlzUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogQ2FsbCBgb25Qcm9jZXNzU3R5bGVgIGhvb2tzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vblByb2Nlc3NTdHlsZSA9IGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlLCBzaGVldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTdHlsZS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcnVsZS5zdHlsZSA9IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzU3R5bGVbaV0ocnVsZS5zdHlsZSwgcnVsZSwgc2hlZXQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbCBgb25Qcm9jZXNzU2hlZXRgIGhvb2tzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vblByb2Nlc3NTaGVldCA9IGZ1bmN0aW9uIG9uUHJvY2Vzc1NoZWV0KHNoZWV0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1NoZWV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1NoZWV0W2ldKHNoZWV0KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uVXBkYXRlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShkYXRhLCBydWxlLCBzaGVldCwgb3B0aW9ucykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vblVwZGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblVwZGF0ZVtpXShkYXRhLCBydWxlLCBzaGVldCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvbkNoYW5nZVZhbHVlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25DaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3AsIHJ1bGUpIHtcbiAgICB2YXIgcHJvY2Vzc2VkVmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vbkNoYW5nZVZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9jZXNzZWRWYWx1ZSA9IHRoaXMucmVnaXN0cnkub25DaGFuZ2VWYWx1ZVtpXShwcm9jZXNzZWRWYWx1ZSwgcHJvcCwgcnVsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NlZFZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIHBsdWdpbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXNlID0gZnVuY3Rpb24gdXNlKG5ld1BsdWdpbiwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIHF1ZXVlOiAnZXh0ZXJuYWwnXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBwbHVnaW5zID0gdGhpcy5wbHVnaW5zW29wdGlvbnMucXVldWVdOyAvLyBBdm9pZHMgYXBwbHlpbmcgc2FtZSBwbHVnaW4gdHdpY2UsIGF0IGxlYXN0IGJhc2VkIG9uIHJlZi5cblxuICAgIGlmIChwbHVnaW5zLmluZGV4T2YobmV3UGx1Z2luKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwbHVnaW5zLnB1c2gobmV3UGx1Z2luKTtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gW10uY29uY2F0KHRoaXMucGx1Z2lucy5leHRlcm5hbCwgdGhpcy5wbHVnaW5zLmludGVybmFsKS5yZWR1Y2UoZnVuY3Rpb24gKHJlZ2lzdHJ5LCBwbHVnaW4pIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2luKSB7XG4gICAgICAgIGlmIChuYW1lIGluIHJlZ2lzdHJ5KSB7XG4gICAgICAgICAgcmVnaXN0cnlbbmFtZV0ucHVzaChwbHVnaW5bbmFtZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gVW5rbm93biBob29rIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIpIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWdpc3RyeTtcbiAgICB9LCB7XG4gICAgICBvbkNyZWF0ZVJ1bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzUnVsZTogW10sXG4gICAgICBvblByb2Nlc3NTdHlsZTogW10sXG4gICAgICBvblByb2Nlc3NTaGVldDogW10sXG4gICAgICBvbkNoYW5nZVZhbHVlOiBbXSxcbiAgICAgIG9uVXBkYXRlOiBbXVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBQbHVnaW5zUmVnaXN0cnk7XG59KCk7XG5cbi8qKlxuICogU2hlZXRzIHJlZ2lzdHJ5IHRvIGFjY2VzcyB0aGVtIGFsbCBhdCBvbmUgcGxhY2UuXG4gKi9cbnZhciBTaGVldHNSZWdpc3RyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNoZWV0c1JlZ2lzdHJ5KCkge1xuICAgIHRoaXMucmVnaXN0cnkgPSBbXTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTaGVldHNSZWdpc3RyeS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgU3R5bGUgU2hlZXQuXG4gICAqL1xuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHNoZWV0KSB7XG4gICAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5yZWdpc3RyeTtcbiAgICB2YXIgaW5kZXggPSBzaGVldC5vcHRpb25zLmluZGV4O1xuICAgIGlmIChyZWdpc3RyeS5pbmRleE9mKHNoZWV0KSAhPT0gLTEpIHJldHVybjtcblxuICAgIGlmIChyZWdpc3RyeS5sZW5ndGggPT09IDAgfHwgaW5kZXggPj0gdGhpcy5pbmRleCkge1xuICAgICAgcmVnaXN0cnkucHVzaChzaGVldCk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGaW5kIGEgcG9zaXRpb24uXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWdpc3RyeVtpXS5vcHRpb25zLmluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgcmVnaXN0cnkuc3BsaWNlKGksIDAsIHNoZWV0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVzZXQgdGhlIHJlZ2lzdHJ5LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMucmVnaXN0cnkgPSBbXTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGEgU3R5bGUgU2hlZXQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShzaGVldCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMucmVnaXN0cnkuaW5kZXhPZihzaGVldCk7XG4gICAgdGhpcy5yZWdpc3RyeS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IGFsbCBhdHRhY2hlZCBzaGVldHMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgYXR0YWNoZWQgPSBfcmVmLmF0dGFjaGVkLFxuICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYXR0YWNoZWRcIl0pO1xuXG4gICAgdmFyIGNzcyA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLnJlZ2lzdHJ5W2ldO1xuXG4gICAgICBpZiAoYXR0YWNoZWQgIT0gbnVsbCAmJiBzaGVldC5hdHRhY2hlZCAhPT0gYXR0YWNoZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjc3MpIGNzcyArPSAnXFxuJztcbiAgICAgIGNzcyArPSBzaGVldC50b1N0cmluZyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTaGVldHNSZWdpc3RyeSwgW3tcbiAgICBrZXk6IFwiaW5kZXhcIixcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgaGlnaGVzdCBpbmRleCBudW1iZXIuXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5yZWdpc3RyeVt0aGlzLnJlZ2lzdHJ5Lmxlbmd0aCAtIDFdLm9wdGlvbnMuaW5kZXg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNoZWV0c1JlZ2lzdHJ5O1xufSgpO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBnbG9iYWwgc2hlZXRzIHJlZ2lzdHJ5LiBPbmx5IERvbVJlbmRlcmVyIHdpbGwgYWRkIHNoZWV0cyB0byBpdC5cbiAqIE9uIHRoZSBzZXJ2ZXIgb25lIHNob3VsZCB1c2UgYW4gb3duIFNoZWV0c1JlZ2lzdHJ5IGluc3RhbmNlIGFuZCBhZGQgdGhlXG4gKiBzaGVldHMgdG8gaXQsIGJlY2F1c2UgeW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyByZWdpc3RyeSBmb3JcbiAqIGVhY2ggcmVxdWVzdCBpbiBvcmRlciB0byBub3QgbGVhayBzaGVldHMgYWNyb3NzIHJlcXVlc3RzLlxuICovXG5cbnZhciBzaGVldHMgPSBuZXcgU2hlZXRzUmVnaXN0cnkoKTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsVGhpcyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aCA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbnZhciBucyA9ICcyZjFhY2M2YzNhNjA2YjA4MmU1ZWVmNWU1NDQxNGZmYic7XG5pZiAoZ2xvYmFsVGhpc1tuc10gPT0gbnVsbCkgZ2xvYmFsVGhpc1tuc10gPSAwOyAvLyBCdW5kbGUgbWF5IGNvbnRhaW4gbXVsdGlwbGUgSlNTIHZlcnNpb25zIGF0IHRoZSBzYW1lIHRpbWUuIEluIG9yZGVyIHRvIGlkZW50aWZ5XG4vLyB0aGUgY3VycmVudCB2ZXJzaW9uIHdpdGgganVzdCBvbmUgc2hvcnQgbnVtYmVyIGFuZCB1c2UgaXQgZm9yIGNsYXNzZXMgZ2VuZXJhdGlvblxuLy8gd2UgdXNlIGEgY291bnRlci4gQWxzbyBpdCBpcyBtb3JlIGFjY3VyYXRlLCBiZWNhdXNlIHVzZXIgY2FuIG1hbnVhbGx5IHJlZXZhbHVhdGVcbi8vIHRoZSBtb2R1bGUuXG5cbnZhciBtb2R1bGVJZCA9IGdsb2JhbFRoaXNbbnNdKys7XG5cbnZhciBtYXhSdWxlcyA9IDFlMTA7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyB1bmlxdWUgY2xhc3MgbmFtZXMgYmFzZWQgb24gY291bnRlcnMuXG4gKiBXaGVuIG5ldyBnZW5lcmF0b3IgZnVuY3Rpb24gaXMgY3JlYXRlZCwgcnVsZSBjb3VudGVyIGlzIHJlc2V0ZWQuXG4gKiBXZSBuZWVkIHRvIHJlc2V0IHRoZSBydWxlIGNvdW50ZXIgZm9yIFNTUiBmb3IgZWFjaCByZXF1ZXN0LlxuICovXG52YXIgY3JlYXRlR2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGNyZWF0ZUdlbmVyYXRlSWQob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIHJ1bGVDb3VudGVyID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChydWxlLCBzaGVldCkge1xuICAgIHJ1bGVDb3VudGVyICs9IDE7XG5cbiAgICBpZiAocnVsZUNvdW50ZXIgPiBtYXhSdWxlcykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBZb3UgbWlnaHQgaGF2ZSBhIG1lbW9yeSBsZWFrLiBSdWxlIGNvdW50ZXIgaXMgYXQgXCIgKyBydWxlQ291bnRlciArIFwiLlwiKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICB2YXIganNzSWQgPSAnJztcbiAgICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgICBpZiAoc2hlZXQpIHtcbiAgICAgIGlmIChzaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgICBwcmVmaXggPSBzaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNoZWV0Lm9wdGlvbnMuanNzLmlkICE9IG51bGwpIHtcbiAgICAgICAganNzSWQgPSBTdHJpbmcoc2hlZXQub3B0aW9ucy5qc3MuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm1pbmlmeSkge1xuICAgICAgLy8gVXNpbmcgXCJjXCIgYmVjYXVzZSBhIG51bWJlciBjYW4ndCBiZSB0aGUgZmlyc3QgY2hhciBpbiBhIGNsYXNzIG5hbWUuXG4gICAgICByZXR1cm4gXCJcIiArIChwcmVmaXggfHwgJ2MnKSArIG1vZHVsZUlkICsganNzSWQgKyBydWxlQ291bnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ICsgcnVsZS5rZXkgKyBcIi1cIiArIG1vZHVsZUlkICsgKGpzc0lkID8gXCItXCIgKyBqc3NJZCA6ICcnKSArIFwiLVwiICsgcnVsZUNvdW50ZXI7XG4gIH07XG59O1xuXG4vKipcbiAqIENhY2hlIHRoZSB2YWx1ZSBmcm9tIHRoZSBmaXJzdCB0aW1lIGEgZnVuY3Rpb24gaXMgY2FsbGVkLlxuICovXG52YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIHZhbHVlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdmFsdWUpIHZhbHVlID0gZm4oKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuLyoqXG4gKiBHZXQgYSBzdHlsZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUoY3NzUnVsZSwgcHJvcCkge1xuICB0cnkge1xuICAgIC8vIFN1cHBvcnQgQ1NTVE9NLlxuICAgIGlmIChjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwKSB7XG4gICAgICByZXR1cm4gY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcC5nZXQocHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc1J1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSUUgbWF5IHRocm93IGlmIHByb3BlcnR5IGlzIHVua25vd24uXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFNldCBhIHN0eWxlIHByb3BlcnR5LlxuICovXG5cblxuZnVuY3Rpb24gc2V0UHJvcGVydHkoY3NzUnVsZSwgcHJvcCwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgY3NzVmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY3NzVmFsdWUgPSB0b0Nzc1ZhbHVlKHZhbHVlLCB0cnVlKTtcblxuICAgICAgaWYgKHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnIWltcG9ydGFudCcpIHtcbiAgICAgICAgY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBjc3NWYWx1ZSwgJ2ltcG9ydGFudCcpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IC8vIFN1cHBvcnQgQ1NTVE9NLlxuXG5cbiAgICBpZiAoY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcCkge1xuICAgICAgY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcC5zZXQocHJvcCwgY3NzVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3NSdWxlLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIGNzc1ZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElFIG1heSB0aHJvdyBpZiBwcm9wZXJ0eSBpcyB1bmtub3duLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBSZW1vdmUgYSBzdHlsZSBwcm9wZXJ0eS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KGNzc1J1bGUsIHByb3ApIHtcbiAgdHJ5IHtcbiAgICAvLyBTdXBwb3J0IENTU1RPTS5cbiAgICBpZiAoY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcCkge1xuICAgICAgY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcC5kZWxldGUocHJvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNzc1J1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIERPTUV4Y2VwdGlvbiBcXFwiXCIgKyBlcnIubWVzc2FnZSArIFwiXFxcIiB3YXMgdGhyb3duLiBUcmllZCB0byByZW1vdmUgcHJvcGVydHkgXFxcIlwiICsgcHJvcCArIFwiXFxcIi5cIikgOiB2b2lkIDA7XG4gIH1cbn1cbi8qKlxuICogU2V0IHRoZSBzZWxlY3Rvci5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFNlbGVjdG9yKGNzc1J1bGUsIHNlbGVjdG9yVGV4dCkge1xuICBjc3NSdWxlLnNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yVGV4dDsgLy8gUmV0dXJuIGZhbHNlIGlmIHNldHRlciB3YXMgbm90IHN1Y2Nlc3NmdWwuXG4gIC8vIEN1cnJlbnRseSB3b3JrcyBpbiBjaHJvbWUgb25seS5cblxuICByZXR1cm4gY3NzUnVsZS5zZWxlY3RvclRleHQgPT09IHNlbGVjdG9yVGV4dDtcbn1cbi8qKlxuICogR2V0cyB0aGUgYGhlYWRgIGVsZW1lbnQgdXBvbiB0aGUgZmlyc3QgY2FsbCBhbmQgY2FjaGVzIGl0LlxuICogV2UgYXNzdW1lIGl0IGNhbid0IGJlIG51bGwuXG4gKi9cblxuXG52YXIgZ2V0SGVhZCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xufSk7XG4vKipcbiAqIEZpbmQgYXR0YWNoZWQgc2hlZXQgd2l0aCBhbiBpbmRleCBoaWdoZXIgdGhhbiB0aGUgcGFzc2VkIG9uZS5cbiAqL1xuXG5mdW5jdGlvbiBmaW5kSGlnaGVyU2hlZXQocmVnaXN0cnksIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RyeS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzaGVldCA9IHJlZ2lzdHJ5W2ldO1xuXG4gICAgaWYgKHNoZWV0LmF0dGFjaGVkICYmIHNoZWV0Lm9wdGlvbnMuaW5kZXggPiBvcHRpb25zLmluZGV4ICYmIHNoZWV0Lm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgPT09IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogRmluZCBhdHRhY2hlZCBzaGVldCB3aXRoIHRoZSBoaWdoZXN0IGluZGV4LlxuICovXG5cblxuZnVuY3Rpb24gZmluZEhpZ2hlc3RTaGVldChyZWdpc3RyeSwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gcmVnaXN0cnkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgc2hlZXQgPSByZWdpc3RyeVtpXTtcblxuICAgIGlmIChzaGVldC5hdHRhY2hlZCAmJiBzaGVldC5vcHRpb25zLmluc2VydGlvblBvaW50ID09PSBvcHRpb25zLmluc2VydGlvblBvaW50KSB7XG4gICAgICByZXR1cm4gc2hlZXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEZpbmQgYSBjb21tZW50IHdpdGggXCJqc3NcIiBpbnNpZGUuXG4gKi9cblxuXG5mdW5jdGlvbiBmaW5kQ29tbWVudE5vZGUodGV4dCkge1xuICB2YXIgaGVhZCA9IGdldEhlYWQoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhlYWQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBub2RlID0gaGVhZC5jaGlsZE5vZGVzW2ldO1xuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggJiYgbm9kZS5ub2RlVmFsdWUudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBGaW5kIGEgbm9kZSBiZWZvcmUgd2hpY2ggd2UgY2FuIGluc2VydCB0aGUgc2hlZXQuXG4gKi9cbmZ1bmN0aW9uIGZpbmRQcmV2Tm9kZShvcHRpb25zKSB7XG4gIHZhciByZWdpc3RyeSA9IHNoZWV0cy5yZWdpc3RyeTtcblxuICBpZiAocmVnaXN0cnkubGVuZ3RoID4gMCkge1xuICAgIC8vIFRyeSB0byBpbnNlcnQgYmVmb3JlIHRoZSBuZXh0IGhpZ2hlciBzaGVldC5cbiAgICB2YXIgc2hlZXQgPSBmaW5kSGlnaGVyU2hlZXQocmVnaXN0cnksIG9wdGlvbnMpO1xuXG4gICAgaWYgKHNoZWV0ICYmIHNoZWV0LnJlbmRlcmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJlbnQ6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgbm9kZTogc2hlZXQucmVuZGVyZXIuZWxlbWVudFxuICAgICAgfTtcbiAgICB9IC8vIE90aGVyd2lzZSBpbnNlcnQgYWZ0ZXIgdGhlIGxhc3QgYXR0YWNoZWQuXG5cblxuICAgIHNoZWV0ID0gZmluZEhpZ2hlc3RTaGVldChyZWdpc3RyeSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoc2hlZXQgJiYgc2hlZXQucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmVudDogc2hlZXQucmVuZGVyZXIuZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBub2RlOiBzaGVldC5yZW5kZXJlci5lbGVtZW50Lm5leHRTaWJsaW5nXG4gICAgICB9O1xuICAgIH1cbiAgfSAvLyBUcnkgdG8gZmluZCBhIGNvbW1lbnQgcGxhY2Vob2xkZXIgaWYgcmVnaXN0cnkgaXMgZW1wdHkuXG5cblxuICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuXG4gIGlmIChpbnNlcnRpb25Qb2ludCAmJiB0eXBlb2YgaW5zZXJ0aW9uUG9pbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGNvbW1lbnQgPSBmaW5kQ29tbWVudE5vZGUoaW5zZXJ0aW9uUG9pbnQpO1xuXG4gICAgaWYgKGNvbW1lbnQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmVudDogY29tbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBub2RlOiBjb21tZW50Lm5leHRTaWJsaW5nXG4gICAgICB9O1xuICAgIH0gLy8gSWYgdXNlciBzcGVjaWZpZXMgYW4gaW5zZXJ0aW9uIHBvaW50IGFuZCBpdCBjYW4ndCBiZSBmb3VuZCBpbiB0aGUgZG9jdW1lbnQgLVxuICAgIC8vIGJhZCBzcGVjaWZpY2l0eSBpc3N1ZXMgbWF5IGFwcGVhci5cblxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBJbnNlcnRpb24gcG9pbnQgXFxcIlwiICsgaW5zZXJ0aW9uUG9pbnQgKyBcIlxcXCIgbm90IGZvdW5kLlwiKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogSW5zZXJ0IHN0eWxlIGVsZW1lbnQgaW50byB0aGUgRE9NLlxuICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGUoc3R5bGUsIG9wdGlvbnMpIHtcbiAgdmFyIGluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcbiAgdmFyIG5leHROb2RlID0gZmluZFByZXZOb2RlKG9wdGlvbnMpO1xuXG4gIGlmIChuZXh0Tm9kZSAhPT0gZmFsc2UgJiYgbmV4dE5vZGUucGFyZW50KSB7XG4gICAgbmV4dE5vZGUucGFyZW50Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dE5vZGUubm9kZSk7XG4gICAgcmV0dXJuO1xuICB9IC8vIFdvcmtzIHdpdGggaWZyYW1lcyBhbmQgYW55IG5vZGUgdHlwZXMuXG5cblxuICBpZiAoaW5zZXJ0aW9uUG9pbnQgJiYgdHlwZW9mIGluc2VydGlvblBvaW50Lm5vZGVUeXBlID09PSAnbnVtYmVyJykge1xuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxMzI4NzI4L2ZvcmNlLWNhc3RpbmctaW4tZmxvd1xuICAgIHZhciBpbnNlcnRpb25Qb2ludEVsZW1lbnQgPSBpbnNlcnRpb25Qb2ludDtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGluc2VydGlvblBvaW50RWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgaW5zZXJ0aW9uUG9pbnRFbGVtZW50Lm5leHRTaWJsaW5nKTtlbHNlIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdbSlNTXSBJbnNlcnRpb24gcG9pbnQgaXMgbm90IGluIHRoZSBET00uJykgOiB2b2lkIDA7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZ2V0SGVhZCgpLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbi8qKlxuICogUmVhZCBqc3Mgbm9uY2Ugc2V0dGluZyBmcm9tIHRoZSBwYWdlIGlmIHRoZSB1c2VyIGhhcyBzZXQgaXQuXG4gKi9cblxuXG52YXIgZ2V0Tm9uY2UgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwiY3NwLW5vbmNlXCJdJyk7XG4gIHJldHVybiBub2RlID8gbm9kZS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSA6IG51bGw7XG59KTtcblxudmFyIF9pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShjb250YWluZXIsIHJ1bGUsIGluZGV4KSB7XG4gIHZhciBtYXhJbmRleCA9IGNvbnRhaW5lci5jc3NSdWxlcy5sZW5ndGg7IC8vIEluIGNhc2UgcHJldmlvdXMgaW5zZXJ0aW9uIGZhaWxzLCBwYXNzZWQgaW5kZXggbWlnaHQgYmUgd3JvbmdcblxuICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA+IG1heEluZGV4KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgaW5kZXggPSBtYXhJbmRleDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKCdpbnNlcnRSdWxlJyBpbiBjb250YWluZXIpIHtcbiAgICAgIHZhciBjID0gY29udGFpbmVyO1xuICAgICAgYy5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICB9IC8vIEtleWZyYW1lcyBydWxlLlxuICAgIGVsc2UgaWYgKCdhcHBlbmRSdWxlJyBpbiBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIF9jID0gY29udGFpbmVyO1xuXG4gICAgICAgIF9jLmFwcGVuZFJ1bGUocnVsZSk7XG4gICAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gXCIgKyBlcnIubWVzc2FnZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lci5jc3NSdWxlc1tpbmRleF07XG59O1xuXG52YXIgY3JlYXRlU3R5bGUgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZSgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTsgLy8gV2l0aG91dCBpdCwgSUUgd2lsbCBoYXZlIGEgYnJva2VuIHNvdXJjZSBvcmRlciBzcGVjaWZpY2l0eSBpZiB3ZVxuICAvLyBpbnNlcnQgcnVsZXMgYWZ0ZXIgd2UgaW5zZXJ0IHRoZSBzdHlsZSB0YWcuXG4gIC8vIEl0IHNlZW1zIHRvIGtpY2stb2ZmIHRoZSBzb3VyY2Ugb3JkZXIgc3BlY2lmaWNpdHkgYWxnb3JpdGhtLlxuXG4gIGVsLnRleHRDb250ZW50ID0gJ1xcbic7XG4gIHJldHVybiBlbDtcbn07XG5cbnZhciBEb21SZW5kZXJlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8vIEhUTUxTdHlsZUVsZW1lbnQgbmVlZHMgZml4aW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8yNjk2XG4gIGZ1bmN0aW9uIERvbVJlbmRlcmVyKHNoZWV0KSB7XG4gICAgdGhpcy5nZXRQcm9wZXJ0eVZhbHVlID0gZ2V0UHJvcGVydHlWYWx1ZTtcbiAgICB0aGlzLnNldFByb3BlcnR5ID0gc2V0UHJvcGVydHk7XG4gICAgdGhpcy5yZW1vdmVQcm9wZXJ0eSA9IHJlbW92ZVByb3BlcnR5O1xuICAgIHRoaXMuc2V0U2VsZWN0b3IgPSBzZXRTZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnQgPSB2b2lkIDA7XG4gICAgdGhpcy5zaGVldCA9IHZvaWQgMDtcbiAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSBmYWxzZTtcbiAgICAvLyBUaGVyZSBpcyBubyBzaGVldCB3aGVuIHRoZSByZW5kZXJlciBpcyB1c2VkIGZyb20gYSBzdGFuZGFsb25lIFN0eWxlUnVsZS5cbiAgICBpZiAoc2hlZXQpIHNoZWV0cy5hZGQoc2hlZXQpO1xuICAgIHRoaXMuc2hlZXQgPSBzaGVldDtcblxuICAgIHZhciBfcmVmID0gdGhpcy5zaGVldCA/IHRoaXMuc2hlZXQub3B0aW9ucyA6IHt9LFxuICAgICAgICBtZWRpYSA9IF9yZWYubWVkaWEsXG4gICAgICAgIG1ldGEgPSBfcmVmLm1ldGEsXG4gICAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50IHx8IGNyZWF0ZVN0eWxlKCk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1qc3MnLCAnJyk7XG4gICAgaWYgKG1lZGlhKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICBpZiAobWV0YSkgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1tZXRhJywgbWV0YSk7XG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICBpZiAobm9uY2UpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICB9XG4gIC8qKlxuICAgKiBJbnNlcnQgc3R5bGUgZWxlbWVudCBpbnRvIHJlbmRlciB0cmVlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBEb21SZW5kZXJlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICAvLyBJbiB0aGUgY2FzZSB0aGUgZWxlbWVudCBub2RlIGlzIGV4dGVybmFsIGFuZCBpdCBpcyBhbHJlYWR5IGluIHRoZSBET00uXG4gICAgaWYgKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlIHx8ICF0aGlzLnNoZWV0KSByZXR1cm47XG4gICAgaW5zZXJ0U3R5bGUodGhpcy5lbGVtZW50LCB0aGlzLnNoZWV0Lm9wdGlvbnMpOyAvLyBXaGVuIHJ1bGVzIGFyZSBpbnNlcnRlZCB1c2luZyBgaW5zZXJ0UnVsZWAgQVBJLCBhZnRlciBgc2hlZXQuZGV0YWNoKCkuYXR0YWNoKClgXG4gICAgLy8gbW9zdCBicm93c2VycyBjcmVhdGUgYSBuZXcgQ1NTU3R5bGVTaGVldCwgZXhjZXB0IG9mIGFsbCBJRXMuXG5cbiAgICB2YXIgZGVwbG95ZWQgPSBCb29sZWFuKHRoaXMuc2hlZXQgJiYgdGhpcy5zaGVldC5kZXBsb3llZCk7XG5cbiAgICBpZiAodGhpcy5oYXNJbnNlcnRlZFJ1bGVzICYmIGRlcGxveWVkKSB7XG4gICAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVwbG95KCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgc3R5bGUgZWxlbWVudCBmcm9tIHJlbmRlciB0cmVlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIC8qKlxuICAgKiBJbmplY3QgQ1NTIHN0cmluZyBpbnRvIGVsZW1lbnQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlcGxveSA9IGZ1bmN0aW9uIGRlcGxveSgpIHtcbiAgICB2YXIgc2hlZXQgPSB0aGlzLnNoZWV0O1xuICAgIGlmICghc2hlZXQpIHJldHVybjtcblxuICAgIGlmIChzaGVldC5vcHRpb25zLmxpbmspIHtcbiAgICAgIHRoaXMuaW5zZXJ0UnVsZXMoc2hlZXQucnVsZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXFxuXCIgKyBzaGVldC50b1N0cmluZygpICsgXCJcXG5cIjtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IFJ1bGVMaXN0IGludG8gYW4gZWxlbWVudC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhydWxlcywgbmF0aXZlUGFyZW50KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5pbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pbnNlcnRSdWxlKHJ1bGVzLmluZGV4W2ldLCBpLCBuYXRpdmVQYXJlbnQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IGEgcnVsZSBpbnRvIGVsZW1lbnQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4LCBuYXRpdmVQYXJlbnQpIHtcbiAgICBpZiAobmF0aXZlUGFyZW50ID09PSB2b2lkIDApIHtcbiAgICAgIG5hdGl2ZVBhcmVudCA9IHRoaXMuZWxlbWVudC5zaGVldDtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5ydWxlcykge1xuICAgICAgdmFyIHBhcmVudCA9IHJ1bGU7XG4gICAgICB2YXIgbGF0ZXN0TmF0aXZlUGFyZW50ID0gbmF0aXZlUGFyZW50O1xuXG4gICAgICBpZiAocnVsZS50eXBlID09PSAnY29uZGl0aW9uYWwnIHx8IHJ1bGUudHlwZSA9PT0gJ2tleWZyYW1lcycpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZW5kZXIgdGhlIGNvbnRhaW5lciB3aXRob3V0IGNoaWxkcmVuIGZpcnN0LlxuICAgICAgICBsYXRlc3ROYXRpdmVQYXJlbnQgPSBfaW5zZXJ0UnVsZShuYXRpdmVQYXJlbnQsIHBhcmVudC50b1N0cmluZyh7XG4gICAgICAgICAgY2hpbGRyZW46IGZhbHNlXG4gICAgICAgIH0pLCBpbmRleCk7XG5cbiAgICAgICAgaWYgKGxhdGVzdE5hdGl2ZVBhcmVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnNlcnRSdWxlcyhwYXJlbnQucnVsZXMsIGxhdGVzdE5hdGl2ZVBhcmVudCk7XG4gICAgICByZXR1cm4gbGF0ZXN0TmF0aXZlUGFyZW50O1xuICAgIH0gLy8gSUUga2VlcHMgdGhlIENTU1N0eWxlU2hlZXQgYWZ0ZXIgc3R5bGUgbm9kZSBoYXMgYmVlbiByZWF0dGFjaGVkLFxuICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIGByZW5kZXJhYmxlYCByZWZlcmVuY2UgdGhlIHJpZ2h0IHN0eWxlIHNoZWV0IGFuZCBub3RcbiAgICAvLyByZXJlbmRlciB0aG9zZSBydWxlcy5cblxuXG4gICAgaWYgKHJ1bGUucmVuZGVyYWJsZSAmJiBydWxlLnJlbmRlcmFibGUucGFyZW50U3R5bGVTaGVldCA9PT0gdGhpcy5lbGVtZW50LnNoZWV0KSB7XG4gICAgICByZXR1cm4gcnVsZS5yZW5kZXJhYmxlO1xuICAgIH1cblxuICAgIHZhciBydWxlU3RyID0gcnVsZS50b1N0cmluZygpO1xuICAgIGlmICghcnVsZVN0cikgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIG5hdGl2ZVJ1bGUgPSBfaW5zZXJ0UnVsZShuYXRpdmVQYXJlbnQsIHJ1bGVTdHIsIGluZGV4KTtcblxuICAgIGlmIChuYXRpdmVSdWxlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcyA9IHRydWU7XG4gICAgcnVsZS5yZW5kZXJhYmxlID0gbmF0aXZlUnVsZTtcbiAgICByZXR1cm4gbmF0aXZlUnVsZTtcbiAgfVxuICAvKipcbiAgICogRGVsZXRlIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoY3NzUnVsZSkge1xuICAgIHZhciBzaGVldCA9IHRoaXMuZWxlbWVudC5zaGVldDtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YoY3NzUnVsZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBDU1MgUnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YoY3NzUnVsZSkge1xuICAgIHZhciBjc3NSdWxlcyA9IHRoaXMuZWxlbWVudC5zaGVldC5jc3NSdWxlcztcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBjc3NSdWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChjc3NSdWxlID09PSBjc3NSdWxlc1tpbmRleF0pIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgbmV3IENTUyBydWxlIGFuZCByZXBsYWNlIHRoZSBleGlzdGluZyBvbmUuXG4gICAqXG4gICAqIE9ubHkgdXNlZCBmb3Igc29tZSBvbGQgYnJvd3NlcnMgYmVjYXVzZSB0aGV5IGNhbid0IHNldCBhIHNlbGVjdG9yLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXBsYWNlUnVsZSA9IGZ1bmN0aW9uIHJlcGxhY2VSdWxlKGNzc1J1bGUsIHJ1bGUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YoY3NzUnVsZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudC5zaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgfVxuICAvKipcbiAgICogR2V0IGFsbCBydWxlcyBlbGVtZW50cy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LnNoZWV0LmNzc1J1bGVzO1xuICB9O1xuXG4gIHJldHVybiBEb21SZW5kZXJlcjtcbn0oKTtcblxudmFyIGluc3RhbmNlQ291bnRlciA9IDA7XG5cbnZhciBKc3MgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBKc3Mob3B0aW9ucykge1xuICAgIHRoaXMuaWQgPSBpbnN0YW5jZUNvdW50ZXIrKztcbiAgICB0aGlzLnZlcnNpb24gPSBcIjEwLjMuMFwiO1xuICAgIHRoaXMucGx1Z2lucyA9IG5ldyBQbHVnaW5zUmVnaXN0cnkoKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBpZDoge1xuICAgICAgICBtaW5pZnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY3JlYXRlR2VuZXJhdGVJZDogY3JlYXRlR2VuZXJhdGVJZCxcbiAgICAgIFJlbmRlcmVyOiBpc0luQnJvd3NlciA/IERvbVJlbmRlcmVyIDogbnVsbCxcbiAgICAgIHBsdWdpbnM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmdlbmVyYXRlSWQgPSBjcmVhdGVHZW5lcmF0ZUlkKHtcbiAgICAgIG1pbmlmeTogZmFsc2VcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wbHVnaW5zLnVzZShwbHVnaW5zW2ldLCB7XG4gICAgICAgIHF1ZXVlOiAnaW50ZXJuYWwnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldHVwKG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBQcmVwYXJlcyB2YXJpb3VzIG9wdGlvbnMsIGFwcGxpZXMgcGx1Z2lucy5cbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIHR3aWNlIG9uIHRoZSBzYW1lIGluc3RhbmNlLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHBsdWdpbnNcbiAgICogZGVkdXBsaWNhdGlvbiBsb2dpYy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gSnNzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0dXAgPSBmdW5jdGlvbiBzZXR1cChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkID0gb3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaWQgPSBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRpb25zLmlkLCBvcHRpb25zLmlkKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkIHx8IG9wdGlvbnMuaWQpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVJZCA9IHRoaXMub3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkKHRoaXMub3B0aW9ucy5pZCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgIT0gbnVsbCkgdGhpcy5vcHRpb25zLmluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcblxuICAgIGlmICgnUmVuZGVyZXInIGluIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5SZW5kZXJlciA9IG9wdGlvbnMuUmVuZGVyZXI7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuXG5cbiAgICBpZiAob3B0aW9ucy5wbHVnaW5zKSB0aGlzLnVzZS5hcHBseSh0aGlzLCBvcHRpb25zLnBsdWdpbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBTdHlsZSBTaGVldC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlU3R5bGVTaGVldCA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXQoc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgIGluZGV4ID0gX29wdGlvbnMuaW5kZXg7XG5cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSBzaGVldHMuaW5kZXggPT09IDAgPyAwIDogc2hlZXRzLmluZGV4ICsgMTtcbiAgICB9XG5cbiAgICB2YXIgc2hlZXQgPSBuZXcgU3R5bGVTaGVldChzdHlsZXMsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBqc3M6IHRoaXMsXG4gICAgICBnZW5lcmF0ZUlkOiBvcHRpb25zLmdlbmVyYXRlSWQgfHwgdGhpcy5nZW5lcmF0ZUlkLFxuICAgICAgaW5zZXJ0aW9uUG9pbnQ6IHRoaXMub3B0aW9ucy5pbnNlcnRpb25Qb2ludCxcbiAgICAgIFJlbmRlcmVyOiB0aGlzLm9wdGlvbnMuUmVuZGVyZXIsXG4gICAgICBpbmRleDogaW5kZXhcbiAgICB9KSk7XG4gICAgdGhpcy5wbHVnaW5zLm9uUHJvY2Vzc1NoZWV0KHNoZWV0KTtcbiAgICByZXR1cm4gc2hlZXQ7XG4gIH1cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgU3R5bGUgU2hlZXQgYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSByZWdpc3RyeS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVtb3ZlU3R5bGVTaGVldCA9IGZ1bmN0aW9uIHJlbW92ZVN0eWxlU2hlZXQoc2hlZXQpIHtcbiAgICBzaGVldC5kZXRhY2goKTtcbiAgICBzaGVldHMucmVtb3ZlKHNoZWV0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgcnVsZSB3aXRob3V0IGEgU3R5bGUgU2hlZXQuXG4gICAqIFtEZXByZWNhdGVkXSB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlUnVsZSA9IGZ1bmN0aW9uIGNyZWF0ZVJ1bGUkMShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChzdHlsZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdHlsZSA9IHt9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICAvLyBFbmFibGUgcnVsZSB3aXRob3V0IG5hbWUgZm9yIGlubGluZSBzdHlsZXMuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUnVsZSh1bmRlZmluZWQsIG5hbWUsIHN0eWxlKTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGpzczogdGhpcyxcbiAgICAgIFJlbmRlcmVyOiB0aGlzLm9wdGlvbnMuUmVuZGVyZXJcbiAgICB9KTtcblxuICAgIGlmICghcnVsZU9wdGlvbnMuZ2VuZXJhdGVJZCkgcnVsZU9wdGlvbnMuZ2VuZXJhdGVJZCA9IHRoaXMuZ2VuZXJhdGVJZDtcbiAgICBpZiAoIXJ1bGVPcHRpb25zLmNsYXNzZXMpIHJ1bGVPcHRpb25zLmNsYXNzZXMgPSB7fTtcbiAgICBpZiAoIXJ1bGVPcHRpb25zLmtleWZyYW1lcykgcnVsZU9wdGlvbnMua2V5ZnJhbWVzID0ge307XG5cbiAgICB2YXIgcnVsZSA9IGNyZWF0ZVJ1bGUobmFtZSwgc3R5bGUsIHJ1bGVPcHRpb25zKTtcblxuICAgIGlmIChydWxlKSB0aGlzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgcGx1Z2luLiBQYXNzZWQgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdpdGggYSBydWxlIGluc3RhbmNlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51c2UgPSBmdW5jdGlvbiB1c2UoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgX3RoaXMucGx1Z2lucy51c2UocGx1Z2luKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gSnNzO1xufSgpO1xuXG4vKipcbiAqIEV4dHJhY3RzIGEgc3R5bGVzIG9iamVjdCB3aXRoIG9ubHkgcHJvcHMgdGhhdCBjb250YWluIGZ1bmN0aW9uIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gZ2V0RHluYW1pY1N0eWxlcyhzdHlsZXMpIHtcbiAgdmFyIHRvID0gbnVsbDtcblxuICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKCF0bykgdG8gPSB7fTtcbiAgICAgIHRvW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFyIGV4dHJhY3RlZCA9IGdldER5bmFtaWNTdHlsZXModmFsdWUpO1xuXG4gICAgICBpZiAoZXh0cmFjdGVkKSB7XG4gICAgICAgIGlmICghdG8pIHRvID0ge307XG4gICAgICAgIHRvW2tleV0gPSBleHRyYWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG4vKipcbiAqIFNoZWV0c01hbmFnZXIgaXMgbGlrZSBhIFdlYWtNYXAgd2hpY2ggaXMgZGVzaWduZWQgdG8gY291bnQgU3R5bGVTaGVldFxuICogaW5zdGFuY2VzIGFuZCBhdHRhY2gvZGV0YWNoIGF1dG9tYXRpY2FsbHkuXG4gKi9cbnZhciBTaGVldHNNYW5hZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2hlZXRzTWFuYWdlcigpIHtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zaGVldHMgPSBuZXcgV2Vha01hcCgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNoZWV0c01hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5zaGVldHMuZ2V0KGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnNoZWV0O1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQoa2V5LCBzaGVldCkge1xuICAgIGlmICh0aGlzLnNoZWV0cy5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubGVuZ3RoKys7XG4gICAgdGhpcy5zaGVldHMuc2V0KGtleSwge1xuICAgICAgc2hlZXQ6IHNoZWV0LFxuICAgICAgcmVmczogMFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2UgPSBmdW5jdGlvbiBtYW5hZ2Uoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5zaGVldHMuZ2V0KGtleSk7XG5cbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGlmIChlbnRyeS5yZWZzID09PSAwKSB7XG4gICAgICAgIGVudHJ5LnNoZWV0LmF0dGFjaCgpO1xuICAgICAgfVxuXG4gICAgICBlbnRyeS5yZWZzKys7XG4gICAgICByZXR1cm4gZW50cnkuc2hlZXQ7XG4gICAgfVxuXG4gICAgd2FybmluZyhmYWxzZSwgXCJbSlNTXSBTaGVldHNNYW5hZ2VyOiBjYW4ndCBmaW5kIHNoZWV0IHRvIG1hbmFnZVwiKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by51bm1hbmFnZSA9IGZ1bmN0aW9uIHVubWFuYWdlKGtleSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuc2hlZXRzLmdldChrZXkpO1xuXG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBpZiAoZW50cnkucmVmcyA+IDApIHtcbiAgICAgICAgZW50cnkucmVmcy0tO1xuICAgICAgICBpZiAoZW50cnkucmVmcyA9PT0gMCkgZW50cnkuc2hlZXQuZGV0YWNoKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm5pbmcoZmFsc2UsIFwiU2hlZXRzTWFuYWdlcjogY2FuJ3QgZmluZCBzaGVldCB0byB1bm1hbmFnZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFNoZWV0c01hbmFnZXIsIFt7XG4gICAga2V5OiBcInNpemVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2hlZXRzTWFuYWdlcjtcbn0oKTtcblxuLyoqXG4gKiBBIGJldHRlciBhYnN0cmFjdGlvbiBvdmVyIENTUy5cbiAqXG4gKiBAY29weXJpZ2h0IE9sZWcgSXNvbmVuIChTbG9ib2Rza29pKSAvIElzb25lbiAyMDE0LXByZXNlbnRcbiAqIEB3ZWJzaXRlIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuLyoqXG4gKiBFeHBvcnQgYSBjb25zdGFudCBpbmRpY2F0aW5nIGlmIHRoaXMgYnJvd3NlciBoYXMgQ1NTVE9NIHN1cHBvcnQuXG4gKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdXBkYXRlcy8yMDE4LzAzL2Nzc29tXG4gKi9cbnZhciBoYXNDU1NUT01TdXBwb3J0ID0gdHlwZW9mIENTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgQ1NTICYmICdudW1iZXInIGluIENTUztcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBKc3MuXG4gKi9cblxudmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgSnNzKG9wdGlvbnMpO1xufTtcbi8qKlxuICogQSBnbG9iYWwgSnNzIGluc3RhbmNlLlxuICovXG5cbnZhciBpbmRleCA9IGNyZWF0ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbmV4cG9ydCB7IFJ1bGVMaXN0LCBTaGVldHNNYW5hZ2VyLCBTaGVldHNSZWdpc3RyeSwgY3JlYXRlLCBjcmVhdGVHZW5lcmF0ZUlkLCBjcmVhdGVSdWxlLCBnZXREeW5hbWljU3R5bGVzLCBoYXNDU1NUT01TdXBwb3J0LCBzaGVldHMsIHRvQ3NzVmFsdWUgfTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAodHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZycgJiYgQ29tcG9uZW50Lmxlbmd0aCA+IDAgPyBDb21wb25lbnQgOiAnVW5rbm93bicpO1xufSIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJ3RoZW1pbmcnO1xuZXhwb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWluZywgdXNlVGhlbWUsIHdpdGhUaGVtZSB9IGZyb20gJ3RoZW1pbmcnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBkZWZhdWx0SnNzJDEsIHsgU2hlZXRzTWFuYWdlciwgY3JlYXRlIGFzIGNyZWF0ZSQxLCBnZXREeW5hbWljU3R5bGVzLCBjcmVhdGVHZW5lcmF0ZUlkLCBTaGVldHNSZWdpc3RyeSB9IGZyb20gJ2pzcyc7XG5leHBvcnQgeyBTaGVldHNSZWdpc3RyeSwgY3JlYXRlR2VuZXJhdGVJZCB9IGZyb20gJ2pzcyc7XG5pbXBvcnQgcHJlc2V0IGZyb20gJ2pzcy1wcmVzZXQtZGVmYXVsdCc7XG5pbXBvcnQgaXNJbkJyb3dzZXIgZnJvbSAnaXMtaW4tYnJvd3Nlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsT2JqZWN0cyB9IGZyb20gJ3NoYWxsb3ctZXF1YWwnO1xuaW1wb3J0IGlzUHJvcFZhbGlkIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnO1xuaW1wb3J0IGRlZmF1bHRDc3MgZnJvbSAnY3NzLWpzcyc7XG5cbnZhciBnZXREaXNwbGF5TmFtZSA9IChmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59KTtcblxudmFyIG1lbW9pemUgPSBmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBsYXN0QXJncztcbiAgdmFyIGxhc3RSZXN1bHQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3RBcmdzKSAmJiBhcmdzLmxlbmd0aCA9PT0gbGFzdEFyZ3MubGVuZ3RoKSB7XG4gICAgICB2YXIgaXNTYW1lID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcmdzW2ldICE9PSBsYXN0QXJnc1tpXSkge1xuICAgICAgICAgIGlzU2FtZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1NhbWUpIHtcbiAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdEFyZ3MgPSBhcmdzO1xuICAgIGxhc3RSZXN1bHQgPSBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xufTtcblxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKGJhc2VDbGFzc2VzLCBhZGRpdGlvbmFsQ2xhc3Nlcykge1xuICB2YXIgY29tYmluZWRDbGFzc2VzID0gX2V4dGVuZHMoe30sIGJhc2VDbGFzc2VzKTtcblxuICBmb3IgKHZhciBuYW1lIGluIGFkZGl0aW9uYWxDbGFzc2VzKSB7XG4gICAgY29tYmluZWRDbGFzc2VzW25hbWVdID0gbmFtZSBpbiBjb21iaW5lZENsYXNzZXMgPyBjb21iaW5lZENsYXNzZXNbbmFtZV0gKyBcIiBcIiArIGFkZGl0aW9uYWxDbGFzc2VzW25hbWVdIDogYWRkaXRpb25hbENsYXNzZXNbbmFtZV07XG4gIH1cblxuICByZXR1cm4gY29tYmluZWRDbGFzc2VzO1xufVxuXG52YXIgSnNzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBjbGFzc05hbWVQcmVmaXg6ICcnLFxuICBkaXNhYmxlU3R5bGVzR2VuZXJhdGlvbjogZmFsc2Vcbn0pO1xuXG4vKipcbiAqIEdsb2JhbCBpbmRleCBjb3VudGVyIHRvIHByZXNlcnZlIHNvdXJjZSBvcmRlci5cbiAqIEFzIHdlIGNyZWF0ZSB0aGUgc3R5bGUgc2hlZXQgZHVyaW5nIGNvbXBvbmVudFdpbGxNb3VudCBsaWZlY3ljbGUsXG4gKiBjaGlsZHJlbiBhcmUgaGFuZGxlZCBhZnRlciB0aGUgcGFyZW50cywgc28gdGhlIG9yZGVyIG9mIHN0eWxlIGVsZW1lbnRzIHdvdWxkXG4gKiBiZSBwYXJlbnQtPmNoaWxkLiBJdCBpcyBhIHByb2JsZW0gdGhvdWdoIHdoZW4gYSBwYXJlbnQgcGFzc2VzIGEgY2xhc3NOYW1lXG4gKiB3aGljaCBuZWVkcyB0byBvdmVycmlkZSBhbnkgY2hpbGRzIHN0eWxlcy4gU3R5bGVTaGVldCBvZiB0aGUgY2hpbGQgaGFzIGEgaGlnaGVyXG4gKiBzcGVjaWZpY2l0eSwgYmVjYXVzZSBvZiB0aGUgc291cmNlIG9yZGVyLlxuICogU28gb3VyIHNvbHV0aW9uIGlzIHRvIHJlbmRlciBzaGVldHMgdGhlbSBpbiB0aGUgcmV2ZXJzZSBvcmRlciBjaGlsZC0+c2hlZXQsIHNvXG4gKiB0aGF0IHBhcmVudCBoYXMgYSBoaWdoZXIgc3BlY2lmaWNpdHkuXG4gKlxuICogV2Ugc3RhcnQgYXQgW051bWJlci5NSU5fU0FGRV9JTlRFR0VSXSB0byBhbHdheXMgaW5zZXJ0IHNoZWV0cyBmcm9tIHJlYWN0LWpzcyBmaXJzdCBiZWZvcmUgYW55XG4gKiBzaGVldCB3aGljaCBtaWdodCBiZSBpbnNlcnRlZCBtYW51YWxseSBieSB0aGUgdXNlci5cbiAqL1xudmFyIGluZGV4ID0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIgfHwgLTFlOTtcblxudmFyIGdldFNoZWV0SW5kZXggPSBmdW5jdGlvbiBnZXRTaGVldEluZGV4KCkge1xuICByZXR1cm4gaW5kZXgrKztcbn07XG5cbnZhciBkZWZhdWx0TWFuYWdlcnMgPSBuZXcgTWFwKCk7XG52YXIgZ2V0TWFuYWdlciA9IGZ1bmN0aW9uIGdldE1hbmFnZXIoY29udGV4dCwgbWFuYWdlcklkKSB7XG4gIC8vIElmIGBtYW5hZ2Vyc2AgbWFwIGlzIHByZXNlbnQgaW4gdGhlIGNvbnRleHQsIHdlIHVzZSBpdCBpbiBvcmRlciB0b1xuICAvLyBsZXQgSnNzUHJvdmlkZXIgcmVzZXQgdGhlbSB3aGVuIG5ldyByZXNwb25zZSBoYXMgdG8gcmVuZGVyIHNlcnZlci1zaWRlLlxuICBpZiAoY29udGV4dC5tYW5hZ2Vycykge1xuICAgIGlmICghY29udGV4dC5tYW5hZ2Vyc1ttYW5hZ2VySWRdKSB7XG4gICAgICBjb250ZXh0Lm1hbmFnZXJzW21hbmFnZXJJZF0gPSBuZXcgU2hlZXRzTWFuYWdlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0Lm1hbmFnZXJzW21hbmFnZXJJZF07XG4gIH1cblxuICB2YXIgbWFuYWdlciA9IGRlZmF1bHRNYW5hZ2Vycy5nZXQobWFuYWdlcklkKTtcblxuICBpZiAoIW1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyID0gbmV3IFNoZWV0c01hbmFnZXIoKTtcbiAgICBkZWZhdWx0TWFuYWdlcnMuc2V0KG1hbmFnZXJJZCwgbWFuYWdlcik7XG4gIH1cblxuICByZXR1cm4gbWFuYWdlcjtcbn07XG52YXIgbWFuYWdlU2hlZXQgPSBmdW5jdGlvbiBtYW5hZ2VTaGVldChvcHRpb25zKSB7XG4gIHZhciBzaGVldCA9IG9wdGlvbnMuc2hlZXQsXG4gICAgICBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0LFxuICAgICAgaW5kZXggPSBvcHRpb25zLmluZGV4LFxuICAgICAgdGhlbWUgPSBvcHRpb25zLnRoZW1lO1xuXG4gIGlmICghc2hlZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWFuYWdlciA9IGdldE1hbmFnZXIoY29udGV4dCwgaW5kZXgpO1xuICBtYW5hZ2VyLm1hbmFnZSh0aGVtZSk7XG5cbiAgaWYgKGNvbnRleHQucmVnaXN0cnkpIHtcbiAgICBjb250ZXh0LnJlZ2lzdHJ5LmFkZChzaGVldCk7XG4gIH1cbn07XG52YXIgdW5tYW5hZ2VTaGVldCA9IGZ1bmN0aW9uIHVubWFuYWdlU2hlZXQob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMuc2hlZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWFuYWdlciA9IGdldE1hbmFnZXIob3B0aW9ucy5jb250ZXh0LCBvcHRpb25zLmluZGV4KTtcbiAgbWFuYWdlci51bm1hbmFnZShvcHRpb25zLnRoZW1lKTtcbn07XG5cbnZhciBkZWZhdWx0SnNzID0gY3JlYXRlJDEocHJlc2V0KCkpO1xuXG52YXIgc2hlZXRzTWV0YSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0TWV0YSA9IGZ1bmN0aW9uIGdldE1ldGEoc2hlZXQpIHtcbiAgcmV0dXJuIHNoZWV0c01ldGEuZ2V0KHNoZWV0KTtcbn07XG52YXIgYWRkTWV0YSA9IGZ1bmN0aW9uIGFkZE1ldGEoc2hlZXQsIG1ldGEpIHtcbiAgc2hlZXRzTWV0YS5zZXQoc2hlZXQsIG1ldGEpO1xufTtcblxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBvcHRpb25zLnN0eWxlcztcblxuICBpZiAodHlwZW9mIHN0eWxlcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0eWxlcy5sZW5ndGggIT09IDAsIFwiW0pTU10gPFwiICsgKG9wdGlvbnMubmFtZSB8fCAnSG9vaycpICsgXCIgLz4ncyBzdHlsZXMgZnVuY3Rpb24gZG9lc24ndCByZWx5IG9uIHRoZSBcXFwidGhlbWVcXFwiIGFyZ3VtZW50LiBXZSByZWNvbW1lbmQgZGVjbGFyaW5nIHN0eWxlcyBhcyBhbiBvYmplY3QgaW5zdGVhZC5cIikgOiB2b2lkIDA7XG4gIHJldHVybiBzdHlsZXMob3B0aW9ucy50aGVtZSk7XG59O1xuXG5mdW5jdGlvbiBnZXRTaGVldE9wdGlvbnMob3B0aW9ucywgbGluaykge1xuICB2YXIgbWluaWZ5O1xuXG4gIGlmIChvcHRpb25zLmNvbnRleHQuaWQgJiYgb3B0aW9ucy5jb250ZXh0LmlkLm1pbmlmeSAhPSBudWxsKSB7XG4gICAgbWluaWZ5ID0gb3B0aW9ucy5jb250ZXh0LmlkLm1pbmlmeTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWVQcmVmaXggPSBvcHRpb25zLmNvbnRleHQuY2xhc3NOYW1lUHJlZml4IHx8ICcnO1xuXG4gIGlmIChvcHRpb25zLm5hbWUgJiYgIW1pbmlmeSkge1xuICAgIGNsYXNzTmFtZVByZWZpeCArPSBvcHRpb25zLm5hbWUucmVwbGFjZSgvXFxzL2csICctJykgKyBcIi1cIjtcbiAgfVxuXG4gIHZhciBtZXRhID0gJyc7XG4gIGlmIChvcHRpb25zLm5hbWUpIG1ldGEgPSBvcHRpb25zLm5hbWUgKyBcIiwgXCI7XG4gIG1ldGEgKz0gdHlwZW9mIG9wdGlvbnMuc3R5bGVzID09PSAnZnVuY3Rpb24nID8gJ1RoZW1lZCcgOiAnVW50aGVtZWQnO1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG9wdGlvbnMuc2hlZXRPcHRpb25zLCB7XG4gICAgaW5kZXg6IG9wdGlvbnMuaW5kZXgsXG4gICAgbWV0YTogbWV0YSxcbiAgICBjbGFzc05hbWVQcmVmaXg6IGNsYXNzTmFtZVByZWZpeCxcbiAgICBsaW5rOiBsaW5rLFxuICAgIGdlbmVyYXRlSWQ6IG9wdGlvbnMuc2hlZXRPcHRpb25zLmdlbmVyYXRlSWQgfHwgb3B0aW9ucy5jb250ZXh0LmdlbmVyYXRlSWRcbiAgfSk7XG59XG5cbnZhciBjcmVhdGVTdHlsZVNoZWV0ID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmNvbnRleHQuZGlzYWJsZVN0eWxlc0dlbmVyYXRpb24pIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFyIG1hbmFnZXIgPSBnZXRNYW5hZ2VyKG9wdGlvbnMuY29udGV4dCwgb3B0aW9ucy5pbmRleCk7XG4gIHZhciBleGlzdGluZ1NoZWV0ID0gbWFuYWdlci5nZXQob3B0aW9ucy50aGVtZSk7XG5cbiAgaWYgKGV4aXN0aW5nU2hlZXQpIHtcbiAgICByZXR1cm4gZXhpc3RpbmdTaGVldDtcbiAgfVxuXG4gIHZhciBqc3MgPSBvcHRpb25zLmNvbnRleHQuanNzIHx8IGRlZmF1bHRKc3M7XG4gIHZhciBzdHlsZXMgPSBnZXRTdHlsZXMob3B0aW9ucyk7XG4gIHZhciBkeW5hbWljU3R5bGVzID0gZ2V0RHluYW1pY1N0eWxlcyhzdHlsZXMpO1xuICB2YXIgc2hlZXQgPSBqc3MuY3JlYXRlU3R5bGVTaGVldChzdHlsZXMsIGdldFNoZWV0T3B0aW9ucyhvcHRpb25zLCBkeW5hbWljU3R5bGVzICE9PSBudWxsKSk7XG4gIGFkZE1ldGEoc2hlZXQsIHtcbiAgICBkeW5hbWljU3R5bGVzOiBkeW5hbWljU3R5bGVzLFxuICAgIHN0eWxlczogc3R5bGVzXG4gIH0pO1xuICBtYW5hZ2VyLmFkZChvcHRpb25zLnRoZW1lLCBzaGVldCk7XG4gIHJldHVybiBzaGVldDtcbn07XG52YXIgcmVtb3ZlRHluYW1pY1J1bGVzID0gZnVuY3Rpb24gcmVtb3ZlRHluYW1pY1J1bGVzKHNoZWV0LCBydWxlcykge1xuICAvLyBMb29wIG92ZXIgZWFjaCBkeW5hbWljIHJ1bGUgYW5kIHJlbW92ZSB0aGUgZHluYW1pYyBydWxlXG4gIC8vIFdlIGNhbid0IGp1c3QgcmVtb3ZlIHRoZSB3aG9sZSBzaGVldCBhcyB0aGlzIGhhcyBhbGwgb2YgdGhlIHJ1bGVzIGZvciBldmVyeSBjb21wb25lbnQgaW5zdGFuY2VcbiAgZm9yICh2YXIga2V5IGluIHJ1bGVzKSB7XG4gICAgc2hlZXQuZGVsZXRlUnVsZShydWxlc1trZXldKTtcbiAgfVxufTtcbnZhciB1cGRhdGVEeW5hbWljUnVsZXMgPSBmdW5jdGlvbiB1cGRhdGVEeW5hbWljUnVsZXMoZGF0YSwgc2hlZXQsIHJ1bGVzKSB7XG4gIC8vIExvb3Agb3ZlciBlYWNoIGR5bmFtaWMgcnVsZSBhbmQgdXBkYXRlIGl0XG4gIC8vIFdlIGNhbid0IGp1c3QgdXBkYXRlIHRoZSB3aG9sZSBzaGVldCBhcyB0aGlzIGhhcyBhbGwgb2YgdGhlIHJ1bGVzIGZvciBldmVyeSBjb21wb25lbnQgaW5zdGFuY2VcbiAgZm9yICh2YXIga2V5IGluIHJ1bGVzKSB7XG4gICAgc2hlZXQudXBkYXRlT25lKHJ1bGVzW2tleV0sIGRhdGEpO1xuICB9XG59O1xudmFyIGFkZER5bmFtaWNSdWxlcyA9IGZ1bmN0aW9uIGFkZER5bmFtaWNSdWxlcyhzaGVldCwgZGF0YSkge1xuICB2YXIgbWV0YSA9IGdldE1ldGEoc2hlZXQpO1xuXG4gIGlmICghbWV0YSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICB2YXIgcnVsZXMgPSB7fTsgLy8gTG9vcCBvdmVyIGVhY2ggZHluYW1pYyBydWxlIGFuZCBhZGQgaXQgdG8gdGhlIHN0eWxlc2hlZXRcblxuICBmb3IgKHZhciBrZXkgaW4gbWV0YS5keW5hbWljU3R5bGVzKSB7XG4gICAgdmFyIGluaXRpYWxSdWxlQ291bnQgPSBzaGVldC5ydWxlcy5pbmRleC5sZW5ndGg7XG4gICAgdmFyIG9yaWdpbmFsUnVsZSA9IHNoZWV0LmFkZFJ1bGUoa2V5LCBtZXRhLmR5bmFtaWNTdHlsZXNba2V5XSk7IC8vIExvb3AgdGhyb3VnaCBhbGwgY3JlYXRlZCBydWxlcywgZml4ZXMgdXBkYXRpbmcgZHluYW1pYyBydWxlc1xuXG4gICAgZm9yICh2YXIgaSA9IGluaXRpYWxSdWxlQ291bnQ7IGkgPCBzaGVldC5ydWxlcy5pbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJ1bGUgPSBzaGVldC5ydWxlcy5pbmRleFtpXTtcbiAgICAgIHNoZWV0LnVwZGF0ZU9uZShydWxlLCBkYXRhKTsgLy8gSWYgaXQncyB0aGUgb3JpZ2luYWwgcnVsZSwgd2UgbmVlZCB0byBhZGQgaXQgYnkgdGhlIGNvcnJlY3Qga2V5IHNvIHRoZSBob29rIGFuZCBob2NcbiAgICAgIC8vIGNhbiBjb3JyZWN0bHkgY29uY2F0IHRoZSBkeW5hbWljIGNsYXNzIHdpdGggdGhlIHN0YXRpYyBvbmVcblxuICAgICAgcnVsZXNbb3JpZ2luYWxSdWxlID09PSBydWxlID8ga2V5IDogcnVsZS5rZXldID0gcnVsZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnVsZXM7XG59O1xuXG52YXIgZ2V0U2hlZXRDbGFzc2VzID0gZnVuY3Rpb24gZ2V0U2hlZXRDbGFzc2VzKHNoZWV0LCBkeW5hbWljUnVsZXMpIHtcbiAgaWYgKCFkeW5hbWljUnVsZXMpIHtcbiAgICByZXR1cm4gc2hlZXQuY2xhc3NlcztcbiAgfVxuXG4gIHZhciBjbGFzc2VzID0ge307XG4gIHZhciBtZXRhID0gZ2V0TWV0YShzaGVldCk7XG5cbiAgaWYgKCFtZXRhKSB7XG4gICAgcmV0dXJuIHNoZWV0LmNsYXNzZXM7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gbWV0YS5zdHlsZXMpIHtcbiAgICBjbGFzc2VzW2tleV0gPSBzaGVldC5jbGFzc2VzW2tleV07XG5cbiAgICBpZiAoa2V5IGluIGR5bmFtaWNSdWxlcykge1xuICAgICAgY2xhc3Nlc1trZXldICs9IFwiIFwiICsgc2hlZXQuY2xhc3Nlc1tkeW5hbWljUnVsZXNba2V5XS5rZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzO1xufTtcblxudmFyIE5vUmVuZGVyZXIgPSBmdW5jdGlvbiBOb1JlbmRlcmVyKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5jaGlsZHJlbiB8fCBudWxsO1xufTtcblxudmFyIG5vVGhlbWUgPSB7fTtcbi8qKlxuICogSE9DIGNyZWF0b3IgZnVuY3Rpb24gdGhhdCB3cmFwcHMgdGhlIHVzZXIgY29tcG9uZW50LlxuICpcbiAqIGB3aXRoU3R5bGVzKHN0eWxlcywgW29wdGlvbnNdKShDb21wb25lbnQpYFxuICovXG5cbnZhciB3aXRoU3R5bGVzID0gZnVuY3Rpb24gd2l0aFN0eWxlcyhzdHlsZXMsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRpbmRleCA9IF9vcHRpb25zLmluZGV4LFxuICAgICAgaW5kZXggPSBfb3B0aW9ucyRpbmRleCA9PT0gdm9pZCAwID8gZ2V0U2hlZXRJbmRleCgpIDogX29wdGlvbnMkaW5kZXgsXG4gICAgICB0aGVtaW5nID0gX29wdGlvbnMudGhlbWluZyxcbiAgICAgIGluamVjdFRoZW1lID0gX29wdGlvbnMuaW5qZWN0VGhlbWUsXG4gICAgICBzaGVldE9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb3B0aW9ucywgW1wiaW5kZXhcIiwgXCJ0aGVtaW5nXCIsIFwiaW5qZWN0VGhlbWVcIl0pO1xuXG4gIHZhciBpc1RoZW1pbmdFbmFibGVkID0gdHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIFRoZW1lQ29uc3VtZXIgPSB0aGVtaW5nICYmIHRoZW1pbmcuY29udGV4dC5Db25zdW1lciB8fCBUaGVtZUNvbnRleHQuQ29uc3VtZXI7XG4gIHJldHVybiBmdW5jdGlvbiAoSW5uZXJDb21wb25lbnQpIHtcbiAgICBpZiAoSW5uZXJDb21wb25lbnQgPT09IHZvaWQgMCkge1xuICAgICAgSW5uZXJDb21wb25lbnQgPSBOb1JlbmRlcmVyO1xuICAgIH1cblxuICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKElubmVyQ29tcG9uZW50KTtcblxuICAgIHZhciBnZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKHByb3BzKSB7XG4gICAgICByZXR1cm4gaXNUaGVtaW5nRW5hYmxlZCA/IHByb3BzLnRoZW1lIDogbm9UaGVtZTtcbiAgICB9O1xuXG4gICAgdmFyIFdpdGhTdHlsZXMgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoV2l0aFN0eWxlcywgX0NvbXBvbmVudCk7XG5cbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIFdpdGhTdHlsZXMuY3JlYXRlU3RhdGUgPSBmdW5jdGlvbiBjcmVhdGVTdGF0ZShwcm9wcykge1xuICAgICAgICB2YXIgc2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KHtcbiAgICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgICB0aGVtZTogZ2V0VGhlbWUocHJvcHMpLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBuYW1lOiBkaXNwbGF5TmFtZSxcbiAgICAgICAgICBjb250ZXh0OiBwcm9wcy5qc3NDb250ZXh0LFxuICAgICAgICAgIHNoZWV0T3B0aW9uczogc2hlZXRPcHRpb25zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc2hlZXQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3Nlczoge30sXG4gICAgICAgICAgICBkeW5hbWljUnVsZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNoZWV0OiB1bmRlZmluZWRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGR5bmFtaWNSdWxlcyA9IGFkZER5bmFtaWNSdWxlcyhzaGVldCwgcHJvcHMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgICAgICBkeW5hbWljUnVsZXM6IGR5bmFtaWNSdWxlcyxcbiAgICAgICAgICBjbGFzc2VzOiBnZXRTaGVldENsYXNzZXMoc2hlZXQsIGR5bmFtaWNSdWxlcylcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIFdpdGhTdHlsZXMubWFuYWdlID0gZnVuY3Rpb24gbWFuYWdlKHByb3BzLCBzdGF0ZSkge1xuICAgICAgICB2YXIgc2hlZXQgPSBzdGF0ZS5zaGVldDtcblxuICAgICAgICBpZiAoc2hlZXQpIHtcbiAgICAgICAgICBtYW5hZ2VTaGVldCh7XG4gICAgICAgICAgICBzaGVldDogc2hlZXQsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBjb250ZXh0OiBwcm9wcy5qc3NDb250ZXh0LFxuICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKHByb3BzKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBXaXRoU3R5bGVzLnVubWFuYWdlID0gZnVuY3Rpb24gdW5tYW5hZ2UocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIHZhciBzaGVldCA9IHN0YXRlLnNoZWV0LFxuICAgICAgICAgICAgZHluYW1pY1J1bGVzID0gc3RhdGUuZHluYW1pY1J1bGVzO1xuXG4gICAgICAgIGlmIChzaGVldCkge1xuICAgICAgICAgIHVubWFuYWdlU2hlZXQoe1xuICAgICAgICAgICAgY29udGV4dDogcHJvcHMuanNzQ29udGV4dCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZShwcm9wcylcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChkeW5hbWljUnVsZXMpIHtcbiAgICAgICAgICAgIHJlbW92ZUR5bmFtaWNSdWxlcyhzaGVldCwgZHluYW1pY1J1bGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhTdHlsZXMocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5tZXJnZUNsYXNzZXNQcm9wID0gbWVtb2l6ZShmdW5jdGlvbiAoc2hlZXRDbGFzc2VzLCBjbGFzc2VzUHJvcCkge1xuICAgICAgICAgIHJldHVybiBjbGFzc2VzUHJvcCA/IG1lcmdlQ2xhc3NlcyhzaGVldENsYXNzZXMsIGNsYXNzZXNQcm9wKSA6IHNoZWV0Q2xhc3NlcztcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLnN0YXRlID0gV2l0aFN0eWxlcy5jcmVhdGVTdGF0ZShwcm9wcyk7XG4gICAgICAgIHZhciByZWdpc3RyeSA9IHByb3BzLmpzc0NvbnRleHQucmVnaXN0cnk7XG4gICAgICAgIHZhciBzaGVldCA9IF90aGlzLnN0YXRlLnNoZWV0O1xuXG4gICAgICAgIGlmIChzaGVldCAmJiByZWdpc3RyeSkge1xuICAgICAgICAgIHJlZ2lzdHJ5LmFkZChzaGVldCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBXaXRoU3R5bGVzLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKHByb3BzICYmIHN0YXRlKSB7XG4gICAgICAgICAgV2l0aFN0eWxlcy5tYW5hZ2UocHJvcHMsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAoaXNUaGVtaW5nRW5hYmxlZCAmJiB0aGlzLnByb3BzLnRoZW1lICE9PSBwcmV2UHJvcHMudGhlbWUpIHtcbiAgICAgICAgICB2YXIgbmV3U3RhdGUgPSBXaXRoU3R5bGVzLmNyZWF0ZVN0YXRlKHRoaXMucHJvcHMpO1xuICAgICAgICAgIFdpdGhTdHlsZXMubWFuYWdlKHRoaXMucHJvcHMsIG5ld1N0YXRlKTtcbiAgICAgICAgICBXaXRoU3R5bGVzLnVubWFuYWdlKHByZXZQcm9wcywgcHJldlN0YXRlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG5cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNoZWV0ICYmIHRoaXMuc3RhdGUuZHluYW1pY1J1bGVzKSB7XG4gICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHJ1bGVzIHdoZW4gd2UgZG9uJ3QgZ2VuZXJhdGUgYSBuZXcgc2hlZXRcbiAgICAgICAgICB1cGRhdGVEeW5hbWljUnVsZXModGhpcy5wcm9wcywgdGhpcy5zdGF0ZS5zaGVldCwgdGhpcy5zdGF0ZS5keW5hbWljUnVsZXMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgV2l0aFN0eWxlcy51bm1hbmFnZSh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICAgICAganNzQ29udGV4dCA9IF90aGlzJHByb3BzLmpzc0NvbnRleHQsXG4gICAgICAgICAgICB0aGVtZSA9IF90aGlzJHByb3BzLnRoZW1lLFxuICAgICAgICAgICAgY2xhc3NlcyA9IF90aGlzJHByb3BzLmNsYXNzZXMsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImlubmVyUmVmXCIsIFwianNzQ29udGV4dFwiLCBcInRoZW1lXCIsIFwiY2xhc3Nlc1wiXSk7XG5cbiAgICAgICAgdmFyIHNoZWV0Q2xhc3NlcyA9IHRoaXMuc3RhdGUuY2xhc3NlcztcblxuICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICAgIGNsYXNzZXM6IHRoaXMubWVyZ2VDbGFzc2VzUHJvcChzaGVldENsYXNzZXMsIGNsYXNzZXMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpbm5lclJlZikgcHJvcHMucmVmID0gaW5uZXJSZWY7XG4gICAgICAgIGlmIChpbmplY3RUaGVtZSkgcHJvcHMudGhlbWUgPSB0aGVtZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5uZXJDb21wb25lbnQsIHByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoU3R5bGVzO1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIFdpdGhTdHlsZXMuZGlzcGxheU5hbWUgPSBcIldpdGhTdHlsZXMoXCIgKyBkaXNwbGF5TmFtZSArIFwiKVwiO1xuICAgIFdpdGhTdHlsZXMuZGVmYXVsdFByb3BzID0gX2V4dGVuZHMoe30sIElubmVyQ29tcG9uZW50LmRlZmF1bHRQcm9wcyk7XG4gICAgdmFyIEpzc0NvbnRleHRTdWJzY3JpYmVyID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSnNzQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGlzVGhlbWluZ0VuYWJsZWQgfHwgaW5qZWN0VGhlbWUpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUaGVtZUNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdpdGhTdHlsZXMsIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgaW5uZXJSZWY6IHJlZixcbiAgICAgICAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICAgICAgICB9LCBwcm9wcywge1xuICAgICAgICAgICAgICBqc3NDb250ZXh0OiBjb250ZXh0XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXaXRoU3R5bGVzLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgaW5uZXJSZWY6IHJlZlxuICAgICAgICB9LCBwcm9wcywge1xuICAgICAgICAgIGpzc0NvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgdGhlbWU6IG5vVGhlbWVcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgSnNzQ29udGV4dFN1YnNjcmliZXIuZGlzcGxheU5hbWUgPSBcIkpzc0NvbnRleHRTdWJzY3JpYmVyKFwiICsgZGlzcGxheU5hbWUgKyBcIilcIjsgLy8gJEZsb3dGaXhNZSAtIFJlYWN0J3MgdHlwZXMgc2hvdWxkIGFsbG93IGN1c3RvbSBzdGF0aWMgcHJvcGVydGllcyBvbiBjb21wb25lbnQuXG5cbiAgICBKc3NDb250ZXh0U3Vic2NyaWJlci5Jbm5lckNvbXBvbmVudCA9IElubmVyQ29tcG9uZW50O1xuICAgIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhKc3NDb250ZXh0U3Vic2NyaWJlciwgSW5uZXJDb21wb25lbnQpO1xuICB9O1xufTtcblxudmFyIHVzZUVmZmVjdE9yTGF5b3V0RWZmZWN0ID0gaXNJbkJyb3dzZXIgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG52YXIgbm9UaGVtZSQxID0ge307XG5cbnZhciBjcmVhdGVVc2VTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVVc2VTdHlsZXMoc3R5bGVzLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkaW5kZXggPSBfb3B0aW9ucy5pbmRleCxcbiAgICAgIGluZGV4ID0gX29wdGlvbnMkaW5kZXggPT09IHZvaWQgMCA/IGdldFNoZWV0SW5kZXgoKSA6IF9vcHRpb25zJGluZGV4LFxuICAgICAgdGhlbWluZyA9IF9vcHRpb25zLnRoZW1pbmcsXG4gICAgICBuYW1lID0gX29wdGlvbnMubmFtZSxcbiAgICAgIHNoZWV0T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vcHRpb25zLCBbXCJpbmRleFwiLCBcInRoZW1pbmdcIiwgXCJuYW1lXCJdKTtcblxuICB2YXIgVGhlbWVDb250ZXh0JDEgPSB0aGVtaW5nICYmIHRoZW1pbmcuY29udGV4dCB8fCBUaGVtZUNvbnRleHQ7XG4gIHZhciB1c2VUaGVtZSA9IHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicgPyAvLyAkRmxvd0ZpeE1lXG4gIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQkMSkgfHwgbm9UaGVtZSQxO1xuICB9IDogLy8gJEZsb3dGaXhNZVxuICBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5vVGhlbWUkMTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVN0eWxlcyhkYXRhKSB7XG4gICAgdmFyIGlzRmlyc3RNb3VudCA9IFJlYWN0LnVzZVJlZih0cnVlKTtcbiAgICB2YXIgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoSnNzQ29udGV4dCk7XG4gICAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5ld1NoZWV0ID0gY3JlYXRlU3R5bGVTaGVldCh7XG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgc2hlZXRPcHRpb25zOiBzaGVldE9wdGlvbnNcbiAgICAgIH0pO1xuICAgICAgdmFyIG5ld0R5bmFtaWNSdWxlcyA9IG5ld1NoZWV0ID8gYWRkRHluYW1pY1J1bGVzKG5ld1NoZWV0LCBkYXRhKSA6IG51bGw7XG5cbiAgICAgIGlmIChuZXdTaGVldCkge1xuICAgICAgICBtYW5hZ2VTaGVldCh7XG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgc2hlZXQ6IG5ld1NoZWV0LFxuICAgICAgICAgIHRoZW1lOiB0aGVtZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtuZXdTaGVldCwgbmV3RHluYW1pY1J1bGVzXTtcbiAgICB9LCBbY29udGV4dCwgdGhlbWVdKSxcbiAgICAgICAgc2hlZXQgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgICAgZHluYW1pY1J1bGVzID0gX1JlYWN0JHVzZU1lbW9bMV07XG5cbiAgICB1c2VFZmZlY3RPckxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gdXBkYXRlIHRoZSBydWxlcyBvbiBhIHN1YnNlcXVlbnQgdXBkYXRlIGFuZCBub3QgaW4gdGhlIGZpcnN0IG1vdW50XG4gICAgICBpZiAoc2hlZXQgJiYgZHluYW1pY1J1bGVzICYmICFpc0ZpcnN0TW91bnQuY3VycmVudCkge1xuICAgICAgICB1cGRhdGVEeW5hbWljUnVsZXMoZGF0YSwgc2hlZXQsIGR5bmFtaWNSdWxlcyk7XG4gICAgICB9XG4gICAgfSwgW2RhdGFdKTtcbiAgICB1c2VFZmZlY3RPckxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKC8vIGNsZWFudXAgb25seVxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHNoZWV0KSB7XG4gICAgICAgICAgICB1bm1hbmFnZVNoZWV0KHtcbiAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICBzaGVldDogc2hlZXQsXG4gICAgICAgICAgICAgIHRoZW1lOiB0aGVtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNoZWV0ICYmIGR5bmFtaWNSdWxlcykge1xuICAgICAgICAgICAgcmVtb3ZlRHluYW1pY1J1bGVzKHNoZWV0LCBkeW5hbWljUnVsZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LCBbc2hlZXRdKTtcbiAgICB2YXIgY2xhc3NlcyA9IHNoZWV0ICYmIGR5bmFtaWNSdWxlcyA/IGdldFNoZWV0Q2xhc3NlcyhzaGVldCwgZHluYW1pY1J1bGVzKSA6IHt9OyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKGNsYXNzZXMpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHRoZW1lID09PSBub1RoZW1lJDEgPyAnTm8gdGhlbWUnIDogdGhlbWUpO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpc0ZpcnN0TW91bnQuY3VycmVudCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9O1xufTtcblxudmFyIGluaXRpYWxDb250ZXh0ID0ge307XG5cbnZhciBKc3NQcm92aWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShKc3NQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSnNzUHJvdmlkZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMubWFuYWdlcnMgPSB7fTtcblxuICAgIF90aGlzLmNyZWF0ZUNvbnRleHQgPSBmdW5jdGlvbiAocGFyZW50Q29udGV4dCwgcHJldkNvbnRleHQpIHtcbiAgICAgIGlmIChwcmV2Q29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHByZXZDb250ZXh0ID0gaW5pdGlhbENvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHJlZ2lzdHJ5ID0gX3RoaXMkcHJvcHMucmVnaXN0cnksXG4gICAgICAgICAgY2xhc3NOYW1lUHJlZml4ID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lUHJlZml4LFxuICAgICAgICAgIGpzcyA9IF90aGlzJHByb3BzLmpzcyxcbiAgICAgICAgICBnZW5lcmF0ZUlkID0gX3RoaXMkcHJvcHMuZ2VuZXJhdGVJZCxcbiAgICAgICAgICBkaXNhYmxlU3R5bGVzR2VuZXJhdGlvbiA9IF90aGlzJHByb3BzLmRpc2FibGVTdHlsZXNHZW5lcmF0aW9uLFxuICAgICAgICAgIG1lZGlhID0gX3RoaXMkcHJvcHMubWVkaWEsXG4gICAgICAgICAgaWQgPSBfdGhpcyRwcm9wcy5pZDtcblxuICAgICAgdmFyIGNvbnRleHQgPSBfZXh0ZW5kcyh7fSwgcGFyZW50Q29udGV4dCk7XG5cbiAgICAgIGlmIChyZWdpc3RyeSkge1xuICAgICAgICBjb250ZXh0LnJlZ2lzdHJ5ID0gcmVnaXN0cnk7IC8vIFRoaXMgd2F5IHdlIGlkZW50aWZ5IGEgbmV3IHJlcXVlc3Qgb24gdGhlIHNlcnZlciwgYmVjYXVzZSB1c2VyIHdpbGwgY3JlYXRlXG4gICAgICAgIC8vIGEgbmV3IFJlZ2lzdHJ5IGluc3RhbmNlIGZvciBlYWNoLlxuXG4gICAgICAgIGlmIChyZWdpc3RyeSAhPT0gX3RoaXMucmVnaXN0cnkpIHtcbiAgICAgICAgICAvLyBXZSByZXNldCBtYW5hZ2VycyBiZWNhdXNlIHdlIGhhdmUgdG8gcmVnZW5lcmF0ZSBhbGwgc2hlZXRzIGZvciB0aGUgbmV3IHJlcXVlc3QuXG4gICAgICAgICAgX3RoaXMubWFuYWdlcnMgPSB7fTtcbiAgICAgICAgICBfdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWFuYWdlcnMgPSBfdGhpcy5tYW5hZ2VycztcblxuICAgICAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5pZCA9IGlkO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2VuZXJhdGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQuZ2VuZXJhdGVJZCA9IGdlbmVyYXRlSWQ7XG4gICAgICB9IGVsc2UgaWYgKCFjb250ZXh0LmdlbmVyYXRlSWQgfHwgIXByZXZDb250ZXh0IHx8IGNvbnRleHQuaWQgIT09IHByZXZDb250ZXh0LmlkKSB7XG4gICAgICAgIGNvbnRleHQuZ2VuZXJhdGVJZCA9IGNyZWF0ZUdlbmVyYXRlSWQoY29udGV4dC5pZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWVQcmVmaXgpIHtcbiAgICAgICAgY29udGV4dC5jbGFzc05hbWVQcmVmaXggKz0gY2xhc3NOYW1lUHJlZml4O1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0Lm1lZGlhID0gbWVkaWE7XG4gICAgICB9XG5cbiAgICAgIGlmIChqc3MpIHtcbiAgICAgICAgY29udGV4dC5qc3MgPSBqc3M7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXNhYmxlU3R5bGVzR2VuZXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQuZGlzYWJsZVN0eWxlc0dlbmVyYXRpb24gPSBkaXNhYmxlU3R5bGVzR2VuZXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZDb250ZXh0ICYmIHNoYWxsb3dFcXVhbE9iamVjdHMocHJldkNvbnRleHQsIGNvbnRleHQpKSB7XG4gICAgICAgIHJldHVybiBwcmV2Q29udGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfTtcblxuICAgIF90aGlzLnByZXZDb250ZXh0ID0gdm9pZCAwO1xuICAgIF90aGlzLmdlbmVyYXRlSWQgPSB2b2lkIDA7XG4gICAgX3RoaXMucmVnaXN0cnkgPSB2b2lkIDA7XG5cbiAgICBfdGhpcy5yZW5kZXJQcm92aWRlciA9IGZ1bmN0aW9uIChwYXJlbnRDb250ZXh0KSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBfdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgdmFyIGNvbnRleHQgPSBfdGhpcy5jcmVhdGVDb250ZXh0KHBhcmVudENvbnRleHQsIF90aGlzLnByZXZDb250ZXh0KTtcblxuICAgICAgX3RoaXMucHJldkNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSnNzQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogY29udGV4dFxuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSnNzUHJvdmlkZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSnNzQ29udGV4dC5Db25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJQcm92aWRlcik7XG4gIH07XG5cbiAgcmV0dXJuIEpzc1Byb3ZpZGVyO1xufShDb21wb25lbnQpO1xuXG5Kc3NQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIHJlZ2lzdHJ5OiBQcm9wVHlwZXMuaW5zdGFuY2VPZihTaGVldHNSZWdpc3RyeSksXG4gIGpzczogUHJvcFR5cGVzLmluc3RhbmNlT2YoZGVmYXVsdEpzcyQxLmNvbnN0cnVjdG9yKSxcbiAgZ2VuZXJhdGVJZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZVByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZVN0eWxlc0dlbmVyYXRpb246IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgbWVkaWE6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1pbmlmeTogUHJvcFR5cGVzLmJvb2xcbiAgfSlcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMsIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wcyAqL1xuXG52YXIgcGFyc2VTdHlsZXMgPSBmdW5jdGlvbiBwYXJzZVN0eWxlcyhhcmdzKSB7XG4gIHZhciBkeW5hbWljU3R5bGVzID0gW107XG4gIHZhciBzdGF0aWNTdHlsZTtcbiAgdmFyIGxhYmVscyA9IFtdOyAvLyBOb3QgdXNpbmcgLi4ucmVzdCB0byBvcHRpbWl6ZSBwZXJmLlxuXG4gIGZvciAodmFyIGtleSBpbiBhcmdzKSB7XG4gICAgdmFyIHN0eWxlID0gYXJnc1trZXldO1xuICAgIGlmICghc3R5bGUpIGNvbnRpbnVlO1xuXG4gICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZHluYW1pY1N0eWxlcy5wdXNoKHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFzdGF0aWNTdHlsZSkgc3RhdGljU3R5bGUgPSB7fTtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGljU3R5bGUsIHN0eWxlKTtcblxuICAgICAgaWYgKHN0YXRpY1N0eWxlLmxhYmVsKSB7XG4gICAgICAgIGlmIChsYWJlbHMuaW5kZXhPZihzdGF0aWNTdHlsZS5sYWJlbCkgPT09IC0xKSBsYWJlbHMucHVzaChzdGF0aWNTdHlsZS5sYWJlbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHt9O1xuICB2YXIgbGFiZWwgPSBsYWJlbHMubGVuZ3RoID09PSAwID8gJ3NjJyA6IGxhYmVscy5qb2luKCctJyk7XG5cbiAgaWYgKHN0YXRpY1N0eWxlKSB7XG4gICAgLy8gTGFiZWwgc2hvdWxkIG5vdCBsZWFrIHRvIHRoZSBjb3JlLlxuICAgIGlmICgnbGFiZWwnIGluIHN0YXRpY1N0eWxlKSBkZWxldGUgc3RhdGljU3R5bGUubGFiZWw7XG4gICAgc3R5bGVzW2xhYmVsXSA9IHN0YXRpY1N0eWxlO1xuICB9IC8vIFdoZW4gdGhlcmUgaXMgb25seSBvbmUgZnVuY3Rpb24gcnVsZSwgd2UgZG9uJ3QgbmVlZCB0byB3cmFwIGl0LlxuXG5cbiAgaWYgKGR5bmFtaWNTdHlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgc3R5bGVzLnNjZCA9IGR5bmFtaWNTdHlsZXNbMF07XG4gIH0gLy8gV2UgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIHJ1bGUgd2hpY2ggd2lsbCBjYWxsIGFsbCBvdGhlciBmdW5jdGlvbiBydWxlc1xuICAvLyBhbmQgbWVyZ2UgdGhlIHN0eWxlcyB0aGV5IHJldHVybi5cblxuXG4gIGlmIChkeW5hbWljU3R5bGVzLmxlbmd0aCA+IDEpIHtcbiAgICBzdHlsZXMuc2NkID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICB2YXIgbWVyZ2VkID0ge307XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHluYW1pY1N0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZHluYW1pY1N0eWxlID0gZHluYW1pY1N0eWxlc1tpXShwcm9wcyk7XG4gICAgICAgIGlmIChkeW5hbWljU3R5bGUpIE9iamVjdC5hc3NpZ24obWVyZ2VkLCBkeW5hbWljU3R5bGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIGxhYmVsOiBsYWJlbFxuICB9O1xufTtcblxudmFyIHNob3VsZEZvcndhcmRQcm9wU3ltYm9sID0gU3ltYm9sKCdyZWFjdC1qc3Mtc3R5bGVkJyk7XG5cbnZhciBnZXRTaG91bGRGb3J3YXJkUHJvcCA9IGZ1bmN0aW9uIGdldFNob3VsZEZvcndhcmRQcm9wKHRhZ09yQ29tcG9uZW50LCBvcHRpb25zKSB7XG4gIHZhciBzaG91bGRGb3J3YXJkUHJvcCA9IG9wdGlvbnMuc2hvdWxkRm9yd2FyZFByb3A7IC8vICRGbG93SWdub3JlIHRoYXQgcHJvcCBzaG91bGRuJ3QgYmUgdGhlcmUuXG5cbiAgdmFyIGNoaWxkU2hvdWxkRm9yd2FyZFByb3AgPSB0YWdPckNvbXBvbmVudFtzaG91bGRGb3J3YXJkUHJvcFN5bWJvbF07XG4gIHZhciBmaW5hbFNob3VsZEZvcndhcmRQcm9wID0gc2hvdWxkRm9yd2FyZFByb3AgfHwgY2hpbGRTaG91bGRGb3J3YXJkUHJvcDtcblxuICBpZiAoc2hvdWxkRm9yd2FyZFByb3AgJiYgY2hpbGRTaG91bGRGb3J3YXJkUHJvcCkge1xuICAgIGZpbmFsU2hvdWxkRm9yd2FyZFByb3AgPSBmdW5jdGlvbiBmaW5hbFNob3VsZEZvcndhcmRQcm9wKHByb3ApIHtcbiAgICAgIHJldHVybiBjaGlsZFNob3VsZEZvcndhcmRQcm9wKHByb3ApICYmIHNob3VsZEZvcndhcmRQcm9wKHByb3ApO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZmluYWxTaG91bGRGb3J3YXJkUHJvcDtcbn07XG5cbnZhciBnZXRDaGlsZFByb3BzID0gZnVuY3Rpb24gZ2V0Q2hpbGRQcm9wcyhwcm9wcywgc2hvdWxkRm9yd2FyZFByb3AsIGlzVGFnKSB7XG4gIHZhciBjaGlsZFByb3BzID0ge307XG5cbiAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgIGlmIChzaG91bGRGb3J3YXJkUHJvcCkge1xuICAgICAgaWYgKHNob3VsZEZvcndhcmRQcm9wKHByb3ApID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkUHJvcHNbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgIH1cblxuICAgICAgY29udGludWU7XG4gICAgfSAvLyBXZSBkb24ndCB3YW50IHRvIHBhc3Mgbm9uLWRvbSBwcm9wcyB0byB0aGUgRE9NLlxuXG5cbiAgICBpZiAoaXNUYWcpIHtcbiAgICAgIGlmIChpc1Byb3BWYWxpZChwcm9wKSkge1xuICAgICAgICBjaGlsZFByb3BzW3Byb3BdID0gcHJvcHNbcHJvcF07XG4gICAgICB9XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNoaWxkUHJvcHNbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZFByb3BzO1xufTtcblxudmFyIGNvbmZpZ3VyZVN0eWxlZCA9IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0eWxlZCh0YWdPckNvbXBvbmVudCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHRoZW1pbmcgPSBfb3B0aW9ucy50aGVtaW5nO1xuICB2YXIgaXNUYWcgPSB0eXBlb2YgdGFnT3JDb21wb25lbnQgPT09ICdzdHJpbmcnO1xuICB2YXIgVGhlbWVDb250ZXh0JDEgPSB0aGVtaW5nID8gdGhlbWluZy5jb250ZXh0IDogVGhlbWVDb250ZXh0O1xuICB2YXIgc2hvdWxkRm9yd2FyZFByb3AgPSBnZXRTaG91bGRGb3J3YXJkUHJvcCh0YWdPckNvbXBvbmVudCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVTdHlsZWRDb21wb25lbnQoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHZhciBfcGFyc2VTdHlsZXMgPSBwYXJzZVN0eWxlcyhhcmd1bWVudHMpLFxuICAgICAgICBzdHlsZXMgPSBfcGFyc2VTdHlsZXMuc3R5bGVzLFxuICAgICAgICBsYWJlbCA9IF9wYXJzZVN0eWxlcy5sYWJlbDtcblxuICAgIHZhciB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoc3R5bGVzLCBvcHRpb25zKTtcblxuICAgIHZhciBTdHlsZWQgPSBmdW5jdGlvbiBTdHlsZWQocHJvcHMpIHtcbiAgICAgIHZhciBhcyA9IHByb3BzLmFzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTsgLy8gJEZsb3dGaXhNZSB0aGVtaW5nIFRoZW1lQ29udGV4dCB0eXBlcyBuZWVkIHRvIGJlIGZpeGVkLlxuXG4gICAgICB2YXIgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCQxKTtcbiAgICAgIHZhciBwcm9wc1dpdGhUaGVtZSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgIH0sIHByb3BzKTtcbiAgICAgIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKHByb3BzV2l0aFRoZW1lKTtcbiAgICAgIHZhciBjaGlsZFByb3BzID0gZ2V0Q2hpbGRQcm9wcyhwcm9wcywgc2hvdWxkRm9yd2FyZFByb3AsIGlzVGFnKTsgLy8gJEZsb3dJZ25vcmUgd2UgZG9uJ3QgY2FyZSBsYWJlbCBtaWdodCBub3QgZXhpc3QgaW4gY2xhc3Nlcy5cblxuICAgICAgdmFyIGNsYXNzTmFtZXMgPSAoKGNsYXNzZXNbbGFiZWxdIHx8IGNsYXNzZXMuc2MgfHwgJycpICsgXCIgXCIgKyAoY2xhc3Nlcy5zY2QgfHwgJycpKS50cmltKCk7XG4gICAgICBjaGlsZFByb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSArIFwiIFwiICsgY2xhc3NOYW1lcyA6IGNsYXNzTmFtZXM7XG5cbiAgICAgIGlmICghaXNUYWcgJiYgc2hvdWxkRm9yd2FyZFByb3ApIHtcbiAgICAgICAgLy8gJEZsb3dJZ25vcmUgd2UgYXJlIG5vdCBzdXBwb3NlZCB0byBhdHRhY2ggcmFuZG9tIHByb3BlcnRpZXMgdG8gY29tcG9uZW50IGZ1bmN0aW9ucy5cbiAgICAgICAgdGFnT3JDb21wb25lbnRbc2hvdWxkRm9yd2FyZFByb3BTeW1ib2xdID0gc2hvdWxkRm9yd2FyZFByb3A7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1RhZyAmJiBhcykge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChhcywgY2hpbGRQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ09yQ29tcG9uZW50LCBjaGlsZFByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFN0eWxlZDtcbiAgfTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcywgcHJlZmVyLXNwcmVhZCAqL1xudmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShjc3MpIHtcbiAgaWYgKGNzcyA9PT0gdm9pZCAwKSB7XG4gICAgY3NzID0gZGVmYXVsdENzcztcbiAgfVxuXG4gIHJldHVybiAoLy8gJEZsb3dJZ25vcmUgd2UgZG9uJ3QgY2FyZSBhYm91dCB0aGUgdHlwZXMgaGVyZSwgc2luY2UgdGhpcyBpcyBnb2luZyB0byBiZSBjYWxsZWQgYnkgdGhlIGJ1aWxkIHRvb2wuXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcykge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5jc3MpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNzcyhwcm9wcy5jc3MpO1xuICAgICAgICB2YXIgbmV3UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyk7XG4gICAgICAgIG5ld1Byb3BzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSArIFwiIFwiICsgY2xhc3NOYW1lIDogY2xhc3NOYW1lO1xuICAgICAgICBkZWxldGUgbmV3UHJvcHMuY3NzO1xuICAgICAgICBhcmdzWzFdID0gbmV3UHJvcHM7XG4gICAgICB9IC8vICRGbG93SWdub3JlXG5cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9XG4gICk7XG59O1xudmFyIGpzeCA9IGNyZWF0ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzO1xuZXhwb3J0IHsgSnNzQ29udGV4dCwgSnNzUHJvdmlkZXIsIGNyZWF0ZSBhcyBjcmVhdGVKc3gsIGNyZWF0ZVVzZVN0eWxlcywgZGVmYXVsdEpzcyBhcyBqc3MsIGpzeCwgY29uZmlndXJlU3R5bGVkIGFzIHN0eWxlZCwgd2l0aFN0eWxlcyB9O1xuIiwiZnVuY3Rpb24gc2hhbGxvd0VxdWFsT2JqZWN0cyhvYmpBLCBvYmpCKSB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIW9iakEgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMob2JqQik7XG4gIHZhciBsZW4gPSBhS2V5cy5sZW5ndGg7XG5cbiAgaWYgKGJLZXlzLmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBrZXkgPSBhS2V5c1tpXTtcblxuICAgIGlmIChvYmpBW2tleV0gIT09IG9iakJba2V5XSB8fCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsQXJyYXlzKGFyckEsIGFyckIpIHtcbiAgaWYgKGFyckEgPT09IGFyckIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghYXJyQSB8fCAhYXJyQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBsZW4gPSBhcnJBLmxlbmd0aDtcblxuICBpZiAoYXJyQi5sZW5ndGggIT09IGxlbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyQVtpXSAhPT0gYXJyQltpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgeyBzaGFsbG93RXF1YWxBcnJheXMsIHNoYWxsb3dFcXVhbE9iamVjdHMgfTtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBwb255ZmlsbCBmcm9tICcuL3BvbnlmaWxsLmpzJztcblxudmFyIHJvb3Q7XG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9IHBvbnlmaWxsKHJvb3QpO1xuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKFN5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRTeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaG9pc3QgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IGdldERpc3BsYXlOYW1lIGZyb20gJ3JlYWN0LWRpc3BsYXktbmFtZSc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KG9iaik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lUHJvdmlkZXIoY29udGV4dCkge1xuICB2YXIgVGhlbWVQcm92aWRlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShUaGVtZVByb3ZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiY2FjaGVkVGhlbWVcIiwgdm9pZCAwKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImxhc3RPdXRlclRoZW1lXCIsIHZvaWQgMCk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJsYXN0VGhlbWVcIiwgdm9pZCAwKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInJlbmRlclByb3ZpZGVyXCIsIGZ1bmN0aW9uIChvdXRlclRoZW1lKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IF90aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgdmFsdWU6IF90aGlzLmdldFRoZW1lKG91dGVyVGhlbWUpXG4gICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IFRoZW1lUHJvdmlkZXIucHJvdG90eXBlO1xuXG4gICAgLy8gR2V0IHRoZSB0aGVtZSBmcm9tIHRoZSBwcm9wcywgc3VwcG9ydGluZyBib3RoIChvdXRlclRoZW1lKSA9PiB7fSBhcyB3ZWxsIGFzIG9iamVjdCBub3RhdGlvblxuICAgIF9wcm90by5nZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKG91dGVyVGhlbWUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRoZW1lICE9PSB0aGlzLmxhc3RUaGVtZSB8fCBvdXRlclRoZW1lICE9PSB0aGlzLmxhc3RPdXRlclRoZW1lIHx8ICF0aGlzLmNhY2hlZFRoZW1lKSB7XG4gICAgICAgIHRoaXMubGFzdE91dGVyVGhlbWUgPSBvdXRlclRoZW1lO1xuICAgICAgICB0aGlzLmxhc3RUaGVtZSA9IHRoaXMucHJvcHMudGhlbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxhc3RUaGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciB0aGVtZSA9IHRoaXMucHJvcHMudGhlbWU7XG4gICAgICAgICAgdGhpcy5jYWNoZWRUaGVtZSA9IHRoZW1lKG91dGVyVGhlbWUpO1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoaXNPYmplY3QodGhpcy5jYWNoZWRUaGVtZSksICdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIHRoZW1lIGZ1bmN0aW9uJykgOiB2b2lkIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF90aGVtZSA9IHRoaXMucHJvcHMudGhlbWU7XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhpc09iamVjdChfdGhlbWUpLCAnW1RoZW1lUHJvdmlkZXJdIFBsZWFzZSBtYWtlIHlvdXIgdGhlbWUgcHJvcCBhIHBsYWluIG9iamVjdCcpIDogdm9pZCAwO1xuICAgICAgICAgIHRoaXMuY2FjaGVkVGhlbWUgPSBvdXRlclRoZW1lID8gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIF90aGVtZSkgOiBfdGhlbWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkVGhlbWU7XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclByb3ZpZGVyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRoZW1lUHJvdmlkZXI7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIFRoZW1lUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wc1xuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgICAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zaGFwZSh7fSksIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gVGhlbWVQcm92aWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2l0aFRoZW1lKGNvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhvYyhDb21wb25lbnQpIHtcbiAgICB2YXIgd2l0aFRoZW1lID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoaXNPYmplY3QodGhlbWUpLCAnW3RoZW1pbmddIFBsZWFzZSB1c2Ugd2l0aFRoZW1lIG9ubHkgd2l0aCB0aGUgVGhlbWVQcm92aWRlcicpIDogdm9pZCAwO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgICAgcmVmOiByZWZcbiAgICAgICAgfSwgcHJvcHMpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9IFwiV2l0aFRoZW1lKFwiICsgZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSArIFwiKVwiO1xuICAgIH1cblxuICAgIGhvaXN0KHdpdGhUaGVtZSwgQ29tcG9uZW50KTtcbiAgICByZXR1cm4gd2l0aFRoZW1lO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VUaGVtZShjb250ZXh0KSB7XG4gIHZhciB1c2VUaGVtZSA9IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICAgIHZhciB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoY29udGV4dCk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhpc09iamVjdCh0aGVtZSksICdbdGhlbWluZ10gUGxlYXNlIHVzZSB1c2VUaGVtZSBvbmx5IHdpdGggdGhlIFRoZW1lUHJvdmlkZXInKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gdGhlbWU7XG4gIH07XG5cbiAgcmV0dXJuIHVzZVRoZW1lO1xufVxuXG52YXIgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUaGVtaW5nKGNvbnRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgIHdpdGhUaGVtZTogY3JlYXRlV2l0aFRoZW1lKGNvbnRleHQpLFxuICAgIHVzZVRoZW1lOiBjcmVhdGVVc2VUaGVtZShjb250ZXh0KSxcbiAgICBUaGVtZVByb3ZpZGVyOiBjcmVhdGVUaGVtZVByb3ZpZGVyKGNvbnRleHQpXG4gIH07XG59XG5cbnZhciBfY3JlYXRlVGhlbWluZyA9IGNyZWF0ZVRoZW1pbmcoVGhlbWVDb250ZXh0KSxcbiAgICB3aXRoVGhlbWUgPSBfY3JlYXRlVGhlbWluZy53aXRoVGhlbWUsXG4gICAgVGhlbWVQcm92aWRlciA9IF9jcmVhdGVUaGVtaW5nLlRoZW1lUHJvdmlkZXIsXG4gICAgdXNlVGhlbWUgPSBfY3JlYXRlVGhlbWluZy51c2VUaGVtZTtcblxuZXhwb3J0IHsgdXNlVGhlbWUsIFRoZW1lQ29udGV4dCwgd2l0aFRoZW1lLCBjcmVhdGVUaGVtaW5nLCBUaGVtZVByb3ZpZGVyIH07XG4iLCJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gXCJXYXJuaW5nOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IEVycm9yKHRleHQpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2FybmluZztcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJSZWFjdEpTUyA9IHJlcXVpcmUoJ3JlYWN0LWpzcycpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiXSwic291cmNlUm9vdCI6IiJ9