import {
  GET_ITEMS_LIST,
  GET_ITEMS_LIST_SUCCESS,
  GET_ITEMS_LIST_FAILURE,
  GET_ITEM,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  UPDATE_ITEM,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  DELETE_ITEM,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  CLEAR_SHOPPING_LIST
} from "../actions/shoppingActions.js";

const initialState = {
  shoppingList: [],
  gettingItemsList: false,
  gettingItem: false,
  addingItem: false,
  updatingItem: false,
  deleteingItem: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_SHOPPING_LIST:
      return initialState
      
    case GET_ITEMS_LIST:
      return caseGetItemsList(state, action);
    case GET_ITEMS_LIST_SUCCESS:
      return caseGetItemsListSuccess(state, action);
    case GET_ITEMS_LIST_FAILURE:
      return caseGetItemsListFailure(state, action);

    case GET_ITEM:
      return caseGetItem(state, action);
    case GET_ITEM_SUCCESS:
      return caseGetItemSuccess(state, action);
    case GET_ITEM_FAILURE:
      return caseGetItemFailure(state, action);

    case ADD_ITEM:
      return caseAddItem(state, action);
    case ADD_ITEM_SUCCESS:
      return caseAddItemSuccess(state, action);
    case ADD_ITEM_FAILURE:
      return caseAddItemFailure(state, action);

    case UPDATE_ITEM:
      return caseUpdateItem(state, action);
    case UPDATE_ITEM_SUCCESS:
      return caseUpdateItemSuccess(state, action);
    case UPDATE_ITEM_FAILURE:
      return caseUpdateItemFailure(state, action);

    case DELETE_ITEM:
      return caseDeleteItem(state, action);
    case DELETE_ITEM_SUCCESS:
      return caseDeleteItemSuccess(state, action);
    case DELETE_ITEM_FAILURE:
      return caseDeleteItemFailure(state, action);

    default:
      return state;
  }
};

function caseGetItemsList(state, action) {
  return {
    ...state,
    error: null,
    gettingItemsList: true
  };
}
function caseGetItemsListSuccess(state, action) {
  return {
    ...state,
    error: null,
    gettingItemsList: false,
    shoppingList: action.payload
  };
}
function caseGetItemsListFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    gettingItemsList: false
  };
}
function caseGetItem(state, action) {
  return {
    ...state,
    error: null,
    gettingItem: true
  };
}
function caseGetItemSuccess(state, action) {
  return {
    ...state,
    error: null,
    gettingItem: false
  };
}
function caseGetItemFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    gettingItem: false
  };
}
function caseAddItem(state, action) {
  return {
    ...state,
    error: null,
    addingItem: true
  };
}
function caseAddItemSuccess(state, action) {
  return {
    ...state,
    error: null,
    addingItem: false,
    shoppingList: [...state.shoppingList, action.payload]
  };
}
function caseAddItemFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    addingItem: false
  };
}
function caseUpdateItem(state, action) {
  return {
    ...state,
    error: null,
    updatingItem: true
  };
}
function caseUpdateItemSuccess(state, action) {
  return {
    ...state,
    error: null,
    updatingItem: false,
    shoppingList: state.shoppingList.map(item =>
      item.id !== action.payload.id
        ? item
        : action.payload
    )
  };
}
function caseUpdateItemFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    updatingItem: false
  };
}
function caseDeleteItem(state, action) {
  return {
    ...state,
    error: null,
    deletingItem: true
  };
}
function caseDeleteItemSuccess(state, action) {
  return {
    ...state,
    error: null,
    deletingItem: false,
    shoppingList: state.shoppingList.filter(item => item.id !== action.payload)
  };
}
function caseDeleteItemFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    deletingItem: false
  };
}
