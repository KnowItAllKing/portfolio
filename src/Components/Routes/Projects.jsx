import React, { Component } from 'react';

import { ProjectBody } from '../Body/ProjectBody';
import { ProjectCards } from '../Cards/ProjectCards';

export class Projects extends Component {
	componentWillMount() {
		document.title = 'Kai | Projects';
	}

	render() {
		return (
			<>
				<ProjectBody />
				<ProjectCards />
			</>
		);
	}
}
