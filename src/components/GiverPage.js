// GiverPage.js
import React, { useState } from 'react';
import './GiverPage.css';

const GiverPage = ({ changePage }) => {
  const [eventDetails, setEventDetails] = useState({
    eventType: '',
    location: '',
    date: '',
    estimatedAttendees: '',
    foodType: '',
    numberOfItems: '',
    numberOfPersons: ''
  });

  const handleChange = (e) => {
    setEventDetails({
      ...eventDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve existing details from local storage
    let existingDetails = JSON.parse(localStorage.getItem('giverDetails')) || [];
    
    // Ensure existingDetails is an array
    if (!Array.isArray(existingDetails)) {
      existingDetails = [];
    }
  
    // Push new event details into existing array
    existingDetails.push(eventDetails);
  
    // Save updated details to local storage
    localStorage.setItem('giverDetails', JSON.stringify(existingDetails));
    
    alert('Details saved successfully!');
    // Navigate back to dashboard
    changePage('');
  };
  
  
  return (
    <div className="giver-page-container">
      <h2>Food Giver Page</h2>
      <form onSubmit={handleSubmit} className="giver-form">
        <select name="eventType" value={eventDetails.eventType} onChange={handleChange} required>
          <option value="">Select Event Type</option>
          <option value="Wedding ceremony">Wedding ceremony</option>
          <option value="Birthday party">Birthday party</option>
          <option value="Anniversary celebration">Anniversary celebration</option>
          <option value="Others">Others</option>
        </select>
        <input type="text" name="location" placeholder="Location" value={eventDetails.location} onChange={handleChange} required />
        <input type="date" name="date" value={eventDetails.date} onChange={handleChange} required />
        <input type="number" name="estimatedAttendees" placeholder="Estimated Attendees" value={eventDetails.estimatedAttendees} onChange={handleChange} required />
        <select name="foodType" value={eventDetails.foodType} onChange={handleChange} required>
          <option value="">Select Type of Food Available</option>
          <option value="Veg">Veg</option>
          <option value="Non Veg">Non Veg</option>
        </select>
        <input type="number" name="numberOfItems" placeholder="Number of Food Items" value={eventDetails.numberOfItems} onChange={handleChange} required />
        <input type="number" name="numberOfPersons" placeholder="Number of Persons Served" value={eventDetails.numberOfPersons} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GiverPage;
