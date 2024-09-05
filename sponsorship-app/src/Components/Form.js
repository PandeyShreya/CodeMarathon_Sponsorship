import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitSponsor } from '../Services/apiService';
import './Form.css';  // Import the CSS file for styling

const Form = () => {
  const [sponsor, setSponsor] = useState({
    sponsorId: '',
    sponsorName: '',
    totalPayment: '',
    numberOfPayments: '',
    LatestPaymentDate: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSponsor({ ...sponsor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitSponsor(sponsor);
      setSponsor({
        sponsorId: '',
        sponsorName: '',
        totalPayment: '',
        numberOfPayments: '',
        LatestPaymentDate: '',
      });
      setError('');
    } catch (err) {
      setError('Error submitting sponsor');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Sponsor</h2>
      <form onSubmit={handleSubmit} className="sponsor-form">
        <label>
          Sponsor ID:
          <input
            type="text"
            name="sponsorId"
            value={sponsor.sponsorId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Sponsor Name:
          <input
            type="text"
            name="sponsorName"
            value={sponsor.sponsorName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Total Payment:
          <input
            type="number"
            name="totalPayment"
            value={sponsor.totalPayment}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Payments:
          <input
            type="number"
            name="numberOfPayments"
            value={sponsor.numberOfPayments}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Latest Payment Date:
          <input
            type="date"
            name="LatestPaymentDate"
            value={sponsor.LatestPaymentDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Form;
