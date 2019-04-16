

const initialState = {
    events: [],
    gettingEventsList: false,
    gettingEvent: false,
    addingEvent: false,
    updatingEvent: false,
    deletingEvent: false
}

export default (state = initialState, action) => {
    
    switch(action.type){
        default:
            return state
    }
    
}