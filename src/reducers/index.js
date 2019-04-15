import { combineReducers } from "redux";
import eventsReducer from './eventsReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  events: eventsReducer,
  login: loginReducer
});
