import React from 'react';
import Navbar from './Navbar';
import * as MdIconCon from 'react-icons/lib/md';
import {Form} from 'formsy-react';
const Contact = () => (<div className="inner-page features">
  <header id="main-header" className="main-headerContact">
    <Navbar/>
    <div className="container-fluid header-contact">
      <div class="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="page-heading text-center">
            <h1>Get in touch with ASI Data Science</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown case-studies" >
      <div className = "row">
      <div className = "col-md-4">
          <div className="dropdownBody">
          <div className="row">

              <section className="case-studies-container">
                      <div className = "col-md-6">
                          <h3>Business impact</h3>
                          <div className="leftliststyle col-md-12">
                              <a className="case-study" href="/case-study/predictive-staffing">
                                  <img alt="" src="/img/homepage/case-studies/header-predictive-staffing.jpg"/>
                                  <div className="content">
                                      <span className="title">
                                          Predictive staff scheduling
                                      </span>
                                      <span className="link">
                                          Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                      </span>
                                  </div>
                              </a>
                          </div>
                          <div className="leftliststyle col-md-12">
                              <a className="case-study" href="/case-study/fraud-detection">
                                  <img alt="" src="/img/homepage/case-studies/header-fraud-detection.jpg"/>
                                  <div className="content">
                                      <span className="title">
                                          Fraud detection
                                      </span>
                                      <span className="link">
                                          Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                      </span>
                                  </div>
                              </a>
                          </div>
                          <div className="leftliststyle col-md-12">
                              <a className="case-study" href="/case-study/predictive-maintenance">
                                  <img alt="" src="/img/homepage/case-studies/header-predictive-maintenance.jpg"/>
                                  <div className="content">
                                      <span className="title">
                                          Predictive Maintenance
                                      </span>
                                      <span className="link">
                                          Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                      </span>
                                  </div>
                              </a>
                          </div>
                      </div>
              </section>

              <section className="sherlock-in-action">
              <div className="col-md-6">
                  <h3>SherlockML in Action</h3>
                  <a href="/in-action/powerful-compute">
                      <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                              <g>
                                  <polygon points="6.5 0 12.1 3.3 12.1 9.8 6.5 13 0.9 9.8 0.9 3.3"></polygon>
                              </g>
                          </svg>
                      </span>
                      <span className="title">Powerful Compute</span>
                  </a>
                  <a href="/in-action/fast-configuration">
                      <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <g>
                                  <path d="M0 1.8C0 0.8 0.8 0 1.8 0L3.7 0 3.7 3.7 0 3.7 0 1.8ZM6.2 0L9.8 0 9.8 3.7 6.2 3.7 6.2 0ZM12.3 0L14.2 0C15.2 0 16 0.8 16 1.8L16 3.7 12.3 3.7 12.3 0ZM0 6.2L3.7 6.2 3.7 9.8 0 9.8 0 6.2ZM6.2 6.2L9.8 6.2 9.8 9.8 6.2 9.8 6.2 6.2ZM12.3 6.2L16 6.2 16 9.8 12.3 9.8 12.3 6.2ZM0 12.3L3.7 12.3 3.7 16 1.8 16C0.8 16 0 15.2 0 14.2L0 12.3ZM6.2 12.3L9.8 12.3 9.8 16 6.2 16 6.2 12.3ZM12.3 12.3L16 12.3 16 14.2C16 15.2 15.2 16 14.2 16L12.3 16 12.3 12.3Z"></path>
                              </g>
                          </svg>
                      </span>
                      <span className="title">Fast Configuration</span>
                  </a>
                  <a href="/in-action/secure-collaboration">
                      <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14">
                              <g>
                                  <path d="M10.9 10.5C11.4 10.7 11.7 11.1 11.8 11.7L11.8 13.5 6.9 13.5 5.9 13.5 5.9 13.5 1 13.5C0.4 13.5 0 13.1 0 12.6L0 11.7C0.1 11.1 0.4 10.7 0.8 10.5 1.2 10.3 1.7 10.1 2.1 10 2.1 10 3.4 9.6 4 9.3L4.1 9.3C4.2 9.2 4.2 9.2 4.2 9.1 4.3 9.1 4.3 9.1 4.3 9.1 4.3 9 4.3 9 4.3 8.9L4.3 8.1 4.2 8.1C4.2 8.1 4.1 8.1 4.1 8.1 4 8.1 4 8.1 3.9 8.1 3.8 8.1 3.8 8.1 3.7 8.1 3.7 8.1 3.6 8.1 3.6 8.1 3.5 8.1 3.5 8.1 3.4 8.1 3.4 8.1 3.3 8 3.3 8 3.2 8 3.2 8 3.1 8 3.1 8 3 8 3 8 2.9 8 2.9 8 2.9 8 2.8 7.9 2.8 7.9 2.7 7.9 2.7 7.9 2.7 7.9 2.6 7.9 2.6 7.9 2.6 7.9 2.5 7.8 2.5 7.8 2.5 7.8 2.4 7.8 2.4 7.8 2.4 7.8 2.3 7.8 2.3 7.8 2.3 7.7 2.2 7.7 2.2 7.7 2.2 7.7 2.2 7.7 2.1 7.7 2.1 7.7 2.1 7.6 2.1 7.6 2 7.6 2 7.6 2 7.6 2 7.6 2 7.6 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.8 7.5 1.8 7.5 1.8 7.4 1.8 7.4 1.8 7.4 1.8 7.4 1.8 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.3 1.7 7.3 1.7 7.3 1.7 7.3 1.7 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.2 1.6 7.2 1.6 7.2 2.8 7.2 2.7 4.1 2.6 0.9 4.1 0.4 4.6 0.2 4.7 0.2 4.8 0.1 4.9 0.1 5 0.1 5 0.1 5 0.1 5.1 0.1 5.1 0.1 5.2 0 5.2 0 5.3 0 5.3 0 5.3 0 5.4 0 5.4 0 5.5 0 5.5 0 5.5 0 5.6 0 5.6 0 5.6 0 5.6 0 5.6 0 5.7 0 5.8 0 5.8 0 5.9 0 6 0 6 0 6 0 6.1 0 6.1 0.1 6.2 0.1 6.2 0.1 6.2 0.1 6.2 0.1 6.3 0.1 6.4 0.1 6.5 0.2 6.5 0.2 6.5 0.2 6.5 0.2 6.6 0.2 6.6 0.2 6.7 0.3 6.7 0.3 6.7 0.3 6.7 0.3 6.7 0.3 6.8 0.3 6.8 0.4 6.8 0.4 6.8 0.4 6.8 0.4 6.9 0.4 6.9 0.4 6.9 0.5 6.9 0.5 6.9 0.5 6.9 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.6 7 0.6 7.1 0.5 7.2 0.5 7.2 0.5 7.2 0.5 7.3 0.5 7.3 0.5 7.3 0.5 7.4 0.6 7.4 0.6 7.5 0.6 7.5 0.6 7.6 0.6 7.6 0.6 7.7 0.6 7.7 0.6 7.8 0.6 7.8 0.6 7.8 0.7 7.9 0.7 7.9 0.7 8 0.7 8 0.7 8 0.7 8.1 0.8 8.1 0.8 8.2 0.8 8.2 0.8 8.2 0.9 8.3 0.9 8.3 0.9 8.3 1 8.4 1 8.4 1 8.4 1 8.5 1.1 8.5 1.1 8.5 1.1 8.5 1.2 8.6 1.2 8.6 1.3 8.6 1.3 8.7 1.3 8.7 1.4 8.7 1.4 8.7 1.5 8.7 1.5 8.8 1.6 8.8 1.6 8.8 1.6 8.8 1.7 8.9 1.7 8.9 1.8 8.9 1.8 8.9 1.9 8.9 1.9 8.9 2 9 2 9 2.1 9 2.1 9 2.2 9 2.2 9 2.3 9 2.3 9.1 2.4 9.1 2.5 9.1 2.5 9.1 2.6 9.1 2.6 9.1 2.7 9.1 2.8 9.1 2.8 9.1 2.9 9.1 2.9 9.1 3 9.1 3.1 9.1 3.1 9.2 3.2 9.2 3.3 9.2 3.3 9.2 3.4 9.2 3.4 9.2 3.5 9.2 3.6 9.2 3.7 9.2 3.7 9.2 3.8 9.2 3.8 9.2 3.9 9.2 4 9.2 4.1 9.2 4.1 9.2 4.2 9.2 4.2 9.1 4.4 9.1 4.5 9.1 4.6 8.9 6.9 10.1 7.3 10.1 7.3 10.1 7.3 10 7.4 10 7.4 10 7.4 9.9 7.4 9.9 7.5 9.9 7.5 9.8 7.5 9.8 7.5 9.8 7.6 9.7 7.6 9.7 7.6 9.7 7.6 9.6 7.6 9.6 7.7 9.6 7.7 9.6 7.7 9.5 7.7 9.5 7.7 9.4 7.7 9.4 7.8 9.4 7.8 9.3 7.8 9.3 7.8 9.3 7.8 9.2 7.8 9.2 7.8 9.2 7.8 9.1 7.9 9.1 7.9 9.1 7.9 9 7.9 9 7.9 9 7.9 8.9 7.9 8.9 7.9 8.8 7.9 8.8 7.9 8.8 8 8.7 8 8.7 8 8.7 8 8.6 8 8.6 8 8.5 8 8.5 8 8.5 8 8.5 8 8.4 8 8.3 8 8.3 8 8.3 8 8.3 8 8.2 8 8.2 8.1 8.2 8.1 8.1 8.1 8.1 8.1 8.1 8.1 8 8.1 8 8.1 8 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.8 8.1 7.8 8.1 7.8 8.1 7.8 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.5 8.1L7.5 8.1C7.5 8.1 7.5 8.1 7.5 8.1L7.5 8.1C7.5 8.1 7.5 8.1 7.5 8.1L7.5 8.9C7.5 8.9 7.5 8.9 7.5 8.9L7.5 8.9C7.5 9 7.5 9 7.5 9.1 7.5 9.1 7.5 9.1 7.5 9.1 7.6 9.2 7.6 9.2 7.7 9.3L7.7 9.3C8 9.5 8.4 9.6 8.7 9.7 9.2 9.9 9.7 10 9.7 10 10.1 10.1 10.5 10.3 10.9 10.5ZM19.5 10.7C19.8 10.9 20 11.3 20 11.7L20 12.6C20 13.1 19.6 13.5 19 13.5L13.1 13.5 13.1 13.5 13.1 11.7 13.1 11.6 13.1 11.5C13 10.6 12.4 9.7 11.5 9.3 11.3 9.2 11 9.1 10.8 9 10.6 8.9 10.5 8.6 10.7 8.5 10.8 8.4 10.9 8.3 11 8.2 11 8.2 11.1 8.2 11.1 8.2L11.3 8 11.3 6.9C11.1 6.6 11 6.4 11 6.2L10.6 6.1C10.5 6 10.4 5.7 10.4 5 10.4 4.9 10.4 4.9 10.4 4.8 10.4 4.5 10.4 4.2 10.5 3.8 10.5 3.8 10.5 3.8 10.6 3.8 10.5 3.3 10.1 1.4 11.5 0.6 11.4 0.4 11.3 0.2 11.3 0 11.3 0 12.8 0.2 13.6 0 14.4-0.1 15.2 0.5 15.3 1 15.3 1 16.9 1 16.3 3.8 16.5 3.8 16.8 4 16.5 4.9 16.3 5.6 16.1 5.8 16 5.8 15.9 6.2 15.8 6.5 15.6 6.9L15.6 8C15.6 8 18.5 9.8 19.5 10.7Z"></path>
                              </g>
                          </svg>
                      </span>
                      <span className="title">Secure Collaboration</span>
                  </a>
                  <a href="/in-action/easy-deployment">
                      <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
                              <g>
                                  <path d="M16.9 7.7C16.5 7.4 16.2 7.1 16.2 6.9 15.9 6.2 15.8 5.6 15.4 4.6L15.4 3.1C15.8 2.5 15.7 2.3 15.4 2.3 15.4 2 15.2 1.9 14.6 1.5 14.5 1.8 14.2 1.7 13.8 1.5 13.9 1.5 13.8 1.2 13.8 0.8 13.8 0.6 13.9 0.4 13.8 0 14.3 0.1 14.5 0 14.6 0 15.3 0 15.7 0.1 16.2 0 16.4 0.3 16.7 0.5 16.9 0.8 17.2 1 17.4 1.3 17.7 1.5 17.6 2.1 17.7 2.8 17.7 3.8L17.7 4.6C17.7 5.9 18.1 6.5 19.2 6.9 19.1 6.7 19.2 6.7 19.2 6.9 19.5 6.8 19.7 6.9 20 6.9 19.9 7.2 20 7.4 20 7.7 20 8 19.9 8.2 20 8.5 19.7 8.5 19.5 8.6 19.2 8.5 19.2 8.7 19.1 8.7 19.2 8.5 18.1 8.9 17.7 9.5 17.7 10.8L17.7 11.5C17.7 12.5 17.7 13.1 17.7 13.8 17.5 13.9 17.3 14.2 16.9 14.6 16.9 14.7 16.6 14.9 16.2 15.4 15.8 15.3 15.3 15.4 14.6 15.4 14.5 15.4 14.3 15.3 13.8 15.4 13.9 15 13.8 14.7 13.8 14.6 13.8 14.1 13.9 13.9 13.8 13.8 14.2 13.6 14.5 13.5 14.6 13.8 15.2 13.4 15.5 13.3 15.4 13.1 15.7 13 15.8 12.8 15.4 12.3L15.4 10.8C15.8 9.8 15.8 9.1 16.2 8.5 16.2 8.3 16.5 8 16.9 7.7ZM3.1 7.7C3.5 8 3.8 8.3 3.8 8.5 4.2 9.1 4.2 9.8 4.6 10.8L4.6 12.3C4.2 12.6 4.3 13 4.6 13.1 4.5 13.3 4.6 13.4 4.6 13.1 5 13.5 5.1 13.5 5.4 13.8 5.8 13.6 6.2 13.9 6.2 14.6 6.2 14.7 6.1 15 6.2 15.4 5.7 15.3 5.4 15.4 5.4 15.4 4.7 15.4 4.3 15.3 3.8 15.4 3.6 15 3.3 14.9 3.1 14.6 2.8 14.4 2.6 14 2.3 13.8 2.4 13.2 2.3 12.5 2.3 11.5L2.3 10.8C2.3 9.5 1.8 8.8 0.8 8.5 0.8 8.7 0.8 8.7 0.8 8.5 0.5 8.6 0.3 8.5 0 8.5 0.1 8.2 0 8 0 7.7 0 7.4 0.1 7.2 0 6.9 0.3 6.9 0.5 6.8 0.8 6.9 0.8 6.7 1 6.7 1.5 6.9 1.9 6.5 2.3 5.9 2.3 4.6L2.3 3.8C2.3 2.9 2.3 2.3 2.3 1.5 2.5 1.6 2.7 1.2 3.1 0.8 3.1 0.7 3.4 0.4 3.8 0 4.2 0.1 4.7 0 5.4 0 5.5 0 5.7 0.1 6.2 0 6.1 0.4 6.2 0.6 6.2 0.8 6.2 1.4 5.8 1.8 5.4 1.5 5.1 1.9 5 1.9 4.6 1.5 4.7 2 4.5 2.1 4.6 2.3 4.3 2.4 4.2 2.8 4.6 3.1L4.6 4.6C4.2 5.6 4.1 6.2 3.8 6.9 3.8 7.1 3.5 7.4 3.1 7.7ZM13.1 8.5C12.7 8.5 12.3 8.1 12.3 7.7 12.3 7.3 12.7 6.9 13.1 6.9 13.5 6.9 13.8 7.3 13.8 7.7 13.8 8.1 13.5 8.5 13.1 8.5ZM10 8.5C9.6 8.5 9.2 8.1 9.2 7.7 9.2 7.3 9.6 6.9 10 6.9 10.4 6.9 10.8 7.3 10.8 7.7 10.8 8.1 10.4 8.5 10 8.5ZM6.9 8.5C6.5 8.5 6.2 8.1 6.2 7.7 6.2 7.3 6.5 6.9 6.9 6.9 7.3 6.9 7.7 7.3 7.7 7.7 7.7 8.1 7.3 8.5 6.9 8.5Z"></path>
                              </g>
                          </svg>
                      </span>
                      <span className="title">Easy Deployment</span>
                  </a>
                  </div>
              </section>
              </div>
          </div>
          <div className="dropdownFooter">
              <span>
                  Interested in <b>SherlockML</b>
                  ?
              </span>
              <a className="btn green" href="/demo">Start your Free Trial</a>
          </div>
          </div>
          </div>
      </div>
  </header>
  <div className="wrapper">
    <div className="body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <center>
              <h2 >SEND YOUR MESSAGE
              </h2>
            </center>
            <div className="row">
              <div className="col-md-12">
                <form method="post" action="/" id="_form_1_" className="form activecampaign" noValidate="noValidate" data-cfields='{"3": "role"}'>
                  <div className="form-group col-md-12">
                    <select name="to" id="to" placeholder="To" required="required">
                      <option value="info" selected="">General enquiries</option>
                      <option value="fellowship">Fellowship</option>
                      <option value="consulting">Consulting</option>
                      <option value="training">Training</option>
                      <option value="press">Press</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="sr-only">Full name*</label>
                    <input type="text" name="fullname" placeholder="Full name*" required="required"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="sr-only">Last Name*</label>
                    <input type="text" name="organization" placeholder="last Name*" required="required"/>
                  </div>
                  <div className="form-group col-md-12">
                    <label className="sr-only">e-mail*</label>
                    <input type="text" name="email" placeholder="e-mail*" required="required"/>
                  </div>

                  <div className="form-group col-md-12">
                    <textarea name="field" placeholder="Message" rows="10"></textarea>
                  </div>
                  <center>
                    <button id="_form_1_submit" className="btn blue" type="submit">Send</button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="newsletter"></section>
  <section className="feature text-block" id="security">
    <div className="container-fulid">
      <div className="row">
        <div className="col-md-12 col-lg-10 col-lg-offset-1"></div>
      </div>
      <div className="row highlight-icons">
        <div className="col-md-3 col-sm-4 col-xs-6 col-md-offset-2">
          <div className="col-md-12">
            <span className="icon">
              <img alt="" src="/img/homepage/icons/envelope.svg"/>
            </span>
            <span className="text">CONTACT</span>
          </div>
          <div className="col-md-6 col-sm-6">
            <b>Info</b>
            <p>
              +44 207 193 0738
            </p>
          </div>
          <div className="col-md-6 col-sm-6">
            <b>Press</b>
            <p>
              +44 800 368 7473</p>
          </div>

        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <span className="icon">
            <img alt="" src="/img/homepage/icons/scalable.svg"/>
          </span>
          <span className="text">ADDRESS</span>
          <p>54 Welbeck Street London, W1G 9XS</p>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="col-md-12">
            <span className="icon">
              <img alt="" src="/img/homepage/icons/share.svg"/>
            </span>
            <span className="text">FOLLOW US</span>
          </div>
          <div className="col-md-12">

            <span>
              <a href="https://www.linkedin.com/company/5133902" target="_blank" rel="noopener noreferrer">
                <img src="/img/homepage/icons/linkedin.svg" alt="LinkedIn" aria-hidden="true" class="img-responsive"/>
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/asidatascience/" target="_blank" rel="noopener noreferrer">
                <img src="/img/homepage/icons/facebook.svg" alt="Facebook" aria-hidden="true" class="img-responsive"/>
              </a>
            </span>
            <span>
              <a href="https://twitter.com/ASIDataScience" target="_blank" rel="noopener noreferrer">
                <img src="/img/homepage/icons/twitter.svg" alt="Twitter" aria-hidden="true" class="img-responsive"/>
              </a>
            </span>
            <span>
              <a href="https://plus.google.com/117363913521420229427" target="_blank" rel="noopener noreferrer">
                <img src="/img/homepage/icons/google.svg" alt="Google+" aria-hidden="true" class="img-responsive"/>
              </a>
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>

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
        <a href="https://www.linkedin.com/company/#/" target="_blank" rel="noopener noreferrer">
          <img className="img-responsive" src="/img/homepage/social/linkedin.svg" alt="LinkedIn" aria-hidden="true"/>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/#/" target="_blank" rel="noopener noreferrer">
          <img className="img-responsive" src="/img/homepage/social/facebook.svg" alt="Facebook" aria-hidden="true"/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/#/" target="_blank" rel="noopener noreferrer">
          <img className="img-responsive" src="/img/homepage/social/twitter.svg" alt="Twitter" aria-hidden="true"/>
        </a>
      </li>
      <li>
        <a href="https://plus.google.com/#/" target="_blank" rel="noopener noreferrer">
          <img className="img-responsive" src="/img/homepage/social/google.svg" alt="Google+" aria-hidden="true"/>
        </a>
      </li>
    </ul>
  </footer>
</div>);

export default Contact
