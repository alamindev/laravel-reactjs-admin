import { permission } from "../Actions/Types";

const initialState = {
    permissions: [],
    errors: {},
    permission: {}
};
export default function (state = initialState, action) {
    switch (action.type) {
        case permission.GET_PERMISSION:
            return {
                ...state,
                permissions: action.payload
            };
            break;
        case permission.ADD_PERMISSION:
            return {
                permissions: [...state.permissions, action.payload]
            };
            break;
        case permission.PERMISSION_BY_ID:
            return {
                ...state,
                permission: action.payload
            };
            break;
        case permission.EDIT_PERMISSION:
            return {
                ...state,
                permission: action.payload
            };
            break;
        case permission.UPDATE_PERMISSION:
            return {
                ...state,
                permissions: [...state.permissions, action.payload]
            };
            break;
        case permission.DELETE_PERMISSION: {
            return {
                ...state,
                permissions: state.permissions.filter(permission => permission.id !== parseInt(action.payload))
            }
        }

            break;

        default:
            return state;
    }
}
