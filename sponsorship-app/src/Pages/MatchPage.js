import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import MatchTable from '../Components/MatchTable'; 
import { GetMatchDetails } from '../Services/apiService';
import '../Components/DataTable.css'; 

const MatchPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetMatchDetails();
                // Assuming response.data is an array of match details
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false); // Ensure loading state is set to false after fetching
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading data, please wait...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <>
            <NavBar />
            {data.length > 0 ? (
                <MatchTable data={data} />
            ) : (
                <p>No match details available</p>
            )}
        </>
    );
};

export default MatchPage;
