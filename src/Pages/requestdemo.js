import React from 'react'

const RequestDemo = () => (
  <div className="inner-page request-demo">
      <div className="wrapper">
          <div className="body">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 col-md-offset-1">
                      <a href="/">
                          <h1>SherlockML</h1>
                          </a>
                          <h2>Solve business problems using AI</h2>
                          <p>Request your free SherlockML demo today.</p>
                          <div className="row">
                              <div className="col-md-10">
                                  <form method="post" action="/" id="_form_1_" className="form activecampaign" noValidate data-cfields='{"3": "role"}'>
                                      <div className="form-group">
                                          <label className="sr-only">Full name*</label>
                                          <input type="text" name="fullname" placeholder="Full name*" required/>
                                      </div>
                                      <div className="form-group">
                                          <label className="sr-only">Work e-mail*</label>
                                          <input type="text" name="email" placeholder="Work e-mail*" required/>
                                      </div>
                                      <div className="form-group">
                                          <label className="sr-only">Company*</label>
                                          <input type="text" name="organization" placeholder="Company*" required/>
                                      </div>
                                      <div className="form-group">
                                          <label className="sr-only">Role</label>
                                          <input type="text" name="field[3]" value="" placeholder="Role"/>
                                      </div>
                                      <button id="_form_1_submit" className="btn blue" type="submit">Request A Demo</button>
                                      <div className="link-signup">
                                          Have an invitation code? <a href="/signup">Sign up</a>
                                      </div>
                                      <div className="_form-thank-you" style={{display:'none'}}></div>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <img alt="" src="/img/homepage/demo/macbook.png"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <footer id="main-footer">
          <div className="asi">
              <a href="/" target="_blank">ASI Data Science</a>
              <small>© 2017 ASI Data Science</small>
          </div>
          <ul className="list-inline">
              <li>hello@sherlockml.com</li>
          </ul>
      </footer>

  </div>

);

export default RequestDemo
