import React from 'react';

const App = () => {
  return (
    <>
      <nav class='black' role='navigation'>
        <div class='nav-wrapper container'>
          <a id='logo-container' href='./index.html' class='brand-logo'>
            <i class='material-icons'>description</i>
          </a>
          <ul class='right hide-on-med-and-down'>
            <li>
              <a href='./index.html'>HOME</a>
            </li>
          </ul>

          <ul id='nav-mobile' class='sidenav'>
            <li>
              <a href='./index.html'>About</a>
            </li>
          </ul>
          <a
            href='./index.html'
            data-target='nav-mobile'
            class='sidenav-trigger'
          >
            <i class='material-icons'>menu</i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default App;
