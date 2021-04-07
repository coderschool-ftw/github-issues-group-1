import React from "react";

const SearchForm = ({ handleChange, searchTerm, handleClick }) => {
  return (
    <div className="search-form-wrapper">
      <input type="text" onChange={handleChange} value={searchTerm} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchForm;
