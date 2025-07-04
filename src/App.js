// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LastFmNowPlaying from './components/LastFmNowPlaying';
import SystemDevProject from './components/SystemDevProject';

const Home = () => (
  <div className="space-page fade-in">
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="content">
      <h1 className="animated-paragraph" style={{ animationDelay: '0s' }}>
        Welcome to My <span className="neon">Portfolio</span>
      </h1>
      <p className="animated-paragraph" style={{ animationDelay: '0.2s' }}>
        Exploring the universe of web development and beyond
      </p>
      <div className="now-playing-container animated-paragraph" style={{ animationDelay: '0.4s' }}>
        <h3>Now Playing</h3>
        <LastFmNowPlaying />
      </div>

      <section className="glass-section animated-paragraph" id="hero" style={{ animationDelay: '0.6s' }}>
        <h1>yo, i'm Thabiso</h1>
        <p>
          system developer. code surgeon. 
          <br />
          i don’t just build — i create digital weapons that run clean and never crash under pressure.
        </p>
      </section>
      
      <section className="glass-section animated-paragraph" id="about" style={{ animationDelay: '0.8s' }}>
        <h2>a little about me</h2>
        <p>
          I'm a passionate developer who finds genuine joy in working with code. Every project is an opportunity to solve problems, learn something new, and turn ideas into reality. Whether I'm building sleek web interfaces or architecting robust backend systems, I love the creative process and the challenge that comes with it. Coding isn't just my profession, it's my craft, and I'm grateful every day to be able to do what I love.
        </p>
        <p>
          From late-night debugging sessions to the thrill of launching something new, I thrive on the journey of continuous improvement. For me, being a developer means more than just writing code—it's about building solutions that make a difference and constantly pushing the boundaries of what's possible.
        </p>
      </section>

      <section className="glass-section animated-paragraph" id="projects" style={{ animationDelay: '1s' }}>
        <h2>some of my creations</h2>
        <p>real talk.I don’t build fluff. I build what solves, helps, and moves. From college sites with custom code, to passion projects mixing anime, music, and madness. Every line i write has a purpose.</p>
      </section>

      <section className="glass-section animated-paragraph" id="contact" style={{ animationDelay: '1.2s' }}>
        
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
          <h3>WorkFlow Web App</h3>
          <p>
            A user-friendly planner that helps you organize your schedule, set goals, and plan for your future.
          </p>
          <a
            href="https://github.com/copilot/share/8a63428a-0180-88f1-a051-5c4840fa09ae"
            className="space-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View WorkFlow Web App
          </a>
        </div>
        <div className="project-card animated-paragraph" style={{ animationDelay: '0.6s' }}>
          <div className="planet"></div>
          <h3>um1</h3>
          <p>
            A web app that lets you mix anime soundtracks and create custom playlists.
          </p>
          <a href="https://github.com/dank4lunch/anime-music-mixer" className="space-button" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card animated-paragraph" style={{ animationDelay: '0.8s' }}>
          <div className="planet"></div>
          <h3>College Portal</h3>
          <p>
            A custom portal for students to manage assignments, grades, and resources.
          </p>
          <a href="https://github.com/dank4lunch/college-portal" className="space-button" target="_blank" rel="noopener noreferrer">View on GitHub</a>
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
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;