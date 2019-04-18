import axios from '../utils/axiosWithExtra';
import {AXIOS_CONFIG} from '../config'

// GET_ITEMS_LIST, GET_ITEMS_LIST_SUCCESS, GET_ITEMS_LIST_FAILURE
export const GET_ITEMS_LIST = "GET_ITEMS_LIST";
export const GET_ITEMS_LIST_SUCCESS = "GET_ITEMS_LIST_SUCCESS";
export const GET_ITEMS_LIST_FAILURE = "GET_ITEMS_LIST_FAILURE";

export const getItemsList = eventId => dispatch => {
    dispatch({
        type: GET_ITEMS_LIST
    })

    axios
        .get(`parties/${eventId}/shopping`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_ITEMS_LIST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_ITEMS_LIST_FAILURE,
                payload: err.message
            })
        })
}

// GET_ITEM, GET_ITEM_SUCCESS, GET_ITEM_FAILURE
export const GET_ITEM = "GET_ITEM";
export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAILURE = "GET_ITEM_FAILURE";

export const getItem = (eventId, itemId) => dispatch => {
    dispatch({
        type: GET_ITEM
    })

    axios
        .get(`/parties/${eventId}/shopping/${itemId}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_ITEM_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_ITEM_FAILURE,
                payload: err.message
            })
        })
}

// ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE
export const ADD_ITEM = "ADD_ITEM";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const addItem = (eventId, item) => dispatch => {
    dispatch({
        type: ADD_ITEM
    })

    let newItem = {party_id: eventId, item: item}
    
    axios
        .post(`/parties/${eventId}/shopping`, newItem)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADD_ITEM_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: ADD_ITEM_FAILURE,
                payload: err.message
            })
        })
}

// UPDATE_ITEM, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE
export const UPDATE_ITEM = "UPDATE_ITEM";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_FAILURE = "UPDATE_ITEM_FAILURE";

export const updateItem = (item) => dispatch => {
    dispatch({
        type: UPDATE_ITEM
    })

    console.log("sending to update", item)
    axios
        .put(`/parties/${item.party_id}/shopping/${item.id}`, item, AXIOS_CONFIG)
        .then(res => {
            console.log(res)
            dispatch({
                type: UPDATE_ITEM_SUCCESS,
                payload: item.id
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: UPDATE_ITEM_FAILURE,
                payload: err.message
            })
        })
}

// DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const deleteItem = (item) => dispatch => {
    dispatch({
        type: DELETE_ITEM
    })

    axios
        .delete(`/parties/${item.party_id}/shopping/${item.id}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: DELETE_ITEM_SUCCESS,
                payload: item.id
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: DELETE_ITEM_FAILURE,
                payload: err.message
            })
        })
}