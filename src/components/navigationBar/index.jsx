import React from 'react'
import Wrapper from './style'
import logo from '../../assets/images/logo.jpg'

const NavigationBar = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src= {logo} alt="Logo" />
        <h1 className="website-name">Ability Ease</h1>
      </div>
      <div className="navbar">
      
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