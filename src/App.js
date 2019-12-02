import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Parallax } from 'react-parallax';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
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
      <Parallax bgImageAlt='Parallax'>
        <Introduction />
      </Parallax>
      <Parallax
        bgImage={require('./assets/images/DSC100125020.jpg')}
        bgImageAlt='Parallax'
        strength={500}
      >
        <Projects />
      </Parallax>
      <Parallax bgImageAlt='Parallax'>
        <SocialMedia />
      </Parallax>
    </>
  );
};

export default App;
