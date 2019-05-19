import React, { Component } from 'react';

import { LandingBody } from '../Body/LandingBody';
import { LandingCards } from '../Cards/LandingCards';

export class Landing extends Component {
	componentWillMount() {
		document.title = 'Kai | Landing';
	}
	render() {
		return (
			<>
				<LandingBody />

				<LandingCards />
			</>
		);
	}
}
