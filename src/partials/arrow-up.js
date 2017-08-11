import React, {Component } from 'react';
import arrowUp from "../styles/images/arrow_up.png";

export default class ArrowUp extends Component {
	constructor(props) {
		super(props);
		this.state = {display: "none"};
		this.displayArrowUp = this.displayArrowUp.bind(this);
		this.hideArrowUp = this.hideArrowUp.bind(this);
	}

	displayArrowUp(posTop) {
		if (posTop === 0) {		
			this.setState({display: "none"});
		}
		else {
			this.setState({display: "block"});
		}
	}

	hideArrowUp() {
		this.setState({display: "none"});
	}

	render() {
		return (
			<div className="arrow-up" style={this.state} onClick={this.hideArrowUp}>
			  <a href="#home">
				<img src={arrowUp} alt="arrow up"/>
			  </a>
			</div>
		);
	}
};
