import React, {useState, useEffect} from 'react';

import {todos} from '../dummy-data.js'

export default function(props){
    const [todoInput, setTodoInput] = useState("")

    const handleTodoInput = event => {
        setTodoInput(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(todoInput)
    }

    return (
        <div>
            <h3>TODO List:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoInput" value={todoInput} onChange={handleTodoInput}/>
                <button type="submit">Add Todo</button>
            </form>
            {todos ? todos.map(item => <div>{item.text}</div>) : <p>Add a ToDo!</p>}

        </div>
    )
}