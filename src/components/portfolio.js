import React, {Component} from 'react';

class Portfolio extends Component {
	render() {
		return(
			<div className="container">
			{this.props.projects.map((project) => (
				<div className="flex-project" key={project.title}>
					<a href={project.demoUrl}>
						<picture>
							<source media="(min-width: 650px)" srcSet={project.medImage}/>
							<img className="proj-img" src={project.smallImage} alt={`${project.title} Screenshot`}/>
						</picture>
					</a>
					<h2 className="proj-title">{project.title}</h2>
					<p className="proj-links"><a href={project.demoUrl}>DEMO</a> | <a href={project.codeUrl}>CODE</a></p>
					<p>{project.description}</p>
				</div>
				)
				)}
		</div>
			)
	}

}

export default Portfolio