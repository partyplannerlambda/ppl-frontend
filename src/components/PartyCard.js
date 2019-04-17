import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {updateEvent, deleteEvent} from '../actions/partyActions'

const PartyCard = withRouter(function(props) {
  const { party } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editInputs, setEditInputs] = useState({
    party_name: "",
    theme: "",
    n_of_guests: "",
    budget: "",
    date: `${party ? party.date : ""}`
  });

  if (!party) {
    return <div>Loading Party Details</div>;
  }

  const pushToPage = () => {
    props.history.push(`parties/${party.id}`);
  };

  const toggleEdit = event => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleInput = event => {
    setEditInputs({
      ...editInputs,
      [event.target.name]: event.target.value
    });
  };

  const submitUpdate = event => {
    event.preventDefault();

    let validInputs = () => {
      let validKeys = Object.keys(editInputs).filter(key => !!editInputs[key])
      let newObj = {};
      for (let key of validKeys){
        newObj[key] = editInputs[key]
      }
      return newObj;
    }

    let updatedEvent = {
      ...party,
      ...validInputs()
    }
    console.log("we submitted", updatedEvent);
    
    props.updateEvent(updatedEvent)

  };

  return (
    <PartyCardContainer onClick={!props.eventPage ? pushToPage : null}>
      <form onSubmit={isEditing ? submitUpdate : () => {}}>
        {/* Name */}
        {isEditing ? (
          <input
            className="partyName"
            name="party_name"
            type="text"
            onChange={handleInput}
            placeholder={party.party_name}
            value={editInputs.party_name}
          />
        ) : (
          <h2>{party.party_name}</h2>
        )}

        {/* Theme */}
        {isEditing ? (
          <input
            type="text"
            name="theme"
            onChange={handleInput}
            placeholder={`Theme: ${party.theme}`}
            value={editInputs.theme}
          />
        ) : (
          <p>
            <strong>Theme: </strong>
            {party.theme}
          </p>
        )}

        {/* Number of Guests */}
        {isEditing ? (
          <input
            type="number"
            name="n_of_guests"
            onChange={handleInput}
            placeholder={`Guests: ${party.n_of_guests}`}
            value={editInputs.n_of_guests}
          />
        ) : (
          <p>
            <strong>Guests: </strong>
            {party.n_of_guests}
          </p>
        )}

        {/* Budget */}
        {isEditing ? (
          <input
            type="number"
            name="budget"
            onChange={handleInput}
            placeholder={`Budget: ${party.budget}`}
            value={editInputs.budget}
          />
        ) : (
          <p>
            <strong>Budget: </strong>
            {party.budget}
          </p>
        )}

        {/* Date */}
        {isEditing ? (
          <input
            type="date"
            name="date"
            onChange={handleInput}
            value={editInputs.date}
          />
        ) : (
          <p>
            <strong>Date: </strong>
            {party.date}
          </p>
        )}

        {props.eventPage && !isEditing && (
          <button onClick={toggleEdit}>Edit</button>
        )}
        {props.eventPage && isEditing && (
          <button onClick={toggleEdit}>Cancel</button>
        )}
        {props.eventPage && isEditing && <button type="submit">Submit</button>}
      </form>
    </PartyCardContainer>
  );
});

export default connect(null, {updateEvent, deleteEvent})(PartyCard)

const PartyCardContainer = styled.div`
  display: inline-block;
  width: 80%;
  min-width: 300px;
  padding: 15px;

  margin: 15px auto;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 0.5px rgba(0, 0, 0, 0.3);

  form input {
    display: block;

    &.partyName {
      font-size: 2.4rem;
    }
  }
`;
