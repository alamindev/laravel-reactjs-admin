(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
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

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
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
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
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
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (props.className !== undefined) {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/^.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


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

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles;

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }
      }
    // eslint-disable-next-line no-fallthrough

    default:
      {
        if (registered == null) {
          return interpolation;
        }

        var cached = registered[interpolation];

        if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
          console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
          shouldWarnAboutInterpolatingClassNameFromCss = false;
        }

        return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
      }
  }
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-select/dist/base/dist/react-select-cac0a5ae.browser.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-select/dist/base/dist/react-select-cac0a5ae.browser.esm.js ***!
  \***************************************************************************************/
/*! exports provided: S, a, c, d, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mergeStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../chunk-39d3fda8.browser.esm.js */ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js");
/* harmony import */ var _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../chunk-80640036.browser.esm.js */ "./node_modules/react-select/dist/chunk-80640036.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");



















var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var _ref =  false ? undefined : {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFNIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxuY29uc3QgQTExeVRleHQgPSAocHJvcHM6IEVsZW1lbnRDb25maWc8J3NwYW4nPikgPT4gKFxuICAgIDxzcGFuXG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdhMTF5VGV4dCcsXG4gICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBMTF5VGV4dDtcbiJdfQ== */"
};

var A11yText = function A11yText(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: _ref
  }, props));
};

var DummyInput =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(DummyInput, _Component);

  function DummyInput() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DummyInput);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(DummyInput).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DummyInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inProp = _this$props.in,
          out = _this$props.out,
          onExited = _this$props.onExited,
          appear = _this$props.appear,
          enter = _this$props.enter,
          exit = _this$props.exit,
          innerRef = _this$props.innerRef,
          emotion = _this$props.emotion,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        ref: innerRef
      }, props, {
        css:
        /*#__PURE__*/
        Object(_emotion_css__WEBPACK_IMPORTED_MODULE_17__["default"])({
          label: 'dummyInput',
          // get rid of any default styles
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,
          // important! without `width` browsers won't allow focus
          width: 1,
          // remove cursor on desktop
          color: 'transparent',
          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)'
        },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVEiLCJmaWxlIjoiRHVtbXlJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdW1teUlucHV0IGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgaW46IGluUHJvcCwgb3V0LCBvbkV4aXRlZCwgYXBwZWFyLCBlbnRlciwgZXhpdCwgaW5uZXJSZWYsIGVtb3Rpb24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxpbnB1dFxuICAgICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgICAgbGVmdDogLTEwMCxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19 */")
      }));
    }
  }]);

  return DummyInput;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NodeResolver, _Component);

  function NodeResolver() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NodeResolver);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(NodeResolver).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NodeResolver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.innerRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_14__["findDOMNode"])(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollLock, _Component);

  function ScrollLock() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ScrollLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollLock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "originalStyles", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "listenerOptions", {
      capture: false,
      passive: false
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(ScrollLock, "defaultProps", {
  accountForScrollbars: true
});

var _ref$1 =  false ? undefined : {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbEJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEVSIsImZpbGUiOiJTY3JvbGxCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQsIHR5cGUgRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IE5vZGVSZXNvbHZlciBmcm9tICcuL05vZGVSZXNvbHZlcic7XG5pbXBvcnQgU2Nyb2xsTG9jayBmcm9tICcuL1Njcm9sbExvY2svaW5kZXgnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogRWxlbWVudDwqPixcbiAgaXNFbmFibGVkOiBib29sZWFuLFxufTtcbnR5cGUgU3RhdGUgPSB7XG4gIHRvdWNoU2Nyb2xsVGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwsXG59O1xuXG4vLyBOT1RFOlxuLy8gV2Ugc2hvdWxkbid0IG5lZWQgdGhpcyBhZnRlciB1cGRhdGluZyB0byBSZWFjdCB2MTYuMy4wLCB3aGljaCBpbnRyb2R1Y2VzOlxuLy8gLSBjcmVhdGVSZWYoKSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjcmVhdGVyZWZcbi8vIC0gZm9yd2FyZFJlZigpIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGZvcndhcmRyZWZcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsQmxvY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHsgdG91Y2hTY3JvbGxUYXJnZXQ6IG51bGwgfTtcblxuICAvLyBtdXN0IGJlIGluIHN0YXRlIHRvIHRyaWdnZXIgYSByZS1yZW5kZXIsIG9ubHkgcnVucyBvbmNlIHBlciBpbnN0YW5jZVxuICBnZXRTY3JvbGxUYXJnZXQgPSAocmVmOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChyZWYgPT09IHRoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hTY3JvbGxUYXJnZXQ6IHJlZiB9KTtcbiAgfTtcblxuICAvLyB0aGlzIHdpbGwgY2xvc2UgdGhlIG1lbnUgd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGVcbiAgYmx1clNlbGVjdElucHV0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzRW5hYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvdWNoU2Nyb2xsVGFyZ2V0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gYmFpbCBlYXJseSBpZiBub3QgZW5hYmxlZFxuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm4gY2hpbGRyZW47XG5cbiAgICAvKlxuICAgICAqIERpdlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGJsb2NrcyBzY3JvbGxpbmcgb24gbm9uLWJvZHkgZWxlbWVudHMgYmVoaW5kIHRoZSBtZW51XG5cbiAgICAgKiBOb2RlUmVzb2x2ZXJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiB3ZSBuZWVkIGEgcmVmZXJlbmNlIHRvIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgdG8gXCJ1bmxvY2tcIiBzY3JvbGwgb25cbiAgICAgKiBtb2JpbGUgZGV2aWNlc1xuXG4gICAgICogU2Nyb2xsTG9ja1xuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGFjdHVhbGx5IGRvZXMgdGhlIHNjcm9sbCBsb2NraW5nXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgICA8Tm9kZVJlc29sdmVyIGlubmVyUmVmPXt0aGlzLmdldFNjcm9sbFRhcmdldH0+e2NoaWxkcmVufTwvTm9kZVJlc29sdmVyPlxuICAgICAgICB7dG91Y2hTY3JvbGxUYXJnZXQgPyAoXG4gICAgICAgICAgPFNjcm9sbExvY2sgdG91Y2hTY3JvbGxUYXJnZXQ9e3RvdWNoU2Nyb2xsVGFyZ2V0fSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
};

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ScrollBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "state", {
      touchScrollTarget: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getScrollTarget", function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "blurSelectInput", function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
        onClick: this.blurSelectInput,
        css: _ref$1
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    }
  }]);

  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_11__["PureComponent"]);

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ScrollCaptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollCaptor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "isBottom", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "isTop", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "scrollTarget", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "touchStart", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "cancelScroll", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleEventDelta", function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onWheel", function (event) {
      _this.handleEventDelta(event, event.deltaY);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchStart", function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchMove", function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getScrollTarget", function (ref) {
      _this.scrollTarget = ref;
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollCaptor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: "startListening",
    value: function startListening(el) {
      // bail early if no element is available to attach to
      if (!el) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening(el) {
      // all the if statements are to appease Flow 😢
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    }
  }]);

  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var ScrollCaptorSwitch =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ScrollCaptorSwitch);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollCaptorSwitch).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollCaptorSwitch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isEnabled = _this$props2.isEnabled,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["isEnabled"]);

      return isEnabled ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);

  return ScrollCaptorSwitch;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(ScrollCaptorSwitch, "defaultProps", {
  isEnabled: true
});

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu, press Tab to select the option and exit the menu.");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var defaultStyles = {
  clearIndicator: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["c"],
  container: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["a"],
  control: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["b"],
  dropdownIndicator: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["d"],
  group: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["g"],
  groupHeading: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["e"],
  indicatorsContainer: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["i"],
  indicatorSeparator: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["f"],
  input: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["h"],
  loadingIndicator: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["l"],
  loadingMessage: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["j"],
  menu: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["m"],
  menuList: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["k"],
  menuPortal: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["n"],
  multiValue: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["o"],
  multiValueLabel: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["p"],
  multiValueRemove: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["q"],
  noOptionsMessage: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["r"],
  option: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["s"],
  placeholder: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["t"],
  singleValue: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["u"],
  valueContainer: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["v"]
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["i"])(),
  captureMenuScroll: !Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["i"])(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["d"])(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Select);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Select).call(this, _props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "state", {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "blockOptionHover", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "isComposing", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "clearFocusValueOnUpdate", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "commonProps", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "components", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "hasGroups", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "initialTouchX", 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "initialTouchY", 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "inputIsHiddenAfterUpdate", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "instancePrefix", '');

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "openAfterFocus", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "scrollToFocusedOptionOnUpdate", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "userIsDragging", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "controlRef", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getControlRef", function (ref) {
      _this.controlRef = ref;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "focusedOptionRef", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getFocusedOptionRef", function (ref) {
      _this.focusedOptionRef = ref;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "menuListRef", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getMenuListRef", function (ref) {
      _this.menuListRef = ref;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "inputRef", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getInputRef", function (ref) {
      _this.inputRef = ref;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "cacheComponents", function (components) {
      _this.components = Object(_chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["w"])({
        components: components
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "focus", _this.focusInput);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "blur", _this.blurInput);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onChange", function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, actionMeta, {
        name: name
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "setValue", function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "selectOption", function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "removeValue", function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "clearValue", function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "popValue", function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getOptionLabel", function (data) {
      return _this.props.getOptionLabel(data);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getOptionValue", function (data) {
      return _this.props.getOptionValue(data);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getStyles", function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getElementId", function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getActiveDescendentId", function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "announceAriaLiveSelection", function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "announceAriaLiveContext", function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, context, {
          label: _this.props['aria-label']
        }))
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onMenuMouseDown", function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onMenuMouseMove", function (event) {
      _this.blockOptionHover = false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onControlMouseDown", function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        //$FlowFixMe
        if (event.target.tagName !== 'INPUT') {
          _this.onMenuClose();
        }
      } //$FlowFixMe


      if (event.target.tagName !== 'INPUT') {
        event.preventDefault();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onDropdownIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onClearIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onScroll", function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["e"])(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onCompositionStart", function () {
      _this.isComposing = true;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onCompositionEnd", function () {
      _this.isComposing = false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchStart", function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchMove", function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchEnd", function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onControlTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onClearIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onDropdownIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleInputChange", function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onInputFocus", function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onInputBlur", function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onOptionHover", function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "shouldHideSelectedOptions", function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onKeyDown", function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    });

    var value = _props.value;
    _this.cacheComponents = Object(memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.cacheComponents, _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["x"]).bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["f"])(value);

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          menuIsOpen = _this$props8.menuIsOpen,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
        var selectValue = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["f"])(nextProps.value);
        var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
          render: [],
          focusable: []
        };
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["h"])(this.menuListRef, this.focusedOptionRef);
      }

      this.scrollToFocusedOptionOnUpdate = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    // ==============================
    // Consumer Handlers
    // ==============================
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this$state3 = this.state,
          menuOptions = _this$state3.menuOptions,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var isMulti = this.props.isMulti;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.onMenuOpen();
      this.setState({
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      });
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          isSearchable = _this$props11.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu'
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus])
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, defaultTheme, this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;
      var hasValue = this.hasValue();

      var getValue = function getValue() {
        return selectValue;
      };

      var cx = _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["j"].bind(null, classNamePrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "getNextFocusedValue",
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    }
  }, {
    key: "getNextFocusedOption",
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props12 = this.props,
          isClearable = _this$props12.isClearable,
          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      var _this2 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this2.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "buildMenuOptions",
    // ==============================
    // Menu Options
    // ==============================
    value: function buildMenuOptions(props, selectValue) {
      var _this3 = this;

      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this3.isOptionDisabled(option, selectValue);

        var isSelected = _this3.isOptionSelected(option, selectValue);

        var label = _this3.getOptionLabel(option);

        var value = _this3.getOptionValue(option);

        if (_this3.shouldHideSelectedOptions() && isSelected || !_this3.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this3.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this3.selectOption(option);
        };
        var optionId = "".concat(_this3.getElementId('option'), "-").concat(id);
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this3.hasGroups) _this3.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = "".concat(_this3.getElementId('group'), "-").concat(itemIndex);
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "".concat(itemIndex));

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    } // ==============================
    // Renderers
    // ==============================

  }, {
    key: "constructAriaLiveMessage",
    value: function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props13 = this.props,
          options = _this$props13.options,
          menuIsOpen = _this$props13.menuIsOpen,
          inputValue = _this$props13.inputValue,
          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props14 = this.props,
          isDisabled = _this$props14.isDisabled,
          isSearchable = _this$props14.isSearchable,
          inputId = _this$props14.inputId,
          inputValue = _this$props14.inputValue,
          tabIndex = _this$props14.tabIndex;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input');

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DummyInput, {
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["n"],
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          value: ""
        });
      } // aria attributes makes the JSX "noisy", separated for clarity


      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };
      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Input, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props15 = this.props,
          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
          isDisabled = _this$props15.isDisabled,
          isMulti = _this$props15.isMulti,
          inputValue = _this$props15.inputValue,
          placeholder = _this$props15.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Placeholder, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MultiValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: _this4.getOptionValue(opt),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SingleValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isLoading = _this$props16.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ClearIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          isDisabled = _this$props17.isDisabled,
          isLoading = _this$props17.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(LoadingIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(IndicatorSeparator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DropdownIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu = _this$components3.Menu,
          MenuList = _this$components3.MenuList,
          MenuPortal = _this$components3.MenuPortal,
          LoadingMessage = _this$components3.LoadingMessage,
          NoOptionsMessage = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props18 = this.props,
          captureMenuScroll = _this$props18.captureMenuScroll,
          inputValue = _this$props18.inputValue,
          isLoading = _this$props18.isLoading,
          loadingMessage = _this$props18.loadingMessage,
          minMenuHeight = _this$props18.minMenuHeight,
          maxMenuHeight = _this$props18.maxMenuHeight,
          menuIsOpen = _this$props18.menuIsOpen,
          menuPlacement = _this$props18.menuPlacement,
          menuPosition = _this$props18.menuPosition,
          menuPortalTarget = _this$props18.menuPortalTarget,
          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
          noOptionsMessage = _this$props18.noOptionsMessage,
          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Option, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(item, ["type"]);

            var headingId = "".concat(item.key, "-heading");
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Group, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["M"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, menuPlacementProps), function (_ref6) {
        var ref = _ref6.ref,
            _ref6$placerProps = _ref6.placerProps,
            placement = _ref6$placerProps.placement,
            maxHeight = _ref6$placerProps.maxHeight;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Menu, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MenuList, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MenuPortal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this6 = this;

      var _this$props19 = this.props,
          delimiter = _this$props19.delimiter,
          isDisabled = _this$props19.isDisabled,
          isMulti = _this$props19.isMulti,
          name = _this$props19.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
            name: name,
            type: "hidden"
          });
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(A11yText, {
        "aria-live": "polite"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props20 = this.props,
          className = _this$props20.className,
          id = _this$props20.id,
          isDisabled = _this$props20.isDisabled,
          menuIsOpen = _this$props20.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SelectContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Control, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ValueContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(IndicatorsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Select, "defaultProps", defaultProps);




/***/ }),

/***/ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, n, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return animatedScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return cleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getBoundingClientObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isTouchCapable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return scrollTo; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}




