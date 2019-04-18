import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getItemsList, addItem} from '../actions/shoppingActions'

import ShoppingItem from './ShoppingItem.js'

function ShoppingList(props){
    const [shoppingInput, setShoppingInput] = useState("")
    const {party} = props

    useEffect(()=>{
        props.getItemsList(party.id);
    }, [party])

    const handleShoppingInput = event => {
        setShoppingInput(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.addItem(party.id, shoppingInput)
        setShoppingInput("")
    }
    
    return (
        <div>
            <h3>Shopping List:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="shoppingInput" value={shoppingInput} onChange={handleShoppingInput}/>
                <button type="submit">Add Shopping</button>
            </form>
            {props.shoppingList.map(item => <ShoppingItem key={item.id} item={item} />)}

        </div>
    )
}

export default connect(state => ({
    shoppingList: state.shopping.shoppingList,
    party: state.events.activeEvent
}), {
    getItemsList,
    addItem
})(ShoppingList)