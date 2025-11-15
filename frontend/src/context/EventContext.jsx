// frontend/src/context/EventContext.jsx

import React, { createContext, useState, useContext } from 'react';
import axios from 'axios'; 

// Get API URL from Vite's environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/events';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching events from API:', API_URL);
      
      const response = await axios.get(API_URL);
      const data = response.data;
      
      // CRITICAL FIX: Ensure the received data is an array
      if (Array.isArray(data)) {
        setEvents(data); 
      } else {
        console.warn("API response was not a valid array:", data);
        setEvents([]); 
      }
      
    } catch (err) {
      setError('Failed to fetch events from the server.');
      console.error('API Fetch Error:', err.message);
      setEvents([]); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <EventContext.Provider value={{ events, loading, error, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  return useContext(EventContext);
};