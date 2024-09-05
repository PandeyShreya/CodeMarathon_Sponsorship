import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePayment } from "../Services/apiService";
import NavBar from "../Components/NavBar";
import '../Components/Form.css'; // Import the CSS file for styling

const DeletePayment = () => {
    const [paymentId, setPaymentId] = useState('');
    const [loading, setLoading] = useState(false); // Set initial state to false
    const [error, setError] = useState(null);
    const [deleteStatus, setDeleteStatus] = useState(null); // For delete operation
    const navigate = useNavigate();

    const onChange = (e) => {
        setPaymentId(e.target.value);
    }

    const deleteExistingPayment = async () => {
        try {
            setLoading(true);
            const response = await deletePayment(paymentId);
            if (response.error) {
                throw new Error(response.error.message);
            }
            setLoading(false);
            setDeleteStatus('Payment deleted successfully');
            alert('Payment Deleted Successfully');
            setPaymentId(''); // Clear input field
            navigate('/');  
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return (
        <>
            <NavBar />
            <div className="form-container">
                <h2>Delete a Payment</h2>
                {loading && <h1>Loading...</h1>}
                {error && <h1 className="error-message">{error.message}</h1>}
                {deleteStatus && <h1 className="success-message">{deleteStatus}</h1>}
                <div className='delete-form'>
                    <label htmlFor='paymentId'>Payment ID:</label>
                    <input 
                        value={paymentId} 
                        onChange={onChange} 
                        type='number' 
                        id='paymentId' 
                    />
                    <button 
                        className='btn' 
                        onClick={deleteExistingPayment}
                    >
                        Delete Payment
                    </button>
                </div>
            </div>
        </>
    );
};

export default DeletePayment;
