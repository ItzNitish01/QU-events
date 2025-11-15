// frontend/src/App.jsx (Updated Routes)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; 
import EventDetails from './EventDetails.jsx'; 
import Profile from './Profile.jsx'; 
import BottomNav from './BottomNav.jsx'; 
import ClubLeaderDashboard from './ClubLeaderDashboard.jsx'; 
import AdminDashboard from './AdminDashboard.jsx'; // 👈 NEW IMPORT
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leader" element={<ClubLeaderDashboard />} /> 
          <Route path="/admin" element={<AdminDashboard />} /> {/* 👈 NEW ROUTE */}
          <Route path="/event" element={<EventDetails />} /> 
        </Routes>
        
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;