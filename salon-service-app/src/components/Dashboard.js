import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirect

function Dashboard() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSignOut = () => {
        // Clear authentication state here if needed, such as localStorage or sessionStorage

        // Navigate to the home page ("/")
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Welcome to your Dashboard!</h2>
            
            {/* Appointments Card */}
            <div className="card">
                <div className="card-title">
                    <h3>Your Appointments</h3>
                </div>
                <div className="card-body">
                    <p>List of Your Appointments. <Link to="/appointment">Appointment</Link></p>
                </div>
            </div>

            {/* Available Services Card */}
            <div className="card">
                <div className="card-title">
                    <h3>Available Services</h3>
                </div>
                <div className="card-body">
                    <p>Check out our <Link to="/new-service">new services</Link> to book an appointment.</p>
                </div>
            </div>

            {/* Online Store Card */}
            <div className="card">
                <div className="card-title">
                    <h3>Online Store</h3>
                </div>
                <div className="card-body">
                    <p>Check out our <Link to="/online-store">online store</Link> to buy a product.</p>
                </div>
            </div>

            {/* Staff Management Card */}
            <div className="card">
                <div className="card-title">
                    <h3>Staff Management</h3>
                </div>
                <div className="card-body">
                    <p>Check out our <Link to="/staff-management">staffs and ratings</Link> to know more.</p>
                </div>
            </div>

            {/* Edit Profile Card */}
            <div className="card">
                <div className="card-title">
                    <h3>Edit Profile</h3>
                </div>
                <div className="card-body">
                    <p>Update your profile details. <Link to="/edit-profile">Edit Profile</Link></p>
                </div>
            </div>

            {/* Customer Query Card */}
            <div className="card">
                <div className="card-title">
                    <h3>Customer Queries</h3>
                </div>
                <div className="card-body">
                    <p>Have any questions? Reach out to us. <Link to="/customer-query">Submit a Query</Link></p>
                </div>
            </div>

            {/* Sign Out Button */}
            <div className="sign-out-btn">
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
    );
}

export default Dashboard;
