import React from 'react';
import Homepage from './components/homepage';
import About from './components/about';
import Project from './components/projects';
import Skills from './components/skills';
import Resume from './components/resume';
import FormSub from './components/form';
import Footer from './components/footer';

const App = () => {

  return (
    <>
      <Homepage />
      <About />
      <Resume />
      <Skills />
      <Project />
      <FormSub />
      <Footer />
    </>
  )
};

export default App;
