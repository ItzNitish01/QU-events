// frontend/src/App.jsx (Updated)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; 
import EventDetails from './EventDetails.jsx'; 
import Profile from './Profile.jsx'; 
import BottomNav from './BottomNav.jsx'; // 👈 New Import
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event" element={<EventDetails />} /> 
        </Routes>
        
        {/* 👈 RENDER THE BOTTOM NAVIGATION BAR HERE */}
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;