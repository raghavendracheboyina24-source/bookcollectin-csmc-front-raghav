import { createContext, useState } from "react";
import booksData from "../data/books";

export const BookContext = createContext();

function BookProvider({ children }) {
  const [books, setBooks] = useState(booksData);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [
      ...prevBooks,
      {
        ...newBook,
        id: Date.now(),
      },
    ]);
  };

  const updateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };

  const deleteBook = (id) => {
    setBooks((prevBooks) =>
      prevBooks.filter((book) => book.id !== id)
    );
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;