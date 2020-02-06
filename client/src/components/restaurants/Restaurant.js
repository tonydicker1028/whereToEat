import React, { useContext } from 'react';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Restaurant = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurants, photoRefs } = restaurantContext;

    return (
        <>
            <div className='card'>
                {restaurants.length > 0 && (
                    <>
                        <h1 className='text-center'>{restaurants[0].name}</h1>
                        <img
                            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRefs[0]}&key=${process.env.REACT_APP_API_KEY}`}
                            className='img-fluid'
                        />
                        <div className='text-center'>Address</div>
                        <p className='text-center'>{restaurants[0].vicinity}</p>
                        <div className='row'>
                            <div className='col-sm text-center'>Price</div>
                            <div className='col-sm text-center'>Rating</div>
                            <div className='col-sm text-center'>
                                Total Reviews
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm text-center'>
                                {restaurants[0].price_level === 2 && '$$'}
                            </div>
                            <div className='col-sm text-center'>
                                {restaurants[0].rating} / 5
                            </div>
                            <div className='col-sm text-center'>
                                {restaurants[0].user_ratings_total}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Restaurant;
