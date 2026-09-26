import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  MapPin,
} from 'lucide-react';

const projects = [
  {
    number: '01',
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
    number: '02',
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
    number: '03',
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
    number: '04',
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
  ['BACKEND', ['Python', 'Django', 'REST APIs', 'PHP / Laravel', 'SQL']],
  ['FRONTEND', ['React', 'JavaScript', 'HTML / CSS', 'DataTables', 'Chart.js']],
  ['DATA & PLATFORM', ['MySQL', 'Power BI', 'Excel Automation', 'Git / GitHub', 'Linux / RHEL', 'IIS / Apache']],
  ['AI / CURRENT FOCUS', ['RAG', 'LLM APIs', 'AI Agents', 'MCP', 'GitHub Copilot']],
] as const;

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.22]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const imageOpacity = useTransform(scrollYProgress, [0.55, 1], [1, 0.18]);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const copyOpacity = useTransform(scrollYProgress, [0.58, 0.95], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], ['0px', '100px']);

  return (
    <section ref={ref} className="hero-cinema" id="top">
      <div className="hero-sticky">
        <motion.div className="hero-grid" style={{ y: gridY }} />

        <motion.div className="hero-copy-cinema" style={{ y: copyY, opacity: copyOpacity }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .1 }}
          >
            Toronto · Backend · Automation · AI
          </motion.p>

          <div className="hero-lines" aria-label="I build systems that move work forward">
            {['I build systems', 'that move', 'work forward.'].map((line, i) => (
              <div className="line-mask" key={line}>
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: .85, delay: .15 + i * .11, ease: [0.22, 1, 0.36, 1] }}
                  className={i > 0 ? 'muted-line' : ''}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            className="hero-subtitle-cinema"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .55 }}
          >
            Software-focused network engineer building Python backends, automation platforms,
            internal web products and practical AI applications.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .7 }}
          >
            <button className="primary-cta" onClick={() => scrollTo('work')}>
              Enter selected work <ArrowDownRight size={18} />
            </button>
            <button className="text-cta" onClick={() => scrollTo('experience')}>Experience</button>
          </motion.div>
        </motion.div>

        <motion.div className="hero-image-stage" style={{ opacity: imageOpacity }}>
          <motion.img
            src="/kumar-hero.jpg"
            alt="Kumar Guddepogu"
            className="hero-image-cinema"
            style={{ scale: imageScale, y: imageY }}
          />
          <div className="hero-image-vignette" />
          <motion.div
            className="availability-card"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .85 }}
          >
            <span>Open to Backend, Software & AI Application Engineering roles</span>
            <span className="status-dot">●</span>
          </motion.div>
        </motion.div>

        <div className="hero-vertical-label">PORTFOLIO / 2026</div>
        <div className="scroll-hint">SCROLL TO EXPLORE</div>
      </div>
    </section>
  );
}

