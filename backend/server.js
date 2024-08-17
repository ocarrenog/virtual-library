const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");

const FRONT_END_URL = "http://localhost:5173";
//const FRONT_END_URL=process.env.FRONTEND_URL;

// Config env
dotenv.config();

const app = express();

// Connect to Mongo DB
connectDB();

//Config CORS
console.log("FRONT_END_URL: ", FRONT_END_URL);
//app.use(  cors({origin: FRONT_END_URL,}));
app.use(  cors({origin: FRONT_END_URL || "http://localhost:5173" }));


console.log("Middleware");
// Middleware
app.use(express.json());

// Routes
app.use("/api/books", require("./routes/bookRoutes"));

// Port configuration
console.log("process.env.PORT: ", process.env.PORT);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

// Items population

const loadSampleBook = async () => {
  const Book = require("./models/Book");

  const sampleBook = [
    {
      title: "Cien años de soledad",
      classification: "Ficción",
      format: "Tapa dura",
      genre: "Realismo mágico",
      price: 25.99,
      //coverImage: "imagen1.jpg",
      publicationYear: 1967,
      authors: ["Gabriel García Márquez"],
      publisher: "Editorial Sudamericana",
      isbn: "9780140175031",
    },
    {
      title: "El poder del hábito",
      classification: "No ficción",
      format: "Ebook",
      genre: "Autoayuda",
      price: 12.99,
      //coverImage: "imagen2.jpg",
      publicationYear: 2007,
      authors: ["Charles Duhigg"],
      publisher: "Penguin Random House",
      isbn: "9789681734916",
    },
    {
      title: "El alquimista",
      classification: "Ficción",
      format: "Tapa blanda",
      genre: "Autoayuda",
      price: 19.99,
      //coverImage: "imagen3.jpg",
      publicationYear: 1988,
      authors: ["Paulo Coelho"],
      publisher: "Planeta",
      isbn: "9788408128343",
    },
    {
      title: "The Lord of the Rings",
      classification: "Ficción",
      format: "Tapa dura",
      genre: "Fantasia",
      price: 39.99,
      //coverImage: "imagen4.jpg",
      publicationYear: 1954,
      authors: ["J.R.R. Tolkien"],
      publisher: "Allen & Unwin",
      isbn: "0395485192",
    },
    {
      title: "Harry Potter y la piedra filosofal",
      classification: "Ficción",
      format: "Tapa dura",
      genre: "Fantasía",
      price: 29.99,
      //coverImage: "imagen5.jpg",
      publicationYear: 1997,
      authors: ["J.K. Rowling"],
      publisher: "Bloomsbury",
      isbn: "9780747532699",
    },
    {
      title: "Don Quijote de la Mancha",
      classification: "Ficción",
      format: "Tapa blanda",
      genre: "Clásico",
      price: 14.99,
      //coverImage: "imagen6.jpg",
      publicationYear: 1605,
      authors: ["Miguel de Cervantes"],
      publisher: "Francisco de Robles",
      isbn: "9788420469280",
    },
    {
      title: "El código Da Vinci",
      classification: "Ficción",
      format: "Tapa dura",
      genre: "Suspenso",
      price: 22.99,
      //coverImage: "imagen7.jpg",
      publicationYear: 2003,
      authors: ["Dan Brown"],
      publisher: "Doubleday",
      isbn: "9780385504201",
    },
    {
      title: "Matar a un ruiseñor",
      classification: "Ficción",
      format: "Tapa blanda",
      genre: "Drama",
      price: 18.99,
      //coverImage: "imagen8.jpg",
      publicationYear: 1960,
      authors: ["Harper Lee"],
      publisher: "J.B. Lippincott & Co.",
      isbn: "9780446310789",
    },
    {
      title: "El Principito",
      classification: "Ficción",
      format: "Tapa dura",
      genre: "Fábula",
      price: 15.99,
      //coverImage: "imagen9.jpg",
      publicationYear: 1943,
      authors: ["Antoine de Saint-Exupéry"],
      publisher: "Reynal & Hitchcock",
      isbn: "9780156012195",
    },
    {
      title: "Orgullo y prejuicio",
      classification: "Ficción",
      format: "Tapa blanda",
      genre: "Romance",
      price: 16.99,
      //coverImage: "imagen10.jpg",
      publicationYear: 1813,
      authors: ["Jane Austen"],
      publisher: "T. Egerton",
      isbn: "9780141439518",
    },
  ];

  try {
    await Book.deleteMany();
    await Book.insertMany(sampleBook);
    console.log("Sample items loaded");
  } catch (err) {
    console.error(err.message);
  }
};
loadSampleBook();
