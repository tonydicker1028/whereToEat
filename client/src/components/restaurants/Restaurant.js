import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import RestaurantButtons from './RestaurantButtons';
import RestaurantDetails from './RestaurantDetails';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Restaurant = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurants, getRestaurantDetails } = restaurantContext;

    if (restaurants.length > 0) {
        getRestaurantDetails(restaurants[0].place_id);
    }

    return (
        <div className='container card mt-5 py-2 restaurant-normal'>
            <div id='restaurant-overlay'>
                <div id='overlay-text'>PASSED</div>
            </div>
            {restaurants.length > 0 && (
                <>
                    <h1 className='text-center'>{restaurants[0].name}</h1>
                    <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=${restaurants[0].photos[0].photo_reference}&key=${process.env.REACT_APP_API_KEY}`}
                        className='mx-auto d-block restaurantImg'
                    />
                </>
            )}
            <RestaurantDetails />
            <RestaurantButtons />
        </div>
    );
};

Restaurant.propTypes = {
    restaurants: PropTypes.array,
    getRestaurantDetails: PropTypes.func
};

export default Restaurant;
