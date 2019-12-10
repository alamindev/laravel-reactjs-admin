(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/Src/Components/Modal/BsModal.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Src/Components/Modal/BsModal.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var BsModal = function BsModal(props) {
  var children = props.children,
      FooterBtnTxt = props.FooterBtnTxt,
      FooterBtnCancel = props.FooterBtnCancel,
      Title = props.Title,
      className = props.className,
      ButtonLabel = props.ButtonLabel;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: props.btnClassName,
    onClick: props.onClick()
  }, ButtonLabel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: props.Modal,
    toggle: props.onClick(),
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: props.onClick()
  }, Title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: props.SubmitData()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    color: "primary"
  }, FooterBtnTxt), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "button",
    color: "secondary",
    onClick: props.onClick()
  }, FooterBtnCancel)))));
};

/* harmony default export */ __webpack_exports__["default"] = (BsModal);

/***/ }),

/***/ "./resources/js/Src/Pages/Auth/Roles/CreateRole.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Src/Pages/Auth/Roles/CreateRole.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_Modal_BsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/Modal/BsModal */ "./resources/js/Src/Components/Modal/BsModal.jsx");
/* harmony import */ var _Components_Checkbox_CheckboxComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Components/Checkbox/CheckboxComponent */ "./resources/js/Src/Components/Checkbox/CheckboxComponent.jsx");
/* harmony import */ var _Store_Actions_RoleAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Store/Actions/RoleAction */ "./resources/js/Src/Store/Actions/RoleAction.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux-loading-bar */ "./node_modules/react-redux-loading-bar/build/index.js");
/* harmony import */ var react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils/Helper */ "./resources/js/Src/Utils/Helper.jsx");
/* harmony import */ var _Partials_PageHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Partials/PageHeader */ "./resources/js/Src/Partials/PageHeader.jsx");
/* harmony import */ var _Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Utils/Scrollbar */ "./resources/js/Src/Utils/Scrollbar.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





var CreateRole =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateRole, _React$Component);

  function CreateRole(props) {
    var _this;

    _classCallCheck(this, CreateRole);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateRole).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "SelectChange", function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      console.log("Option selected:", selectedOption);
    });

    _this.state = {
      modal: false,
      checked: true,
      selectedOption: null,
      options: []
    };
    _this.handleCheck = _this.handleCheck.bind(_assertThisInitialized(_this));
    _this.CheckAll = _this.CheckAll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CreateRole, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchDatabase();
      document.title = "Create New Role";
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
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: "handleCheck",
    value: function handleCheck(e) {
      this.setState({
        checked: e.target.checked
      });
    }
  }, {
    key: "SubmitData",
    value: function SubmitData(e) {
      var _this3 = this;

      e.preventDefault();
      setTimeout(function () {
        _this3.setState({
          modal: false
        });
      }, 1000);
    }
  }, {
    key: "SubmitRoleData",
    value: function SubmitRoleData(e) {
      e.preventDefault();
    }
  }, {
    key: "CheckAll",
    value: function CheckAll(formname, checktoggle) {
      var checkboxes = new Array();
      checkboxes = document[formname].getElementsByTagName('input');

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
          checkboxes[i].checked = checktoggle;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var selectedOption = this.state.selectedOption;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "role-form",
        onSubmit: this.SubmitRoleData
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Partials_PageHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        LinkName: '/roles',
        TitleIcon: "fab fa-plus",
        TitleIconName: "plus",
        HeaderTitle: "Add New Role",
        ButtonTitle: "Back",
        IconClass: "fas fa-caret-left",
        IconName: "caret-left"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-12 col-md-4 col-lg-4 col-xl-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card mt-2 p-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "d-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontAwesome, {
        className: "fas fa-server",
        name: "fa-server"
      }), " Fillup this form"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-body pt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["InputField"], {
        Label: 'Name (Human Readable) *',
        Type: 'text',
        Name: 'display_name',
        Placeholder: 'example:- SupperAdmin'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["InputField"], {
        Label: 'Slug (Cant Not be changed) *',
        Type: 'text',
        Name: 'name',
        Placeholder: 'example:- SupperAdmin'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["InputField"], {
        Label: 'Description (Optional)',
        Type: 'text',
        Name: 'name',
        Placeholder: 'example:- SupperAdmin'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["InputField"], {
        Label: 'Description (Optional)',
        Type: 'textarea',
        Name: 'name',
        Value: 'name'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Save",
        className: "btn btn-dark btn-block text-secondary"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-12 col-md-8 col-lg-8 col-xl-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-danger"
      }, "If You Are Not Show Permission Table click the button below select a table"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Modal_BsModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        btnClassName: 'btn btn-dark text-secondary waves-effect waves-dark btn-block',
        ButtonLabel: 'Add Permission Table',
        ClassName: 'alamin',
        Title: 'this is my modal',
        FooterBtnTxt: 'Save',
        FooterBtnCancel: 'Cancel',
        onClick: function onClick() {
          return _this4.toggle.bind(_this4);
        },
        Modal: this.state.modal,
        SubmitData: function SubmitData() {
          return _this4.SubmitData.bind(_this4);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["ReactSelect"], {
        Value: selectedOption,
        ChangeSelect: this.SelectChange,
        Options: this.state.options,
        Placeholder: 'Select Database...'
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "checkbox",
        className: "check_all"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "border-bottom_custom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "custom_button_1 custom_button_sm mr-2",
        onClick: function onClick() {
          _this4.CheckAll('role-form', true);
        }
      }, "Check all"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "custom_button_2 custom_button_sm",
        onClick: function onClick() {
          _this4.CheckAll('role-form', false);
        }
      }, "Uncheck all")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled d-flex flex-wrap mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "w-50 mb-2 form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "admins"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        htmlFor: "permission",
        className: " text-muted"
      }, " Permission ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-primary"
      }, "admins"), " Table"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#admins",
        className: "btn btn-outline-success waves-effect waves-light btn-sm mr-3",
        id: "checkall",
        "data-toggle": "checkboxes",
        "data-action": "check"
      }, "check"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#admins",
        className: "btn btn-outline-warning  waves-effect waves-light btn-sm",
        id: "checkall",
        "data-toggle": "checkboxes",
        "data-action": "uncheck"
      }, "uncheck")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "i-checks"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "1",
        type: "checkbox",
        className: "checkbox-template",
        name: "permission[]",
        value: "1",
        "data-parsley-multiple": "permission",
        "data-parsley-id": "11"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "1"
      }, "Index Admins ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "i-checks"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "2",
        type: "checkbox",
        className: "checkbox-template",
        name: "permission[]",
        value: "2",
        "data-parsley-multiple": "permission"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "2"
      }, "Create Admins ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "i-checks"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Checkbox_CheckboxComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        checked: this.state.checked,
        onChange: this.handleCheck,
        id: "unchecked",
        label: "read admins",
        name: "checkbox"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "3"
      }, "Read Admins ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "i-checks"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "4",
        type: "checkbox",
        className: "checkbox-template",
        name: "permission[]",
        value: "4",
        "data-parsley-multiple": "permission"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "4"
      }, "Update Admins ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "i-checks"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "5",
        type: "checkbox",
        className: "checkbox-template",
        name: "permission[]",
        value: "5",
        "data-parsley-multiple": "permission"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "5"
      }, "Delete Admins ")))))))))))))));
    }
  }]);

  return CreateRole;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    database: state.role.database
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    DataBaseTable: function DataBaseTable() {
      return dispatch(Object(_Store_Actions_RoleAction__WEBPACK_IMPORTED_MODULE_4__["fetchDatabaseTable"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(CreateRole)));

/***/ })

}]);