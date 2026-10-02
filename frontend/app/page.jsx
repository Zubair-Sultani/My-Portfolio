import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" className="home-page">
        <ScrollReveal>
          <div className="home-container">
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ServicesSection />
            <ContactSection />
          </div>
        </ScrollReveal>
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Zubair Sultani</p>
        <a href="#main-content">Back to top</a>
      </footer>
    </>
  );
}
