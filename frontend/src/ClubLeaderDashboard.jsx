// frontend/src/ClubLeaderDashboard.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ClubLeaderDashboard.css'; // Create this CSS file

// The API URL should be available globally via the context or env variable access if needed
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/events';

const ClubLeaderDashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    host: 'QU Club Leader', // Default host for demonstration
    category: 'Social',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Creating event...');

    // Quick validation check
    if (!formData.title || !formData.date) {
      setMessage('Error: Title and Date are required.');
      return;
    }

    try {
      // Send POST request to your Express API
      const response = await axios.post(API_URL, formData);
      
      setMessage(`Success! Event "${response.data.title}" created with ID: ${response.data._id}`);
      
      // Optionally redirect to the Home feed after success
      setTimeout(() => {
        navigate('/'); 
      }, 2000);

    } catch (error) {
      console.error('Event Creation Error:', error.response?.data || error.message);
      setMessage(`Error creating event: ${error.response?.data?.message || 'Server error.'}`);
    }
  };

  return (
    <div className="leader-dashboard-container">
      <h1>🗓️ Create New Event</h1>
      <p className="dashboard-message">{message}</p>
      
      <form onSubmit={handleSubmit} className="event-form">
        <label>
          Event Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        
        <label>
          Date & Time:
          {/* Input type datetime-local is best for capturing both date and time */}
          <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>

        <label>
          Category:
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Social">Social</option>
            <option value="Academic">Academic</option>
            <option value="Sport">Sport</option>
            <option value="Arts">Arts</option>
            <option value="Other">Other</option>
          </select>
        </label>
        
        <button type="submit" disabled={message.startsWith('Creating')}>
          Submit Event
        </button>
      </form>
    </div>
  );
};

export default ClubLeaderDashboard;