/***/ }),

/***/ "./node_modules/react-select/dist/chunk-80640036.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/chunk-80640036.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: M, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MenuPlacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return containerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dropdownIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return groupHeadingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return indicatorSeparatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return groupCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return inputCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indicatorsContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loadingMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return menuListCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return menuPortalCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return multiValueCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return multiValueLabelCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiValueRemoveCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return noOptionsMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return optionCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return placeholderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return css$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return valueContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return defaultComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return exportedEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return components; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chunk-39d3fda8.browser.esm.js */ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_18__);




















function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["a"])(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["b"])(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["c"])(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["c"])(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["s"])(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, alignToControl(placement), '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "backgroundColor", colors.neutral0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "borderRadius", borderRadius), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "marginBottom", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "marginTop", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "position", 'absolute'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "width", '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "zIndex", 1), _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MenuPlacer, _Component);

  function MenuPlacer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MenuPlacer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "getPlacement", function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "getUpdatedProps", function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(MenuPlacer, "contextTypes", {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func
});

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MenuPortal, _Component2);

  function MenuPortal() {
    var _getPrototypeOf3;

    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf3 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MenuPortal)).call.apply(_getPrototypeOf3, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2)), "state", {
      placement: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2)), "getPortalPlacement", function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    });

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuPortal, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    } // callback for occassions where the menu must "flip"

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["g"])(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
        css: getStyles('menuPortal', state)
      }, children);
      return appendTo ? Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["createPortal"])(menuWrapper, appendTo) : menuWrapper;
    }
  }]);

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(MenuPortal, "childContextTypes", {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func
});

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_14__["default"])(a) == 'object' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_14__["default"])(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ValueContainer, _Component);

  function ValueContainer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ValueContainer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ValueContainer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ValueContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cx = _this$props.cx,
          isMulti = _this$props.isMulti,
          getStyles = _this$props.getStyles,
          hasValue = _this$props.hasValue;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
        css: getStyles('valueContainer', this.props),
        className: cx({
          'value-container': true,
          'value-container--is-multi': isMulti,
          'value-container--has-value': hasValue
        }, className)
      }, children);
    }
  }]);

  return ValueContainer;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]); // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_17__["default"])(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _ref2 =  false ? undefined : {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */"
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["size"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["keyframes"])(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("span", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_16__["default"])({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(LoadingDot, {
    delay: 160,
    offset: true
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Heading, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('groupHeading', Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    css: getStyles('input', Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme
    }, props))
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_input_autosize__WEBPACK_IMPORTED_MODULE_18___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
var MultiValueRemove =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MultiValueRemove, _Component);

  function MultiValueRemove() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MultiValueRemove);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MultiValueRemove).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MultiValueRemove, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerProps = _this$props.innerProps;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", innerProps, children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(CrossIcon, {
        size: 14
      }));
    }
  }]);

  return MultiValueRemove;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var MultiValue =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MultiValue, _Component2);

  function MultiValue() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MultiValue);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MultiValue).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MultiValue, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          components = _this$props2.components,
          cx = _this$props2.cx,
          data = _this$props2.data,
          getStyles = _this$props2.getStyles,
          innerProps = _this$props2.innerProps,
          isDisabled = _this$props2.isDisabled,
          removeProps = _this$props2.removeProps,
          selectProps = _this$props2.selectProps;
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["ClassNames"], null, function (_ref5) {
        var css = _ref5.css,
            emotionCx = _ref5.cx;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Container, {
          data: data,
          innerProps: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, innerProps, {
            className: emotionCx(css(getStyles('multiValue', _this.props)), cx({
              'multi-value': true,
              'multi-value--is-disabled': isDisabled
            }, className))
          }),
          selectProps: selectProps
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Label, {
          data: data,
          innerProps: {
            className: emotionCx(css(getStyles('multiValueLabel', _this.props)), cx({
              'multi-value__label': true
            }, className))
          },
          selectProps: selectProps
        }, children), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Remove, {
          data: data,
          innerProps: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
            className: emotionCx(css(getStyles('multiValueRemove', _this.props)), cx({
              'multi-value__remove': true
            }, className))
          }, removeProps),
          selectProps: selectProps
        }));
      });
    }
  }]);

  return MultiValue;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(MultiValue, "defaultProps", {
  cropWithEllipsis: true
});

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, components, props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/chunk-b36baf1a.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/chunk-b36baf1a.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return manageState; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);











var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StateManager, _Component);

    function StateManager() {
      var _getPrototypeOf2;

      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(StateManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "select", void 0);

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "state", {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onChange", function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onInputChange", function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onMenuOpen", function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onMenuClose", function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      });

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(SelectComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_9__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_class, "defaultProps", defaultProps), _temp;
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.browser.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.browser.esm.js ***!
  \********************************************************************/
/*! exports provided: components, createFilter, defaultTheme, mergeStyles, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chunk-39d3fda8.browser.esm.js */ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js");
/* harmony import */ var _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chunk-80640036.browser.esm.js */ "./node_modules/react-select/dist/chunk-80640036.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_18__["y"]; });

/* harmony import */ var _base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./base/dist/react-select-cac0a5ae.browser.esm.js */ "./node_modules/react-select/dist/base/dist/react-select-cac0a5ae.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["m"]; });

/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _chunk_b36baf1a_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chunk-b36baf1a.browser.esm.js */ "./node_modules/react-select/dist/chunk-b36baf1a.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");



























var NonceProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NonceProvider);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(NonceProvider).call(this, props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "createEmotionCache", function (nonce) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_24__["default"])({
        nonce: nonce
      });
    });

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.createEmotionCache);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["CacheProvider"], {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var index = Object(_chunk_b36baf1a_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__["m"])(_base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["S"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** @preserve
  * package: sweetalert2-react-content v2.0.2
  * file: dist/sweetalert2-react-content.umd.js
  * homepage: https://github.com/sweetalert2/sweetalert2-react-content#readme
  * license: MIT
  **/

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js")) :
  undefined;
}(this, function (React, ReactDOM) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var mounts = [{
    key: 'title',
    getter: function getter(swal) {
      return swal.getTitle();
    }
  }, {
    key: 'html',
    getter: function getter(swal) {
      return swal.getContent().querySelector('#swal2-content');
    }
  }, {
    key: 'confirmButtonText',
    getter: function getter(swal) {
      return swal.getConfirmButton();
    }
  }, {
    key: 'cancelButtonText',
    getter: function getter(swal) {
      return swal.getCancelButton();
    }
  }, {
    key: 'footer',
    getter: function getter(swal) {
      return swal.getFooter();
    }
  }];

  var noop = function noop() {};

  var error = function error(message) {
    return new Error("sweetalert2-react-content: ".concat(message));
  };

  function withReactContent(ParentSwal) {
    return (
      /*#__PURE__*/
      function (_ParentSwal) {
        _inherits(_class, _ParentSwal);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "_main",
          value: function _main(params) {
            params = Object.assign({}, params);
            params.onOpen = params.onOpen || noop;
            params.onClose = params.onClose || noop;
            mounts.forEach(function (_ref) {
              var key = _ref.key,
                  getter = _ref.getter;

              if (React.isValidElement(params[key])) {
                var reactElement = params[key];
                params[key] = ' ';
                var domElement;
                var superOnOpen = params.onOpen;

                params.onOpen = function (element) {
                  domElement = getter(ParentSwal);
                  ReactDOM.render(reactElement, domElement);
                  superOnOpen(element);
                };

                var superOnClose = params.onClose;

                params.onClose = function (element) {
                  superOnClose(element);
                  ReactDOM.unmountComponentAtNode(domElement);
                };
              }
            });
            return _get(_getPrototypeOf(_class.prototype), "_main", this).call(this, params);
          }
        }, {
          key: "update",
          value: function update() {
            throw error('Swal.update() is not yet supported. See https://github.com/sweetalert2/sweetalert2-react-content/issues/73');
          }
        }], [{
          key: "argsToParams",
          value: function argsToParams(args) {
            if (React.isValidElement(args[0]) || React.isValidElement(args[1])) {
              var params = {};
              ['title', 'html', 'icon'].forEach(function (name, index) {
                if (args[index] !== undefined) {
                  params[name] = args[index];
                }
              });
              return params;
            } else {
              return ParentSwal.argsToParams(args);
            }
          }
        }]);

        return _class;
      }(ParentSwal)
    );
  }

  return withReactContent;

}));
//# sourceMappingURL=sweetalert2-react-content.umd.js.map


/***/ }),

/***/ "./node_modules/sweetalert2/src/SweetAlert.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/SweetAlert.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _staticMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticMethods.js */ "./node_modules/sweetalert2/src/staticMethods.js");
/* harmony import */ var _instanceMethods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceMethods.js */ "./node_modules/sweetalert2/src/instanceMethods.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");






let currentInstance

// SweetAlert constructor
function SweetAlert (...args) {
  // Prevent run in Node env
  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return
  }

  // Check for the existence of Promise
  /* istanbul ignore if */
  if (typeof Promise === 'undefined') {
    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["error"])('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)')
  }

  currentInstance = this

  const outerParams = Object.freeze(this.constructor.argsToParams(args))

  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true,
      configurable: true
    }
  })

  const promise = this._main(this.params)
  _privateProps_js__WEBPACK_IMPORTED_MODULE_4__["default"].promise.set(this, promise)
}

// `catch` cannot be the name of a module export, so we define our thenable methods here instead
SweetAlert.prototype.then = function (onFulfilled) {
  const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_4__["default"].promise.get(this)
  return promise.then(onFulfilled)
}
SweetAlert.prototype.finally = function (onFinally) {
  const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_4__["default"].promise.get(this)
  return promise.finally(onFinally)
}

// Assign instance methods from src/instanceMethods/*.js to prototype
Object.assign(SweetAlert.prototype, _instanceMethods_js__WEBPACK_IMPORTED_MODULE_3__)

// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, _staticMethods_js__WEBPACK_IMPORTED_MODULE_2__)

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(_instanceMethods_js__WEBPACK_IMPORTED_MODULE_3__).forEach(key => {
  SweetAlert[key] = function (...args) {
    if (currentInstance) {
      return currentInstance[key](...args)
    }
  }
})

SweetAlert.DismissReason = _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__["DismissReason"]

SweetAlert.version = '9.4.3'

/* harmony default export */ __webpack_exports__["default"] = (SweetAlert);


/***/ }),

/***/ "./node_modules/sweetalert2/src/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/sweetalert2/src/constants.js ***!
  \***************************************************/
/*! exports provided: RESTORE_FOCUS_TIMEOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTORE_FOCUS_TIMEOUT", function() { return RESTORE_FOCUS_TIMEOUT; });
const RESTORE_FOCUS_TIMEOUT = 100


/***/ }),

/***/ "./node_modules/sweetalert2/src/globalState.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/globalState.js ***!
  \*****************************************************/
/*! exports provided: default, restoreActiveElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreActiveElement", function() { return restoreActiveElement; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/sweetalert2/src/constants.js");


const globalState = {}

/* harmony default export */ __webpack_exports__["default"] = (globalState);

