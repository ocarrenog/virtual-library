import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditBookForm from '../components/EditBookForm';
import { getBookById, updateBook } from '../services/bookService';

const EditBookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (error) {
        console.error("Error fetching the book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleUpdate = async (updatedBook) => {
    try {
      await updateBook(id, updatedBook);
      alert("Libro actualizado con éxito.");
      navigate('/books'); // Redirige a la lista de libros
    } catch (error) {
      console.error("Error updating the book:", error);
      alert("Hubo un error al intentar actualizar el libro.");
    }
  };

  return (
    <div>
        <EditBookForm book={book} onUpdateBook={handleUpdate} />
    </div>
  );
};

export default EditBookPage;
