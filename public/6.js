(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/Src/Components/PermissionPage/Basic.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/Src/Components/PermissionPage/Basic.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Basic; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/Helper */ "./resources/js/Src/Utils/Helper.jsx");


function Basic(props) {
  var handleChange = props.handleChange,
      slug = props.slug,
      name = props.name,
      description = props.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mt-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["InputField"], {
    Label: "Name (Human Readable)",
    Required: "*",
    Type: "text",
    Placeholder: "Example: Create Table",
    onChange: handleChange,
    value: name,
    name: "name",
    id: "name",
    errors: props.errors.name
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["InputField"], {
    Label: "Slug (Cant Not be changed and always lower case and dash) ",
    Required: "*",
    Type: "text",
    Placeholder: "Example: create-table",
    onChange: handleChange,
    value: slug,
    name: "slug",
    id: "slug",
    errors: props.errors.slug
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["InputField"], {
    Label: "Description (Optional) ",
    Required: "*",
    Type: "textarea",
    Placeholder: "Example: create-table",
    onChange: handleChange,
    value: description,
    name: "description",
    id: "description"
  }))));
}

/***/ }),

/***/ "./resources/js/Src/Components/PermissionPage/Crud.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Src/Components/PermissionPage/Crud.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Crud; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/Helper */ "./resources/js/Src/Utils/Helper.jsx");
/* harmony import */ var _Checkbox_CheckboxComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Checkbox/CheckboxComponent */ "./resources/js/Src/Components/Checkbox/CheckboxComponent.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Crud(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    checkboxes: [{
      id: 1,
      label: "index",
      checked: true
    }, {
      id: 2,
      label: "create",
      checked: true
    }, {
      id: 3,
      label: "read",
      checked: true
    }, {
      id: 4,
      label: "update",
      checked: true
    }, {
      id: 5,
      label: "delete",
      checked: true
    }]
  }),
      _useState2 = _slicedToArray(_useState, 2),
      crudSelect = _useState2[0],
      setcrudSelect = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    value: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      tableName = _useState4[0],
      setTableName = _useState4[1];

  var toggleCheckBox = function toggleCheckBox(toggledIndex) {
    props.Referance.current.state.errors.permission = '';
    setcrudSelect(function (prevState) {
      return {
        checkboxes: prevState.checkboxes.map(function (checkbox, index) {
          if (index === toggledIndex) {
            return _objectSpread({}, checkbox, {
              checked: !checkbox.checked
            });
          } else {
            return _objectSpread({}, checkbox);
          }
        })
      };
    });
  };

  var CrudSelect = function CrudSelect() {
    return crudSelect.checkboxes.map(function (check) {
      if (check.checked) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: Math.random()
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, crudName(check.label), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, crudSlug(check.label), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, crudDescription(check.label), " "));
      }
    });
  };

  var CheckboxHendle = function CheckboxHendle() {
    return crudSelect.checkboxes.map(function (checkbox, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox_CheckboxComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: Math.random(),
        id: checkbox.label,
        label: checkbox.label,
        name: "crudSelect",
        onChange: function onChange() {
          return toggleCheckBox(index);
        },
        value: checkbox.label,
        checkeds: checkbox.checked && "checked"
      });
    });
  };

  var crudName = function crudName(item) {
    var table = tableName.value;
    return item.substr(0, 1).toUpperCase() + item.substr(1) + " " + table.substr(0, 1).toUpperCase() + table.substr(1);
  };

  var crudSlug = function crudSlug(item) {
    var table = tableName.value;
    return item.toLowerCase() + "-" + table.toLowerCase();
  };

  var crudDescription = function crudDescription(item) {
    var table = tableName.value;
    return "Allow a User to " + item.toUpperCase() + " a " + table.substr(0, 1).toUpperCase() + table.substr(1);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var checkVal = _.filter(crudSelect.checkboxes, function (o) {
      return o.checked;
    });

    checkVal = _.map(checkVal, "label");
    props.Referance.current.initialValues = _objectSpread({}, props.Referance.current.initialValues, {
      crudName: tableName,
      permission: checkVal
    });
  }, [crudSelect, tableName]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var value = props.name;
    setTableName(_objectSpread({}, tableName, {
      value: value
    }));
  }, [props.name]);
  var handleChange = props.handleChange,
      table_name = props.table_name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mt-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["InputField"], {
    Label: "Table Name",
    Required: "(Required)",
    Type: "text",
    Placeholder: " Write Your Table name",
    onChange: handleChange,
    value: table_name,
    name: "table_name",
    id: "table_name",
    errors: props.errors.table_name
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4"
  }, CheckboxHendle(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "v-if": props.errors.permission,
    className: "invalid-feedback dev__invalid"
  }, props.errors.permission)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8"
  }, tableName.value.length >= 3 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Slug"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Description"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, CrudSelect())))))));
}

