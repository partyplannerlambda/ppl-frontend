import React, {useState} from 'react';

export default function(props){
    const [formInputs, setFormInputs] = useState({
        name: "",
        theme: "",
        guests: 0,
        budget: 0,
        date: ""
    })

    const handleInput = event => {
        setFormInputs({
            ...formInputs,
            [event.target.name]: event.target.value
        })
    }

    return(
        <form>
            <input
                type="text"
                name="name"
                value={formInputs.name}
                onChange={handleInput}
            />
            <input
                type="text"
                name="theme"
                value={formInputs.theme}
                onChange={handleInput}
            />
            <input
                type="text"
                name="guests"
                value={formInputs.guests}
                onChange={handleInput}
            />
            <input
                type="number"
                name="budget"
                value={formInputs.budget}
                onChange={handleInput}
            />
            <input
                type="date"
                name="date"
                value={formInputs.date}
                onChange={handleInput}
            />
            <button type="submit">Add Party</button>
        </form>
    )
}