const focusPreviousActiveElement = () => {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus()
    globalState.previousActiveElement = null
  } else if (document.body) {
    document.body.focus()
  }
}

// Restore previous active (focused) element
const restoreActiveElement = () => {
  return new Promise(resolve => {
    const x = window.scrollX
    const y = window.scrollY
    globalState.restoreFocusTimeout = setTimeout(() => {
      focusPreviousActiveElement()
      resolve()
    }, _constants_js__WEBPACK_IMPORTED_MODULE_0__["RESTORE_FOCUS_TIMEOUT"]) // issues/900
    if (typeof x !== 'undefined' && typeof y !== 'undefined') { // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y)
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods.js ***!
  \*********************************************************/
/*! exports provided: hideLoading, disableLoading, getInput, close, closePopup, closeModal, closeToast, enableButtons, disableButtons, enableInput, disableInput, showValidationMessage, resetValidationMessage, getProgressSteps, _main, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceMethods/hideLoading.js */ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableLoading", function() { return _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__["disableLoading"]; });

/* harmony import */ var _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceMethods/getInput.js */ "./node_modules/sweetalert2/src/instanceMethods/getInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInput", function() { return _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__["getInput"]; });

/* harmony import */ var _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceMethods/close.js */ "./node_modules/sweetalert2/src/instanceMethods/close.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closePopup", function() { return _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__["closePopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__["closeModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeToast", function() { return _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__["closeToast"]; });

/* harmony import */ var _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceMethods/enable-disable-elements.js */ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableButtons", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["enableButtons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableButtons", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["disableButtons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableInput", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["enableInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableInput", function() { return _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__["disableInput"]; });

/* harmony import */ var _instanceMethods_show_reset_validation_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceMethods/show-reset-validation-error.js */ "./node_modules/sweetalert2/src/instanceMethods/show-reset-validation-error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showValidationMessage", function() { return _instanceMethods_show_reset_validation_error_js__WEBPACK_IMPORTED_MODULE_4__["showValidationMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetValidationMessage", function() { return _instanceMethods_show_reset_validation_error_js__WEBPACK_IMPORTED_MODULE_4__["resetValidationMessage"]; });

/* harmony import */ var _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instanceMethods/progress-steps.js */ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProgressSteps", function() { return _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__["getProgressSteps"]; });

/* harmony import */ var _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instanceMethods/_main.js */ "./node_modules/sweetalert2/src/instanceMethods/_main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_main", function() { return _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__["_main"]; });

/* harmony import */ var _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceMethods/update.js */ "./node_modules/sweetalert2/src/instanceMethods/update.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__["update"]; });











/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/_main.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/_main.js ***!
  \***************************************************************/
/*! exports provided: _main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_main", function() { return _main; });
/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_Timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Timer.js */ "./node_modules/sweetalert2/src/utils/Timer.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_setParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/setParameters.js */ "./node_modules/sweetalert2/src/utils/setParameters.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _utils_openPopup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/openPopup.js */ "./node_modules/sweetalert2/src/utils/openPopup.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");
/* harmony import */ var _utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/dom/inputUtils.js */ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js");
/* harmony import */ var _buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buttons-handlers.js */ "./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js");
/* harmony import */ var _keydown_handler_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keydown-handler.js */ "./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js");
/* harmony import */ var _popup_click_handler_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popup-click-handler.js */ "./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
















function _main (userParams) {
  Object(_utils_params_js__WEBPACK_IMPORTED_MODULE_0__["showWarningsForParams"])(userParams)

  // Check if there is another Swal closing
  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getPopup"]() && _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].swalCloseEventFinishedCallback) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].swalCloseEventFinishedCallback()
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].swalCloseEventFinishedCallback
  }

  // Check if there is a swal disposal defer timer
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].deferDisposalTimer) {
    clearTimeout(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].deferDisposalTimer)
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].deferDisposalTimer
  }

  const innerParams = prepareParams(userParams)
  Object(_utils_setParameters_js__WEBPACK_IMPORTED_MODULE_5__["default"])(innerParams)
  Object.freeze(innerParams)

  // clear the previous timer
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout.stop()
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout
  }

  // clear the restore focus timeout
  clearTimeout(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].restoreFocusTimeout)

  const domCache = populateDomCache(this)

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["render"](this, innerParams)

  _privateProps_js__WEBPACK_IMPORTED_MODULE_8__["default"].innerParams.set(this, innerParams)

  return swalPromise(this, domCache, innerParams)
}

const prepareParams = (userParams) => {
  const showClass = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"].showClass, userParams.showClass)
  const hideClass = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideClass, userParams.hideClass)
  const params = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"], userParams)
  params.showClass = showClass
  params.hideClass = hideClass
  // @deprecated
  if (userParams.animation === false) {
    params.showClass = {
      popup: '',
      backdrop: 'swal2-backdrop-show swal2-noanimation'
    }
    params.hideClass = {}
  }
  return params
}

const swalPromise = (instance, domCache, innerParams) => {
  return new Promise((resolve) => {
    // functions to handle all closings/dismissals
    const dismissWith = (dismiss) => {
      instance.closePopup({ dismiss })
    }

    _privateMethods_js__WEBPACK_IMPORTED_MODULE_9__["default"].swalPromiseResolve.set(instance, resolve)

    setupTimer(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"], innerParams, dismissWith)

    domCache.confirmButton.onclick = () => Object(_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__["handleConfirmButtonClick"])(instance, innerParams)
    domCache.cancelButton.onclick = () => Object(_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__["handleCancelButtonClick"])(instance, dismissWith)

    domCache.closeButton.onclick = () => dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_14__["DismissReason"].close)

    Object(_popup_click_handler_js__WEBPACK_IMPORTED_MODULE_13__["handlePopupClick"])(domCache, innerParams, dismissWith)

    Object(_keydown_handler_js__WEBPACK_IMPORTED_MODULE_12__["addKeydownHandler"])(instance, _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"], innerParams, dismissWith)

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"]['toast-column'])
    } else {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["removeClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"]['toast-column'])
    }

    Object(_utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_10__["handleInputOptionsAndValue"])(instance, innerParams)

    Object(_utils_openPopup_js__WEBPACK_IMPORTED_MODULE_7__["openPopup"])(innerParams)

    initFocus(domCache, innerParams)

    // Scroll container to top on open (#1247)
    domCache.container.scrollTop = 0
  })
}

const populateDomCache = (instance) => {
  const domCache = {
    popup: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getPopup"](),
    container: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getContainer"](),
    content: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getContent"](),
    actions: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getActions"](),
    confirmButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getConfirmButton"](),
    cancelButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getCancelButton"](),
    closeButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getCloseButton"](),
    validationMessage: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getValidationMessage"](),
    progressSteps: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getProgressSteps"]()
  }
  _privateProps_js__WEBPACK_IMPORTED_MODULE_8__["default"].domCache.set(instance, domCache)

  return domCache
}

const setupTimer = (globalState, innerParams, dismissWith) => {
  const timerProgressBar = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getTimerProgressBar"]()
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](timerProgressBar)
  if (innerParams.timer) {
    globalState.timeout = new _utils_Timer_js__WEBPACK_IMPORTED_MODULE_3__["default"](() => {
      dismissWith('timer')
      delete globalState.timeout
    }, innerParams.timer)
    if (innerParams.timerProgressBar) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](timerProgressBar)
      setTimeout(() => {
        _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["animateTimerProgressBar"](innerParams.timer)
      })
    }
  }
}

const initFocus = (domCache, innerParams) => {
  if (innerParams.toast) {
    return
  }

  if (!Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["callIfFunction"])(innerParams.allowEnterKey)) {
    return blurActiveElement()
  }

  if (innerParams.focusCancel && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"](domCache.cancelButton)) {
    return domCache.cancelButton.focus()
  }

  if (innerParams.focusConfirm && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"](domCache.confirmButton)) {
    return domCache.confirmButton.focus()
  }

  Object(_keydown_handler_js__WEBPACK_IMPORTED_MODULE_12__["setFocus"])(innerParams, -1, 1)
}

const blurActiveElement = () => {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur()
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js ***!
  \**************************************************************************/
/*! exports provided: handleConfirmButtonClick, handleCancelButtonClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConfirmButtonClick", function() { return handleConfirmButtonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCancelButtonClick", function() { return handleCancelButtonClick; });
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/inputUtils.js */ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js");
/* harmony import */ var _utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");






const handleConfirmButtonClick = (instance, innerParams) => {
  instance.disableButtons()
  if (innerParams.input) {
    handleConfirmWithInput(instance, innerParams)
  } else {
    confirm(instance, innerParams, true)
  }
}

const handleCancelButtonClick = (instance, dismissWith) => {
  instance.disableButtons()
  dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_4__["DismissReason"].cancel)
}

const handleConfirmWithInput = (instance, innerParams) => {
  const inputValue = Object(_utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_1__["getInputValue"])(instance, innerParams)

  if (innerParams.inputValidator) {
    instance.disableInput()
    const validationPromise = Promise.resolve().then(() => innerParams.inputValidator(inputValue, innerParams.validationMessage))
    validationPromise.then(
      (validationMessage) => {
        instance.enableButtons()
        instance.enableInput()
        if (validationMessage) {
          instance.showValidationMessage(validationMessage)
        } else {
          confirm(instance, innerParams, inputValue)
        }
      }
    )
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons()
    instance.showValidationMessage(innerParams.validationMessage)
  } else {
    confirm(instance, innerParams, inputValue)
  }
}

const succeedWith = (instance, value) => {
  instance.closePopup({ value })
}

const confirm = (instance, innerParams, value) => {
  if (innerParams.showLoaderOnConfirm) {
    Object(_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_3__["showLoading"])() // TODO: make showLoading an *instance* method
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage()
    const preConfirmPromise = Promise.resolve().then(() => innerParams.preConfirm(value, innerParams.validationMessage))
    preConfirmPromise.then(
      (preConfirmValue) => {
        if (Object(_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__["isVisible"])(Object(_utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__["getValidationMessage"])()) || preConfirmValue === false) {
          instance.hideLoading()
        } else {
          succeedWith(instance, typeof (preConfirmValue) === 'undefined' ? value : preConfirmValue)
        }
      }
    )
  } else {
    succeedWith(instance, value)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/close.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/close.js ***!
  \***************************************************************/
/*! exports provided: close, closePopup, closeModal, closeToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePopup", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeToast", function() { return close; });
/* harmony import */ var _utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _utils_ieFix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ieFix.js */ "./node_modules/sweetalert2/src/utils/ieFix.js");
/* harmony import */ var _utils_aria_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");










/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState (instance, container, isToast, onAfterClose) {
  if (isToast) {
    triggerOnAfterCloseAndDispose(instance, onAfterClose)
  } else {
    Object(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["restoreActiveElement"])().then(() => triggerOnAfterCloseAndDispose(instance, onAfterClose))
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownTarget.removeEventListener('keydown', _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandler, { capture: _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownListenerCapture })
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandlerAdded = false
  }

  if (container.parentNode) {
    container.parentNode.removeChild(container)
  }

  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["isModal"]()) {
    Object(_utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__["undoScrollbar"])()
    Object(_utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__["undoIOSfix"])()
    Object(_utils_ieFix_js__WEBPACK_IMPORTED_MODULE_2__["undoIEfix"])()
    Object(_utils_aria_js__WEBPACK_IMPORTED_MODULE_3__["unsetAriaHidden"])()
  }

  removeBodyClasses()
}

function removeBodyClasses () {
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["removeClass"](
    [document.documentElement, document.body],
    [
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"].shown,
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"]['height-auto'],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"]['no-backdrop'],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"]['toast-shown'],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_5__["swalClasses"]['toast-column']
    ]
  )
}

function disposeSwal (instance) {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params
  // Unset globalState props so GC will dispose globalState (#1569)
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownHandler
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].keydownTarget
  // Unset WeakMaps so GC will be able to dispose them (#1569)
  unsetWeakMaps(_privateProps_js__WEBPACK_IMPORTED_MODULE_7__["default"])
  unsetWeakMaps(_privateMethods_js__WEBPACK_IMPORTED_MODULE_8__["default"])
}

function close (resolveValue) {
  const popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["getPopup"]()

  if (!popup) {
    return
  }

  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_7__["default"].innerParams.get(this)
  if (!innerParams || _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["hasClass"](popup, innerParams.hideClass.popup)) {
    return
  }
  const swalPromiseResolve = _privateMethods_js__WEBPACK_IMPORTED_MODULE_8__["default"].swalPromiseResolve.get(this)

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["removeClass"](popup, innerParams.showClass.popup)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["addClass"](popup, innerParams.hideClass.popup)

  const backdrop = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["getContainer"]()
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["removeClass"](backdrop, innerParams.showClass.backdrop)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["addClass"](backdrop, innerParams.hideClass.backdrop)

  handlePopupAnimation(this, popup, innerParams)

  // Resolve Swal promise
  swalPromiseResolve(resolveValue || {})
}

