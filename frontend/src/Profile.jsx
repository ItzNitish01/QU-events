// frontend/src/Profile.jsx

import React from 'react';
import './Profile.css';

const Profile = () => {
  // Dummy User Data
  const user = {
    name: "Aisha Al-Thani",
    email: "aisha.althani@qu.edu",
    eventsAttended: 12,
    eventsSaved: 7,
  };

  const handleEditProfile = () => {
    alert("Edit Profile function coming soon!");
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>👤 My Profile</h1>
      </header>
      
      <div className="profile-card">
        {/* Profile Picture Placeholder */}
        <div className="profile-picture-placeholder">
          {/* We'll use the user's initial for now */}
          <span>{user.name[0]}</span> 
        </div>

        {/* Name and Email */}
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        
        <button className="edit-button" onClick={handleEditProfile}>
          Edit Profile
        </button>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <h3>Activity Stats</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <h4>{user.eventsAttended}</h4>
            <p>Events Attended</p>
          </div>
          <div className="stat-item">
            <h4>{user.eventsSaved}</h4>
            <p>Events Saved</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;