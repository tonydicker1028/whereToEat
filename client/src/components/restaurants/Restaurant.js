import React, { useContext } from 'react';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Restaurant = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurants, photoRefs } = restaurantContext;

    return (
        <>
            <div className='card'>
                {photoRefs.length > 0 && (
                    <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRefs[0]}&key=${process.env.REACT_APP_API_KEY}`}
                    />
                )}
                {restaurants.length > 0 && (
                    <>
                        <h1>{restaurants[0].name}</h1>
                        <p>{restaurants[0].price_level}</p>
                        <p>{restaurants[0].rating}</p>
                        <p>{restaurants[0].user_ratings_total}</p>
                        <p>{restaurants[0].vicinity}</p>
                    </>
                )}
            </div>
        </>
    );
};

export default Restaurant;
