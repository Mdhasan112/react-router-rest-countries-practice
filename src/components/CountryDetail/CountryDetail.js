import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { name } = useParams();
    
    const [countryDetail, setCountryDetail] = useState({});

    useEffect(() => {
        if (name) {
            const url = `https://restcountries.com/v3.1/name/${name}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setCountryDetail(data))
        }

    }, [name])
    
    return (
        <div>
            <h1>This is country details component</h1>
            <h3>name: {name}</h3>
        </div>
    );
};

export default CountryDetail;