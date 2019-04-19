import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from 'react-loader-spinner';
import {
  getItemsList,
  addItem,
  clearShoppingList
} from "../actions/shoppingActions";

import ShoppingItem from "./ShoppingItem.js";

function ShoppingList(props) {
  const { party } = props;

  const [budgetLeft, setBudgetLeft] = useState(() => party.budget);
  const [shoppingInput, setShoppingInput] = useState("");

  useEffect(() => {
    props.getItemsList(party.id);
    return props.clearShoppingList;
  }, []);

  useEffect(() => {
    console.log("updating budget");
    setBudgetLeft(
      props.shoppingList &&
        party.budget -
          props.shoppingList.reduce(
            (total, current) =>
              !!current.purchased ? total + current.price : total,
            0
          )
    );
  }, [props.shoppingList]);

  if (props.gettingShoppingList){
    return (<div className="center"><Loader type="Ball-Triangle" color="#0f0f0f" height={80} width={80} /></div>)
  }

  const handleShoppingInput = event => {
    setShoppingInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addItem(party.id, shoppingInput);
    setShoppingInput("");
  };

  return (
    <ListContainer>
      <div className="listHeader">
        <h3>Shopping List:</h3>
        <span>
          <strong>Budget Left:</strong>
          {` $${budgetLeft.toFixed(2)}`}
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="shoppingInput"
          value={shoppingInput}
          onChange={handleShoppingInput}
        />
        <button type="submit">Add</button>
      </form>
      {props.shoppingList.map(item => (
        <ShoppingItem key={item.id} item={item} />
      ))}
    </ListContainer>
  );
}

export default connect(
  state => ({
    shoppingList: state.shopping.shoppingList,
    gettingShoppingList: state.shopping.gettingShoppingList,
    party: state.events.activeEvent
  }),
  {
    getItemsList,
    addItem,
    clearShoppingList
  }
)(ShoppingList);

const ListContainer = styled.div`
  width: 45%;

  @media (max-width: 775px) {
    width: 90%;
    margin-top: 50px;
  }

  .listHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 5px;
  }

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
`;