const handlePopupAnimation = (instance, popup, innerParams) => {
  const container = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["getContainer"]()
  // If animation is supported, animate
  const animationIsSupported = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["animationEndEvent"] && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["hasCssAnimation"](popup)

  const { onClose, onAfterClose } = innerParams

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup)
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, onAfterClose)
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["isToast"](), onAfterClose)
  }
}

const animatePopup = (instance, popup, container, onAfterClose) => {
  _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["isToast"](), onAfterClose)
  popup.addEventListener(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["animationEndEvent"], function (e) {
    if (e.target === popup) {
      _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].swalCloseEventFinishedCallback()
      delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].swalCloseEventFinishedCallback
    }
  })
}

const unsetWeakMaps = (obj) => {
  for (const i in obj) {
    obj[i] = new WeakMap()
  }
}

const triggerOnAfterCloseAndDispose = (instance, onAfterClose) => {
  setTimeout(() => {
    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      onAfterClose()
    }
    if (!_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_4__["getPopup"]()) {
      disposeSwal(instance)
    }
  })
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js ***!
  \*********************************************************************************/
/*! exports provided: enableButtons, disableButtons, enableInput, disableInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableButtons", function() { return enableButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableButtons", function() { return disableButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableInput", function() { return enableInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableInput", function() { return disableInput; });
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");


function setButtonsDisabled (instance, buttons, disabled) {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(instance)
  buttons.forEach(button => {
    domCache[button].disabled = disabled
  })
}

function setInputDisabled (input, disabled) {
  if (!input) {
    return false
  }
  if (input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode
    const radios = radiosContainer.querySelectorAll('input')
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled
    }
  } else {
    input.disabled = disabled
  }
}

function enableButtons () {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false)
}

function disableButtons () {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true)
}

function enableInput () {
  return setInputDisabled(this.getInput(), false)
}

function disableInput () {
  return setInputDisabled(this.getInput(), true)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/getInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/getInput.js ***!
  \******************************************************************/
/*! exports provided: getInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInput", function() { return getInput; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");



// Get input element by specified type or, if type isn't specified, by params.input
function getInput (instance) {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].innerParams.get(instance || this)
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].domCache.get(instance || this)
  if (!domCache) {
    return null
  }
  return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getInput"](domCache.content, innerParams.input)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/hideLoading.js ***!
  \*********************************************************************/
/*! exports provided: hideLoading, disableLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableLoading", function() { return hideLoading; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




/**
 * Enables buttons and hide loader.
 */
function hideLoading () {
  // do nothing if popup is closed
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(this)
  if (!innerParams) {
    return
  }
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  if (!innerParams.showConfirmButton) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hide"](domCache.confirmButton)
    if (!innerParams.showCancelButton) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hide"](domCache.actions)
    }
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"]([domCache.popup, domCache.actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].loading)
  domCache.popup.removeAttribute('aria-busy')
  domCache.popup.removeAttribute('data-loading')
  domCache.confirmButton.disabled = false
  domCache.cancelButton.disabled = false
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js ***!
  \*************************************************************************/
/*! exports provided: addKeydownHandler, setFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addKeydownHandler", function() { return addKeydownHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFocus", function() { return setFocus; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticMethods/dom.js */ "./node_modules/sweetalert2/src/staticMethods/dom.js");





const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture })
    globalState.keydownHandlerAdded = false
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = (e) => keydownHandler(instance, e, innerParams, dismissWith)
    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture })
    globalState.keydownHandlerAdded = true
  }
}

// Focus handling
const setFocus = (innerParams, index, increment) => {
  const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getFocusableElements"]()
  // search for visible elements and select the next possible match
  for (let i = 0; i < focusableElements.length; i++) {
    index = index + increment

    // rollover to first item
    if (index === focusableElements.length) {
      index = 0

      // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1
    }

    return focusableElements[index].focus()
  }
  // no visible focusable elements, focus the popup
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]().focus()
}

const arrowKeys = [
  'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
  'Left', 'Right', 'Up', 'Down' // IE11
]

const escKeys = [
  'Escape',
  'Esc' // IE11
]

const keydownHandler = (instance, e, innerParams, dismissWith) => {
  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation()
  }

  // ENTER
  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams)

  // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams)

  // ARROWS - switch focus between buttons
  } else if (arrowKeys.includes(e.key)) {
    handleArrows()

  // ESC
  } else if (escKeys.includes(e.key)) {
    handleEsc(e, innerParams, dismissWith)
  }
}

const handleEnter = (instance, e, innerParams) => {
  // #720 #721
  if (e.isComposing) {
    return
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].includes(innerParams.input)) {
      return // do not submit
    }

    Object(_staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_3__["clickConfirm"])()
    e.preventDefault()
  }
}

const handleTab = (e, innerParams) => {
  const targetElement = e.target

  const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getFocusableElements"]()
  let btnIndex = -1
  for (let i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i
      break
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1)
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1)
  }
  e.stopPropagation()
  e.preventDefault()
}

const handleArrows = () => {
  const confirmButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getConfirmButton"]()
  const cancelButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCancelButton"]()
  // focus Cancel button if Confirm button is currently focused
  if (document.activeElement === confirmButton && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["isVisible"](cancelButton)) {
    cancelButton.focus()
    // and vice versa
  } else if (document.activeElement === cancelButton && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["isVisible"](confirmButton)) {
    confirmButton.focus()
  }
}

const handleEsc = (e, innerParams, dismissWith) => {
  if (Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__["callIfFunction"])(innerParams.allowEscapeKey)) {
    e.preventDefault()
    dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__["DismissReason"].esc)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js ***!
  \*****************************************************************************/
/*! exports provided: handlePopupClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePopupClick", function() { return handlePopupClick; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");



const handlePopupClick = (domCache, innerParams, dismissWith) => {
  if (innerParams.toast) {
    handleToastClick(domCache, innerParams, dismissWith)
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache)

    // Ignore click events that had mousedown on the container but mouseup on the popup
    handleContainerMousedown(domCache)

    handleModalClick(domCache, innerParams, dismissWith)
  }
}

const handleToastClick = (domCache, innerParams, dismissWith) => {
  // Closing toast by internal click
  domCache.popup.onclick = () => {
    if (
      innerParams.showConfirmButton ||
      innerParams.showCancelButton ||
      innerParams.showCloseButton ||
      innerParams.input
    ) {
      return
    }
    dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__["DismissReason"].close)
  }
}

let ignoreOutsideClick = false

const handleModalMousedown = (domCache) => {
  domCache.popup.onmousedown = () => {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined
      // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup
      if (e.target === domCache.container) {
        ignoreOutsideClick = true
      }
    }
  }
}

const handleContainerMousedown = (domCache) => {
  domCache.container.onmousedown = () => {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined
      // We also need to check if the mouseup target is a child of the popup
      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true
      }
    }
  }
}

const handleModalClick = (domCache, innerParams, dismissWith) => {
  domCache.container.onclick = (e) => {
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false
      return
    }
    if (e.target === domCache.container && Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["callIfFunction"])(innerParams.allowOutsideClick)) {
      dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__["DismissReason"].backdrop)
    }
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/progress-steps.js ***!
  \************************************************************************/
/*! exports provided: getProgressSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressSteps", function() { return getProgressSteps; });
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");


function getProgressSteps () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(this)
  return domCache.progressSteps
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/show-reset-validation-error.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/show-reset-validation-error.js ***!
  \*************************************************************************************/
/*! exports provided: showValidationMessage, resetValidationMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showValidationMessage", function() { return showValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetValidationMessage", function() { return resetValidationMessage; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




// Show block with validation message
function showValidationMessage (error) {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  domCache.validationMessage.innerHTML = error
  const popupComputedStyle = window.getComputedStyle(domCache.popup)
  domCache.validationMessage.style.marginLeft = `-${popupComputedStyle.getPropertyValue('padding-left')}`
  domCache.validationMessage.style.marginRight = `-${popupComputedStyle.getPropertyValue('padding-right')}`
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["show"](domCache.validationMessage)

  const input = this.getInput()
  if (input) {
    input.setAttribute('aria-invalid', true)
    input.setAttribute('aria-describedBy', _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"]['validation-message'])
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["focusInput"](input)
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"](input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].inputerror)
  }
}

// Hide block with validation message
function resetValidationMessage () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  if (domCache.validationMessage) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hide"](domCache.validationMessage)
  }

  const input = this.getInput()
  if (input) {
    input.removeAttribute('aria-invalid')
    input.removeAttribute('aria-describedBy')
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"](input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].inputerror)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/update.js":
/*!****************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/update.js ***!
  \****************************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





/**
 * Updates popup parameters.
 */
function update (params) {
  const popup = _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(this)

  if (!popup || _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"](popup, innerParams.hideClass.popup)) {
    return Object(_src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`)
  }

  const validUpdatableParams = {}

  // assign valid params from `params` to `defaults`
  Object.keys(params).forEach(param => {
    if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param]
    } else {
      Object(_src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Invalid parameter to update: "${param}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js`)
    }
  })

  const updatedParams = Object.assign({}, innerParams, validUpdatableParams)

  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["render"](this, updatedParams)

  _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.set(this, updatedParams)
  Object.defineProperties(this, {
    params: {
      value: Object.assign({}, this.params, params),
      writable: false,
      enumerable: true
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/privateMethods.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateMethods.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  swalPromiseResolve: new WeakMap()
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/privateProps.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateProps.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods.js ***!
  \*******************************************************/
/*! exports provided: isValidParameter, isUpdatableParameter, isDeprecatedParameter, argsToParams, getContainer, getPopup, getTitle, getContent, getHtmlContainer, getImage, getIcon, getIcons, getCloseButton, getActions, getConfirmButton, getCancelButton, getHeader, getFooter, getFocusableElements, getValidationMessage, isLoading, isVisible, clickConfirm, clickCancel, fire, mixin, queue, getQueueStep, insertQueueStep, deleteQueueStep, showLoading, enableLoading, getTimerLeft, stopTimer, resumeTimer, toggleTimer, increaseTimer, isTimerRunning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticMethods/argsToParams.js */ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argsToParams", function() { return _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__["argsToParams"]; });

/* harmony import */ var _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticMethods/dom.js */ "./node_modules/sweetalert2/src/staticMethods/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHtmlContainer", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getHtmlContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcons", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCloseButton", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getCloseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfirmButton", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getConfirmButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCancelButton", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getCancelButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFooter", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableElements", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getFocusableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["getValidationMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["isLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clickConfirm", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["clickConfirm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clickCancel", function() { return _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__["clickCancel"]; });

/* harmony import */ var _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticMethods/fire.js */ "./node_modules/sweetalert2/src/staticMethods/fire.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__["fire"]; });

/* harmony import */ var _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticMethods/mixin.js */ "./node_modules/sweetalert2/src/staticMethods/mixin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__["mixin"]; });

/* harmony import */ var _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticMethods/queue.js */ "./node_modules/sweetalert2/src/staticMethods/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__["queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueueStep", function() { return _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__["getQueueStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertQueueStep", function() { return _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__["insertQueueStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteQueueStep", function() { return _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_4__["deleteQueueStep"]; });

/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_5__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableLoading", function() { return _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_5__["enableLoading"]; });

/* harmony import */ var _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staticMethods/timer.js */ "./node_modules/sweetalert2/src/staticMethods/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimerLeft", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["getTimerLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopTimer", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["stopTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resumeTimer", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["resumeTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleTimer", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["toggleTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "increaseTimer", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["increaseTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTimerRunning", function() { return _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_6__["isTimerRunning"]; });

/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidParameter", function() { return _utils_params_js__WEBPACK_IMPORTED_MODULE_7__["isValidParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUpdatableParameter", function() { return _utils_params_js__WEBPACK_IMPORTED_MODULE_7__["isUpdatableParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDeprecatedParameter", function() { return _utils_params_js__WEBPACK_IMPORTED_MODULE_7__["isDeprecatedParameter"]; });











/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/argsToParams.js ***!
  \********************************************************************/
/*! exports provided: argsToParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argsToParams", function() { return argsToParams; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const isJqueryElement = (elem) => typeof elem === 'object' && elem.jquery
const isElement = (elem) => elem instanceof Element || isJqueryElement(elem)

const argsToParams = (args) => {
  const params = {}
  if (typeof args[0] === 'object' && !isElement(args[0])) {
    Object.assign(params, args[0])
  } else {
    ['title', 'html', 'icon'].forEach((name, index) => {
      const arg = args[index]
      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg
      } else if (arg !== undefined) {
        Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["error"])(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`)
      }
    })
  }
  return params
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/dom.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/dom.js ***!
  \***********************************************************/
/*! exports provided: getContainer, getPopup, getTitle, getContent, getHtmlContainer, getImage, getIcon, getIcons, getCloseButton, getActions, getConfirmButton, getCancelButton, getHeader, getFooter, getFocusableElements, getValidationMessage, isLoading, isVisible, clickConfirm, clickCancel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickConfirm", function() { return clickConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickCancel", function() { return clickCancel; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHtmlContainer", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getHtmlContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcons", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCloseButton", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCloseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfirmButton", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getConfirmButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCancelButton", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCancelButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFooter", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableElements", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getFocusableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getValidationMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["isLoading"]; });






/*
 * Global function to determine if SweetAlert2 popup is shown
 */
const isVisible = () => {
  return _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"](_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]())
}

/*
 * Global function to click 'Confirm' button
 */
const clickConfirm = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getConfirmButton"]() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getConfirmButton"]().click()

/*
 * Global function to click 'Cancel' button
 */
const clickCancel = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCancelButton"]() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCancelButton"]().click()


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/fire.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/fire.js ***!
  \************************************************************/
/*! exports provided: fire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
function fire (...args) {
  const Swal = this
  return new Swal(...args)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/mixin.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/mixin.js ***!
  \*************************************************************/
/*! exports provided: mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin (mixinParams) {
  class MixinSwal extends this {
    _main (params) {
      return super._main(Object.assign({}, mixinParams, params))
    }
  }

  return MixinSwal
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/queue.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/queue.js ***!
  \*************************************************************/
/*! exports provided: queue, getQueueStep, insertQueueStep, deleteQueueStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueueStep", function() { return getQueueStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertQueueStep", function() { return insertQueueStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteQueueStep", function() { return deleteQueueStep; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


// private global state for the queue feature
let currentSteps = []

/*
 * Global function for chaining sweetAlert popups
 */
const queue = function (steps) {
  const Swal = this
  currentSteps = steps

  const resetAndResolve = (resolve, value) => {
    currentSteps = []
    resolve(value)
  }

  const queueResult = []
  return new Promise((resolve) => {
    (function step (i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i)
        Swal.fire(currentSteps[i]).then((result) => {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value)
            step(i + 1, callback)
          } else {
            resetAndResolve(resolve, { dismiss: result.dismiss })
          }
        })
      } else {
        resetAndResolve(resolve, { value: queueResult })
      }
    })(0)
  })
}

/*
 * Global function for getting the index of current popup in queue
 */
const getQueueStep = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"]().getAttribute('data-queue-step')

/*
 * Global function for inserting a popup to the queue
 */
const insertQueueStep = (step, index) => {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step)
  }
  return currentSteps.push(step)
}

