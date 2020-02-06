import React from 'react';
import './App.css';

import Home from './components/pages/Home';

import RestaurantState from './context/restaurant/RestaurantState';

function App() {
    return (
        <RestaurantState>
            <>
                <Home />
            </>
        </RestaurantState>
    );
}

export default App;
