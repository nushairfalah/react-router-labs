import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function ProfilePage({ history }) {
    return (
        <div>
            <p>Profile Page</p>
            <button onClick={() => history.goBack()}>Back to Home Page</button> &nbsp;
            <Link to='/counter' className="App" >Go to Counter Page</Link>
        </div>
    )
}

export default ProfilePage;
