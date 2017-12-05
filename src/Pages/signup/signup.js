import React from 'react'
import './signup.css'

const SignUpHome = () => (

<div id="signup-conatiner">
<div className="container-fluid" id="signup">
	<div className="row">
		<div className="col-md-4 col-md-offset-4 text-center">
			<span>Do you already have an account? &nbsp;&nbsp;&nbsp;<span><a href="/home" className="btn btn-sm btn-primary">SIGN IN</a></span></span>
		</div>
	</div>
</div>

<div className="container">
	<div className="row padding-row">
		<div className="form col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
			<div className="row">
				<div className="col-sm-6 col-sm-offset-3">
					<a href="/">
						<img src="/img/logo.svg" alt="" width="100%" className="signup-login-logo"/>
					</a>
				</div>
			</div>

		  <form className="form-horizontal col-md-12" id="signup-form" method="post">
		    <div className="input-group">
		      <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
		      <input id="username" type="text" className="form-control" name="username" placeholder="User Name"/>
		    </div>
		    <br/>
		    <div className="input-group">
		      <span className="input-group-addon"><i className="fa fa-at" aria-hidden="true"></i></span>
		      <input id="email" type="text" className="form-control" name="email" placeholder="Email"/>
		    </div>
		    <br/>
		    <div className="input-group">
		      <span className="input-group-addon"><i className="fa fa-unlock-alt" aria-hidden="true"></i></span>
		      <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
		    </div>
		    <br/>
		    <div className="input-group">
		      <span className="input-group-addon"><i className="fa fa-lock" aria-hidden="true"></i></span>
		      <input id="confpassword" type="password" className="form-control" name="confpassword" placeholder="Confirm Password"/>
		    </div>
		    <hr/>
		    <div className="input-group">
		      <span className="input-group-addon"><i className="fa fa-key" aria-hidden="true"></i></span>
		      <input id="invcode" type="text" className="form-control" name="invcode" placeholder="Invitation code"/>
		    </div>
		    <br/>
		    <div className="form-group">
		    	<div className="text-center col-sm-12">
		    		<button className="btn btn-lg btn-primary" id="btnSignup">SIGN UP</button>
		    	</div>
		    </div>

		  </form>
		  <br/>
		  <div id="status"></div>
		</div>
	</div>
</div>

</div>

);

export default SignUpHome
