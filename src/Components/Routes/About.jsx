import React, { Component } from 'react';

import { AboutBody } from '../Body/AboutBody';

export class About extends Component {
	componentDidMount() {
		document.title = 'Kai | About';
	}
	render() {
		return (
			<>
				<AboutBody />
			</>
		);
	}
}
