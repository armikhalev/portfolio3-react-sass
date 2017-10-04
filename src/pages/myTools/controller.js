import React, { Component } from 'react';

// png image files
import htmlCssJs from './images/htmlCssJs.png';
import reactjs from './images/react-logo.png';
import jQuery from './images/jQuery.png';
import python from './images/python.png';
import django from './images/django.png';
import bootstrap from './images/bootstrap.png';
import wordpress from './images/wordpress.png';
import emberjs from './images/emberjs-logo.png';

// webp image files
import htmlCssJsWebP from './images/webP/htmlCssJs.webp';
import reactjsWebP from './images/webP/react-logo.webp';
import jQueryWebP from './images/webP/jQuery.webp';
import pythonWebP from './images/webP/python.webp';
import djangoWebP from './images/webP/django.webp';
import bootstrapWebP from './images/webP/bootstrap.webp';
import wordpressWebP from './images/webP/wordpress.webp';
import emberjsWebP from './images/webP/emberjs-logo.webp';

export default class MyTools extends Component {
	
	render() {
		return (

			<section className="myTools" data-load={this.props.transition}>
			  <div className="upper-tools tools-collection">
				<picture>
				  <source type="image/webp" srcSet={htmlCssJsWebP}/>
				  <img src={htmlCssJs} alt="logo html, css, js"/>
				</picture>
				
				<picture>
				  <source type="image/webp" srcSet={pythonWebP}/>
				  <img src={python} alt="logo python"/>
				</picture>
				
				<picture>
				  <source type="image/webp" srcSet={reactjsWebP}/>
				  <img src={reactjs} alt="logo reactjs"/>
				</picture>

				<picture>
				  <source type="image/webp" srcSet={emberjsWebP}/>
				  <img src={emberjs} alt="logo emberjs"/>
				</picture>
			  </div>

			  <div className="lower-tools tools-collection">
				<picture>
				  <source type="image/webp" srcSet={jQueryWebP}/>				
				  <img src={jQuery} alt="logo jquery"/>
				</picture>

				<picture>
				  <source type="image/webp" srcSet={bootstrapWebP}/>
				  <img src={bootstrap} alt="logo bootstrap"/>
				</picture>

				<picture>
				  <source type="image/webp" srcSet={djangoWebP}/>
				  <img src={django} alt="logo file django"/>
				</picture>
				
				<picture>
				  <source type="image/webp" srcSet={wordpressWebP}/>
				  <img src={wordpress} alt="logo wordpress"/>
				</picture>
			  </div>
			</section>
		);
	}
};

