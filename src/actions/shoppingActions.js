import axios from "axios";

export const CLEAR_SHOPPING_LIST = "CLEAR_SHOPPING_LIST";
export const clearShoppingList = () => {
  console.log("Clearing Shopping List");
  return {
    type: CLEAR_SHOPPING_LIST
  };
};

// GET_ITEMS_LIST, GET_ITEMS_LIST_SUCCESS, GET_ITEMS_LIST_FAILURE
export const GET_ITEMS_LIST = "GET_ITEMS_LIST";
export const GET_ITEMS_LIST_SUCCESS = "GET_ITEMS_LIST_SUCCESS";
export const GET_ITEMS_LIST_FAILURE = "GET_ITEMS_LIST_FAILURE";

export const getItemsList = eventId => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: GET_ITEMS_LIST
  });

  axios
    .get(`parties/${eventId}/shopping`, config)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_ITEMS_LIST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ITEMS_LIST_FAILURE,
        payload: err.message
      });
    });
};

// GET_ITEM, GET_ITEM_SUCCESS, GET_ITEM_FAILURE
export const GET_ITEM = "GET_ITEM";
export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAILURE = "GET_ITEM_FAILURE";

export const getItem = (eventId, itemId) => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: GET_ITEM
  });

  axios
    .get(`/parties/${eventId}/shopping/${itemId}`, config)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_ITEM_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ITEM_FAILURE,
        payload: err.message
      });
    });
};

// ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE
export const ADD_ITEM = "ADD_ITEM";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const addItem = (eventId, item) => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: ADD_ITEM
  });

  let newItem = { party_id: eventId, item: item };

  axios
    .post(`/parties/${eventId}/shopping`, newItem, config)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ADD_ITEM_FAILURE,
        payload: err.message
      });
    });
};

// UPDATE_ITEM, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE
export const UPDATE_ITEM = "UPDATE_ITEM";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_FAILURE = "UPDATE_ITEM_FAILURE";

export const updateItem = item => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: UPDATE_ITEM
  });

  console.log("sending to update", item);
  axios
    .put(`/parties/${item.party_id}/shopping/${item.id}`, item, config)
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_ITEM_SUCCESS,
        payload: item
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: UPDATE_ITEM_FAILURE,
        payload: err.message
      });
    });
};

// DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const deleteItem = item => dispatch => {
  let config = {
    baseURL: "https://party-planner-backend.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${window.localStorage.getItem("partyplannertoken")}`
    }
  };
  dispatch({
    type: DELETE_ITEM
  });

  axios
    .delete(`/parties/${item.party_id}/shopping/${item.id}`, config)
    .then(res => {
      console.log(res);
      dispatch({
        type: DELETE_ITEM_SUCCESS,
        payload: item.id
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: DELETE_ITEM_FAILURE,
        payload: err.message
      });
    });
};
