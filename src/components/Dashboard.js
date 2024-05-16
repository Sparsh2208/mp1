// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import GiverPage from './GiverPage';
import TakerPage from './TakerPage';
import giverImage from '../images/giver.jpg';
import takerImage from '../images/taker.jpg';
import MatchedDataPage from './MatchedDataPage'; // Import the MatchedDataPage component

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [takerDetails, setTakerDetails] = useState({});
  const [matchedData, setMatchedData] = useState([]);

  const handleTakerDetails = (details) => {
    setTakerDetails(details);
  };

  const handleFindMatch = () => {
    const takerData = JSON.parse(localStorage.getItem('takerDetails'));
    const giverData = JSON.parse(localStorage.getItem('giverDetails'));
  
    if (takerData && giverData) {
      if (giverData.location === takerData.place && giverData.foodType === takerData.dietaryPreferences) {
        // Log giverData to check its structure
        console.log('giverData:', giverData);
  
        // Set matched data state
        setMatchedData([giverData]);
        // Log matchedData before setting it as state
        console.log('matchedData:', [giverData]);
  
        // Navigate to MatchedDataPage component
        setCurrentPage('matchedData');
      } else {
        alert('No match found.');
      }
    } else {
      alert('No taker or giver details found in local storage.');
    }
  };
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-frame giver-frame" onClick={() => setCurrentPage('giver')}>
        <h2>Food Givers</h2>
        <p>To Donate Click Here</p>
        <img src={giverImage} alt="Food Giver" />
      </div>
      <div className="dashboard-frame taker-frame" onClick={() => setCurrentPage('taker')}>
        <h2>Food Takers</h2>
        <p>Click here if you are in need of food</p>
        <img src={takerImage} alt="Food Taker" />
      </div>
      {currentPage === 'giver' && <GiverPage changePage={setCurrentPage} />}
      {currentPage === 'taker' && <TakerPage changePage={setCurrentPage} handleDetails={handleTakerDetails} />}
      {currentPage === 'matchedData' && <MatchedDataPage matchedData={matchedData} />}
      {currentPage === '' && <button className="find-match-button" onClick={handleFindMatch}>Find Match</button>}
    </div>
  );
};

export default Dashboard;
