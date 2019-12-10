(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/Src/Pages/Auth/Permission/EditPermission.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Src/Pages/Auth/Permission/EditPermission.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Partials_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Partials/PageHeader */ "./resources/js/Src/Partials/PageHeader.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Utils/Scrollbar */ "./resources/js/Src/Utils/Scrollbar.jsx");
/* harmony import */ var _Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Store/Actions/PermissionAction */ "./resources/js/Src/Store/Actions/PermissionAction.jsx");
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils/Helper */ "./resources/js/Src/Utils/Helper.jsx");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-toastr */ "./node_modules/react-redux-toastr/lib/index.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Utils_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Utils/Loader */ "./resources/js/Src/Utils/Loader.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var editPermission =
/*#__PURE__*/
function (_React$Component) {
  _inherits(editPermission, _React$Component);

  function editPermission(props) {
    var _this;

    _classCallCheck(this, editPermission);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(editPermission).call(this, props));
    _this.state = {
      data: {
        table: "",
        name: "",
        slug: "",
        description: ""
      },
      showing: false
    };
    return _this;
  }

  _createClass(editPermission, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.title = "edit Permission";
      this.props.permissionEdit(this.props.match.params.id).then(function () {
        var permission = _this2.props.edit_id;

        _this2.setState({
          data: {
            table: permission.per_table,
            name: permission.display_name,
            slug: permission.name,
            description: permission.description
          }
        });

        _this2.setState({
          showing: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.showing) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-lg-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Partials_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
          LinkName: "/permissions",
          HeaderTitle: "Edit Permission",
          ButtonTitle: "Back",
          IconClass: "fas fa-caret-left",
          IconName: "caret-left"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
          ref: this.formikRef,
          initialValues: this.state.data,
          validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
            name: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required("Please Enter your Permission Name")
          }),
          enableReinitialize: true,
          onSubmit: function onSubmit(values, actions) {
            _this3.props.updatePermission(_this3.props.match.params.id, values, function (res) {
              if (res.status == 200) {
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_9__["toastr"].success('UPDATED', res.data.success);
                actions.setSubmitting(false);

                _this3.props.history.push('/permissions');
              }
            });
          }
        }, function (props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
            onSubmit: props.handleSubmit
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row mt-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-lg-12"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "card"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "card-body"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["InputField"], {
            Label: "Can't Change table name",
            Type: "text",
            value: props.values.table,
            name: "table",
            id: "table",
            disabled: true
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["InputField"], {
            Label: "Name (Human Readable)",
            Required: "*",
            Type: "text",
            Placeholder: "Example: Create Table",
            onChange: props.handleChange,
            value: props.values.name,
            name: "name",
            id: "name",
            errors: props.errors.name
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["InputField"], {
            Label: "Slug (Cant Not be changed and always lower case and dash) ",
            Type: "text",
            onChange: props.handleChange,
            value: props.values.slug,
            name: "slug",
            id: "slug",
            disabled: true
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["InputField"], {
            Label: "Description (Optional)",
            Type: "textarea",
            onChange: props.handleChange,
            value: props.values.description,
            name: "description",
            id: "description"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "card-footer"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            type: "submit",
            className: "btn btn-dark",
            disabled: props.isSubmitting
          }, !props.isSubmitting && "Update", props.isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Loader__WEBPACK_IMPORTED_MODULE_10__["Loader"], null)))))));
        })));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex justify-content-center align-items-center h-100"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Loader__WEBPACK_IMPORTED_MODULE_10__["Loading"], null));
      }
    }
  }]);

  return editPermission;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    edit_id: state.permission.permission
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    permissionEdit: function permissionEdit(id) {
      return dispatch(Object(_Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_7__["permissionEdit"])(id));
    },
    updatePermission: function updatePermission(id, data, callback) {
      return dispatch(Object(_Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_7__["updatePermission"])(id, data, callback));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(editPermission)));

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

/***/ "./resources/js/Src/Store/Actions/PermissionAction.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Src/Store/Actions/PermissionAction.jsx ***!
  \*************************************************************/
/*! exports provided: fetchPermissions, addPermission, getPermissionByid, permissionEdit, updatePermission, deletePermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPermissions", function() { return fetchPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPermission", function() { return addPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPermissionByid", function() { return getPermissionByid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionEdit", function() { return permissionEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePermission", function() { return updatePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePermission", function() { return deletePermission; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./resources/js/Src/Store/Actions/Types.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var fetchPermissions = function fetchPermissions() {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/permission").then(function (res) {
      dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["permission"].GET_PERMISSION,
        payload: res.data
      });
    })["catch"](function (errors) {
      if (errors.response) {
        console.log(errors.response);
      }
    });
  };
};
var addPermission = function addPermission(permissions, callback) {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/v1/permission", permissions).then(function (res) {
      dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["permission"].ADD_PERMISSION,
        payload: res.data
      });
      callback(res);
    })["catch"](function (errors) {
      if (errors.response) {
        callback(errors.response);
      }
    });
  };
};
var getPermissionByid = function getPermissionByid(id) {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/permission/" + id).then(function (res) {
      dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["permission"].PERMISSION_BY_ID,
        payload: res.data
      });
    })["catch"](function (errors) {
      if (errors.response) {
        console.log(errors.response);
      }
    });
  };
};
var permissionEdit = function permissionEdit(id) {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/permission/" + id + "/edit").then(function (res) {
      dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["permission"].EDIT_PERMISSION,
        payload: res.data
      });
    })["catch"](function (errors) {
      if (errors.response) {
        console.log(errors.response);
      }
    });
  };
};
var updatePermission = function updatePermission(id, values, callback) {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/v1/permission/" + id, values).then(function (res) {
      dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["permission"].UPDATE_PERMISSION,
        payload: res.data
      });
      callback(res);
    })["catch"](function (errors) {
      if (errors.response) {
        callback(errors.response);
      }
    });
  };
};
var deletePermission = function deletePermission(id, callback) {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/api/v1/permission/".concat(id)).then(function (res) {
      dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["permission"].DELETE_PERMISSION,
        payload: res.data.id
      });
      callback(res);
    })["catch"](function (errors) {
      if (errors.response) {
        console.log(errors.response);
      }
    });
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