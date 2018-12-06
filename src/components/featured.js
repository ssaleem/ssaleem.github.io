<<<<<<< HEAD
import React, {Component} from 'react';

class Featured extends Component {
	render() {
		return (
			<div>
				{/*<h1>RECENT WORK</h1>*/}
				<div className="featured">
					<picture>
						<source media="(min-width: 650px)" srcSet="./img/titb.jpg"/>
						<img className="featured-img" src="./img/titb-medium.jpg" alt="Map App Screenshot"/>
					</picture>
					<div className="featured-text">
						<div className="featured-head">
							<h2>TRENDING IN TAMPA BAY</h2>
							<button className="featured-link"><a href="https://ssaleem.github.io/Trending-in-Tampa-Bay/" target="_blank">DEMO</a></button>
							<button className="featured-link"><a href="https://github.com/ssaleem/Trending-in-Tampa-Bay" target="_blank">CODE</a></button>
						</div>

						<p>A single-page responsive Google Maps web application displaying top trending places at Foursquare in Tampa Bay area. The site also lists the places in a sidebar with the option to select/filter based on their type/catgeory.</p>
						<button className="featured-skill">REACT.JS</button>
						<button className="featured-skill">GOOGLE MAPS API</button>
						<button className="featured-skill">FOURSQUARE API</button>
					</div>
				</div>
			</div>
			)

	}
}

export default Featured
