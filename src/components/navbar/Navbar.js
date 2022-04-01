import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../images/logo.svg';
import J from '../../images/J.jpeg';
import './Navbar.css';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
      <div className='logo'>
        <a href="">
          <img src={ J } alt="logo" className='narbar-logo' />
        </a>
      </div>

      <div className='primary-nav'>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
    </div>
    
  )
}

export default NavBar