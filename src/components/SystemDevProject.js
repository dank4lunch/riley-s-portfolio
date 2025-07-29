import React from 'react';

const SystemDevProject = () => {
  return (
    <div className="space-page fade-in">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="content">
        <h2 className="animated-paragraph" style={{ animationDelay: '0s' }}>
          System Development Project
        </h2>
        <p className="animated-paragraph" style={{ animationDelay: '0.2s' }}>
          This project showcases system-level development skills, including architecture design, 
          performance optimization, and scalable solutions for complex technical challenges.
        </p>
        <div className="glass-section animated-paragraph" style={{ animationDelay: '0.4s' }}>
          <h3>Key Features:</h3>
          <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            <li>Modular architecture design</li>
            <li>Performance monitoring and optimization</li>
            <li>Scalable database solutions</li>
            <li>Security implementation</li>
            <li>API development and integration</li>
          </ul>
        </div>
        <div className="glass-section animated-paragraph" style={{ animationDelay: '0.6s' }}>
          <h3>Technologies Used:</h3>
          <div className="skills-list">
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">MongoDB</span>
            <span className="skill-badge">Docker</span>
            <span className="skill-badge">Redis</span>
            <span className="skill-badge">Nginx</span>
          </div>
        </div>
        <div className="glass-section animated-paragraph" style={{ animationDelay: '0.8s', textAlign: 'center' }}>
          <a href="/projects" className="space-button">← Back to Projects</a>
        </div>
      </div>
    </div>
  );
};

export default SystemDevProject;
