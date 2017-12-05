import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './Pages/LandingPage'
import Feature from './Pages/feature'
import Staffing from './Pages/staffing'
import Fraud from './Pages/fraud'
import Maintenance from './Pages/maintenance'
import RequestDemo from './Pages/requestdemo'
import Terms from './Pages/terms'
import Acceptable from './Pages/acceptable'
import LoginHome from './Pages/login/login'
import SignUpHome from './Pages/signup/signup'
import Contact from './Pages/contact'
import ForgetPassHome from './Pages/forget/forget'

const Home = () => (
  <HomePage />
)

const Features = () => (
  <Feature />
)

const CaseStudies = () => (
    <div>
      <Route path="/case-study/predictive-staffing" component={SubCaseStudies1} />
      <Route path="/case-study/fraud-detection" component={SubCaseStudies2} />
      <Route path="/case-study/predictive-maintenance" component={SubCaseStudies3} />
    </div>
)

const SubCaseStudies1 = () => (
  <Staffing />
)

const SubCaseStudies2 = () => (
  <Fraud  />
)

const SubCaseStudies3 = () => (
  <Maintenance />
)

const Login = () => (
  <LoginHome />
)

const SignUp = () => (
  <SignUpHome />
)

const ForgetPass = () => (
  <ForgetPassHome />
)

const Demo = () => (
  <RequestDemo />
)

const Term = () => (
  <Terms />
)
const AcceptableUse = () => (
  <Acceptable />
)
const ContactHome = () => (
  <Contact />
)
const Routes = () => (
  <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/case-study" component={CaseStudies} />
        <Route path="/home" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forget" component={ForgetPass} />
        <Route path="/demo" component={Demo} />
        <Route path="/terms" component={Term} />
        <Route path="/acceptable-use" component={AcceptableUse} />
        <Route path="/contact" component={ContactHome} />
    </div>
  </Router>
)


export default Routes
