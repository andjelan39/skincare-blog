import React from 'react'

const SearchBar = () => {
    return (
        <div className='searchBar-wrap'>
            <form >
                <input type='text' placeholder='Search By Category' />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar