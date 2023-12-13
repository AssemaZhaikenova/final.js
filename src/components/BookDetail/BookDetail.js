import React, { Component } from 'react';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: null,
    };
  }

  handleBookSelect = (bookId) => {
    const selectedBook = this.props.books.find(book => book.id === bookId);
    this.setState({ selectedBook });
  };

  render() {
    const { selectedBook } = this.state;

    return (
      <div>
        <h2>Book Detail</h2>
        {selectedBook ? (
          <div>
            <h3>{selectedBook.title}</h3>
            <p>{selectedBook.description}</p>
          </div>
        ) : (
          <p>Select a book to view details.</p>
        )}
      </div>
    );
  }
}

export default BookDetail;