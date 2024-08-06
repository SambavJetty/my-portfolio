import React, { useState } from 'react';
import '../styles/Form.css';

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [skills, setskills] = useState('');
    const [certifications, setcertifications] = useState('');
    const [languages, setlanguages] = useState('');
    const [linkedin, setlinkedin] = useState('');
    const [gmail, setgmail] = useState('');
    const [github, setgithub] = useState('');
    const [schooling, setschooling] = useState('');
    const [intermediate, setintermediate] = useState('');
    const [bachelors, setbachelors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, skills, certifications, languages,linkedin,gmail,github, schooling,intermediate,bachelors });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='Your Name'
                    />
                </div>
                <div className="form-group">
                    <label>Skills:</label>
                    <input 
                        type="text" 
                        value={skills} 
                        onChange={(e) => setskills(e.target.value)}
                        placeholder='Ex : Full-Stack Web Development, DSA, Cloud Services, DBMS' 
                    />
                </div>
                <div className="form-group">
                    <label>Certifications:</label>
                    <input 
                        type="text" 
                        value={certifications} 
                        onChange={(e) => setcertifications(e.target.value)}
                        placeholder='Ex : AWS Cloud Practitioner, AWS Solutions Architect Associate' 
                    />
                </div>
                <div className="form-group">
                    <label>Languages:</label>
                    <input 
                        type="text" 
                        value={languages} 
                        onChange={(e) => setlanguages(e.target.value)}
                        placeholder='Ex : English, Telugu, Hindi, French' 
                    />
                </div>
                <div className="form-group">
                    <label>LinkedIn:</label>
                    <input 
                        type="text" 
                        value={linkedin} 
                        onChange={(e) => setlinkedin(e.target.value)}
                        placeholder='Ex : https://www.linkedin.com/in/sambav-jetty-819962180/' 
                    />
                </div>
                <div className="form-group">
                    <label>Gmail:</label>
                    <input 
                        type="text" 
                        value={gmail} 
                        onChange={(e) => setgmail(e.target.value)}
                        placeholder='Ex : sambavjetty@gmail.com ' 
                    />
                </div>
                <div className="form-group">
                    <label>GitHub:</label>
                    <input 
                        type="text" 
                        value={github} 
                        onChange={(e) => setgithub(e.target.value)}
                        placeholder='Ex : https://github.com/SambavJetty ' 
                    />
                </div>
                <div className="form-group">
                    <label>Schooling:</label>
                    <input 
                        type="text" 
                        value={schooling} 
                        onChange={(e) => setschooling(e.target.value)}
                        placeholder='Ex : Sri Chaitanya Techno School' 
                    />
                </div>
                <div className="form-group">
                    <label>Intermediate:</label>
                    <input 
                        type="text" 
                        value={intermediate} 
                        onChange={(e) => setintermediate(e.target.value)}
                        placeholder='Ex : Sri Chaitanya Junior College ' 
                    />
                </div>
                <div className="form-group">
                    <label>Bachelor's Degree:</label>
                    <input 
                        type="text" 
                        value={bachelors} 
                        onChange={(e) => setbachelors(e.target.value)}
                        placeholder='Ex : VIT-AP University ' 
                    />
                </div>
                <div className="form-group">
                    <label>Experience 1:</label>
                    <input 
                        type="text" 
                        value={bachelors} 
                        onChange={(e) => setbachelors(e.target.value)}
                        placeholder='Ex : IET Club ' 
                    />
                </div><div className="form-group">
                    <label>Experience 2:</label>
                    <input 
                        type="text" 
                        value={bachelors} 
                        onChange={(e) => setbachelors(e.target.value)}
                        placeholder='Ex : YBI Foundation ' 
                    />
                </div>
                <div className="form-group">
                    <label>Experience 3:</label>
                    <input 
                        type="text" 
                        value={bachelors} 
                        onChange={(e) => setbachelors(e.target.value)}
                        placeholder='Ex : Goldman Sachs ' 
                    />
                </div>
                <div className="form-group">
                    <label>Project 1:</label>
                    <input 
                        type="text" 
                        value={bachelors} 
                        onChange={(e) => setbachelors(e.target.value)}
                        placeholder='Ex : Project 1 Link(Deployed) ' 
                    />
                </div>
                <div className="form-group">
                    <label>Project 2:</label>
                    <input 
                        type="text" 
                        value={bachelors} 
                        onChange={(e) => setbachelors(e.target.value)}
                        placeholder='Ex : Project 2 Link(Deployed) ' 
                    />
                </div>
                <div className="form-group">
                    <label>Project 3:</label>
                    <input 
                        type="text" 
                        value={bachelors} 
                        onChange={(e) => setbachelors(e.target.value)}
                        placeholder='Ex : Project 3 Link(Deployed) ' 
                    />
                </div>
                
                <button type="submit">Deploy</button>
                
            </form>
        </div>
    );
};

export default Form;
