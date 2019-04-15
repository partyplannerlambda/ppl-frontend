import axios from '../utils/axiosWithExtra';

// GET_EVENTS_LIST, GET_EVENTS_LIST_SUCCESS, GET_EVENTS_LIST_FAILURE
export const GET_EVENTS_LIST = "GET_EVENTS_LIST";
export const GET_EVENTS_LIST_SUCCESS = "GET_EVENTS_LIST_SUCCESS";
export const GET_EVENTS_LIST_FAILURE = "GET_EVENTS_LIST_FAILURE";

export const getEventsList = () => dispatch => {
    dispatch({
        type: GET_EVENTS_LIST
    })

    axios
        .get()
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_EVENTS_LIST_SUCCESS
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_EVENTS_LIST_FAILURE
            })
        })
}

// GET_EVENT, GET_EVENT_SUCCESS, GET_EVENT_FAILURE
export const GET_EVENT = "GET_EVENT";
export const GET_EVENT_SUCCESS = "GET_EVENT_SUCCESS";
export const GET_EVENT_FAILURE = "GET_EVENT_FAILURE";

export const getEvent = event => dispatch => {
    dispatch({
        type: GET_EVENT
    })

    axios
        .get()
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_EVENT_SUCCESS
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_EVENT_FAILURE
            })
        })
}

// ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE
export const ADD_EVENT = "ADD_EVENT";
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";
export const ADD_EVENT_FAILURE = "ADD_EVENT_FAILURE";

export const addEvent = event => dispatch => {
    dispatch({
        type: ADD_EVENT
    })

    axios
        .post(, event)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADD_EVENT_SUCCESS
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: ADD_EVENT_FAILURE
            })
        })
}

// UPDATE_EVENT, UPDATE_EVENT_SUCCESS, UPDATE_EVENT_FAILURE
export const UPDATE_EVENT = "UPDATE_EVENT";
export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS";
export const UPDATE_EVENT_FAILURE = "UPDATE_EVENT_FAILURE";

export const updateEvent = event => dispatch => {
    dispatch({
        type: UPDATE_EVENT
    })

    axios
        .put(, event)
        .then(res => {
            console.log(res)
            dispatch({
                type: UPDATE_EVENT_SUCCESS
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: UPDATE_EVENT_FAILURE
            })
        })
}

// DELETE_EVENT, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE
export const DELETE_EVENT = "DELETE_EVENT";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE";

export const deleteEvent = event => dispatch => {
    dispatch({
        type: DELETE_EVENT
    })

    axios
        .post(, event)
        .then(res => {
            console.log(res)
            dispatch({
                type: DELETE_EVENT_SUCCESS
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: DELETE_EVENT_FAILURE
            })
        })
}