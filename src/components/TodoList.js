import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getTodosList, addTodo} from '../actions/todoActions'

import TodoItem from './TodoItem.js'

function TodoList(props){
    const [todoInput, setTodoInput] = useState("")
    const {party} = props

    useEffect(()=>{
        props.getTodosList(party.id);
    }, [party])

    const handleTodoInput = event => {
        setTodoInput(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.addTodo(party.id, todoInput)
        setTodoInput("")
    }
    
    return (
        <div>
            <h3>TODO List:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoInput" value={todoInput} onChange={handleTodoInput}/>
                <button type="submit">Add Todo</button>
            </form>
            {props.todosList.map(todo => <TodoItem key={todo.id} todo={todo} />)}

        </div>
    )
}

export default connect(state => ({
    todosList: state.todos.todosList,
    party: state.events.activeEvent
}), {
    getTodosList,
    addTodo
})(TodoList)