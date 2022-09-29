import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const history = useHistory();
    const handleDetails = () => {
        history.push(`/country/${name.common}`)
    }
    const {name, capital} = props.country
    const countryStyle ={
        border: "1px solid purple",
        borderRadius: "20px",
        margin: "20px",
        padding:"20px"
    }
    
    return (
        <div style={countryStyle}>
            <h2>{name.common}</h2>
            <h3>Capital: {capital}</h3>
            <Link to={`/country/${name.common}`}>
                <button>Show more detail</button>
           </Link>
           <button onClick={handleDetails}>details</button>
        </div>
    );
};

export default Country;