import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Braces,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Sparkles,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import {
  additionalProjects,
  allProjects,
  careerStages,
  certifications,
  experiences,
  featuredProjects,
  metrics,
  skillGroups,
  type Project,
} from './data'

const ease = [0.16, 1, 0.3, 1] as const
const filters = ['All', 'Data Engineering', 'Streaming', 'Analytics Engineering', 'AI / RAG', 'Data Analytics', 'Machine Learning', 'Visualization']

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeader({ kicker, title, copy, dark = false }: { kicker: string; title: string; copy?: string; dark?: boolean }) {
  return (
    <Reveal className={`section-header ${dark ? 'section-header--dark' : ''}`}>
      <div className="section-kicker"><span>{kicker}</span><i /></div>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </Reveal>
  )
}

function ArchitectureFlow({ nodes, compact = false }: { nodes: string[]; compact?: boolean }) {
  return (
    <div className={`architecture ${compact ? 'architecture--compact' : ''}`} aria-label={`Architecture: ${nodes.join(' to ')}`}>
      {nodes.map((node, index) => (
        <div className="architecture-segment" key={node}>
          <div className="architecture-node" tabIndex={0} title={`${index === 0 ? 'Input' : index === nodes.length - 1 ? 'Output' : 'Processing layer'}: ${node}`}>
            <span className="architecture-index">{String(index + 1).padStart(2, '0')}</span>
            <span>{node}</span>
          </div>
          {index < nodes.length - 1 && (
            <div className="architecture-link" aria-hidden="true"><i /><ChevronRight size={14} /></div>
          )}
        </div>
      ))}
    </div>
  )
}

function HeroSystem() {
  const stages = [
    { icon: Database, label: 'Source systems', meta: 'INGEST' },
    { icon: Workflow, label: 'Orchestration', meta: 'AIRFLOW' },
    { icon: Braces, label: 'Transformations', meta: 'PYTHON + SQL' },
    { icon: Layers3, label: 'Data products', meta: 'MARTS + APIs' },
  ]
  return (
    <motion.div className="hero-system" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 0.9, ease }}>
      <div className="system-topline">
        <div><i className="live-dot" /> SYSTEM / ONLINE</div>
        <span>JKT · UTC+7</span>
      </div>
      <div className="system-title">
        <span>DATA FLOW</span>
        <strong>Reliable by design.</strong>
      </div>
      <div className="pipeline-visual">
        <div className="pipeline-line" aria-hidden="true"><i /></div>
        {stages.map(({ icon: Icon, label, meta }, index) => (
          <motion.div className="pipeline-stage" key={label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + index * 0.12, ease }}>
            <div className="stage-icon"><Icon size={18} /></div>
            <div><span>{label}</span><small>{meta}</small></div>
            <CheckCircle2 size={16} className="stage-check" />
          </motion.div>
        ))}
      </div>
      <div className="system-stats">
        <div><span>PIPELINES</span><strong>15</strong><small>weekly</small></div>
        <div><span>ACCURACY</span><strong>~99%</strong><small>collab data</small></div>
        <div><span>RESPONSE</span><strong>~5s</strong><small>research metrics</small></div>
      </div>
      <div className="system-footer"><span>RAW</span><i /><span>TRUSTED</span><i /><span>USEFUL</span></div>
    </motion.div>
  )
}

