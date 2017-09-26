import React, { Component } from 'react';
import {isMobile} from './util';

import MobileNavbar from './pages/nav-bar/mobile-controller';
import DesktopNavbar from './pages/nav-bar/desktop-controller';
import Footer from './pages/footer/controller';
import ArrowUp from './partials/arrow-up/controller';
import Home from './pages/home/controller';
import About from './pages/about/controller';
import MyTools from './pages/myTools/controller';
import Certifications from './pages/certifications/controller';
import Portfolio from './pages/portfolio/controller';
import Contact from './pages/contact/controller';

export default class App extends Component {
	constructor(props) {
		super(props);
		
		this.onToggleNavbarCollapse = this.onToggleNavbarCollapse.bind(this);
		this.arrowUpClicked = this.arrowUpClicked.bind(this);
		this.arrowDownClicked = this.arrowDownClicked.bind(this);
	}

	onToggleNavbarCollapse() {
		this.refs.navbar.hideNavbar();
    }

	arrowUpClicked() {
		if ( isMobile() ) {
			// this.refs.navbar.handleLinkClick("#home");
		}
		else {
			this.refs.navbar.handleLinkClick("home");
		}
	}

	arrowDownClicked() {
		if ( isMobile() ) {
			// this.refs.navbar.handleLinkClick("#about");
		}
		else {
			this.refs.navbar.handleLinkClick("about");
		}
	}

	render() {
		if ( isMobile() ) {
			return (
				<main>
				  <MobileNavbar ref={"navbar"}/>
				  
				  <div className="main" onWheel={this.handleWheel} onClick={this.onToggleNavbarCollapse}>
					<Home parentClickHandler={this.arrowDownClicked}/>
					<div className="about-line" id="about"></div>
					<About/>

					<div className="tools-line" id="myTools">
			  		  <h3>BUILDING WITH THE BEST TOOLS</h3>
					</div>

					<MyTools/>
					<Certifications/>

					<div className="portfolio-line" id="portfolio">
			  		  <h3>FEATURED WORKS</h3>
					</div>

					<Portfolio/>

					<Contact/>

		  			<Footer/>

					<ArrowUp parentClickHandler={this.arrowUpClicked}/>		  

				  </div>
				</main>
			);
		}
		else {
			return (
				<main>
				  <DesktopNavbar ref={"navbar"}/>
				  
				  <div className="main" onWheel={this.handleWheel} onClick={this.onToggleNavbarCollapse}>
					<Home parentClickHandler={this.arrowDownClicked}/>
					<div className="about-line" id="about"></div>
					<About/>

					<div className="tools-line" id="myTools">
			  		  <h3>BUILDING WITH THE BEST TOOLS</h3>
					</div>

					<MyTools/>
					<Certifications/>

					<div className="portfolio-line" id="portfolio">
			  		  <h3>FEATURED WORKS</h3>
					</div>

					<Portfolio/>

					<Contact/>

		  			<Footer/>

					<ArrowUp parentClickHandler={this.arrowUpClicked}/>		  

				  </div>
				</main>
			);
		}
	}
};
