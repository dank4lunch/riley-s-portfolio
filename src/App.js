// App.js
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LastFmNowPlaying from './components/LastFmNowPlaying';
import SystemDevProject from './components/SystemDevProject';
import TaskManagerProject from './components/TaskManagerProject';

const Home = () => (
  <div className="space-page fade-in">
    {/* Animated background */}
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="shooting-stars"></div>
    <div className="content">
      {/* Hero Section */}
      <section className="hero-section animated-paragraph animation-delay-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F7f3c1ec1e84040bdb36d1376cf54246e%2F5620ab671f56458d83857c843479347f?format=webp&width=200"
          alt="Profile"
          className="profile-avatar"
        />
        <h1>
          Hi, I'm <span className="neon">Thabiso</span>
        </h1>
        <h2 className="subtitle">System Developer & Code Surgeon</h2>
        <p className="tagline">
          I create digital solutions that are robust, scalable, and visually stunning.
        </p>
        <a href="#projects" className="space-button pulse margin-top-1-5">
          View My Work
        </a>
      </section>

      {/* Animated Now Playing */}
      <div className="now-playing-container animated-paragraph animation-delay-3">
        <h3>
          <span role="img" aria-label="music">🎵</span> Now Playing
        </h3>
        <LastFmNowPlaying />
      </div>

      {/* About Section */}
      <section className="glass-section animated-paragraph animation-delay-6" id="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer who thrives on turning ideas into reality. Every project is a new adventure—solving problems, learning new tech, and building tools that make a difference. Whether it's a sleek web interface or a powerful backend, I bring creativity and precision to every line of code.
        </p>
        <div className="skills-list">
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">Python</span>
          <span className="skill-badge">React</span>
          <span className="skill-badge">Node.js</span>
          <span className="skill-badge">C#</span>
          <span className="skill-badge">MongoDB</span>
          <span className="skill-badge">Docker</span>
        </div>
      </section>

      {/* Graphic Designer Section */}
      <section className="designer-section animated-paragraph animation-delay-75">
        <div className="designer-hero">
          <div className="design-icon-container">
            <div className="floating-design-elements">
              <div className="design-element pencil"></div>
              <div className="design-element palette"></div>
              <div className="design-element monitor"></div>
            </div>
          </div>
          <div className="designer-content">
            <h2><span className="neon">Visual</span> Storyteller & Designer</h2>
            <p className="designer-tagline">
              Where code meets creativity. I don't just build interfaces—I craft visual experiences that tell stories,
              evoke emotions, and guide users through digital journeys with purpose and elegance.
            </p>
          </div>
        </div>

        <div className="design-services">
          <div className="service-card">
            <div className="service-icon brand-icon"></div>
            <h3>Brand Identity</h3>
            <p>Creating cohesive visual identities that capture your brand's essence through logos, color schemes, typography, and comprehensive style guides.</p>
            <ul className="service-highlights">
              <li>Logo Design & Branding</li>
              <li>Color Psychology</li>
              <li>Typography Systems</li>
              <li>Brand Guidelines</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon ui-icon"></div>
            <h3>UI/UX Design</h3>
            <p>Designing intuitive, user-centered interfaces that seamlessly blend aesthetics with functionality for web and mobile applications.</p>
            <ul className="service-highlights">
              <li>User Research & Testing</li>
              <li>Wireframing & Prototyping</li>
              <li>Responsive Design</li>
              <li>Accessibility Focus</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon print-icon"></div>
            <h3>Digital & Print</h3>
            <p>From social media graphics to print materials, creating versatile designs that work across all mediums and platforms.</p>
            <ul className="service-highlights">
              <li>Social Media Graphics</li>
              <li>Marketing Materials</li>
              <li>Illustrations & Icons</li>
              <li>Print Design</li>
            </ul>
          </div>
        </div>

        <div className="design-tools">
          <h3>Design Arsenal</h3>
          <div className="tools-grid">
            <div className="tool-badge adobe">
              <span className="tool-icon">🎨</span>
              <span>Adobe Creative Suite</span>
            </div>
            <div className="tool-badge figma">
              <span className="tool-icon">📐</span>
              <span>Figma</span>
            </div>
            <div className="tool-badge sketch">
              <span className="tool-icon">✏️</span>
              <span>Sketch</span>
            </div>
            <div className="tool-badge blender">
              <span className="tool-icon">🎮</span>
              <span>Blender</span>
            </div>
            <div className="tool-badge canva">
              <span className="tool-icon">🖼️</span>
              <span>Canva Pro</span>
            </div>
            <div className="tool-badge procreate">
              <span className="tool-icon">🖌️</span>
              <span>Procreate</span>
            </div>
          </div>
        </div>

        <div className="design-philosophy">
          <div className="philosophy-content">
            <h3>Design Philosophy</h3>
            <blockquote>
              "Design is not just what it looks like and feels like. Design is how it works. I believe in creating
              experiences that are not only visually stunning but also functionally intuitive, accessible to all,
              and strategically aligned with business goals."
            </blockquote>
            <div className="philosophy-points">
              <div className="point">
                <span className="point-icon">🎯</span>
                <strong>Purpose-Driven:</strong> Every design decision serves a strategic purpose
              </div>
              <div className="point">
                <span className="point-icon">♿</span>
                <strong>Inclusive Design:</strong> Accessible and usable for everyone
              </div>
              <div className="point">
                <span className="point-icon">⚡</span>
                <strong>Performance-First:</strong> Beautiful designs that load fast and work smoothly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="stats-section animated-paragraph animation-delay-9">
        <div className="stat-card">
          <h3>10+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section animated-paragraph animation-delay-12">
        <h2>Let's Build Something Amazing</h2>
        <a href="#contact" className="space-button pulse">Contact Me</a>
      </section>
    </div>
  </div>
);

