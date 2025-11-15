// frontend/src/AdminDashboard.jsx

import React, { useState } from 'react';
import './AdminDashboard.css'; // Create this CSS file

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('events');

  // Dummy data to show UI structure
  const dummyUsers = [
    { id: 1, name: 'Aisha Al-Thani', role: 'student', email: 'aisha@qu.edu' },
    { id: 2, name: 'John Smith', role: 'leader', email: 'john@qu.edu' },
    { id: 3, name: 'Sarah Chen', role: 'student', email: 'sarah@qu.edu' },
  ];

  const dummyPendingEvents = [
    { id: 101, title: 'New Robotics Club Meeting', host: 'Robotics Club', date: '2026-02-01' },
    { id: 102, title: 'Summer Internship Info Session', host: 'Career Center', date: '2026-01-20' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'events':
        return (
          <div className="admin-section">
            <h3>Pending Events for Approval ({dummyPendingEvents.length})</h3>
            <div className="event-list">
              {dummyPendingEvents.map(event => (
                <div key={event.id} className="admin-item event-item">
                  <h4>{event.title}</h4>
                  <p>Host: {event.host}</p>
                  <div className="action-buttons">
                    <button className="approve-btn">Approve</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="admin-section">
            <h3>User Management ({dummyUsers.length})</h3>
            <div className="user-list">
              {dummyUsers.map(user => (
                <div key={user.id} className="admin-item user-item">
                  <h4>{user.name} ({user.role.toUpperCase()})</h4>
                  <p>{user.email}</p>
                  <div className="action-buttons">
                    <button className="change-role-btn">Change Role</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h1>⚙️ Admin Dashboard</h1>
      <p>System Oversight and Moderation Panel</p>

      {/* Admin Tab Navigation */}
      <div className="admin-tabs">
        <button
          className={activeTab === 'events' ? 'active' : ''}
          onClick={() => setActiveTab('events')}
        >
          Event Moderation
        </button>
        <button
          className={activeTab === 'users' ? 'active' : ''}
          onClick={() => setActiveTab('users')}
        >
          User Management
        </button>
      </div>

      <div className="admin-content-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;