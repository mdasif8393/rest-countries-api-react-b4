import React, { useEffect, useState } from 'react';
import Countries from './Countries/Countries';
import Country from './Country/Country';
import './Home.css'

const Home = () => {
    const [country, setCountry] = useState([]);

    const [cart, setCart] = useState([]);

    const handleAddClick = (item) => {
        setCart([...cart, item]);
    }

    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data));
    } ,[])

    return (
        <div className="home-container">
            <div className="countries-container">
                {
                    country.map(country => <Countries key={country.alpha3Code} country={country} handleAddClick={handleAddClick} ></Countries>)
                }
            </div>

            <div>
                <Country cart={cart}></Country>
            </div>
        </div>
    );
};

export default Home;