/*
 * Global function for deleting a popup from the queue
 */
const deleteQueueStep = (index) => {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/showLoading.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/showLoading.js ***!
  \*******************************************************************/
/*! exports provided: showLoading, enableLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableLoading", function() { return showLoading; });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");




/**
 * Show spinner instead of Confirm button
 */
const showLoading = () => {
  let popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()
  if (!popup) {
    _sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__["default"].fire()
  }
  popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()
  const actions = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getActions"]()
  const confirmButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getConfirmButton"]()

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["show"](actions)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["show"](confirmButton, 'inline-block')
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"]([popup, actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__["swalClasses"].loading)
  confirmButton.disabled = true

  popup.setAttribute('data-loading', true)
  popup.setAttribute('aria-busy', true)
  popup.focus()
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/timer.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/timer.js ***!
  \*************************************************************/
/*! exports provided: getTimerLeft, stopTimer, resumeTimer, toggleTimer, increaseTimer, isTimerRunning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimerLeft", function() { return getTimerLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTimer", function() { return stopTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resumeTimer", function() { return resumeTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTimer", function() { return toggleTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseTimer", function() { return increaseTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimerRunning", function() { return isTimerRunning; });
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");



/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */
const getTimerLeft = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.getTimerLeft()
}

/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const stopTimer = () => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout) {
    Object(_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__["stopTimerProgressBar"])()
    return _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.stop()
  }
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const resumeTimer = () => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout) {
    const remaining = _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.start()
    Object(_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__["animateTimerProgressBar"])(remaining)
    return remaining
  }
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const toggleTimer = () => {
  const timer = _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout
  return timer && (timer.running ? stopTimer() : resumeTimer())
}

/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */
const increaseTimer = (n) => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout) {
    const remaining = _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.increase(n)
    Object(_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__["animateTimerProgressBar"])(remaining, true)
    return remaining
  }
}

/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */
const isTimerRunning = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.isRunning()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlert.js */ "./node_modules/sweetalert2/src/SweetAlert.js");


const Swal = _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__["default"]
Swal.default = Swal

/* harmony default export */ __webpack_exports__["default"] = (Swal);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/DismissReason.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/DismissReason.js ***!
  \*************************************************************/
/*! exports provided: DismissReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DismissReason", function() { return DismissReason; });
const DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
})


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/Timer.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/Timer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
class Timer {
  constructor (callback, delay) {
    this.callback = callback
    this.remaining = delay
    this.running = false

    this.start()
  }

  start () {
    if (!this.running) {
      this.running = true
      this.started = new Date()
      this.id = setTimeout(this.callback, this.remaining)
    }
    return this.remaining
  }

  stop () {
    if (this.running) {
      this.running = false
      clearTimeout(this.id)
      this.remaining -= new Date() - this.started
    }
    return this.remaining
  }

  increase (n) {
    const running = this.running
    if (running) {
      this.stop()
    }
    this.remaining += n
    if (running) {
      this.start()
    }
    return this.remaining
  }

  getTimerLeft () {
    if (this.running) {
      this.stop()
      this.start()
    }
    return this.remaining
  }

  isRunning () {
    return this.running
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/aria.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/aria.js ***!
  \****************************************************/
/*! exports provided: setAriaHidden, unsetAriaHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAriaHidden", function() { return setAriaHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetAriaHidden", function() { return unsetAriaHidden; });
/* harmony import */ var _dom_getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

const setAriaHidden = () => {
  const bodyChildren = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toArray"])(document.body.children)
  bodyChildren.forEach(el => {
    if (el === Object(_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"])() || Object(_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__["contains"])(el, Object(_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"])())) {
      return
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'))
    }
    el.setAttribute('aria-hidden', 'true')
  })
}

const unsetAriaHidden = () => {
  const bodyChildren = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toArray"])(document.body.children)
  bodyChildren.forEach(el => {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'))
      el.removeAttribute('data-previous-aria-hidden')
    } else {
      el.removeAttribute('aria-hidden')
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/classes.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/classes.js ***!
  \*******************************************************/
/*! exports provided: swalPrefix, prefix, swalClasses, iconTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swalPrefix", function() { return swalPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swalClasses", function() { return swalClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconTypes", function() { return iconTypes; });
const swalPrefix = 'swal2-'

const prefix = (items) => {
  const result = {}
  for (const i in items) {
    result[items[i]] = swalPrefix + items[i]
  }
  return result
}

const swalClasses = prefix([
  'container',
  'shown',
  'height-auto',
  'iosfix',
  'popup',
  'modal',
  'no-backdrop',
  'toast',
  'toast-shown',
  'toast-column',
  'show',
  'hide',
  'close',
  'title',
  'header',
  'content',
  'html-container',
  'actions',
  'confirm',
  'cancel',
  'footer',
  'icon',
  'icon-content',
  'image',
  'input',
  'file',
  'range',
  'select',
  'radio',
  'checkbox',
  'label',
  'textarea',
  'inputerror',
  'validation-message',
  'progress-steps',
  'active-progress-step',
  'progress-step',
  'progress-step-line',
  'loading',
  'styled',
  'top',
  'top-start',
  'top-end',
  'top-left',
  'top-right',
  'center',
  'center-start',
  'center-end',
  'center-left',
  'center-right',
  'bottom',
  'bottom-start',
  'bottom-end',
  'bottom-left',
  'bottom-right',
  'grow-row',
  'grow-column',
  'grow-fullscreen',
  'rtl',
  'timer-progress-bar',
  'scrollbar-measure',
])

const iconTypes = prefix([
  'success',
  'warning',
  'info',
  'question',
  'error'
])


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/defaultInputValidators.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage || 'Invalid email address')
  },
  url: (string, validationMessage) => {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage || 'Invalid URL')
  }
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js ***!
  \*********************************************************************/
/*! exports provided: animationEndEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEndEvent", function() { return animationEndEvent; });
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");


const animationEndEvent = (() => {
  // Prevent run in Node env
  /* istanbul ignore if */
  if (Object(_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__["isNodeEnv"])()) {
    return false
  }

  const testEl = document.createElement('div')
  const transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  }
  for (const i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i]
    }
  }

  return false
})()


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/domUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/domUtils.js ***!
  \************************************************************/
/*! exports provided: states, hasClass, applyCustomClass, getInput, focusInput, toggleClass, addClass, removeClass, getChildByClass, applyNumericalStyle, show, hide, toggle, isVisible, isScrollable, hasCssAnimation, contains, animateTimerProgressBar, stopTimerProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyCustomClass", function() { return applyCustomClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInput", function() { return getInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusInput", function() { return focusInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildByClass", function() { return getChildByClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyNumericalStyle", function() { return applyNumericalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrollable", function() { return isScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCssAnimation", function() { return hasCssAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateTimerProgressBar", function() { return animateTimerProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTimerProgressBar", function() { return stopTimerProgressBar; });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




// Remember state in cases where opening and handling a modal will fiddle with it.
const states = {
  previousBodyPadding: null
}

const hasClass = (elem, className) => {
  if (!className) {
    return false
  }
  const classList = className.split(/\s+/)
  for (let i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false
    }
  }
  return true
}

const removeCustomClasses = (elem, params) => {
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toArray"])(elem.classList).forEach(className => {
    if (
      !Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["objectValues"])(_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"]).includes(className) &&
      !Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["objectValues"])(_classes_js__WEBPACK_IMPORTED_MODULE_1__["iconTypes"]).includes(className) &&
      !Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["objectValues"])(params.showClass).includes(className)
    ) {
      elem.classList.remove(className)
    }
  })
}

const applyCustomClass = (elem, params, className) => {
  removeCustomClasses(elem, params)

  if (params.customClass && params.customClass[className]) {
    if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`)
    }

    addClass(elem, params.customClass[className])
  }
}

function getInput (content, inputType) {
  if (!inputType) {
    return null
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"][inputType])
    case 'checkbox':
      return content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].checkbox} input`)
    case 'radio':
      return content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].radio} input:checked`) ||
        content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].radio} input:first-child`)
    case 'range':
      return content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].range} input`)
    default:
      return getChildByClass(content, _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].input)
  }
}

const focusInput = (input) => {
  input.focus()

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    const val = input.value
    input.value = ''
    input.value = val
  }
}

const toggleClass = (target, classList, condition) => {
  if (!target || !classList) {
    return
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean)
  }
  classList.forEach((className) => {
    if (target.forEach) {
      target.forEach((elem) => {
        condition ? elem.classList.add(className) : elem.classList.remove(className)
      })
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className)
    }
  })
}

const addClass = (target, classList) => {
  toggleClass(target, classList, true)
}

const removeClass = (target, classList) => {
  toggleClass(target, classList, false)
}

const getChildByClass = (elem, className) => {
  for (let i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i]
    }
  }
}

const applyNumericalStyle = (elem, property, value) => {
  if (value || parseInt(value) === 0) {
    elem.style[property] = (typeof value === 'number') ? `${value}px` : value
  } else {
    elem.style.removeProperty(property)
  }
}

const show = (elem, display = 'flex') => {
  elem.style.opacity = ''
  elem.style.display = display
}

const hide = (elem) => {
  elem.style.opacity = ''
  elem.style.display = 'none'
}

const toggle = (elem, condition, display) => {
  condition ? show(elem, display) : hide(elem)
}

// borrowed from jquery $(elem).is(':visible') implementation
const isVisible = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length))

/* istanbul ignore next */
const isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight)

// borrowed from https://stackoverflow.com/a/46352119
const hasCssAnimation = (elem) => {
  const style = window.getComputedStyle(elem)

  const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0')
  const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0')

  return animDuration > 0 || transDuration > 0
}

const contains = (haystack, needle) => {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle)
  }
}

const animateTimerProgressBar = (timer, reset = false) => {
  const timerProgressBar = Object(_getters_js__WEBPACK_IMPORTED_MODULE_0__["getTimerProgressBar"])()
  if (isVisible(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none'
      timerProgressBar.style.width = '100%'
    }
    setTimeout(() => {
      timerProgressBar.style.transition = `width ${timer / 1000}s linear`
      timerProgressBar.style.width = '0%'
    }, 10)
  }
}

const stopTimerProgressBar = () => {
  const timerProgressBar = Object(_getters_js__WEBPACK_IMPORTED_MODULE_0__["getTimerProgressBar"])()
  const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width)
  timerProgressBar.style.removeProperty('transition')
  timerProgressBar.style.width = '100%'
  const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width)
  const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100)
  timerProgressBar.style.removeProperty('transition')
  timerProgressBar.style.width = `${timerProgressBarPercent}%`
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/getters.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/getters.js ***!
  \***********************************************************/
