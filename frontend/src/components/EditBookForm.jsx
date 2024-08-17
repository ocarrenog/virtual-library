import React, { useState, useEffect } from 'react';
import { getBookById, updateBook } from '../services/bookService';
import { useParams, useNavigate } from 'react-router-dom';

const EditBookForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
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

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await getBookById(id);
        setFormData({
          title: bookData.title || '',
          classification: bookData.classification || '',
          format: bookData.format || '',
          genre: bookData.genre || '',
          price: bookData.price || '',
          publicationYear: bookData.publicationYear || '',
          authors: Array.isArray(bookData.authors) ? bookData.authors.join(', ') : '',
          publisher: bookData.publisher || '',
          isbn: bookData.isbn || ''
        });
      } catch (error) {
        console.error('Error fetching book:', error);
        alert('Error al obtener los datos del libro');
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateBook(id, formData);
      alert('Libro actualizado exitosamente');
      navigate('/'); 
    } catch (error) {
      console.error("Error updating book:", error);
      alert('Error al actualizar el libro');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Editar Libro</h2>
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
        Actualizar Libro
      </button>
    </form>
  );
};

export default EditBookForm;
