import React, {useState, useEffect} from 'react';

import {shopping} from '../dummy-data.js'

export default function(props){
    const [shoppingInput, setShoppingInput] = useState("")

    const handleShoppingInput = event => {
        setShoppingInput(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(shoppingInput)
    }

    return (
        <div>
            <h3>Shopping List:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="shoppingInput" value={shoppingInput} onChange={handleShoppingInput}/>
                <button type="submit">Add Item</button>
            </form>
            {shopping ? shopping.map(item => <div key={item.id}>{item.text}</div>) : <p>Add an item to your list!</p>}

        </div>
    )
}