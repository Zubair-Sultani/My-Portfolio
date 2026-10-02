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

import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main navigation">
        <div className="nav-identity">
          <a className="site-brand" href="#main-content">Zubair Sultani</a>
          <ThemeToggle />
        </div>
        <ul>
          {navigation.map(([label, id]) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}