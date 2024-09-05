import React from 'react';
import './DataTable.css';  

const MatchTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>Payment Details</h1>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Match ID</th>
              <th>Match Date</th>
              <th>Location</th>
              <th>Match Name</th>
              <th>Total Amount of Payments</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.matchId}>
                <td>{index + 1}</td>
                <td>{item.matchId || 'N/A'}</td>
                <td>{item.matchDate || 'N/A'}</td>
                <td>{item.location || 'N/A'}</td>
                <td>{item.matchName || 'N/A'}</td>
                <td>${(item.totalAmountOfPayments || 0).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default MatchTable;
