(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./resources/js/Src/Components/RegisterPage/Form.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Src/Components/RegisterPage/Form.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Form = function Form(props) {
  var _React$createElement, _React$createElement2;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-body"
  }, props.errors.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-control-label"
  }, "Full Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "write your full name",
    className: props.errors.name ? 'form-control is-invalid' : 'form-control',
    name: "name",
    value: props.name,
    onChange: props.changeHandler
  }), props.errors.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, props.errors.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-control-label"
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Example:- example@gmail.com",
    className: props.errors.email ? 'form-control is-invalid' : 'form-control',
    name: "email",
    value: props.email,
    onChange: props.changeHandler
  }), props.errors.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, props.errors.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-control-label"
  }, "Phone (optional)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    placeholder: "",
    className: "form-control",
    name: "phone",
    value: props.phone,
    onChange: props.changeHandler
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-control-label"
  }, "Address (optional)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "form-control",
    name: "address",
    id: "",
    cols: "20",
    rows: "2",
    value: props.address,
    onChange: props.changeHandler
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-control-label"
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", (_React$createElement = {
    type: "password",
    placeholder: "******",
    name: "password",
    className: props.errors.password ? 'form-control is-invalid' : 'form-control'
  }, _defineProperty(_React$createElement, "name", "password"), _defineProperty(_React$createElement, "value", props.password), _defineProperty(_React$createElement, "onChange", props.changeHandler), _React$createElement)), props.errors.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, props.errors.password)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-control-label"
  }, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", (_React$createElement2 = {
    type: "password",
    name: "password_confirmation",
    placeholder: "*****",
    className: props.errors.c_password ? 'form-control is-invalid' : 'form-control'
  }, _defineProperty(_React$createElement2, "name", "c_password"), _defineProperty(_React$createElement2, "value", props.c_password), _defineProperty(_React$createElement2, "onChange", props.changeHandler), _React$createElement2)), props.errors.c_password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, props.errors.c_password)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-dark btn-block"
  }, "Submit"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/js/Src/Components/RegisterPage/PhotoUpload.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/Src/Components/RegisterPage/PhotoUpload.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_avatar_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-avatar-edit */ "./node_modules/react-avatar-edit/lib/react-avatar.js");
/* harmony import */ var react_avatar_edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_avatar_edit__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var PhotoUpload = function PhotoUpload(props) {
  var _React$createElement;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_avatar_edit__WEBPACK_IMPORTED_MODULE_1___default.a, (_React$createElement = {
    width: props.width
  }, _defineProperty(_React$createElement, "width", props.height), _defineProperty(_React$createElement, "onCrop", props.onCrop), _defineProperty(_React$createElement, "onClose", props.onClose), _defineProperty(_React$createElement, "onBeforeFileLoad", props.onBeforeFileLoad), _defineProperty(_React$createElement, "src", props.src), _React$createElement))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image__main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.preview,
    alt: "Preview"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoUpload);

/***/ }),

/***/ "./resources/js/Src/Pages/Auth/Register/Register.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Src/Pages/Auth/Register/Register.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_avatar_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-avatar-edit */ "./node_modules/react-avatar-edit/lib/react-avatar.js");
/* harmony import */ var react_avatar_edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_avatar_edit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_RegisterPage_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Components/RegisterPage/Form */ "./resources/js/Src/Components/RegisterPage/Form.jsx");
/* harmony import */ var _Components_RegisterPage_PhotoUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components/RegisterPage/PhotoUpload */ "./resources/js/Src/Components/RegisterPage/PhotoUpload.jsx");
/* harmony import */ var _Store_Actions_AuthAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Store/Actions/AuthAction */ "./resources/js/Src/Store/Actions/AuthAction.jsx");
/* harmony import */ var _Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils/Scrollbar */ "./resources/js/Src/Utils/Scrollbar.jsx");
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











var Register =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Register).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "changeHandler", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));

      if (Object.keys(_this.state.error).length !== 0) {
        _this.setState({
          error: _this.state.error[event.target.name] = ''
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email,
          phone = _this$state.phone,
          address = _this$state.address,
          password = _this$state.password,
          c_password = _this$state.c_password;

      _this.props.registerAction({
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: password,
        c_password: c_password
      }, _this.props.history);
    });

    _this.state = {
      preview: null,
      src: '',
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      c_password: "",
      error: {}
    };
    _this.onCrop = _this.onCrop.bind(_assertThisInitialized(_this));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    _this.changeHandler = _this.changeHandler.bind(_assertThisInitialized(_this));
    _this.submitHandler = _this.submitHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "Register New User";
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.setState({
        preview: null
      });
    }
  }, {
    key: "onCrop",
    value: function onCrop(preview) {
      this.setState({
        preview: preview
      });
      console.log(this.state.preview);
    }
  }, {
    key: "onBeforeFileLoad",
    value: function onBeforeFileLoad(elem) {
      if (elem.target.files[0].size > 71680) {
        elem.target.value = "";
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.submitHandler
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "d-block"
      }, "Register Form"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_RegisterPage_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
        changeHandler: this.changeHandler,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        password: this.state.password,
        c_password: this.state.c_password,
        errors: this.state.error
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "d-block"
      }, "Avater Upload"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_RegisterPage_PhotoUpload__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: 300,
        height: 300,
        onCrop: this.onCrop,
        onClose: this.onClose,
        onBeforeFileLoad: this.onBeforeFileLoad,
        src: this.state.src,
        preview: this.state.preview
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "d-block"
      }, "Roles"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-danger"
      }, "Coming Soon")))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
        return {
          error: nextProps.error
        };
      }

      return null;
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Register.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.auth.regester_error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    registerAction: function registerAction(user, history) {
      dispatch(Object(_Store_Actions_AuthAction__WEBPACK_IMPORTED_MODULE_7__["registerAction"])(user, history));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Register)));

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