import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { BookContext } from "../context/BookContext";

import "../styles/AddBook.css";

function EditBook() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { books, updateBook } = useContext(BookContext);

  const selectedBook = books.find(
    (book) => book.id === Number(id)
  );

  const [book, setBook] = useState(selectedBook);

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateBook(book);

    alert("Book Updated Successfully!");

    navigate("/library");
  };

  return (
    <div className="home-layout">

      <Sidebar />

      <div className="add-book-container">

        <Navbar />

        <div className="add-book-card">

          <h2>✏ Edit Book</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Book Title</label>

              <input
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Author</label>

              <input
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Genre</label>

              <select
                name="genre"
                value={book.genre}
                onChange={handleChange}
              >
                <option>Programming</option>
                <option>Self Help</option>
                <option>Finance</option>
                <option>Productivity</option>
              </select>
            </div>

            <button
              type="submit"
              className="save-btn"
            >
              Update Book
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditBook;    