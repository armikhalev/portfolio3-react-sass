import React, { Component } from 'react';

export default class Page5 extends Component {
  render() {
      return (
<section id="page3" data-speed="8" data-type="background">
        <div className="container">
            <div className="row">
                <div className="contact">
                    <h2 className="text-center">&nbsp;Questions? Comments?</h2>
                    <h3 className="text-center">Fill out this form and I'll get back to you!</h3>
                    <br/>
                    <div className="container-fluid">
                        <form className="form-horizontal" action="http://www.arsenycoding.com/cgi-sys/formmail.pl" method="post" name="hgmailer">
                            <input type="hidden" name="recipient" value="mikhalev@arsenycoding.com"/>
                            <input type="hidden" name="subject" value="FormMail E-Mail"/>
                            <div className="form-group">
                                <div>
                                    <input type="text" name="name" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input type="text" name="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <textarea name="comment" cols="50" rows="5" placeholder="What can I do for you?"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input type="button" value="Send"/>
                                </div>
                            </div>
                            <input type="hidden" name="redirect" value="http://www.arsenycoding.com"/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div>
                    <div className="contact">
                        <h4><span className="glyphicon-envelope"></span> armikhalev@gmail.com</h4>
                        <div className="social">
                            <a href="https://www.facebook.com/arseny.mikhalev" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-facebook"></i></a>
                            <a href="https://github.com/armikhalev" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-github"></i></a>
                            <a href="https://linkedin.com/in/arsenymikhalev" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-linkedin"></i></a>
                            <a href="https://plus.google.com/u/0/116244021911673811587/posts/p/pub" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-google-plus"></i></a>
                            <a href="http://www.freecodecamp.com/armikhalev" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-fire"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
};
