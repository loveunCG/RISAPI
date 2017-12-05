import React from 'react'
import Footer from './footer'
import NewsLetter from './newsletter'

const Acceptable = () => (
  <div className="inner-page text-page">
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
              <img src="/img/homepage/case-studies/header-customer-acquisition.jpg" alt="Acceptable Use Policy"/>
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12 col-md-offset-1">
                          <h1>Acceptable Use Policy</h1>
                          <p>Last Updated: 1st July 2017</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="dropdown case-studies">
              <div className="dropdownBody">
                  <section className="case-studies-container">
                      <div className="row">
                          <div className="col-md-6">
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
                          <div className="col-md-6">
                          
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
                      <p>SherlockML is used by individuals, professionals and enterprise. We are proud of the trust placed in us. In exchange, we trust you to use our Services responsibly.</p>
                      <p>This Acceptable Use Policy sets out a list of acceptable and unacceptable conduct for our Services. If we believe a violation of the policy is deliberate, repeated or presents a credible risk of harm to us, other users, our customers, our Services or any third parties, we may suspend or terminate your access. This policy may change as SherlockML grows and evolves, so please check back regularly for updates and changes. </p>
                      <p>You agree not to misuse SherlockML Services or help anyone else to do so.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>Do</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <ul>
                          <li>comply with Terms of Service, including the terms of this Acceptable Use Policy;</li>
                          <li>comply with all applicable laws and governmental regulations, including, but not limited to, all intellectual property, data, privacy, and export control laws, and regulations promulgated by any government agencies, any rules of any national and other securities exchanges;</li>
                          <li>upload and disseminate only Your Material to which you own all required rights under law and under contractual and fiduciary relationships (such as proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements) and do so only consistent with applicable law;</li>
                          <li>use commercially reasonable efforts to prevent unauthorised access to or use of the Services;</li>
                          <li>keep passwords and all other login information confidential;</li>
                          <li>monitor and control all activity conducted through your account in connection with the Services; and</li>
                          <li>promptly notify us if you become aware of or reasonably suspect any illegal or unauthorised activity or a security breach involving your account(s) or team(s), including any loss, theft, or unauthorised disclosure or use of a username, password, or account; and</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>Do not</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <ul>
                          <li>probe, scan or test the vulnerability of any system or network;</li>
                          <li>breach or otherwise circumvent any security or authentication measures;</li>
                          <li>access, tamper with or use non-public areas or parts of the Services, or shared areas of the Services you have not been invited to;</li>
                          <li>interfere with or disrupt any user, host or network, for example by sending a virus, overloading, flooding, spamming or mail-bombing any part of the Services;</li>
                          <li>access, search or create accounts for the Services by any means other than our publicly supported interfaces (for example "scraping" or creating accounts in bulk);</li>
                          <li>send unsolicited communications, promotions or advertisements, or spam;</li>
                          <li>send altered, deceptive or false source-identifying information, including "spoofing" or “phishing”;</li>
                          <li>promote or advertise products or services other than your own without appropriate authorisation;</li>
                          <li>sell the Services unless specifically authorised to do so; </li>
                          <li>sublicense, resell, time share or similarly exploit the Services;</li>
                          <li>publish or share content that are unlawfully pornographic or indecent, or that contain extreme acts of violence;</li>
                          <li>advocate bigotry or hatred against any person or group of people based on their race, religion, ethnicity, sex, gender identity, sexual preference, disability or impairment;</li>
                          <li>violate the law in any way, including storing, publishing or sharing material that's fraudulent, defamatory or misleading; or</li>
                          <li>violate the privacy or infringe the rights of others;</li>
                          <li>permit any third party that is not an authorised user to access or use a username or password for the Services;</li>
                          <li>share, transfer or otherwise provide access to an account designated for you to another person;</li>
                          <li>use the Services to store or transmit any data or content that may infringe upon or misappropriate someone else's trademark, copyright, or other intellectual property, or that may be tortious or unlawful;</li>
                          <li>upload to, or transmit from, the Services any data, file, software, or link that contains or redirects to a virus, Trojan horse, worm, or other harmful component or a technology that unlawfully accesses or downloads content or information stored within the Services or on the hardware of Slack or any third party;</li>
                          <li>attempt to reverse engineer, decompile, hack, disable, interfere with, disassemble, modify, copy, translate, or disrupt the features, functionality, integrity, or performance of the Services (including any mechanism used to restrict or control the functionality of the Services), any third party use of the Services, or any third party data contained therein (except to the extent such restrictions are prohibited by applicable law);</li>
                          <li>attempt to gain unauthorised access to the Services or related systems or networks or to defeat, avoid, bypass, remove, deactivate, or otherwise circumvent any software protection or monitoring mechanisms of the Services;</li>
                          <li>access the Services in order to build a similar or competitive product or service or copy any ideas, features, functions, or graphics of the Services;</li>
                          <li>impersonate any person or entity, including, but not limited to, an employee of ours, an “Administrator”, an “Owner”, or any other authorised users, or falsely state or otherwise misrepresent your affiliation with a person, organisation or entity;</li>
                          <li>use the Services to provide material support or resources (or to conceal or disguise the nature, location, source, or ownership of material support or resources) to any organisation(s) designated by the United Kingdom of Great Britain and Northern Ireland government as a foreign terrorist organisation pursuant to laws and regulations concerning national security, defence or terrorism;</li>
                          <li>abuse referrals or promotions to get more credits than deserved;</li>
                          <li>authorise, permit, enable, induce or encourage any third party to do any of the above.</li>
                      </ul>
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
              </div>
          </section>
      </div>
      <NewsLetter />
      <Footer />

  </div>

);

export default Acceptable
