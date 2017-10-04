import React, { Component } from 'react';
import logo from "./logo.png";
import logoWebP from "./webP/logo.webp";
import ListItem from "./list-item";
import {ListItemsValues} from "./mobile-controller";
import {priv_hideNavbar} from "./mobile-controller";
import {getTopPos} from "../../App";

function transform(translate, body) {
	body.style.WebkitTransform = translate;
	body.style.MozTransform = translate;
	body.style.transform = translate;
}

export default class DesktopNavbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toggle: "hide",
			contactAndFooterSectionHeight: 0
		};
		
		this.toggleNavbarCollapse = this.toggleNavbarCollapse.bind(this);
		this.handleLinkClick = this.handleLinkClick.bind(this);
		this.hideNavbar = this.hideNavbar.bind(this);
		this.update_contactAndFooterSection = this.update_contactAndFooterSection.bind(this);
	}

	componentDidMount() {
		this.window = window;
		this.document = document;
		this.update_contactAndFooterSection();

	    window.addEventListener("resize", this.update_contactAndFooterSection);
	}
	
	componentWillUnmount() {
		window.removeEventListener("resize", this.update_contactAndFooterSection);
	}
	
	update_contactAndFooterSection() {
		const contactAndFooterSection = document.getElementById("contact").clientHeight + document.getElementById("footer").clientHeight;
		
		this.setState({
			contactAndFooterSectionHeight: contactAndFooterSection
		});
	}

	handleLinkClick(activeLink) {
		// Smooth-scrollig
		var targetOffset = getTopPos(activeLink);
		var  body = this.document.body;

		body.classList.add('in-transition');


		if ( (this.window.innerHeight > this.state.contactAndFooterSectionHeight) && (activeLink === "contact") )		 {
			// Calculate gap caused by window being bigger than contact div
			// subtracting this gap prevents translation over the edge
			let gapWindowContact = this.window.innerHeight - this.state.contactAndFooterSectionHeight;
			let forwardDiff = "translateY(-" + (targetOffset - this.props.currentPosition -  gapWindowContact) + "px)";
			transform(forwardDiff, body);
		}
		else if (this.props.currentPosition < targetOffset) {
			// Go forward down
			let forwardDiff = "translateY(-" + (targetOffset - this.props.currentPosition) + "px)";
			transform(forwardDiff, body);
		}
		else {
			// Go back up
			let backDiff = "translateY(" + (this.props.currentPosition - targetOffset) + "px)";
			transform(backDiff, body);
		}
		
		// Resets transform to avoid gaps in rendering
		setTimeout(() => {
				body.classList.remove('in-transition');
 				body.style.cssText = "";
				window.scrollTo(0, targetOffset);
			}, 900);

		priv_hideNavbar(this);
    }

	toggleNavbarCollapse() {
		if (this.state.toggle === "hide") {
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
									   <ListItem onLinkClick={ this.handleLinkClick } active={this.props.activeLink === val.link ? "active" : ""}
													 key={val.id} link={val.link} name={val.name}/>
									  )}

			</ul>
				</div>

			</nav>
		);
	}
};
