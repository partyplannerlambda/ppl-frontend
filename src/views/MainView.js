import React from 'react';
// import styled from 'styled-components';
import {connect} from 'react-redux';

import Header from '../components/Header'
import EventForm from '../components/EventForm'
import EventCard from '../components/EventCard'

import data from '../dummy-data.js'

function MainView(props){
    
    return (<>
        <Header />
        <div>
            <EventForm />
            <div>
                {data ? data.map(event => <EventCard key={event.id} event={event} />) : <div>Looks like we dont have any events</div>}
            </div>
        </div>
    </>)
}

export default connect(null, {})(MainView)