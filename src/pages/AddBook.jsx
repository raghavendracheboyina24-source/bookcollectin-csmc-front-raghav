import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { BookContext } from "../context/BookContext";
import "../styles/AddBook.css";

function AddBook() {

  const navigate = useNavigate();

  const { addBook } = useContext(BookContext);

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "Programming",
    status: "Reading",
    rating: "",
    image: "",
    description: "",
    favorite: false,
    progress: 0,
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!book.title || !book.author || !book.rating) {
      alert("Please fill all required fields.");
      return;
    }

    addBook(book);

    alert("Book Added Successfully!");

    navigate("/library");
  };

  return (
    <div className="home-layout">

      <Sidebar />

      <div className="add-book-container">

        <Navbar />

        <div className="add-book-card">

          <h2>📚 Add New Book</h2>

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

            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                value={book.status}
                onChange={handleChange}
              >
                <option>Reading</option>
                <option>Completed</option>
                <option>To Read</option>
              </select>
            </div>

            <div className="form-group">
              <label>Rating</label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                value={book.rating}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Book Cover URL</label>
              <input
                type="text"
                name="image"
                value={book.image}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                name="description"
                value={book.description}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="save-btn"
            >
              Save Book
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddBook;