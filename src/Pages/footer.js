import React from 'react'


const Footer = () => (

  <footer id="main-footer">
      <div className="asi">
          <a href="/" target="_blank">ASI Data Science</a>
          <small>© 2017 ASI Data Science</small>
      </div>
      <ul className="list-inline">
          <li>
              <a href="/terms">Terms of Service</a>
          </li>
          <li>
              <a href="/acceptable-use">Acceptable Use Policy</a>
          </li>
      </ul>
      <ul className="list-inline">
          <li>hello@sherlockml.com</li>
          <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                  <img className="img-responsive" src="/img/homepage/social/linkedin.svg" alt="LinkedIn" aria-hidden="true"/>
              </a>
          </li>
          <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                  <img className="img-responsive" src="/img/homepage/social/facebook.svg" alt="Facebook" aria-hidden="true"/>
              </a>
          </li>
          <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                  <img className="img-responsive" src="/img/homepage/social/twitter.svg" alt="Twitter" aria-hidden="true"/>
              </a>
          </li>
          <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                  <img className="img-responsive" src="/img/homepage/social/google.svg" alt="Google+" aria-hidden="true"/>
              </a>
          </li>
      </ul>
  </footer>


);


export default Footer
