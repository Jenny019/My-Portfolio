import React from 'react';
import Intro from '../intro/Intro';
import About from '../about/About';
import ProjectList from '../projectList/ProjectList';
import Contact from '../contact/Contact';

export default function Home() {
  const contactRef = React.useRef(null);
  const scrollToBottom = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  };

  const onClickEvent = (e) => {
    if (contactRef.current) {
      scrollToBottom();
    }
  }

  return (
    <>
      <Intro />
      <About onClickEvent={onClickEvent}/>
      <ProjectList />
      <Contact refObj={contactRef} />
    </>
  )
}