import { permission } from "./Types";
import axios from "axios";

export const fetchPermissions = () => dispatch => {
    return axios
        .get("/api/v1/permission")
        .then(res => {
            dispatch({
                type: permission.GET_PERMISSION,
                payload: res.data
            });
        })
        .catch(errors => {
            if (errors.response) {
                console.log(errors.response);
            }
        });
};

export const addPermission = (permissions, callback) => dispatch => {
    return axios
        .post("/api/v1/permission", permissions)
        .then(res => {
            dispatch({
                type: permission.ADD_PERMISSION,
                payload: res.data
            });
            callback(res);
        })
        .catch(errors => {
            if (errors.response) {
                callback(errors.response);
            }
        });
};
export const getPermissionByid = id => dispatch => {
    return axios
        .get("/api/v1/permission/" + id)
        .then(res => {
            dispatch({
                type: permission.PERMISSION_BY_ID,
                payload: res.data
            });
        })
        .catch(errors => {
            if (errors.response) {
                console.log(errors.response);
            }
        });
};
export const permissionEdit = id => dispatch => {
    return axios
        .get("/api/v1/permission/" + id + "/edit")
        .then(res => {
            dispatch({
                type: permission.EDIT_PERMISSION,
                payload: res.data
            });
        })
        .catch(errors => {
            if (errors.response) {
                console.log(errors.response);
            }
        });
};

export const updatePermission = (id, values, callback) => dispatch => {
    return axios
        .put("/api/v1/permission/" + id, values)
        .then(res => { 
            dispatch({
                type: permission.UPDATE_PERMISSION,
                payload: res.data
            });
            callback(res);
        })
        .catch(errors => {
            if (errors.response) {
                callback(errors.response);
            }
        });
};
export const deletePermission = (id, callback) => dispatch => { 
    return axios
        .delete(`/api/v1/permission/${id}`)
        .then(res => {  
            dispatch({
                type: permission.DELETE_PERMISSION,
                payload: res.data.id
            }); 
            callback(res);
        })
        .catch(errors => {
            if (errors.response) {
                console.log(errors.response);
            }
        });
};