import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Импортируем useLocation
import './Navigator.css';

function Navigator() {
  const navigate = useNavigate();
  const location = useLocation(); // Получаем информацию о текущем пути

  return (
    <div className="navigator">
      <div 
        className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} 
        onClick={() => navigate('/')}
      >
        <img src="/store.svg" alt="Store" className="nav-icon" />
        <p className="nav-text">Store</p>
      </div>
      <div 
        className={`nav-item ${location.pathname === '/gifts' ? 'active' : ''}`} 
        onClick={() => navigate('/gifts')}
      >
        <img src="/gifts.svg" alt="Gifts" className="nav-icon" />
        <p className="nav-text">Gifts</p>
      </div>
      <div 
        className={`nav-item ${location.pathname === '/leaderboard' ? 'active' : ''}`} 
        onClick={() => navigate('/leaderboard')}
      >
        <img src="/leaders.svg" alt="Leaderboard" className="nav-icon" />
        <p className="nav-text">Leaderboard</p>
      </div>
      <div 
        className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`} 
        onClick={() => navigate('/profile')}
      >
        <img src="/profile.svg" alt="Profile" className="nav-icon" />
        <p className="nav-text">Profile</p>
      </div>
    </div>
  );
}

export default Navigator;