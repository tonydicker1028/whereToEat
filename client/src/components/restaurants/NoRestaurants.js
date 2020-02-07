import React from 'react';

const NoRestaurants = () => {
    return (
        <div>
            <h1 className='text-center text-danger'>OUT OF RESTAURANTS</h1>
            <div className='text-center'>
                <iframe
                    src='https://giphy.com/embed/CDpAmfo9dbOyA'
                    width='480'
                    height='360'
                    frameBorder='0'
                    className='giphy-embed'
                    allowFullScreen
                ></iframe>
                <p>
                    <a href='https://giphy.com/gifs/hungry-CDpAmfo9dbOyA'>
                        via GIPHY
                    </a>
                </p>
            </div>
        </div>
    );
};

export default NoRestaurants;
