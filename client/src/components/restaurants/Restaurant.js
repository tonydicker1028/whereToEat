import React, { useContext } from 'react';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Restaurants = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurants } = restaurantContext;

    return (
        <>
            <div>{restaurants.length > 0 && restaurants[0].name}</div>
        </>
    );
};

export default Restaurants;
