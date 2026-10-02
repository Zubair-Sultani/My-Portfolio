export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Software Engineer · Computer Science Student</p>
          <div>
            <h1 className="hero-title">Zubair Sultani</h1>
            <p className="hero-subtitle">Building thoughtful software for real-world needs.</p>
          </div>
          <p className="hero-description">
            I’m a Computer Science student and software developer interested in building clear, reliable web applications across the frontend and backend.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">View projects</a>
            <a href="#contact" className="hero-button hero-button-secondary">Contact me</a>
            <a href="/resume.pdf" download className="hero-button hero-button-secondary">
              Download resume
            </a>
          </div>
          <a className="hero-social" href="https://www.linkedin.com/in/zubair-sultani-5246743ab/" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
        </div>

        <div className="hero-profile-card">
          <img src="/profile.jpg" alt="Portrait of Zubair Sultani" />
          <div className="hero-profile-caption">
            <span>Computer Science</span>
            <span>Kunar University</span>
          </div>
        </div>
      </div>
    </section>
  );
}
