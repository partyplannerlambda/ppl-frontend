import axios from '../utils/axiosWithExtra';

export const LOGGING_IN = "LOGGING_IN";
export const LOGGING_IN_SUCCESS = "LOGGING_IN_SUCCESS";
export const LOGGING_IN_FAILURE = "LOGGING_IN_FAILURE";

// LOGGING_IN, LOGGING_IN_SUCCESS, LOGGING_IN_FAILURE

export const login = credentials => dispatch => {
    dispatch({
        type: LOGGING_IN
    })

    return axios
        .post('/api/login/', credentials)
        .then(res => {
            window.localStorage.setItem('friendsToken', res.data.payload)
            dispatch({
                type: LOGGING_IN_SUCCESS,
                payload: null
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