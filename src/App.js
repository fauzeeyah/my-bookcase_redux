import React, { useState, useEffect } from "react";
import data from "./models/books.json";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Bookcase from "./pages/Bookcase";
import Contact from "./pages/Contact";

function App() {
  const [bookcase, setBookcase] = useState([]);

  const addBook = (book) => {
    setBookcase([...bookcase, book]);
  };

  const removeBook = (id) => {
    setBookcase(bookcase.filter(book => book.id !== id));
  };

  useEffect(() => {
    document.title = `Bookcase (${bookcase.length})`;
  }, [bookcase]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookcase" element={<Bookcase books={bookcase} addBook={addBook} removeBook={removeBook} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
