import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPayment } from "../Services/apiService";
import NavBar from "../Components/NavBar";
import '../Components/Form.css'; // Import the CSS file for styling

const PostPayment = () => {
    const [payment, setPayment] = useState({
        paymentId: '',
        contractID: '',
        paymentDate: '',
        amountPaid: '',
        paymentStatus: ''
    });
    const [loading, setLoading] = useState(false); // Set initial state to false
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onChange = (e) => {
        setPayment({...payment, [e.target.id]: e.target.value});
    }

    const createPayment = async () => {
        try {
            setLoading(true);
            const response = await addPayment(payment);
            if (response.error) {
                throw new Error(response.error.message);
            }
            setLoading(false);
            console.log('Added the Payment:', response);
            alert('Submitted Sucessfully')
            navigate('/');  
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const validate = (e) => {
        e.preventDefault();

        if (payment.paymentId === '') alert("Payment Id is mandatory");
        else if (payment.contractID === '') alert("Contract Id is mandatory");
        else if (payment.paymentDate === '') alert("Payment date is mandatory");
        else if (payment.amountPaid === '') alert("Amount Paid is mandatory");
        else if (payment.paymentStatus === '') alert("Payment status is mandatory");
        else {
            console.log("Form submitted");
            createPayment();
        }
    }

    return (
        <>
            <NavBar />
            <div className="form-container">
                <h2>Add a New Payment</h2>
                {loading && <h1>Loading...</h1>}
                {error && <h1 className="error-message">{error.message}</h1>}
                <form className='sponsor-form' onSubmit={validate}>
                    <label htmlFor='paymentId'>Id:</label>
                    <input 
                        value={payment.paymentId} 
                        onChange={onChange} 
                        type='number' 
                        id='paymentId' 
                    />
                    <label htmlFor='contractID'>Contract ID:</label>
                    <input 
                        value={payment.contractID} 
                        onChange={onChange} 
                        type='number' 
                        id='contractID' 
                    />
                    <label htmlFor='paymentDate'>Payment Date:</label>
                    <input 
                        value={payment.paymentDate} 
                        onChange={onChange} 
                        type='text' 
                        id='paymentDate' 
                    />
                    <label htmlFor='amountPaid'>Amount Paid:</label>
                    <input 
                        value={payment.amountPaid} 
                        onChange={onChange} 
                        type='number' 
                        id='amountPaid' 
                    />
                    <label htmlFor='paymentStatus'>Payment Status:</label>
                    <input 
                        value={payment.paymentStatus} 
                        onChange={onChange} 
                        type='text' 
                        id='paymentStatus' 
                    />
                    <button className='btn' type='submit' >Add New Payment</button>
                </form>
            </div>
        </>
    );
};

export default PostPayment;
