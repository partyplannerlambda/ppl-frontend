import { AUTH_TOKEN } from '../config'

import { 
    LOGGING_IN, LOGGING_IN_SUCCESS, LOGGING_IN_FAILURE,
    REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
    LOGOUT
} from '../actions/loginActions.js'

const initialState = {
    token: null,
    isLoggingIn: false,
    error: null,
    isLoggedIn: false,
    registerSuccesful: false,
    isRegistering: false, // these seem redundant but serve different purpose
    username: null,
    userId: null
}

export default (state = initialState, action) => {
    
    switch(action.type){
        case LOGOUT:
            return initialState
        case LOGGING_IN:
            return caseLoggingIn(state)
        case LOGGING_IN_SUCCESS:
            return caseLoggingInSuccess(state, action)
        case LOGGING_IN_FAILURE:
            return caseLoggingInFailure(state, action)
        case REGISTER_USER:
            return caseRegisterUser(state)
        case REGISTER_USER_SUCCESS:
            return caseRegisterUserSuccess(state,action)
        case REGISTER_USER_FAILURE:
            return caseRegisterUserFailure(state,action)
        default:
            return state
    }
    
}

const caseRegisterUser = state => ({
    ...state,
    isRegistering: true,
    error: null
})

const caseRegisterUserSuccess = (state, action) => {
    if (!action.payload) {
        return ({
            ...state,
            error: "something went wildly wrong"
        })
    }
    return ({
        ...state,
        isRegistering: false,
        error: null,
        registerSuccesful: !!action.payload
    })
}

const caseRegisterUserFailure = (state, action) => {
    let errorMessage = action.payload.message

    if (errorMessage.includes('500')){
        errorMessage = "Username already exists"
    }

    return ({
        ...state,
        isRegistering: false,
        error: errorMessage
    })
}


const caseLoggingIn = state => ({
    ...state,
    isLoggingIn: true,
    error: null,
    isLoggedIn: false
})

const caseLoggingInSuccess = (state, action) => {
    console.log("Successful Login", action)
    let {token, username, userID: userId} = action.payload
    console.log(token);
    return ({
        ...state,
        token,
        username,
        userId,
        isLoggingIn: false,
        error: null,
        isLoggedIn: true
    })
}

const caseLoggingInFailure = (state, action) => {
    let message = action.payload.message
    if (message.includes('401')){
        message = "Username or Password does not match our records"
    }
    return ({
        ...state,
        token: null,
        isLoggingIn: false,
        error: message,
        isLoggedIn: false
    })
}