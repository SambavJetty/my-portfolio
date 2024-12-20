import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';

import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Sambav</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating</p>
          <a href="https://www.linkedin.com/in/sambav-jetty-819962180/" ><LinkedInIcon /></a>
          <a href="mailto:sambavjetty@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/SambavJetty"><GithubIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <ul className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, Bootstrap
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, REST, MongoDB, AWS
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python, SQL, NoSQL
            </span>
          </li>

          
        </ul>
        
      </div>
      <div className=''></div>
    </div>
  )
}

export default Home
