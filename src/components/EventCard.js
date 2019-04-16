import React from 'react'

export default function(props){
    const {event} = props;
    if (!event) {
        return <div>It Seems this event doesn't exist</div>
    }

    return(
        <div>
            <h2>{event.name}</h2>
            <p><strong>Theme: </strong>{event.theme}</p>
            <p><strong>Guests: </strong>{event.n_of_guests}</p>
            <p><strong>Budget: </strong>{event.budget}</p>
            <p><strong>Date: </strong>{event.date}</p>
        </div>
    )
}