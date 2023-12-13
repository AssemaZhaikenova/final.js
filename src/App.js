import React, { useState } from 'react';

import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', description: 'Description for Book 1' },
    { id: 2, title: 'Book 2', description: 'Description for Book 2' },
  ]);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, { ...newBook, id: prevBooks.length + 1 }]);
  };

  const handleDeleteBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const handleEditBook = (editedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === editedBook.id ? editedBook : book))
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <AddBookForm onAddBook={handleAddBook} />
        <BookList books={books} onDeleteBook={handleDeleteBook} onEditBook={handleEditBook} />
        {/* Другие компоненты и код приложения */}
      </header>
    </div>
  );
}

export default App;