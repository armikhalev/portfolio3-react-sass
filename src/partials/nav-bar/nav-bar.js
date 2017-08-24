import React, { Component } from 'react';
import logo from "./logo.png";
import ListItem from "./list-item";

const ListItemsValues = [
	{id:1, link:'#home', name:'Home'},
	{id:2, link:'#about', name:'About'},
	{id:3, link:'#myTools', name:'My tools'},
	{id:4, link:'#certifications', name:'Certifications'},
	{id:5, link:'#portfolio', name:'Portfolio'},
	{id:6, link:'#contact', name:'Contact'}
];

export default class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			display: "none",
			active: "#home"
		};
		this.toggleNavbarCollapse = this.toggleNavbarCollapse.bind(this);
		this.handleLinkClick = this.handleLinkClick.bind(this);
	}

	handleLinkClick(activeLink) {
		
		this.setState({
            active: activeLink
        });
    }
	
	// Set state of clicked, then change style by call to toggleDisplayStyle()
	toggleNavbarCollapse(e) {
		e.stopPropagation();
		e.preventDefault();
		let display = this.state.display;
		
		if (display === "none") {
			this.setState({display: "block"});
		}
		else {
			this.setState({display: "none"});
		}

	}
	
	render() {
      return (
		<nav className="navbar">

		  <button className="navbar-toggle" type="button" onClick={this.toggleNavbarCollapse}>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
		  </button>

		  <a className="navbar-brand" href="#home"><img src={logo} alt="arseny coding logo"/></a>

		  <div className="navbar-collapse" style={{display: this.state.display}}>
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
