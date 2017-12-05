import React from 'react'

import Newsletter from './newsletter'
import Footer from './footer'

const Maintenance = () => (
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
              <img src="/img/homepage/case-studies/header-predictive-maintenance.jpg" alt="Predictive Maintenance&lt;span&gt;Manufacturing&lt;/span&gt;"/>
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12 col-md-offset-1">
                          <h1>
                              Predictive Maintenance<span>Manufacturing</span>
                          </h1>
                          <p>A leading European train manufacturer wanted to use machine learning to optimise their maintenance activities.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="dropdown case-studies">
              <div className="dropdownBody">
                  <section className="case-studies-container">
                      <div className="row">
                          <div>
                              <div className="col-sm-6 col-md-4">
                                  <a className="case-study" href="/case-study/predictive-staffing">
                                      <img alt="" src="/img/homepage/case-studies/header-predictive-staffing.jpg"/>
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
                              <div className="col-sm-6 col-md-4">
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
                      <p>The ability to forecast breakdowns allows train manufacturers to schedule additional maintenance, resulting not only in lower servicing costs, but also in even higher standards of safety and reliability for both train operators and their passengers.</p>
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
                      <p>The goal of the project was to build a machine learning system capable of identifying which train components are likely to break down in the near future. A dataset was used consisting of diagnostic codes and failure notifications generated by 38 trains over three years. SherlockML provided the customisation needed to solve this very specific problem.</p>
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
                          <h2>Millions of data points</h2>
                      </header>
                  </div>
                  <div className="col-md-7 col-lg-6">
                      <p>The dataset consisted of millions of lines and was too large to be handled comfortably by a laptop. SherlockML allowed the team to scale computational resources depending on the needs of the project, and to iterate quickly.</p>
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
                          <h2>Pioneering deep learning</h2>
                      </header>
                  </div>
                  <div className="col-sm-6 col-md-4">
                      <p>The interpretation of diagnostic codes was not provided. Using phylogenetic analysis, the diagnostic codes could be categorised into ‘families’ with specific meanings.</p>
                      <p>A neural-network was then developed to predict failures of train components across the fleet. This pioneered the use of deep learning for forecasting breakdowns in the rail industry.</p>
                  </div>
                  <div className="col-sm-6 col-md-3">
                      <figure>
                          <img alt="" src="/img/homepage/case-studies/plot-predictive-maintenance.jpg"/>
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
                              <h2>Improved safety and reliablility</h2>
                              <ul className="icons row">
                                  <li className="col-xs-6 col-md-5">
                                      <img alt="" src="/img/homepage/case-studies/icons/coins.svg"/>
                                      <span>Lower servicing costs</span>
                                  </li>
                                  <li className="col-xs-6 col-md-5">
                                      <img alt="" src="/img/homepage/case-studies/icons/safety.svg"/>
                                      <span>Higher safety and reliability standards</span>
                                  </li>
                              </ul>
                          </header>
                      </div>
                      <div className="col-sm-6 col-md-7 col-lg-5">
                          <h4>Meaning in data</h4>
                          <p>The model enables the interpretation of 1.8 million diagnostic codes every year, whose meaning was previously not known or understood.</p>
                          <h4>Upgraded safety and reliability</h4>
                          <p>For each train, this is equivalent to 5,000 additional data-points that can be used to upgrade the safety and reliability of the fleet. </p>
                          <h4>£1 million a year savings</h4>
                          <p>The number of doors that needed to be inspected to find a fault reduced from 10,000 to 2. Estimated savings are £1 million per year in passenger compensations alone.</p>
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
                      <div className="col-md-8 col-md-push-2">
                          <div className="col-sm-6">
                              <a className="case-study" href="/case-study/predictive-staffing">
                                  <img alt="" src="/img/homepage/case-studies/header-predictive-staffing.jpg"/>
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
                      </div>
                  </div>
              </div>
          </section>
      </div>
      <Newsletter />
      <Footer />
  </div>

);

export default Maintenance
