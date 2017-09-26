import React, { Component } from 'react';
import FeaturedWork from './featured-work/controller';

// png images
import Melasi from './images/Melasi_rama.png';
import masterMixer from './images/masterMixer_rama.png';
import videblesk from './images/VideoBlesk_rama.png';
import crispythoughts from './images/CrispyThoughts_rama.png';
import portfolio_rama from './images/Portfolio_rama.png';
import Mela_rama from './images/Mela_rama.png';

// webp format images
import MelasiWebP from './images/webP/Melasi_rama.webp';
import masterMixerWebP from './images/webP/masterMixer_rama.webp';
import videbleskWebP from './images/webP/VideoBlesk_rama.webp';
import crispythoughtsWebP from './images/webP/CrispyThoughts_rama.webp';
import portfolio_ramaWebP from './images/webP/Portfolio_rama.webp';
import Mela_ramaWebP from './images/webP/Mela_rama.webp';

export default class Portfolio extends Component {
	render() {
		
		return (
				<section className="portfolio">
				
				<FeaturedWork
			className={"melasi"}
			src={Melasi}
			webp={MelasiWebP}			
			alt={"website mela-conlang.site"}
			href={"http://mela-conlang.site"}
				/>
				
				<FeaturedWork
			className={"masterMixer"}
			src={masterMixer}
			webp={masterMixerWebP}
			alt={"master Mixer web application"}
			href={"http://mastermixer.x10.mx"}
				/>
				
				<FeaturedWork
			className={"videoblesk"}
			src={videblesk}
			webp={videbleskWebP}
			alt={"website videoblesk.com"}
			href={"http://www.videoblesk.com"}
				/>

				<FeaturedWork
			className={"crispythoughts"}
			src={crispythoughts}
			webp={crispythoughtsWebP}
			alt={"website crispythoughts.com"}
			href={"http://www.crispythoughts.com"}
				/>

				<FeaturedWork
			className={"arsenycoding"}
			src={portfolio_rama}
			webp={portfolio_ramaWebP}
			alt={"website arsenycoding.com"}
			href={"http://www.arsenycoding.com"}
				/>

				<FeaturedWork
			className={"translator"}
			src={Mela_rama}
			webp={Mela_ramaWebP}
			alt={"English-Mela translator Android App"}
			href={"https://play.google.com/store/apps/details?id=org.test.engmeltrans"}
				/>
				</section>
      	);
  	}
};

