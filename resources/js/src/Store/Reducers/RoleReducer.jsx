import {role} from '../Actions/Types';

const initialState = {
    database: {},
    error: '',
}; 
export default function (state = initialState, action) {
    switch (action.type) {
        case role.DATABASE_TABLE:
            return {
                ...state,
                database: action.payload,
            };
            break;

        default:
            return state;
    }
}
