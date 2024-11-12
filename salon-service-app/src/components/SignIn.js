import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        
        if (!username || !password) {
            setErrorMessage('All fields are required');
            return;
        }

        setErrorMessage('');
        alert('Sign In Successful');
        navigate('/dashboard'); // Redirect to dashboard after successful sign-in
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password'); // Redirect to Forgot Password page
    };

    return (
        <div className="container">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit">Sign In</button>
            </form>
            <div>
                <a className="go-back-btn" href="/">Go Back</a>
            </div>
            <div>
                <button onClick={handleForgotPassword}>Forgot Password?</button>
            </div>
        </div>
    );
}

export default SignIn;
