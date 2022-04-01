import React from "react";
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import pinterest from '../../images/pinterest.svg';
import email from '../../images/email.svg';
import './Footer.css';
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
      <div className="footer-list">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <p className="copyright">Copyright &copy; Jenny Yang</p>
      </div>
    </div> 
  )
}

export default Footer;