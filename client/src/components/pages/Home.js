import React, { useEffect, useContext } from 'react';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Home = () => {
    const restaurantContext = useContext(RestaurantContext);

    useEffect(() => {
        restaurantContext.getRestaurants();
    }, []);

    return <div>Home Page</div>;
};

export default Home;
