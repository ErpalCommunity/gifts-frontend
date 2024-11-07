import React from 'react';
import './Profile.css';
import Navigator from './Navigator';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="switchers">
        <div className="theme-switcher">
            <img src="/light-theme-icon.svg"/>
            <img src="/dark-theme-icon.svg"/>
        </div>
        <div className="language-switcher">
          <span>EN</span>
          <span>RU</span>
        </div>
      </div>
      <div className="profile-image">
        <img src="/profile-image.png" alt="Profile" width="100" height="100" />
        <div className="image-label">#100</div>
      </div>
      <div className="profile-info">
        <h2>Mark</h2>
        <p>128 gifts received</p>
      </div>
      <div className="recent-actions">
        <img src="/time.svg" className="recent-icon" />
        <span className="recent-text">Recent Actions &gt;</span>
      </div>
      <Navigator/>
    </div>
  );
};

export default Profile;