/***/ }),

/***/ "./resources/js/Src/Pages/Auth/Permission/CreatePermission.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Src/Pages/Auth/Permission/CreatePermission.jsx ***!
  \*********************************************************************/
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
/* harmony import */ var _Components_PermissionPage_Basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components/PermissionPage/Basic */ "./resources/js/Src/Components/PermissionPage/Basic.jsx");
/* harmony import */ var _Components_PermissionPage_Crud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Components/PermissionPage/Crud */ "./resources/js/Src/Components/PermissionPage/Crud.jsx");
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils/Helper */ "./resources/js/Src/Utils/Helper.jsx");
/* harmony import */ var _Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Utils/Scrollbar */ "./resources/js/Src/Utils/Scrollbar.jsx");
/* harmony import */ var _Store_Actions_RoleAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Store/Actions/RoleAction */ "./resources/js/Src/Store/Actions/RoleAction.jsx");
/* harmony import */ var _Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Store/Actions/PermissionAction */ "./resources/js/Src/Store/Actions/PermissionAction.jsx");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux-toastr */ "./node_modules/react-redux-toastr/lib/index.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utils_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Utils/Loader */ "./resources/js/Src/Utils/Loader.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FontAwesome = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");












var CreatePermission =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreatePermission, _React$Component);

  function CreatePermission(props) {
    var _this;

    _classCallCheck(this, CreatePermission);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreatePermission).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "SelectChange", function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      _this.formikRef.current.initialValues = _objectSpread({}, _this.formikRef.current.initialValues, {
        selectVal: selectedOption
      });
      _this.formikRef.current.state.errors.table = "";
    });

    _this.state = {
      permission_type: "crud",
      selectedOption: null,
      options: [],
      showing: false
    };
    _this.formikRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.changeParmissionType = _this.changeParmissionType.bind(_assertThisInitialized(_this));
    _this.SelectChange = _this.SelectChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CreatePermission, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "Add New Permission";
      this.fetchDatabase();
    }
  }, {
    key: "fetchDatabase",
    value: function fetchDatabase() {
      var _this2 = this;

      this.props.DataBaseTable().then(function () {
        var tables = _this2.props.database.tables;

        _this2.setState({
          options: tables
        });

        _this2.setState({
          showing: true
        });
      });
    }
  }, {
    key: "changeParmissionType",
    value: function changeParmissionType(e) {
      this.setState({
        permission_type: e.target.value
      });
      this.formikRef.current.state.values.name = "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var validationShape;

      if (this.state.permission_type !== "crud") {
        validationShape = {
          name: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required("Please Enter Permission Display Name")
        };
      } else {
        validationShape = {
          table_name: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required("Please Write database table name")
        };
      }

      var selectedOption = this.state.selectedOption;

      if (this.state.showing) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-lg-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Partials_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
          LinkName: "/permissions",
          HeaderTitle: "Add New Permission",
          ButtonTitle: "Back",
          IconClass: "fas fa-caret-left",
          IconName: "caret-left"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
          ref: this.formikRef,
          initialValues: {
            name: "",
            table_name: "",
            slug: "",
            description: ""
          },
          enableReinitialize: true,
          validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape(validationShape),
          onSubmit: function onSubmit(values, actions) {
            var initialValue = _this3.formikRef.current.initialValues;
            var val = initialValue.selectVal;
            var table = val.value;
            var permission_type = _this3.state.permission_type;

            if (typeof val === "undefined") {
              actions.setErrors({
                table: "Please Select a table for permission"
              });
              return;
            }

            if (_this3.state.permission_type !== "basic") {
              var permission = initialValue.permission;

              if (!permission || !permission.length) {
                actions.setErrors({
                  permission: "Please Check any one checkbox"
                });
                return;
              }

              var table_name = values.table_name;
              var newVal = {
                table: table,
                table_name: table_name,
                permission: permission,
                permission_type: permission_type
              };

              _this3.props.addPermission(newVal, function (res) {
                if (res.status == 409) {
                  react_redux_toastr__WEBPACK_IMPORTED_MODULE_12__["toastr"].error('ERROR', res.data.errors);
                } else if (res.status == 201) {
                  _this3.props.history.push('/permissions');

                  react_redux_toastr__WEBPACK_IMPORTED_MODULE_12__["toastr"].success('SUCCESS', res.data.success);
                }
              });
            } else {
              if (values.slug === "") {
                actions.setErrors({
                  slug: "Please enter Permission Slug Name"
                });
                return;
              }

              var _newVal = _objectSpread({
                table: table,
                permission_type: permission_type
              }, values);

              _this3.props.addPermission(_newVal, function (res) {
                if (res.status == 409) {
                  react_redux_toastr__WEBPACK_IMPORTED_MODULE_12__["toastr"].error('ERROR', res.data.errors);
                } else if (res.status == 201) {
                  _this3.props.history.push('/permissions');

                  react_redux_toastr__WEBPACK_IMPORTED_MODULE_12__["toastr"].success('SUCCESS', res.data.success);
                }
              });
            }
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
            className: "card-header"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "basic_or_crud d-flex justify-start"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "basic"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "radio",
            id: "basic",
            name: "permission_type",
            onChange: _this3.changeParmissionType,
            value: "basic",
            checked: _this3.state.permission_type === "basic"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "basic"
          }, "Basic Permission")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "crud pl-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "radio",
            id: "crud",
            name: "permission_type",
            onChange: _this3.changeParmissionType,
            value: "crud",
            checked: _this3.state.permission_type === "crud"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "crud"
          }, "CRUD Permission")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "card-body"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["ReactSelect"], {
            Label: "Select Database Table",
            Require: "(Required)",
            Value: selectedOption,
            ChangeSelect: _this3.SelectChange,
            Options: _this3.state.options,
            Placeholder: "Select Database Table...",
            errors: props.errors.table
          }), _this3.state.permission_type === "basic" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_PermissionPage_Basic__WEBPACK_IMPORTED_MODULE_6__["default"], {
            errors: props.errors,
            slug: props.values.slug,
            name: props.values.name,
            description: props.values.description,
            handleChange: props.handleChange
          }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_PermissionPage_Crud__WEBPACK_IMPORTED_MODULE_7__["default"], {
            errors: props.errors,
            name: props.values.table_name,
            handleChange: props.handleChange,
            Referance: _this3.formikRef
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "card-footer"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            type: "submit",
            className: "btn btn-dark"
          }, "Submit"))))));
        })));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex justify-content-center align-items-center h-100"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Loader__WEBPACK_IMPORTED_MODULE_13__["Loading"], null));
      }
    }
  }]);

  return CreatePermission;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    database: state.role.database
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    DataBaseTable: function DataBaseTable() {
      return dispatch(Object(_Store_Actions_RoleAction__WEBPACK_IMPORTED_MODULE_10__["fetchDatabaseTable"])());
    },
    addPermission: function addPermission(permissions, callback) {
      return dispatch(Object(_Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_11__["addPermission"])(permissions, callback));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(CreatePermission)));

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

/***/ })

}]);