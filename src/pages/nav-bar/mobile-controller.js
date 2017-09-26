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

export const TOP_HIDE_NUM = "-252px"; // height of navbar to hide it on click

/* Waits navbar to go beyond visible top side, 
 * then turns display to none to prevent overlap with other elements 
 */
export function hideNavbar_setTimeout(that) {
	window.setTimeout(function () {	
		that.setState({
			css: {
				top: TOP_HIDE_NUM,
				display: "none"
			}
		});
	}, 200);
}

/* Hides navbar by changing its top positon, 
 * still needs display:none to prevent overlap with other elements,
 * after this func use hideNavbar_setTimeout.
 */
export function hideNavbar(that) {
	that.setState({
		css: {
			top: TOP_HIDE_NUM
		}
	});
}

export default class MobileNavbar extends Component {

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
