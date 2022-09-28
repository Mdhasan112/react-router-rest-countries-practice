import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {id} = useParams();
    // const [countryDetail, setCountryDetail] = useState({});
    // useEffect(() => {
    //     const url = `https://restcountries.com/v3.1/name/${id}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setCountryDetail(data))
    // },[])
    return (
        <div>
            <h1>This is country details component: {id}</h1>
            {/* <h3>name{countryDetail.name.common}</h3> */}
        </div>
    );
};

export default CountryDetail;