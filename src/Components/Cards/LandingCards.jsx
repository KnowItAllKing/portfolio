import React, { Component } from 'react';

import { Card } from '../Misc/DarkCard';

import '../../Styles/Cards/LandingCards.css';

export class LandingCards extends Component {
	render() {
		return (
			<>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-4'>
							<Card title='Evaluate' />
						</div>
						<div className='col-sm-4'>
							<Card title='Develop' />
						</div>
						<div className='col-sm-4'>
							<Card title='Redefine' />
						</div>
					</div>
				</div>
			</>
		);
	}
}
