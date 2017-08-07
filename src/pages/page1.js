
import React, { Component } from 'react';

export default class Page1 extends Component {
  render() {
      return (
		      <section id="page1" data-speed="12" data-type="background">
        <div class="container">
            <div class="row-fluid">
                <div class="col-sm-12 topper">
                    <div class="col-xs-offset-1 col-sm-5 lead text-justify about">
                        <h3 class="wow slideInLeft"><b>Hi and thanks for stopping by!</b></h3>
                        <div class="wow slideInUp">
                            <p>My name is Arseny and I am a highly motivated self-taught web developer who loves building attractive, responsive and dynamic web applications.</p>
                            <p>I always strive to use the most contemporary technologies for my projects and I love projects that challenge my problem-solving skills.</p>

                        </div>
                    </div>
                    <div class="hidden-xs col-sm-6">
                        <p><img src="http://res.cloudinary.com/amikhalev/image/upload/c_scale,q_48,w_300/v1460343647/arsenythinksgrey.png" class="img-thumbnail img-responsive avatar wow slideInRight" alt="Arseny Mikhalev's photo"/></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
  }
};
