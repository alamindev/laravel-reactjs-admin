import {userConstant} from './Types';
import axios from 'axios'
import {setCookie, deleteCookie} from '../../Utils/Cookie'
import setAuthToken from '../../Utils/SetAuthToken' 
export const registerAction = (user, history) => dispatch => {
    let data = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        password: user.password,
        c_password: user.c_password,
    }
    return axios.post("/api/v1/register", data)
        .then(res => {
            dispatch({
                type: userConstant.REGISTER_FAILURE,
                payload: {}
            });
            return history.push('/');
        })
        .catch(errors => {
            if (errors.response) {
                dispatch({
                    type: userConstant.REGISTER_FAILURE,
                    payload: errors.response.data.errors
                }); 
            }

        })
};

export const loginAction = (user) => dispatch => {
    let data = {
        email: user.email,
        password: user.password,
    }
    return axios.post("/api/v1/login", data)
        .then(res => {
            if (res.data) {
                setCookie('userToken', `${JSON.stringify(res.data)}`, 1);
                setAuthToken(res.data.token);
                dispatch({
                    type: userConstant.LOGIN_REQUEST,
                    payload: res.data.user
                });
            }
        })
        .catch(errors => {
            if (typeof (errors.response) != 'undefined') {
                if (errors.response.status === 500) {
                    dispatch({
                        type: userConstant.SERVER_ERROR,
                        payload: 'No Database Connection Found! Please Contact Your C-panel Administrator'
                    })
                }
            }
            dispatch({
                type: userConstant.LOGIN_FAILURE,
                payload: errors.response.data
            })

        })
};
export const ServerError = (err) => {
    return {
        type: userConstant.SERVER_ERROR,
        payload: err
    }
};
// logout function 
// return  @void
export const logout = history => {
    deleteCookie('userToken')
    history.push('/login')
    return {
        type: userConstant.LOGOUT,
        payload: {}
    }
}