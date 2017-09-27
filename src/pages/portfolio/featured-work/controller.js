import React, { Component } from 'react';

export default class FeaturedWork extends Component {
	render() {
		return (
			<div className={ "a_featauredWork " + this.props.className }>

			  <picture>
 				<source media="(min-width: 900px)" type="image/png" srcSet={this.props.media900}/>
				<source media="(min-width: 900px)" type="image/webp" srcSet={this.props.mediaWebp900}/>
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
