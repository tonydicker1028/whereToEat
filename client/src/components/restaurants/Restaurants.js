import React, { useContext } from 'react';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Restaurants = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurants } = restaurantContext;

    return (
        <>
            {restaurants.map(restaurant => (
                <div>{restaurant.name}</div>
            ))}
        </>
    );
};

export default Restaurants;
