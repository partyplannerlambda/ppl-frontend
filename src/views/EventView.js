import React, {useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import Header from '../components/Header'
import PartyCard from '../components/PartyCard'
import EventMoodModal from '../components/EventMoodModal'
import TodoList from '../components/TodoList'
import ShoppingList from '../components/ShoppingList'

import {
    getEvent
} from '../actions/partyActions'

function EventView(props){

    useEffect(()=>{
        props.getEvent(props.match.params.id)
    }, [])

    if (!props.party){
        return <div><Header />Loading Party Info</div>
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
    getEvent
})(EventView)

const EventViewBody = styled.div`
    .listContainer {
        display: flex;
        justify-content: space-evenly;
        padding: 50px 0;
    }
    padding-bottom: 50px;
`