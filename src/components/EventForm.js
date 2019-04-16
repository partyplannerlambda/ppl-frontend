import React, {useState} from 'react';
import styled from 'styled-components';

// maybe this could be memoized inside the component?
function resetFormState(){
    const date = new Date(Date.now())
    let monthString = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    return ({
        party_name: "",
        theme: "",
        n_of_guests: 0,
        budget: 0,
        date: `${date.getFullYear()}-${monthString}-${date.getDate()}`
    })
}

export default function(props){
    const [formInputs, setFormInputs] = useState(resetFormState())

    const handleInput = event => {
        setFormInputs({
            ...formInputs,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        // props.addEvent(formInputs)
        console.group("Output from partyForm");
        console.log(JSON.stringify(formInputs));
        console.groupEnd();
        props.addEvent(formInputs)
        setFormInputs(resetFormState())
    }

    return(
        <EventForm onSubmit={handleSubmit}>
            <div className="formCol">
                <input
                    type="text"
                    name="party_name"
                    placeholder="Event Name"
                    value={formInputs.party_name}
                    onChange={handleInput}
                />
                <input
                    type="text"
                    name="theme"
                    placeholder="Event Theme"
                    value={formInputs.theme}
                    onChange={handleInput}
                />
            </div>
            <div className="formCol">
                <input
                    type="number"
                    name="n_of_guests"
                    placeholder="Number of Guests"
                    value={formInputs.n_of_guests || undefined}
                    onChange={handleInput}
                />
                <input
                    type="number"
                    name="budget"
                    placeholder="Event Budget"
                    value={formInputs.budget || undefined}
                    onChange={handleInput}
                />
            </div>
            <div className="formCol last">
                <input
                    type="date"
                    name="date"
                    placeholder="Date of Event"
                    value={formInputs.date}
                    onChange={handleInput}
                />
                <button type="submit">Add Party</button>
            </div>
        </EventForm>
    )
}

const EventForm = styled.form`
    padding: 30px 0;

    width: 80%;
    margin: 0 auto;
    display: flex;

    .formCol {
        input {
            width: 100%;
        }
        button {
            width: 100%;
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;

        .formCol {
            display: flex;
        }
    }

`