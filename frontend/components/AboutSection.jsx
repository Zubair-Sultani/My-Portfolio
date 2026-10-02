export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">A thoughtful, practical approach to software engineering.</h2>
        <p className="section-description">
          I’m a Computer Science student at Kunar University and a freelance web developer from Afghanistan. I enjoy turning ideas into useful, maintainable applications, working across interface design, APIs, and data storage. My studies and project work continue to strengthen my foundations in software engineering and problem solving.
        </p>
      </div>
      <div className="about-grid">
        <article className="about-panel">
          <h3>How I work</h3>
          <p>I value clear requirements, accessible interfaces, readable code, and steady communication. I approach each project by understanding its users first, then choosing tools that fit the problem.</p>
        </article>
        <article className="about-panel about-panel-accent">
          <h3>Areas of interest</h3>
          <p>Full-stack application development, web accessibility, API design, database-backed products, and the role of technology in expanding access to useful services.</p>
        </article>
      </div>
    </section>
  );
}
