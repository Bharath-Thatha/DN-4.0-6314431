import React from 'react';
import './App.css';

function App() {
  const officeSpaces = [
    {
      id: 1,
      name: 'Modern Tech Hub',
      rent: 75000,
      address: '123 Tech Blvd, Silicon Valley',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    },
    {
      id: 2,
      name: 'Cozy Collaborative Space',
      rent: 55000,
      address: '456 Innovation Drive, San Francisco',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    },
    {
      id: 3,
      name: 'Downtown Executive Suite',
      rent: 82000,
      address: '789 Main Street, New York',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    },
    {
      id: 4,
      name: 'Spacious Creative Loft',
      rent: 59000,
      address: '101 Art Avenue, Los Angeles',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    },
  ];

  return (
    <div className="app-container">
      <h1 className="page-heading">Office Space Rentals</h1>

      <div className="office-list">
        {officeSpaces.map((office) => (
          <div key={office.id} className="office-card">
            <img src={office.image} alt={office.name} className="office-image" />
            <div className="office-details">
              <h2>{office.name}</h2>
              <p>Address: {office.address}</p>
              <p 
                style={{
                  color: office.rent < 60000 ? 'red' : 'green',
                  fontWeight: 'bold'
                }}
              >
                Rent: ₹{office.rent}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;