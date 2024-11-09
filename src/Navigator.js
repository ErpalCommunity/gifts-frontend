import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigator.css';

function Navigator() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (navigator.vibrate) {
      navigator.vibrate(100); // Vibrate for 100 milliseconds
    }
    navigate(path);
  };

  return (
    <div className="navigator">
      <div 
        className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} 
        onClick={() => handleNavigation('/')}
      >
        <img src="/store.svg" alt="Store" className="nav-icon" />
        <p className="nav-text">Store</p>
      </div>
      <div 
        className={`nav-item ${location.pathname === '/gifts' ? 'active' : ''}`} 
        onClick={() => handleNavigation('/gifts')}
      >
        <img src="/gifts.svg" alt="Gifts" className="nav-icon" />
        <p className="nav-text">Gifts</p>
      </div>
      <div 
        className={`nav-item ${location.pathname === '/leaderboard' ? 'active' : ''}`} 
        onClick={() => handleNavigation('/leaderboard')}
      >
        <img src="/leaders.svg" alt="Leaderboard" className="nav-icon" />
        <p className="nav-text">Leaderboard</p>
      </div>
      <div 
        className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`} 
        onClick={() => handleNavigation('/profile')}
      >
        <img src="/profile.svg" alt="Profile" className="nav-icon" />
        <p className="nav-text">Profile</p>
      </div>
    </div>
  );
}

export default Navigator;