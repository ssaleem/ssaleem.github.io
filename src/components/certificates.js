import React, {Component} from 'react';

class Certificates extends Component{
	render(){
		return(
			<div>
			<h1>CERTIFICATIONS</h1>
			<div className="certificates-container">
			<div className="certificate">
			<a href="https://confirm.udacity.com/K4XCVCLN">
				<picture>
					<source media="(min-width: 650px)" srcSet="./img/ud.jpg"/>
					<img className="certificate-img" src="./img/ud.jpg" alt="Udacity Nanodegree Screenshot"/>
				</picture>
				</a>
				<h2>Udacity</h2>
				<p>Front End Web Developer Nanodegree</p>
			</div>
			<div className="certificate">
			<a href="https://www.freecodecamp.org/certification/fccdcd7f3f6-e082-442c-9920-b1baad42d633/javascript-algorithms-and-data-structures">
				<picture>
					<source media="(min-width: 650px)" srcSet="./img/fcc.png"/>
					<img className="certificate-img" src="./img/fcc.png" alt="freecodecamp certification Screenshot"/>
				</picture>
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