import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoA.jpg';

const SideBar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-7">
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Los Alpes Online Bookstore" className="w-32 h-auto" />
      </div>
      <h2 className="text-2xl font-bold mb-8">Gestión de Biblioteca</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/add-book" className="text-white hover:text-gray-400">
              Agregar Libro
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/books" className="text-white hover:text-gray-400">
              Lista de Libros
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
