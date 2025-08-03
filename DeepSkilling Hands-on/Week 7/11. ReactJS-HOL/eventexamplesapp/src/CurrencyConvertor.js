import React, { useState } from 'react';
import './App.css'; 

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!rupees || isNaN(rupees)) {
      setMessage('Please enter a valid amount.');
      return;
    }
    const euros = parseFloat(rupees) / 80;
    setMessage(`Converting to Euro: Amount is ${euros.toFixed(2)}`);
  };

  return (
    <div className="currency-convertor-container">
      <h2 className="converter-heading">Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit} className="converter-form">
        <div className="input-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            placeholder="Enter amount in Rupees"
          />
        </div>
        <div className="input-group">
          <label htmlFor="currency">Currency:</label>
          <input
            type="text"
            id="currency"
            value="Euro"
            readOnly
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {message && <div className="converter-message">{message}</div>}
    </div>
  );
};

export default CurrencyConvertor;
