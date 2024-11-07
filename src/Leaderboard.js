import React, { useState, useEffect } from 'react';
import './Leaderboard.css';  // Понадобится для стилей
import Navigator from './Navigator';  // Навигация, если она требуется

// Компонент Leaderboard
const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Здесь мы можем добавить вызов API для получения данных из MongoDB.
    // Пока что статически.
    setUsers([
      { id: 1, name: 'user1', avatar: 'https://linktoavatar1.com', gifts: 120 },
      { id: 2, name: 'user2', avatar: 'https://linktoavatar2.com', gifts: 110 },
      { id: 3, name: 'user3', avatar: 'https://linktoavatar3.com', gifts: 100 },
      { id: 4, name: 'user4', avatar: 'https://linktoavatar4.com', gifts: 90 },
      // ...добавьте других пользователей
    ]);
  }, []);

  return (
    <div className="leaderboard-container">
      <div className="header">
        <input
          src="/search-lea.svg"
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="leaderboard-list">
        {users
          .filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase())) // Фильтрация по имени
          .map((user, index) => (
            <div className="leaderboard-item" key={user.id}>
              <div className="user-info">
                <img src={user.avatar} alt={user.name} className="avatar" />
                <div className="user-name">{user.name}</div>
              </div>
              <div className="gifts-info">
                <svg width="11" height="12" className="gifts-svg">
                  <use href="your-svg-icon-url.svg#gift-icon" />
                </svg>
                <span className="gifts-count">{user.gifts}</span>
              </div>
              <div className="leaderboard-position">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
              </div>
            </div>
          ))}
      </div>

      <div className="footer">
        <div className="user-info">
          <img src="your-avatar-url.svg" alt="Your Avatar" className="avatar" />
          <div className="user-name">Your Name</div>
        </div>
        <div className="gifts-info">
          <svg width="11" height="12" className="gifts-svg">
            <use href="your-svg-icon-url.svg#gift-icon" />
          </svg>
          <span className="gifts-count">Your Gifts</span>
        </div>
        <div className="leaderboard-position">
          {'🥇'}
        </div>
      </div>
      <Navigator />
    </div>
  );
};

export default Leaderboard;