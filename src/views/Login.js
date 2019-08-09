import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import { login as doLogin, register as doRegister} from '../actions/loginActions'

export function LoginView(props){

    if (props.isLoggingIn || props.isRegistering) {
        return (<div className="center"><Loader type="Ball-Triangle" color="#0f0f0f" height={80} width={80} /></div>)
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
        console.log(rest)
        props.doRegister(rest)
    }

    return (
        <Container>
        <Login onSubmit={event => register ? registerSubmit(event) : loginSubmit(event)}>
            <div className="title">
                <h1>Party Planner</h1>
                <h3>The App!</h3>
                <h2>{register ? "Register" : "Login"}</h2>
            </div>
            {props.registerSuccesful && <div className="prompt success">Login with your newly Created Credentials!</div>}
            {props.error && <div className="warning">{props.error}</div>}
            {localError && <div className="warning">{localError}</div>}
            <form>
                <input
                    name="username"
                    value={cred.username}
                    placeholder="Username"
                    onChange={handleInput}
                />
                <input
                    name="password"
                    type="text" // change to password
                    value={cred.password}
                    placeholder="Password"
                    onChange={handleInput} 
                />
                {register && (
                    <input
                        name="confirm"
                        type="text" // change to password
                        value={cred.confirm}
                        placeholder="Confirm Password"
                        onChange={handleInput} 
                    />
                )}
                <button type="submit">{register ? "Register" : "Login"}</button>
            </form>
            {register ? (
                <div>Already have an Account? <Link to='/login'>Login in Here!</Link></div>
            ) : (
                <div>New to Party Planner? <Link to='/register'>Create an Account!</Link></div>
            )}
        </Login>
        </Container>
    )
}

const Container = styled.main`
    background: url('imgs/moodModal.jpg');
    background-size: cover;

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Login = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: white;
    margin: 0 auto;
    padding: 20px 30px;
    border-radius: 15px;

    width: 100%;
    max-width: 500px;

    .title {
        text-align: center;
        margin-bottom: 75px;

        h3 {
            margin-bottom: 25px;
        }
    }

    a {
        color: blue;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        width: 100%;

        input, button {
            width: 90%;
            font-size: 2rem;
        }

        input {
            margin-bottom: 3px;
        }

        input:last-of-type{
            margin-bottom: 20px;
        }

        button {
            background: lightskyblue;
            margin-bottom: 20px;

            border: 2px solid lightskyblue;
            transition: .3s;

            &:hover {
                box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
                color: darkblue;
                background: white;
            }
        }
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