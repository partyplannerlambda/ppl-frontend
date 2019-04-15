import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import { login as doLogin} from '../actions/loginActions'

export function LoginView(props){

    const [cred, setCred] = useState({
        username: "",
        password: ""
    })

    const handleInput = event => {
        setCred({
            ...cred,
            [event.target.name]: event.target.value
        })
    }

    const loginSubmit = event => {
        event.preventDefault();
        props.doLogin(cred)
            .then((...args) => {
                console.log("success", args)
                props.history.push('/');
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Login onSubmit={event => loginSubmit(event)}>
            <h1>Login</h1>
            {props.loginError && <div>{props.loginError}</div>}
            <form>
                <input
                    name="username"
                    value={cred.username}
                    onChange={handleInput} 
                />
                <input
                    name="password"
                    value={cred.password}
                    onChange={handleInput} 
                />
                <button type="submit">Login</button>
            </form>
        </Login>
    )
}

const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`

export default connect(state => ({
    token: state.login.token,
    loginError: state.login.error,
    isLoggedIn: state.login.isLoggedIn
}), {
    doLogin,
})(LoginView)