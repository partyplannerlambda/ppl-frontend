import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

export default withRouter(function(props) {
  const { event } = props;
  const [isEditing, setIsEditing] = useState(false);
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
    return;
  };

  return (
    <EventCard onClick={!props.eventPage ? pushToPage : null}>
      <form>
        {/* Name */}
        {isEditing ? (<input
            className="partyName"
            type="text"
            onChange={handleInput}
            placeholder={event.party_name}
          />) :(<h2>{event.party_name}</h2>)}

        {/* Theme */}
        {isEditing ? (
          <input
            type="text"
            onChange={handleInput}
            placeholder={`Theme: ${event.theme}`}
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
            onChange={handleInput}
            placeholder={`Guests: ${event.n_of_guests}`}
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
            onChange={handleInput}
            placeholder={`Budget: ${event.budget}`}
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
            onChange={handleInput}
            value={event.date}
          />
        ) : (
          <p>
            <strong>Date: </strong>
            {event.date}
          </p>
        )}

        {props.eventPage && !isEditing && <button onClick={toggleEdit}>Edit</button>}
        {props.eventPage && isEditing && <button onClick={toggleEdit}>Cancel</button>}
        {props.eventPage && isEditing && <button onClick={toggleEdit}>Submit</button>}
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

