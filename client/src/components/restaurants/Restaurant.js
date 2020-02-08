import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import RestaurantButtons from './RestaurantButtons';
import RestaurantDetails from './RestaurantDetails';
import NoRestaurants from './NoRestaurants';
import Spinner from '../layout/Spinner';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Restaurant = () => {
    const restaurantContext = useContext(RestaurantContext);

    const {
        restaurants,
        getRestaurantDetails,
        loading,
        allowLocation
    } = restaurantContext;

    if (restaurants.length > 0) {
        getRestaurantDetails(restaurants[0].place_id);
    }

    if (loading && allowLocation) {
        return <Spinner />;
    }

    if (restaurants.length === 0 && !loading) {
        return <NoRestaurants />;
    }

    return (
        <>
            <div id='restaurant-overlay'>
                <div id='overlay-text'>PASS</div>
            </div>
            {restaurants.length > 0 && (
                <>
                    <h1 className='text-center'>{restaurants[0].name}</h1>
                    <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=${restaurants[0].photos[0].photo_reference}&key=${process.env.REACT_APP_API_KEY}`}
                        className='mx-auto d-block restaurantImg'
                        alt='the current restaurant'
                    />
                </>
            )}
            <RestaurantDetails />
            <RestaurantButtons />
        </>
    );
};

Restaurant.propTypes = {
    restaurants: PropTypes.array,
    getRestaurantDetails: PropTypes.func
};

export default Restaurant;
