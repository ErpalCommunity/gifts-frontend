import React, { useState } from 'react';
import './Profile.css';
import Navigator from './Navigator';

const Profile = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const handleThemeSwitch = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="profile-container">
      <div className="switchers">
        <div className="theme-switcher">
          <img
            src="/light-theme-icon.svg"
            alt="Light Theme"
            className={`theme-icon ${selectedTheme === 'light' ? 'selected' : ''}`}
            onClick={() => handleThemeSwitch('light')}
          />
          <img
            src="/dark-theme-icon.svg"
            alt="Dark Theme"
            className={`theme-icon ${selectedTheme === 'dark' ? 'selected' : ''}`}
            onClick={() => handleThemeSwitch('dark')}
          />
        </div>
        <div className="profile-image">
          <img src="/profile-image.png" alt="Profile" width="100" height="100" />
          <div className="image-label">#100</div>
        </div>
        <div className="language-switcher">
          <span>EN</span>
          <span>RU</span>
        </div>
      </div>
      <div className="profile-info">
        <h2>User</h2>
        <p>no gifts received</p>
      </div>
      <div className="recent-actions">
        <img src="/time.svg" className="recent-icon" />
        <span className="recent-text">Recent Actions &gt;</span>
      </div>
      <div className="no-gifts">
        <img src="/balloons.svg" alt="Balloons" className="balloons-image" />
        <p className="no-gifts-text">You don't have any gifts yet.</p>
        <a href="#" className="open-store-link">Open Store</a>
      </div>
      <Navigator/>
    </div>
  );
};

export default Profile;