/*! exports provided: getContainer, elementBySelector, getPopup, getIcons, getIcon, getTitle, getContent, getHtmlContainer, getImage, getProgressSteps, getValidationMessage, getConfirmButton, getCancelButton, getActions, getHeader, getFooter, getTimerProgressBar, getCloseButton, getFocusableElements, isModal, isToast, isLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return getContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementBySelector", function() { return elementBySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return getPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcons", function() { return getIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return getIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return getTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return getContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHtmlContainer", function() { return getHtmlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return getImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressSteps", function() { return getProgressSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return getValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfirmButton", function() { return getConfirmButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCancelButton", function() { return getCancelButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return getActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFooter", function() { return getFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimerProgressBar", function() { return getTimerProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCloseButton", function() { return getCloseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableElements", function() { return getFocusableElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModal", function() { return isModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToast", function() { return isToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");




const getContainer = () => document.body.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].container}`)

const elementBySelector = (selectorString) => {
  const container = getContainer()
  return container ? container.querySelector(selectorString) : null
}

const elementByClass = (className) => {
  return elementBySelector(`.${className}`)
}

const getPopup = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].popup)

const getIcons = () => {
  const popup = getPopup()
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toArray"])(popup.querySelectorAll(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon}`))
}

const getIcon = () => {
  const visibleIcon = getIcons().filter(icon => Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["isVisible"])(icon))
  return visibleIcon.length ? visibleIcon[0] : null
}

const getTitle = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].title)

const getContent = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content)

const getHtmlContainer = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['html-container'])

const getImage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].image)

const getProgressSteps = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['progress-steps'])

const getValidationMessage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['validation-message'])

const getConfirmButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].confirm}`)

const getCancelButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].cancel}`)

const getActions = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].actions)

const getHeader = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].header)

const getFooter = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].footer)

const getTimerProgressBar = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['timer-progress-bar'])

const getCloseButton = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].close)

// https://github.com/jkup/focusable/blob/master/index.js
const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`

const getFocusableElements = () => {
  const focusableElementsWithTabindex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toArray"])(
    getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
  )
  // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'))
      b = parseInt(b.getAttribute('tabindex'))
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
      return 0
    })

  const otherFocusableElements = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toArray"])(
    getPopup().querySelectorAll(focusable)
  ).filter(el => el.getAttribute('tabindex') !== '-1')

  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["uniqueArray"])(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["isVisible"])(el))
}

const isModal = () => {
  return !isToast() && !document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['no-backdrop'])
}

const isToast = () => {
  return document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['toast-shown'])
}

const isLoading = () => {
  return getPopup().hasAttribute('data-loading')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/index.js ***!
  \*********************************************************/
/*! exports provided: states, hasClass, applyCustomClass, getInput, focusInput, toggleClass, addClass, removeClass, getChildByClass, applyNumericalStyle, show, hide, toggle, isVisible, isScrollable, hasCssAnimation, contains, animateTimerProgressBar, stopTimerProgressBar, init, getContainer, elementBySelector, getPopup, getIcons, getIcon, getTitle, getContent, getHtmlContainer, getImage, getProgressSteps, getValidationMessage, getConfirmButton, getCancelButton, getActions, getHeader, getFooter, getTimerProgressBar, getCloseButton, getFocusableElements, isModal, isToast, isLoading, parseHtmlToContainer, animationEndEvent, measureScrollbar, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "states", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["states"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyCustomClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["applyCustomClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInput", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["getInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusInput", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["focusInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["toggleClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildByClass", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["getChildByClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyNumericalStyle", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["applyNumericalStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "show", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["show"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["toggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["isVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScrollable", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["isScrollable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasCssAnimation", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["hasCssAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animateTimerProgressBar", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["animateTimerProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopTimerProgressBar", function() { return _domUtils_js__WEBPACK_IMPORTED_MODULE_0__["stopTimerProgressBar"]; });

/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/sweetalert2/src/utils/dom/init.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _init_js__WEBPACK_IMPORTED_MODULE_1__["init"]; });

/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementBySelector", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["elementBySelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcons", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHtmlContainer", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getHtmlContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProgressSteps", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getProgressSteps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getValidationMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfirmButton", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getConfirmButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCancelButton", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getCancelButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFooter", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimerProgressBar", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getTimerProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCloseButton", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getCloseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableElements", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["getFocusableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isModal", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["isModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isToast", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["isToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return _getters_js__WEBPACK_IMPORTED_MODULE_2__["isLoading"]; });

/* harmony import */ var _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseHtmlToContainer.js */ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseHtmlToContainer", function() { return _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__["parseHtmlToContainer"]; });

/* harmony import */ var _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animationEndEvent.js */ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationEndEvent", function() { return _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__["animationEndEvent"]; });

/* harmony import */ var _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./measureScrollbar.js */ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__["measureScrollbar"]; });

/* harmony import */ var _renderers_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderers/render.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _renderers_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });










/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/init.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/init.js ***!
  \********************************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");







const sweetHTML = `
 <div aria-labelledby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].title}" aria-describedby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].popup}" tabindex="-1">
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].header}">
     <ul class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['progress-steps']}"></ul>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].error}"></div>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].question}"></div>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].warning}"></div>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].info}"></div>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"].success}"></div>
     <img class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].image}" />
     <h2 class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].title}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].title}"></h2>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].close}"></button>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content}">
     <div id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['html-container']}"></div>
     <input class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].input}" />
     <input type="file" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].file}" />
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].range}">
       <input type="range" />
       <output></output>
     </div>
     <select class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].select}"></select>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].radio}"></div>
     <label for="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].checkbox}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].checkbox}">
       <input type="checkbox" />
       <span class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].label}"></span>
     </label>
     <textarea class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].textarea}"></textarea>
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['validation-message']}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['validation-message']}"></div>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].actions}">
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].confirm}">OK</button>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].cancel}">Cancel</button>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].footer}"></div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['timer-progress-bar']}"></div>
 </div>
`.replace(/(^|\n)\s*/g, '')

const resetOldContainer = () => {
  const oldContainer = Object(_getters_js__WEBPACK_IMPORTED_MODULE_1__["getContainer"])()
  if (!oldContainer) {
    return
  }

  oldContainer.parentNode.removeChild(oldContainer)
  Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(
    [document.documentElement, document.body],
    [
      _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['no-backdrop'],
      _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['toast-shown'],
      _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['has-column']
    ]
  )
}

let oldInputVal // IE11 workaround, see #1109 for details
const resetValidationMessage = (e) => {
  if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__["default"].isVisible() && oldInputVal !== e.target.value) {
    _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__["default"].resetValidationMessage()
  }
  oldInputVal = e.target.value
}

const addInputChangeListeners = () => {
  const content = Object(_getters_js__WEBPACK_IMPORTED_MODULE_1__["getContent"])()

  const input = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].input)
  const file = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].file)
  const range = content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].range} input`)
  const rangeOutput = content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].range} output`)
  const select = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].select)
  const checkbox = content.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].checkbox} input`)
  const textarea = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].textarea)

  input.oninput = resetValidationMessage
  file.onchange = resetValidationMessage
  select.onchange = resetValidationMessage
  checkbox.onchange = resetValidationMessage
  textarea.oninput = resetValidationMessage

  range.oninput = (e) => {
    resetValidationMessage(e)
    rangeOutput.value = range.value
  }

  range.onchange = (e) => {
    resetValidationMessage(e)
    range.nextSibling.value = range.value
  }
}

const getTarget = (target) => typeof target === 'string' ? document.querySelector(target) : target

const setupAccessibility = (params) => {
  const popup = Object(_getters_js__WEBPACK_IMPORTED_MODULE_1__["getPopup"])()

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog')
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive')
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true')
  }
}

const setupRTL = (targetElement) => {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["addClass"])(Object(_getters_js__WEBPACK_IMPORTED_MODULE_1__["getContainer"])(), _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].rtl)
  }
}

/*
 * Add modal + backdrop to DOM
 */
const init = (params) => {
  // Clean up the old popup container if it exists
  resetOldContainer()

  /* istanbul ignore if */
  if (Object(_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__["isNodeEnv"])()) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["error"])('SweetAlert2 requires document to initialize')
    return
  }

  const container = document.createElement('div')
  container.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].container
  container.innerHTML = sweetHTML

  const targetElement = getTarget(params.target)
  targetElement.appendChild(container)

  setupAccessibility(params)
  setupRTL(targetElement)
  addInputChangeListeners()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js":
/*!**************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/inputUtils.js ***!
  \**************************************************************/
/*! exports provided: handleInputOptionsAndValue, getInputValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleInputOptionsAndValue", function() { return handleInputOptionsAndValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputValue", function() { return getInputValue; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");






const handleInputOptionsAndValue = (instance, params) => {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params)
  } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(params.inputValue)) {
    handleInputValue(instance, params)
  }
}

const getInputValue = (instance, innerParams) => {
  const input = instance.getInput()
  if (!input) {
    return null
  }
  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input)
    case 'radio':
      return getRadioValue(input)
    case 'file':
      return getFileValue(input)
    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value
  }
}

const getCheckboxValue = (input) => input.checked ? 1 : 0

const getRadioValue = (input) => input.checked ? input.value : null

const getFileValue = (input) => input.files.length ? (input.getAttribute('multiple') !== null ? input.files : input.files[0]) : null

const handleInputOptions = (instance, params) => {
  const content = _index_js__WEBPACK_IMPORTED_MODULE_0__["getContent"]()
  const processInputOptions = (inputOptions) => populateInputOptions[params.input](content, formatInputOptions(inputOptions), params)
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(params.inputOptions)) {
    Object(_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__["showLoading"])()
    params.inputOptions.then((inputOptions) => {
      instance.hideLoading()
      processInputOptions(inputOptions)
    })
  } else if (typeof params.inputOptions === 'object') {
    processInputOptions(params.inputOptions)
  } else {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["error"])(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`)
  }
}

const handleInputValue = (instance, params) => {
  const input = instance.getInput()
  _index_js__WEBPACK_IMPORTED_MODULE_0__["hide"](input)
  params.inputValue.then((inputValue) => {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : `${inputValue}`
    _index_js__WEBPACK_IMPORTED_MODULE_0__["show"](input)
    input.focus()
    instance.hideLoading()
  })
    .catch((err) => {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["error"])(`Error in inputValue promise: ${err}`)
      input.value = ''
      _index_js__WEBPACK_IMPORTED_MODULE_0__["show"](input)
      input.focus()
      instance.hideLoading()
    })
}

const populateInputOptions = {
  select: (content, inputOptions, params) => {
    const select = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].select)
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0]
      const optionLabel = inputOption[1]
      const option = document.createElement('option')
      option.value = optionValue
      option.innerHTML = optionLabel
      if (params.inputValue.toString() === optionValue.toString()) {
        option.selected = true
      }
      select.appendChild(option)
    })
    select.focus()
  },

  radio: (content, inputOptions, params) => {
    const radio = Object(_domUtils_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"])(content, _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].radio)
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0]
      const radioLabel = inputOption[1]
      const radioInput = document.createElement('input')
      const radioLabelElement = document.createElement('label')
      radioInput.type = 'radio'
      radioInput.name = _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].radio
      radioInput.value = radioValue
      if (params.inputValue.toString() === radioValue.toString()) {
        radioInput.checked = true
      }
      const label = document.createElement('span')
      label.innerHTML = radioLabel
      label.className = _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].label
      radioLabelElement.appendChild(radioInput)
      radioLabelElement.appendChild(label)
      radio.appendChild(radioLabelElement)
    })
    const radios = radio.querySelectorAll('input')
    if (radios.length) {
      radios[0].focus()
    }
  }
}

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
const formatInputOptions = (inputOptions) => {
  const result = []
  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      result.push([key, value])
    })
  } else {
    Object.keys(inputOptions).forEach(key => {
      result.push([key, inputOptions[key]])
    })
  }
  return result
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js ***!
  \********************************************************************/
/*! exports provided: measureScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return measureScrollbar; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");


// Measure scrollbar width for padding body during modal show/hide
// https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
const measureScrollbar = () => {
  const scrollDiv = document.createElement('div')
  scrollDiv.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['scrollbar-measure']
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js ***!
  \************************************************************************/
/*! exports provided: parseHtmlToContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHtmlToContainer", function() { return parseHtmlToContainer; });
const parseHtmlToContainer = (param, target) => {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param)

  // JQuery element(s)
  } else if (typeof param === 'object') {
    handleJqueryElem(target, param)

  // Plain string
  } else if (param) {
    target.innerHTML = param
  }
}

const handleJqueryElem = (target, elem) => {
  target.innerHTML = ''
  if (0 in elem) {
    for (let i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true))
    }
  } else {
    target.appendChild(elem.cloneNode(true))
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/render.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/render.js ***!
  \********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _renderActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderActions.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js");
/* harmony import */ var _renderContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderContainer.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js");
/* harmony import */ var _renderContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderContent.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js");
/* harmony import */ var _renderFooter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderFooter.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js");
/* harmony import */ var _renderHeader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderHeader.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderHeader.js");
/* harmony import */ var _renderPopup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderPopup.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js");








