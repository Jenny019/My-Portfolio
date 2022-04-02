import React from 'react';
import './Project.css';

const Project = ({img, desc}) => {
  return (
    <div className='pro'>
      <div className='pro-broswer'>
        <div className='pro-circle'></div>
        <div className='pro-circle'></div>
        <div className='pro-circle'></div>
      </div>
      <div className='pro-item'>
        <div className='pro-list'> 
          <img className='pro-img' src={img} alt="" />
        </div>

        <div className='pro-text'>
          <h4>{desc}</h4>
          <a href='#' className='pro-btn'>Read More</a>
        </div>
      </div> 
    </div>
  )
}

export default Project;