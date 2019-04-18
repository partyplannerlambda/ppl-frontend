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
        setTimeout(props.getEventsList, 600);
    }, [])

    console.log(props.events)

    return (<>
        <Header />
        <SubHeader><h2>Add A Party!</h2></SubHeader>
        <div>
            <EventForm userId={props.userId} addEvent={event => props.addEvent(props.userId, event)}/>
            <SubHeader><h1>Your Parties</h1></SubHeader>
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

const SubHeader = styled.div`
    width: 80%;
    margin: 20px auto 0;
    text-align: center;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`