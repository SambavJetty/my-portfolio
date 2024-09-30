import React from 'react';
import ProjectItem from '../components/ProjectItem';
import CP from '../assets/AWS_CP.jpg';
import SAA from '../assets/AWS_SAA.jpg';
import PY from '../assets/python.jpg';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import PE from '../assets/prompteng.jpg';
import WP from '../assets/wordpress.jpg';
import SM from '../assets/socialmedia.jpg';
import '../styles/Certifications.css';


const Certifications = () => {
  return (
    <div className='certifications'>
        <h1 className='title'>Certifications</h1>
        <div className='certlist'>
            <ProjectItem  className='citem' name="AWS SAA" image={SAA}/>
            <ProjectItem  className='citem' name="AWS CP" image={CP}/>
            <ProjectItem  className='citem' name="Python" image={PY}/>
            <ProjectItem  className='citem' name="Html" image={HTML}/>
            <ProjectItem  className='citem' name="CSS" image={CSS}/>
            <ProjectItem  className='citem' name="Prompt Eng" image={PE}/>
            <ProjectItem  className='citem' name="Wordpress" image={WP}/>
            <ProjectItem  className='citem' name="Social Media Marketing" image={SM}/>
        </div>
    </div>
  )
}

export default Certifications
