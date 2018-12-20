import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSass, faReact, faFoursquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

// library.add(faLaptopCode)
library.add(faSass, faReact, faFoursquare, faMapMarkerAlt, faLaptopCode)

class Featured extends Component {
	render() {
		return (
			<div>
				<h1>RECENT WORK</h1>
				<FontAwesomeIcon icon={["fas","laptop-code"]} className="section-logo"/>
				<div className="featured">
					<picture>
						<source media="(min-width: 650px)" srcSet="./img/titbr-large.jpg"/>
						<img className="featured-img" src="./img/titbr-medium.jpg" alt="Map App Screenshot"/>
					</picture>
					<div className="featured-text">
						<div className="featured-head">
							<h2>TRENDING IN TAMPA BAY</h2>
							<button className="featured-link"><a href="https://ssaleem.github.io/Trending-in-Tampa-Bay/" rel="noopener noreferrer" target="_blank">DEMO</a></button>
							<button className="featured-link"><a href="https://github.com/ssaleem/Trending-in-Tampa-Bay" rel="noopener noreferrer" target="_blank">CODE</a></button>
						</div>

						<p>A single-page responsive Google Maps web application displaying top trending places at Foursquare in Tampa Bay area.</p>
						<div className="featured-skill"><FontAwesomeIcon className="skill-icon" icon={["fab", "react"]}/>  REACT.JS</div>
						<div className="featured-skill"><FontAwesomeIcon className="social" icon={["fas", "map-marker-alt"]}/>  GOOGLE MAPS API</div>
						<div className="featured-skill"><FontAwesomeIcon className="skill-icon" icon={["fab", "foursquare"]}/>  FOURSQUARE API</div>
						<div className="featured-skill"><FontAwesomeIcon className="skill-icon" icon={["fab", "sass"]}/>  SASS</div>
					</div>
				</div>
			</div>
			)

	}
}

export default Featured
