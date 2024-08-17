import React from "react";
import AddBookForm from "../components/AddBookForm";

const AddBookPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Libro</h2>
      <AddBookForm />
    </div>
  );
};

export default AddBookPage;
