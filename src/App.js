import React, { Component } from 'react';

import Navbar from './partials/nav-bar/controller';
import Footer from './partials/footer';
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
		this.refs.navbar.handleLinkClick("home");
	}

	arrowDownClicked() {
		this.refs.navbar.handleLinkClick("about");
	}

	render() {
		return (
			<main>
			  <Navbar ref={"navbar"}/>
			  
			  <div className="main" onWheel={this.handleWheel} onClick={this.onToggleNavbarCollapse}>
				<Home parentClickHandler={this.arrowDownClicked}/>
				<div className="green-line" id="about"></div>
				<About/>

				<div className="grey-line" id="myTools">
			  	  <h3>BUILDING WITH THE BEST TOOLS</h3>
				</div>

				<MyTools/>
				<Certifications/>

				<div className="grey-blue-line" id="portfolio">
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
};
