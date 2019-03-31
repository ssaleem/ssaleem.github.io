import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


class Portfolio extends Component {
	constructor(props){
		super(props);
		this.state = {
			selection: 0
		}
		this.allSkills = ["HTML/CSS", "React.JS", "JavaScript", "SASS", "Jasmine Unit Testing", "Bootstrap", "Gulp",
		"Grunt", "AJAX", "Responsive Layout", "Offline-first Application", "MVC", "Single Page Application",
		"Chrome Extension", "Browser-based Game"];

	}


	handleSelect = (index) => {
		this.setState({selection: index});
	}
	render() {
		return(
			<div className="portfolio">
			<main>
			<h1>FRONT END WORK</h1>
			<FontAwesomeIcon icon={faLaptopCode} className="section-logo"/>
			<div className="filterSkills">
			{this.allSkills.map((skill, index) =>
				<button className={`filterButton ${this.state.selection === index && 'selected'}`} key={index} onClick={() => this.handleSelect(index) }>{skill}</button>)}
			</div>
			{this.state.selection === 0 ? <p className="selected-skill">Showing <span>all</span> projects. Click a skill or technology to filter</p> :
			<p className="selected-skill">Showing projects filtered by <span>{this.allSkills[this.state.selection]}</span>.</p>}
			<div className="container">
			{this.props.projects.map((project) => ( project.tags.includes(this.allSkills[this.state.selection]) && (
				<div className="flex-project" key={project.title}>
				<a href={project.demoUrl} rel="noopener noreferrer" target="_blank">
				<picture>
				<source media="(min-width: 650px)" srcSet={project.medImage}/>
				<img className="proj-img" src={project.smallImage} alt={`${project.title} Screenshot`}/>
				</picture>
				</a>
				<h2 className="proj-title">{project.title}</h2>
				<p className="proj-links"><a href={project.demoUrl} rel="noopener noreferrer" target="_blank">DEMO</a> | <a href={project.codeUrl} rel="noopener noreferrer" target="_blank">CODE</a></p>
				<p>{project.description}</p>
				</div>
				)
			)
			)}
			</div>
			</main>
			</div>
			)
	}

}

export default Portfolio
