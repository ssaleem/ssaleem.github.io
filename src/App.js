import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { NavLink } from 'react-router-dom';
import About from './components/about';
import Skills from './components/skills';
import Certificates from './components/certificates';
import Featured from './components/featured';
import Portfolio from './components/portfolio';
import Contact from './components/contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './App.scss';


library.add(faGithub, faReact)
ReactGA.initialize('UA-129370123-5');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="sticky">
            {/*<img src="./img/siteLogo.png" className="site-logo" alt="site logo"/>*/}
            <h1><a href="https://sarasaleem.com/">SARA SALEEM</a></h1>
            <nav>
              <NavLink className="nav-link" activeClassName="active-navlink" exact to='/'>Home</NavLink>
              <NavLink className="nav-link" activeClassName="active-navlink" to='/portfolio'>Projects</NavLink>
              <NavLink className="nav-link" activeClassName="active-navlink" to='/contact'>Contact</NavLink>
            </nav>
             <hr className="fancy-line"></hr>
        </header>

        <Route exact path="/" component={About}/>
        <Route exact path="/" component={Featured}/>

        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>

        <main>
        <Route exact path="/" component={Skills}/>
        <Route exact path="/" component={Certificates}/>
        </main>

        <footer>
          <a href="https://github.com/ssaleem" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="social" icon={["fab", "github"]}/></a>
          <a href="https://www.linkedin.com/in/saraasaleem/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="social" icon={faLinkedin}/></a>
          <a href="mailto:sara@sarasaleem.com" rel="noopener noreferrer"><FontAwesomeIcon className="social" icon={faEnvelope}/></a>
          <p>&copy; 2018 SARA SALEEM. ALL RIGHTS RESERVED</p>
          <p>Made with <FontAwesomeIcon className="react" icon={["fab", "react"]}/> React.js</p>
        </footer>
      </div>
    );
  }
}

export default App;
