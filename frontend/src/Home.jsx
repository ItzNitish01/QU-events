// frontend/src/Home.jsx (UPDATED)

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add Link for card navigation
import { useEvents } from './context/EventContext.jsx'; // 👈 Import the hook

const Home = () => {
  const { events, loading, error, fetchEvents } = useEvents(); 
  
  // Fetch events when the component mounts. 
  // Empty dependency array [] ensures this runs only ONCE.
  useEffect(() => {
    fetchEvents();
  }, []); 

  // --- RENDERING LOGIC ---

  // frontend/src/Home.jsx (Updated loading block)

// ...
  if (loading) {
    // Show 3 skeleton cards while loading
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


{events.map(event => (
  // Use Link to make the entire card clickable and link to its details page
  <Link to={`/event/${event._id}`} key={event._id} className="event-card-link">
    <div className="event-card">
      <div className="event-image-container"> {/* CHANGE CLASS NAME HERE */}
        {/* 🎯 Use actual image tag now */}
        <img 
          src={event.image || 'https://via.placeholder.com/400x200?text=QU-events'} 
          alt={event.title} 
          className="event-image" 
        />
      </div>
      <div className="event-info">
        <h2>{event.title}</h2>
        <p className="date">🗓️ {new Date(event.date).toLocaleDateString()}</p> 
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