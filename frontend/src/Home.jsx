// frontend/src/Home.jsx (Updated Snippet)

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from './context/EventContext.jsx'; 

const Home = () => {
  const { events, loading, error, fetchEvents } = useEvents(); 
  // ... useEffect and loading/error checks remain the same ...

  return (
    <div className="home-container">
      {/* ... header and search bar ... */}
      
      <div className="event-feed">
        {/* 🎯 DEFENSIVE CHECK: Ensure events is an array before mapping */}
        {Array.isArray(events) && events.map(event => (
          <Link to={`/event/${event._id}`} key={event._id} className="event-card-link">
            <div className="event-card">
              <div className="event-image-container">
                <img 
                  src={event.image || 'https://via.placeholder.com/400x200?text=QU-events'} 
                  alt={event.title || 'Event Image'} 
                  className="event-image" 
                />
              </div>
              <div className="event-info">
                <h2>{event.title}</h2>
                {/* 🎯 ADDED SAFE DATE PARSING */}
                <p className="date">🗓️ {event.date ? new Date(event.date).toLocaleDateString() : 'Date N/A'}</p> 
                <p className="location">📍 {event.location}</p>
              </div>
            </div>
          </Link>
        ))}
        {(events.length === 0 || !Array.isArray(events)) && !loading && <p>No events found.</p>}
      </div>
    </div>
  );
};

export default Home;