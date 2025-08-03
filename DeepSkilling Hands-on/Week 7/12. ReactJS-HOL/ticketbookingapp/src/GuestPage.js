import React from 'react';
import './App.css';

const flightDetails = [
  { id: 1, flight: 'AI-101', from: 'New Delhi', to: 'Mumbai', departure: '08:00 AM' },
  { id: 2, flight: 'UA-205', from: 'Bangalore', to: 'Chennai', departure: '10:30 AM' },
  { id: 3, flight: 'BA-300', from: 'Kolkata', to: 'Hyderabad', departure: '01:15 PM' },
];

const GuestPage = ({ onLogin }) => {
  return (
    <div className="page-container">
      <h1>Welcome Guest!</h1>
      <p>Please log in to book tickets. You can view the available flights below.</p>
      
      <h2>Available Flights</h2>
      <ul className="flight-details-list">
        {flightDetails.map(flight => (
          <li key={flight.id}>
            <strong>Flight:</strong> {flight.flight} <br />
            <strong>From:</strong> {flight.from} <br />
            <strong>To:</strong> {flight.to} <br />
            <strong>Departure:</strong> {flight.departure}
          </li>
        ))}
      </ul>

      <div className="button-container">
        <button className="login-button" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default GuestPage;
