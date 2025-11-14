// frontend/src/main.jsx (UPDATED)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { EventProvider } from './context/EventContext.jsx'; // 👈 Import the Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👈 Wrap App with the Provider */}
    <EventProvider> 
      <App />
    </EventProvider>
  </React.StrictMode>,
);