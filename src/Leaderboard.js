import React, { useState, useEffect } from 'react';
import './Leaderboard.css';
import Navigator from './Navigator';

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false); // Состояние для фокуса
  const [users, setUsers] = useState([]); // Добавлено состояние для пользователей

  useEffect(() => {
    setUsers([
      { id: 1, name: 'user1', avatar: 'https://linktoavatar1.com', gifts: 120 },
      { id: 2, name: 'user2', avatar: 'https://linktoavatar2.com', gifts: 110 },
      { id: 3, name: 'user3', avatar: 'https://linktoavatar3.com', gifts: 100 },
      { id: 4, name: 'user4', avatar: 'https://linktoavatar4.com', gifts: 90 },
    ]);
  }, []);

  return (
    <div className="leaderboard-container">
      <div className="header">
        <div className={`search-container ${isFocused ? 'focused' : ''}`}> {/* Исправлен синтаксис */}
          <img src="/search-lea.svg" className="search-icon" alt="Search Icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => !searchQuery && setIsFocused(false)} // Возвращаем по центру, если поле пустое
          />
        </div>
      </div>

      <div className="leaderboard-list">
        {users
          .filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
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