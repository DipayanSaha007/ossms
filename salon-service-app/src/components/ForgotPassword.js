import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [code, setCode] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const navigate = useNavigate();

    const generateCode = () => {
        const randomCode = Math.floor(1000 + Math.random() * 9000);
        setGeneratedCode(randomCode);
        alert(`Your 4-digit code is: ${randomCode}`);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleRequestCode = (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage('Please enter your email address');
            return;
        }

        generateCode();
        setIsCodeSent(true);
        setErrorMessage('');
        setSuccessMessage('');
    };

    const handleSubmitCodeAndPassword = (e) => {
        e.preventDefault();

        if (code !== generatedCode.toString()) {
            setErrorMessage('Incorrect code. Please try again.');
            return;
        }

        if (!newPassword) {
            setErrorMessage('New password is required');
            return;
        }

        if (!validatePassword(newPassword)) {
            setErrorMessage('New password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.');
            return;
        }

        setSuccessMessage('Password reset successful.');
        setErrorMessage('');
        setIsCodeSent(false);

        setTimeout(() => {
            navigate('/signin');
        }, 2000);
    };

    const handleGoBack = () => {
        navigate('/signin');
    };

    return (
        <div className="container">
            <h2>Forgot Password</h2>
            {!isCodeSent ? (
                <form onSubmit={handleRequestCode}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <button type="submit">Send Reset Code</button>
                </form>
            ) : (
                <div>
                    <h3>Enter the code and new password</h3>
                    <form onSubmit={handleSubmitCodeAndPassword}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Enter 4-digit code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
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
                        {successMessage && <div className="success-message">{successMessage}</div>}
                        <button type="submit">Reset Password</button>
                    </form>
                </div>
            )}

            <div>
                <button onClick={handleGoBack}>Go Back to Sign In</button>
            </div>
        </div>
    );
}

export default ForgotPassword;
