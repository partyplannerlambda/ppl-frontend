import React from 'react';

export default function(props){

    return(
        <form>
            <input type="text" name="name" />
            <input type="text" name="theme" />
            <input type="text" name="guests" />
            <input type="number" name="budget" />
            <input type="date" name="date" />
            <button type="submit">Add Party</button>
        </form>
    )
}