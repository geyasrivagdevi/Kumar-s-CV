import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Github, MapPin } from 'lucide-react';

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

const projects = [
  {
    category: 'NETWORK PLANNING PLATFORM',
    title: 'Port Inventory & Reservation Platform',
    description:
      'Replaced spreadsheet and email-based port reservation with a searchable web workflow used by network planners to find, reserve and track available capacity.',
    technologies: ['Python', 'Django', 'MySQL', 'JavaScript', 'DataTables'],
    metrics: [
      ['322', 'Routers'],
      ['50,526', 'Ports indexed'],
      ['~30%', 'Ports reserved'],
    ],
  },
  {
    category: 'NETWORK AUTOMATION',
    title: 'Network Management / SSH Portal',
    description:
      'Built a centralized portal for authenticated router access and operational workflows, reducing repetitive device-by-device access for the engineering team.',
    technologies: ['Python', 'Django', 'SSH', 'Paramiko', 'MySQL'],
    metrics: [
      ['~700', 'Routers'],
      ['25+', 'Users'],
      ['1', 'Centralized portal'],
    ],
  },
  {
    category: 'ENTERPRISE REPORTING',
    title: 'Budget Reporting Platform',
    description:
      'Contributed to a Laravel-based CAPEX/OPEX submission and reporting platform with multi-team usage, structured workflows and an auditable change history.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Reporting'],
    metrics: [
      ['Multi-team', 'Adoption'],
      ['CAPEX / OPEX', 'Workflow'],
      ['Audit trail', 'Traceability'],
    ],
  },
  {
    category: 'AUTOMATION & ANALYTICS',
    title: 'Planning Automation & Operational Dashboards',
    description:
      'Built recurring automation and dashboards that turned manual hourly, weekly and monthly planning tasks into repeatable workflows used by planners and leadership.',
    technologies: ['Python', 'SQL', 'Excel Automation', 'Power BI', 'Chart.js'],
    metrics: [
      ['Hourly', 'Automation'],
      ['Weekly / Monthly', 'Reporting'],
      ['Hours/day', 'Manual effort saved'],
    ],
  },
];

const experience = [
  {
    period: 'NOV 2023 — PRESENT',
    company: 'ROGERS COMMUNICATIONS',
    role: 'Network Designer',
    location: 'Toronto, ON, Canada',
    description:
      'Builds internal software, network-planning automation and reporting tools across wireline and wireless workflows. Owns and supports web applications that replace manual planning processes with searchable, auditable systems.',
    technologies: ['Python', 'Django', 'MySQL', 'JavaScript', 'Laravel', 'Power BI'],
  },
  {
    period: 'SEP 2022 — NOV 2023',
    company: 'ROGERS COMMUNICATIONS',
    role: 'Network Engineer Co-op',
    location: 'Toronto, ON, Canada',
    description:
      'Started in network engineering and progressively moved deeper into software automation, internal tooling, reporting and workflow modernization for planning teams.',
    technologies: ['Python', 'SQL', 'Automation', 'Networking', 'Git', 'Web Tools'],
  },
];

const skillGroups = [
  {
    id: '01',
    name: 'BACKEND',
    description: 'Production-focused backend development and internal tooling.',
    skills: ['Python', 'Django', 'REST APIs', 'PHP / Laravel', 'SQL'],
  },
  {
    id: '02',
    name: 'FRONTEND',
    description: 'Practical interfaces for internal products, planners and operations teams.',
    skills: ['React', 'JavaScript', 'HTML / CSS', 'DataTables', 'Chart.js'],
  },
  {
    id: '03',
    name: 'DATA & PLATFORM',
    description: 'Databases, reporting and deployment environments used in day-to-day engineering.',
    skills: ['MySQL', 'Power BI', 'Excel Automation', 'Git / GitHub', 'Linux / RHEL', 'IIS / Apache'],
  },
  {
    id: '04',
    name: 'AI / CURRENT FOCUS',
    description: 'Building toward practical AI application engineering on top of a software foundation.',
    skills: ['RAG', 'LLM APIs', 'AI Agents', 'MCP', 'GitHub Copilot'],
  },
];

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
              Software-focused network engineer building Python backends, automation platforms,
              internal web products and practical AI applications.
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
              <span>Open to Backend, Software & AI Application Engineering roles</span>
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
            {projects.map((project, index) => (
              <motion.article key={project.title} className="project-card" {...reveal}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-main">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <div className="project-metrics">
                  {project.metrics.map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
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
              <h2>Network context. Software mindset. Product delivery.</h2>
            </div>
            <p className="heading-note">A career moving from network engineering into software and automation.</p>
          </motion.div>

          <div className="experience-list">
            {experience.map((role) => (
              <motion.article className="experience-row" key={role.period} {...reveal}>
                <div className="experience-period">{role.period}</div>
                <div className="experience-body">
                  <p className="experience-company">{role.company}</p>
                  <h3>{role.role}</h3>
                  <p>{role.description}</p>
                  <div className="experience-tags">
                    {role.technologies.map((tech) => <span key={tech}>{tech}</span>)}
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
            {skillGroups.map((group) => (
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
            <h2>Building the next useful system.</h2>
            <p>
              Open to Backend Software Engineer, Full-Stack Engineer and AI Application Engineer opportunities in Canada.
            </p>
            <div className="role-chips">
              <span>Backend Engineering</span>
              <span>Full-Stack</span>
              <span>Python Automation</span>
              <span>AI Applications</span>
            </div>
          </motion.div>

          <motion.div className="contact-panel" {...reveal}>
            <p className="contact-kicker">Current focus</p>
            <h3>Python backends, automation and practical AI products.</h3>
            <p className="contact-note">Toronto, ON · Canadian Permanent Resident</p>
            <a href="https://github.com/kumarG99" target="_blank" rel="noreferrer" className="contact-link">
              <Github size={18} /> GitHub <ArrowUpRight size={18} />
            </a>
            <p className="contact-placeholder">Add your LinkedIn and email here before sending the portfolio broadly.</p>
          </motion.div>

          <div className="contact-meta"><MapPin size={16} /> Toronto, ON, Canada</div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Kumar Guddepogu</span>
        <span>Designed for clarity, built for speed.</span>
      </footer>
    </div>
  );
}
