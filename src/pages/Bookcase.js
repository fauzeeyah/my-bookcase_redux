import React, { useState } from "react";
import "./Bookcase.css";
import Book from "../components/book/Book";

function Bookcase({ books, addBook, removeBook }) {
  const [newBookTitle, setNewBookTitle] = useState("");

  const handleAddBook = () => {
    const newBook = {
      id: `dfghf_${books.length + 1}`, // Generate a new id
      volumeInfo: {
        title: newBookTitle,
        authors: ["Unknown Author"], // Default value for authors
        description: "No description available" // Default value for description
      },
      price: 0 // Default price
    };

    addBook(newBook);
    setNewBookTitle("");
  };

  return (
    <div className="bookcase">
      <h2>My Bookcase Library</h2>
      <input
        type="text"
        value={newBookTitle}
        onChange={(e) => setNewBookTitle(e.target.value)}
        placeholder="Enter book title"
      />
      <button onClick={handleAddBook}>Add Book</button>
      <div>
        {books.map((book) => (
          <div className="book" key={book.id}>
            <Book bookProps={book} removeBook={removeBook} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookcase;
