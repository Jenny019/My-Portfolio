import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../images/logo.svg';
import Jicon from '../../images/Jicon.jpeg';
import './Navibar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NaviBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <a href="">
          <img src={ Jicon } alt="logo" className='narbar-logo' />
        </a>
      </div>

      <div className='primary-nav'>
        {/* <ul className='ul-list'>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> */}

        <Navbar variant='black' expand="lg">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Projects">Projects</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>   
  )
}

export default NaviBar;