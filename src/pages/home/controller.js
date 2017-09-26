import React, {Component } from 'react';
import {isMobile} from '../../util';

import arrowDown from "./arrow_down.png";
import arrowDownWebP from "./webP/arrow_down.webp";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.arrowDownClicked = this.arrowDownClicked.bind(this);
	}
	
	arrowDownClicked() {
		this.props.parentClickHandler();
	}

	render() {
		if ( isMobile() ) {		
			return (
				<section id="home" className="home">
				  
				  <div className="welcome">
					<h1>ARSENY MIKHALEV</h1>
					<h2>Building beautiful websites</h2>
					<h2>on the foundation of elegant code</h2>
				  </div>

				  <a className="arrow-down" href="#about" onClick={this.arrowDownClicked}>
					<picture>
					  <source type="image/webp" srcSet={arrowDownWebP}/>
					  <img src={arrowDown} alt="arrow-down"/>
					</picture>
				  </a>

				</section>

			);
		}
		else {
			return (
				<section id="home" className="home">
				  
				  <div className="welcome">
					<h1>ARSENY MIKHALEV</h1>
					<h2>Building beautiful websites</h2>
					<h2>on the foundation of elegant code</h2>
				  </div>

				  <div className="arrow-down" href="#about" onClick={this.arrowDownClicked}>
					<picture>
					  <source type="image/webp" srcSet={arrowDownWebP}/>
					  <img src={arrowDown} alt="arrow-down"/>
					</picture>
				  </div>

				</section>

			);
		}
	}
};
