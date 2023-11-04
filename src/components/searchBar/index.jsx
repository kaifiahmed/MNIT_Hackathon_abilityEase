import React from 'react'
import searchbutton from '../../assets/images/searchbutton.png'
import Wrapper from './style'

const SearchBar
 = () => {
  return (
    <Wrapper>
    <input
   type="text"
   placeholder="Enter your search query"
   />
   <input type="button" className='button'/>
   <img src={searchbutton}  alt='image' height='50px'/>
</Wrapper>
  )
}

export default SearchBar
