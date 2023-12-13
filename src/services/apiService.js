// services/apiService.js

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiService = {
  async updateBook(updatedBook) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${updatedBook.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: updatedBook.title,
          body: updatedBook.description,
          userId: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update book');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error updating book: ${error.message}`);
    }
  },

  // Другие методы API
};

export default apiService;

