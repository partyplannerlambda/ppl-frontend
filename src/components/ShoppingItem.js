import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {
    updateItem, deleteItem
} from '../actions/shoppingActions'

function ShoppingItem(props){
    const {item} = props;

    const toggleItem = event => {
        event.preventDefault();
        props.updateItem({...item, purchased: !!item.purchased ? 0 : 1})
    }

    const deleteItem = event => {
        event.preventDefault();
        props.deleteItem(item)
    }

    return (
        <ShoppingItemContainer className={!!item.purchased ? 'completed' : ""}>
            <p>{item.item}</p>
            <div className="actions">
                <button onClick={toggleItem} className="shoppingAction complete">✓</button>
                <button onClick={deleteItem} className="shoppingAction warning">X</button>
            </div>
        </ShoppingItemContainer>
    )
}

export default connect(null, {
    updateItem, deleteItem
})(ShoppingItem)

const ShoppingItemContainer = styled.div`
    padding: 10px;
    border: 1px solid lightgray;
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

    button.shoppingAction {
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