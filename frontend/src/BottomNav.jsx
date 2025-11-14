// frontend/src/BottomNav.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      {/* Home Link */}
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
      >
        <span>🏠</span> Home
      </NavLink>
      
      {/* Events Link (Placeholder for now) */}
      <NavLink 
        to="/event" 
        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
      >
        <span>🗓️</span> Event
      </NavLink>
      
      {/* Profile Link */}
      <NavLink 
        to="/profile" 
        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
      >
        <span>👤</span> Profile
      </NavLink>
    </nav>
  );
};

export default BottomNav;