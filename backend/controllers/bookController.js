// Item Entity Controller
const Book = require("../models/Book");

// Create a new Book (C)
const createBook = async (request, response) => {
  console.log("Creating Book");
  try {
    const newBook = new Book(request.body);
    const savedBook = await newBook.save();
    response.status(201).json(savedBook);
    console.log("Book created");
  } catch (error) {
    console.error("Error creating book:", error.message);
    response.status(400).json({ message: error.message });
  }
};

// Get all Books (R)
const getBooks = async (request, response) => {
  console.log ("getBooks:", request.params);  
  //const id  = request.params.id;
  try {
    const books = await Book.find();
    console.log("All Books retrieved Successfully");
    response.json(books);
  } catch (error) {
    console.error("Error retrieving books:", error.message);
    response.status(500).json({ message: error.message });
  }
};

// Get Book by ID (R)
const getBookById = async (request, response) => {
  console.log ("getBookById:", request.params);  
  const { id } = request.params;
  try {
    const book = await Book.findOne ({id});
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }
    response.json(book);
  } catch (error) {
    response.status(500).json({ message: "Error getting Book", error });
  }
};

// Update and Books by id (U)

const updateBook = async (request, response) => {
  const { id } = request.params;
  const updateFields = request.body;

  try {
    const updatedBook = await Book.findOneAndUpdate({ id }, updateFields, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      console.log("Book not found");
      return response.status(404).json({ message: "Book not found" });
    }
    response.json(updatedBook);
    console.log("Book updated");
  } catch (error) {
    console.error("Error updating book:", error.message);
    response.status(500).json({ message: error.message });
  }
};

// Delete an Book by id (D)
const deleteBook = async (request, response) => {
  const { id } = request.params;
  console.log("Delete Book", request.params);
  try {
    //const deletedBook = await Book.findByIdAndDelete({ id: id });
    const deletedBook = await Book.findOneAndDelete({ id });
    if (!deletedBook) {
      console.log("Book not found for deletion");
      return response.status(404).json({ message: "Book not found" });
    }
    response.json({ message: "Book deleted successfully" });
    console.log("Book deleted");
  } catch (error) {
    console.error("Error deleting book:", error.message);
    response.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBook: createBook,
  getBooks: getBooks,
  getBookById: getBookById,
  updateBook: updateBook,
  deleteBook: deleteBook,
};
