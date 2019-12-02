import React from 'react';

const ResumeGithub = () => {
  return (
    <div
      style={{ height: '320px' }}
      id='index-banner'
      className='parallax-container'
    >
      <div className='row center'>
        <h3 className='header center white-text text-lighten-2'>Resources</h3>
        <div className='row center'>
          <h5 className='header col s12 light white-text'>Resume & Github</h5>
        </div>
        <div className='row center'>
          <a
            href='./Matt Maliaros Resume July 2019.docx.pdf'
            id='download-button'
            className='btn-large waves-effect waves-light teal lighten-1'
          >
            Resume Page
          </a>
          <a
            href='https://github.com/mattmaliaros'
            id='download-button'
            className='btn-large waves-effect waves-light teal lighten-1'
          >
            Github Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeGithub;
