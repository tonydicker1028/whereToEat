import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const RestaurantButtons = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurants, removeRestaurant } = restaurantContext;

    // Adds an transition overlay to the card
    const cardOverlay = () => {
        const overlay = document.getElementById('restaurant-overlay');
        const overlayText = document.getElementById('overlay-text');
        overlay.style.height = '100%';

        setTimeout(() => {
            overlayText.style.display = 'initial';
        }, 100);

        setTimeout(() => {
            overlay.style.height = '0';
        }, 1000);

        setTimeout(() => {
            overlayText.style.display = 'none';
        }, 1200);
    };

    // If user passes on restaurant then load next one
    const onPass = () => {
        cardOverlay();
        removeRestaurant(restaurants);
    };

    return (
        <div className='mx-auto mb-2'>
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
