import {userConstant} from '../Actions/Types';

const initialState = {
    user: {},
    error: '',
    serverError: '',
    isAuthenticated: false,
    history: {},
    regester_error: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case userConstant.LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload.data,
                isAuthenticated: Object.keys(action.payload).length != 0,
                error: '',
                serverError: ''
            };
            break;
        case userConstant.SERVER_ERROR:
            return {
                ...state,
                serverError: action.payload
            };
            break;
        case userConstant.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
            break;
        case userConstant.REGISTER_FAILURE:
            return {
                ...state,
                regester_error: action.payload
            };
            break;
        case userConstant.LOGOUT:
            return {
                ...state,
                user: {},
                isAuthenticated: false
            };
            break;
        default:
            return state;
    }
}
