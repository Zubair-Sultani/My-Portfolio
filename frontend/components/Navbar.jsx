'use client';

import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navigation = [
  ['Home', 'hero'],
  ['About', 'about'],
  ['Education', 'education'],
  ['Achievements', 'achievements'],
  ['Certifications', 'certifications'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Services', 'services'],
  ['Contact', 'contact']
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const menuToggleRef = useRef(null);

  const closeMenu = () => {
    if (menuOpen) menuToggleRef.current?.focus();
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = navigation
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) setActiveSection(visibleSection.target.id);
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5, 1] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main navigation">
        <div className="nav-topline">
          <a className="site-brand" href="#main-content" onClick={closeMenu}>
            <span className="site-brand-mark" aria-hidden="true">ZS</span>
            <span>Zubair Sultani</span>
          </a>
          <div className="nav-tools">
            <ThemeToggle />
            <button
              ref={menuToggleRef}
              className="nav-menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="primary-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <ul id="primary-navigation" className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
          {navigation.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
