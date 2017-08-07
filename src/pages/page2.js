
import React, { Component } from 'react';

export default class Page2 extends Component {
  render() {
      return (

	<section id="pageOneHalf">
        <div class="container-fluid">
            <div class="row wow bounceInLeft">
                <img class="htmlCssJs img-responsive col-xs-6 col-sm-3 col-lg-offset-2 col-lg-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343805/htmlcssjs.png" alt="sign html, css, js"/>
                <img class="img-responsive col-xs-6 col-sm-3 col-lg-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343791/angular.png" alt="sign angularjs"/>
                <img class="img-responsive col-xs-6 col-sm-3 col-lg-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343810/jQuery_gxav15.png" alt="sign jquery"/>
                <img class="img-responsive col-xs-6 col-sm-3 col-lg-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343822/python.png" alt="sign python"/>
            </div>
			  
            <div class="row wow bounceInRight" id="secondToolsRow">
                <img class="img-responsive col-xs-6 col-sm-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343799/django.png" alt="sign django"/>
                <img class="img-responsive col-xs-6 col-sm-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343796/bootstrap.png" alt="sign bootstrap"/>
                <img class="img-responsive col-xs-6 col-sm-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343835/wordpress.png" alt="sign wordpress"/>
                <img class="img-responsive col-xs-6 col-sm-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343818/php.png" alt="sign php"/>
                <img class="img-responsive hidden-xs col-sm-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343814/mysql.png" alt="sign mysql"/>
                <img class="img-responsive hidden-xs col-sm-2" src="http://res.cloudinary.com/amikhalev/image/upload/v1460343826/responsivewebdesign.png" alt="sign responsive web design"/>
            </div>
        </div>
			  </section>
    );
  }
};

