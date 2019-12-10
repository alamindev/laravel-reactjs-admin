(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/Src/Components/Checkbox/CheckboxComponent.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Src/Components/Checkbox/CheckboxComponent.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Apply the indeterminate attribute of the checkbox input
      this.selector.indeterminate = this.props.indeterminate;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.indeterminate !== this.props.indeterminate) {
        this.selector.indeterminate = this.props.indeterminate;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          checkeds = _this$props.checkeds,
          type = _this$props.type,
          indeterminate = _this$props.indeterminate,
          hasError = _this$props.hasError,
          inputProps = _objectWithoutProperties(_this$props, ["id", "label", "checkeds", "type", "indeterminate", "hasError"]);

      var checkboxClassname = "\n        m-checkbox\n        ".concat(type === 'switch' && 'm-checkbox--switch', "\n        ").concat(hasError && 'm-checkbox--has-error', "\n      ");
      var inputClassname = "\n        m-checkbox__input\n        ".concat(type === 'switch' && 'm-checkbox--switch__input', "\n        ").concat(hasError && 'm-checkbox--has-error__input', "\n      ");
      var labelClassname = "\n        m-checkbox__label\n        ".concat(type === 'switch' && 'm-checkbox--switch__label', "\n      ");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: checkboxClassname
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
        type: "checkbox",
        className: inputClassname,
        ref: function ref(el) {
          return _this.selector = el;
        },
        checked: checkeds,
        id: id
      }, inputProps)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: labelClassname,
        htmlFor: id
      }, label));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Checkbox, "propTypes", {
  hasError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  indeterminate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['default', 'switch'])
});

_defineProperty(Checkbox, "defaultProps", {
  hasError: false,
  indeterminate: undefined,
  type: 'default'
});

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./resources/js/Src/Partials/PageHeader.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Src/Partials/PageHeader.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



function PageHeader(props) {
  var TitleIcon = props.TitleIcon,
      TitleIconName = props.TitleIconName,
      HeaderTitle = props.HeaderTitle,
      ButtonTitle = props.ButtonTitle,
      LinkName = props.LinkName,
      IconClass = props.IconClass,
      IconName = props.IconName;
  var button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-dark btn-outline-black text-secondary"
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: IconClass,
    name: IconName
  }), "\xA0 ", ButtonTitle);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card block-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body p-2 d-md-flex d-sm-block justify-content-between align-items-center text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "text-capitalize m-0"
  }, TitleIconName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: TitleIcon,
    name: TitleIconName
  }), HeaderTitle), ButtonTitle && LinkName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: LinkName
  }, " ", button, " ") || LinkName && {
    button: button
  }));
}

/***/ }),

/***/ "./resources/js/Src/Store/Actions/RoleAction.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Src/Store/Actions/RoleAction.jsx ***!
  \*******************************************************/
/*! exports provided: fetchDatabaseTable, btnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDatabaseTable", function() { return fetchDatabaseTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnClick", function() { return btnClick; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./resources/js/Src/Store/Actions/Types.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var fetchDatabaseTable = function fetchDatabaseTable(user) {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/database").then(function (res) {
      dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["role"].DATABASE_TABLE,
        payload: res.data
      });
      dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["role"].ROLEERROR,
        payload: {}
      });
    })["catch"](function (errors) {
      console.log(errors);

      if (errors.response) {// dispatch({
        //     type: role.ROLEERROR,
        //     payload: errors.response.data.errors
        // }); 
      }
    });
  };
};
var btnClick = function btnClick() {
  return {
    type: _Types__WEBPACK_IMPORTED_MODULE_0__["role"].GET_DOG,
    payload: fetch('http://dummy.restapiexample.com/api/v1/employees').then(function (response) {
      return response.json();
    })
  };
};

/***/ }),

/***/ "./resources/js/Src/Utils/Helper.jsx":
/*!*******************************************!*\
  !*** ./resources/js/Src/Utils/Helper.jsx ***!
  \*******************************************/
