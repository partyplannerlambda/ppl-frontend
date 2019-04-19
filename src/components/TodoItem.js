import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {
    updateTodo, deleteTodo
} from '../actions/todoActions'

function TodoItem(props){
    const {todo} = props;

    const toggleItem = event => {
        event.preventDefault();
        props.updateTodo({...todo, completed: !todo.completed})
    }

    const deleteItem = event => {
        event.preventDefault();
        props.deleteTodo(todo)
    }

    return (
        <TodoItemContainer className={todo.completed ? 'completed' : ""}>
            <p>{todo.item}</p>
            <div className="actions">
                <button onClick={toggleItem} className="todoAction complete">✓</button>
                <button onClick={deleteItem} className="todoAction warning">X</button>
            </div>
        </TodoItemContainer>
    )
}

export default connect(null, {
    updateTodo, deleteTodo
})(TodoItem)

const TodoItemContainer = styled.div`
    padding: 10px;
    border: 1px solid lightgray;
    border-top: none;
    display: flex;
    justify-content: space-between;

    &.completed {
        background: lightgreen;
        p {
            text-decoration: line-through;
        }
    }

    p {
        display: inline;
    }

    button.todoAction {
        display: inline;
        border: none;
        background: none;
        min-width: unset;
        padding: 0;

        &:last-child {
            margin-left: 15px;
        }

        &.complete {
            color: darkgreen;
        }

        &:hover {
            transform: scale(1.15);
            text-shadow: 1px 1px 1px rgba(0,0,0,.4);
        }
    }
`