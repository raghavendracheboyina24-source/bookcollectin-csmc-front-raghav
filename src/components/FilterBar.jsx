import "../styles/FilterBar.css";

function FilterBar({
  genre,
  setGenre,
  status,
  setStatus,
}) {
  return (
    <div className="filter-bar">

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option>All</option>
        <option>Programming</option>
        <option>Self Help</option>
        <option>Finance</option>
        <option>Productivity</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>All</option>
        <option>Reading</option>
        <option>Completed</option>
        <option>To Read</option>
      </select>

    </div>
  );
}

export default FilterBar;