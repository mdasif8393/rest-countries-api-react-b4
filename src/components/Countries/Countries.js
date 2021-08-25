import React from 'react';
import './Countries.css'

const Countries = (props) => {
    const {name, flag, nativeName, region, subregion} = props.country;
    return (
        <div className="countries">
            <img src={flag} alt="" />
            <h3>Name: {name}</h3>
            <p>Native Name: {nativeName}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <button onClick={ () => props.handleAddClick(props.country)} >add to cart</button>
        </div>
    );
};

export default Countries;