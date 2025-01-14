import React, { useState } from 'react';
import './TakerPage.css';

const TakerPage = ({ changePage }) => {
  const [takerDetails, setTakerDetails] = useState({
    numberOfPeople: '',
    place: '',
    dietaryPreferences: '',
  });

  const handleChange = (e) => {
    setTakerDetails({
      ...takerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing taker details (if any) from local storage
    let existingDetails = JSON.parse(localStorage.getItem('takerDetails')) || [];

    // Ensure existingDetails is an array
    if (!Array.isArray(existingDetails)) {
      existingDetails = [];
    }

    // Push new taker details into the existing array
    existingDetails.push(takerDetails);

    // Save updated details to local storage
    localStorage.setItem('takerDetails', JSON.stringify(existingDetails));

    alert('Details saved successfully!');
    // Navigate back to dashboard
    changePage('');
  };

  return (
    <div className="taker-page-container">
      <h2>Food Taker Page</h2>
      <form onSubmit={handleSubmit} className="taker-form">
        <input
          type="number"
          name="numberOfPeople"
          placeholder="Number of People"
          value={takerDetails.numberOfPeople}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="place"
          placeholder="Enter Place (Optional)"
          value={takerDetails.place}
          onChange={handleChange}
        />
        <select name="dietaryPreferences" value={takerDetails.dietaryPreferences} onChange={handleChange}>
          <option value="">Select Dietary Preference</option>
          <option value="Veg">Vegetarian</option>
          <option value="Non Veg">Non-Vegetarian</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TakerPage;
