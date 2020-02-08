import {
    GET_RESTAURANTS,
    REMOVE_RESTAURANT,
    GET_RESTAURANT_DETAIL
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload[0],
                nextPageToken: action.payload[1],
                loading: false,
                allowLocation: true
            };
        case REMOVE_RESTAURANT:
            return {
                ...state,
                restaurants: state.restaurants.filter(
                    restaurant => restaurant.name !== action.payload[0].name
                )
            };
        case GET_RESTAURANT_DETAIL:
            return {
                ...state,
                restaurantDetails: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
