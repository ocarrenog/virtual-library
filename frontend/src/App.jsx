import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBookPage from "./pages/AddBookPage";
import ListBooksPage from "./pages/ListBookPage";
import EditBookPage from "./pages/EditBookPage";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import BookDetails from "./components/BookDetails";

function App() {
  console.log("App function");
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-grow">
          <Header />
          <Routes>
           <Route path="/" element={<ListBooksPage />} />
            <Route path="/add-book" element={<AddBookPage />} />
            <Route path="/books" element={<ListBooksPage />} />
            <Route path="/edit/:id" element={<EditBookPage />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
