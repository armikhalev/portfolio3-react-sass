import React, { Component } from 'react';
import logo from "./logo.png";
import ListItem from "./list-item";

const ListItemsValues = [
	{id:1, link:'home', name:'Home'},
	{id:2, link:'about', name:'About'},
	{id:3, link:'myTools', name:'My tools'},
	{id:4, link:'certifications', name:'Certifications'},
	{id:5, link:'portfolio', name:'Portfolio'},
	{id:6, link:'contact', name:'Contact'}
];

const TOP_HIDE_NUM = "-252px";
var currentPosition;

function getPageScroll() {
	var yScroll;

	if (window.pageYOffset) {
		yScroll = window.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {
		yScroll = document.body.scrollTop;
	}
	return yScroll;
}

export default class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			display: TOP_HIDE_NUM,
			active: "home"
		};
		this.toggleNavbarCollapse = this.toggleNavbarCollapse.bind(this);
		this.handleLinkClick = this.handleLinkClick.bind(this);
		this.hideNavbar = this.hideNavbar.bind(this);
	}

	handleLinkClick(activeLink) {

		this.setState({
            active: activeLink,
			display: TOP_HIDE_NUM
        });
				
		// Smooth-scrollig
		currentPosition = getPageScroll();
		var targetOffset = document.getElementById(activeLink).offsetTop;
		var  body = document.body;

		body.classList.add('in-transition');
		
		if (currentPosition < targetOffset) {
			// go forward down
			body.style.WebkitTransform ="translate(0, -" + (targetOffset - currentPosition) + "px)";
			body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
			body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
		}
		else {
			// Go back up
			body.style.WebkitTransform = "translate(0, " + (currentPosition - targetOffset) + "px)";
			body.style.MozTransform = "translate(0, " + (currentPosition - targetOffset) + "px)";
			body.style.transform = "translate(0, " + (currentPosition - targetOffset) + "px)";
		}
		
		window.setTimeout(function () {
			body.classList.remove('in-transition');
			body.style.cssText = "";
			window.scrollTo(0, targetOffset);
		}, 900);

    }

	hideNavbar() {		
		this.setState({display: TOP_HIDE_NUM});
	}
	
	toggleNavbarCollapse(e) {
		let display = this.state.display;
		
		if (display === TOP_HIDE_NUM) {
			this.setState({display: "0"});
		}
		else {
			this.setState({display: TOP_HIDE_NUM});
		}
	}
	
	render() {
		return (
			<nav className="navbar" >

			  <button className="navbar-toggle" type="button" onClick={this.toggleNavbarCollapse}>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			  </button>

			  <a className="navbar-brand" href="#home"><img src={logo} alt="arseny coding logo"/></a>

			  <div className="navbar-collapse" style={{top: this.state.display}}>
				<ul className="navbar-nav">
				  {ListItemsValues.map((val) =>
									   <ListItem onLinkClick={ this.handleLinkClick } active={this.state.active === val.link ? "active" : ""}
													 key={val.id} link={val.link} name={val.name}/>
									  )}

			</ul>
				</div>

			</nav>
		);
	}
};
