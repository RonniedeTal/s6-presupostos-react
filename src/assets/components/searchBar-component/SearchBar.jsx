import React, { useState } from 'react'

function SearchBar(props) {

    // const [searchValue, setSearchValue]=useState("")

    const handleSearch=(e)=>{
       props.setSearchValue(e.target.value.toUpperCase())
    }
  return (
    <div>
      <h3>ask budget</h3>
      <input type="text" value={props.searchValue} onChange={handleSearch}/>
    </div>
  )
}

export default SearchBar
