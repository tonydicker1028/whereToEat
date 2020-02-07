import React, { useContext } from 'react';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const RestaurantDetails = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurantDetails } = restaurantContext;

    return (
        <div className='card my-4 restaurant-details'>
            {restaurantDetails != null && (
                <>
                    <div className='row'>
                        <div className='col text-center '>
                            <div className='font-weight-bold'>Address</div>
                            <div>{restaurantDetails.formatted_address}</div>
                        </div>
                        <div className='col text-center'>
                            <div className='font-weight-bold'>Phone Number</div>
                            <div>
                                {restaurantDetails.formatted_phone_number}
                            </div>
                        </div>
                        <div className='col text-center'>
                            <div className='font-weight-bold'>Website</div>
                            <div>
                                <a
                                    href={restaurantDetails.website}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    {restaurantDetails.website}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-center'>
                            <div className='font-weight-bold'>Price</div>
                            <div>
                                {restaurantDetails.price_level === 0 && '$'}
                                {restaurantDetails.price_level === 1 && '$$'}
                                {restaurantDetails.price_level === 2 && '$$$'}
                                {restaurantDetails.price_level === 3 && '$$$$'}
                                {restaurantDetails.price_level === 4 && '$$$$$'}
                                {!restaurantDetails.price_level && 'N/A'}
                            </div>
                        </div>
                        <div className='col text-center'>
                            <div className='font-weight-bold'>Rating</div>
                            <div>{restaurantDetails.rating} / 5</div>
                        </div>
                        <div className='col text-center'>
                            <div className='font-weight-bold'>
                                Total Reviews
                            </div>
                            <div>{restaurantDetails.user_ratings_total}</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default RestaurantDetails;
