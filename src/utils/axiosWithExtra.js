import axios from 'axios';
import { AUTH_TOKEN, BASE_URL } from '../config'


let token = localStorage.getItem(AUTH_TOKEN)

export default axios.create({
    
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
    }
})

export function getAxios(){

    return (axios.create({
    
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
        }
    }))
} 