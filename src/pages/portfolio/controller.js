import React, { Component } from 'react';
import FeaturedWork from './featured-work/controller';
import Melasi from './images/Melasi_rama.png';
import masterMixer from './images/masterMixer_rama.png';
import videblesk from './images/VideoBlesk_rama.png';
import crispythoughts from './images/CrispyThoughts_rama.png';
import portfolio_rama from './images/Portfolio_rama.png';
import Mela_rama from './images/Mela_rama.png';
import backGround from './images/damask_vignette.jpg';

export default class Portfolio extends Component {
	render() {
		
		return (
			<section className="portfolio" style={{background: 'url('+backGround+')'}}>
			  
			  <FeaturedWork
				className={"melasi"}
				src={Melasi}
				alt={"website mela-conlang.site"}
				href={"http://mela-conlang.site"}
				/>
			  
			  <FeaturedWork
				className={"masterMixer"}
				src={masterMixer}
				alt={"master Mixer web application"}
				href={"http://mastermixer.x10.mx"}
				/>
			  
			  <FeaturedWork
				className={"videoblesk"}
				src={videblesk}
				alt={"website videoblesk.com"}
				href={"http://www.videoblesk.com"}
				/>

			  <FeaturedWork
				className={"crispythoughts"}
				src={crispythoughts}
				alt={"website crispythoughts.com"}
				href={"http://www.crispythoughts.com"}
				/>

			  <FeaturedWork
				className={"arsenycoding"}
				src={portfolio_rama}
				alt={"website arsenycoding.com"}
				href={"http://www.arsenycoding.com"}
				/>

			  <FeaturedWork
				className={"translator"}
				src={Mela_rama}
				alt={"English-Mela translator Android App"}
				href={"https://play.google.com/store/apps/details?id=org.test.engmeltrans"}
				/>

			</section>
      	);
  	}
};

