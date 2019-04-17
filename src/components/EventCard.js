import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

export default withRouter(function(props) {
  const { event } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editInputs, setEditInputs] = useState({
    party_name: "",
    theme: "",
    n_of_guests: "",
    budget: "",
    date: `${event ? event.date : ""}`
  })

  if (!event) {
    return <div>Loading Event Details</div>;
  }

  const pushToPage = () => {
    props.history.push(`parties/${event.id}`);
  };

  const toggleEdit = event => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleInput = event => {
    setEditInputs({
      ...editInputs,
      [event.target.name]: event.target.value
    })
  };

  const submitUpdate = event => {
    event.preventDefault();
    console.log("we submitted")
  }

  return (
    <EventCard onClick={!props.eventPage ? pushToPage : null}>
      <form onSubmit={isEditing? submitUpdate : ()=>{}}>
        {/* Name */}
        {isEditing ? (<input
            className="partyName"
            name="party_name"
            type="text"
            onChange={handleInput}
            placeholder={event.party_name}
            value={editInputs.party_name}
          />) :(<h2>{event.party_name}</h2>)}

        {/* Theme */}
        {isEditing ? (
          <input
            type="text"
            name="theme"
            onChange={handleInput}
            placeholder={`Theme: ${event.theme}`}
            value={editInputs.theme}
          />
        ) : (
          <p>
            <strong>Theme: </strong>
            {event.theme}
          </p>
        )}

        {/* Number of Guests */}
        {isEditing ? (
          <input
            type="number"
            name="n_of_guests"
            onChange={handleInput}
            placeholder={`Guests: ${event.n_of_guests}`}
            value={editInputs.n_of_guests}
          />
        ) : (
          <p>
            <strong>Guests: </strong>
            {event.n_of_guests}
          </p>
        )}

        {/* Budget */}
        {isEditing ? (
          <input
            type="number"
            name="budget"
            onChange={handleInput}
            placeholder={`Budget: ${event.budget}`}
            value={editInputs.budget}
          />
        ) : (
          <p>
            <strong>Budget: </strong>
            {event.budget}
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
            {event.date}
          </p>
        )}

        {props.eventPage && !isEditing && <button onClick={toggleEdit}>Edit</button>}
        {props.eventPage && isEditing && <button onClick={toggleEdit}>Cancel</button>}
        {props.eventPage && isEditing && <button type="submit">Submit</button>}
      </form>
    </EventCard>
  );
});

const EventCard = styled.div`
  display: inline-block;
  width: 80%;
  min-width: 300px;
  padding: 15px;

  margin: 15px auto;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 0.5px rgba(0, 0, 0, 0.3);

  form input{
      display: block;

      &.partyName {
          font-size: 2.4rem;
      }
  }
`;

