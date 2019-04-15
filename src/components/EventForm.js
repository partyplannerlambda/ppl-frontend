import React, {useState} from 'react';

export default function(props){
    const [formInputs, setFormInputs] = useState({
        name: "",
        theme: "",
        n_of_guests: undefined,
        budget: undefined,
        date: undefined
    })

    const handleInput = event => {
        setFormInputs({
            ...formInputs,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.group("Output from partyForm");
        console.log(formInputs);
        console.groupEnd();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Event Name"
                value={formInputs.name}
                onChange={handleInput}
            />
            <input
                type="text"
                name="theme"
                placeholder="Event Theme"
                value={formInputs.theme}
                onChange={handleInput}
            />
            <input
                type="text"
                name="guests"
                placeholder="Number of Guests"
                value={formInputs.n_of_guests}
                onChange={handleInput}
            />
            <input
                type="number"
                name="budget"
                placeholder="Event Budget"
                value={formInputs.budget}
                onChange={handleInput}
            />
            <input
                type="date"
                name="date"
                placeholder="Date of Event"
                value={formInputs.date}
                onChange={handleInput}
            />
            <button type="submit">Add Party</button>
        </form>
    )
}