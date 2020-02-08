import React from 'react';
import Spinner from './Spinner';

const LocationError = () => {
    return (
        <div className='my-5'>
            <h1 className='text-info'>
                Please allow this site to access your location to view nearby
                restaurants.
            </h1>
            <Spinner />
        </div>
    );
};

export default LocationError;
