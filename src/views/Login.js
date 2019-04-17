import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom'

import { login as doLogin, register as doRegister} from '../actions/loginActions'

export function LoginView(props){

    if (props.isLoggingIn || props.isRegistering) {
        return (<div>Validating</div>)
    }
    if (props.isLoggedIn) {
        return <Redirect to="/" />
    }
    if (props.registerSuccesful && props.match.url.includes("register")){
        return <Redirect to="/login" />
    }

    const [cred, setCred] = useState({
        username: "",
        password: "",
        confirm: ""
    })
    const [localError, setError] = useState("")

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
    }

    const registerSubmit = event => {
        event.preventDefault();
        
        if (cred.password !== cred.confirm){
            setError("Passwords do not match")
            return
        }

        setError("")
        let {confirm, ...rest} = cred;
        props.doRegister(rest)
    }

    return (
        <Login onSubmit={event => register ? registerSubmit(event) : loginSubmit(event)}>
            <h1>{register ? "Register" : "Login"}</h1>
            {props.registerSuccesful && <div className="prompt">Login with your newly Created Credentials!</div>}
            {props.error && <div className="warning">{props.error}</div>}
            {localError && <div className="warning">{localError}</div>}
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
    error: state.login.error,
    isLoggedIn: state.login.isLoggedIn,
    registerSuccesful: state.login.registerSuccesful,
    isRegistering: state.login.isRegistering

}), {
    doLogin,
    doRegister
})(LoginView)