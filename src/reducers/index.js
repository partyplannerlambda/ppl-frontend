import { combineReducers } from "redux";
import eventsReducer from './eventsReducer';
import todoReducer from './todoReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  events: eventsReducer,
  todos: todoReducer,
  login: loginReducer
});
