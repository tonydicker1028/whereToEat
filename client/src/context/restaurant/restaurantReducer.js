import { GET_RESTAURANTS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload,
                photoRefs: action.payload.map(
                    ele => ele.photos[0].photo_reference
                )
            };
        default:
            return state;
    }
};
