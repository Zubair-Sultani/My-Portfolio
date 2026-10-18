import {
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaLaptopCode,
  FaServer,
  FaWrench
} from 'react-icons/fa';

const services = [
  { title: 'Web application development', description: 'Modern, responsive web applications built with React, Next.js, and other web technologies.', icon: FaCode },
  { title: 'Full-stack implementation', description: 'End-to-end application development, connecting frontend experiences with REST APIs, backend services, and databases.', icon: FaLayerGroup },
  { title: 'REST API development', description: 'Scalable and maintainable backend APIs built with Node.js and Express.js.', icon: FaServer },
  { title: 'Database integration', description: 'Designing and integrating database-driven applications using technologies such as MongoDB and other data-storage solutions.', icon: FaDatabase },
  { title: 'UI development & responsive design', description: 'Creating clean, accessible, and responsive interfaces that work across desktop, tablet, and mobile devices', icon: FaLaptopCode },
  { title: 'Application updates', description: 'Feature improvements, bug fixes, and responsive refinements for existing web projects.', icon: FaWrench }
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-heading">
        <p className="section-eyebrow">Services</p>
        <h2 className="section-title">Ways I can contribute to your next project.</h2>
      </div>
      <div className="services-grid">
        {services.map(({ title, description, icon: Icon }) => (
          <article key={title} className="service-card">
            <span className="service-icon"><Icon aria-hidden="true" /></span>
            <h3 className="service-title">{title}</h3>
            <p className="service-text">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
