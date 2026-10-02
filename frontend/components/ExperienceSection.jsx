export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-heading">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Freelance web development.</h2>
        <p className="section-description">Practical work focused on delivering complete, responsive web experiences.</p>
      </div>
      <article className="experience-card">
        <p className="experience-date">2024 – Present</p>
        <div>
          <h3 className="experience-title">Freelance Full-Stack Web Developer</h3>
          <p className="experience-company">Independent</p>
        </div>
        <ul className="experience-note">
          <li>Develop responsive web applications with React and Next.js.</li>
          <li>Build REST APIs with Node.js and Express.js, backed by MongoDB or MySQL.</li>
          <li>Connect user-facing features with application data and backend services.</li>
        </ul>
      </article>
    </section>
  );
}
