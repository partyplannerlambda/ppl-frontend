import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { updateEvent, deleteEvent } from "../actions/partyActions";

import { colors } from "../utils/themeColors";

const PartyCard = withRouter(function(props) {
  const { party } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editInputs, setEditInputs] = useState({
    party_name: "",
    theme: "",
    n_of_guests: "",
    budget: "",
    date: `${!!party ? party.date : ""}`
  });

  //anytime party updates we flip out of editing mode
  useEffect(() => {
    setEditInputs(false);
  }, [party]);

  if (!party) {
    return <div>Loading Party Details</div>;
  }

  const pushToPage = () => {
    props.history.push(`parties/${party.id}`);
  };

  const toggleEdit = event => {
    if (event) {
      event.preventDefault();
    }
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
      let validKeys = Object.keys(editInputs).filter(key => !!editInputs[key]);
      let newObj = {};
      for (let key of validKeys) {
        newObj[key] = editInputs[key];
      }
      return newObj;
    };

    let updatedEvent = {
      ...party,
      ...validInputs()
    };
    console.log("we submitted", updatedEvent);

    props.updateEvent(updatedEvent);
    setIsEditing(!isEditing)
  };

  const deleteEvent = event => {
    event.preventDefault();
    let ans = window.confirm("Are You Sure You Want To Delete This Party?");
    if (ans) {
      props.deleteEvent(party);
    }
  };

  return (
    <PartyCardContainer
      eventPage={props.eventPage || false}
      onClick={!props.eventPage ? pushToPage : null}
    >
      <form onSubmit={isEditing ? submitUpdate : () => {}}>
        <div className="cardHeader">
          <div className="title">
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

            {props.eventPage && !isEditing && (
              <button onClick={toggleEdit}>Edit</button>
            )}
          </div>

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
        </div>

        <div className="cardInfo">
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
              step="0.01"
              name="budget"
              onChange={handleInput}
              placeholder={`Budget: ${party.budget}`}
              value={editInputs.budget}
            />
          ) : (
            <p>
              <strong>Budget: </strong>${party.budget}
            </p>
          )}
        </div>

        <div className="cardInfo">
          {props.eventPage && isEditing && (
            <button onClick={toggleEdit}>Cancel</button>
          )}
          {props.eventPage && isEditing && (
            <button type="submit" className="submit">Submit</button>
          )}
          {props.eventPage && isEditing && (
            <button onClick={deleteEvent} className="warning">
              Delete
            </button>
          )}
        </div>
      </form>
    </PartyCardContainer>
  );
});

export default connect(
  null,
  { updateEvent, deleteEvent }
)(PartyCard);

const PartyCardContainer = styled.div`
  display: inline-block;
  width: 80%;
  min-width: 300px;
  ${props => (props.eventPage ? "width: 100%;" : "")}
  ${props => (props.eventPage ? `color: ${colors.darkMain}` : "")}

  margin: ${props => (props.eventPage ? "0 auto" : "15px auto")};
  border-radius: 5px;
  border: ${props => (props.eventPage ? "none" : "1px solid black")};
  box-shadow: ${props =>
    props.eventPage ? "none" : "3px 3px 2px rgba(0, 0, 0, 0.3)"};

  ${props => (!props.eventPage) ? (`
  transition: .15s;
  &:hover{
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }`) : (
    ""
  )}

  strong {
    font-size: inherit;
  }

  form {
    .cardHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      background: ${props => (props.eventPage ? "none" : colors.main)};
      color: ${props => (props.eventPage ? colors.darkMain : "white")};

      @media (max-width: 600px){
        flex-direction: column;
        
      }

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button {
        background: none;
        color: ${colors.lightMain};
        width: unset;
        min-width: unset;
        border: none;

        &:hover {
          color: ${colors.darkMain};
        }
      }

      p {
        font-size: 1.6rem;
      }
    }

    .cardInfo {
      display: flex;
      justify-content: space-between;
      padding: 15px;

      @media (max-width: 800px) {
        strong {
          display: block;
        }
      }

      @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      p {
        font-size: 2em;
        width: 32%;
        @media (max-width: 600px){
          width: 95%;
        }
      }
    
    }

    .submit {
      color: darkblue;
      background: lightskyblue;
      border-color: darkblue;
    }

    input {
      display: block;

      &.partyName {
        font-size: 2.4rem;
      }
    }
  }
`;
