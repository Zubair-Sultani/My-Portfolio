import { FaGithub } from 'react-icons/fa';

const projectGithubLinks = {
  portfolio: '',
  courseManagement: ''
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="section-eyebrow">Selected project</p>
        <h2 className="section-title">A portfolio and contact platform.</h2>
        <p className="section-description">A full-stack application that brings professional work and direct communication together.</p>
      </div>
      <article className="project-card">
        <div className="project-card-header">
          <div>
            <p className="project-badge">Portfolio project</p>
            <h3 className="project-title">Professional portfolio with message management</h3>
          </div>
          <span className="project-index" aria-hidden="true">01</span>
        </div>
        <div className="project-details">
          <div>
            <h4>Problem</h4>
            <p>Present academic background and software work clearly, while giving visitors a direct way to make an inquiry.</p>
          </div>
          <div>
            <h4>Solution & features</h4>
            <p>Built a responsive Next.js portfolio with structured profile sections, a downloadable resume, and a contact form connected to an Express API that validates and stores messages.</p>
          </div>
          <div>
            <h4>My contribution</h4>
            <p>Developed the frontend experience and supporting backend flow, including section navigation, responsive layouts, API request handling, and MongoDB message persistence.</p>
          </div>
        </div>
        <ul className="project-tags" aria-label="Technologies used">
          {['Next.js', 'React', 'Express.js', 'MongoDB', 'REST API'].map((tag) => (
            <li key={tag} className="project-tag">{tag}</li>
          ))}
        </ul>
        {projectGithubLinks.portfolio && (
          <a className="project-github-link" href={projectGithubLinks.portfolio} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            View on GitHub
          </a>
        )}
      </article>
      <article className="project-card">
        <div className="project-card-header">
          <div>
            <p className="project-badge">Academic Course Management System — Full-Stack Web Application</p>
            <h3 className="project-title">A full-stack platform designed to manage courses, students, instructors, enrollments, and academic information through dedicated dashboards and role-based access</h3>
          </div>
          <span className="project-index" aria-hidden="true">02</span>
        </div>
        <div className="project-details">
          <div>
            <h4>Problem</h4>
            <p>Previously, course management activities were handled manually, making it difficult and time-consuming to manage courses, students, teachers, enrollments, grades, and attendance efficiently.</p>
          </div>
          <div>
            <h4>Solution & features</h4>
            <p>The Academic Course Management System provides a centralized platform for managing academic activities and reducing manual work. Key features include:
            </p>
            <ul>
              <li>Student and teacher registration/login</li>
              <li>Admin dashboard</li>
              <li>Course creation, editing, and deletion</li>
              <li>Student enrollment</li>
              <li>Course search and filtering</li>
              <li>Attendance management</li>
              {/* Notifications
                Role-based access
                Authentication
                Profile management
                Reports */}
            </ul>
          </div>
          <div>
            <h4>My contribution</h4>
            <p>I developed the entire application, including the frontend interface, backend architecture, REST APIs, database integration, authentication, and dashboards. I designed and implemented the system to provide a centralized solution for managing academic courses, students, teachers, enrollments, grades, and attendance.</p>
          </div>
        </div>
        <ul className="project-tags" aria-label="Technologies used">
          {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'].map((tag) => (
            <li key={tag} className="project-tag">{tag}</li>
          ))}
        </ul>
        
          <a className="project-github-link" href='https://github.com/Zubair-Sultani/NALC-Full-Project' target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            View on GitHub
          </a>
        
      </article>
    </section>
  );
}