function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const navigate = (id: string) => { setOpen(false); scrollToId(id) }
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <button className="brand" onClick={() => navigate('top')} aria-label="Back to top">
        <span>F/</span><strong>PRAMAKRISNA</strong>
      </button>
      <nav className={`nav-links ${open ? 'nav-links--open' : ''}`} aria-label="Main navigation">
        {['work', 'projects', 'skills', 'certifications', 'about'].map((item, index) => (
          <button key={item} onClick={() => navigate(item)}><span>0{index + 1}</span>{item}</button>
        ))}
        <button className="nav-cta" onClick={() => navigate('contact')}>Let’s connect <ArrowUpRight size={15} /></button>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <motion.div className="hero-eyebrow" initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, ease }}>
            <span><i /> Data Engineer</span>
            <span><MapPin size={13} /> Jakarta, Indonesia</span>
          </motion.div>
          <motion.h1 initial={{ y: 38, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.18, duration: 0.85, ease }}>
            I build the systems<br />between <em>raw data</em><br />and decisions.
          </motion.h1>
          <motion.p initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.32, duration: 0.7, ease }}>
            Production pipelines, analytical data models, workflow automation, and streaming systems—engineered to make data reliable, accessible, and useful.
          </motion.p>
          <motion.div className="hero-actions" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.44, duration: 0.7, ease }}>
            <button className="button button--primary" onClick={() => scrollToId('work')}>Explore my work <ArrowDown size={17} /></button>
            <button className="button button--ghost" onClick={() => scrollToId('about')}>My engineering story <ArrowRight size={17} /></button>
          </motion.div>
          <motion.div className="hero-specialties" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
            {['Data Pipelines', 'Airflow', 'Spark', 'Python', 'SQL', 'AI-powered systems'].map(item => <span key={item}>{item}</span>)}
          </motion.div>
        </motion.div>
        <HeroSystem />
      </div>
      <div className="container metrics-bar">
        {metrics.map((metric, index) => (
          <motion.div className="metric" key={metric.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 + index * 0.08, ease }}>
            <strong>{metric.value}</strong><span>{metric.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function CareerStory() {
  return (
    <section className="career-strip">
      <div className="container">
        <Reveal className="career-intro">
          <span>THE THROUGH-LINE</span>
          <p>Not a career switch—a continuous expansion of the systems I know how to build.</p>
        </Reveal>
        <div className="career-path">
          {careerStages.map((stage, index) => (
            <Reveal className="career-stage" key={stage.title} delay={index * 0.06}>
              <div className="career-node"><CircleDot size={17} /></div>
              <span>{stage.year}</span>
              <strong>{stage.title}</strong>
              <p>{stage.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="section experience-section" id="work">
      <div className="container">
        <SectionHeader kicker="01 / Professional experience" title="Production systems, real outcomes." copy="A career built from understanding applications at the operational level, then engineering the data platforms behind better decisions." />
        <div className="timeline">
          {experiences.map((item, index) => (
            <Reveal className="timeline-item" key={`${item.company}-${item.role}`}>
              <div className="timeline-rail"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
              <div className="timeline-meta">
                <span>{item.period}</span>
                {item.location && <small><MapPin size={12} /> {item.location}</small>}
              </div>
              <article className="experience-card">
                <div className="experience-top">
                  <div><p>{item.company}</p><h3>{item.role}</h3></div>
                  {item.progression && <div className="progression-badge"><GitBranch size={14} /> {item.progression}</div>}
                </div>
                <p className="experience-summary">{item.summary}</p>
                <div className="achievement-grid">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <div key={achievement}><span>{String(achievementIndex + 1).padStart(2, '0')}</span><p>{achievement}</p></div>
                  ))}
                </div>
                {item.initiative && (
                  <div className="initiative-panel">
                    <div className="initiative-icon"><Sparkles size={19} /></div>
                    <div><span>ACTIVE INITIATIVE</span><h4>{item.initiative.name}</h4><p>{item.initiative.description}</p>
                      <div className="mini-tags">{item.initiative.areas.map(area => <span key={area}>{area}</span>)}</div>
                    </div>
                  </div>
                )}
                <div className="stack-row">{item.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <Reveal className="project-card-wrap">
      <article className="project-card">
        <div className="project-card-top">
          <span className="project-index">PROJECT / {project.index}</span>
          <span className={`context-chip ${project.context === 'Professional work' ? 'context-chip--pro' : ''}`}>{project.context}</span>
        </div>
        <div className="project-title-row"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div><Network size={28} /></div>
        <p className="project-summary">{project.summary}</p>
        <ArchitectureFlow nodes={project.architecture} compact />
        <div className="project-impact"><Zap size={15} /><span>{project.impact}</span></div>
        <div className="stack-row stack-row--project">{project.stack.slice(0, 5).map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions">
          <button onClick={() => onOpen(project)}>View case study <ArrowUpRight size={15} /></button>
          {project.link && <a href={project.link.url} target="_blank" rel="noreferrer">{project.link.label} <ExternalLink size={14} /></a>}
        </div>
      </article>
    </Reveal>
  )
}

function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [project, onClose])
  return (
    <AnimatePresence>
      {project && (
        <motion.div className="drawer-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.button className="drawer-backdrop" aria-label="Close case study" onClick={onClose} />
          <motion.aside className="case-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.55, ease }} role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
            <div className="drawer-nav"><span>CASE STUDY / {project.index}</span><button onClick={onClose}>Close <X size={17} /></button></div>
            <div className="drawer-hero">
              <span>{project.category}</span><h2>{project.title}</h2><p>{project.summary}</p>
              <div className="stack-row">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
            </div>
            <div className="drawer-body">
              <div className="case-section"><span>01 / Overview</span><h3>What was built?</h3><p>{project.summary} {project.context === 'Professional work' ? 'This work was developed in a professional delivery context.' : 'This project was developed as an engineering portfolio initiative.'}</p></div>
              <div className="case-section"><span>02 / Problem</span><h3>The constraint to solve</h3><p>{project.problem}</p></div>
              <div className="case-section case-section--wide"><span>03 / Architecture</span><h3>How data moves</h3><ArchitectureFlow nodes={project.architecture} /></div>
              <div className="case-section"><span>04 / Technical approach</span><h3>Implementation strategy</h3><p>{project.approach}</p>{project.details && <ul>{project.details.map(detail => <li key={detail}><CheckCircle2 size={15} />{detail}</li>)}</ul>}</div>
              <div className="case-section"><span>05 / Challenges</span><h3>Engineering tradeoffs</h3><p>{project.challenges}</p></div>
              <div className="case-section"><span>06 / Outcome</span><h3>What it accomplished</h3><p>{project.outcome}</p><div className="case-highlight"><Zap size={18} />{project.impact}</div></div>
              <div className="case-section"><span>07 / What I learned</span><h3>Takeaway</h3><p>{project.learned}</p></div>
              {project.link && <div className="case-link"><a href={project.link.url} target="_blank" rel="noreferrer">{project.link.label}<ArrowUpRight size={17} /></a></div>}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ProjectsArchive({ open, onClose, onSelect }: { open: boolean; onClose: () => void; onSelect: (project: Project) => void }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const projects = useMemo(() => activeFilter === 'All' ? allProjects : allProjects.filter(project => project.filter === activeFilter), [activeFilter])
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="archive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="All projects">
          <div className="archive-topbar"><div className="brand"><span>F/</span><strong>PROJECT INDEX</strong></div><button onClick={onClose}>Back to portfolio <X size={18} /></button></div>
          <div className="container archive-inner">
            <div className="archive-heading"><span>ENGINEERING ARCHIVE / {allProjects.length} PROJECTS</span><h2>Systems, pipelines,<br /><em>and data products.</em></h2></div>
            <div className="filter-row" role="group" aria-label="Filter projects">
              {filters.map(filter => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
            <motion.div layout className="archive-grid">
              <AnimatePresence mode="popLayout">
                {projects.map(project => (
                  <motion.article layout key={project.id} className="archive-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.28 }}>
                    <div><span>{project.index}</span><span>{project.context}</span></div>
                    <p>{project.category}</p><h3>{project.title}</h3><p>{project.summary}</p>
                    <div className="stack-row">{project.stack.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div>
                    <button onClick={() => onSelect(project)}>Open case study <ArrowUpRight size={15} /></button>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ProjectsSection({ onSelect, onOpenArchive }: { onSelect: (project: Project) => void; onOpenArchive: () => void }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeader dark kicker="02 / Selected engineering" title="Built to move data forward." copy="Production work leads the story. Focused engineering projects show the systems thinking behind it." />
        <div className="projects-grid">{featuredProjects.map(project => <ProjectCard key={project.id} project={project} onOpen={onSelect} />)}</div>
        <Reveal className="all-projects-cta">
          <div><span>Beyond the featured six</span><p>{additionalProjects.length} additional projects across collection, analytics, ML, and visualization.</p></div>
          <button onClick={onOpenArchive}>Explore all projects <ArrowRight size={18} /></button>
        </Reveal>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeader kicker="03 / Technical capability" title="Tools grouped by the systems they build." copy="No arbitrary proficiency bars—just the technologies used across ingestion, transformation, orchestration, storage, serving, and analysis." />
        <div className="skills-layout">
          <Reveal className="skills-sticky">
            <div className="skill-orbit">
              <Database size={28} />
              <div><span>CORE</span><strong>Data<br />Engineering</strong></div>
              <i /><i /><i />
            </div>
            <p>Primary focus: reliable data pipelines, automation, modeling, and modern data platform foundations.</p>
          </Reveal>
          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <Reveal className="skill-group" key={group.title} delay={index * 0.04}>
                <div><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3></div>
                <div>{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutEducation() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <div className="section-kicker"><span>05 / About</span><i /></div>
          <h2>Software foundation.<br /><em>Data engineering focus.</em></h2>
          <p>I’m a Data Engineer focused on building reliable data pipelines, analytics infrastructure, and automated data systems.</p>
          <p>My engineering background started with backend and application development. Working closely with production systems, databases, APIs, and SQL naturally led me toward Data Engineering.</p>
          <p>Today, I work on pipelines, analytical models, orchestration, research analytics, and data automation with Python, SQL, Airflow, Spark, and PostgreSQL. I’m also exploring how RAG, vector search, and AI agents can interact reliably with enterprise data.</p>
          <div className="positioning-line"><Network size={19} /><span>Data Engineer with a software engineering foundation and growing expertise in modern data platforms and AI-powered data systems.</span></div>
        </Reveal>
        <div className="education-column">
          <Reveal className="education-label"><span>EDUCATION & DEVELOPMENT</span></Reveal>
          <Reveal className="education-card">
            <div><span>2018 — 2022</span><strong>3.55 / 4.00</strong></div>
            <p>Institut Teknologi Telkom Purwokerto</p>
            <h3>Bachelor of Computer Science</h3>
            <div className="mini-tags"><span>Software Engineering</span><span>Database Systems</span><span>Backend Development</span></div>
          </Reveal>
          <Reveal className="education-card education-card--accent">
            <div><span>NOV 2024 — MAR 2025</span><strong>TOP 3 STUDENT</strong></div>
            <p>Dibimbing</p>
            <h3>Data Engineering Bootcamp</h3>
            <p className="education-note">Strengthened the move from production application systems into professional Data Engineering through warehouse, orchestration, big-data, and governance practice.</p>
            <div className="mini-tags"><span>Airflow</span><span>PySpark</span><span>BigQuery</span><span>Data Warehouse</span><span>Docker</span></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CertificationsSection() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <SectionHeader
          kicker="04 / Certifications"
          title="Learning, validated."
          copy="Professional certifications and focused programs across data engineering, analytics, visualization, cloud AI, SQL, and Python."
        />
        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <Reveal className={`certification-card${index === 0 ? ' certification-card--featured' : ''}`} key={`${certification.title}-${certification.issued}`} delay={(index % 3) * 0.06}>
              <div className="certification-card-top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Award size={20} aria-hidden="true" />
              </div>
              <p>{certification.issuer}</p>
              <h3>{certification.title}</h3>
              <div className="certification-card-bottom">
                <span>Issued {certification.issued}</span>
                {certification.url && (
                  <a href={certification.url} target="_blank" rel="noreferrer" aria-label={`View ${certification.title} credential`}>
                    View credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid" aria-hidden="true" />
      <div className="container footer-inner">
        <Reveal>
          <span className="footer-kicker"><i /> NEXT / DATA PLATFORMS + AI</span>
          <h2>Let’s turn complex data<br />into <em>reliable systems.</em></h2>
          <p>Interested in Data Engineering, platform architecture, streaming, or grounded AI systems? This portfolio is a map of how I approach the work.</p>
          <div className="footer-actions footer-contact-links">
            <a className="button button--primary" href="mailto:fitranpramakrisna@gmail.com"><Mail size={17} /> Email me</a>
            <a className="button button--ghost-light" href="https://www.linkedin.com/in/fitrandwipramakrisna/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a>
            <a className="button button--ghost-light" href="https://github.com/fitranpramakrisna" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>
          </div>
        </Reveal>
        <div className="footer-bottom"><div className="brand"><span>F/</span><strong>FITRAN DWI PRAMAKRISNA</strong></div><p>DATA ENGINEER · JAKARTA, INDONESIA</p><button onClick={() => scrollToId('top')} aria-label="Back to top">TOP <ArrowUpRight size={14} /></button></div>
      </div>
    </footer>
  )
}

export default function App() {
  const [caseStudy, setCaseStudy] = useState<Project | null>(null)
  const [archiveOpen, setArchiveOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = (caseStudy || archiveOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [caseStudy, archiveOpen])
  const openCase = (project: Project) => setCaseStudy(project)
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CareerStory />
        <ExperienceSection />
        <ProjectsSection onSelect={openCase} onOpenArchive={() => setArchiveOpen(true)} />
        <SkillsSection />
        <CertificationsSection />
        <AboutEducation />
      </main>
      <Footer />
      <ProjectsArchive open={archiveOpen} onClose={() => setArchiveOpen(false)} onSelect={openCase} />
      <CaseStudy project={caseStudy} onClose={() => setCaseStudy(null)} />
    </>
  )
}
