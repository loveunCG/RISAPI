import React from 'react'


const Newsletter = () => (

  <section id="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>
          Receive our curated publication of data science content.<br/>Subscribe below and never miss an issue.

      </p>
      <div className="container">
          <div className="row">
              <div className="col-md-6 col-md-offset-3">
                  <form method="POST" action="/" id="_form_3_" className="form activecampaign" noValidate>
                      <div className="form-group">
                          <label className="sr-only">Email address</label>
                          <div className="input-group">
                              <div>
                                  <input type="text" name="email" placeholder="hello@example.com" id="emailAddress" required/>
                              </div>
                              <div className="input-group-addon">
                                  <button id="_form_3_submit" className="btn blue" type="submit">Subscribe</button>
                              </div>
                          </div>
                      </div>
                      <div className="_form-thank-you" style={{display:'none'}}></div>
                  </form>
              </div>
          </div>
      </div>
  </section>


);


export default Newsletter
