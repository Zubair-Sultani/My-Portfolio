import Image from 'next/image';
import HeroName from './HeroName';
import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <HeroVisual />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Software Engineer · Computer Science Student</p>
          <div>
            <HeroName />
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

        <div className="hero-showcase">
          <div className="hero-profile-card">
            <Image
              src="/profile.jpg"
              alt="Zubair Sultani, Software Engineer and Full-Stack Developer"
              width={1200}
              height={1200}
              sizes="(max-width: 540px) min(78vw, 320px), (max-width: 760px) min(300px, calc(100vw - 40px)), (max-width: 1180px) min(30vw, 300px), 300px"
              priority
            />
            <div className="hero-profile-caption">
              <span>Computer Science</span>
              <span>Kunar University</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
