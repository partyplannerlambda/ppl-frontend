import axiosWithExtra from "../utils/axiosWithExtra";


export const FETCHING_FRIENDS = "FETCHING_FRIENDS"
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS"
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE"

// I DO THIS SO I CAN COPY AND PASTE
// FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE

export const ADDING_FRIEND = "ADDING_FRIEND"
export const ADDING_FRIEND_SUCCESS = "ADDING_FRIEND_SUCCESS"
export const ADDING_FRIEND_FAILURE = "ADDING_FRIEND_FAILURE"

// FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE

const DELETING_FRIEND = "DELETING_FRIEND"
const DELETING_FRIEND_SUCCESS = "DELETING_FRIEND_SUCCESS"
const DELETING_FRIEND_FAILURE =  "DELETING_FRIEND_FAILURE"

// DELETING_FRIEND, DELETING_FRIEND_SUCCESS, DELETING_FRIEND_FAILURE

const EDITING_FRIEND = "EDITING_FRIEND" 
const EDITING_FRIEND_SUCCESS = "EDITING_FRIEND_SUCCESS" 
const EDITING_FRIEND_FAILURE = "EDITING_FRIEND_FAILURE"

// FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE

export const fetchFriends = () => dispatch => {
    dispatch({
        type: FETCHING_FRIENDS
    })

    axiosWithExtra
        .get('/api/friends/')
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCHING_FRIENDS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: FETCHING_FRIENDS_FAILURE,
                payload: err
            })
        })
}

export const addFriend = friend => dispatch => {
    dispatch({
        type: ADDING_FRIEND
    })

    axiosWithExtra
        .post('/api/friends', friend)
        .then(res => {
            dispatch({
                type: ADDING_FRIEND_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADDING_FRIEND_FAILURE,
                payload: err
            })
        })
}