const render = (instance, params) => {
  Object(_renderPopup_js__WEBPACK_IMPORTED_MODULE_6__["renderPopup"])(instance, params)
  Object(_renderContainer_js__WEBPACK_IMPORTED_MODULE_2__["renderContainer"])(instance, params)

  Object(_renderHeader_js__WEBPACK_IMPORTED_MODULE_5__["renderHeader"])(instance, params)
  Object(_renderContent_js__WEBPACK_IMPORTED_MODULE_3__["renderContent"])(instance, params)
  Object(_renderActions_js__WEBPACK_IMPORTED_MODULE_1__["renderActions"])(instance, params)
  Object(_renderFooter_js__WEBPACK_IMPORTED_MODULE_4__["renderFooter"])(instance, params)

  if (typeof params.onRender === 'function') {
    params.onRender(Object(_getters_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"])())
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js ***!
  \***************************************************************************/
/*! exports provided: renderActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderActions", function() { return renderActions; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




const renderActions = (instance, params) => {
  const actions = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getActions"]()
  const confirmButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getConfirmButton"]()
  const cancelButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getCancelButton"]()

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](actions)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["applyCustomClass"](actions, params, 'actions')

  // Render confirm button
  renderButton(confirmButton, 'confirm', params)
  // render Cancel Button
  renderButton(cancelButton, 'cancel', params)

  if (params.buttonsStyling) {
    handleButtonsStyling(confirmButton, cancelButton, params)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["removeClass"]([confirmButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].styled)
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = ''
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = ''
  }

  if (params.reverseButtons) {
    confirmButton.parentNode.insertBefore(cancelButton, confirmButton)
  }
}

function handleButtonsStyling (confirmButton, cancelButton, params) {
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"]([confirmButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].styled)

  // Buttons background colors
  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor
  }
  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor
  }

  // Loading state
  const confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color')
  confirmButton.style.borderLeftColor = confirmButtonBackgroundColor
  confirmButton.style.borderRightColor = confirmButtonBackgroundColor
}

function renderButton (button, buttonType, params) {
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["toggle"](button, params[`show${Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"])(buttonType)}Button`], 'inline-block')
  button.innerHTML = params[`${buttonType}ButtonText`] // Set caption text
  button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`]) // ARIA label

  // Add buttons custom classes
  button.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"][buttonType]
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["applyCustomClass"](button, params, `${buttonType}Button`)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](button, params[`${buttonType}ButtonClass`])
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js ***!
  \*******************************************************************************/
/*! exports provided: renderCloseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCloseButton", function() { return renderCloseButton; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderCloseButton = (instance, params) => {
  const closeButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getCloseButton"]()

  closeButton.innerHTML = params.closeButtonHtml

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["applyCustomClass"](closeButton, params, 'closeButton')

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["toggle"](closeButton, params.showCloseButton)
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js ***!
  \*****************************************************************************/
/*! exports provided: renderContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderContainer", function() { return renderContainer; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");




function handleBackdropParam (container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop
  } else if (!backdrop) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"]([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['no-backdrop'])
  }
}

function handlePositionParam (container, position) {
  if (position in _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](container, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"][position])
  } else {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('The "position" parameter is not valid, defaulting to "center"')
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](container, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].center)
  }
}

function handleGrowParam (container, grow) {
  if (grow && typeof grow === 'string') {
    const growClass = `grow-${grow}`
    if (growClass in _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](container, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"][growClass])
    }
  }
}

const renderContainer = (instance, params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getContainer"]()

  if (!container) {
    return
  }

  handleBackdropParam(container, params.backdrop)

  if (!params.backdrop && params.allowOutsideClick) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`')
  }

  handlePositionParam(container, params.position)
  handleGrowParam(container, params.grow)

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["applyCustomClass"](container, params, 'container')

  // Set queue step attribute for getQueueStep() method
  const queueStep = document.body.getAttribute('data-swal2-queue-step')
  if (queueStep) {
    container.setAttribute('data-queue-step', queueStep)
    document.body.removeAttribute('data-swal2-queue-step')
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js ***!
  \***************************************************************************/
/*! exports provided: renderContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderContent", function() { return renderContent; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _renderInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderInput.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js");




const renderContent = (instance, params) => {
  const content = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getContent"]().querySelector(`#${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].content}`)

  // Content as HTML
  if (params.html) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["parseHtmlToContainer"](params.html, content)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](content, 'block')

  // Content as plain text
  } else if (params.text) {
    content.textContent = params.text
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](content, 'block')

  // No content
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](content)
  }

  Object(_renderInput_js__WEBPACK_IMPORTED_MODULE_2__["renderInput"])(instance, params)

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["applyCustomClass"](_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getContent"](), params, 'content')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js ***!
  \**************************************************************************/
/*! exports provided: renderFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFooter", function() { return renderFooter; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderFooter = (instance, params) => {
  const footer = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getFooter"]()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["toggle"](footer, params.footer)

  if (params.footer) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["parseHtmlToContainer"](params.footer, footer)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["applyCustomClass"](footer, params, 'footer')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderHeader.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderHeader.js ***!
  \**************************************************************************/
/*! exports provided: renderHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHeader", function() { return renderHeader; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _renderCloseButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCloseButton.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js");
/* harmony import */ var _renderIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderIcon.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js");
/* harmony import */ var _renderImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderImage.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js");
/* harmony import */ var _renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProgressSteps.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js");
/* harmony import */ var _renderTitle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderTitle.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js");







const renderHeader = (instance, params) => {
  const header = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getHeader"]()

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["applyCustomClass"](header, params, 'header')

  // Progress steps
  Object(_renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_4__["renderProgressSteps"])(instance, params)

  // Icon
  Object(_renderIcon_js__WEBPACK_IMPORTED_MODULE_2__["renderIcon"])(instance, params)

  // Image
  Object(_renderImage_js__WEBPACK_IMPORTED_MODULE_3__["renderImage"])(instance, params)

  // Title
  Object(_renderTitle_js__WEBPACK_IMPORTED_MODULE_5__["renderTitle"])(instance, params)

  // Close button
  Object(_renderCloseButton_js__WEBPACK_IMPORTED_MODULE_1__["renderCloseButton"])(instance, params)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js ***!
  \************************************************************************/
/*! exports provided: renderIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderIcon", function() { return renderIcon; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





const renderIcon = (instance, params) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(instance)

  // if the give icon already rendered, apply the custom class without re-rendering the icon
  if (innerParams && params.icon === innerParams.icon && _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getIcon"]()) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["applyCustomClass"](_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getIcon"](), params, 'icon')
    return
  }

  hideAllIcons()

  if (!params.icon) {
    return
  }

  if (Object.keys(_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"]).indexOf(params.icon) !== -1) {
    const icon = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["elementBySelector"](`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].icon}.${_classes_js__WEBPACK_IMPORTED_MODULE_0__["iconTypes"][params.icon]}`)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["show"](icon)

    // Custom or default content
    setContent(icon, params)
    adjustSuccessIconBackgoundColor()

    // Custom class
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["applyCustomClass"](icon, params, 'icon')

    // Animate icon
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](icon, params.showClass.icon)
  } else {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["error"])(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`)
  }
}

const hideAllIcons = () => {
  const icons = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getIcons"]()
  for (let i = 0; i < icons.length; i++) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["hide"](icons[i])
  }
}

// Adjust success icon background color to match the popup background color
const adjustSuccessIconBackgoundColor = () => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getPopup"]()
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color')
  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix')
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor
  }
}

const setContent = (icon, params) => {
  icon.innerHTML = ''

  if (params.iconHtml) {
    icon.innerHTML = iconContent(params.iconHtml)
  } else if (params.icon === 'success') {
    icon.innerHTML = `
      <div class="swal2-success-circular-line-left"></div>
      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
      <div class="swal2-success-circular-line-right"></div>
    `
  } else if (params.icon === 'error') {
    icon.innerHTML = `
      <span class="swal2-x-mark">
        <span class="swal2-x-mark-line-left"></span>
        <span class="swal2-x-mark-line-right"></span>
      </span>
    `
  } else {
    const defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    }
    icon.innerHTML = iconContent(defaultIconHtml[params.icon])
  }
}

const iconContent = (content) => `<div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['icon-content']}">${content}</div>`


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js ***!
  \*************************************************************************/
/*! exports provided: renderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderImage", function() { return renderImage; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderImage = (instance, params) => {
  const image = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getImage"]()

  if (!params.imageUrl) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"](image)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["show"](image)

  // Src, alt
  image.setAttribute('src', params.imageUrl)
  image.setAttribute('alt', params.imageAlt)

  // Width, height
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["applyNumericalStyle"](image, 'width', params.imageWidth)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["applyNumericalStyle"](image, 'height', params.imageHeight)

  // Class
  image.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].image
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["applyCustomClass"](image, params, 'image')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js ***!
  \*************************************************************************/
/*! exports provided: renderInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderInput", function() { return renderInput; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea']

const renderInput = (instance, params) => {
  const content = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getContent"]()
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(instance)
  const rerender = !innerParams || params.input !== innerParams.input

  inputTypes.forEach((inputType) => {
    const inputClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"][inputType]
    const inputContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"](content, inputClass)

    // set attributes
    setAttributes(inputType, params.inputAttributes)

    // set class
    inputContainer.className = inputClass

    if (rerender) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["hide"](inputContainer)
    }
  })

  if (params.input) {
    if (rerender) {
      showInput(params)
    }
    // set custom class
    setCustomClass(params)
  }
}

const showInput = (params) => {
  if (!renderInputType[params.input]) {
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["error"])(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`)
  }

  const inputContainer = getInputContainer(params.input)
  const input = renderInputType[params.input](inputContainer, params)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["show"](input)

  // input autofocus
  setTimeout(() => {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["focusInput"](input)
  })
}

const removeAttributes = (input) => {
  for (let i = 0; i < input.attributes.length; i++) {
    const attrName = input.attributes[i].name
    if (!['type', 'value', 'style'].includes(attrName)) {
      input.removeAttribute(attrName)
    }
  }
}

const setAttributes = (inputType, inputAttributes) => {
  const input = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getInput"](_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getContent"](), inputType)
  if (!input) {
    return
  }

  removeAttributes(input)

  for (const attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue
    }

    input.setAttribute(attr, inputAttributes[attr])
  }
}

const setCustomClass = (params) => {
  const inputContainer = getInputContainer(params.input)
  if (params.customClass) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](inputContainer, params.customClass.input)
  }
}

const setInputPlaceholder = (input, params) => {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder
  }
}

const getInputContainer = (inputType) => {
  const inputClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"][inputType] ? _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"][inputType] : _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].input
  return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getChildByClass"](_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getContent"](), inputClass)
}

const renderInputType = {}

renderInputType.text =
renderInputType.email =
renderInputType.password =
renderInputType.number =
renderInputType.tel =
renderInputType.url = (input, params) => {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue
  } else if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isPromise"])(params.inputValue)) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof params.inputValue}"`)
  }
  setInputPlaceholder(input, params)
  input.type = params.input
  return input
}

renderInputType.file = (input, params) => {
  setInputPlaceholder(input, params)
  return input
}

renderInputType.range = (range, params) => {
  const rangeInput = range.querySelector('input')
  const rangeOutput = range.querySelector('output')
  rangeInput.value = params.inputValue
  rangeInput.type = params.input
  rangeOutput.value = params.inputValue
  return range
}

renderInputType.select = (select, params) => {
  select.innerHTML = ''
  if (params.inputPlaceholder) {
    const placeholder = document.createElement('option')
    placeholder.innerHTML = params.inputPlaceholder
    placeholder.value = ''
    placeholder.disabled = true
    placeholder.selected = true
    select.appendChild(placeholder)
  }
  return select
}

renderInputType.radio = (radio) => {
  radio.innerHTML = ''
  return radio
}

renderInputType.checkbox = (checkboxContainer, params) => {
  const checkbox = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getInput"](_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getContent"](), 'checkbox')
  checkbox.value = 1
  checkbox.id = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].checkbox
  checkbox.checked = Boolean(params.inputValue)
  const label = checkboxContainer.querySelector('span')
  label.innerHTML = params.inputPlaceholder
  return checkboxContainer
}

renderInputType.textarea = (textarea, params) => {
  textarea.value = params.inputValue
  setInputPlaceholder(textarea, params)

  if ('MutationObserver' in window) { // #1699
    const initialPopupWidth = parseInt(window.getComputedStyle(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getPopup"]()).width)
    const popupPadding = parseInt(window.getComputedStyle(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getPopup"]()).paddingLeft) + parseInt(window.getComputedStyle(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getPopup"]()).paddingRight)
    const outputsize = () => {
      const contentWidth = textarea.offsetWidth + popupPadding
      if (contentWidth > initialPopupWidth) {
        _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getPopup"]().style.width = `${contentWidth}px`
      } else {
        _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getPopup"]().style.width = null
      }
    }
    new MutationObserver(outputsize).observe(textarea, {
      attributes: true, attributeFilter: ['style']
    })
  }

  return textarea
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js ***!
  \*************************************************************************/
/*! exports provided: renderPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPopup", function() { return renderPopup; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderPopup = (instance, params) => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["getPopup"]()

  // Width
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["applyNumericalStyle"](popup, 'width', params.width)

  // Padding
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["applyNumericalStyle"](popup, 'padding', params.padding)

  // Background
  if (params.background) {
    popup.style.background = params.background
  }

  // Default Class
  popup.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].popup
  if (params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"]([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['toast-shown'])
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].toast)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"].modal)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["applyCustomClass"](popup, params, 'popup')
  if (typeof params.customClass === 'string') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](popup, params.customClass)
  }

  // Add showClass when updating Swal.update({})
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["isVisible"](popup)) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["addClass"](popup, params.showClass.popup)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js ***!
  \*********************************************************************************/
/*! exports provided: renderProgressSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProgressSteps", function() { return renderProgressSteps; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../staticMethods/queue.js */ "./node_modules/sweetalert2/src/staticMethods/queue.js");





const createStepElement = (step) => {
  const stepEl = document.createElement('li')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](stepEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['progress-step'])
  stepEl.innerHTML = step
  return stepEl
}

const createLineElement = (params) => {
  const lineEl = document.createElement('li')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](lineEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['progress-step-line'])
  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance
  }
  return lineEl
}

const renderProgressSteps = (instance, params) => {
  const progressStepsContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["getProgressSteps"]()
  if (!params.progressSteps || params.progressSteps.length === 0) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["hide"](progressStepsContainer)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["show"](progressStepsContainer)
  progressStepsContainer.innerHTML = ''
  const currentProgressStep = parseInt(params.currentProgressStep === undefined ? Object(_staticMethods_queue_js__WEBPACK_IMPORTED_MODULE_3__["getQueueStep"])() : params.currentProgressStep)
  if (currentProgressStep >= params.progressSteps.length) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(
      'Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
      '(currentProgressStep like JS arrays starts from 0)'
    )
  }

  params.progressSteps.forEach((step, index) => {
    const stepEl = createStepElement(step)
    progressStepsContainer.appendChild(stepEl)
    if (index === currentProgressStep) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__["addClass"](stepEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__["swalClasses"]['active-progress-step'])
    }

    if (index !== params.progressSteps.length - 1) {
      const lineEl = createLineElement(step)
      progressStepsContainer.appendChild(lineEl)
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js ***!
  \*************************************************************************/
/*! exports provided: renderTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTitle", function() { return renderTitle; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderTitle = (instance, params) => {
  const title = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getTitle"]()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["toggle"](title, params.title || params.titleText)

  if (params.title) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["parseHtmlToContainer"](params.title, title)
  }

  if (params.titleText) {
    title.innerText = params.titleText
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["applyCustomClass"](title, params, 'title')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/ieFix.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/ieFix.js ***!
  \*****************************************************/
/*! exports provided: IEfix, undoIEfix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEfix", function() { return IEfix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoIEfix", function() { return undoIEfix; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


// https://stackoverflow.com/a/21825207
const isIE11 = () => !!window.MSInputMethodContext && !!document.documentMode

// Fix IE11 centering sweetalert2/issues/933
/* istanbul ignore next */
const fixVerticalPositionIE = () => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"]()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()

  container.style.removeProperty('align-items')
  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start'
  }
}

/* istanbul ignore next */
const IEfix = () => {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE()
    window.addEventListener('resize', fixVerticalPositionIE)
  }
}

