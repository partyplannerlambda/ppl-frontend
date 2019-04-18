import React, {useEffect} from 'react';
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
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
        props.getEventsList();
    }, [])

    console.log(props.events)

    return (<>
        <Header />
        <SubHeader><h2>Add A Party!</h2></SubHeader>
        {props.isAddingEvent && <Loader type="Ball-Triangle" color="#0f0f0f" height={80} width={80} />}
        <div>
            <EventForm userId={props.userId} addEvent={event => props.addEvent(props.userId, event)}/>
            <SubHeader><h1>Your Parties</h1></SubHeader>
            <CardContainer>
                {props.isLoadingEvents && <Loader type="Ball-Triangle" color="#0f0f0f" height={80} width={80} />}
                {!!props.events ? props.events.map(party => <PartyCard key={party.id} party={party} />) : <div>No Parties?</div>}
            </CardContainer>
        </div>
    </>)
}

export default connect(state => ({
    userId: state.login.userId,
    events: state.events.events,
    isLoadingEvents: state.events.gettingEventsList,
    isAddingEvent: state.events.addingEvent
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