import React, { Component } from 'react';
import FeaturedWork from '../partials/featured-work';

export default class Page4 extends Component {
  render() {
      return (
		  <section id="page2" data-speed="10" data-type="background">
			
			  <FeaturedWork
				className={"melasi"}
				src={"http://res.cloudinary.com/amikhalev/image/upload/v1461031861/Melasi_rama.png"}
				alt={"website mela-conlang.site"}
				href={"http://mela-conlang.site"}
				/>
			  
			  <FeaturedWork
				className={"masterMixer"}
				src={"http://res.cloudinary.com/amikhalev/image/upload/v1461031862/masterMixer_rama.png"}
				alt={"master Mixer web application"}
				href={"http://mastermixer.x10.mx"}
				/>
			  
			  <FeaturedWork
				className={"videoblesk"}
				src={"http://res.cloudinary.com/amikhalev/image/upload/v1461031859/VideoBlesk_rama.png"}
				alt={"website videoblesk.com"}
				href={"http://www.videoblesk.com"}
				/>

			  <FeaturedWork
				className={"crispythoughts"}
				src={"http://res.cloudinary.com/amikhalev/image/upload/v1461037227/CrispyThoughts_rama.png"}
				alt={"website crispythoughts.com"}
				href={"http://www.crispythoughts.com"}
				/>

			  <FeaturedWork
				className={"arsenycoding"}
				src={"http://res.cloudinary.com/amikhalev/image/upload/v1461031859/Portfolio_rama.png"}
				alt={"website arsenycoding.com"}
				href={"http://www.arsenycoding.com"}
				/>

			  <FeaturedWork
				className={"translator"}
				src={"http://res.cloudinary.com/amikhalev/image/upload/v1461031855/Mela_rama.png"}
				alt={"English-Mela translator Android App"}
				href={"https://play.google.com/store/apps/details?id=org.test.engmeltrans"}
				/>

		  </section>
      	);
  	}
};

