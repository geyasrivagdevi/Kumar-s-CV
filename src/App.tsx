import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from './data/portfolioData';

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top">
          KG<span>.</span>
        </button>
        <nav className="nav-links" aria-label="Primary navigation">
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('stack')}>Stack</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <button className="small-cta" onClick={() => scrollTo('contact')}>
          Let’s talk <ArrowUpRight size={16} />
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid-overlay" />
          <motion.div className="hero-copy" {...reveal}>
            <p className="eyebrow">Toronto · Backend · Automation · AI</p>
            <h1>
              I build systems
              <span>that move work forward.</span>
            </h1>
            <p className="hero-subtitle">
              Backend engineer focused on Python, automation platforms, production web systems,
              and practical AI applications.
            </p>
            <div className="hero-actions">
              <button className="primary-cta" onClick={() => scrollTo('work')}>
                View selected work <ArrowDownRight size={18} />
              </button>
              <button className="text-cta" onClick={() => scrollTo('experience')}>
                See experience
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hero-portrait-wrap"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="portrait-glow" />
            <img src="/kumar-hero.jpg" alt="Kumar Guddepogu" className="hero-portrait" />
            <div className="portrait-caption">
              <span>Available for software / backend / AI application roles</span>
              <span className="status-dot">●</span>
            </div>
          </motion.div>

          <div className="hero-side-label">PORTFOLIO / 2026</div>
        </section>

        <section className="marquee" aria-label="Technology focus">
          <div className="marquee-track">
            <span>PYTHON</span><i>✦</i><span>DJANGO</span><i>✦</i><span>AUTOMATION</span><i>✦</i>
            <span>REACT</span><i>✦</i><span>APIs</span><i>✦</i><span>AI APPLICATIONS</span><i>✦</i>
          </div>
        </section>

        <section id="work" className="section-block projects-section">
          <motion.div className="section-heading" {...reveal}>
            <p className="section-index">01 / SELECTED WORK</p>
            <h2>Built for real workflows, not demo screens.</h2>
          </motion.div>

          <div className="project-list">
            {PROJECTS.slice(0, 4).map((project, index) => (
              <motion.article key={project.id} className="project-card" {...reveal}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-main">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.tagline}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <div className="project-metrics">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-block experience-section">
          <motion.div className="section-heading split-heading" {...reveal}>
            <div>
              <p className="section-index">02 / EXPERIENCE</p>
              <h2>Engineering across systems, automation and product delivery.</h2>
            </div>
            <p className="heading-note">Less résumé wall. More signal.</p>
          </motion.div>

          <div className="experience-list">
            {EXPERIENCES.map((role) => (
              <motion.article className="experience-row" key={role.id} {...reveal}>
                <div className="experience-period">{role.period}</div>
                <div className="experience-body">
                  <p className="experience-company">{role.company}</p>
                  <h3>{role.role}</h3>
                  <p>{role.description}</p>
                  <div className="experience-tags">
                    {role.technologies.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <div className="experience-location">{role.location}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="stack" className="section-block stack-section">
          <motion.div className="section-heading" {...reveal}>
            <p className="section-index">03 / TOOLKIT</p>
            <h2>Technology is the medium. Outcomes are the point.</h2>
          </motion.div>

          <div className="stack-grid">
            {SKILL_CATEGORIES.map((group) => (
              <motion.div className="stack-card" key={group.id} {...reveal}>
                <div className="stack-topline"><span>{group.id}</span><span>{group.name}</span></div>
                <p>{group.description}</p>
                <div className="stack-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="statement-section">
          <motion.p {...reveal}>I like software that quietly removes friction.</motion.p>
          <motion.h2 {...reveal}>
            Clear interfaces. Reliable backends. Automation that gives people time back.
          </motion.h2>
        </section>

        <section id="contact" className="contact-section">
          <motion.div className="contact-copy" {...reveal}>
            <p className="section-index">04 / CONTACT</p>
            <h2>Have a system to build?</h2>
            <p>Let’s talk about backend engineering, automation, or AI application work.</p>
          </motion.div>
          <motion.div className="contact-links" {...reveal}>
            <a href={`mailto:${PERSONAL_INFO.email}`}><Mail size={18} /> Email <ArrowUpRight size={18} /></a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={18} /></a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={18} /></a>
          </motion.div>
          <div className="contact-meta"><MapPin size={16} /> {PERSONAL_INFO.location}</div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Kumar Guddepogu</span>
        <span>Designed for clarity, built for speed.</span>
      </footer>
    </div>
  );
}
