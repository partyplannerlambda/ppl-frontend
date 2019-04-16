import React, {useEffect, useState} from 'react';
// import styled from 'styled-components';
import {connect} from 'react-redux';

import Header from '../components/Header'
import EventCard from '../components/EventCard'
import EventMoodModal from '../components/EventMoodModal'

import data from '../dummy-data';

export default function(props){
    const [event, setEvent] = useState(undefined);

    useEffect(()=>{
        setEvent(data.find(event => event.id == props.match.params.id))
    }, [])

    console.log(event)
    return (<> 
        <Header />
        <EventCard mainPage event={event}/>
        <EventMoodModal />
    </>)
}

