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
  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main navigation">
        <a className="site-brand" href="#main-content">Zubair Sultani<span>.</span></a>
        <ul>
          {navigation.map(([label, id]) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}