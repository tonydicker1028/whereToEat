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
        nextPageToken: null,
        loading: true,
        allowLocation: false
    };

    const googleApiKey = process.env.REACT_APP_API_KEY;

    const [state, dispatch] = useReducer(restaurantReducer, initialState);

    // Shuffles the array of restaurants for randomness
    const shuffleArray = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const getNextRestaurants = async () => {
        let restaurantsArr;
        const restaurantsEndPoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${state.nextPageToken}&key=${googleApiKey}`;

        const res = await axios.get(restaurantsEndPoint);
        restaurantsArr = res.data.results;

        const shuffledArr = shuffleArray(restaurantsArr);

        dispatch({
            type: GET_RESTAURANTS,
            payload: [shuffledArr, res.data.next_page_token]
        });
    };

    // Get Restaurants
    const getRestaurants = async latLong => {
        let restaurantsArr;
        const restaurantsEndPoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latLong}&radius=1500&type=restaurant&key=${googleApiKey}`;
        const res = await axios.get(restaurantsEndPoint);
        restaurantsArr = res.data.results;

        const shuffledArr = shuffleArray(restaurantsArr);

        dispatch({
            type: GET_RESTAURANTS,
            payload: [shuffledArr, res.data.next_page_token]
        });
    };

    // Get Restaurant Details
    const getRestaurantDetails = async place_id => {
        const res = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=website,formatted_phone_number,formatted_address,price_level,rating,user_ratings_total&key=${googleApiKey}`
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
                nextPageToken: state.nextPageToken,
                loading: state.loading,
                allowLocation: state.allowLocation,
                getRestaurants,
                removeRestaurant,
                getRestaurantDetails,
                getNextRestaurants
            }}
        >
            {props.children}
        </RestaurantContext.Provider>
    );
};

export default RestaurantState;
