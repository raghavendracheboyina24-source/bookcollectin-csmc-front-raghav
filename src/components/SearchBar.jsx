import { FaSearch } from "react-icons/fa";
import "../styles/SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search books by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;