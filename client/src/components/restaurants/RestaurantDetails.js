import React, { useContext } from 'react';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const RestaurantDetails = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurantDetails, restaurants } = restaurantContext;

    return (
        <div className='card my-5'>
            <div className='row row-cols-3'>
                <div className='col text-center font-weight-bold'>Address</div>
                <div className='col text-center font-weight-bold'>
                    Phone Number
                </div>
                <div className='col text-center font-weight-bold'>Website</div>
                <div className='col text-center'>
                    {restaurantDetails.formatted_address}
                </div>
                <div className='col text-center'>
                    {restaurantDetails.formatted_phone_number}
                </div>
                <d className='col text-center'>
                    <a href={restaurantDetails.website} target='_blank'>
                        {restaurantDetails.website}
                    </a>
                </d>

                {restaurants.length > 0 && (
                    <>
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
                            {restaurants[0].price_level === 0 && '$'}
                            {restaurants[0].price_level === 1 && '$$'}
                            {restaurants[0].price_level === 2 && '$$$'}
                            {restaurants[0].price_level === 3 && '$$$$'}
                            {restaurants[0].price_level === 4 && '$$$$$'}
                            {!restaurants[0].price_level && 'N/A'}
                        </div>
                        <div className='col text-center'>
                            {restaurants[0].rating} / 5
                        </div>
                        <div className='col text-center'>
                            {restaurants[0].user_ratings_total}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default RestaurantDetails;