/* istanbul ignore next */
const undoIEfix = () => {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/iosFix.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/iosFix.js ***!
  \******************************************************/
/*! exports provided: iOSfix, undoIOSfix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iOSfix", function() { return iOSfix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoIOSfix", function() { return undoIOSfix; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");



// Fix iOS scrolling http://stackoverflow.com/q/39626302

/* istanbul ignore next */
const iOSfix = () => {
  const iOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  if (iOS && !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].iosfix)) {
    const offset = document.body.scrollTop
    document.body.style.top = `${offset * -1}px`
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].iosfix)
    lockBodyScroll()
  }
}

/* istanbul ignore next */
const lockBodyScroll = () => { // #1246
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"]()
  let preventTouchMove
  container.ontouchstart = (e) => {
    preventTouchMove =
      e.target === container ||
      (
        !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["isScrollable"](container) &&
        e.target.tagName !== 'INPUT' // #1603
      )
  }
  container.ontouchmove = (e) => {
    if (preventTouchMove) {
      e.preventDefault()
      e.stopPropagation()
    }
  }
}

/* istanbul ignore next */
const undoIOSfix = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].iosfix)) {
    const offset = parseInt(document.body.style.top, 10)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"](document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].iosfix)
    document.body.style.top = ''
    document.body.scrollTop = (offset * -1)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/isNodeEnv.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/isNodeEnv.js ***!
  \*********************************************************/
/*! exports provided: isNodeEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return isNodeEnv; });
// Detect Node env
const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined'


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/openPopup.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/openPopup.js ***!
  \*********************************************************/
/*! exports provided: openPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPopup", function() { return openPopup; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _iosFix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _ieFix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ieFix.js */ "./node_modules/sweetalert2/src/utils/ieFix.js");
/* harmony import */ var _aria_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");








function swalOpenAnimationFinished (popup, container) {
  popup.removeEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["animationEndEvent"], swalOpenAnimationFinished)
  container.style.overflowY = 'auto'
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */
const openPopup = (params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getContainer"]()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["getPopup"]()

  if (typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup)
  }

  addClasses(container, popup, params)

  // scrolling is 'hidden' until animation is done, after that 'auto'
  setScrollingVisibility(container, popup)

  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["isModal"]()) {
    fixScrollContainer(container, params.scrollbarPadding)
  }

  if (!_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["isToast"]() && !_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].previousActiveElement) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].previousActiveElement = document.activeElement
  }
  if (typeof params.onOpen === 'function') {
    setTimeout(() => params.onOpen(popup))
  }
}

const setScrollingVisibility = (container, popup) => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["animationEndEvent"] && _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["hasCssAnimation"](popup)) {
    container.style.overflowY = 'hidden'
    popup.addEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["animationEndEvent"], swalOpenAnimationFinished.bind(null, popup, container))
  } else {
    container.style.overflowY = 'auto'
  }
}

const fixScrollContainer = (container, scrollbarPadding) => {
  Object(_iosFix_js__WEBPACK_IMPORTED_MODULE_3__["iOSfix"])()
  Object(_ieFix_js__WEBPACK_IMPORTED_MODULE_4__["IEfix"])()
  Object(_aria_js__WEBPACK_IMPORTED_MODULE_5__["setAriaHidden"])()

  if (scrollbarPadding) {
    Object(_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__["fixScrollbar"])()
  }

  // sweetalert2/issues/1247
  setTimeout(() => {
    container.scrollTop = 0
  })
}

const addClasses = (container, popup, params) => {
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"](container, params.showClass.backdrop)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["show"](popup)
  // Animate popup right after showing it
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"](popup, params.showClass.popup)

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"]([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"].shown)
  if (params.heightAuto && params.backdrop && !params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["addClass"]([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_1__["swalClasses"]['height-auto'])
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/params.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/params.js ***!
  \******************************************************/
/*! exports provided: defaultParams, updatableParams, deprecatedParams, isValidParameter, isUpdatableParameter, isDeprecatedParameter, showWarningsForParams, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultParams", function() { return defaultParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatableParams", function() { return updatableParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecatedParams", function() { return deprecatedParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidParameter", function() { return isValidParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpdatableParameter", function() { return isUpdatableParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeprecatedParameter", function() { return isDeprecatedParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showWarningsForParams", function() { return showWarningsForParams; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: undefined,
  iconHtml: undefined,
  toast: false,
  animation: true,
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show',
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide',
  },
  customClass: undefined,
  target: 'body',
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: undefined,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: undefined,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: undefined,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: '',
  timer: undefined,
  timerProgressBar: false,
  width: undefined,
  padding: undefined,
  background: undefined,
  input: undefined,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: undefined,
  validationMessage: undefined,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: undefined,
  progressStepsDistance: undefined,
  onBeforeOpen: undefined,
  onOpen: undefined,
  onRender: undefined,
  onClose: undefined,
  onAfterClose: undefined,
  scrollbarPadding: true
}

const updatableParams = [
  'title',
  'titleText',
  'text',
  'html',
  'icon',
  'customClass',
  'showConfirmButton',
  'showCancelButton',
  'confirmButtonText',
  'confirmButtonAriaLabel',
  'confirmButtonColor',
  'cancelButtonText',
  'cancelButtonAriaLabel',
  'cancelButtonColor',
  'buttonsStyling',
  'reverseButtons',
  'imageUrl',
  'imageWidth',
  'imageHeight',
  'imageAlt',
  'progressSteps',
  'currentProgressStep'
]

const deprecatedParams = {
  animation: 'showClass" and "hideClass',
}

const toastIncompatibleParams = [
  'allowOutsideClick',
  'allowEnterKey',
  'backdrop',
  'focusConfirm',
  'focusCancel',
  'heightAuto',
  'keydownListenerCapture'
]

/**
 * Is valid parameter
 * @param {String} paramName
 */
const isValidParameter = (paramName) => {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName)
}

/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */
const isUpdatableParameter = (paramName) => {
  return updatableParams.indexOf(paramName) !== -1
}

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
const isDeprecatedParameter = (paramName) => {
  return deprecatedParams[paramName]
}

const checkIfParamIsValid = (param) => {
  if (!isValidParameter(param)) {
    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Unknown parameter "${param}"`)
  }
}

const checkIfToastParamIsValid = (param) => {
  if (toastIncompatibleParams.includes(param)) {
    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["warn"])(`The parameter "${param}" is incompatible with toasts`)
  }
}

const checkIfParamIsDeprecated = (param) => {
  if (isDeprecatedParameter(param)) {
    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["warnAboutDepreation"])(param, isDeprecatedParameter(param))
  }
}

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
const showWarningsForParams = (params) => {
  for (const param in params) {
    checkIfParamIsValid(param)

    if (params.toast) {
      checkIfToastParamIsValid(param)
    }

    checkIfParamIsDeprecated(param)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (defaultParams);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/scrollbarFix.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/scrollbarFix.js ***!
  \************************************************************/
/*! exports provided: fixScrollbar, undoScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixScrollbar", function() { return fixScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoScrollbar", function() { return undoScrollbar; });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const fixScrollbar = () => {
  // for queues, do not do this more than once
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding !== null) {
    return
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'))
    document.body.style.paddingRight = `${_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding + _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["measureScrollbar"]()}px`
  }
}

const undoScrollbar = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding !== null) {
    document.body.style.paddingRight = `${_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding}px`
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__["states"].previousBodyPadding = null
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/setParameters.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/setParameters.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setParameters; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultInputValidators.js */ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js");




function setDefaultInputValidators (params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(_defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__["default"]).forEach((key) => {
      if (params.input === key) {
        params.inputValidator = _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__["default"][key]
      }
    })
  }
}

function validateCustomTargetElement (params) {
  // Determine if the custom target element is valid
  if (
    !params.target ||
    (typeof params.target === 'string' && !document.querySelector(params.target)) ||
    (typeof params.target !== 'string' && !params.target.appendChild)
  ) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["warn"])('Target parameter is not valid, defaulting to "body"')
    params.target = 'body'
  }
}

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters (params) {
  setDefaultInputValidators(params)

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["warn"])(
      'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
      'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
      'https://sweetalert2.github.io/#ajax-request'
    )
  }

  // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function
  params.animation = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["callIfFunction"])(params.animation)

  validateCustomTargetElement(params)

  // Replace newlines with <br> in title
  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />')
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__["init"](params)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/utils.js ***!
  \*****************************************************/
/*! exports provided: consolePrefix, uniqueArray, capitalizeFirstLetter, objectValues, toArray, warn, error, warnOnce, warnAboutDepreation, callIfFunction, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consolePrefix", function() { return consolePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueArray", function() { return uniqueArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectValues", function() { return objectValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return warnOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnAboutDepreation", function() { return warnAboutDepreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callIfFunction", function() { return callIfFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
const consolePrefix = 'SweetAlert2:'

/**
 * Filter the unique values into a new array
 * @param arr
 */
const uniqueArray = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}

/**
 * Capitalize the first letter of a string
 * @param str
 */
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Returns the array ob object values (Object.values isn't supported in IE11)
 * @param obj
 */
const objectValues = (obj) => Object.keys(obj).map(key => obj[key])

/**
 * Convert NodeList to Array
 * @param nodeList
 */
const toArray = (nodeList) => Array.prototype.slice.call(nodeList)

/**
 * Standardise console warnings
 * @param message
 */
const warn = (message) => {
  console.warn(`${consolePrefix} ${message}`)
}

/**
 * Standardise console errors
 * @param message
 */
const error = (message) => {
  console.error(`${consolePrefix} ${message}`)
}

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
const previousWarnOnceMessages = []

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
const warnOnce = (message) => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message)
    warn(message)
  }
}

/**
 * Show a one-time console warning about deprecated params/methods
 */
const warnAboutDepreation = (deprecatedParam, useInstead) => {
  warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`)
}

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
const callIfFunction = (arg) => typeof arg === 'function' ? arg() : arg

const isPromise = (arg) => arg && Promise.resolve(arg) === arg


/***/ })

}]);