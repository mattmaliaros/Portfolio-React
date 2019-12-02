import React from 'react';

const Projects = () => {
  return (
    <div
      style={{ height: '320px' }}
      id='index-banner'
      className='parallax-container'
    >
      <div className='section no-pad-bot'>
        <div className='container'>
          <h3 className='header center white-text text-lighten-2'>
            Web Development
          </h3>
          <div className='row center'>
            <h5 className='header col s12 light white-text'>My Projects</h5>
          </div>
          <div className='row center'>
            <a
              href='./portfolio.html'
              id='download-button'
              className='btn-large waves-effect waves-light teal lighten-1'
            >
              Projects Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
