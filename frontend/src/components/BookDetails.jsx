import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById } from '../services/bookService';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  
  //console.error('BookDetails:', id);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await getBookById(id);
        setBook(bookData);
        //console.error('bookData:', bookData);
      } catch (error) {
        console.error('Error fetching book details:', error);
        alert('Error al obtener los detalles del libro');
        navigate('/'); 
      }
    };

    fetchBook();
  }, [id, navigate]);

  if (!book) {
    return <div>Cargando detalles...</div>;
  }

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Detalles del Libro</h2>
      <div className="mb-4">
        <strong>Título:</strong> <span>{book.title}</span>
      </div>
      <div className="mb-4">
        <strong>Clasificación:</strong> <span>{book.classification}</span>
      </div>
      <div className="mb-4">
        <strong>Formato:</strong> <span>{book.format}</span>
      </div>
      <div className="mb-4">
        <strong>Género:</strong> <span>{book.genre}</span>
      </div>
      <div className="mb-4">
        <strong>Precio:</strong> <span>{book.price}</span>
      </div>
      <div className="mb-4">
        <strong>Año de Publicación:</strong> <span>{book.publicationYear}</span>
      </div>
      <div className="mb-4">
        <strong>Autor(es):</strong><span>{Array.isArray(book.authors) ? book.authors.join(', ') : 'N/A'}</span>
      </div>
      <div className="mb-4">
        <strong>Editorial:</strong> <span>{book.publisher}</span>
      </div>
      <div className="mb-4">
        <strong>ISBN:</strong> <span>{book.isbn}</span>
      </div>
      <button onClick={() => navigate('/')} className="bg-blue-500 text-white py-2 px-4 rounded">
        Volver a la Lista
      </button>
    </div>
  );
};

export default BookDetails;
