import React, {Component } from 'react';
import arrowDown from "./arrow_down.png";

export default class Page0 extends Component {
	
	render() {
		return (
			<section id="page0" className="page0" data-speed="14" data-type="background">
			  
			  <div className="welcome">
				<h1>ARSENY MIKHALEV</h1>
				<h2>Building beautiful websites</h2>
				<h2>on the foundation of elegant code</h2>
			  </div>

			  <a className="arrow-down" href="#about">
				<img src={arrowDown} alt="arrow-down"/>
			  </a>

			</section>

		);
	}
};
