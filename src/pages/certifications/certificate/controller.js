import React, { Component } from 'react';

export default class Certificate extends Component {
	render() {
		return (
            <div className="a_certificate">

				<img src={this.props.src} alt={this.props.alt} />
				
				<a href={this.props.href} target="_blank">
					<h2>{this.props.name}</h2>
				</a>
				
            </div>
		);
	}
};
				  
