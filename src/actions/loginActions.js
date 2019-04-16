import axios from '../utils/axiosWithExtra';
import {AUTH_TOKEN} from '../config.js'


export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

// REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE

export const register = credentials => dispatch => {
    dispatch({
        type: REGISTER_USER
    })

    return axios
        .post('auth/register', credentials)
        .then(res => {
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: res.data.password
            })
        })
        .catch(err => {
            console.log("Error Registering user", err)
            dispatch({
                type: REGISTER_USER_FAILURE,
                payload: err
            })
        })
}



export const LOGGING_IN = "LOGGING_IN";
export const LOGGING_IN_SUCCESS = "LOGGING_IN_SUCCESS";
export const LOGGING_IN_FAILURE = "LOGGING_IN_FAILURE";

// LOGGING_IN, LOGGING_IN_SUCCESS, LOGGING_IN_FAILURE

export const login = credentials => dispatch => {
    dispatch({
        type: LOGGING_IN
    })

    return axios
        .post('auth/login/', credentials)
        .then(res => {
            console.log(res.data)
            window.localStorage.setItem(AUTH_TOKEN, res.data.token)
            dispatch({
                type: LOGGING_IN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("caught err in action", err)
            dispatch({
                type: LOGGING_IN_FAILURE,
                payload: err
            })
        })
}