import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import DataTable from '../Components/DataTable'; 
import { GetPaymentdetails, deletePayment, updatePayment } from '../Services/apiService'; 
import '../Components/DataTable.css'; 

const DataPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetPaymentdetails();
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (paymentId) => {
        try {
            setLoading(true);
            const response = await deletePayment(paymentId);
            if (response.error) {
                throw new Error(response.error.message);
            }
            setData(data.filter(item => item.paymentId !== paymentId));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const handleUpdate = async (paymentId, newAmount) => {
        try {
            setLoading(true);
            const response = await updatePayment(paymentId, newAmount);
            if (response.error) {
                throw new Error(response.error.message);
            }
            // Update the data state with the new amount
            setData(data.map(item => 
                item.paymentId === paymentId 
                    ? { ...item, amountPaid: parseFloat(newAmount) } 
                    : item
            ));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <NavBar />
            {data.length > 0 ? (
                <DataTable 
                    data={data} 
                    onDelete={handleDelete} 
                    onUpdate={handleUpdate} // Pass handleUpdate to DataTable
                />
            ) : (
                <p>No data available</p>
            )}
        </>
    );
};

export default DataPage;
