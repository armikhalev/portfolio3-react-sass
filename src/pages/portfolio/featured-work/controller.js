import React, { Component } from 'react';

export default class FeaturedWork extends Component {
	render() {
		return (
			<div className={ "a_featauredWork " + this.props.className }>

			  <picture>
				<source type="image/webp" srcSet={this.props.webp}/>
				<img src={this.props.src} alt={this.props.alt} />
			  </picture>

				<a href={this.props.href} target="_blank">
                    <h2>Click me</h2>
                </a>
				
            </div>
		);
	}
};
