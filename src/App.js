import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ArrowUp from "./partials/arrow-up";
import Page0 from './pages/page0';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Navbar from './pages/nav-bar';
import Footer from './pages/footer';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.handleWheel = this.handleWheel.bind(this);		
	}

    handleWheel() {
		// Position of visible area related to the top of document
		let $posTop = ReactDOM.findDOMNode(this).getBoundingClientRect();

		// Pass $posTop to ArrowUp component calling its method to display/hide it
		this.arrowUp.displayArrowUp($posTop.top);
		
	}	

	render() {
		return (
			
			<main className="main" onWheel={this.handleWheel}>

			  <Navbar/>
			  
			  <div id="home"></div>
			  <Page0/>
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

			  {/* Get ref to an instance of ArrowUp to call here its method displayArrowUp,
				* look up line 23:  		
				* this.arrowUp.displayArrowUp($arrowUp.top);
			  	*/}
			  <ArrowUp ref={(elem) => {this.arrowUp = elem;} }/>		  

			</main>			  
		);
	}
};
