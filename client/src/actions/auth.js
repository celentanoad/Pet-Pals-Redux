import axios from 'axios';
import { setMessage } from './message';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from './constants';

// Load User
export const loadUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}   

// Register User
export const register = ({ name, email, password }) => async dispatch => {
    try {
        const res = await axios.post('/api/auth', name, email, password);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
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