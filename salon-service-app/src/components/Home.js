import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <h1>Welcome to the Online Salon Service</h1>
            <div className="navbar">
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
    );
}

export default Home;
