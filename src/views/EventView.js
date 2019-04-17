import React, {useEffect} from 'react';
// import styled from 'styled-components';
import {connect} from 'react-redux';

import Header from '../components/Header'
import EventCard from '../components/EventCard'
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

    if (!props.event){
        return <div><Header />Loading Event Info</div>
    }

    console.log(props.event)
    return (<> 
        <Header />
        <EventCard eventPage event={props.event}/>
        <EventMoodModal event={props.event}/>
        <div className="listContainer">
            <TodoList event={props.event} />
            <ShoppingList event={props.event} />
        </div>
    </>)
}

export default connect(state => ({
    event: state.events.activeEvent
}), {
    getEvent
})(EventView)
