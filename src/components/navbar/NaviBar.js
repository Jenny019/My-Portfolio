import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../images/logo.svg';
import Jicon from '../../images/Jicon.jpeg';
import './Navibar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ToggleSwitch from '../switch/ToggleSwitch';

const NaviBar = () => {

  // const toggleDarkMode = (e) =>  {
  //   document.documentElement.classList.toggle('dark-mode')
  //   document.getElementById('not-dark').classList.toggle('inverse-dark')
  //   document.getElementById('not-dark2').classList.toggle('inverse-dark')
  //   var x = document.getElementsByClassName('img-pro')
  //   for(let i = 0; i < x.length; i += 1) {
  //       x.item(i).classList.toggle("inverse-dark");
  //   }
    
  //   if (document.documentElement.classList.contains('dark-mode'))
  //     localStorage.setItem('mode', 'Dark')
  //   else
  //     localStorage.setItem('mode', 'Light')
  // }

  return (
    <div className='navbar'>
      <div className='logo'>
        <a href="">
          <img src={ Jicon } alt="logo" className='narbar-logo' />
        </a>
      </div>
    
        {/* <label className="switch">
          <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox"/>
          <span className="slider round">Hello</span>
        </label> */}

        {/* <div className='switch'>
          <ToggleSwitch id="mode-switch" onClick={e => toggleDarkMode(e)}/>
        </div> */}
        
      <div className='primary-nav'>
        <Navbar variant='primary' expand="lg">
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