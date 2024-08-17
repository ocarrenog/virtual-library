const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      unique: true,
    },
    title: { type: String, required: true, maxlength: 100 },
    classification: { type: String, required: true },
    format: { type: String, required: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
    //coverImage: { type: String },
    publicationYear: { type: Number, required: true },
    authors: [{ type: String, required: true, maxlength: 100 }],
    publisher: { type: String },
    isbn: { type: String, required: true, unique: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Book", bookSchema);
