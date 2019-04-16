import axiosWithExtra from "../utils/axiosWithExtra";

// GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE
export const GET_EVENTS = "GET_EVENTS"
export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS"
export const GET_EVENTS_FAILURE = "GET_EVENTS_FAILURE"


export const getEvents = () => dispatch => {
    dispatch({
        type: GET_FRIENDS
    })

    axiosWithExtra
        .get('/api/friends/')
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_FRIENDS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_FRIENDS_FAILURE,
                payload: err
            })
        })
}