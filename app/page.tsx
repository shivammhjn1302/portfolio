const techSkills = [
  'Power BI',
  'Python',
  'SQL',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Excel',
  'Tableau',
  'Google Analytics',
  'Search Console',
  'SEO',
  'SEM',
  'WordPress',
  'Canva',
  'Email Marketing',
];

const stats = [
  { value: '2025', label: 'B.Com (Hons) + Data Analytics' },
  { value: '15+', label: 'Analytics & marketing tools' },
  { value: '360°', label: 'Data + digital marketing mindset' },
];

const education = [
  ['Class 10th', 'Amity International School, V-6', 'CBSE', '2018'],
  ['Class 12th', 'Amity International School, V-6', 'CBSE', '2020'],
  ['Digital Marketing', 'Hansraj College', 'Delhi University', '2021'],
  ['B.Com (Hons)', 'Amity University Noida', 'ACCF', '2025'],
  ['Data Analytics', 'Jobaaj Learnings', 'Professional Program', '2025'],
];

const projects = [
  {
    title: 'Customer Behavior Intelligence',
    tag: 'Power BI / SQL / Excel',
    desc: 'Dashboards and analysis concepts focused on customer behavior, shopping trends, and business decision support.',
  },
  {
    title: 'Marketing Performance Command Center',
    tag: 'SEO / SEM / Analytics',
    desc: 'Digital marketing lens for campaign visibility, search performance, analytics tracking, and conversion-focused reporting.',
  },
  {
    title: 'Python Data Lab',
    tag: 'Python / Pandas / Matplotlib',
    desc: 'Data cleaning, transformation, and visualization workflow for turning raw files into practical insights.',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="noise" />
      <div className="grid-bg" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <nav className="nav glass-panel">
        <span className="brand">SM://DATA_RUNNER</span>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Data Analyst · Digital Marketer · Future-ready operator</p>
          <h1 className="glitch" data-text="Shivam Mahajan">
            Shivam Mahajan
          </h1>
          <p className="subtitle">
            I turn messy data, marketing signals, and business questions into dashboards,
            insight, and action — with a sharp analytical mindset and a neon-lit hunger to learn.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:shivammahajan1302@gmail.com">
              Contact Me
            </a>
            <a className="button ghost" href="#projects">
              View Work
            </a>
          </div>
        </div>

        <div className="terminal-card glass-panel">
          <div className="terminal-top">
            <span /> <span /> <span />
            <p>profile.exe</p>
          </div>
          <div className="terminal-body">
            <p><b>&gt;</b> booting candidate profile...</p>
            <p><b>&gt;</b> role: Data Analyst</p>
            <p><b>&gt;</b> stack: Python · SQL · Power BI · Excel</p>
            <p><b>&gt;</b> signal: detail-oriented / growth-mode</p>
            <p className="success"><b>&gt;</b> status: ready_to_build_insights</p>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((item) => (
          <article className="stat glass-panel" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section glass-panel about-panel">
        <div>
          <p className="section-kicker">About</p>
          <h2>Analytics with business context.</h2>
        </div>
        <p>
          Currently focused on Data Analytics through Jobaaj Learnings, with a commerce
          background and digital marketing foundation. I’m building practical experience across
          reporting, visualization, Python-based analysis, and marketing performance tools.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-kicker">Skill Matrix</p>
        <h2>Tools I bring to the dashboard.</h2>
        <div className="skill-cloud">
          {techSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-kicker">Projects</p>
        <h2>Cyberdeck-ready case studies.</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card glass-panel" key={project.title}>
              <span className="project-index">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p className="project-tag">{project.tag}</p>
              <p>{project.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section glass-panel">
        <p className="section-kicker">Education Timeline</p>
        <h2>Academic path</h2>
        <div className="timeline">
          {education.map(([title, org, board, year]) => (
            <div className="timeline-row" key={`${title}-${year}`}>
              <span className="year">{year}</span>
              <div>
                <h3>{title}</h3>
                <p>{org} · {board}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-card glass-panel">
        <p className="section-kicker">Contact Node</p>
        <h2>Let’s build something data-driven.</h2>
        <div className="contact-links">
          <a href="mailto:shivammahajan1302@gmail.com">shivammahajan1302@gmail.com</a>
          <a href="tel:+919717708960">+91 9717708960</a>
          <span>Ghaziabad, India</span>
        </div>
      </section>
    </main>
  );
}
