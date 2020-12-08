import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <p>Home Page</p>
            <Link to='/profile'><button>Profile Page</button></Link>
        </div>
    )
}

export default HomePage;
