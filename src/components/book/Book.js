import React from "react";

function Book({ bookProps, removeBook }) {
 
  return (
    <div>
      <h3>{bookProps.volumeInfo.title}</h3>
      <p>Authors: {bookProps.volumeInfo.authors ? bookProps.volumeInfo.authors.join(", ") : "Unknown"}</p>
      <p>Description: {bookProps.volumeInfo.description || "No description available"}</p>
      <p>Price: {bookProps.price !== null ? `$${bookProps.price}` : "Price not available"}</p>
      <button onClick={() => removeBook(bookProps.id)}>Remove</button>
    </div>
  );
}

export default Book;
