import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

class Skills extends Component {
	render() {
		return (
		<div>
		<h1>SKILLS</h1>
		<FontAwesomeIcon icon={faLightbulb} className="section-logo"/>
		<div className="skills-container">
		<div className="skills-container-item">
			<h2>Languages</h2>
			<ul className="skill-list">
				<li>JavaScript (ES6)</li>
				<li>HTML5</li>
				<li>CSS3/Sass</li>
				<li>C/C++</li>
				<li>Python</li>
				<li>MySql</li>
			</ul>
		</div>

		<div className="skills-container-item">
			<h2>Frameworks/Libraries</h2>
			<ul className="skill-list">
				<li>React</li>
				<li>Jasmine</li>
				<li>Gulp</li>
				<li>Grunt</li>
				<li>jQuery</li>
				<li>Bootstrap</li>
			</ul>
		</div>

		<div className="skills-container-item">
			<h2>Miscellaneous</h2>
			<ul className="skill-list">
				<li>Git/Github</li>
				<li>Responsive web design</li>
				<li>AJAX</li>
			</ul>
		</div>
		</div>
		</div>
		)
	}
}

export default Skills