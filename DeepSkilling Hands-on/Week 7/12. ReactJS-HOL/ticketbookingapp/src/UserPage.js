import React from 'react';
import './App.css';

const UserPage = ({ onLogout }) => {
  return (
    <div className="page-container">
      <h1>Welcome Back!</h1>
      <p className="booking-message">
        You are now logged in and can book tickets.
      </p>

      <div className="button-container">
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPage;
