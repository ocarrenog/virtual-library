# Virtual Library

Virtual Library is a web application that allows users to manage a library of books. Users can add, edit, view, and delete books. The application is built using React for the frontend and Node.js/Express for the backend, with MongoDB as the database.

## Features

- **Add Books**: Users can add new books to the library by filling out a form with the book's details.
- **Edit Books**: Users can edit the details of an existing book.
- **View Book Details**: Users can view the details of a specific book.
- **Delete Books**: Users can delete a book from the library.
- **Search Books**: Users can search for books by title, genre, or publication year.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ocarrenog/virtual-library.git
   
2. **Install dependencies:**
   Navigate into the project directory:
      
   ```bash
    cd virtual-library
   
4. **Install dependencies for the backend:**

   ```bash
   cd backend
   npm install

6. **Install dependencies for the frontend:**
   
   ```bash
   cd ../frontend
   npm install

### Setup

1. **Configure environment variables:**
   
   Create a .env file in the backend directory with the following content:
   
   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   
3. **Start the backend server**
   
   ```bash
   cd backend
   npm start
   ```bash

   The backend server will start on http://localhost:5000.
   
5. **Start the frontend development server**
   
   ```bash
   cd ../frontend
   npm start
   ```bash
   
   The frontend will start on http://localhost:5173`. (Depends on server, vite stars in port 5173)
   
### Usage

- Adding a Book:

Navigate to the "Add Book" section from the sidebar.
Fill in the book details and click "Add Book".

- Editing a Book:

Go to the "Books List" section.
Click "Edit" on the book you want to modify.
Update the details and click "Save".

- Viewing Book Details:

Go to the "Books List" section.
Click "View Details" on any book to see its full details.

- Deleting a Book:

Go to the "Books List" section.
Click "Delete" on the book you want to remove.
