import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/main_logo.png";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
          <img src={logo} alt='Logo' />
      </div>

      <div className="toggleButton"></div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/create-your-own"><button className="button">Create Your Own</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
