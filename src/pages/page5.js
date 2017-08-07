
import React, { Component } from 'react';

export default class Page5 extends Component {
  render() {
      return (
<section id="page3" data-speed="8" data-type="background">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 contact topper">
                    <h2 class="text-center">&nbsp;Questions? Comments?</h2>
                    <h3 class="text-center">Fill out this form and I'll get back to you!</h3>
                    <br/>
                    <div class="container-fluid">
                        <form class="form-horizontal" action="http://www.arsenycoding.com/cgi-sys/formmail.pl" method="post" name="hgmailer">
                            <input type="hidden" name="recipient" value="mikhalev@arsenycoding.com"/>
                            <input type="hidden" name="subject" value="FormMail E-Mail"/>
                            <div class="form-group">
                                <div class="col-sm-offset-3 col-sm-6 col-sm-offset-3">
                                    <input type="text" name="name" class="form-control input-lg formText" placeholder="Name"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-3 col-sm-6 col-sm-offset-3">
                                    <input type="text" name="email" class="form-control input-lg formText" placeholder="Email"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-3 col-sm-6 col-sm-offset-3">
                                    <textarea name="comment" cols="50" rows="5" class="form-control input-lg formText" placeholder="What can I do for you?"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="text-center">
                                    <input type="button" value="Send" class="btn btn-xlarge btn-success" onclick="hgsubmit()"/>
                                </div>
                            </div>
                            <input type="hidden" name="redirect" value="http://www.arsenycoding.com"/>
                        </form>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="text-center contact">
                        <h4><span class="glyphicon glyphicon-envelope"></span> armikhalev@gmail.com</h4>
                        <div class="social text-center">
                            <a href="https://www.facebook.com/arseny.mikhalev" target="_blank"><i class="fa fa-lg fa-facebook"></i></a>
                            <a href="https://github.com/armikhalev" target="_blank"><i class="fa fa-lg fa-github"></i></a>
                            <a href="https://linkedin.com/in/arsenymikhalev" target="_blank"><i class="fa fa-lg fa-linkedin"></i></a>
                            <a href="https://plus.google.com/u/0/116244021911673811587/posts/p/pub" target="_blank"><i class="fa fa-lg fa-google-plus"></i></a>
                            <a href="http://www.freecodecamp.com/armikhalev" target="_blank"><i class="fa fa-lg fa-fire"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
};
