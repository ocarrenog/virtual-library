import React, { useState } from 'react';
import { addBook } from '../services/bookService';
import { useNavigate } from 'react-router-dom';

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    classification: '',
    format: '',
    genre: '',
    price: '',
    publicationYear: '',
    authors: '',
    publisher: '',
    isbn: ''
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log('handleChange:', name, value);
  };

  const handleSubmit = async (event) => {
  //  console.error ("handleSubmit:",event);
    event.preventDefault();
    try {
      await addBook(formData);
      alert('Libro registrado exitosamente');
      console.error ("handleSubmit - Book created Sucessfully");
      navigate('/');
    } catch (error) {
      console.error("Error creating Book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Agregar Nuevo Libro</h2>
      {['title', 'classification', 'format', 'genre', 'price', 'publicationYear', 'authors', 'publisher', 'isbn'].map((field, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
            {field}
          </label>
          <input
            type="text"
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Agregar Libro
      </button>
    </form>
  );
};

export default AddBookForm;