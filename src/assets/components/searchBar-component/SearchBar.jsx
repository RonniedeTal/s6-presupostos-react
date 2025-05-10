import React from "react";

function SearchBar(props) {
  const handleSearch = (e) => {
    props.setSearchValue(e.target.value.toUpperCase());
  };

  const handleSortChange = (e) => {
    props.setSortBy(e.target.value);
  };

  return (
    <div className="d-flex gap-2 mb-3 justify-content-center">
      <input
        type="text"
        value={props.searchValue}
        onChange={handleSearch}
        placeholder="Find by name"
        className="form-control"
        style={{ maxWidth: "200px" }}
      />

      <select className="form-select form-select-sm" onChange={handleSortChange} value={props.sortBy}  style={{ maxWidth: "150px", padding: "0.25rem 0.5rem", fontSize: "0.875rem" }}>
        <option value="">Sort by</option>
        <option value="name">Name (A-Z)</option>
        <option value="price">Price (Low to High)</option>
      </select>
    </div>
  );
}

export default SearchBar;
