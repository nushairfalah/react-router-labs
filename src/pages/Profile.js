import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
    return (
        <div>
            <p>Profile Page</p>
            <Link to='/counter'><button>Counter Page</button></Link>
        </div>
    )
}

export default ProfilePage;
