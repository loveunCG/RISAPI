import React from 'react'
import './forget.css'

const ForgetPassHome = () => (

<div className="signup-login-bg">
	<div className="container">
		<div className="AreYouLookingFor">
			<span className="AreYouLookingFor__link text-center">Remember your password?  
				&nbsp;&nbsp;<a type="submit" href="/home" className="btn btn-sm btn-primary">Sign In</a>
			</span>
		</div>
		<div className="signup-login row">
			<div className="form no-padding col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1">
				<a href="/">
					<img src="/img/logo.svg" width="175" className="img-responsive signup-login-logo" alt="SherlockML"/>
				</a>
				<div className="BrandedPanelMessage">
					Enter the email address associated with your account and we'll email you a link to reset your password.
				</div>
				<form className="BrandedPanel__form">
					<div className="form-group">
						<span className="input-group">
							<span className="input-group-addon">
								<span className="Icon Icon--medium">
									<i className="fa fa-at" aria-hidden="true"></i>
								</span>
							</span>
							<div className="Input">
								<input type="email" id="emailField" placeholder="Email" name="emailField" className="Input__input"/>
								<div id="emailvalid"></div>
							</div>
						</span>
					</div>
					<div className="text-center ">
						<button type="button" data-progress="false" className="btn btn-lg btn-primary" id="forget-pass">Reset password</button>
					</div>
					<br/>
				<div id="status"></div>

				</form>
			</div>
		</div>
	</div>
</div>
);

export default ForgetPassHome
