import React, { useState } from 'react';
import './ProjectList.css';
import Project from '../project/Project';
import projects from '../../data'

const ProjectList = () => {
  const [count, setCount] = useState(3);
  return (
    <div className='pl'>
      <div className='pl-text'>
        <h1 className='pl-header'>Projects and Portfolio</h1>
        <h3 className='pl-desc'>Sharing some of my projects and passions...</h3>
      </div>
      <div className='pl-list'>
        {projects.slice(0, count).map((item) => (
          <Project key={item.id} img={item.img} desc={item.desc}/>
        ))}       
      </div>
      <div className='pl-load'>
      <a style={{display: count < projects.length? 'block': 'none'}} onClick={e => {count < projects.length? setCount(count+3): setCount(count)}} className='pl-btn'>More Projects</a>
  </div>  
    </div>
  )
}

export default ProjectList;