import React from "react";
import { useNavigate } from 'react-router-dom';

const BookItem = ({ book, onEdit, onDelete, onDetails }) => {
const navigate = useNavigate();

const handleViewDetails = () => {
  navigate(`/book/${book.id}`);
};

  return (
    <div className="bg-white p-4 rounded shadow-md flex justify-between items-center">
      <div className="ml-4 flex-1">
        <h3 className="text-xl font-bold">{book.title}</h3>
        <p className="text-gray-600">{book.authors.join(", ")}</p>
        <p className="text-gray-600">
          Año de Publicación: {book.publicationYear}
        </p>
      </div>
      <div>
      <button
          onClick= {handleViewDetails}
          className="text-blue-500 hover:underline mr-4"
          aria-label={`Ver detalles de ${book.title}`}
        >
          Ver detalles
        </button>
        <button
          onClick={() => onEdit(book)}
          className="text-blue-500 hover:underline mr-4"
          aria-label={`Editar ${book.title}`}
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="text-red-500 hover:underline"
          aria-label={`Eliminar ${book.title}`}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default BookItem;
