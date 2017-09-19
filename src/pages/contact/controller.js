import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<section id="contact" className="contact">

              <h4>&nbsp;Questions? Comments?</h4>
              <h5>Fill out this form and I'll get back to you!</h5>

              <form action="http://www.arsenycoding.com/cgi-sys/formmail.pl" method="post" name="hgmailer">

				<input type="hidden" name="recipient" value="mikhalev@arsenycoding.com"/>
                <input type="hidden" name="subject" value="FormMail E-Mail"/>
                
				<input className="name-input" type="text" name="name" placeholder="Name"/>          
                <input className="email-input" type="text" name="email" placeholder="Email"/>
                
                <textarea className="message-textarea" name="message" cols="50" rows="5" placeholder="What can I do for you?"></textarea>
                
                <button type="button">Send</button>
                
                <input type="hidden" name="redirect" value="http://www.arsenycoding.com"/>
                
				<div><span className="glyphicon-envelope"></span> armikhalev@gmail.com</div>

			  </form>

                <div className="social">
                  <a href="https://www.facebook.com/arseny.mikhalev" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-facebook"></i></a>
                  <a href="https://github.com/armikhalev" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-github"></i></a>
                  <a href="https://linkedin.com/in/arsenymikhalev" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-linkedin"></i></a>
                  <a href="https://plus.google.com/u/0/116244021911673811587/posts/p/pub" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-google-plus"></i></a>
                  <a href="http://www.freecodecamp.com/armikhalev" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-fire"></i></a>
                </div>

			</section>
    );
  }
};
