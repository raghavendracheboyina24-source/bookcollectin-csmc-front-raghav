import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import ReadingList from "./pages/ReadingList";
import "./App.css";
function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/library" element={<Library />} />

      <Route path="/add-book" element={<AddBook />} />

      <Route path="/edit-book/:id" element={<EditBook />} />

      <Route path="/book/:id" element={<BookDetails />} />

      <Route path="/reading-list" element={<ReadingList />} />

    </Routes>
  );
}

export default App;