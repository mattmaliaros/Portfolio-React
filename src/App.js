import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Parallax } from 'react-parallax';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import ResumeGithub from './components/ResumeGithub';
import Future from './components/Future';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Parallax
        bgImage={require('./assets/images/Dark-Parallax.jpg')}
        bgImageAlt='Parallax'
        strength={500}
      >
        <Contact />
      </Parallax>
      <Introduction />
      <Parallax
        bgImage={require('./assets/images/DSC100125020.jpg')}
        bgImageAlt='Parallax'
        strength={500}
      >
        <Projects />
      </Parallax>
      <SocialMedia />

      <Parallax
        bgImage={require('./assets/images/darkroom-hire-552x389.jpg')}
        bgImageAlt='Parallax'
        strength={500}
      >
        <ResumeGithub />
      </Parallax>

      <Future />
      <Footer />
    </>
  );
};

export default App;
