import React from 'react';
import './App.css';

const BookDetails = ({ books }) => {
  return (
    <div className="card book-card">
      <h2 className="card-title">Book Details</h2>
      {books.length > 0 ? (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <h3>{book.name}</h3>
              <p>Price: ${book.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookDetails;
