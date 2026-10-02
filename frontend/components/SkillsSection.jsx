import SiCss from '@icons-pack/react-simple-icons/icons/SiCss';
import SiExpress from '@icons-pack/react-simple-icons/icons/SiExpress';
import SiFramer from '@icons-pack/react-simple-icons/icons/SiFramer';
import SiHtml5 from '@icons-pack/react-simple-icons/icons/SiHtml5';
import SiJavascript from '@icons-pack/react-simple-icons/icons/SiJavascript';
import SiLaravel from '@icons-pack/react-simple-icons/icons/SiLaravel';
import SiMongodb from '@icons-pack/react-simple-icons/icons/SiMongodb';
import SiMysql from '@icons-pack/react-simple-icons/icons/SiMysql';
import SiNextdotjs from '@icons-pack/react-simple-icons/icons/SiNextdotjs';
import SiNodedotjs from '@icons-pack/react-simple-icons/icons/SiNodedotjs';
import SiPhp from '@icons-pack/react-simple-icons/icons/SiPhp';
import SiPostman from '@icons-pack/react-simple-icons/icons/SiPostman';
import SiReact from '@icons-pack/react-simple-icons/icons/SiReact';
import SiTailwindcss from '@icons-pack/react-simple-icons/icons/SiTailwindcss';
import SiVite from '@icons-pack/react-simple-icons/icons/SiVite';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Motion Design', icon: SiFramer },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Vite', icon: SiVite },
      { name: 'Next.js', icon: SiNextdotjs }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: SiPostman },
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel }
    ]
  },
  {
    category: 'Data',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Tools I use to build and deliver web applications.</h2>
        <p className="section-description">
          A practical toolkit spanning user interfaces, server-side development, APIs, and relational and document databases.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.category} className="skill-card">
            <h3 className="skill-title">{skill.category}</h3>
            <ul className="skill-list">
              {skill.items.map(({ name, icon: Icon }) => (
                <li key={name} className="skill-pill">
                  <Icon className="skill-icon" color="default" aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
        <article className="skill-card skill-card-note">
          <h3 className="skill-title">Engineering practice</h3>
          <p>Responsive interfaces, reusable components, REST API integration, database-backed features, and maintainable application structure.</p>
        </article>
      </div>
    </section>
  );
}
