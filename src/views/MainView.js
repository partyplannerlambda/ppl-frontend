import React, {useEffect} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import Header from '../components/Header'
import EventForm from '../components/EventForm'
import PartyCard from '../components/PartyCard'

import {
    getEventsList,
    addEvent
} from '../actions/partyActions'

function MainView(props){
    useEffect(()=>{
        props.getEventsList()
    }, [])

    console.log(props.events)

    return (<>
        <Header />
        <div>
            <EventForm userId={props.userId} addEvent={event => props.addEvent(props.userId, event)}/>
            <CardContainer>
                {props.events ? props.events.map(party => <PartyCard key={party.id} party={party} />) : <div>Looks like we dont have any events</div>}
            </CardContainer>
        </div>
    </>)
}

export default connect(state => ({
    userId: state.login.userId,
    events: state.events.events
}), {
    getEventsList,
    addEvent
})(MainView)

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`