import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

import "../styles/Library.css";

function Library() {
    const { books } = useContext(BookContext);
  return (
    <div className="home-layout">
      <Sidebar />

      <div className="library-container">

        <Navbar />

        <h2 className="library-title">
          📚 My Library
        </h2>

        <p className="library-subtitle">
          Manage all your books in one place.
        </p>

        <div className="library-grid">

          {books.map((book) => (
            <BookCard
    key={book.id}
    id={book.id}
    image={book.image}
    title={book.title}
    author={book.author}
    genre={book.genre}
    rating={book.rating}
    status={book.status}
/>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Library;