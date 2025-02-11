import React from 'react';
import {Link} from "react-router-dom";
import "../styles/navbar.css";

function navbar() {
  return (
    <div className='navbar'>
        <div className="toggleButton"></div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/certifications">Certifications</Link>
            <a href='https://drive.google.com/file/d/1lGTXf9VpHY5TfzXZPVteOfAX4fkYw6jf/view?usp=sharing' style={{textDecoration:'none'}}>Resume</a>

        </div>
      
    </div>
  )
}

export default navbar
