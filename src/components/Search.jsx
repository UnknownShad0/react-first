import React from 'react'
const Search = ({searchTerm, setSearchTerm}) => {
    // console.log(searchTerm);
    return (
    <div className="search">
        <div>
            <img src="./search.svg" alt="" />
        <input 
            type="text" 
            placeholder="" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
    </div>
  )
}

export default Search
