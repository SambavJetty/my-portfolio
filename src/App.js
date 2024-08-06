import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Form from './pages/Form';

function App() {
  const [formData, setFormData] = useState({
    name: 'Sambav',
    skills: 'Full-Stack Web Development, DSA, Cloud Computing, DBMS',
    certifications: 'AWS Cloud Practitioner, AWS Solutions Architect Associate',
    languages: 'English, Telugu, Hindi, French',
    linkedin: 'https://www.linkedin.com/in/sambav-jetty-819962180/',
    gmail: 'sambavjetty@gmail.com',
    github:'https://github.com/SambavJetty'
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home formData={formData} />} />
          <Route path="/experience" element={<Experience formData={formData} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/create-your-own" element={<Form onSubmit={handleFormSubmit} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
