import React from 'react';
import Intro from '../intro/Intro';
import About from '../about/About';
import ProjectList from '../projectList/ProjectList';
import Contact, { Type } from '../contact/Contact';

export default function Home() {
  const contactRef = React.useRef(null);
  const homeRef = React.useRef(null);

  const scrollToBottom = (refObj) => {
    refObj.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  };

  const onClickEvent = (e, type) => {
    if (type === Type.CONTACT) {
      if (contactRef.current) {
        scrollToBottom(contactRef);
      }
    } else {
      if (homeRef.current) {
        scrollToBottom(homeRef);
      }
    }
  }

  return (
    <>
      <Intro refObj={homeRef}/>
      <About onClickEvent={onClickEvent}/>
      <ProjectList />
      <Contact onClickEvent={onClickEvent} refObj={contactRef} />
    </>
  )
}