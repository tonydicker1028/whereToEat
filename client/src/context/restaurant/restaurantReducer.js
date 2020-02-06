import { GET_RESTAURANTS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload.results,
                photoRefs: action.payload.results.map(
                    result => result.photos[0].photo_reference
                )
            };
        default:
            return state;
    }
};
