import React, { useReducer } from 'react';
import axios from 'axios';
import RestaurantContext from './restaurantContext';
import restaurantReducer from './restaurantReducer';
import { GET_RESTAURANTS } from '../types';

const RestaurantState = () => {
    const initialState = {
        restaurants: []
    };

    const [state, dispatch] = useReducer(restaurantReducer, initialState);

    // Get Restaurants
    const getRestaurants = async () => {};
};

export default RestaurantState;
