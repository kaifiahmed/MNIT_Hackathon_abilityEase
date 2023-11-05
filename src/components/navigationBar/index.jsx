import React from 'react'
import Wrapper from './style'
import { Link } from 'react-router-dom';
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
      <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/support">Support</Link>
      </div>
    </div>
    </Wrapper>
    
  )
}

export default NavigationBar