import React, { Component } from 'react';

export default class Certificate extends Component {
	render() {
		return (
            <div className="a_certificate">
			  <picture>
				<source type="image/webp" srcSet={this.props.webp}/>
				<img src={this.props.src} alt={this.props.alt} />
			  </picture>

			  <a href={this.props.href} target="_blank">
				<h2>{this.props.name}</h2>
			  </a>
			  
            </div>
		);
	}
};
				  
