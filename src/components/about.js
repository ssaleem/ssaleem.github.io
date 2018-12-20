import React, {Component} from 'react';


class About extends Component {
	render(){
		return (
		<div className="about">
			<div className="about-img-div">
				<picture>
				<source media="(min-width: 650px)" srcSet="./img/main.jpg"/>
				<img className="about-img" src="./img/main-small.jpg" alt="main"/>
			</picture>
			</div>
			<p>
			Hi I am Sara, a Front-end Developer, Educator and a Life-long Learner. I have a Masters degree in Computer Science and a nanodegree in Front-end Web Development.
			</p>
		</div>
		)
	}
}

export default About