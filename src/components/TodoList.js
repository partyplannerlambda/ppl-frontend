import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'

import { getTodosList, addTodo, clearTodos } from "../actions/todoActions";

import TodoItem from "./TodoItem.js";

function TodoList(props) {
  const [todoInput, setTodoInput] = useState("");
  const { party } = props;

  useEffect(() => {
    props.getTodosList(party.id);
    return props.clearTodos;
  }, []);

  if (props.gettingTodosList){
    return (<div className="center"><Loader type="Ball-Triangle" color="#0f0f0f" height={80} width={80} /></div>)
  }

  const handleTodoInput = event => {
    setTodoInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(party.id, todoInput);
    setTodoInput("");
  };

  return (
    <StyledList>
      <h3>TODO List:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoInput"
          value={todoInput}
          onChange={handleTodoInput}
        />
        <button type="submit">Add</button>
      </form>
      {props.todosList.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </StyledList>
  );
}

export default connect(
  state => ({
    todosList: state.todos.todosList,
    gettingTodosList: state.todos.gettingTodosList,
    party: state.events.activeEvent
  }),
  {
    getTodosList,
    addTodo,
    clearTodos
  }
)(TodoList);

const StyledList = styled.div`
  width: 45%;

  form {
    input {
      border-radius: unset;
      border-top-left-radius: 5px;
      width: 80%;
    }
    button {
      border-radius: unset;
      border-top-right-radius: 5px;
      min-width: unset;
      width: 20%;
    }
  }

  @media (max-width: 775px) {
    width: 90%;
  }
`;
