// MatchedDataPage.js
import React from 'react';
import './MatchedDataPage.css'; // Import CSS file

const MatchedDataPage = ({ matchedData }) => {
  return (
    <div className="matched-data-container"> {/* Apply a class for styling */}
      <h2>Matched Data</h2>
      <table className="matched-data-table"> {/* Apply a class for styling */}
        <thead>
          <tr>
            <th>Index</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {matchedData.map((data, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{JSON.stringify(data)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchedDataPage;
