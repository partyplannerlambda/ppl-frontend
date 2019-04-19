import axios from "axios";

let config = {
  baseURL: "https://party-planner-backend.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${window.localStorage.getItem("partyplannertoken")}`
  }
};

export const CLEAR_TODOS = "CLEAR_TODOS";
export const clearTodos = () => {
  return {
    type: CLEAR_TODOS
  };
};

// GET_TODOS_LIST, GET_TODOS_LIST_SUCCESS, GET_TODOS_LIST_FAILURE
export const GET_TODOS_LIST = "GET_TODOS_LIST";
export const GET_TODOS_LIST_SUCCESS = "GET_TODOS_LIST_SUCCESS";
export const GET_TODOS_LIST_FAILURE = "GET_TODOS_LIST_FAILURE";

export const getTodosList = partyId => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: GET_TODOS_LIST
  });

  axios
    .get(`parties/${partyId}/todo`, config)
    .then(res => {
      dispatch({
        type: GET_TODOS_LIST_SUCCESS,
        // filter out todo items that dont belong to active party
        payload: res.data.filter(item => item.party_id === partyId)
      });
    })
    .catch(err => {
      console.log("todoActions: ", err);
      dispatch({
        type: GET_TODOS_LIST_FAILURE
      });
    });
};

// GET_TODO, GET_TODO_SUCCESS, GET_TODO_FAILURE
export const GET_TODO = "GET_TODO";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILURE = "GET_TODO_FAILURE";

export const getTodo = (partyId, todoId) => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: GET_TODO
  });

  axios
    .get(`parties/${partyId}/todo/${todoId}`, config)
    .then(res => {
      console.log("todoActions: ", res);
      dispatch({
        type: GET_TODO_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("todoActions: ", err);
      dispatch({
        type: GET_TODO_FAILURE,
        payload: err.message
      });
    });
};

// ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE
export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

export const addTodo = (partyId, todo) => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: ADD_TODO
  });

  let newTodo = { item: todo, party_id: partyId - 0, completed: false };
  console.log(newTodo);
  axios
    .post(`parties/${partyId}/todo`, newTodo, config)
    .then(res => {
      console.log("todoActions: ", res);
      dispatch({
        type: ADD_TODO_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("todoActions: ", err);
      dispatch({
        type: ADD_TODO_FAILURE,
        payload: err.message
      });
    });
};

// UPDATE_TODO, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE";

export const updateTodo = todo => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: UPDATE_TODO
  });

  console.log("todo", todo);
  axios
    .put(`parties/${todo.party_id}/todo/${todo.id}`, todo, config)
    .then(res => {
      console.log("todoActions update: ", res);
      dispatch({
        type: UPDATE_TODO_SUCCESS,
        payload: todo.id
      });
    })
    .catch(err => {
      console.log("todoActions: ", err);
      dispatch({
        type: UPDATE_TODO_FAILURE
      });
    });
};

// DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

export const deleteTodo = todo => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: DELETE_TODO
  });

  axios
    .delete(`parties/${todo.party_id}/todo/${todo.id}`, config)
    .then(res => {
      console.log("todoActions Delete: ", res);
      dispatch({
        type: DELETE_TODO_SUCCESS,
        payload: todo.id
      });
    })
    .catch(err => {
      console.log("todoActions: ", err);
      dispatch({
        type: DELETE_TODO_FAILURE
      });
    });
};
