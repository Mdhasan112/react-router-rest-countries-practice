import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, capital, ccn3} = props.country
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
            <Link to={`/home/${ccn3}`}>
                <button>Show more detail</button>
           </Link>
        </div>
    );
};

export default Country;