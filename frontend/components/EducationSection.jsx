export default function EducationSection() {
  return (
    <section id="education" className="education-section">
      <div className="section-heading">
        <p className="section-eyebrow">Education & recognition</p>
        <h2 className="section-title">Academic foundations and achievement.</h2>
      </div>
      <div className="education-grid">
        <article className="education-item">
          <p className="education-period">2023 – Present</p>
          <h3>Bachelor of Computer Science</h3>
          <p className="education-institution">Kunar University</p>
          <p>Currently studying computer science, with a focus on building strong foundations for a career in software engineering.</p>
        </article>
        <article id="achievements" className="education-item education-item-highlight">
          <p className="education-period">Academic achievement</p>
          <h3>First place in the Faculty of Computer Science</h3>
          <p className="education-institution">Kunar University</p>
          <p>Recognized for achieving first place in the faculty.</p>
        </article>
        <article id="certifications" className="education-item">
          <p className="education-period">Certifications</p>
          <h3>No certifications listed</h3>
          <p className="education-institution">Credentials</p>
          <p>Only verified credentials are included in this portfolio.</p>
        </article>
      </div>
    </section>
  );
}