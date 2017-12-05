import React from 'react'
import Footer from './footer'
import NewsLetter from './newsletter'


const Staffing = () => (

  <div className="inner-page case-study">
      <header className="fixed-nav" id="main-header">
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
          <div id="banner">
              <img src="/img/homepage/case-studies/header-predictive-staffing.jpg" alt="Predictive Staffing&lt;span&gt;Aviation&lt;/span&gt;"/>
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12 col-md-offset-1">
                          <h1>
                              Predictive Staffing<span>Aviation</span>
                          </h1>
                          <p>A large airline operating in more than 30 countries, employing over 3,000 pilots and 10,000 cabin crew.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="dropdown case-studies">
              <div className="dropdownBody">
                  <section className="case-studies-container">
                      <div className="row">
                          <div className="col-sm-6 col-md-4">
                              <a className="case-study" href="/predictive-staffing">
                                  <img src="/img/homepage/case-studies/header-predictive-staffing.jpg" alt=""/>
                                  <div className="content">
                                      <span className="title">
                                          Predictive staff scheduling<small>Aviation</small>
                                      </span>
                                      <span className="link">
                                          Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                      </span>
                                  </div>
                              </a>
                          </div>
                          <div className="col-sm-6 col-md-4">
                              <a className="case-study" href="/case-study/fraud-detection">
                                  <img src="/img/homepage/case-studies/header-fraud-detection.jpg" alt=""/>
                                  <div className="content">
                                      <span className="title">
                                          Fraud detection<small>Financial Services</small>
                                      </span>
                                      <span className="link">
                                          Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                      </span>
                                  </div>
                              </a>
                          </div>
                          <div className="col-sm-6 col-md-4">
                              <a className="case-study" href="/case-study/predictive-maintenance">
                                  <img src="/img/homepage/case-studies/header-predictive-maintenance.jpg" alt=""/>
                                  <div className="content">
                                      <span className="title">
                                          Predictive Maintenance<small>Manufacturing</small>
                                      </span>
                                      <span className="link">
                                          Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                      </span>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </section>
              </div>
              <div className="dropdownFooter">
                  <span>
                      Interested in <b>SherlockML</b>
                      ?
                  </span>
                  <a className="btn green" href="/demo">Request a Demo</a>
              </div>
          </div>
      </header>
      <div className="wrapper">
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <p>Each day, approximately 4,000 crew report for duty and operate between two and five flights. Inevitably, disruptions occur and the airline has to predict the level of disruption and allocate enough standby crew to ensure that the plane can fly. </p>
                  </div>
              </div>
          </div>
          <hr/>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-4 col-lg-offset-1">
                      <header>
                          <img className="icon" src="/img/homepage/icons/secure.svg" alt="Secure"/>
                          <h3>Secure</h3>
                      </header>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-5 col-lg-4 col-lg-offset-1">
                      <header>
                          <h2>A centralised place to manage permissions and security with full audit</h2>
                      </header>
                  </div>
                  <div className="col-md-7 col-lg-6">
                      <p>The objective was to identify the significant factors that drive standby demand and create an improved method for crew rostering. Given all the moving parts and the sensitive nature of the data, a secure platform like SherlockML with full auditing capabilities and a centralised place to manage permissions was critical.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-5 col-lg-4 col-lg-offset-1">
                      <header>
                          <img className="icon" src="/img/homepage/icons/scalable.svg" alt="Scalable"/>
                          <h3>Scalable</h3>
                      </header>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-5 col-lg-4 col-lg-offset-1">
                      <header>
                          <h2>Access to incredible on-demand computational power</h2>
                      </header>
                  </div>
                  <div className="col-md-7 col-lg-6">
                      <p>The analytics team worked with anonymised staff data and built a machine learning model that more accurately predicted the amount of spare staffing capacity they would need to roster a full cabin crew for flights. The dataset was too large to be handled by most computers and training the model was computationally intense. SherlockML allowed the team to scale computational resources depending on the needs of the project, and to iterate quickly.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-5 col-lg-4 col-lg-offset-1">
                      <header>
                          <img className="icon" src="/img/homepage/icons/powerful.svg" alt="Powerful"/>
                          <h3>Powerful</h3>
                      </header>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-5 col-lg-4 col-lg-offset-1">
                      <header>
                          <h2>Cutting edge Machine Learning</h2>
                      </header>
                  </div>
                  <div className="col-md-7 col-lg-6">
                      <p>Once the model was developed and tested, a tool was built on SherlockML using the new dyanmic model which allowed more accurate estimates of the standby staff required.</p>
                      <p>SherlockML also allowed the company to easily deploy the trained model on new data and provided the environment for effective version control.</p>
                  </div>
              </div>
          </div>
          <hr/>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <figure>
                          <img alt="" src="/img/homepage/case-studies/plot-predictive-staffing.jpg"/>
                      </figure>
                  </div>
              </div>
          </div>
          <div className="text-block impact">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-6 col-md-5 col-lg-5 col-lg-offset-1">
                          <header>
                              <h3>Impact</h3>
                              <h2>£10 million of savings per year</h2>
                              <ul className="icons row">
                                  <li className="col-xs-6 col-md-5">
                                      <img alt="" src="/img/homepage/case-studies/icons/smile.svg"/>
                                      <span>Improved customer experience</span>
                                  </li>
                                  <li className="col-xs-6 col-md-5">
                                      <img alt="" src="/img/homepage/case-studies/icons/pounds.svg"/>
                                      <span>Millions of pounds saved in staffing costs</span>
                                  </li>
                              </ul>
                          </header>
                      </div>
                      <div className="col-sm-6 col-md-7 col-lg-5">
                          <h4>Reduced standby staffing</h4>
                          <p>The dynamic model reduced standby staffing levels by 7%. Consequently, the headroom was dynamically adjusted to suit the time of year, location, and other affecting factors. No longer needing as many staff on standby has resulted in more than £10 million of savings each year.</p>
                          <h4>Understanding interventions</h4>
                          <p>The insight on the months and locations with particularly high standby requirements have given the airline the evidence to further investigate and understand which interventions might reduce the crew standby requirement even further.</p>
                          <h4>Greater accuracy</h4>
                          <p>The greater accuracy of the AI-based system meant that 93% of fraudulent transactions that would have slipped through the previous system are now detected.</p>
                      </div>
                  </div>
              </div>
          </div>
          <section className="case-studies-container" id="case-studies">
              <h2>
                  Power your analysis with <strong>SherlockML</strong>
              </h2>
              <div className="cta">
                  <a className="btn green big" href="/demo">Request a Demo</a>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-sm-6">
                          <a className="case-study" href="/case-study/fraud-detection">
                              <img alt="" src="/img/homepage/case-studies/header-fraud-detection.jpg"/>
                              <div className="content">
                                  <span className="title">
                                      Fraud detection<small>Financial Services</small>
                                  </span>
                                  <span className="link">
                                      Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                  </span>
                              </div>
                          </a>
                      </div>
                      <div className="col-sm-6">
                          <a className="case-study" href="/case-study/predictive-maintenance">
                              <img alt="" src="/img/homepage/case-studies/header-predictive-maintenance.jpg"/>
                              <div className="content">
                                  <span className="title">
                                      Predictive Maintenance<small>Manufacturing</small>
                                  </span>
                                  <span className="link">
                                      Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                  </span>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </section>
      </div>

      <NewsLetter />
      <Footer />
  </div>

);

export default Staffing
