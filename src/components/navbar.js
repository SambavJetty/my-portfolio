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

        </div>
      
    </div>
  )
}

export default navbar
