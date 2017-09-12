import React, { Component } from 'react';

export default class FeaturedWork extends Component {
	render() {
		return (
			<div className={this.props.className}>
              <div className="hovereffect">
                <img className="img-responsive" src={this.props.src} alt={this.props.alt} />
				<a href={this.props.href} target="_blank">
                  <div className="overlay">
                    <h2>Click me</h2>
                  </div>
                </a>
              </div>
            </div>
		);
	}
};
