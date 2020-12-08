import React from 'react';
import { Link } from 'react-router-dom';

function CounterPage() {
    return (
        <div>
            <p>Counter Page</p>
            <Link to='/home'><button>Home Page</button></Link>
        </div>
    )
}

export default CounterPage;
