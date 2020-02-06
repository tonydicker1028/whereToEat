import React, { useContext } from 'react';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const RestaurantButtons = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurants, removeRestaurant } = restaurantContext;

    // If user passes on restaurant then load next one
    const onPass = () => {
        removeRestaurant(restaurants);
    };

    return (
        <div className='mx-auto mt-4 mb-2'>
            <button className='btn btn-danger btn-lg' onClick={onPass}>
                Pass
            </button>
        </div>
    );
};

export default RestaurantButtons;
