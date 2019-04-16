import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

export default withRouter(function(props){
    const {event} = props;
    if (!event) {
        return <div>Loading Event Details</div>
    }

    const pushToPage = () => {
        props.history.push(`parties/${event.id}`)
    }

    return(
        <EventCard onClick={!props.mainPage ? pushToPage : null}>
            <h2>{event.name}</h2>
            <p><strong>Theme: </strong>{event.theme}</p>
            <p><strong>Guests: </strong>{event.n_of_guests}</p>
            <p><strong>Budget: </strong>{event.budget}</p>
            <p><strong>Date: </strong>{event.date}</p>
        </EventCard>
    )
})

const EventCard = styled.div`
    display: inline-block;
    width: 80%;
    min-width: 300px;
    padding: 15px;

    margin: 15px auto;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 2px 2px 2px 0.5px rgba(0,0,0,0.3)
`
