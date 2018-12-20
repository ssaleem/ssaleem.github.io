import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';


// ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, document.getElementById('root'));
ReactDOM.render(<HashRouter basename={process.env.PUBLIC_URL}><App /></HashRouter>, document.getElementById('root'));
