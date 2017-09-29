import React, { Component } from 'react';
import logo from "./logo.png";
import logoWebP from "./webP/logo.webp";
import ListItem from "./list-item";
import {ListItemsValues} from "./mobile-controller";
import {priv_hideNavbar} from "./mobile-controller";

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

export default class DesktopNavbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toggle: "hide",
			active: "home"
		};
		this.toggleNavbarCollapse = this.toggleNavbarCollapse.bind(this);
		this.handleLinkClick = this.handleLinkClick.bind(this);
		this.hideNavbar = this.hideNavbar.bind(this);
	}
	
	handleLinkClick(activeLink) {
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
		
		// Resets transform to avoid gaps in rendering
		setTimeout(() => {
				body.classList.remove('in-transition');
				body.style.cssText = "";
				window.scrollTo(0, targetOffset);
			}, 900);

		// style active link and hide navbar
		this.setState({
            active: activeLink
        });

		priv_hideNavbar(this);
    }
	
	toggleNavbarCollapse() {		
		if (this.state.toggle === "hide") {
			// First display navbar
			this.setState({
				toggle: "open" 
			});
		}
		else {
			priv_hideNavbar(this);
		}
	}
	
	// For the external use
	hideNavbar() {
		priv_hideNavbar(this);
	}
	
	render() {
		return (
			<nav className="navbar" >

			  <button className="navbar-toggle" type="button" onClick={this.toggleNavbarCollapse}>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			  </button>

			  <a className="navbar-brand" href="#home"><picture>
				  <source type="image/webp" srcSet={logoWebP}/><img src={logo} alt="arseny coding logo"/></picture></a>

			  <div className="navbar-collapse" data-toggle={this.state.toggle}>
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
