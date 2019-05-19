import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from './Layout/Navbar';
import { Landing } from './Routes/Landing';
import { Projects } from './Routes/Projects';
import { About } from './Routes/About';

import '../Styles/App.css';
import { Footer } from './Layout/Footer';

export class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Navbar />
					<Route exact path='/' component={Landing} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/about' component={About} />
					<Footer />
				</>
			</Router>
		);
	}
}
