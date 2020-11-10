import axios from 'axios';
import { setMessage } from './message';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './constants';

// Register User
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password });
    console.log(body)
    try {
        const res = await axios.post('http://localhost:3001/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setMessage(error.msg, 'error')))
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}