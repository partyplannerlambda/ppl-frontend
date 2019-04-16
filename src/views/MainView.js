import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import Header from '../components/Header'
import EventForm from '../components/EventForm'
import EventCard from '../components/EventCard'

import {
    getEventsList,
    addEvent
} from '../actions/partyActions'

import data from '../dummy-data.js'

function MainView(props){
    
    return (<>
        <Header />
        <div>
            <EventForm userId={props.userId} addEvent={event => addEvent(props.userIs, event)}/>
            <CardContainer>
                {data ? data.map(event => <EventCard key={event.id} event={event} />) : <div>Looks like we dont have any events</div>}
            </CardContainer>
        </div>
    </>)
}

export default connect(state => ({
    userId: state.login.userId
}), {
    getEventsList,
    addEvent
})(MainView)

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`