import "../styles/Navbar.css";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      <div>

        <h1>📚 BookNest</h1>

        <p className="subtitle">
          Smart Personal Library
        </p>

      </div>

      <Link to="/add-book">

        <button className="add-btn">

          <FaPlus />

          Add Book

        </button>

      </Link>

    </div>
  );
}

export default Navbar;