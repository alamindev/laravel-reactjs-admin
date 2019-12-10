(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/Src/Pages/index.jsx":
/*!******************************************!*\
  !*** ./resources/js/Src/Pages/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/Scrollbar */ "./resources/js/Src/Utils/Scrollbar.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "Dashboard";
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        width: '100%'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "no-padding-top no-padding-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistic-block block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-details d-flex align-items-end justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-user-1"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "New Clients")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number dashtext-1"
      }, "27")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress progress-template"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        role: "progressbar",
        style: style,
        "aria-valuenow": "30",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        className: "progress-bar progress-bar-template dashbg-1"
      }))))))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(App));

/***/ }),

/***/ "./resources/js/Src/Utils/Scrollbar.jsx":
/*!**********************************************!*\
  !*** ./resources/js/Src/Utils/Scrollbar.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadScrollbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);


function LoadScrollbar(props) {
  var dev_slimscrioll = 'home_scroll';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      overflowX: 'hidden'
    },
    className: dev_slimscrioll
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "dev_main_slimscroll",
    className: "dev-main-section"
  }, props.children));
}

/***/ })

}]);