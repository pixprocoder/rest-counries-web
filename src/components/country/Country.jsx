import React from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name, area, region,population, flags} = country
    return (
        <div className='country-container'>
            <img src={flags.png} alt="" />
            <h1>{name.common} </h1>
            <small>area: {area} </small>
            
            <small>region: {region} </small>
            <small>Population: {population} </small>
        </div>
    );
};

export default Country;