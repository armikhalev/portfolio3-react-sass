import React, {Component } from 'react';
import {isMobile} from '../../util';

import arrowUp from "./arrow_up.png";
import arrowUpWebP from "./webP/arrow_up.webp";

export default class ArrowUp extends Component {
	constructor(props) {
		super(props);
		this.state = {opacity: 0};
		this.handleScroll = this.handleScroll.bind(this);
		this.arrowUpClicked = this.arrowUpClicked.bind(this);
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
                this.setState({opacity: 0});
            }
        }
    }

	arrowUpClicked() {
		this.props.parentClickHandler();
	}
	
	render() {
		if ( isMobile() ) {
			return (
				<a href="#home" className="arrow-up" style={this.state} onClick={this.arrowUpClicked}>
				  
				  <picture>
					<source type="image/webp" srcSet={arrowUpWebP}/>
					<img src={arrowUp} alt="arrow up"/>
				  </picture>
				</a>
			);
		}
		else {
			return (
				<div className="arrow-up" style={this.state} onClick={this.arrowUpClicked}>
				  
				  <picture>
					<source type="image/webp" srcSet={arrowUpWebP}/>
					<img src={arrowUp} alt="arrow up"/>
				  </picture>
				</div>
			);
		}
	}
};
