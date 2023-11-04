import React from 'react'
import searchbutton from '../../assets/images/searchbutton.png'
import Wrapper from './style'

const SearchBar
 = () => {
  return (
    <Wrapper>
    <div className="search-container">
      <input type="text" placeholder="Enter your search query" />
      <button type="submit" className="button">
        <img src={searchbutton} alt="Search" height="50px" />
      </button>
    </div>
  </Wrapper>
  )
}

export default SearchBar
