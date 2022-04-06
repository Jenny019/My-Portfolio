import React from 'react';
import './About.css';
import Computer from '../../images/computer.jpeg';
// import { Link } from 'react-router-dom';
import { Type } from '../contact/Contact';
import Button from 'react-bootstrap/Button';

const About = (props) => {
  return (
    <div className='about' ref={props.refObj}>
      <div className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
          <img src = { Computer } alt='computer' className='about-img' />
        </div>
      </div>
      <div className='about-right'>
        <h1 className='about-title'>About Me</h1>
        <h2 className='about-title sub'>General Overview</h2>
        <br />
        <p className='about-sub'>
          Hello, everyone! my name is Jenny. I have over 5 years’ experience in the IT industry, mainly focused on front-end development. My tech stack includes <strong> HTML, CSS, JavaScript, React, MongoDB, Node.js, TypeScript, Java, and C / C++.</strong>  
          <br /> 
          <br />      
          <strong>I love to slove problems.</strong> Whether it's finding the most elegant way to write a line of code or figuring out which color is more satisfying in UI design. I love the challenge of <i>finding a way and discovering solutions.</i>
          <br />
          <br />  
          <i>"Genius is only a piece of quality of a material is distinct fields, learning is fertilizer and cultivation."</i> I love to learn new things, especially the fast changed knowledge and new tools in computer science.
        </p>

        <h2 className='about-title sub'>Statistics</h2>
        <br></br>
        <p>Female, always be optimistic and enthusiastic </p>
        <p>Willing to share, helpful </p>
        <p>Loves to learn new things</p>

        {/* <button className='about-btn' onClick={e=>props.onClickEvent(e, Type.CONTACT)}>
          Contact
        </button> */}
        <div className='mb-2'>
          <Button variant="primary" size="lg" onClick={e=>props.onClickEvent(e, Type.CONTACT)}>Contact</Button>
        </div>
        {/* <Button variant="primary" size="lg" onClick={e=>props.onClickEvent(e, Type.CONTACT)}>Contact</Button> */}
      </div>
    </div>
  )
}

export default About;