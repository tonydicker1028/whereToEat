import React, { useEffect, useContext } from 'react';

import Restaurant from '../restaurants/Restaurant';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Home = () => {
    const restaurantContext = useContext(RestaurantContext);

    // Gets users lat/long and restaurants nearby
    const getLocation = () => {
        let latLong;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                latLong = `${position.coords.latitude},${position.coords.longitude}`;
                restaurantContext.getRestaurants(latLong);
            });
        }
    };

    useEffect(() => {
        getLocation();

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='container card mt-5 py-2' id='restaurant-normal'>
                <Restaurant />
            </div>
        </>
    );
};

export default Home;
