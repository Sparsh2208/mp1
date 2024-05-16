// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = ({ changePage }) => {
  return (
    <div className="welcome-container">
      <img src="test.jpeg" alt="FoodShare Image" className="welcome-image" />
      <div className="welcome-overlay">
        <h1>Welcome to FoodShare</h1>
        <h2>End hunger, achieve food security, and promote sustainable agriculture.</h2>
        <button className="continue-button" onClick={() => changePage('login')}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
