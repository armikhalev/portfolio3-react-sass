import React, { Component } from 'react';

// image files
import htmlCssJs from './images/htmlCssJs.png';
import angular from './images/angular.png';
import jQuery from './images/jQuery.png';
import python from './images/python.png';
import django from './images/django.png';
import bootstrap from './images/bootstrap.png';
import wordpress from './images/wordpress.png';
import mysql from './images/mysql.png';

export default class Page2 extends Component {
	render() {
		return (

			<section className="myTools">
			  <div className="upperSigns">
				<img src={htmlCssJs} alt="sign html, css, js"/>
				<img src={python} alt="sign python"/>
				<img src={jQuery} alt="sign jquery"/>
				<img src={angular} alt="sign angularjs"/>

			  </div>
			  
			  <div className="bottomSigns">
				<img src={django} alt="sign django"/>
				<img src={bootstrap} alt="sign bootstrap"/>
				<img src={wordpress} alt="sign wordpress"/>
				<img src={mysql} alt="sign mysql"/>
			  </div>
			</section>
		);
	}
};

