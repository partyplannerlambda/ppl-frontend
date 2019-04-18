import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { getItemsList, addItem } from "../actions/shoppingActions";

import ShoppingItem from "./ShoppingItem.js";

function ShoppingList(props) {
  const { party } = props;

  const [budgetLeft, setBudgetLeft] = useState(() => party.budget);
  const [shoppingInput, setShoppingInput] = useState("");

  useEffect(() => {
    props.getItemsList(party.id);
  }, [party]);

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
        <button type="submit">Add Shopping</button>
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
    party: state.events.activeEvent
  }),
  {
    getItemsList,
    addItem
  }
)(ShoppingList);

const ListContainer = styled.div`
    .listHeader {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 5px;
    }
`