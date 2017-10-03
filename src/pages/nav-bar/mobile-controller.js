import React, { Component } from 'react';
import ListItem from "./list-item";

export const ListItemsValues = [
	{id:1, link:'home', name:'Home'},
	{id:2, link:'about', name:'About'},
	{id:3, link:'myTools', name:'My tools'},
	{id:4, link:'certificates', name:'Certificates'},
	{id:5, link:'portfolio', name:'Portfolio'},
	{id:6, link:'contact', name:'Contact'}
];

export function priv_hideNavbar(that) {
	that.setState({
		toggle: "hide"
	});
}

export default class MobileNavbar extends Component {

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

		// style active link and hide navbar
		this.setState({
            active: activeLink
        });

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
