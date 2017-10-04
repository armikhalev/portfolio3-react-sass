import React, {Component } from 'react';
import {isMobile} from '../../util';

import arrowUp from "./arrow_up.png";
import arrowUpWebP from "./webP/arrow_up.webp";

export default class ArrowUp extends Component {
	constructor(props) {
		super(props);
		this.state = {opacity: 0};
		this.arrowUpClicked = this.arrowUpClicked.bind(this);
	}

	arrowUpClicked() {
		this.props.parentClickHandler();
	}
	
	render() {
		if ( isMobile() ) {
			return (
				<a href="#home" id="arrow-up" className="arrow-up" style={this.props.styleProps} onClick={this.arrowUpClicked}>
				  
				  <picture>
					<source type="image/webp" srcSet={arrowUpWebP}/>
					<img src={arrowUp} alt="arrow up"/>
				  </picture>
				</a>
			);
		}
		else {
			return (
				<div id="arrow-up" className="arrow-up" style={this.props.styleProps} onClick={this.arrowUpClicked}>
				  
				  <picture>
					<source type="image/webp" srcSet={arrowUpWebP}/>
					<img src={arrowUp} alt="arrow up"/>
				  </picture>
				</div>
			);
		}
	}
};
