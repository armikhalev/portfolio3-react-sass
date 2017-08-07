
import React, { Component } from 'react';

export default class Page0 extends Component {
  render() {
      return (
		      <section id="page0" className="background0" data-speed="14" data-type="background">
        <div className="container">
            <div className="row text-center welcome wow slideInUp" id="wlcm">
                <h1 class="hidden-md hidden-lg mobile-header">ARSENY MIKHALEV</h1>
                <h2>Building beautiful websites</h2>
                <h2>on the foundation of elegant code</h2>
            </div>
            <a href="#about"><img className="img-responsive center-block arrow-down" src="http://res.cloudinary.com/amikhalev/image/upload/c_scale,e_fill_light,w_77/v1460325472/arrow_down.png" alt="arrow-down"/></a>
        </div>
        <div className="arrow-up col-xs-offset-10 col-sm-offset-11 col-md-offset-11 col-lg-offset-11 col-xs-1 col-sm-1 col-md-1 pull-right">
            <a href="#home" id="arrow-up"><img src="./images/arrow_up.png" alt="arrow up" /></a>
        </div>
    </section>

    );
  }
};
