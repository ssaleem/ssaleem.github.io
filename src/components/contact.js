import React, {Component} from 'react';

class Contact extends Component {

	render(){
		return(
			<div className="contact">
				<h1>Get in touch with me!</h1>
				<p>Please fill the form below or email me directly at <span>sara@sarasaleem.com</span></p>
				<form name="contact" action="https://formspree.io/sara@sarasaleem.com" method="post">
					<div className="sender-info-line">
					<label className="sender-info">Name <br/><input type="text" name="name" required/></label>
					<label className="sender-info">Email <br/><input type="email" name="email" required/></label>
					</div>
					<label className="sender-message">Message <br/><textarea type="text" name="message" required></textarea></label>
					<br/><input type="submit" name="submit" value="Submit"/>
				</form>
			</div>
			)
	}

}

export default Contact;