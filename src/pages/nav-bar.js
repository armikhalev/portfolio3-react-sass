
import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
      return (
<nav class="navbar navtop navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#home"><img src="./images/logo.png"/></a>
            </div>
            <div class="collapse navbar-collapse text-center" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#myTools">My tools</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
};
