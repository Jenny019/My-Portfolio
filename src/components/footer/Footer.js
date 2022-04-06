import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Footer.css';
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import pinterest from '../../images/pinterest.svg';
import email from '../../images/email.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (     
		<div className = "footer">
			{/* <div className = "footer-img">
        <div className = "facebook">
          <a href = "#"><img className="img-responsive" src={facebook} /></a>								
        </div>
        <div className = "linkedin">
          <a href = "#"><img className="img-responsive" src={linkedin} /></a>
        </div>
        <div className = "pinterest">
          <a href = "#"><img className="img-responsive" src={pinterest} /></a>							
        </div>
        <div className = "email-icon">
          <a href = "#"><img className="img-responsive" src={email} /></a>
        </div>
      </div>    */}

      <div className="footer-navbar">       
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
      <div>
        <p className="copyright">Copyright &copy; Jenny Yang</p>
      </div>
    </div> 
  )
}

export default Footer;