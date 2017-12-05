import React from 'react'

import Newsletter from './newsletter'
import Footer from './footer'

const Fraud = () => (



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
                  <img src="/img/homepage/case-studies/header-fraud-detection.jpg" alt="Fraud Detection&lt;span&gt;Financial Services&lt;/span&gt;"/>
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-12 col-md-offset-1">
                              <h1>
                                  Fraud Detection<span>Financial Services</span>
                              </h1>
                              <p>A large internet payments company, specialising in mobile payments, processes over 8 million transactions per month.</p>
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
                          <p>
                              Although <b>less than 0.001% of transactions</b>
                              were fraudulent, with over £1bn worth of transactions per year, fraud was amongst the largest expenditures of the organisation and posed a high reputational risk. The fraud team wanted to move from a rule-based system to Machine Learning to improve their fraud detection process and capacity.
                          </p>
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
                          <p>The rule-based system involved constant manual calibration by a team who struggled to keep up with the growing volume of transactions, the huge amount of data they generate, and the evolving tactics of fraudsters. The rules being applied were becoming increasingly complex, staff costs were growing, and access control was becoming difficult to manage. Given all the moving parts and the sensitive nature of financial transaction data the company collected, a secure platform like SherlockML with full auditing capabilities and a centralised place to manage permissions was critical.</p>
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
                          <p>
                              Processing <b>8 million transactions a month</b>
                              and generating <b>2TB of data</b>
                              , the dataset was too large to be handled by most computers. Training the models was computationally intense and, given the evolving tactics of the fraudsters, had to be retrained regularly. SherlockML allowed the team to scale computational resources depending on the needs of the project, and to iterate quickly.
                          </p>
                          <p>SherlockML also allowed the company to easily deploy the trained model on new data and provided the environment for effective version control.</p>
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
                      <div className="col-sm-6 col-md-4">
                          <p>
                              SherlockML provides unlimited customisation. <b>Cutting edge techniques (t-Distributed Stochastic Neighbour Embedding)</b>
                              were used to overcome the technical challenge of training a model on a dataset in which only a tiny percentage of data points are fraudulent. A balanced random forest significantly outperformed the previous system, and unlike black-box systems, provided transparency crucial for financial compliance.
                          </p>
                      </div>
                      <div className="col-sm-6 col-md-3">
                          <figure>
                              <img alt="" src="/img/homepage/case-studies/plot-fraud-detection.jpg"/>
                              <figcaption>
                                  <b>2D Projection of the transactional data</b>
                                  . The plots illustrate how the algorithm distinguishes between frauds (the periphery of the circle) and normal transactions (towards the centre).
                              </figcaption>
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
                                  <h2>Better fraud detection</h2>
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
                              <h4>More accurate fraud detection</h4>
                              <p>The greater accuracy of the AI-based system meant that 93% of fraudulent transactions that would have slipped through the previous system are now detected.</p>
                              <h4>Improved customer experience</h4>
                              <p>Fewer legitimate transactions are blocked increasing customer satisfaction and revenues.</p>
                              <h4>Reduced operational costs</h4>
                              <p>The fraud detection team saw significant improvements in productivity, saving millions in staffing costs whilst allowing them to scale.</p>
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
                  </div>
              </section>
          </div>
          <Newsletter />
          <Footer />
      </div>

);

export default Fraud
