import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country, setCountry] = useState([])
    const country10 = country.slice(0, 15)
    
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
           {
            country10.map(country => <Country country={country}></Country>
            )
           }
        </div>
    );
};

export default Home;