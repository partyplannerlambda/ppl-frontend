import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getTodosList, addTodo} from '../actions/todoActions'

function TodoList(props){
    const [todoInput, setTodoInput] = useState("")
    const {party} = props

    useEffect(()=>{
        console.log("Getting Todo List")
        props.getTodosList(party.id);
    }, [])

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
            {props.todosList ? props.todosList.map(item => <div key={item.id}>{item.text}</div>) : <p>Add a ToDo!</p>}

        </div>
    )
}

export default connect(state => ({
    todosList: state.todos.todosList
}), {
    getTodosList,
    addTodo
})(TodoList)