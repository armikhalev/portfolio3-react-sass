import React, { Component } from 'react';
import authorPicture from "./arsenythinksgrey.png";

export default class About extends Component {
    render() {
        return (
            <section className="about">

              <div className="about-text">
                <h3><b>Hi and thanks for stopping by!</b></h3>
				
                <p>My name is Arseny and I am a highly motivated self-taught web developer who loves building attractive, responsive and dynamic web applications.</p>
                <p>I always strive to use the most contemporary technologies for my projects and I love projects that challenge my problem-solving skills.</p>
              </div>

			  <img className="about-picture" src={authorPicture} alt="Arseny Mikhalev"/>			  
            </section>
        );
    }
};
