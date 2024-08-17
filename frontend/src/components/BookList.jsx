import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, onEdit, onDelete, onDetails }) => {
  console.log ("Books");
  return (
    <div className="mt-6">
      {books.length > 0 ? (
        books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onEdit={onEdit}
            onDelete={onDelete}
            onDetails={onDetails}
          />
        ))
      ) : (
        <p className="text-gray-500">No hay libros registrados</p>
      )}
    </div>
  );
};
export default BookList;
