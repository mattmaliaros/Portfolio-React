import React from 'react';

const Navbar = () => {
  return (
    <nav className='black' role='navigation'>
      <div className='nav-wrapper container'>
        <a id='logo-container' href='./index.html' className='brand-logo'>
          <i className='material-icons'>description</i>
        </a>
        <ul className='right hide-on-med-and-down'>
          <li>
            <a href='./index.html'>HOME</a>
          </li>
        </ul>

        <ul id='nav-mobile' className='sidenav'>
          <li>
            <a href='./index.html'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
