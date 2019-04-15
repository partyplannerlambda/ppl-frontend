import React from 'react';
import {NavLink} from 'react-router-dom'

export default function(props){
    return(
        <header>
            <h1>Party Planner</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
            </nav>
        </header>
    )
}