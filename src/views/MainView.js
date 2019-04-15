import React from 'react';
// import styled from 'styled-components';
// import {connect} from 'react-redux';

import Header from '../components/Header'
import PartyForm from '../components/PartyForm'

export default function(props){

    return (<>
        <Header />
        <div>
            <PartyForm />
        </div>
    </>)
}