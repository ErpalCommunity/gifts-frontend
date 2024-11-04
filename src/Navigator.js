import React from 'react';
import './Navigator.css';

function Navigator({ onNavigate }) {
  return (
    <div className="navigator">
      <div className="nav-item">
        <img src="/store.svg" alt="Store" className="nav-icon" />
        <p className="nav-text">Store</p>
      </div>
      <div className="nav-item">
        <img src="/gifts.svg" alt="Gifts" className="nav-icon" />
        <p className="nav-text">Gifts</p>
      </div>
      <div className="nav-item">
        <img src="/leaders.svg" alt="Leaderboard" className="nav-icon" />
        <p className="nav-text">Leaderboard</p>
      </div>
      <div className="nav-item">
        <img src="/profile.svg" alt="Profile" className="nav-icon" />
        <p className="nav-text">Profile</p>
      </div>
    </div>
  );
}

export default Navigator;
