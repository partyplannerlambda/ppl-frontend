import React, {useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import Header from '../components/Header'
import PartyCard from '../components/PartyCard'
import EventMoodModal from '../components/EventMoodModal'
import TodoList from '../components/TodoList'
import ShoppingList from '../components/ShoppingList'

import {
    getEvent, clearActiveEvent
} from '../actions/partyActions'

function EventView(props){

    useEffect(()=>{
        props.getEvent(props.match.params.id)
        return props.clearActiveEvent
    }, [])

    if (!props.party){
        return <div className="center"><Header /><Loader type="Ball-Triangle" color="#0f0f0f" height={80} width={80} /></div>
    }

    if (props.party === "deleted"){
       return <Redirect to="/" />
    }

    return (<> 
        <Header />
        <EventViewBody>
            <PartyCard eventPage party={props.party}/>
            <EventMoodModal party={props.party}/>
            <div className="listContainer">
                <TodoList />
                <ShoppingList />
            </div>
        </EventViewBody>
    </>)
}

export default connect(state => ({
    party: state.events.activeEvent
}), {
    getEvent,
    clearActiveEvent
})(EventView)

const EventViewBody = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    
    .listContainer {
        display: flex;
        justify-content: space-evenly;
        padding: 50px 0;

        @media (max-width: 775px) {
            flex-direction: column;
            align-items: center;
        }
    }

    padding-bottom: 50px;
`