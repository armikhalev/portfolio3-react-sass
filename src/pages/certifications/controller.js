import React, { Component } from 'react';
import Certificate from './certificate/controller';

export default class Certifications extends Component {
	render() {
		return (
			<section id="certifications" className="certifications">
              <h3>CERTIFICATES</h3>
              
              <Certificate  
                src={"http://res.cloudinary.com/amikhalev/image/upload/v1460949596/progevpython.jpg"} 
                alt={"python intro certificate"}
                href={"https://www.coursera.org/account/accomplishments/verify/CBEFMDER56"}
                name={"Programming for Everybody (Python)"}
                />

              <Certificate  
                src={"http://res.cloudinary.com/amikhalev/image/upload/v1460950161/python1.jpg"} 
                alt={"python certificate 1"}
                href={"https://www.coursera.org/account/accomplishments/verify/LN2C4EY75V"}
                name={"An Introduction to Interactive Programming in Python (Part 1)"}
                />

              <Certificate  
                src={"http://res.cloudinary.com/amikhalev/image/upload/v1460949595/python2.jpg"} 
                alt={"python certificate 2"}
                href={"https://www.coursera.org/account/accomplishments/verify/2SGMVVV5CB"}
                name={"An Introduction to Interactive Programming in Python (Part 2)"}
                />

              <Certificate  
                src={"http://res.cloudinary.com/amikhalev/image/upload/v1460949595/prinofcomp1.jpg"} 
                alt={"principles of computing certificate 1"}
                href={"https://www.coursera.org/account/accomplishments/verify/T623SBQXEE"}
                name={"Principles of Computing (Part 1)"}
                />

              <Certificate  
                src={"http://res.cloudinary.com/amikhalev/image/upload/v1460949595/prinofcomp2.jpg"} 
                alt={"principles of computing certificate 2"}
                href={"https://www.coursera.org/account/accomplishments/verify/9MCE5JJVDB"}
                name={"Principles of Computing (Part 2)"}
                />
			  
              <Certificate  
                src={"http://res.cloudinary.com/amikhalev/image/upload/v1460949593/cs50.jpg"} 
                alt={"CS50 certificate"}
                href={"https://s3.amazonaws.com/verify.edx.org/downloads/f810e27235484907adb84cbd5151fd64/Certificate.pdf"}
                name={"CS50: Introduction to Computer Science"}
          		/>

			</section>
		);
	}
};

