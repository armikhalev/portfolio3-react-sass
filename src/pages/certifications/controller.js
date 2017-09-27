import React, { Component } from 'react';
import Certificate from './certificate/controller';

// jpg images
import ProGevPythonCert from './images/progevpython.jpg';
import Python1 from './images/python1.jpg';
import Python2 from './images/python2.jpg';
import Prinofcomp1 from './images/prinofcomp1.jpg';
import Prinofcomp2 from './images/prinofcomp2.jpg';
import Cs50 from './images/cs50.jpg';

// WebP format
import ProGevPythonCertWebP from './images/webP/progevpython.webp';
import Python1WebP from './images/webP/python1.webp';
import Python2WebP from './images/webP/python2.webp';
import Prinofcomp1WebP from './images/webP/prinofcomp1.webp';
import Prinofcomp2WebP from './images/webP/prinofcomp2.webp';
import Cs50WebP from './images/webP/cs50.webp';

export default class Certifications extends Component {
	render() {
		return (
				<section id="certificates" className="certificates">
				<h3>CERTIFICATES</h3>
				<div className="certificates-block">				
				  <Certificate  
					src={ProGevPythonCert}
					webp={ProGevPythonCertWebP}
					alt={"python intro certificate"}
					href={"https://www.coursera.org/account/accomplishments/verify/CBEFMDER56"}
					name={"Programming for Everybody (Python)"}
					/>

				  <Certificate  
					src={Python1}
					webp={Python1WebP}
					alt={"python certificate 1"}
					href={"https://www.coursera.org/account/accomplishments/verify/LN2C4EY75V"}
					name={"An Introduction to Interactive Programming in Python (Part 1)"}
					/>

				  <Certificate  
					src={Python2}
					webp={Python2WebP}
					alt={"python certificate 2"}
					href={"https://www.coursera.org/account/accomplishments/verify/2SGMVVV5CB"}
					name={"An Introduction to Interactive Programming in Python (Part 2)"}
					/>

				  <Certificate  
					src={Prinofcomp1}
					webp={Prinofcomp1WebP}
					alt={"principles of computing certificate 1"}
					href={"https://www.coursera.org/account/accomplishments/verify/T623SBQXEE"}
					name={"Principles of Computing (Part 1)"}
					/>

				  <Certificate  
					src={Prinofcomp2}
					webp={Prinofcomp2WebP}
					alt={"principles of computing certificate 2"}
					href={"https://www.coursera.org/account/accomplishments/verify/9MCE5JJVDB"}
					name={"Principles of Computing (Part 2)"}
					/>
				  
				  <Certificate  
					src={Cs50}
					webp={Cs50WebP}
					alt={"CS50 certificate"}
					href={"https://s3.amazonaws.com/verify.edx.org/downloads/f810e27235484907adb84cbd5151fd64/Certificate.pdf"}
					name={"CS50: Introduction to Computer Science"}
          			/>
				 </div>
			</section>
		);
	}
};

