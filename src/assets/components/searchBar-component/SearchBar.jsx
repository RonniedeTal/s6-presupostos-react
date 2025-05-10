import React, { useState } from "react";

function SearchBar(props) {
  // const [searchValue, setSearchValue]=useState("")

  const handleSearch = (e) => {
    props.setSearchValue(e.target.value.toUpperCase());
  };
  return (
    <div>
      <input
        type="text"
        value={props.searchValue}
        onChange={handleSearch}
        placeholder="find by name"
      />
    </div>
  );
}

export default SearchBar;
