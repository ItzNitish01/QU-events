// frontend/src/EventDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom'; // To simulate getting an event ID
import './EventDetails.css';

const EventDetails = () => {
  // Use useParams to show that routing with dynamic IDs is functional
  const { id } = useParams();
  
  // Dummy Event Data for UI construction
  const event = {
    id: id || 'e123', // Use ID from URL or a default
    title: 'The Annual Tech Innovation Summit',
    date: '🗓️ January 15, 2026',
    time: '⏰ 10:00 AM - 4:00 PM',
    location: '📍 QU Engineering Auditorium',
    description: 
      "Join us for a day of groundbreaking discussions and demonstrations of the latest technological advancements from students and faculty. Highlights include a robotics competition and a keynote address on AI ethics. Lunch will be provided.",
    host: 'QU Computer Science Club',
    rsvpCount: 150,
  };

  const handleRsvp = () => {
    alert(`RSVP successful for event: ${event.title}`);
  };

  return (
    <div className="event-details-container">
      {/* 1. Banner Image */}
      <div className="banner-image-placeholder">
        [Banner Image for {event.title}]
      </div>

      <div className="content-area">
        {/* 2. Event Title */}
        <h1 className="event-title">{event.title}</h1>

        {/* 3. Details */}
        <div className="details-box">
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>{event.location}</p>
        </div>

        {/* Description */}
        <h2>About this Event</h2>
        <p className="event-description">{event.description}</p>

        {/* Host and RSVP Count */}
        <div className="metadata">
          <p><strong>Hosted By:</strong> {event.host}</p>
          <p><strong>Attendees:</strong> {event.rsvpCount}</p>
        </div>

        {/* 4. RSVP Button */}
        <button className="rsvp-button" onClick={handleRsvp}>
          RSVP Now (Free)
        </button>
      </div>
    </div>
  );
};

export default EventDetails;