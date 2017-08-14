import React, { Component } from 'react';
import logo from "./logo.png";

export default class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			display: "none"
		};
		this.toggleNavbarCollapse = this.toggleNavbarCollapse.bind(this);
	}

	// Set state of clicked, then change style by call to toggleDisplayStyle()
	toggleNavbarCollapse() {

		let display = this.state.display;
		
		if (display === "none") {
			this.setState({display: "block"});
		}
		else {
			this.setState({display: "none"});
		}

	}
	
	render() {
      return (
		<nav className="navbar">

		  <button className="navbar-toggle" type="button" onClick={this.toggleNavbarCollapse}>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
		  </button>

		  <a className="navbar-brand" href="#home"><img src={logo} alt="arseny coding logo"/></a>

		  <div className="navbar-collapse" id="myNavbar" style={{display: this.state.display}}>
			<ul className="navbar-nav">
			  <li><a href="#home">Home</a></li>
			  <li><a href="#about">About</a></li>
			  <li><a href="#myTools">My tools</a></li>
			  <li><a href="#certifications">Certifications</a></li>
			  <li><a href="#portfolio">Portfolio</a></li>
			  <li><a href="#contact">Contact</a></li>
			</ul>
		  </div>

		</nav>
    );
  }
};
