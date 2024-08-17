import React from "react";

const SearchBar = ({onSearch}) => {
  const handleSearch = (event) => {
    console.log ("handleSearch",event);
    onSearch(event.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-6">
      <input
        type="text"
        placeholder="Buscar por titulo, genero o año..."
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};
export default SearchBar;
