import React, { Component } from 'react';

import Navbar from './partials/nav-bar/controller';
import Footer from './partials/footer';
import ArrowUp from './partials/arrow-up/controller';
import Page0 from './pages/page0/controller';
import Page1 from './pages/page1/controller';
import Page2 from './pages/page2/controller';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';

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
		this.refs.navbar.handleLinkClick("#home");
	}

	arrowDownClicked() {
		this.refs.navbar.handleLinkClick("#about");
	}

	render() {
		return (
			<main>
			  <Navbar ref={"navbar"}/>
			  
			  <div className="main" onWheel={this.handleWheel} onClick={this.onToggleNavbarCollapse}>
				<div id="home"></div>
				<Page0 parentClickHandler={this.arrowDownClicked}/>
				<div className="green-line" id="about"></div>
				<Page1/>

				<div className="grey-line" id="myTools">
			  	  <h3 className="lines">BUILDING WITH THE BEST TOOLS</h3>
				</div>

				<Page2/>
				<Page3/>

				<div className="grey-blue-line" id="portfolio">
			  	  <h3 className="lines">FEATURED WORKS</h3>
				</div>

				<Page4/>

				<div id="contact"></div>

				<Page5/>

		  		<Footer/>

				<ArrowUp parentClickHandler={this.arrowUpClicked}/>		  

			  </div>
			</main>
		);
	}
};
