import React from 'react';
import './Country.css'

const Country = (props) => { 
    const cart = props.cart;
    console.log(cart);
    const totalArea = cart.reduce((total, item) => total + item.area, 0);
    const totalPopulation = cart.reduce((total, item) => total + item.population, 0)
    return (
        <div>
            <h1>Added Info</h1>
            <h3>Total Area: {totalArea}</h3>
            <h3>Total Population: {totalPopulation}</h3>
        </div>
    );
};

export default Country;