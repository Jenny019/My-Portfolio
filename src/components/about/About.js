import React from 'react';
import './About.css';
import Computer from '../../images/computer.jpeg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
          <img src = { Computer } alt='computer' className='about-img' />
        </div>
      </div>
      <div className='about-right'>
        <h1 className='about-title'>About Me</h1>
        <h2 className='about-title sub'>General Overview</h2>
        <p className='about-sub'>
          Hello, everyone! my name is Jenny. I have over 5 years’ experience in the IT industry, mainly focused on front-end development. My tech stack includes HTML, CSS, JavaScript, React, MongoDB, Node.js, TypeScript, Java, and C / C++.  
          <br /> 
          <br />      
          I love coding, travelling, reading, watching movies, cooking and hiking. Keep learning and updating myself helps me not to fall behind and enjoy the life. 
          <br />
          <br />  
          "Genius is only a piece of quality of a material is distinct fields, learning is fertilizer and cultivation." I love to learn new things, especially the fast changed and new knowledge and tools in computer science.
        </p>

        <h2 className='about-title sub'>Statistics</h2>
        <br></br>
        <p>Female, always be optimistic and enthusiastic </p>
        <p>Favorite fonts: Roboto </p>
        <p>Loves to learn new things</p>

        <div className='about-btn'>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default About;