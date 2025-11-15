// frontend/src/Profile.jsx (Enhanced Student Dashboard)

import React, { useState } from 'react';
import './Profile.css';
// import { useEvents } from './context/EventContext.jsx'; // Future use for saved events

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  // const { savedEvents } = useEvents(); // Future use

  // Dummy User Data (to be replaced by Authentication Context later)
  const user = {
    name: "Aisha Al-Thani",
    email: "aisha.althani@qu.edu",
    eventsAttended: 12,
    eventsSavedCount: 7, // Using a count for now
  };
  
  // Dummy Saved Events List for UI
  const dummySavedEvents = [
    { id: 'e3', title: 'Tech Innovation Summit', date: 'Jan 15, 2026' },
    { id: 'e4', title: 'QU Poetry Night', date: 'Dec 5, 2025' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="profile-details-content">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
            <button className="edit-button">Edit Profile</button>

            <div className="stats-grid">
              <div className="stat-item">
                <h4>{user.eventsAttended}</h4>
                <p>Events Attended</p>
              </div>
              <div className="stat-item">
                <h4>{user.eventsSavedCount}</h4>
                <p>Events Saved</p>
              </div>
            </div>
          </div>
        );
      
      case 'saved':
        return (
          <div className="saved-events-list">
            <h3>My Saved Events ({dummySavedEvents.length})</h3>
            {dummySavedEvents.map(event => (
              <div key={event.id} className="saved-event-item">
                <p>🗓️ {event.date}</p>
                <h4>{event.title}</h4>
                <button>View</button>
              </div>
            ))}
          </div>
        );
      
      case 'settings':
        return (
          <div className="settings-content">
            <h3>App Settings</h3>
            <p>Notification preferences (Coming Soon)</p>
            <button className="logout-button">Logout (Future Feature)</button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>👤 Student Dashboard</h1>
      </header>
      
      {/* Profile Picture Placeholder */}
      <div className="profile-picture-placeholder">
        <span>{user.name[0]}</span> 
      </div>

      {/* Tab Navigation */}
      <div className="profile-tabs">
        <button 
          className={activeTab === 'profile' ? 'active' : ''} 
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={activeTab === 'saved' ? 'active' : ''} 
          onClick={() => setActiveTab('saved')}
        >
          Saved Events
        </button>
        <button 
          className={activeTab === 'settings' ? 'active' : ''} 
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>
      
      <div className="profile-content-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;