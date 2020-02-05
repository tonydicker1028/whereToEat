import React, { useReducer } from 'react';
import axios from 'axios';
import RestaurantContext from './restaurantContext';
import restaurantReducer from './restaurantReducer';
import { GET_RESTAURANTS } from '../types';

const RestaurantState = props => {
    const initialState = {
        restaurants: []
    };

    const [state, dispatch] = useReducer(restaurantReducer, initialState);

    const restaurantsEndPoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.058174,-121.315308&radius=1500&type=restaurant&key=${process.env.REACT_APP_API_KEY}`;

    // Get Restaurants
    const getRestaurants = async () => {
        const res = await axios.get(restaurantsEndPoint);

        dispatch({ type: GET_RESTAURANTS, payload: res.data });
        console.log(res.data.results);
    };

    return (
        <RestaurantContext.Provider
            value={{ restaurants: state.restaurants, getRestaurants }}
        >
            {props.children}
        </RestaurantContext.Provider>
    );
};

export default RestaurantState;
