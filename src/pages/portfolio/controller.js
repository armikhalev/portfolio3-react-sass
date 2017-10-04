import React, { Component } from 'react';
import FeaturedWork from './featured-work/controller';

// png mobile images
import melaConlangSite from './images/mobile-images/mela-conlang-site-rama-mobile.png';
import masterMixer from './images/mobile-images/master-mixer-rama-mobile.png';
import videoBlesk from './images/mobile-images/videoblesk-rama-mobile.png';
import crispythoughts from './images/mobile-images/crispy-thoughts-rama-mobile.png';
import portfolio from './images/mobile-images/portfolio-rama-mobile.png';

// webp format mobile images
import melaConlangSiteWebP from './images/mobile-images/webP/mela-conlang-site-rama-mobile.webp';
import masterMixerWebP from './images/mobile-images/webP/master-mixer-rama-mobile.webp';
import videoBleskWebP from './images/mobile-images/webP/videoblesk-rama-mobile.webp';
import crispythoughtsWebP from './images/mobile-images/webP/crispy-thoughts-rama-mobile.webp';
import portfolioWebP from './images/mobile-images/webP/portfolio-rama-mobile.webp';

// png Desktop images @media min-width:900
import melaConlangSite900 from './images/mela-conlang-site-rama.png';
import masterMixer900 from './images/master-mixer-rama.png';
import videoBlesk900 from './images/videoblesk-rama.png';
import crispythoughts900 from './images/crispy-thoughts-rama.png';
import portfolio900 from './images/portfolio-rama.png';

// webp Desktop format images @media min-width:900
import melaConlangSiteWebp900 from './images/webP/mela-conlang-site-rama.webp';
import masterMixerWebp900 from './images/webP/master-mixer-rama.webp';
import videoBleskWebp900 from './images/webP/videoblesk-rama.webp';
import crispythoughtsWebp900 from './images/webP/crispy-thoughts-rama.webp';
import portfolioWebp900 from './images/webP/portfolio-rama.webp';

export default class DesktopPortfolio extends Component {
	render() {
		
		return (
				<section className="portfolio" data-load={this.props.transition}>
				
				<FeaturedWork
			className={"mela-conlang"}
			src={melaConlangSite}
				  webp={melaConlangSiteWebP}
				  media900={melaConlangSite900}
				  mediaWebp900={melaConlangSiteWebp900}
			alt={"website mela-conlang.site"}
			href={"http://mela-conlang.site"}
				/>
				
				<FeaturedWork
			className={"masterMixer"}
			src={masterMixer}
				  webp={masterMixerWebP}
				  media900={masterMixer900}
				  mediaWebp900={masterMixerWebp900}
			alt={"master Mixer web application"}
			href={"http://mastermixer.x10.mx"}
				/>
				
				<FeaturedWork
			className={"videoblesk"}
			src={videoBlesk}
				  webp={videoBleskWebP}
				  media900={videoBlesk900}
				  mediaWebp900={videoBleskWebp900}
			alt={"website videoblesk.com"}
			href={"http://www.videoblesk.com"}
				/>

				<FeaturedWork
			className={"crispythoughts"}
			src={crispythoughts}
				  webp={crispythoughtsWebP}
				  media900={crispythoughts900}
				  mediaWebp900={crispythoughtsWebp900}
			alt={"website crispythoughts.com"}
			href={"http://www.crispythoughts.com"}
				/>

				<FeaturedWork
			className={"arsenycoding"}
			src={portfolio}
				  webp={portfolioWebP}
				  media900={portfolio900}
				  mediaWebp900={portfolioWebp900}
			alt={"website arsenycoding.com"}
			href={"http://www.arsenycoding.com"}
				/>
				</section>
      	);
  	}
};

