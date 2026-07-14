import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import StatsCard from "./StatsCard";
import ReadingCard from "./ReadingCard";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import books from "../data/books";
import {
  FaBook,
  FaBookReader,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";

import "../styles/Dashboard.css";

function Dashboard() {
  const { books } = useContext(BookContext);

const [search, setSearch] = useState(""); 
  const [genre, setGenre] = useState("All");
  const [status, setStatus] = useState("All");

  // Apply Search + Genre + Status Filters
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || book.genre === genre;

    const matchesStatus =
      status === "All" || book.status === status;

    return matchesSearch && matchesGenre && matchesStatus;
  });

  return (
    <div className="dashboard">

      <Navbar />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterBar
        genre={genre}
        setGenre={setGenre}
        status={status}
        setStatus={setStatus}
      />

      {/* Welcome Card */}

      <div className="welcome-card">

        <h2>Welcome Back 👋</h2>

        <p>
          Organize your books, track your reading progress,
          and build your own personal digital library.
        </p>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <StatsCard
          icon={<FaBook />}
          title="Total Books"
          value={filteredBooks.length}
          color="#4F46E5"
        />

        <StatsCard
          icon={<FaBookReader />}
          title="Reading"
          value={
            filteredBooks.filter(
              (book) => book.status === "Reading"
            ).length
          }
          color="#F59E0B"
        />

        <StatsCard
          icon={<FaCheckCircle />}
          title="Completed"
          value={
            filteredBooks.filter(
              (book) => book.status === "Completed"
            ).length
          }
          color="#10B981"
        />

        <StatsCard
          icon={<FaHeart />}
          title="Favorites"
          value={
            filteredBooks.filter(
              (book) => book.favorite
            ).length
          }
          color="#EC4899"
        />

      </div>

      {/* Continue Reading */}

      <div className="reading-section">

        <h2 className="reading-title">
          Continue Reading
        </h2>

        {filteredBooks
          .filter((book) => book.status === "Reading")
          .map((book) => (
            <ReadingCard
              key={book.id}
              id={book.id}
              image={book.image}
              title={book.title}
              author={book.author}
              progress={book.progress}
            />
          ))}

      </div>

      

    </div>
  );
}

export default Dashboard;