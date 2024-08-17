import axios from "axios";
//const dotenv = require("dotenv");

//dotenv.config();

const BACK_API_URL = 'http://localhost:5000/api/books';
console.log(BACK_API_URL);

/*export const getBooks = async () => {
  console.log("getBooks URL: ",BACK_API_URL);
  try {
    const response = await axios.get(BACK_API_URL);
    return response.data;
  } catch (error) {
    console.error("getBooks - Error fetching books:", error);
    throw error;
  }
};

export const getBookById = async (id) => {
  try {
    console.log(`getBookbyId URL: ${BACK_API_URL}/${id}`);
    const response = await axios.get(`${BACK_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("getBooksbyID - Error fetching book by ID:", error);
    throw error;
  }
};

export const addBook = async (bookData) => {
  try {
    console.log("addBook URL: ",BACK_API_URL);
    console.log("bookData\n",bookData);
    const response = await axios.post(BACK_API_URL, bookData);
    return response.data;
  } catch (error) {
    console.error("addBook - Error adding book:", error);
    throw error;
  }
};

export const updateBook = async (id, bookData) => {
  try {
    console.log(`updateBook URL: ${BACK_API_URL}/${id}`);
    const response = await axios.put(`${BACK_API_URL}/${id}`, bookData);
    return response.data;
  } catch (error) {
    console.error("updateBook - Error updating book:", error);
    throw error;
  }
};

export const deleteBook = async (id) => {
    const idDelete=id;
    console.log ("idDelete,",idDelete);
  try {
    console.log(`deleteBook URL: ${BACK_API_URL}/${id}`);
    const response = await axios.delete(`${BACK_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("deleteBook - Error deleting book:", error);
    throw error;
  }
};
*/

export const getBooks = () => {
    console.log("bookService - getBooks URL: ",BACK_API_URL);
    try {
      const request = axios.get(BACK_API_URL);
      return request.then(response => response.data)
    } catch (error) {
      console.error("getBooks - Error fetching books:", error);
      throw error;
    }
  };
  //TO_CHECK

  export const getBookById = (id) => {
    console.log(`bookService - getBookById URL:${BACK_API_URL}?/v_id/${id}`);
    try {
      const request = axios.get(`${BACK_API_URL}/v_id/${id}`);
      return request.then(response => response.data)
    } catch (error) {
      console.error("getBooksbyID - Error fetching book by ID:", error);
      throw error;
    }
  };
  

  export const addBook = (bookData) => {
    console.log(`bookService - addBook URL: ${BACK_API_URL} - ${bookData}`);
    try {
      const request = axios.post(BACK_API_URL, bookData);
      return request.then(response => response.data)
    } catch (error) {
      console.error("addBook - Error adding book:", error);
      throw error;
    }
  };
  

  export const updateBook = (id, bookData) => {
    console.log(`bookService - updateBook URL: ${BACK_API_URL}/v_id/${id}`);
    try {  
      const request = axios.put(`${BACK_API_URL}/v_id/${id}`, bookData);
      return request.then(response => response.data)
    } catch (error) {
      console.error("updateBook - Error updating book:", error);
      throw error;
    }
  };
  
  export const deleteBook = (id) => {
      const idDelete=id;
      console.log ("idDelete,",idDelete);
      console.log(`bookService - deleteBook URL: ${BACK_API_URL}/v_id/${id}`);
    try {
      console.log(`deleteBook URL: ${BACK_API_URL}/v_id/${id}`);
      const request = axios.delete(`${BACK_API_URL}/v_id/${id}`);
      return request.then(response => response.data)
    } catch (error) {
      console.error("deleteBook - Error deleting book:", error);
      throw error;
    }
  };

export default {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
