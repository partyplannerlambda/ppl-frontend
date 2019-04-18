import React from 'react';
import styled from 'styled-components';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

import {logout} from '../actions/loginActions'
import {colors} from '../utils/themeColors'

const Header = withRouter(function(props){
    const pushHome = event => {
        event.preventDefault();
        props.history.push("/")
    }

    const logout = event => {
        event.preventDefault();
        props.logout();
        props.history.push("/login")
    }

    return(
        <HeaderContainer>
            <h1 onClick={pushHome}>Party Planner</h1>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <a href="/logout" onClick={logout}>Logout</a>
            </nav>
        </HeaderContainer>
    )
})

export default connect(null, {logout})(Header)

const HeaderContainer = styled.header`
    width: 100%;
    min-height: 100px;
    padding: 0 50px;

    background: ${colors.darkMain};
    color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        padding: 10px 0;
    }

    nav {
        height: 100%;

        a {
            display: inline-block;
            font-size: 2rem;
            height: 100%;
            transition: .25s;
            margin-left: 20px;

            &:hover {
                text-decoration: none;
                transform: scale(1.1)
            }

            &.active {
                border-bottom: 1px solid white;
            }
        }
    }
`