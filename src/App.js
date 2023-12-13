import React, { useState, useEffect } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import apiService from './services/apiService';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Код, который выполнится при монтировании компонента
    loadBooks();
  }, []); // Пустой массив зависимостей означает, что эффект будет выполняться только при монтировании компонента

  async function loadBooks() {
    try {
      setLoading(true);
      setError(null);
      const booksData = await apiService.getBooks();
      setBooks(booksData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddBook(newBook) {
    try {
      await apiService.addBook(newBook);
      await loadBooks();
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleDeleteBook(bookId) {
    try {
      await apiService.deleteBook(bookId);
      await loadBooks();
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleEditBook(editedBook) {
    try {
      await apiService.updateBook(editedBook);
      await loadBooks();
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddBookForm onAddBook={handleAddBook} />
        {error && <p>Error: {error}</p>}
        {loading ? <p>Loading...</p> : <BookList books={books} onDeleteBook={handleDeleteBook} onEditBook={handleEditBook} />}
      </header>
    </div>
  );
}

export default App;
