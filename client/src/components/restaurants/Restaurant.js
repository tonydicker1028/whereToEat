import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import RestaurantButtons from './RestaurantButtons';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Restaurant = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurants, getRestaurantDetails } = restaurantContext;

    if (restaurants.length > 0) {
        getRestaurantDetails(restaurants[0].place_id);
    }

    return (
        <div className='container card mt-5 py-2'>
            {restaurants.length > 0 && (
                <>
                    <h1 className='text-center'>{restaurants[0].name}</h1>
                    <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurants[0].photos[0].photo_reference}&key=${process.env.REACT_APP_API_KEY}`}
                        className='mx-auto d-block'
                    />

                    <div className='my-2'>
                        <div className='text-center font-weight-bold'>
                            Address
                        </div>
                        <p className='text-center'>{restaurants[0].vicinity}</p>
                    </div>

                    <div className='row row-cols-3'>
                        <div className='col text-center font-weight-bold'>
                            Price
                        </div>
                        <div className='col text-center font-weight-bold'>
                            Rating
                        </div>
                        <div className='col text-center font-weight-bold'>
                            Total Reviews
                        </div>
                        <div className='col text-center'>
                            {restaurants[0].price_level === 0 && '$'}
                            {restaurants[0].price_level === 1 && '$$'}
                            {restaurants[0].price_level === 2 && '$$$'}
                            {restaurants[0].price_level === 3 && '$$$$'}
                            {restaurants[0].price_level === 4 && '$$$$$'}
                            {!restaurants[0].price_level && 'N/A'}
                        </div>
                        <div className='col text-center'>
                            {restaurants[0].rating} / 5
                        </div>
                        <div className='col text-center'>
                            {restaurants[0].user_ratings_total}
                        </div>
                    </div>
                </>
            )}
            <RestaurantButtons />
        </div>
    );
};

Restaurant.propTypes = {
    restaurants: PropTypes.array,
    getRestaurantDetails: PropTypes.func
};

export default Restaurant;