/*! exports provided: history, InputField, ReactSelect, Sweetalert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactSelect", function() { return ReactSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sweetalert", function() { return Sweetalert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 *
 * @param {create browser history} props
 */

var history = Object(history__WEBPACK_IMPORTED_MODULE_4__["createBrowserHistory"])();
function InputField(props) {
  var Type = props.Type,
      Required = props.Required,
      Name = props.Name,
      Id = props.Id,
      ClassName = props.ClassName,
      Hendler = props.Hendler,
      Placeholder = props.Placeholder,
      Value = props.Value,
      Label = props.Label,
      input = _objectWithoutProperties(props, ["Type", "Required", "Name", "Id", "ClassName", "Hendler", "Placeholder", "Value", "Label"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-control-label"
  }, Label, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, Required)), Type != "textarea" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: Type,
    placeholder: Placeholder,
    className: "form-control " + ClassName,
    name: Name,
    onChange: Hendler,
    value: Value
  }, input)), Type == "textarea" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    className: "form-control " + ClassName,
    name: Name,
    onChange: Hendler
  }, input, {
    defaultValue: Value
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "v-if": props.errors,
    className: "invalid-feedback dev__invalid"
  }, props.errors)));
}
/*
 * start coding for
 * React Select with props
 */

var dot = function dot() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#777";
  return {
    alignItems: "center",
    display: "flex",
    ":before": {
      backgroundColor: "transparent",
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10
    }
  };
};

var colourStyles = {
  control: function control(styles) {
    return _objectSpread({}, styles, {
      backgroundColor: "#2d3035",
      borderColor: "#777"
    });
  },
  menu: function menu(styles) {
    return _objectSpread({}, styles, {
      backgroundColor: "#2d3035"
    });
  },
  option: function option(styles, _ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    return _objectSpread({}, styles, {
      backgroundColor: isDisabled ? "#2d3035" : isSelected ? "#343a40" : isFocused ? "#23272b" : "#2d3035",
      color: isDisabled ? "#343a40" : isSelected ? "#777" ? "#777" : undefined : "#777",
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": _objectSpread({}, styles[":active"], {
        backgroundColor: !isDisabled && (isSelected ? "#777" : "#777")
      })
    });
  },
  indicatorSeparator: function indicatorSeparator(styles) {
    return _objectSpread({}, styles, {
      backgroundColor: "#777"
    });
  },
  input: function input(styles) {
    return _objectSpread({}, styles, {}, dot(), {
      color: "#777"
    });
  },
  placeholder: function placeholder(styles) {
    return _objectSpread({}, styles, {}, dot());
  },
  singleValue: function singleValue(styles, _ref2) {
    var data = _ref2.data;
    return _objectSpread({}, styles, {}, dot(), {
      color: "#777"
    });
  }
};
function ReactSelect(props) {
  var Value = props.Value,
      Name = props.Name,
      ChangeSelect = props.ChangeSelect,
      Placeholder = props.Placeholder,
      Options = props.Options,
      Label = props.Label,
      Require = props.Require,
      isDisabled = props.isDisabled;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: Name
  }, Label, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, Require)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: Value,
    onChange: ChangeSelect,
    options: Options,
    styles: colourStyles,
    placeholder: Placeholder,
    name: Name,
    isDisabled: isDisabled
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "v-if": props.errors,
    className: "invalid-feedback dev__invalid"
  }, props.errors));
}
var Sweetalert = function Sweetalert(callback) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Are  You Sure?";
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "You won't be able to revert this!";
  var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "warning";
  var successbtn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Delete";
  var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()(sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var sweetalert = MySwal.mixin({
    customClass: {
      confirmButton: 'btn custom_success_btn',
      cancelButton: 'btn custom_cancel_btn'
    },
    buttonsStyling: false
  });
  sweetalert.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonText: successbtn,
    cancelButtonText: 'Cancel',
    reverseButtons: true
  }).then(function (result) {
    return callback(sweetalert, result);
  });
};

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