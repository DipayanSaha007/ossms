import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirect

// Uncomment and configure emailjs when ready
// import emailjs from 'emailjs-com';

function CustomerQuery() {
    const [query, setQuery] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!query || !userEmail) {
            setStatusMessage('Both query and email are required.');
            return;
        }

        const templateParams = {
            user_email: userEmail,
            query_message: query,
        };

        // Uncomment and configure emailjs when ready
        // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
        //     .then((response) => {
        //         setStatusMessage('Your query has been submitted successfully!');
        //         setQuery('');
        //         setUserEmail('');
        //         setTimeout(() => {
        //             navigate('/dashboard'); // Redirect to dashboard after successful submission
        //         }, 2000); // Redirect after 2 seconds to allow user to see the success message
        //     })
        //     .catch((error) => {
        //         setStatusMessage('Failed to submit the query, please try again.');
        //     });

        // For now, simulate a successful submission
        setStatusMessage('Your query has been submitted successfully!');
        setQuery('');
        setUserEmail('');
        setTimeout(() => {
            navigate('/dashboard'); // Redirect to dashboard after successful submission
        }, 2000); // Redirect after 2 seconds to allow user to see the success message
    };

    return (
        <div className="container">
            <h2>Submit a Customer Query</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        placeholder="Write your query here"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                {statusMessage && <div className="status-message">{statusMessage}</div>}
                <button type="submit">Submit Query</button>
            </form>
            <div>
                <button className="go-back-btn" onClick={() => navigate('/dashboard')}>Go Back</button>
            </div>
        </div>
    );
}

export default CustomerQuery;
