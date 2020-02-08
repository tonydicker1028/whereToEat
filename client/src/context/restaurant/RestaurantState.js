import React, { useReducer } from 'react';
import axios from 'axios';
import RestaurantContext from './restaurantContext';
import restaurantReducer from './restaurantReducer';
import {
    GET_RESTAURANTS,
    REMOVE_RESTAURANT,
    GET_RESTAURANT_DETAIL
} from '../types';

const RestaurantState = props => {
    const initialState = {
        restaurants: [],
        restaurantDetails: {},
        loading: true,
        allowLocation: false
    };

    const [state, dispatch] = useReducer(restaurantReducer, initialState);

    // Shuffles the array of restaurants for randomness
    const shuffleArray = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    // Get Restaurants
    const getRestaurants = async latLong => {
        const restaurantsEndPoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latLong}&radius=1500&type=restaurant&key=${process.env.REACT_APP_API_KEY}`;
        const res = await axios.get(restaurantsEndPoint);

        let resultsArr = res.data.results;

        const shuffledArr = shuffleArray(resultsArr);

        dispatch({ type: GET_RESTAURANTS, payload: shuffledArr });
    };

    // Get Restaurant Details
    const getRestaurantDetails = async place_id => {
        const res = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=website,formatted_phone_number,formatted_address,price_level,rating,user_ratings_total&key=${process.env.REACT_APP_API_KEY}`
        );

        dispatch({ type: GET_RESTAURANT_DETAIL, payload: res.data.result });
    };

    // Remove a restaurant from the array
    const removeRestaurant = restaurants => {
        dispatch({ type: REMOVE_RESTAURANT, payload: restaurants });
    };
    return (
        <RestaurantContext.Provider
            value={{
                restaurants: state.restaurants,
                restaurantDetails: state.restaurantDetails,
                loading: state.loading,
                allowLocation: state.allowLocation,
                getRestaurants,
                removeRestaurant,
                getRestaurantDetails
            }}
        >
            {props.children}
        </RestaurantContext.Provider>
    );
};

export default RestaurantState;
