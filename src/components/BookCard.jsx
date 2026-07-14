import "../styles/BookCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function BookCard({
  id,
  image,
  title,
  author,
  genre,
  rating,
  status = "Reading",
}) {

  const { deleteBook } = useContext(BookContext);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );

    if (confirmDelete) {
      deleteBook(id);
    }
  };

  return (
    <div className="book-card">

      <img
        src={image}
        alt={title}
        className="card-image"
      />

      <div className="card-content">

        <h3>{title}</h3>

        <p>{author}</p>

        <div className="rating">
          ⭐ {rating}
        </div>

        <span className="genre">
          {genre}
        </span>

        <span className="status">
          {status}
        </span>

        <div className="card-buttons">

          <Link
            to={`/book/${id}`}
            style={{ flex: 1, textDecoration: "none" }}
          >
            <button className="view-btn" style={{ width: "100%" }}>
              <FaEye /> View
            </button>
          </Link>

          <Link
            to={`/edit-book/${id}`}
            style={{ flex: 1, textDecoration: "none" }}
          >
            <button className="edit-btn" style={{ width: "100%" }}>
              <FaEdit /> Edit
            </button>
          </Link>

        </div>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          <FaTrash /> Delete
        </button>

      </div>

    </div>
  );
}

export default BookCard;    