import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import bookService, { getBooks, deleteBook } from "../services/bookService";


const ListBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await getBooks();
        setBooks(fetchedBooks);
        setFilteredBooks(fetchedBooks);
      } catch (error) {
        console.log("Error fetching books", error);
      }
    };
    fetchBooks();
  }, []);


  const handleSearch = (searchTerm) => {
    console.log("handleSearch:", searchTerm);
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.publicationYear.toString().includes(searchTerm)
    );
    setFilteredBooks(filtered);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Confirma que desa eliminar este registro");
    console.log("handleDelete:", id);
    if (confirmDelete) {
      try {
        await bookService.deleteBook(id);
        setBooks(books.filter((book) => book.id !== id));
        setFilteredBooks(filteredBooks.filter((book) => book.id !== id));
        alert("Registro eliminado con éxito");
      } catch (error) {
        console.log("Error deleting Book:", error);
        alert("Hubo un error al intentar eliminar el registro");
      }
    }
  };

  const handleEdit = (book) => {
    console.log("handleEdit:", book.id);
    navigate(`/edit/${book.id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Listado de Libros</h2>
      <SearchBar onSearch={handleSearch} />
      <BookList
        books={filteredBooks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ListBooksPage;