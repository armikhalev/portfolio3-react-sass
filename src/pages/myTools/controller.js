import React, { Component } from 'react';

// png image files
import htmlCssJs from './images/htmlCssJs.png';
import angular from './images/angular.png';
import jQuery from './images/jQuery.png';
import python from './images/python.png';
import django from './images/django.png';
import bootstrap from './images/bootstrap.png';
import wordpress from './images/wordpress.png';
import mysql from './images/mysql.png';

// webp image files
import htmlCssJsWebP from './images/webP/htmlCssJs.webp';
import angularWebP from './images/webP/angular.webp';
import jQueryWebP from './images/webP/jQuery.webp';
import pythonWebP from './images/webP/python.webp';
import djangoWebP from './images/webP/django.webp';
import bootstrapWebP from './images/webP/bootstrap.webp';
import wordpressWebP from './images/webP/wordpress.webp';
import mysqlWebP from './images/webP/mysql.webp';

export default class MyTools extends Component {
	render() {
		return (

			<section className="myTools">
				<picture>
				  <source type="image/webp" srcSet={htmlCssJsWebP}/>
				  <img src={htmlCssJs} alt="sign html, css, js"/>
				</picture>

				<picture>
				  <source type="image/webp" srcSet={pythonWebP}/>
				  <img src={python} alt="sign python"/>
				</picture>

				<picture>
				  <source type="image/webp" srcSet={jQueryWebP}/>				
				  <img src={jQuery} alt="sign jquery"/>
				</picture>
				
				<picture>
				  <source type="image/webp" srcSet={angularWebP}/>
				  <img src={angular} alt="sign angularjs"/>
				</picture>
				
				<picture>
				  <source type="image/webp" srcSet={djangoWebP}/>
				  <img src={django} alt="sign django"/>
				</picture>
				
				<picture>
				  <source type="image/webp" srcSet={bootstrapWebP}/>
				  <img src={bootstrap} alt="sign bootstrap"/>
				</picture>

				<picture>
				  <source type="image/webp" srcSet={wordpressWebP}/>
				  <img src={wordpress} alt="sign wordpress"/>
				</picture>
				
				<picture>
				  <source type="image/webp" srcSet={mysqlWebP}/>
				  <img src={mysql} alt="sign mysql"/>
				</picture>
			</section>
		);
	}
};

