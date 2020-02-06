import React, { useReducer } from 'react';
import axios from 'axios';
import RestaurantContext from './restaurantContext';
import restaurantReducer from './restaurantReducer';
import { GET_RESTAURANTS, REMOVE_RESTAURANT } from '../types';

const RestaurantState = props => {
    const initialState = {
        restaurants: []
    };

    const [state, dispatch] = useReducer(restaurantReducer, initialState);

    const restaurantsEndPoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.058174,-121.315308&radius=1500&type=restaurant&key=${process.env.REACT_APP_API_KEY}`;

    // Shuffles the array of restaurants for randomness
    const shuffleArray = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    // Get Restaurants
    const getRestaurants = async () => {
        const res = await axios.get(restaurantsEndPoint);

        let resultsArr = res.data.results;

        const shuffledArr = shuffleArray(resultsArr);

        dispatch({ type: GET_RESTAURANTS, payload: shuffledArr });
    };

    // Remove a restaurant from the array
    const removeRestaurant = restaurants => {
        dispatch({ type: REMOVE_RESTAURANT, payload: restaurants });
    };
    return (
        <RestaurantContext.Provider
            value={{
                restaurants: state.restaurants,
                getRestaurants,
                removeRestaurant
            }}
        >
            {props.children}
        </RestaurantContext.Provider>
    );
};

export default RestaurantState;
