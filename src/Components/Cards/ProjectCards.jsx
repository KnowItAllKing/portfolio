import React, { Component } from 'react';

import { Card } from '../Misc/DarkishCard';

export class ProjectCards extends Component {
	render() {
		return (
			<>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-4'>
							<Card
								title='Portfolio'
								subtitle='This website - originally created to combine both learning React and to build my first portfolio.'
								link='https://github.com/KnowItAllKing/portfolio'
							/>
						</div>
						<div className='col-sm-4'>
							<Card
								title='Eru'
								subtitle='A Discord bot built with Discord.js which best represents the extent of my ability as a Javascript/Typescript developer.'
								link='https://github.com/akatsukixyz/eru'
							/>
						</div>
						<div className='col-sm-4'>
							<Card
								title='Climate'
								subtitle="A simple web app built at HackTrin 2019 with a friend. Predicts temperatures in states' districts."
								link='https://github.com/KnowItAllKing/climate'
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}
