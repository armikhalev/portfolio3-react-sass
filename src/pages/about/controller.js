import React, { Component } from 'react';
import picture from "./arsenythinksgrey.png";

export default class Page1 extends Component {
    render() {
        return (
            <section className="about" data-speed="12" data-type="background">

                <h3><b>Hi and thanks for stopping by!</b></h3>
                <div className="about-body">
                  <p>My name is Arseny and I am a highly motivated self-taught web developer who loves building attractive, responsive and dynamic web applications.</p>
                  <p>I always strive to use the most contemporary technologies for my projects and I love projects that challenge my problem-solving skills.</p>
              </div>

			  <div className="avatar-picture">
				<img src={picture} className="avatar" alt="Arseny Mikhalev"/>
              </div>
			  
            </section>
        );
    }
};
