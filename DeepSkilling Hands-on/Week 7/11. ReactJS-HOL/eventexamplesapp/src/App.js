import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css'; 
const App = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const sayHello = () => {
    setMessage("Hello! Member1");
    setIsModalOpen(true);
  };
  const handleMultipleEvents = () => {
    handleIncrement();
    sayHello();
  };

  const sayWelcome = (greeting) => {
    setMessage(greeting);
    setIsModalOpen(true);
  };

  const handleSimpleClick = () => {
    setMessage("I was clicked");
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <div className="event-section">
        <h1 className="event-heading">React Event Examples</h1>
        <div className="counter-container">
          <p className="counter-value">{count}</p>
        </div>
        <div className="button-group">
          <button onClick={handleMultipleEvents}>Increment</button>
          
          <button onClick={() => setCount(count - 1)}>Decrement</button>

          <button onClick={() => sayWelcome("welcome")}>Say Welcome</button>

          <button onClick={handleSimpleClick}>Click on me</button>
        </div>
      </div>

      <CurrencyConvertor />
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{message}</p>
            <button onClick={() => setIsModalOpen(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
