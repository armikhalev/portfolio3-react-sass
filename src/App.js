import React, { Component } from 'react';
import {isMobile} from './util';
import {getPageScroll} from './util';

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

export function getTopPos(el) {
	return document.getElementById(el).offsetTop;
}

let currentPosition;
const sectionsBackgrounds = {
	about:"rgba(237,237,237,.5)",
	myTools: "rgba(174, 224, 93,.5)",
	certificates: "rgba(174, 224, 93,.5)",
	portfolio: "rgba(242,242,242,.5)",
	contact: "rgba(180, 180, 180,.5)"
};

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: "home",
			background: "none",
			arrowUpStyle: {
				opacity: 0,
				background: "none"
			},
			transitions: {
				about: false,
				myTools: false,
				portfolio: false
			}
		};
		
		this.scrollSpy = this.scrollSpy.bind(this);
		
		this.onToggleNavbarCollapse = this.onToggleNavbarCollapse.bind(this);
		this.arrowUpClicked = this.arrowUpClicked.bind(this);
		this.arrowDownClicked = this.arrowDownClicked.bind(this);
	}
	
	componentDidMount() {		
		this.scrollSpy();
		
	    window.addEventListener("scroll", this.scrollSpy);		
	}
	
	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollSpy);
	}

	scrollSpy() {
		this.styleArrowUp_onScroll();
		this.watch_activeLink();
		this.addTransition();
	}

    styleArrowUp_onScroll() {	
		// Change background
		this.setState({
			arrowUpStyle: {
				opacity: 1,
				background:	sectionsBackgrounds[this.state.active]
			}
		});

		// Change opacity
        if (window.pageYOffset > 80) {
            if (!this.state.arrowUpStyle.opacity) {
                this.setState({
					arrowUpStyle:{opacity: 1}
				});
            }
        } else {
            if (this.state.arrowUpStyle.opacity) {
				this.setState({
					arrowUpStyle:{opacity: 0}
				});
            }
        }
	
    }
	
	watch_activeLink() {
		currentPosition = getPageScroll(window, document);

		// Get positions of all the sections
		let positions = [
			["home", getTopPos("home")],
			["about", getTopPos("about")],
			["myTools", getTopPos("myTools")],
			["certificates", getTopPos("certificates")],
			["portfolio", getTopPos("portfolio")],
			["contact", getTopPos("contact")]
		];

		// Calculate current section
		const activeLink = positions.reduce((active, cur) => {
			if (cur[1] >= currentPosition) {
				active.push(cur);
			}			
			return active;
		}, []);
		
		// Set active link if exists
		if (activeLink.length > 0) {
			this.setState({
				active: activeLink[0][0]
			});
		}
	}
		
	addTransition() {
		// When scroll hits portfolio section transitions cease
		if (this.state.transitions.portfolio === false) {

			this.setState({
				transitions: {
					about: "about" === this.state.active,
					myTools: "myTools" === this.state.active,
					portfolio: "portfolio" === this.state.active
				}
			});
		}
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

					<ArrowUp parentClickHandler={this.arrowUpClicked} styleProps={this.state.arrowUpStyle}/>		  

				  </div>
				</main>
			);
		}
		else {
			return (
				<main>
				  <DesktopNavbar ref={"navbar"} currentPosition={currentPosition} activeLink={this.state.active}/>
				  
				  <div className="main" onWheel={this.handleWheel} onClick={this.onToggleNavbarCollapse}>
					<Home parentClickHandler={this.arrowDownClicked}/>
					<div className="about-line" id="about"></div>
					<About transition={this.state.transitions.about}/>

					<div className="tools-line" id="myTools">
			  		  <h3>BUILDING WITH THE BEST TOOLS</h3>
					</div>

					<MyTools transition={this.state.transitions.myTools}/>
					<Certifications/>

					<div className="portfolio-line" id="portfolio">
			  		  <h3>FEATURED WORKS</h3>
					</div>

					<Portfolio transition={this.state.transitions.portfolio}/>

					<Contact/>

		  			<Footer/>

					<ArrowUp parentClickHandler={this.arrowUpClicked} styleProps={this.state.arrowUpStyle}/>		  

				  </div>
				</main>
			);
		}
	}
};
