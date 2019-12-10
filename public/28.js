(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./resources/js/Src/Pages/Auth/Roles/Roles.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/Src/Pages/Auth/Roles/Roles.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_Datatable_Datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Components/Datatable/Datatable */ "./resources/js/Src/Components/Datatable/Datatable.jsx");
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Utils/Helper */ "./resources/js/Src/Utils/Helper.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Store_Actions_RoleAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Store/Actions/RoleAction */ "./resources/js/Src/Store/Actions/RoleAction.jsx");
/* harmony import */ var _Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils/Scrollbar */ "./resources/js/Src/Utils/Scrollbar.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var data = [{
  id: 1,
  title: "Conan the Barbarian",
  year: "1982"
}, {
  id: 2,
  title: "Conan the Barbarian",
  year: "1982"
}, {
  id: 3,
  title: "Conan the Barbarian",
  year: "1982"
}, {
  id: 4,
  title: "Conan the Barbarian",
  year: "1982"
}];
var columns = [{
  name: "Title",
  selector: "title",
  sortable: true
}, {
  name: "Year",
  selector: "year",
  sortable: true,
  right: true
}, {
  name: "Manage",
  selector: "manage",
  sortable: true,
  cell: function cell(row) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-success",
      id: row.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "fas fa-eye text-light",
      name: "eye"
    })));
  }
}];

var Role =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Role, _React$Component);

  function Role() {
    _classCallCheck(this, Role);

    return _possibleConstructorReturn(this, _getPrototypeOf(Role).apply(this, arguments));
  }

  _createClass(Role, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "All Roles";
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header d-md-flex d-sm-block justify-content-between text-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title m-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "fas fa-chess-board",
        name: "board",
        size: "2x"
      }), "All Roles")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/roles/create"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-dark btn-outline-black text-secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "fas fa-plus",
        name: "plus"
      }), "Add New Role")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-danger text-center"
      }, "Coming Soon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Datatable_Datatable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        columns: columns,
        data: data
      }))))))));
    }
  }]);

  return Role;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    btnClick: function btnClick() {
      dispatch(Object(_Store_Actions_RoleAction__WEBPACK_IMPORTED_MODULE_6__["btnClick"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, mapDispatchToProps)(Role)));

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

/***/ })

}]);