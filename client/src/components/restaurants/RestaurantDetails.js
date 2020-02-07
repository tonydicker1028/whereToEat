import React, { useContext } from 'react';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const RestaurantDetails = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurantDetails } = restaurantContext;

    return (
        <div className='card my-4'>
            <div className='row row-cols-3'>
                {restaurantDetails != null && (
                    <>
                        <div className='col text-center font-weight-bold'>
                            Address
                        </div>
                        <div className='col text-center font-weight-bold'>
                            Phone Number
                        </div>
                        <div className='col text-center font-weight-bold'>
                            Website
                        </div>
                        <div className='col text-center'>
                            {restaurantDetails.formatted_address}
                        </div>
                        <div className='col text-center'>
                            {restaurantDetails.formatted_phone_number}
                        </div>
                        <div className='col text-center'>
                            <a
                                href={restaurantDetails.website}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {restaurantDetails.website}
                            </a>
                        </div>
                        <div className='col text-center font-weight-bold'>
                            Price
                        </div>
                        <div className='col text-center font-weight-bold'>
                            Rating
                        </div>
                        <div className='col text-center font-weight-bold'>
                            Total Reviews
                        </div>
                        <div className='col text-center'>
                            {restaurantDetails.price_level === 0 && '$'}
                            {restaurantDetails.price_level === 1 && '$$'}
                            {restaurantDetails.price_level === 2 && '$$$'}
                            {restaurantDetails.price_level === 3 && '$$$$'}
                            {restaurantDetails.price_level === 4 && '$$$$$'}
                            {!restaurantDetails.price_level && 'N/A'}
                        </div>
                        <div className='col text-center'>
                            {restaurantDetails.rating} / 5
                        </div>
                        <div className='col text-center'>
                            {restaurantDetails.user_ratings_total}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default RestaurantDetails;
