
import React, { Component } from 'react';
import Page0 from './pages/page0';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Navbar from './pages/nav-bar';
import Footer from './pages/footer';

class App extends Component {
  render() {
      return (
			  <main>

		  <Navbar/>
		  
			  <div id="home"></div>
			  <Page0/>
			  <Page1/>

			  <div class="grey-line" id="myTools">
			  	<h3 class="text-center lines">BUILDING WITH THE BEST TOOLS</h3>
			  </div>

			  <Page2/>
			  <Page3/>

			  <div class="grey-blue-line" id="portfolio">
			  	<h3 class="text-center lines">FEATURED WORKS</h3>
			  </div>

			  <Page4/>

			  <div id="contact"></div>

			  <Page5/>

		  	<Footer/>
		</main>			  
    );
  }
}

export default App;
