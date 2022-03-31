import React from 'react';
import './ProjectList.css';
import Project from '../project/Project';
import projects from '../../data'

const ProjectList = () => {
  return (
    <div className='pl'>
      <div className='pl-text'>
        <h1 className='pl-header'>Projects and Portfolio</h1>
        <h3 className='pl-desc'>Sharing some of my projects and passions...</h3>
      </div>
      <div className='pl-list'>
        {projects.map((item) => (
          <Project key={item.id} img={item.img} desc={item.desc}/>
        ))}       
      </div>
      <div className='pl-load'>
      <a href='#' className='pl-btn'>More Projects</a>
  </div>  
    </div>
  )
}

export default ProjectList;