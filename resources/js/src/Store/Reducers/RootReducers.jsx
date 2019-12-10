import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import roleReducer from "./RoleReducer";
import permissionReducer from "./PermissionReducer";
import { connectRouter } from "connected-react-router";

import { loadingBarReducer } from "react-redux-loading-bar";
import { reducer as toastrReducer } from "react-redux-toastr";

const createRootReducer = history =>
    combineReducers({
        auth: authReducer,
        role: roleReducer,
        permission: permissionReducer,
        router: connectRouter(history),
        loadingBar: loadingBarReducer,
        toastr: toastrReducer
    });

export default createRootReducer;
