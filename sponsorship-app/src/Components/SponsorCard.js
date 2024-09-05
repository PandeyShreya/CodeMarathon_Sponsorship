import React from 'react';

import './SponsorCard.css'; // Import the CSS file for styling

const SponsorCard = ({ data}) => {
  return (
    <>
    <h1>Sponsor Summary</h1>
    <div className="sponsor-card">
    {data.map((sponsor, index) => (
      <>
      <h2>{sponsor.sponsorName}</h2>
      <p><strong>Sponsor ID:</strong> {sponsor.sponsorId}</p>
      <p><strong>Total Payments:</strong> ${sponsor.totalPayments.toLocaleString()}</p>
      <p><strong>Number of Payments:</strong> {sponsor.numberOfPayments}</p>
      <p><strong>Latest Payment Date:</strong> {sponsor.latestPaymentDate}</p>
      <hr/><br/>
      </>   
          ))}
    </div>
    
    </>
  );
};

export default SponsorCard;
