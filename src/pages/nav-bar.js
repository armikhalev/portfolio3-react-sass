import React, { Component } from 'react';
import logo from "../styles/images/logo.png";

export default class Navbar extends Component {
  render() {
      return (
		<nav className="navbar">

		  <button className="navbar-toggle" type="button">
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
		  </button>

		  <a className="navbar-brand" href="#home"><img src={logo} alt="arseny coding logo"/></a>

		  <div className="navbar-collapse" id="myNavbar">
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
