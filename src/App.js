// App.js
import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import LastFmNowPlaying from './components/LastFmNowPlaying';

const Home = () => (
  <div className="space-page fade-in">
    {/* Animated background */}
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="shooting-stars"></div>
    <div className="content">
      {/* Hero Section */}
      <section className="hero-section animated-paragraph animation-delay-0">
        <h1>
          Hi, I'm <span className="neon">Thabiso</span>
        </h1>
        <h2 className="subtitle">Full Stack Developer & Code Surgeon</h2>
        <p className="tagline">
          I create digital solutions that are robust, scalable, and visually stunning.
        </p>
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
        <Link to="/contact" className="space-button pulse">Contact Me</Link>
      </section>
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
          Skills Program, Electronic Arts, and currently contributing to live development projects as an intern
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
                <span className="cert-name">Electronic Arts Program</span>
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

          <div className="achievement-card">
            <h4><a href="https://ekurhulenicitycollege.co.za" target="_blank" rel="noreferrer">ekurhulenicitycollege.co.za</a></h4>
            <p>College website project</p>
          </div>

          <div className="achievement-card">
            <h4><a href="https://tkbnproperties.co.za" target="_blank" rel="noreferrer">tkbnproperties.co.za</a></h4>
            <p>Property website project</p>
          </div>

          <div className="achievement-card">
            <h4><a href="https://sapl.online/leagues" target="_blank" rel="noreferrer">sapl.online/leagues</a></h4>
            <p>Sports league platform</p>
          </div>

          <div className="achievement-card">
            <h4><a href="https://fadr.com/stems" target="_blank" rel="noreferrer">fadr.com/stems</a></h4>
            <p>Music stems platform</p>
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

const App = () => (
  <Router>
      <div className="space-app">
        <nav className="space-nav">
          <div className="nav-logo">
            <div className="pulsar"></div>
            <span>CosmicDev</span>
          </div>
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="nav-icon">🚀</span> Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="nav-icon">👨‍🚀</span> About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="nav-icon">📬</span> Contact
            </NavLink>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );

export default App;
