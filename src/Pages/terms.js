import React from 'react'
import Footer from './footer'
import NewsLetter from './newsletter'

const Terms = () => (

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
              <img src="/img/homepage/case-studies/header-customer-acquisition.jpg" alt="Terms of service"/>
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12 col-md-offset-1">
                          <h1>Terms of service</h1>
                          <p>Last Updated: 10th July 2017</p>
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
                          Thanks for using SherlockML. These terms of service (<strong>“Terms”</strong>
                          ) cover your use of and access to our services, client software and websites (<strong>“Services”</strong>
                          ). Your agreement is with Advanced Skills Initiative Limited (<strong>“ASI”</strong>
                          ). Our Privacy Policy explains how we collect and use your information, whilst our Acceptable Use Policy outlines your responsibilities when using our Services. By using our Services, you are agreeing to be bound by these Terms, our Privacy Policy and the Acceptable Use Policy. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity, its affiliates and all users who access our Services through your account to these Terms, in which case, the terms “you” or “your” shall refer to such entity, its affiliates and users associated with it. If you do not have such authority, or if you do not agree with these Terms, you must not accept this agreement and may not use the Services.
                      </p>
                      <p>If ASI makes material changes to these Terms, we will notify you by email and/or by posting a notice on our site before the changes are effective. Any new features that augment or enhance the current Services, shall be subject to the same Terms. Continued use of the Services after any such changes shall constitute your consent to such changes. You can review the most current version of the Terms of Service at any time on the Site.</p>
                      <p>If you have any questions about the Terms, please send your queries to hello@sherlockml.com.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>1. Your Material, Permissions and Sharing your Material</h2>
                      <p>1.1. When you use our Services, you provide us with things like your files, data, content, messages and so on ("Your Material"). Your Material is yours. These Terms do not give us any rights to Your Material except for the limited rights that enable us to offer our Services.</p>
                      <p>1.2. We need your permission to host Your Material, back it up and share it when you ask us to. Our Services also provide you with features like data quality check and report generation. These and other features may require our systems to access, store and scan Your Material. You give us permission to carry out these tasks.</p>
                      <p>1.3. Our Services let you share Your Material with other users, so please think carefully about what you share.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>2. Account Terms</h2>
                      <p>2.1 To use our Services, you must provide your legal full name, a valid email address, and any other information requested in order to complete the signup process.</p>
                      <p>2.2 Your login may only be used by one person – a single login shared by multiple people is not permitted. You may create separate logins for as many people as your plan allows. </p>
                      <p>2.3 You are responsible for maintaining the security of your account and password. ASI cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</p>
                      <p>2.4 You are responsible for all the Data and Content posted and activity that occurs under your account (even when Data and Content is posted or shared by others who have accounts under your account).</p>
                      <p>2.5 One person or legal entity may not maintain more than one free account.</p>
                      <p>2.6 You may not use the Services for any illegal or unauthorised purpose. You must not, in the use of the Services, violate any laws in your jurisdiction (including but not limited to copyright or trademark laws).</p>
                      <p>2.7 You may not use the Service if you are a direct competitor, except with ASI’s prior written consent. You may not use or access the Services to compile data in a manner that is used or usable by a competitive product or service.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>3. Payment, Refunds, Upgrading and Downgrading</h2>
                      <p>3.1 You are not required to provide a credit card number to open an account.</p>
                      <p>3.2 Once your free trial period has ended you will be required to enter a credit card to continue usage.</p>
                      <p>3.3 Any usage once you enter credit card information will immediately incur a usage charge.</p>
                      <p>3.4 SherlockML calculates your server usage in seconds and bills you for that amount of usage at the prevailing rates displayed on our web site. We track your usage in seconds and charge you for the fraction of an hour that you used. So if you only use 5 minutes, you will only be billed for 5 minutes. Please note that we will round each charge up to the nearest  pence (so the minimum charge is 1 pence).</p>
                      <p>3.5 Once a month, we will bill you for the usage charges you have accrued over the preceding month (unless other payment terms have been arranged).</p>
                      <p>3.6 All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes, levies, or duties, excluding only United Kingdom taxes.</p>
                      <p>3.7 Downgrading your Service may cause the loss of data, features, or capacity of your account. ASI does not accept any liability for such loss.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>4. Cancellation and Termination</h2>
                      <p>4.1. You are free to stop using our Services at any time and solely responsible for properly canceling your account. To cancel your account, you must contact us through Contact Us page on SherlockML.com. We will confirm the cancellation via the email you provide.</p>
                      <p>4.2. We reserve the right to suspend or terminate your access to the Services with notice to you if:</p>
                      <p>4.2.1. you are in breach of these Terms;</p>
                      <p>4.2.2. you are using the Services in a manner that would cause a real risk of harm or loss to us or other users; or</p>
                      <p>4.2.3. you do not have a paid account and have not accessed our Services for twelve (12 ) consecutive months.</p>
                      <p>4.3. We will provide you with reasonable advance notice via the email address associated with your account to remedy the activity that prompted us to contact you and give you the opportunity to export your Data from our Services. If after such notice you fail to take the steps we ask of you, we will terminate or suspend your access to the Services.</p>
                      <p>4.4. We will not provide notice before termination where:</p>
                      <p>4.4.1. you are in material breach of these Terms;</p>
                      <p>4.4.2. doing so would cause us legal liability or compromise our ability to provide the Services to our other users; or</p>
                      <p>4.4.3. we are prohibited from doing so by law.</p>
                      <p>4.5. ASI, in its sole discretion, has the right to suspend or terminate your account and refuse any and all current or future use of the Services, for any reason at any time. Such termination of the Services will result in the deactivation or deletion of your account or your access to your account, and the forfeiture and relinquishment of all Data in your account.          </p>
                      <p>4.6. ASI reserves the right to refuse service to anyone for any reason at any time.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>5. Use Terms</h2>
                      <p>5.1. You are responsible for your conduct, your Materials and you must comply with our Acceptable Use Policy. Materials in the Services may be protected by others' intellectual property rights. Please do not copy, upload, download or share Materials unless you have the right to do so.</p>
                      <p>5.2. We may review your conduct and Materials for compliance with these Terms and our Acceptable Use Policy. That said, we have no obligation to do so. We are responsible for the Materials user upload and share via the Services.</p>
                      <p>5.3. You may use our Services only as permitted by applicable law, including export control laws and regulations.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>6. Modification and Discontinuation of Services</h2>
                      <p>6.1. We may decide to modify or discontinue the Services, temporarily or permanently, in response to unforeseen circumstances beyond ASI's control or to comply with a legal requirement. If we do so, we will give you reasonable prior notice so that you can export Your Material from our systems. If we discontinue Services in this way before the end of any fixed or minimum term you have paid us for, we will refund the portion of the fees you have pre-paid but have not received Services for.</p>
                      <p>6.2. Prices of the Services, including but not limited to monthly subscription plan fees to the Services, are subject to change upon 30 days notice from us (unless you have agreed otherwise with ASI). Such notice may be provided at any time by posting the changes to the SherlockML Site (sherlockml.com) or the Services itself.</p>
                      <p>6.3. ASI shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>7. Services "AS IS”</h2>
                      <p>7.1. We strive to provide great Services, but there are certain things that we cannot guarantee. To the fullest extent permitted by law, ASI and its affiliates, suppliers and distributors make no warranties, either expressed or implied, about the Services. The Services are provided “as is”. We also disclaim any warranties of merchantability, fitness for a particular purpose and non-infringement.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>8. Limitation of Liability</h2>
                      <p>8.1. If we believe that there is a violation of these Terms or any of our other policies that can simply be remedied by your removal of certain Data or Content or taking other action, we will, in most cases, ask you to take action rather than intervene. We may directly step in and take what we determine to be appropriate action (including disabling your account) if you do not take appropriate action or we believe there is a credible risk of harm to us, the Services, other authorised users, or any third parties. </p>
                      <p>8.2. In no event do we have any liability for any direct, indirect, special, incidental, consequential, exemplar or punitive damages, or loss of use, data, business, profits, revenues or other intangible losses however caused, whether in contract, tort or under any other theory of liability, and whether or not we have been advised of the possibility of such damages. </p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>9. Copyright and Materials ownership</h2>
                      <p>9.1. We claim no intellectual property rights over the data and content you provide to the Services. Your profile and Your Materials remain yours. However, if you set your pages to be viewed publicly, you agree to allow others to view Your Materials.</p>
                      <p>9.2. ASI does not pre-screen Your Materials, but ASI have the right (but not the obligation) in their sole discretion to refuse or remove any Materials that is available via the Services.</p>
                      <p>9.3. You shall defend ASI against any claim, demand, suit or proceeding made or brought against ASI by a third party alleging that Your Materials, or your use of the Services in violation of this Agreement, infringes or misappropriates the intellectual property rights of a third party or violates applicable law, and shall indemnify ASI for any damages finally awarded against, and for reasonable attorney’s fees incurred by, ASI in connection with any such claim, demand, suit or proceeding; provided, that ASI:</p>
                      <p>9.3.1. promptly gives you written notice of the claim, demand, suit or proceeding;</p>
                      <p>9.3.2. gives you sole control of the defence and settlement of the claim, demand, suit or proceeding, provided that you may not settle any claim, demand, suit or proceeding unless the settlement unconditionally releases ASI of all liability; and</p>
                      <p>9.3.3. provides to you all reasonable assistance, at your expense.</p>
                      <p>9.4. The look and feel of the Services is copyright ©2017 SherlockML, ASI Data Science. All rights reserved. You may not duplicate, copy, or reuse any portion of the HTML/CSS, Javascript, or visual design elements or concepts without express written permission from ASI.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>10. Proprietary Rights</h2>
                      <p>10.1. SherlockML is protected by UK copyright law and other intellectual property laws and treaties. ASI owns the title, copyright, and other intellectual property rights of the Services, whether those rights happen to be registered or not, and wherever in the world those rights may exist.</p>
                      <p>10.2. All of the written correspondence and other documentation provided as part of the Services is and remains the copyright of ASI.</p>
                      <p>10.3. Under no circumstances should any part of the Services or materials be reproduced, copied, re-sold, edited, published, transmitted or uploaded or passed on for free use by you in any way without ASI’s written permission.</p>
                      <p>10.4. Except as expressly stated in the limited licence provision of these Terms, ASI does not grant any express or implied right to you under any of its trademarks, copyrights or other proprietary information.</p>
                      <p>10.5. Except as provided in Clause 10, ASI acknowledges and agrees that it obtains no right, title or interest from you under these Terms in or to any of Materials that you create, submit, post, transmit or display on, or through, the Services, including any intellectual property rights which subsist in that Material. Unless you have agreed otherwise in writing with ASI, you agree that you are responsible for protecting and enforcing those rights and that ASI has no obligation to do so on your behalf.</p>
                      <p>10.6. ASI claims no ownership or control over any Material. You retain copyright and any other rights you already hold in the Material, and you are responsible for protecting those rights, as appropriate. By submitting, posting or displaying Materials on or through the Services you give ASI a worldwide, royalty-free, and non-exclusive license to reproduce, adapt, modify, translate, publish, perform, display and distribute such Material for the sole purpose of enabling ASI to provide you with the Services consistent with your privacy settings and in keeping with our security procedures.</p>
                      <p>10.7. By adding a Team Member to your Project, you hereby grant to that user a non-exclusive, royalty-free, non-transferable license, with no right to sub-license, to use, display, perform, reproduce, modify, publish, distribute, list information regarding, edit, translate and analyse such Project(s) and Material as permitted by the relevant Services functionality or features for the sole purpose of collaborating on SherlockML.</p>
                      <p>10.8. ASI maintains the security of its service in keeping with industry best practice and takes all reasonable and generally accepted precautions against security breach. You may find a full statement of our security policies in the policy section of our web site.</p>
                      <p>10.9. You may choose to or we may invite you to submit comments or ideas about the Services, including without limitation about how to improve the Services or our products (“Ideas”). By submitting any Idea, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place ASI under any fiduciary or other obligation, and that we are free to use the Idea without any additional compensation to you, and/or to disclose the Idea on a non-confidential basis or otherwise to anyone.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>11. Waiver, Severability and Assignment</h2>
                      <p>11.1. Neither you or ASI, without the prior written consent of the other party, assign, transfer, mortgage, charge or deal in any other manner with these Terms or any of its rights and obligations under these Terms, or purport to do any of the same.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>12. Entire Agreement</h2>
                      <p>12.1. These Terms constitute the entire agreement between you and ASI with respect to the subject matter of these Terms, and supersede and replace any other prior or contemporaneous agreements, or terms and conditions applicable to the subject matter of these Terms. These Terms create no third-party beneficiary rights.</p>
                      <p>12.2. It is agreed that it shall have no remedies in respect of any representation or warranty (whether made innocently or negligently) that is not set out in these Terms or in any document(s) referred to in it. You agree that its only liability in respect of those representations and warranties that are set out in these Terms (whether made innocently or negligently) shall be for breach of contract.</p>
                      <p>12.3. No variation of these Terms shall be effective unless it is in writing and signed by you and ASI.</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>13. Governing Law and Jurisdiction</h2>
                      <p>13.1. These Terms and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.</p>
                      <p>13.2. Let's Try To Sort Things Out First. We want to address your concerns without needing a formal legal case. Before filing a claim against ASI, you agree to try to resolve the dispute informally by contacting hello@sherlockml.com. We will try to resolve the dispute informally by contacting you via email or other communication means you have specified. If a dispute is not resolved within 15 days of submission, you or ASI may bring a formal proceeding.</p>
                      <p>13.3. By using or accessing the Services, you agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms or its subject matter or formation (including non-contractual disputes or claims).</p>
                  </div>
              </div>
          </div>
          <div className="text-block container">
              <div className="row">
                  <div className="col-md-12 col-lg-10 col-lg-offset-1">
                      <h2>14. Modifications</h2>
                      <p>14.1. We may revise these Terms from time to time to better reflect:</p>
                      <p>14.1.1. changes to the law; or</p>
                      <p>14.1.2. new regulatory requirements; or</p>
                      <p>14.1.3. improvements or enhancements made to our Services.</p>
                      <p>14.2. If an update affects your use of the Services or your legal rights as a user of our Services, we will notify you prior to the update's effective date by sending an email to the email address associated with your account or via an in-product notification. These updated Terms will be effective no less than 30 days from when we notify you.</p>
                      <p>14.3. If you do not agree to the updates we make, please cancel your account before they become effective. Where applicable, we will offer you a pro rata refund based on the amounts you have pre-paid for Services and your account cancellation date. By continuing to use or access the Services after the updates come into effect, you agree to be bound by the revised Terms.</p>
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

export default Terms
