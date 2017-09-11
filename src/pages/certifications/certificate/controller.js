import React, { Component } from 'react';

export default class Certificate extends Component {
	render() {
		return (
            <div className="a_certificate">
              <div className="hoverCert">
				<img className="img-responsive" src={this.props.src} alt={this.props.alt} />
				<a href={this.props.href} target="_blank">
				  <div className="overlayCert">
					<h2>{this.props.name}</h2>
				  </div>
				</a>
              </div>
            </div>
		);
	}
};
				  
