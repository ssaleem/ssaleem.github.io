import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'

library.add(faCertificate)

class Certificates extends Component{
	render(){
		return(
			<div>
			<h1>CERTIFICATIONS</h1>
			<FontAwesomeIcon icon={["fas","certificate"]} className="section-logo"/>
			<div className="certificates-container">
			<div className="certificate">
				<a href="https://confirm.udacity.com/K4XCVCLN" rel="noopener noreferrer" target="_blank">
				<img className="certificate-img" src="./img/ud.jpg" alt="Udacity Nanodegree Screenshot"/>
				</a>
				<h2>Udacity</h2>
				<p>Front End Web Developer Nanodegree</p>
			</div>
			<div className="certificate">
				<a href="https://www.freecodecamp.org/certification/fccdcd7f3f6-e082-442c-9920-b1baad42d633/javascript-algorithms-and-data-structures" rel="noopener noreferrer" target="_blank">
				<img className="certificate-img" src="./img/fcc.png" alt="freecodecamp certification Screenshot"/>
				</a>
				<h2>freeCodeCamp</h2>
				<p>JavaScript Algorithms and Data Structures</p>
			</div>
			</div>
			</div>
			)
	}
}

export default Certificates
