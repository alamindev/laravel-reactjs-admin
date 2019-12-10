(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/Src/Pages/Auth/Permission/ViewPermission.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Src/Pages/Auth/Permission/ViewPermission.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utils/Scrollbar */ "./resources/js/Src/Utils/Scrollbar.jsx");
/* harmony import */ var _Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Store/Actions/PermissionAction */ "./resources/js/Src/Store/Actions/PermissionAction.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Utils_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Utils/Loader */ "./resources/js/Src/Utils/Loader.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var viewPermission =
/*#__PURE__*/
function (_React$Component) {
  _inherits(viewPermission, _React$Component);

  function viewPermission(props) {
    var _this;

    _classCallCheck(this, viewPermission);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(viewPermission).call(this, props));
    _this.state = {
      data: {},
      showing: false
    };
    return _this;
  }

  _createClass(viewPermission, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.title = "View Permission";
      this.props.getPermissionByid(this.props.match.params.id).then(function (res) {
        var permission = _this2.props.getDataByid;

        _this2.setState({
          data: permission
        });

        _this2.setState({
          showing: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.showing) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        }), "View Permission")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/permissions"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-dark btn-outline-black text-secondary"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
          className: "fas fa-arrow-left",
          name: "arrow-left"
        }), "Back")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card-body"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
          "v-if": this.state.data,
          className: "table table-striped"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.data.id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Slug"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.data.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Display Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.data.display_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Permission Table"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.data.per_table)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.data.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)))))))))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex justify-content-center align-items-center h-100"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Loader__WEBPACK_IMPORTED_MODULE_6__["Loading"], null));
      }
    }
  }]);

  return viewPermission;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    getDataByid: state.permission.permission
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getPermissionByid: function getPermissionByid(id) {
      return dispatch(Object(_Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_4__["getPermissionByid"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(viewPermission)));

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