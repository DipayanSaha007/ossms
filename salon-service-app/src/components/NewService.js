import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

function NewService() {
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [paymentOption, setPaymentOption] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(''); // For online payment method
    const [cardNumber, setCardNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Hook to navigate

    const handleAddService = (e) => {
        e.preventDefault();

        if (!serviceName || !serviceDescription || !appointmentDate || !paymentOption) {
            setErrorMessage('All fields are required');
            return;
        }

        // If payment option is online and card details are required
        if (paymentOption === 'Online' && (paymentMethod === '' || (paymentMethod === 'Card' && !cardNumber))) {
            setErrorMessage('Please select a payment method and provide card details if applicable');
            return;
        }

        // Store appointment details in localStorage
        const appointmentDetails = { serviceName, serviceDescription, appointmentDate, paymentOption, paymentMethod, cardNumber };
        localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));

        setErrorMessage('');
        alert('Service and appointment booked successfully');
        navigate('/dashboard'); // Redirect to dashboard after successful booking
    };

    return (
        <div className="container">
            <h2>Add a New Service</h2>
            <form onSubmit={handleAddService}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Service Name" 
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Service Description" 
                        value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="date" 
                        placeholder="Appointment Date" 
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <select 
                        value={paymentOption}
                        onChange={(e) => setPaymentOption(e.target.value)}
                    >
                        <option value="">Select Payment Option</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>
                </div>

                {paymentOption === 'Online' && (
                    <div className="form-group">
                        <label>Select Payment Method:</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="">Select Method</option>
                            <option value="GPay">GPay</option>
                            <option value="Card">Credit/Debit Card</option>
                        </select>
                    </div>
                )}

                {paymentMethod === 'Card' && (
                    <div className="form-group">
                        <label>Enter Card Number:</label>
                        <input
                            type="text"
                            placeholder="Enter your card number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>
                )}

                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit">Add Service</button>
            </form>
            <div>
                <a className="go-back-btn" href="/dashboard">Go Back</a>
            </div>
        </div>
    );
}

export default NewService;
