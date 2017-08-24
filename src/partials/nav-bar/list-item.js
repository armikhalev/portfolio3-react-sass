import React, { Component } from 'react';

export default class ListItem extends Component {

    handleLinkClick(link) {
		this.props.onLinkClick(link);
    }

	render() {
		return (
			<li onClick={ this.handleLinkClick.bind(this, this.props.link) } className={this.props.active}>
			  <a href={this.props.link}>{this.props.name}</a>
			</li>
		);
	}
};
