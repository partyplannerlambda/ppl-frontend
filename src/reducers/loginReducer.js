import { AUTH_TOKEN } from '../config'
import {LOGGING_IN, LOGGING_IN_SUCCESS, LOGGING_IN_FAILURE} from '../actions/loginActions.js'

const initialState = {
    token: window.localStorage.getItem(AUTH_TOKEN) || null,
    isLoggingIn: false,
    error: '',
    isLoggedIn: false
}


const caseLoggingIn = state => ({
    ...state,
    isLoggingIn: true,
    error: '',
    isLoggedIn: false
})

const caseLoggingInSuccess = (state, action) => {
    let token = action.payload;
    return ({
        ...state,
        token,
        isLoggingIn: false,
        error: '',
        isLoggedIn: true
    })
}

const caseLoggingInFailure = (state, action) => {
    let message = action.payload.message
    return ({
        ...state,
        token: null,
        isLoggingIn: false,
        error: message,
        isLoggedIn: false
    })
}

export default (state = initialState, action) => {
    
    switch(action.type){
        case LOGGING_IN:
            return caseLoggingIn(state)
        case LOGGING_IN_SUCCESS:
            return caseLoggingInSuccess(state, action)
        case LOGGING_IN_FAILURE:
            return caseLoggingInFailure(state, action)
        default:
            return state
    }
    
}