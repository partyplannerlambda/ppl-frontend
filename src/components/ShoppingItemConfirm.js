import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

function BuyItem(props){

    return (
        <ModalContainer>
            <form>
                <p>How much did this cost?</p>
                <input type="number" step="0.01" /> 
                <button type="submit">Buy</button>
                <button>Cancel</button>
            </form>
        </ModalContainer>
    )
}

export default connect(null,{})(BuyItem)

const ModalContainer = styled.div`
    width: 100vh;
    height: 98vw;
    background: rgba(0,0,0,0.4);
    
    position: absolute;
    z-index: 99;

    form {
        background: white;
        border-radius: 10px;
        padding: 15px;
    }
`