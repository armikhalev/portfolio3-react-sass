import React, { Component } from 'react';

export default class ListItem extends Component {

    getPropsLink_onClick(link) {
		this.props.onLinkClick(link);
    }

	render() {
		return (
			<a href={this.props.link}><li onClick={ this.getPropsLink_onClick.bind(this, this.props.link) } className={this.props.active}>
			  {this.props.name}
			</li></a>
		);
	}
};
