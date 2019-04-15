import { AUTH_TOKEN } from '../config'
import {LOGGING_IN, LOGGING_IN_SUCCESS, LOGGING_IN_FAILURE} from '../actions/loginActions.js'

const initialState = {
    token: window.localStorage.getItem(AUTH_TOKEN) || null,
    isLoggingIn: false,
    loginError: null,
    isLoggedIn: false,
    registerSuccesful: false,
    isRegistering: false,
    registerError: null
}

const caseRegisterUser = state => ({
    ...state,
    isRegistering: true,
    registerError: null
})

const caseRegisterUserSuccesful = (state, action) => {
    if (!action.data.password) {
        return ({
            ...state,
            registerError: "something went wildly wrong"
        })
    }
    return ({
        ...state,
        isRegistering: false,
        registerError: null,
        registerSuccesful: !!action.data.password
    })
}

const caseRegisterUserFailure = (state, action) => {
    let errorMessage = action.payload.message
    return ({
        ...state,
        isRegistering: false,
        registerError: errorMessage
    })
}


const caseLoggingIn = state => ({
    ...state,
    isLoggingIn: true,
    loginError: null,
    isLoggedIn: false
})

const caseLoggingInSuccess = (state, action) => {
    let token = action.payload;
    return ({
        ...state,
        token,
        isLoggingIn: false,
        loginError: null,
        isLoggedIn: true
    })
}

const caseLoggingInFailure = (state, action) => {
    let message = action.payload.message
    return ({
        ...state,
        token: null,
        isLoggingIn: false,
        loginError: message,
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