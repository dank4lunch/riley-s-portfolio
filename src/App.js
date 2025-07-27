// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
      <section className="hero-section animated-paragraph" style={{ animationDelay: '0s' }}>
        <img
          src={require('./assets/IMG_5604_LE_upscale_balanced_x4.jpg')}
          alt="Profile"
          className="profile-avatar"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "3px solid #00ffee",
            marginBottom: "1rem",
            boxShadow: "0 0 30px #00ffee55",
            objectFit: "cover",
            background: "#fff"
          }}
        />
        <h1>
          Hi, I'm <span className="neon">Thabiso</span>
        </h1>
        <h2 className="subtitle">System Developer & Code Surgeon</h2>
        <p className="tagline">
          I create digital solutions that are robust, scalable, and visually stunning.
        </p>
        <a href="#projects" className="space-button pulse" style={{ marginTop: "1.5rem" }}>
          View My Work
        </a>
      </section>

      {/* Animated Now Playing */}
      <div className="now-playing-container animated-paragraph" style={{ animationDelay: '0.3s' }}>
        <h3>
          <span role="img" aria-label="music">🎵</span> Now Playing
        </h3>
        <LastFmNowPlaying />
      </div>

      {/* About Section */}
      <section className="glass-section animated-paragraph" id="about" style={{ animationDelay: '0.6s' }}>
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
      <section className="designer-section animated-paragraph" style={{ animationDelay: '0.75s' }}>
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
      <section className="stats-section animated-paragraph" style={{ animationDelay: '0.9s', display: 'flex', gap: '2rem', justifyContent: 'center', margin: '2rem 0' }}>
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
      <section className="cta-section animated-paragraph" style={{ animationDelay: '1.2s', textAlign: 'center' }}>
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
    <div className="content">
      <h2 className="animated-paragraph" style={{ animationDelay: '0s' }}>
        My <span className="neon">Projects</span>
      </h2>
      <div className="project-grid animated-paragraph" style={{ animationDelay: '0.2s' }}>
        <div className="project-card animated-paragraph" style={{ animationDelay: '0.4s' }}>
          <div className="planet"></div>
          <h3>flowith</h3>
          <p>
            <strong>flowith</strong> is an advanced AI-powered coding assistant, similar to Blackbox, that I built to help developers write, understand, and optimize code faster. It features real-time code suggestions, intelligent code search, and seamless integration into your workflow. Designed for productivity and ease of use, this tool empowers users to plan, code, and execute projects efficiently.
          </p>
          <a
            href="https://flowith.io/blank"
            className="space-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View WorkFlow Web App
          </a>
        </div>
        <div className="project-card animated-paragraph" style={{ animationDelay: '0.6s' }}>
          <div className="planet"></div>
          <h3>Task Manager</h3>
          <p>
            A simple and effective app to manage your daily tasks and boost productivity.
          </p>
          <Link to="/task-manager" className="space-button">View Task Manager</Link>
        </div>
        <div className="project-card animated-paragraph" style={{ animationDelay: '0.8s' }}>
          <div className="planet"></div>
          <h3>GeoFS Flight Simulator</h3>
          <p>
            GeoFS is a free, browser-based flight simulator that lets you fly a variety of aircraft over real-world satellite maps. No installation needed—just open and fly! Great for casual flying, learning, or exploring the world from above.
          </p>
          <a
            href="https://geo-fs.com/"
            className="space-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try GeoFS
          </a>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="space-page fade-in">
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="content">
      <h2 className="animated-paragraph" style={{ animationDelay: '0s' }}>
        About the <span className="neon">Cosmic</span> Developer
      </h2>
      <div className="about-content animated-paragraph" style={{ animationDelay: '0.2s' }}>
        <div className="spaceship" aria-label="Flying spaceship"></div>
        <div className="bio">
          <p>
            I'm an intergalactic web developer traveling through the digital universe,
            creating stellar websites and applications.
          </p>
          <div className="Languages">
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>C#</li>
            </ul>
          </div>
          <div className="Frameworks">
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="Toolss">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>WordPress</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
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
        <h2 className="animated-paragraph" style={{ animationDelay: '0s' }}>
          Transmit <span className="neon">Message</span>
        </h2>
        <form className="space-form animated-paragraph" style={{ animationDelay: '0.2s' }} onSubmit={handleSubmit}>
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
