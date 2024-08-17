const express = require ('express');
const routerA = express.Router();
const bookController  = require ('../controllers/bookController');

// Routes to manage the Book CRUD operations
console.log ('Book Routes Initializing ...');

// Get all books
routerA.get('/', bookController.getBooks);

// Get Book by Id
routerA.get('/v_id/:id', bookController.getBookById);

// Create a new book
routerA.post('/', bookController.createBook);

// Update an existing book by ID
routerA.put('/v_id/:id', bookController.updateBook);

// Delete a book by ID
routerA.delete('/v_id/:id', bookController.deleteBook);


module.exports = routerA;