import React, { Component } from 'react';

import '../../Styles/Card.css';

export class Card extends Component {
	render() {
		return (
			<div className='card text-white bg-dark' style={{ width: '18rem' }}>
				<div className='card-body'>
					<h5 className='card-title'>
						<i className='fa fa-github' />
						<a className='card-link' href={this.props.link}>
							{this.props.title}
						</a>
					</h5>
					<h6 className='card-subtitle mb-2 text-muted'>
						{this.props.subtitle}
					</h6>
				</div>
			</div>
		);
	}
}
