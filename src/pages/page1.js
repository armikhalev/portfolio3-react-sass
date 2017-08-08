import React, { Component } from 'react';

export default class Page1 extends Component {
    render() {
        return (
            <section id="page1" data-speed="12" data-type="background">
                <div className="container">
                    <div className="row-fluid">
                        <div className="topper">
                            <div className="about">
                                <h3><b>Hi and thanks for stopping by!</b></h3>
                                <div>
                                    <p>My name is Arseny and I am a highly motivated self-taught web developer who loves building attractive, responsive and dynamic web applications.</p>
                                    <p>I always strive to use the most contemporary technologies for my projects and I love projects that challenge my problem-solving skills.</p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    <img src="http://res.cloudinary.com/amikhalev/image/upload/c_scale,q_48,w_300/v1460343647/arsenythinksgrey.png" className="avatar" alt="Arseny Mikhalev"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
