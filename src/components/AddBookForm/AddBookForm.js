import React, { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [book, setBook] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(book);
    setBook({ title: '', description: '' }); // Очистка формы после отправки
  };

  return (
    <>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={book.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={book.description} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBookForm;