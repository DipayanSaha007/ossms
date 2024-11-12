import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [code, setCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        if (!username || !email || !newPassword) {
            setErrorMessage('All fields are required');
            return;
        }

        if (!validatePassword(newPassword)) {
            setErrorMessage('Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.');
            return;
        }

        setErrorMessage('');
        alert('Profile Updated');
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleUpdateProfile}>
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
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit">Update Profile</button>
            </form>
            <div>
                <button className="go-back-btn" onClick={() => navigate('/dashboard')}>Go Back</button>
            </div>
        </div>
    );
}

export default EditProfile;
