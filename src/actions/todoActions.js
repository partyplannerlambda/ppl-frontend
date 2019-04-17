import axios from '../utils/axiosWithExtra';

// GET_TODOS_LIST, GET_TODOS_LIST_SUCCESS, GET_TODOS_LIST_FAILURE
export const GET_TODOS_LIST = "GET_TODOS_LIST";
export const GET_TODOS_LIST_SUCCESS = "GET_TODOS_LIST_SUCCESS";
export const GET_TODOS_LIST_FAILURE = "GET_TODOS_LIST_FAILURE";

export const getTodosList = partyId => dispatch => {
    dispatch({
        type: GET_TODOS_LIST
    })

    axios
        .get(`parties/${partyId}/todo`)
        .then(res => {
            console.log("todoActions: ", res)
            dispatch({
                type: GET_TODOS_LIST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("todoActions: ", err)
            dispatch({
                type: GET_TODOS_LIST_FAILURE
            })
        })
}

// GET_TODO, GET_TODO_SUCCESS, GET_TODO_FAILURE
export const GET_TODO = "GET_TODO";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILURE = "GET_TODO_FAILURE";

export const getTodo = (partyId, todoId) => dispatch => {
    dispatch({
        type: GET_TODO
    })

    axios
        .get(`parties/${partyId}/todo/${todoId}`)
        .then(res => {
            console.log("todoActions: ", res)
            dispatch({
                type: GET_TODO_SUCCESS
            })
        })
        .catch(err => {
            console.log("todoActions: ", err)
            dispatch({
                type: GET_TODO_FAILURE
            })
        })
}

// ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE
export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

export const addTodo = (partyId, todo) => dispatch => {
    dispatch({
        type: ADD_TODO
    })

    let newTodo = {item: todo, party_id: partyId-0, completed: false}
    console.log(newTodo)
    axios
        .post(`parties/${partyId}/todo`, newTodo)
        .then(res => {
            console.log("todoActions: ", res)
            dispatch({
                type: ADD_TODO_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("todoActions: ", err)
            dispatch({
                type: ADD_TODO_FAILURE,
                payload: err.message
            })
        })
}

// UPDATE_TODO, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE";

export const updateTodo = (partyId, todo) => dispatch => {
    dispatch({
        type: UPDATE_TODO
    })

    axios
        .put(`parties/${partyId}/todo/${todo.id}}`, todo)
        .then(res => {
            console.log("todoActions: ", res)
            dispatch({
                type: UPDATE_TODO_SUCCESS
            })
        })
        .catch(err => {
            console.log("todoActions: ", err)
            dispatch({
                type: UPDATE_TODO_FAILURE
            })
        })
}

// DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

export const deleteTodo = todo => dispatch => {
    dispatch({
        type: DELETE_TODO
    })

    axios
        .post(`parties/${todo.id}`, todo)
        .then(res => {
            console.log("todoActions: ", res)
            dispatch({
                type: DELETE_TODO_SUCCESS
            })
        })
        .catch(err => {
            console.log("todoActions: ", err)
            dispatch({
                type: DELETE_TODO_FAILURE
            })
        })
}