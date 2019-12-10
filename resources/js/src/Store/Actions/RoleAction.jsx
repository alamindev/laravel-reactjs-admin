import {role} from './Types';
import axios from 'axios'

export const fetchDatabaseTable = (user) => dispatch => {
    return axios.get("/api/v1/database")
        .then(res => {
            dispatch({
                type: role.DATABASE_TABLE,
                payload: res.data
            })
            dispatch({
                type: role.ROLEERROR,
                payload: {}
            });
        })
        .catch(errors => {
            console.log(errors)
            if (errors.response) {
                // dispatch({
                //     type: role.ROLEERROR,
                //     payload: errors.response.data.errors
                // }); 
            }
        })
};
export const btnClick = () => (
    {
        type: role.GET_DOG,
        payload: fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
    }
);
