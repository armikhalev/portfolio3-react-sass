import React, { Component } from 'react';
import logo from "./logo.png";
import logoWebP from "./webP/logo.webp";
import ListItem from "./list-item";
import {ListItemsValues} from "./mobile-controller";
import {TOP_HIDE_NUM} from "./mobile-controller"; // height of navbar to hide it on

/* Waits navbar to go beyond visible top side, 
 * then turns display to none to prevent overlap with other elements 
 */
import {hideNavbar_setTimeout} from "./mobile-controller";

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

/* Hides navbar by changing its top positon, 
 * still needs display:none to prevent overlap with other elements,
 * after this func use hideNavbar_setTimeout.
 */
function hideNavbar(that) {
	that.setState({
		css: {
			top: TOP_HIDE_NUM
		}
	});
}

export default class DesktopNavbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			css: {
				top: TOP_HIDE_NUM,
				display: "none"
			},
			active: "home"
		};
		this.toggleNavbarCollapse = this.toggleNavbarCollapse.bind(this);
		this.handleLinkClick = this.handleLinkClick.bind(this);
		this.hideNavbar = this.hideNavbar.bind(this);
	}

	handleLinkClick(activeLink) {
		let that = this;

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
			window.setTimeout(function () {
				body.classList.remove('in-transition');
				body.style.cssText = "";
				window.scrollTo(0, targetOffset);
			}, 900);

		// style active link and hide navbar
		this.setState({
            active: activeLink
        });

		hideNavbar(this);
		hideNavbar_setTimeout(that);
    }
	
	toggleNavbarCollapse() {
		let display = this.state.css.top;
		let that = this;
		
		if (display === TOP_HIDE_NUM) {
			// First display navbar
			this.setState({
				css: {
					display: "block"
				}
			});
			
			// Then change navbar's top positon to make it visible
			window.setTimeout(function () {
				that.setState({
					css: {
						top: "0",
						display: "block"
					}
				});
			}, 1);
		}
		else {
			hideNavbar(this);
			hideNavbar_setTimeout(that);
		}
	}
	
	// For the external use
	hideNavbar() {
		let that = this;
		hideNavbar(this);
		hideNavbar_setTimeout(that);
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

			  <div className="navbar-collapse" style={ this.state.css }>
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