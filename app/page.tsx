const techSkills = [
  'Power BI',
  'Python',
  'SQL',
  'Pandas',
  'NumPy',
  'Plotly',
  'Streamlit',
  'Scikit-learn',
  'Excel',
  'Tableau',
  'GitHub',
  'Vercel',
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
  { value: '132K+', label: 'OTT sessions modeled' },
  { value: '58K+', label: 'E-commerce transactions analyzed' },
  { value: '70+', label: 'Advanced SQL queries shipped' },
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
    title: 'Netflix Content Strategy & Viewer Engagement Analytics',
    tag: 'Python / SQL / Streamlit / ML / Vercel',
    desc: 'A cinematic OTT analytics command center with 132K+ watch sessions, churn prediction, viewer segmentation, recommendations, sentiment-ready reviews, and content strategy KPIs.',
    metrics: ['132K sessions', '24K users', '35 SQL queries', 'Churn ML'],
    live: 'https://netflix-content-engagement-analytic.vercel.app',
    github: 'https://github.com/shivammhjn1302/netflix-content-engagement-analytics',
  },
  {
    title: 'E-Commerce Sales & Customer Behavior Analytics Platform',
    tag: 'Python / Power BI / Streamlit / Scikit-learn',
    desc: 'A production-style retail analytics platform with synthetic marketplace data, executive KPIs, customer segmentation, churn modeling, revenue forecasting, and recommendation assets.',
    metrics: ['58K orders', '12K customers', '35 SQL queries', 'Vercel dashboard'],
    live: 'https://ecommerce-sales-customer-analytics.vercel.app',
    github: 'https://github.com/shivammhjn1302/ecommerce-sales-customer-analytics',
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
          <p className="eyebrow">Data Analyst · BI Developer · Product Analytics Builder</p>
          <h1 className="glitch" data-text="Shivam Mahajan">
            Shivam Mahajan
          </h1>
          <p className="subtitle">
            I build cyberpunk-grade analytics products that turn messy business data into
            dashboards, SQL insights, machine learning signals, and strategy-ready decisions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:shivammahajan1302@gmail.com">
              Contact Me
            </a>
            <a className="button ghost" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="terminal-card glass-panel">
          <div className="terminal-top">
            <span /> <span /> <span />
            <p>portfolio.exe</p>
          </div>
          <div className="terminal-body">
            <p><b>&gt;</b> booting analytics portfolio...</p>
            <p><b>&gt;</b> role: Data Analyst / BI Developer</p>
            <p><b>&gt;</b> stack: Python · SQL · Power BI · Streamlit</p>
            <p><b>&gt;</b> projects: OTT · E-commerce · Operations</p>
            <p className="success"><b>&gt;</b> status: dashboard_ready_for_hiring</p>
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
          background and digital marketing foundation. I’m building portfolio-grade analytics
          products across SQL, Python, BI dashboards, machine learning, and executive storytelling.
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
        <p className="section-kicker">Featured Projects</p>
        <h2>Cyberdeck-ready case studies.</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card glass-panel" key={project.title}>
              <span className="project-index">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p className="project-tag">{project.tag}</p>
              <p>{project.desc}</p>
              <div className="metric-pills">
                {project.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live Dashboard</a> : null}
                {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub Repo</a> : null}
              </div>
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
