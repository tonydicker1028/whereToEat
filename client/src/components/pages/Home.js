import React, { useEffect, useContext } from 'react';

import Restaurant from '../restaurants/Restaurant';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Home = () => {
    const restaurantContext = useContext(RestaurantContext);

    useEffect(() => {
        restaurantContext.getRestaurants();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='container card mt-5 py-2 restaurant-normal'>
            <Restaurant />
        </div>
    );
};

export default Home;
