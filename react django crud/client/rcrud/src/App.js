import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [books, getBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState(0);

  // for update
  const [newTitle, setNewtitle] = useState('');

  useEffect(() => {
    fetchBooks(); // Call the fetchBooks function correctly
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/');
      const data = await response.json();
      getBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addBook = async () => {
    const bookData = {
      title,
      releaseYear: Number(releaseYear),
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      // Directly attempt to parse the response as JSON
      const data = await response.json();
      console.log('Added book:', data); // Log added book details
      fetchBooks(); // Refresh the list of books after adding a new one
    } catch (err) {
      console.log('Error while adding book:', err);
    }
  };

  const updateTitle = async (pk, releaseYear) => {
    const bookData = {
      title: newTitle,
      releaseYear: Number(releaseYear),
    };

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      const data = await response.json();

      // Update the state of books with the updated book data
      getBooks((prev) =>
        prev.map((book) => {
          if (book.id === pk) {
            return data; // Replace the old book with the updated book data
          } else {
            return book;
          }
        })
      );

      console.log('Updated book:', data); // Log updated book details
    } catch (err) {
      console.log('Error while updating book:', err);
    }
  };


  const deleteBook = async (pk) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: 'DELETE',
      });
  
      // Update state by filtering out the deleted book
      getBooks((prev) => prev.filter((book) => book.id !== pk));
  
      console.log('Deleted book:', pk); // Log the ID of the deleted book
    } catch (err) {
      console.log('Error while deleting book:', err);
    }
  };
  



  return (
    <div>
      <h1>Book Website</h1>
      <div>
        <input
          type="text"
          placeholder="Book title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release year..."
          onChange={(e) => setReleaseYear(Number(e.target.value))}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {books.map((book) => (
        <div key={book.id}>
          <p>Title: {book.title}</p>
          <p>Release Year: {book.releaseYear}</p>

          <input
            type="text"
            placeholder="New title..."
            onChange={(e) => setNewtitle(e.target.value)}
          />
          <button onClick={() => updateTitle(book.id, book.releaseYear)}>
            Change Title
          </button>
          <button onClick={() => deleteBook(book.id)}>
           Delete Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
