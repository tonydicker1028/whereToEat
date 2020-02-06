import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import RestaurantContext from '../../context/restaurant/restaurantContext';
import Restaurant from './Restaurant';

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

RestaurantButtons.propTypes = {
    restaurants: PropTypes.array,
    removeRestaurant: PropTypes.func
};

export default RestaurantButtons;
