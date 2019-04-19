import {
    GET_EVENTS_LIST, GET_EVENTS_LIST_SUCCESS, GET_EVENTS_LIST_FAILURE,
    GET_EVENT, GET_EVENT_SUCCESS, GET_EVENT_FAILURE,
    ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE,
    UPDATE_EVENT, UPDATE_EVENT_SUCCESS, UPDATE_EVENT_FAILURE,
    DELETE_EVENT, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE,
    CLEAR_ACTIVE_EVENT
} from '../actions/partyActions'

const initialState = {
    events: [],
    gettingEventsList: false,
    gettingEvent: false,
    addingEvent: false,
    updatingEvent: false,
    deletingEvent: false,
    error: null,
    activeEvent: undefined
}

export default (state = initialState, action) => {
    
    switch(action.type){
        case CLEAR_ACTIVE_EVENT:
            return initialState
       
        case GET_EVENTS_LIST:
            return caseGetEventList(state, action)
        case GET_EVENTS_LIST_SUCCESS:
            return caseGetEventListSuccess(state, action)
        case GET_EVENTS_LIST_FAILURE:
            return caseGetEventListFailure(state, action)

        case GET_EVENT:
            return caseGetEvent(state, action)
        case GET_EVENT_SUCCESS:
            return caseGetEventSuccess(state, action)
        case GET_EVENT_FAILURE:
            return caseGetEventFailure(state, action)

        case ADD_EVENT:
            return caseAddEvent(state, action)
        case ADD_EVENT_SUCCESS:
            return caseAddEventSuccess(state, action)
        case ADD_EVENT_FAILURE:
            return caseAddEventFailure(state, action)

        case UPDATE_EVENT:
            return caseUpdateEvent(state, action)
        case UPDATE_EVENT_SUCCESS:
            return caseUpdateEventSuccess(state, action)
        case UPDATE_EVENT_FAILURE:
            return caseUpdateEventFailure(state, action)

        case DELETE_EVENT:
            return caseDeleteEvent(state, action)
        case DELETE_EVENT_SUCCESS:
            return caseDeleteEventSuccess(state, action)
        case DELETE_EVENT_FAILURE:
            return caseDeleteEventFailure(state, action)
            
        default:
            return state
    }
    
}


function caseGetEventList(state, action){
    return {
        ...state,
        gettingEventsList: true,
        error: null
    }
}

function caseGetEventListSuccess(state, action){
    return {
        ...state,
        gettingEventsList: false,
        error: null,
        events: action.payload
    }
}

function caseGetEventListFailure(state, action){
    return {
        ...state,
        gettingEventsList: false,
        error: action.payload
    }
}


function caseGetEvent(state, action){
    return {
        ...state,
        gettingEvent: true,
        error: null
    }
}

function caseGetEventSuccess(state, action){
    return {
        ...state,
        gettingEvent: false,
        error: null,
        activeEvent: action.payload
    }
}

function caseGetEventFailure(state, action){
    return {
        ...state,
        gettingEvent: false,
        error: action.payload
    }
}


function caseAddEvent(state, action){
    return {
        ...state,
        addingEvent: false,
        error: null
    }
}

function caseAddEventSuccess(state, action){
    return {
        ...state,
        addingEvent: false,
        error: null,
        events: [action.payload, ...state.events]
    }
}

function caseAddEventFailure(state, action){
    return {
        ...state,
        addingEvent: false,
        error: action.payload
    }
}


function caseUpdateEvent(state, action){
    return {
        ...state,
        updatingEvent: false,
        error: null
    }
}

function caseUpdateEventSuccess(state, action){
    return {
        ...state,
        updatingEvent: false,
        error: null,
        activeEvent: action.payload
    }
}

function caseUpdateEventFailure(state, action){
    return {
        ...state,
        updatingEvent: false,
        error: action.payload
    }
}


function caseDeleteEvent(state, action){
    return {
        ...state,
        deletingEvent: false,
        error: null
    }
}

function caseDeleteEventSuccess(state, action){
    return {
        ...state,
        deletingEvent: false,
        error: null,
        activeEvent: "deleted"
    }
}

function caseDeleteEventFailure(state, action){
    return {
        ...state,
        deletingEvent: false,
        error: action.payload
    }
}
