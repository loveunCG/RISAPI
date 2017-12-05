import React from 'react'
import './login.css'


const LoginHome = () => (
	
<div id="login-conatiner">
<div className="container-fluid" id="login">
	<div className="row">
		<div className="col-md-4 col-md-offset-4 text-center">
			<span>{"Still don't have an account?"} &nbsp;&nbsp;&nbsp;<span><a href="/signup" className="btn btn-sm btn-primary">SIGN UP</a></span></span>
		</div>	
	</div>
</div>

<div className="container">
	<div className="row">
		<div className="form no-padding col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1">
		<div className="padding-login">
			<div className="row">
				<div className="col-sm-10 col-sm-offset-1">
					<a href="/">
						<img src="/img/logo.svg" alt="" width="100%" className="signup-login-logo"/>
					</a>
				</div>
			</div>
			
		  <form className="form-horizontal" method="post">
		    <div className="input-group">
		      <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
		      <input id="username" type="text" className="form-control" name="username" placeholder="Username or email"/>
		    </div>
		    
		    <br/>
		    <div className="input-group">
		      <span className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></span>
		      <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
		    </div>
		    <br/>
		    <div className="text-center">
		    	
		    		<button className="btn btn-block btn-primary" id="btnSignin">SIGN IN</button>
		    	
		    </div>
		    
		  </form>
		  <br/>
		  <div id="status"></div>
		</div>

	<div className="row forgot-row">
		<div className="col-xs-12 text-center">
			<a className="forgot" href="/forget">Forgotten your password?</a>
		</div>
	</div>


		  
		</div>
	</div>
</div>

</div>





);

export default LoginHome




