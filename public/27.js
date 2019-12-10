(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./resources/js/Src/Pages/Auth/Permission/Permissions.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/Src/Pages/Auth/Permission/Permissions.jsx ***!
  \****************************************************************/
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
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Utils/Scrollbar */ "./resources/js/Src/Utils/Scrollbar.jsx");
/* harmony import */ var _Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Store/Actions/PermissionAction */ "./resources/js/Src/Store/Actions/PermissionAction.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils/Helper */ "./resources/js/Src/Utils/Helper.jsx");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-toastr */ "./node_modules/react-redux-toastr/lib/index.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_9__);
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











var columns = Object(react_data_table_component__WEBPACK_IMPORTED_MODULE_4__["memoize"])(function (clickHandler) {
  return [{
    name: "SL",
    selector: "id",
    sortable: true
  }, {
    name: "Name",
    selector: "display_name",
    sortable: true
  }, {
    name: "Slug",
    selector: "name",
    sortable: true
  }, {
    name: "Year",
    sortable: true,
    cell: function cell(row) {
      row.created_at;
    }
  }, {
    name: "Manage",
    selector: "manage",
    ignoreRowClick: true,
    cell: function cell(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/permissions/view/" + row.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn custom_home_btn_view",
        id: row.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "fas fa-eye text-light",
        name: "eye"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/permissions/" + row.id + "/edit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn custom_home_btn_edit",
        id: row.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "fas fa-edit text-light",
        name: "edit"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn custom_home_btn_delete",
        onClick: clickHandler,
        id: row.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "fas fa-trash text-light",
        name: "trash",
        id: row.id,
        onClick: clickHandler
      })));
    }
  }];
});

var Permission =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Permission, _React$Component);

  function Permission(props) {
    var _this;

    _classCallCheck(this, Permission);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Permission).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function (state) {
      state.stopPropagation();

      if (state.target.id) {
        var id = state.target.id;
        Object(_Utils_Helper__WEBPACK_IMPORTED_MODULE_8__["Sweetalert"])(function (alert, result) {
          if (result.value == true) {
            _this.props.deletePermission(id, function (res) {
              if (res.status === 200) {
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_9__["toastr"].success('SUCCESS', res.data.success);

                _this.fetchPermissions();
              }
            });
          }

          if (result.dismiss == 'cancel') {
            alert.fire('Cancelled', 'Your imaginary Data is safe :)', 'error');
          }
        }, 'Are you sure');
      }
    });

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(Permission, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "All Permissions";
      this.fetchPermissions();
    }
  }, {
    key: "fetchPermissions",
    value: function fetchPermissions() {
      var _this2 = this;

      this.props.fetchPermissions().then(function () {
        var permissions = _this2.props.allpermissions.permissions;

        _this2.setState({
          data: permissions
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }), "All Permission")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/permissions/create"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-dark btn-outline-black text-secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "fas fa-plus",
        name: "plus"
      }), "Add Permission")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Datatable_Datatable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        columns: columns(this.handleButtonClick),
        data: this.state.data
      }))))))));
    }
  }]);

  return Permission;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    allpermissions: state.permission
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPermissions: function fetchPermissions() {
      return dispatch(Object(_Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_6__["fetchPermissions"])());
    },
    deletePermission: function deletePermission(id, callback) {
      return dispatch(Object(_Store_Actions_PermissionAction__WEBPACK_IMPORTED_MODULE_6__["deletePermission"])(id, callback));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Permission)));

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