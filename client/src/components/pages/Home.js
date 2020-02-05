import React, { useEffect, useContext } from 'react';

import Restaurants from '../restaurants/Restaurants';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Home = () => {
    const restaurantContext = useContext(RestaurantContext);

    useEffect(() => {
        restaurantContext.getRestaurants();
    }, []);

    return (
        <div>
            <Restaurants />
        </div>
    );
};

export default Home;
