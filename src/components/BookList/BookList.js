import React from 'react';

const BookList = ({ books, onDeleteBook, onEditBook }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <span>{book.title}</span>
          <button onClick={() => onEditBook(book)}>Edit</button>
          <button onClick={() => onDeleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;