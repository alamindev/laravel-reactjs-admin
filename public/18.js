(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/Src/Components/Datatable/Datatable.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Src/Components/Datatable/Datatable.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Datatable; });
!(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react-data-table-component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var FilterComponent = function FilterComponent(_ref) {
  var filterText = _ref.filterText,
      onFilter = _ref.onFilter,
      onClear = _ref.onClear;
  var datatable_search_input = {
    border: "1px solid #3c3c3c",
    background: "#252525",
    color: "#fff",
    padding: "5px",
    borderRadius: "5px 0px 0 5px"
  };
  var datatable_search_btn = {
    padding: "5px 14px",
    borderRadius: "0px 5px 5px 0px",
    border: "none",
    background: "#444444"
  };
  return !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("input", {
    id: "search",
    type: "text",
    style: datatable_search_input,
    placeholder: "Filter By Name",
    value: filterText,
    onChange: onFilter
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("button", {
    onClick: onClear,
    style: datatable_search_btn
  }, "X"));
};

function Datatable(props) {
  !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    var all = document.querySelector(".data_table_all_class").getElementsByTagName("*");

    for (var i = 0; i < all.length - 1; i++) {
      all[i].classList.add("text-secondary");
    }
  });

  var _React$useState = !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      filterText = _React$useState2[0],
      setFilterText = _React$useState2[1];

  var _React$useState3 = !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      resetPaginationToggle = _React$useState4[0],
      setResetPaginationToggle = _React$useState4[1];

  var filteredItems = props.data.filter(function (item) {
    return item.name && item.name.includes(filterText);
  });
  var subHeaderComponentMemo = !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).useMemo(function () {
    var handleClear = function handleClear() {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(FilterComponent, {
      onFilter: function onFilter(e) {
        return setFilterText(e.target.value);
      },
      onClear: handleClear,
      filterText: filterText
    });
  }, [filterText, resetPaginationToggle]);
  return !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module './node_modules/react-data-table-component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    columns: props.columns,
    data: filteredItems,
    className: "data_table_all_class",
    fixedHeader: true,
    pagination: true,
    paginationResetDefaultPage: resetPaginationToggle,
    subHeader: true,
    subHeaderComponent: subHeaderComponentMemo,
    persistTableHead: true,
    dense: true
  }));
}

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