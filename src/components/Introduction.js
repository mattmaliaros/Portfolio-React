import React from 'react';

const Introduction = () => {
  return (
    <div className='container' style={{ height: '320px', display: 'flex' }}>
      <div className='section' style={{ flex: 1 }}>
        <p>
          {' '}
          Hi my name is Matt Maliaros. I am aspiring to be a full-stack
          developer using Javascript libraries such as React, Angular, Vue, etc.
        </p>

        <p>
          I have a degree in Computer Information Systems from DeVry University.
          My background is within web development, and I started a few years ago
          learning the fundamentals (HTML, CSS, JS, etc). I look forward to
          expanding my skills within a company that is as passionate as I am. My
          goals are to start a youtube channel for tutoring new programmers,
          continue working on personal projects, and hopefully to acquire a
          full-time position within web development.
        </p>
        <p>
          More recently, I have finished a Full Stack Web Developer bootcamp at
          Rutgers specializing in JavaScript technologies such as: ReactJS,
          NodeJS, Express, MongoDB, JQuery, AJAX. Bootstrap, Materialize, &
          AngularJS. Since then, I have been working on solo projects and
          fine-tuning my skills learned from the bootcamp, while also learning
          new languages such as C#, Python, Java, etc.
        </p>
        <p>
          Here we have my portfolio with projects that I have been working on.
          These projects display my abilities learned from Rutgers, DeVry and
          self-teachings, as well. I will continually refine the project over
          time to showcase my abilities.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
