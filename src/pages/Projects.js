import React from 'react';
import ProjectItem from '../components/ProjectItem';
import uploading_image from '../assets/uploading_image.jpg';
import reveira_thumbnail from '../assets/Reveria_thumbnail.jpg';
import cyp_thumbnail from '../assets/CreateYourPortfolio_thumbnail.jpg'
import '../styles/project.css';

function Projects() {
  return (
    <div className='projects'>
      <h2>My Personal Projects</h2>
      <div className='projectList'>
        <ProjectItem className='projectItem' name="Twitter Feed Parser" image={uploading_image}/>
        <a href='https://reveria.vercel.app/' style={{ color: 'black', textDecoration: 'none' }}><ProjectItem className='projectItem' name="Reveria: E-Commerce" image={reveira_thumbnail}/></a>
        <a href='https://cywp.vercel.app/' style={{ color: 'black', textDecoration: 'none' }}><ProjectItem className='projectItem' name="Create Your Portfolio" image={cyp_thumbnail}/></a>
      </div>

    </div>
  )
}

export default Projects
