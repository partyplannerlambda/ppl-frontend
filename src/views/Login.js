import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import { login as doLogin, register as doRegister} from '../actions/loginActions'

export function LoginView(props){

    if (props.isLoggingIn || props.isRegistering) {
        return (<div>Validating</div>)
    }

    const [cred, setCred] = useState({
        username: "",
        password: "",
        confirm: ""
    })
    const [error, setError] = useState("")

    const register = props.match.url.includes('register')

    const handleInput = event => {
        setCred({
            ...cred,
            [event.target.name]: event.target.value
        })
    }

    const loginSubmit = event => {
        event.preventDefault();
        props.doLogin(cred)
            .then(res => {
                console.log("inside Login.js")
                console.log("successful Login", res)
                props.history.push('/');
            })
            .catch(err => {
                console.log(err)
            })
    }

    const registerSubmit = event => {
        event.preventDefault();
        if (cred.password !== cred.confirm){
            setError("Passwords do not match")
            return
        }

        let {confirm, ...rest} = cred;

        props.doRegister(rest)
            .then(res => {
                console.log("inside Login.js")
                console.log("Succesful Register", res)
                props.history.push('/login');
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <Login onSubmit={event => register ? registerSubmit(event) : loginSubmit(event)}>
            <h1>{register ? "Register" : "Login"}</h1>
            {props.loginError && <div>{props.loginError}</div>}
            {error && <div>{error}</div>}
            <form>
                <input
                    name="username"
                    value={cred.username}
                    onChange={handleInput} 
                />
                <input
                    name="password"
                    type="text" // change to password
                    value={cred.password}
                    onChange={handleInput} 
                />
                {register && (
                    <input
                        name="confirm"
                        type="text" // change to password
                        value={cred.confirm}
                        onChange={handleInput} 
                    />
                )}
                <button type="submit">{register ? "Register" : "Login"}</button>
            </form>
            {register ? (
                <div>Already have an Account?<Link to='/login'>Login in Here!</Link></div>
            ) : (
                <div>New to Party Planner?<Link to='/register'>Create an Account!</Link></div>
            )}
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
    isLoggingIn: state.login.isLoggingIn,
    loginError: state.login.loginError,
    isLoggedIn: state.login.isLoggedIn,
    registerSuccesful: state.login.registerSuccesful,
    isRegistering: state.login.isRegistering,
    registerError: state.login.registerError

}), {
    doLogin,
    doRegister
})(LoginView)