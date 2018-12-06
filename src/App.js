import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import About from './components/about';
import Skills from './components/skills';
import Certificates from './components/certificates.js';
import Featured from './components/featured';
import Portfolio from './components/portfolio.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './App.css';

library.add(faLinkedin, faGithub)

class App extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    // fetch project json file
    // fetch("http://localhost:3000/data/projects.json")
    fetch("https://ssaleem.github.io/data/projects.json")
    .then(blob => blob.json())
    .then((response) =>
      this.setState({projects: response})
    );
  }

  render() {
    return (
      <div className="App">
      <div className="landing-page">
        <header className="app-header">
            <h1>SARA SALEEM</h1>
            <nav>
              <NavLink className="nav-link" activeClassName="active-navlink" exact to='/'>Home</NavLink>
              <NavLink className="nav-link" activeClassName="active-navlink" to='/portfolio'>Portfolio</NavLink>
            </nav>
        </header>

        <Route exact path="/" render={() => (
            <About/>

        )}/>
        <Route path="/portfolio" render={() => (
            <Featured/>
          )}/>

        </div>
        <Route exact path="/" render={() => (
            <Skills/>
        )}/>
        <Route exact path="/" render={() => (
            <Certificates/>
        )}/>
        <Route path="/portfolio" render={() => (
            <Portfolio projects={this.state.projects}/>
          )}/>
        <footer>
          <a href="https://github.com/ssaleem" target="_blank"><FontAwesomeIcon className="social" icon={["fab", "github"]}/></a>
          <a href="https://www.linkedin.com/in/saraasaleem/" target="_blank"><FontAwesomeIcon className="social" icon={["fab", "linkedin"]}/></a>
        </footer>
      </div>
    );
  }
}

export default App;
