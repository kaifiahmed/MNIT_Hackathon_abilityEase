import React from 'react'
import searchbutton from '../../assets/images/searchbutton.png'

const SearchBar
 = () => {
  return (
    <div>
    <input
   type="text"
   placeholder="Enter your search query"
   />
   <input type="button" className='button'/>
   <img src={searchbutton}  alt='image' height='50px'/>
</div>
  )
}

export default SearchBar
