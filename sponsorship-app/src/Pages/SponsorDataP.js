import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import SponsorCard from '../Components/SponsorCard.js';
import { GetSponsorSum } from '../Services/apiService';

const SponsorDataP = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetSponsorSum();
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <NavBar />
            {data.length > 0 ? (
                <SponsorCard data={data} />
            ) : (
                <p>No data available</p>
            )}
            
        </div>
    );
};

export default SponsorDataP;
