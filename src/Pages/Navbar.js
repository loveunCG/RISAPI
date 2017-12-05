import React from 'react';

const Navbar = () => (
  <nav className="navbar">
      <div className="navbar-header">
          <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <div className="logo">
              <h1>
                  <a href="/">SherlockML</a>
              </h1>
          </div>
      </div>
      <div className="navbar-collapse collapse" id="navbar">
          <nav className="clearfix">
              <ul className="navbar-left">
                  <li>
                      <a href="/features">Features</a>
                  </li>
                  <li>
                      <a data-dropdown="case-studies">Case Studies</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
              </ul>
              <ul className="navbar-right">
                  <li>
                      <a href="/home">Log In</a>
                  </li>
                  <li>
                      <a href="/signup">Sign Up</a>
                  </li>
                  <li>
                      <a className="btn grey" href="/demo">Request a Demo</a>
                  </li>
              </ul>
          </nav>
      </div>
  </nav>
);

export default Navbar
