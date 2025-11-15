// frontend/src/Home.jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useEvents } from './context/EventContext.jsx'; 
import './App.css'; 

const Home = () => {
  const { events, loading, error, fetchEvents } = useEvents(); 
  
  useEffect(() => {
    fetchEvents();
  }, []); 

  // --- RENDERING LOGIC ---

  if (loading) {
    // Skeleton loader implementation
    const skeletonCards = [1, 2, 3]; 
    return (
      <div className="home-container">
        <header className="header"><h1>QU-events</h1></header>
        <input type="text" placeholder="🔍 Search events..." className="search-bar" />
        <div className="event-feed">
          {skeletonCards.map(i => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text-container">
                <div className="skeleton-text title"></div>
                <div className="skeleton-text date"></div>
                <div className="skeleton-text date"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-container">
        <header className="header"><h1>QU-events</h1></header>
        <p style={{ color: 'red' }}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <header className="header">
        <h1>QU-events</h1>
      </header>
      <input type="text" placeholder="🔍 Search events..." className="search-bar" />
      
      <div className="event-feed">
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
                {/* Defensive date parsing */}
                <p className="date">🗓️ {event.date ? new Date(event.date).toLocaleDateString() : 'Date N/A'}</p> 
                <p className="location">📍 {event.location}</p>
              </div>
            </div>
          </Link>
        ))}
        {events.length === 0 && !loading && <p>No events found.</p>}
      </div>
    </div>
  );
};

export default Home;