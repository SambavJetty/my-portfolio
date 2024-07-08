import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
  <a href="https://www.instagram.com/sambav_jetty/"><InstagramIcon /></a>
  <a href="https://twitter.com/sambavjetty"><TwitterIcon /></a>
  <a href="https://www.linkedin.com/in/sambav-jetty-819962180/" ><LinkedInIcon /></a>
        </div>

        <p>&copy; 2024 SamPortfolio.com</p>
      
    </div>
  )
}

export default Footer
