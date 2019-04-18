import {
  GET_TODOS_LIST,
  GET_TODOS_LIST_SUCCESS,
  GET_TODOS_LIST_FAILURE,
  GET_TODO,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  CLEAR_TODOS
} from "../actions/todoActions.js";

const initialState = {
  todosList: [],
  gettingTodosList: false,
  gettingTodo: false,
  addingTodo: false,
  updatingTodo: false,
  deleteingTodo: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_TODOS: 
      return initialState
  
    case GET_TODOS_LIST:
      return caseGetTodosList(state, action);
    case GET_TODOS_LIST_SUCCESS:
      return caseGetTodosListSuccess(state, action);
    case GET_TODOS_LIST_FAILURE:
      return caseGetTodosListFailure(state, action);

    case GET_TODO:
      return caseGetTodo(state, action);
    case GET_TODO_SUCCESS:
      return caseGetTodoSuccess(state, action);
    case GET_TODO_FAILURE:
      return caseGetTodoFailure(state, action);

    case ADD_TODO:
      return caseAddTodo(state, action);
    case ADD_TODO_SUCCESS:
      return caseAddTodoSuccess(state, action);
    case ADD_TODO_FAILURE:
      return caseAddTodoFailure(state, action);

    case UPDATE_TODO:
      return caseUpdateTodo(state, action);
    case UPDATE_TODO_SUCCESS:
      return caseUpdateTodoSuccess(state, action);
    case UPDATE_TODO_FAILURE:
      return caseUpdateTodoFailure(state, action);

    case DELETE_TODO:
      return caseDeleteTodo(state, action);
    case DELETE_TODO_SUCCESS:
      return caseDeleteTodoSuccess(state, action);
    case DELETE_TODO_FAILURE:
      return caseDeleteTodoFailure(state, action);

    default:
      return state;
  }
};

function caseGetTodosList(state, action) {
  return {
    ...state,
    error: null,
    gettingTodosList: true
  };
}
function caseGetTodosListSuccess(state, action) {
  return {
    ...state,
    error: null,
    gettingTodosList: false,
    todosList: action.payload
  };
}
function caseGetTodosListFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    gettingTodosList: false
  };
}
function caseGetTodo(state, action) {
  return {
    ...state,
    error: null,
    gettingTodo: true
  };
}
function caseGetTodoSuccess(state, action) {
  return {
    ...state,
    error: null,
    gettingTodo: false
  };
}
function caseGetTodoFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    gettingTodo: false
  };
}
function caseAddTodo(state, action) {
  return {
    ...state,
    error: null,
    addingTodo: true
  };
}
function caseAddTodoSuccess(state, action) {
  return {
    ...state,
    error: null,
    addingTodo: false,
    todosList: [...state.todosList, action.payload]
  };
}
function caseAddTodoFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    addingTodo: false
  };
}
function caseUpdateTodo(state, action) {
  return {
    ...state,
    error: null,
    updatingTodo: true
  };
}
function caseUpdateTodoSuccess(state, action) {
  return {
    ...state,
    error: null,
    updatingTodo: false,
    todosList: state.todosList.map(todo =>
      todo.id !== action.payload
        ? todo
        : { ...todo, completed: !todo.completed }
    )
  };
}
function caseUpdateTodoFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    updatingTodo: false
  };
}
function caseDeleteTodo(state, action) {
  return {
    ...state,
    error: null,
    deletingTodo: true
  };
}
function caseDeleteTodoSuccess(state, action) {
  return {
    ...state,
    error: null,
    deletingTodo: false,
    todosList: state.todosList.filter(todo => todo.id !== action.payload)
  };
}
function caseDeleteTodoFailure(state, action) {
  return {
    ...state,
    error: action.payload,
    deletingTodo: false
  };
}
