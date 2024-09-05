import React, { useState } from 'react';
import './DataTable.css';  
import { FaTrashAlt, FaEdit, FaAngleDoubleLeft } from 'react-icons/fa';

const DataTable = ({ data, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState(null); // State to track which payment is being edited
  const [newAmount, setNewAmount] = useState(''); // State for the new amount to be updated

  const handleAmountChange = (e) => {
    setNewAmount(e.target.value);
  };

  const handleUpdateAmount = (paymentId) => {
    onUpdate(paymentId, newAmount); // Pass paymentId and newAmount to the onUpdate handler
    setEditId(null); // Hide the input field after updating
    setNewAmount(''); // Clear the input field
  };

  return (
    <div>
      <h1>Payment details</h1>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Payment ID</th>
              <th>Contract ID</th>
              <th>Payment Date</th>
              <th>Amount Paid</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.paymentId}>
                <td>{index + 1}</td>
                <td>{item.paymentId}</td>
                <td>{item.contractID}</td>
                <td>{item.paymentDate}</td>
                <td>
                  ${item.amountPaid.toLocaleString()}
                  {editId === item.paymentId ? (
                    <>
                      <input 
                        type="number" 
                        value={newAmount} 
                        onChange={handleAmountChange} 
                        placeholder="New Amount"
                      />
                      <button 
                        className='btn btn-warning' // Use the yellow button class
                        onClick={() => handleUpdateAmount(item.paymentId)}
                      >
                        <FaAngleDoubleLeft />
                      </button>
                    </>
                  ) : (
                    <button 
                      className='btn btn-warning' // Use the yellow button class
                      onClick={() => setEditId(item.paymentId)}
                    >
                      <FaEdit />
                    </button>
                  )}
                </td>
                <td>{item.paymentStatus}</td>
                <td>
                  <button 
                    className='btn btn-danger' // You can keep the red button or use btn-warning if you want all buttons to be yellow
                    onClick={() => onDelete(item.paymentId)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
