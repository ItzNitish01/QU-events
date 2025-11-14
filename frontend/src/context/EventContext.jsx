// frontend/src/context/EventContext.jsx (UPDATED)

/*import React, { createContext, useState, useContext } from 'react';
import axios from 'axios'; // 👈 Import Axios

// 1. Create the Context
const EventContext = createContext();

// 2. Create the Provider Component
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🎯 Fetch function now uses Axios
  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching events from API...');
      
      // Use the base URL for the backend API
      const response = await axios.get('http://localhost:5000/api/events');
      
      // The API returns an array of event objects
      setEvents(response.data); 
      
    } catch (err) {
      setError('Failed to fetch events from the server.');
      console.error('API Fetch Error:', err.message);
      // In case of an empty DB, we can set a dummy array to show something
      setEvents([]); 
    } finally {
      setLoading(false);
    }
  };
  // ... rest of the provider code ...

  return (
    <EventContext.Provider value={{ events, loading, error, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};

// 3. Custom hook to use the context (remains unchanged)
export const useEvents = () => {
  return useContext(EventContext);
};
*/
// frontend/src/context/EventContext.jsx (UPDATED with ENV variable)

import React, { createContext, useState, useContext } from 'react';
import axios from 'axios'; 

// 🎯 Get API URL from Vite's environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL;

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  // ... state declarations remain the same ...

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching events from API:', API_URL);
      
      // Use the environment variable here
      const response = await axios.get(API_URL); 
      
      setEvents(response.data); 
      
    } catch (err) {
      setError('Failed to fetch events from the server.');
      console.error('API Fetch Error:', err.message);
      setEvents([]); 
    } finally {
      setLoading(false);
    }
  };

  // ... rest of the component remains the same ...
};

export const useEvents = () => {
  return useContext(EventContext);
};