const Projects = () => (
  <div className="space-page fade-in">
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="shooting-stars"></div>
    <div className="content">
      <div className="projects-hero animated-paragraph animation-delay-0">
        <h2>My <span className="neon">Digital</span> Universe</h2>
        <p className="projects-subtitle">
          Exploring the intersection of code, design, and creativity across multiple dimensions
        </p>
      </div>

      {/* Development Projects */}
      <section className="project-category animated-paragraph animation-delay-2">
        <div className="category-header">
          <h3><span className="category-icon">💻</span> Development Projects</h3>
          <p>Full-stack applications and tools that solve real-world problems</p>
        </div>
        <div className="project-grid">
          <div className="project-card featured animated-paragraph animation-delay-4">
            <a
              href="https://oskarstalberg.com/Townscaper"
              className="project-image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Colorful traditional houses representing Townscaper's procedural city building"
                className="project-image"
              />
              <div className="image-overlay">
                <span className="overlay-text">🏘️ Explore Townscaper</span>
              </div>
            </a>
            <div className="project-content">
              <div className="project-tags">
                <span className="tag procedural">Procedural</span>
                <span className="tag creative">Creative</span>
              </div>
              <h4>Townscaper</h4>
              <p>
                An elegant city-building tool that creates beautiful, procedural towns with simple clicks.
                Experience the zen of creating colorful, organic cities that grow naturally from your imagination.
              </p>
              <div className="project-tech">
                <span>Unity</span>
                <span>Procedural Generation</span>
                <span>3D Graphics</span>
              </div>
              <a
                href="https://oskarstalberg.com/Townscaper"
                className="space-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Townscaper
              </a>
            </div>
          </div>

          <div className="project-card animated-paragraph animation-delay-6">
            <a
              href="https://flowith.io/blank"
              className="project-image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital code projections representing AI-powered coding assistant"
                className="project-image"
              />
              <div className="image-overlay">
                <span className="overlay-text">🤖 Try flowith</span>
              </div>
            </a>
            <div className="project-content">
              <div className="project-tags">
                <span className="tag ai">AI-Powered</span>
                <span className="tag productivity">Productivity</span>
              </div>
              <h4>flowith</h4>
              <p>
                Advanced AI coding assistant that revolutionizes development workflow with intelligent suggestions,
                code optimization, and seamless integration.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>AI/ML</span>
                <span>API Integration</span>
              </div>
              <a
                href="https://flowith.io/blank"
                className="space-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try flowith
              </a>
            </div>
          </div>

          <div className="project-card animated-paragraph animation-delay-8">
            <Link
              to="/task-manager"
              className="project-image-link"
            >
              <img
                src="https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Productivity app interface on smartphone"
                className="project-image"
              />
              <div className="image-overlay">
                <span className="overlay-text">📋 Launch App</span>
              </div>
            </Link>
            <div className="project-content">
              <div className="project-tags">
                <span className="tag webapp">Web App</span>
                <span className="tag react">React</span>
              </div>
              <h4>Cosmic Task Manager</h4>
              <p>
                Intuitive task management with space-themed UI, real-time updates, and productivity analytics.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Local Storage</span>
                <span>CSS Animations</span>
              </div>
              <Link to="/task-manager" className="space-button">Launch App</Link>
            </div>
          </div>

          <div className="project-card animated-paragraph animation-delay-10">
            <a
              href="https://geo-fs.com/"
              className="project-image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.pexels.com/photos/29053115/pexels-photo-29053115.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vintage aircraft cockpit with analog gauges"
                className="project-image"
              />
              <div className="image-overlay">
                <span className="overlay-text">✈️ Take Flight</span>
              </div>
            </a>
            <div className="project-content">
              <div className="project-tags">
                <span className="tag simulation">Simulation</span>
                <span className="tag 3d">3D</span>
              </div>
              <h4>GeoFS Flight Simulator</h4>
              <p>
                Immersive browser-based flight simulation over real satellite imagery. No downloads required.
              </p>
              <div className="project-tech">
                <span>WebGL</span>
                <span>Real-time 3D</span>
                <span>Satellite Data</span>
              </div>
              <a
                href="https://geo-fs.com/"
                className="space-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Take Flight
              </a>
            </div>
          </div>

          <div className="project-card animated-paragraph animation-delay-12">
            <a
              href="https://gamma.app"
              className="project-image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital interface on tablet representing presentation platform"
                className="project-image"
              />
              <div className="image-overlay">
                <span className="overlay-text">📊 Explore Gamma</span>
              </div>
            </a>
            <div className="project-content">
              <div className="project-tags">
                <span className="tag ai">AI-Powered</span>
                <span className="tag presentation">Presentations</span>
              </div>
              <h4>Gamma</h4>
              <p>
                Revolutionary AI-powered presentation platform that transforms ideas into beautiful, interactive presentations with minimal effort. Create stunning decks in minutes, not hours.
              </p>
              <div className="project-tech">
                <span>AI/ML</span>
                <span>Web App</span>
                <span>Design Automation</span>
              </div>
              <a
                href="https://gamma.app"
                className="space-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Gamma
              </a>
            </div>
          </div>

          <div className="project-card animated-paragraph animation-delay-14">
            <a
              href="https://motormatchup.com/simulation"
              className="project-image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.pexels.com/photos/33175740/pexels-photo-33175740.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Racing motorcycle tire and suspension representing automotive simulation"
                className="project-image"
              />
              <div className="image-overlay">
                <span className="overlay-text">🏎️ Try Simulation</span>
              </div>
            </a>
            <div className="project-content">
              <div className="project-tags">
                <span className="tag automotive">Automotive</span>
                <span className="tag simulation">Simulation</span>
              </div>
              <h4>Motor Match Simulation</h4>
              <p>
                Advanced automotive matching and simulation platform that helps users find their perfect vehicle through interactive simulations and comprehensive comparisons.
              </p>
              <div className="project-tech">
                <span>Interactive Simulation</span>
                <span>Data Analytics</span>
                <span>3D Visualization</span>
              </div>
              <a
                href="https://motormatchup.com/simulation"
                className="space-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Simulation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Design Projects */}
      <section className="project-category animated-paragraph animation-delay-12">
        <div className="category-header">
          <h3><span className="category-icon">🎨</span> Design Projects</h3>
          <p>Visual experiences that tell stories and captivate audiences</p>
        </div>
        <div className="design-projects-grid">
          <div className="design-project-card animated-paragraph animation-delay-14">
            <div className="design-image brand-identity-bg"></div>
            <div className="design-overlay">
              <h4>Nebula Tech Branding</h4>
              <p>Complete brand identity for a futuristic tech startup</p>
              <div className="design-tags">
                <span>Logo Design</span>
                <span>Brand Guidelines</span>
                <span>Typography</span>
              </div>
            </div>
          </div>

          <div className="design-project-card animated-paragraph animation-delay-16">
            <div className="design-image mobile-ui-bg"></div>
            <div className="design-overlay">
              <h4>Stellar Banking App</h4>
              <p>Modern mobile banking interface with space-age aesthetics</p>
              <div className="design-tags">
                <span>UI/UX Design</span>
                <span>Mobile App</span>
                <span>Prototyping</span>
              </div>
            </div>
          </div>

          <div className="design-project-card animated-paragraph animation-delay-18">
            <div className="design-image poster-bg"></div>
            <div className="design-overlay">
              <h4>Cosmic Event Posters</h4>
              <p>Eye-catching promotional materials for tech conferences</p>
              <div className="design-tags">
                <span>Print Design</span>
                <span>Digital Art</span>
                <span>Marketing</span>
              </div>
            </div>
          </div>

          <div className="design-project-card animated-paragraph animation-delay-20">
            <div className="design-image illustration-bg"></div>
            <div className="design-overlay">
              <h4>Space Explorer Icons</h4>
              <p>Custom icon set for space exploration applications</p>
              <div className="design-tags">
                <span>Icon Design</span>
                <span>Vector Art</span>
                <span>UI Elements</span>
              </div>
            </div>
          </div>

          <div className="design-project-card animated-paragraph animation-delay-22">
            <div className="design-image web-design-bg"></div>
            <div className="design-overlay">
              <h4>Portfolio Redesigns</h4>
              <p>Modern, responsive portfolio websites for creative professionals</p>
              <div className="design-tags">
                <span>Web Design</span>
                <span>Responsive</span>
                <span>User Experience</span>
              </div>
            </div>
          </div>

          <div className="design-project-card animated-paragraph animation-delay-24">
            <div className="design-image social-media-bg"></div>
            <div className="design-overlay">
              <h4>Social Media Campaign</h4>
              <p>Cohesive visual campaign for product launches across platforms</p>
              <div className="design-tags">
                <span>Social Media</span>
                <span>Campaign Design</span>
                <span>Brand Consistency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="projects-cta animated-paragraph animation-delay-26">
        <h3>Ready to Build Something <span className="neon">Extraordinary</span>?</h3>
        <p>Let's collaborate and bring your vision to life with cutting-edge development and stunning design.</p>
        <Link to="/contact" className="space-button pulse">Start Your Project</Link>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="space-page fade-in">
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="shooting-stars"></div>
    <div className="content">
      {/* Hero Section */}
      <div className="about-hero animated-paragraph animation-delay-0">
        <h2>Meet <span className="neon">Thabiso Mtenjane</span></h2>
        <p className="about-subtitle">System Developer & Digital Innovator</p>
        <div className="contact-info">
          <span>📍 Germiston, South Africa</span>
          <span>📞 069 106 3144</span>
          <span>📧 dank4lunch@gmail.com</span>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="glass-section animated-paragraph animation-delay-2">
        <h3><span className="section-icon">🚀</span> Professional Summary</h3>
        <p>
          Motivated and detail-oriented Information Technology student with a strong foundation in system development,
          software engineering, cybersecurity, and front-end web design. Experienced in both academic and practical
          environments through internships and development programs. Recently completed the Accenture Nordics Digital
          Skills Program, Explore Accelerator (EA), and currently contributing to live development projects as an intern
          at The Forge. Skilled at identifying technical issues, implementing solutions, and collaborating within agile teams.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="skills-showcase animated-paragraph animation-delay-4">
        <h3><span className="section-icon">💻</span> Technical Expertise</h3>

        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Web Development</h4>
            <div className="skill-tags">
              <span className="skill-tag">WordPress</span>
              <span className="skill-tag">Elementor</span>
              <span className="skill-tag">Responsive Design</span>
              <span className="skill-tag">Custom Scripting</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Software & Tools</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">MS Office</span>
              <span className="skill-tag">Canva</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Database Management</h4>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Microsoft Access</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Systems Development</h4>
            <div className="skill-tags">
              <span className="skill-tag">UML Diagrams</span>
              <span className="skill-tag">Flowcharts</span>
              <span className="skill-tag">Pseudocode</span>
              <span className="skill-tag">SDLC</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Cybersecurity</h4>
            <div className="skill-tags">
              <span className="skill-tag">IBM Cybersecurity</span>
              <span className="skill-tag">SkillsBuild</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section animated-paragraph animation-delay-6">
        <h3><span className="section-icon">💼</span> Professional Experience</h3>

        <div className="experience-card">
          <div className="experience-header">
            <h4>System Development Intern</h4>
            <div className="company-period">
              <span className="company">The Forge</span>
              <span className="period">May 2025 - Present</span>
            </div>
          </div>
          <ul className="experience-details">
            <li>Participated in the development and maintenance of internal web-based systems</li>
            <li>Wrote and tested clean, efficient code in collaborative sprints</li>
            <li>Identified bugs and provided efficient troubleshooting across platforms</li>
            <li>Attended Agile meetings and contributed to sprint planning sessions</li>
            <li>Gained insight into real-world IT project lifecycles and development pipelines</li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <h4>Web Development Project</h4>
            <div className="company-period">
              <span className="company">College Website</span>
              <span className="period">Academic Project</span>
            </div>
          </div>
          <ul className="experience-details">
            <li>Led the creation of a fully responsive college website using WordPress and Elementor</li>
            <li>Applied custom HTML, CSS, and JavaScript to enhance site interactivity</li>
            <li>Focused on accessibility, responsiveness, and clean UI/UX design</li>
            <li>Integrated contact forms, analytics tools, and dynamic content components</li>
          </ul>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="education-section animated-paragraph animation-delay-8">
        <h3><span className="section-icon">🎓</span> Education & Certifications</h3>

        <div className="education-grid">
          <div className="education-card">
            <h4>N4 Information Technology</h4>
            <p className="institution">Ekurhuleni City College, South Africa</p>
            <p className="period">Expected Completion: October 2025</p>
            <div className="modules">
              <h5>Relevant Modules:</h5>
              <ul>
                <li>Systems Analysis and Design</li>
                <li>Introduction to Programming</li>
                <li>Information Systems</li>
                <li>System Engineering</li>
              </ul>
            </div>
          </div>

          <div className="certifications-card">
            <h4>Certifications & Programs</h4>
            <div className="cert-list">
              <div className="cert-item">
                <span className="cert-name">Accenture Nordics Digital Skills Program</span>
                <span className="cert-status completed">Completed</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">Explore Accelerator (EA) Program</span>
                <span className="cert-status completed">Completed</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">IBM SkillsBuild</span>
                <span className="cert-status completed">Completed</span>
              </div>
              <div className="cert-courses">
                <h5>Specialized Courses:</h5>
                <ul>
                  <li>Cybersecurity Fundamentals</li>
                  <li>Software Development</li>
                  <li>Business Literacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Achievements */}
      <section className="achievements-section animated-paragraph animation-delay-10">
        <h3><span className="section-icon">🏆</span> Projects & Highlights</h3>

        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🚀</div>
            <h4>Front-End Projects</h4>
            <p>Developed multiple front-end projects including landing pages, forms, and dashboards with modern design principles</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">📜</div>
            <h4>10+ Certifications</h4>
            <p>Completed extensive online training in cybersecurity, business literacy, and programming technologies</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">👥</div>
            <h4>Team Collaboration</h4>
            <p>Contributed to The Forge Internships dev team on real-world projects with agile methodologies</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">📊</div>
            <h4>Technical Documentation</h4>
            <p>Created comprehensive documentation, diagrams, and flowcharts for complex system workflows</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">⚡</div>
            <h4>Task Tracker App</h4>
            <p>Built a functional task tracker web application using JavaScript for personal productivity enhancement</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🎯</div>
            <h4>Problem Solving</h4>
            <p>Demonstrated excellence in critical thinking, adaptability, and innovative solution development</p>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="soft-skills-section animated-paragraph animation-delay-12">
        <h3><span className="section-icon">🌟</span> Core Competencies</h3>

        <div className="soft-skills-grid">
          <div className="soft-skill">
            <span className="skill-emoji">💬</span>
            <span>Communication</span>
          </div>
          <div className="soft-skill">
            <span className="skill-emoji">🧠</span>
            <span>Critical Thinking</span>
          </div>
          <div className="soft-skill">
            <span className="skill-emoji">🔄</span>
            <span>Adaptability</span>
          </div>
          <div className="soft-skill">
            <span className="skill-emoji">👥</span>
            <span>Team Collaboration</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="about-cta animated-paragraph animation-delay-14">
        <h3>Ready to <span className="neon">Collaborate</span>?</h3>
        <p>Let's connect and explore how we can create innovative solutions together!</p>
        <Link to="/contact" className="space-button pulse">Get In Touch</Link>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:dank4lunch@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-page fade-in">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="content">
        <h2 className="animated-paragraph animation-delay-0">
          Transmit <span className="neon">Message</span>
        </h2>
        <form className="space-form animated-paragraph animation-delay-2" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Enter your message" value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="space-button">
            Launch Message
          </button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <Router>
      <div className="space-app">
        <nav className="space-nav">
          <div className="nav-logo">
            <div className="pulsar"></div>
            <span>CosmicDev</span>
          </div>
          <div className="nav-links">
            <Link
              to="/"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => setActiveLink('home')}
            >
              <span className="nav-icon">🚀</span> Home
            </Link>
            <Link
              to="/projects"
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={() => setActiveLink('projects')}
            >
              <span className="nav-icon">🛰</span> Projects
            </Link>
            <Link
              to="/about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => setActiveLink('about')}
            >
              <span className="nav-icon">👨‍🚀</span> About
            </Link>
            <Link
              to="/contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => setActiveLink('contact')}
            >
              <span className="nav-icon">📬</span> Contact
            </Link>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/system-dev" element={<SystemDevProject />} />
            <Route path="/task-manager" element={<TaskManagerProject />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
