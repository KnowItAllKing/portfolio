import React, { Component } from 'react';

// import Github from '../../Assets/Github.png';
// import Blank from '../../Assets/Blank.png';

export class Footer extends Component {
	render() {
		return (
			<>
				<div className='text-center'>
					<a href='https://github.com/KnowItAllKing/'>
						<i className='fa fa-github' />
						GitHub
					</a>
				</div>
				<br />
				<div className='footer-copyright text-center'>
					© 2019 Copyright Kai
				</div>
				<br />
			</>
		);
	}
}
