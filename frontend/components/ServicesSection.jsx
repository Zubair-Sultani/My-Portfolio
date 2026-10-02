const services = [
  { title: 'Web application development', description: 'Modern, responsive web applications built with React, Next.js, and other web technologies.' },
  { title: 'Full-stack implementation', description: 'End-to-end application development, connecting frontend experiences with REST APIs, backend services, and databases.' },
  { title: 'REST API development', description: 'Scalable and maintainable backend APIs built with Node.js and Express.js.' },
  { title: 'Database integration', description: 'Designing and integrating database-driven applications using technologies such as MongoDB and other data-storage solutions.' },
  { title: 'UI development & responsive design', description: 'Creating clean, accessible, and responsive interfaces that work across desktop, tablet, and mobile devices' },
  { title: 'Application updates', description: 'Feature improvements, bug fixes, and responsive refinements for existing web projects.' }
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-heading">
        <p className="section-eyebrow">Services</p>
        <h2 className="section-title">Ways I can contribute to your next project.</h2>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
