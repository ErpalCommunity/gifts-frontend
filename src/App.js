// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Routes instead of Switch
import Navigator from './Navigator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="titles">
          <img src="https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmX64h1FvjcgWXXn3NKnVPMqkW3y2kenaHAtYzUUTEJ9HU" className="image-title" alt="Gift" />
          <p className="text-title">Buy and Send Gifts</p>
          <p className="text-description">Unique gifts for everyone by Crypto Pay.</p>
        </div>

        <div className="gift-grid1">
          {/* Card 1 Animated_AgADgRgAApWfiUo.gif*/}
          <div className="gift-card1">
            <p className="gift-stock">3 of 500</p>
            <img src="https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmNQqNA6YUhxetvwCEu98CcuRagvfM9iSQi93k4hVvK1N3" alt="Delicious Cake" className="gift-image" />
            <p className="gift-name">Delicious Cake</p>
              <button className="gift-price">
                <img src='https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmdwxFEuhNJxTxk4JrkjKN7mLjhEZhPp8ynVPhTcCo4eme' alt="USDT" className="price-icon" /> 10 USDT
              </button>
          </div>

          {/* Card 2 PremiumGiftStickers_AgADuUAAAnv6SEk.gif*/}
          <div className="gift-card2">
            <p className="gift-stock">802 of 5K</p>
            <img src="https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmXCN7HugJ4aPkUhsJ3zY6jSXVkHtvCWFCyJrkcWEmBPwB" alt="Green Star" className="gift-image" />
            <p className="gift-name">Green Star</p>
            <button className="gift-price">
              <img src='https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmeDhBiiQUjuBVNKBhaAPUSsRsNRxFpVihfLFhaYXaedk9' alt="TON" className="price-icon" /> 5 TON
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="gift-grid2">
          <div className="gift-card3">
            <p className="gift-stock">458 of 5K</p>
            <img src="https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmU57b564sQZNGaDQAjbxZKQfp814jWzt9UmFUzvSsGWmN" alt="Blue Star" className="gift-image" />
            <p className="gift-name">Blue Star</p>
            <button className="gift-price">
              <img src='https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmUsMWVBtLoysU2UixsgEGbA18bZd9NnbUivwFJ1vd3STf' alt="ETH" className="price-icon" /> 0.01 ETH
            </button>
          </div>

          {/* Card 4 PremiumGiftStickers_AgADLFEAAucRQUk.gif */}
          <div className="gift-card4">
            <p className="gift-stock">10K of 10K</p>
            <img src="https://amber-elaborate-reptile-916.mypinata.cloud/ipfs/QmRPqZfnMPB6fptQ8mbkUTBkmeVavpdyQdT53xYDUni4Nb" alt="Red Star" className="gift-image" />
            <p className="gift-name">Red Star</p>
            <button className="gift-sold-out">Sold Out</button>
          </div>
        </div>

        {/* Navigation bar */}
        <Navigator />
      </div>
    </Router>
  );
}

export default App;
