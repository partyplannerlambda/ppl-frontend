import axios from '../utils/axiosWithExtra';


export const CLEAR_ACTIVE_EVENT = "CLEAR_ACTIVE_EVENT"
export const clearActiveEvent = () => {
    return {
        type: CLEAR_ACTIVE_EVENT
    }
}

// GET_EVENTS_LIST, GET_EVENTS_LIST_SUCCESS, GET_EVENTS_LIST_FAILURE
export const GET_EVENTS_LIST = "GET_EVENTS_LIST";
export const GET_EVENTS_LIST_SUCCESS = "GET_EVENTS_LIST_SUCCESS";
export const GET_EVENTS_LIST_FAILURE = "GET_EVENTS_LIST_FAILURE";

export const getEventsList = () => dispatch => {
    dispatch({
        type: GET_EVENTS_LIST
    })

    axios
        .get('/parties')
        .then(res => {
            dispatch({
                type: GET_EVENTS_LIST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("Error in partyActions: ", err)
            dispatch({
                type: GET_EVENTS_LIST_FAILURE,
                payload: err.message
            })
        })
}

// GET_EVENT, GET_EVENT_SUCCESS, GET_EVENT_FAILURE
export const GET_EVENT = "GET_EVENT";
export const GET_EVENT_SUCCESS = "GET_EVENT_SUCCESS";
export const GET_EVENT_FAILURE = "GET_EVENT_FAILURE";

// this event is not an event DOM object. its a 'party'
export const getEvent = id => dispatch => {
    dispatch({
        type: GET_EVENT
    })

    axios
        .get(`/parties/${id}`)
        .then(res => {
            dispatch({
                type: GET_EVENT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("Error in partyActions: ", err)
            dispatch({
                type: GET_EVENT_FAILURE,
                payload: err.message
            })
        })
}

// ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE
export const ADD_EVENT = "ADD_EVENT";
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";
export const ADD_EVENT_FAILURE = "ADD_EVENT_FAILURE";

// this event is not an event DOM object. its a 'party'
export const addEvent = (userId, event) => dispatch => {
    dispatch({
        type: ADD_EVENT
    })

    let newEvent = {user_id: userId, ...event}
    newEvent["user_id"] -= 0;
    newEvent["n_of_guests"] -= 0;
    newEvent["budget"] -= 0;

    axios
        .post('/parties', newEvent)
        .then(res => {
            dispatch({
                type: ADD_EVENT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("Error in partyActions: ", err)
            dispatch({
                type: ADD_EVENT_FAILURE,
                payload: err.message
            })
        })
}

// UPDATE_EVENT, UPDATE_EVENT_SUCCESS, UPDATE_EVENT_FAILURE
export const UPDATE_EVENT = "UPDATE_EVENT";
export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS";
export const UPDATE_EVENT_FAILURE = "UPDATE_EVENT_FAILURE";

// this event is not an event DOM object. its a 'party'
export const updateEvent = event => dispatch => {
    dispatch({
        type: UPDATE_EVENT
    })

    axios
        .put(`parties/${event.id}`, event)
        .then(res => {
            dispatch({
                type: UPDATE_EVENT_SUCCESS,
                payload: event
            })
        })
        .catch(err => {
            console.log(err.message)
            dispatch({
                type: UPDATE_EVENT_FAILURE,
                payload: err.message
            })
        })
}

// DELETE_EVENT, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE
export const DELETE_EVENT = "DELETE_EVENT";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE";

// this event is not an event DOM object. its a 'party'
export const deleteEvent = event => dispatch => {
    dispatch({
        type: DELETE_EVENT
    })

    axios
        .delete(`parties/${event.id}`)
        .then(res => {
            dispatch({
                type: DELETE_EVENT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("Error in partyActions: ", err)
            dispatch({
                type: DELETE_EVENT_FAILURE,
                payload: err.message
            })
        })
}