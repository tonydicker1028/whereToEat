import { GET_RESTAURANTS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload.results
            };
        default:
            return state;
    }
};
