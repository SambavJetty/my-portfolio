import React from 'react';
import ProjectItem from '../components/ProjectItem';
import uploading_image from '../assets/uploading_image.jpg';
import '../styles/project.css';

function Projects() {
  return (
    <div className='projects'>
      <h2>My Personal Projects</h2>
      <div className='projectList'>
        <a href='https://github.com/SambavJetty/My-Portfolio' style={{color:'black', textDecoration:'none'}}><ProjectItem className='projectItem' name="My-Portfolio" image={uploading_image}/ ></a>
        <ProjectItem className='projectItem' name="uploading" image={uploading_image}/>
        <ProjectItem className='projectItem' name="uploading" image={uploading_image}/>
      </div>

    </div>
  )
}

export default Projects