function TransitionScene() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x1 = useTransform(scrollYProgress, [0, 1], ['-12%', '8%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['10%', '-8%']);
  const opacity = useTransform(scrollYProgress, [0.05, 0.35, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="transition-scene">
      <div className="transition-sticky">
        <motion.div style={{ x: x1, opacity }} className="transition-line">REAL WORKFLOWS</motion.div>
        <motion.div style={{ x: x2, opacity }} className="transition-line outline">NOT DEMO SCREENS</motion.div>
        <div className="transition-accent">01 / SELECTED WORK</div>
      </div>
    </section>
  );
}

function ProjectScene({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: .65 });

  const storyY = useTransform(progress, [0.1, 0.34, 0.74, 0.94], [58, 0, -18, -42]);
  const storyOpacity = useTransform(progress, [0.08, 0.26, 0.82, 0.96], [0, 1, 1, 0]);
  const metricsX = useTransform(progress, [0.12, 0.36], [48, 0]);
  const metricsOpacity = useTransform(progress, [0.1, 0.3, 0.84, 0.97], [0, 1, 1, 0]);
  const wash = useTransform(progress, [0.1, 0.5, 0.9], [0, 1, 0]);
  const progressScale = useTransform(progress, [0.12, 0.88], [0, 1]);

  return (
    <section ref={ref} className="project-scene">
      <div className="project-sticky">
        <motion.div className="project-wash" style={{ opacity: wash }} />

        <div className="project-stage-label">
          <span>SELECTED WORK</span>
          <span>{project.number} / 04</span>
        </div>

        <div className="project-scene-number" aria-hidden="true">{project.number}</div>

        <motion.div className="project-story" style={{ y: storyY, opacity: storyOpacity }}>
          <p className="project-category">{project.category}</p>
          <h2>{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">
            {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </motion.div>

        <motion.aside className="metric-stage" style={{ x: metricsX, opacity: metricsOpacity }}>
          <p className="metric-kicker">IMPACT / SCALE</p>
          {project.metrics.map(([value, label]) => (
            <div className="metric-row" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </motion.aside>

        <div className="project-scroll-rail" aria-hidden="true">
          <motion.div className="project-scroll-fill" style={{ scaleY: progressScale }} />
        </div>

        <div className="project-index-caption">
          Scroll to continue <span>↓</span>
        </div>
      </div>
    </section>
  );
}

function ExperienceScene() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const lineScale = useTransform(scrollYProgress, [0.08, .88], [0, 1]);

  return (
    <section ref={ref} id="experience" className="experience-cinema">
      <div className="experience-heading-sticky">
        <p className="section-index">02 / EXPERIENCE</p>
        <h2>Network context.<br />Software mindset.<br />Product delivery.</h2>
        <p className="heading-note">A career moving from network engineering into software and automation.</p>
      </div>

      <div className="experience-track">
        <div className="timeline-rail"><motion.div className="timeline-fill" style={{ scaleY: lineScale }} /></div>
        {experience.map((role, index) => (
          <motion.article
            className="experience-card-cinema"
            key={role.period}
            initial={{ opacity: 0.18, y: 70, scale: .96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: .55 }}
            transition={{ duration: .7, ease: [0.22, 1, .36, 1] }}
          >
            <div className="experience-step">0{index + 1}</div>
            <p className="experience-period">{role.period}</p>
            <p className="experience-company">{role.company}</p>
            <h3>{role.role}</h3>
            <p className="experience-description">{role.description}</p>
            <div className="experience-tags">
              {role.technologies.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <p className="experience-location">{role.location}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function StackScene() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const band1 = useTransform(scrollYProgress, [0, 1], ['-6%', '8%']);
  const band2 = useTransform(scrollYProgress, [0, 1], ['8%', '-6%']);

  return (
    <section ref={ref} id="stack" className="stack-cinema">
      <div className="stack-intro">
        <p className="section-index">03 / TOOLKIT</p>
        <h2>Technology is the medium.<br />Outcomes are the point.</h2>
      </div>

      <div className="skill-bands" aria-hidden="true">
        <motion.div style={{ x: band1 }}>PYTHON · DJANGO · AUTOMATION · APIs · PYTHON · DJANGO · AUTOMATION · APIs ·</motion.div>
        <motion.div style={{ x: band2 }}>REACT · SQL · POWER BI · RAG · AGENTS · REACT · SQL · POWER BI · RAG · AGENTS ·</motion.div>
      </div>

      <div className="stack-cards-cinema">
        {skillGroups.map(([name, skills], index) => (
          <motion.article
            className="stack-card-cinema"
            key={name}
            initial={{ opacity: 0, y: 80, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: .35 }}
            transition={{ duration: .7, delay: index * .05 }}
          >
            <span className="stack-number">0{index + 1}</span>
            <h3>{name}</h3>
            <div className="stack-tags">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ManifestoScene() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const bg = useTransform(scrollYProgress, [0, .2, .8, 1], ['#0a0a0a', '#f3eee3', '#f3eee3', '#0a0a0a']);
  const textY = useTransform(scrollYProgress, [0.1, .45, .8], [120, 0, -70]);
  const textOpacity = useTransform(scrollYProgress, [0.08, .3, .78, .92], [0, 1, 1, 0]);
  const textColor = useTransform(scrollYProgress, [0.15, .3, .78, .9], ['#f4f0e8', '#111111', '#111111', '#f4f0e8']);

  return (
    <motion.section ref={ref} className="manifesto-scene" style={{ backgroundColor: bg }}>
      <div className="manifesto-sticky">
        <motion.div style={{ y: textY, opacity: textOpacity, color: textColor }}>
          <p>I like software that quietly removes friction.</p>
          <h2>Clear interfaces.<br />Reliable backends.<br />Automation that gives people time back.</h2>
        </motion.div>
      </div>
    </motion.section>
  );
}

function ContactScene() {
  return (
    <section id="contact" className="contact-cinema">
      <motion.div
        className="contact-cinema-copy"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: .35 }}
        transition={{ duration: .8, ease: [0.22, 1, .36, 1] }}
      >
        <p className="section-index">04 / CONTACT</p>
        <h2>Building the next useful system.</h2>
        <p>Open to Backend Software Engineer, Full-Stack Engineer and AI Application Engineer opportunities in Canada.</p>
      </motion.div>

      <motion.div
        className="contact-cinema-panel"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: .35 }}
        transition={{ duration: .8, delay: .08 }}
      >
        <p className="contact-kicker">CURRENT FOCUS</p>
        <h3>Python backends, automation and practical AI products.</h3>
        <p className="contact-note">Toronto, ON · Canadian Permanent Resident</p>
        <a href="https://github.com/kumarG99" target="_blank" rel="noreferrer" className="contact-link">
          <Github size={18} /> GitHub <ArrowUpRight size={18} />
        </a>
      </motion.div>

      <div className="contact-location"><MapPin size={16} /> Toronto, ON, Canada</div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: .001 });

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top">KG<span>.</span></button>
        <nav className="nav-links" aria-label="Primary navigation">
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('stack')}>Stack</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <button className="small-cta" onClick={() => scrollTo('contact')}>Let’s talk <ArrowUpRight size={16} /></button>
      </header>

      <main>
        <Hero />

        <section className="marquee" aria-label="Technology focus">
          <motion.div
            className="marquee-track-cinema"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            <span>PYTHON ✦ DJANGO ✦ AUTOMATION ✦ REACT ✦ APIs ✦ AI APPLICATIONS ✦ </span>
            <span>PYTHON ✦ DJANGO ✦ AUTOMATION ✦ REACT ✦ APIs ✦ AI APPLICATIONS ✦ </span>
          </motion.div>
        </section>

        <div id="work"><TransitionScene /></div>
        {projects.map((project, index) => <ProjectScene key={project.title} project={project} index={index} />)}
        <ExperienceScene />
        <StackScene />
        <ManifestoScene />
        <ContactScene />
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Kumar Guddepogu</span>
        <span>Designed for clarity, built for motion.</span>
      </footer>
    </div>
  );
}
