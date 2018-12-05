import React, {Component} from 'react';


class About extends Component {
	render(){
		return (
		<div className="landing">
			<div className="main-img-div">
				<picture>
				<source media="(min-width: 650px)" srcSet="./img/main.jpg"/>
				<img className="main-img" src="./img/main-small.jpg" alt="main"/>
			</picture>
			</div>
			<p className="desc">
			Hi I am Sara, a Front-end Developer, Educator and a Life-long Learner. I have a Masters degree in Computer Science and a nanodegree in Front-end Web Development.
			</p>
		</div>
		)
	}
}

export default About