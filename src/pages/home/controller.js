import React, {Component } from 'react';
import arrowDown from "./arrow_down.png";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.arrowDownClicked = this.arrowDownClicked.bind(this);
	}
	
	arrowDownClicked() {
		this.props.parentClickHandler();
	}

	render() {
		return (
			<section id="home" className="home">
			  
			  <div className="welcome">
				<h1>ARSENY MIKHALEV</h1>
				<h2>Building beautiful websites</h2>
				<h2>on the foundation of elegant code</h2>
			  </div>

			  <div className="arrow-down" href="#about" onClick={this.arrowDownClicked}>
				<img src={arrowDown} alt="arrow-down"/>
			  </div>

			</section>

		);
	}
};
