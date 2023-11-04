import React from 'react'
import Wrapper from './style'

const NavigationBar = () => {
  return (
    <Wrapper>
      <div className="navbar">
      <div className="logo">
        <img src= {logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Support</a>
      </div>
    </div>
    </Wrapper>
    
  )
}

export default NavigationBar