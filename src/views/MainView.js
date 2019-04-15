import React from 'react';
// import styled from 'styled-components';
// import {connect} from 'react-redux';

import Header from '../components/Header'
import EventForm from '../components/EventForm'

export default function(props){

    return (<>
        <Header />
        <div>
            <EventForm />
        </div>
    </>)
}