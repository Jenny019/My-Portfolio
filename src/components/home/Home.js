import React from 'react';
import Intro from '../intro/Intro';
import About from '../about/About';
import ProjectList from '../projectList/ProjectList';
import Contact from '../contact/Contact';

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </>
  )
}