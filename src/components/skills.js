import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

class Skills extends Component {
	render() {
		const skills = [
			{'name':  'Languages', 'list': ['JavaScript (ES6+)', 'HTML5', 'CSS3/Sass', 'C/C++', 'Java', 'SQL']},
			{'name':  'Frameworks/Libraries', 'list': ['React', 'Redux', 'Jasmine', 'Bootstrap']},
			{'name':  'Miscellaneous', 'list': ['Git/Github', 'npm', 'Gulp', 'Grunt', 'Responsive web design']}
		]
		return (
		<div>
			<h1>SKILLS</h1>
			<FontAwesomeIcon icon={faLightbulb} className="section-logo"/>

			<div className="skills-container">
			{skills.map(category => {
				return (
						<div className="skills-container-item">
							<h2>{category.name}</h2>
							<ul className="skill-list">
							{category.list.map(item => {
								return (
									<li>{item}</li>
									)
							})}
							</ul>
						</div>
					)
			})
			}
			</div>
		</div>
		)
	}
}

export default Skills