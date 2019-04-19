
export const AUTH_TOKEN = "partyplannertoken"
export const BASE_URL = 'https://party-planner-backend.herokuapp.com/'

let token = localStorage.getItem(AUTH_TOKEN)
export const GET_AXIOS_CONFIG = () => ({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
    }
})