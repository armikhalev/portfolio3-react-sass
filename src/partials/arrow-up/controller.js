import React, {Component } from 'react';
import arrowUp from "./arrow_up.png";

export default class ArrowUp extends Component {
	constructor(props) {
		super(props);
		this.state = {opacity: 0};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
        this.handleScroll(); // initialize state

        // Add all listeners which can start scroll
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // Remove all listeners which was registered
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.pageYOffset > 80) {
            if (!this.state.opacity) {
                this.setState({opacity: 1});
            }
        } else {
            if (this.state.opacity) {
                this.setState({opacity: 0})
            }
        }

    }
	
	render() {
		return (
			<div className="arrow-up" style={this.state}>
			  <a href="#home">
				<img src={arrowUp} alt="arrow up"/>
			  </a>
			</div>
		);
	}
};
