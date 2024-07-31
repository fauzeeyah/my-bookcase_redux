import React from "react";

function Book({ book, removeBook }) {
  return (
    <div>
      <h3>{book.volumeInfo.title}</h3>
      <p>Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown"}</p>
      <p>Description: {book.volumeInfo.description || "No description available"}</p>
      <p>Price: {book.price !== null ? `$${book.price}` : "Price not available"}</p>
      <button onClick={() => removeBook(book.id)}>Remove</button>
    </div>
  );
}

export default Book;
