const highlights = [
  { value: '218K+', label: 'modeled analytics events', trend: '+42% portfolio data coverage' },
  { value: '3', label: 'production-style case studies', trend: 'Streaming · Retail · Ops' },
  { value: '100+', label: 'SQL + BI assets shipped', trend: 'queries, models, reports' },
  { value: '95+', label: 'target Lighthouse score', trend: 'static-first Next.js UX' },
];

const projects = [
  {
    title: 'Netflix Content Strategy Analytics',
    domain: 'OTT / Product Analytics',
    desc: 'Executive streaming intelligence platform for engagement, churn risk, content performance, segmentation, and recommendation strategy across 132K viewing sessions.',
    impact: ['132K watch sessions', '24K users', 'Churn + segmentation ML', '35 SQL queries'],
    stack: ['Python', 'SQL', 'Streamlit', 'ML', 'Vercel'],
    live: 'https://netflix-content-engagement-analytic.vercel.app',
    github: 'https://github.com/shivammhjn1302/netflix-content-engagement-analytics',
  },
  {
    title: 'E-Commerce Sales & Customer Analytics',
    domain: 'Retail / Customer Intelligence',
    desc: 'Marketplace analytics suite covering revenue growth, customer segmentation, churn modeling, product performance, forecasting, and executive KPI storytelling.',
    impact: ['58K orders', '12K customers', 'RFM + K-Means', 'Forecasting assets'],
    stack: ['Python', 'Power BI', 'SQL', 'Scikit-learn', 'Vercel'],
    live: 'https://ecommerce-sales-customer-analytics.vercel.app',
    github: 'https://github.com/shivammhjn1302/ecommerce-sales-customer-analytics',
  },
  {
    title: 'Food Delivery Performance Analytics',
    domain: 'Operations / Delivery BI',
    desc: 'Zomato/Swiggy-style operating dashboard for delivery speed, cancellations, customer value, restaurant performance, cuisine demand, and weather impact.',
    impact: ['28K orders', '5.5K customers', '850 restaurants', 'Power BI reports'],
    stack: ['Next.js', 'React', 'SQL', 'Recharts', 'BI'],
    live: 'https://github.com/shivammhjn1302/food-delivery-performance-analytics-dashboard-',
    github: 'https://github.com/shivammhjn1302/food-delivery-performance-analytics-dashboard-',
  },
];

const skillGroups = [
  { title: 'Analytics Engineering', items: ['SQL modeling', 'KPI design', 'Cohort analysis', 'RFM segmentation', 'Forecasting'] },
  { title: 'BI + Visualization', items: ['Power BI', 'Tableau', 'Streamlit', 'Executive dashboards', 'Storytelling'] },
  { title: 'Data Science', items: ['Python', 'Pandas', 'Scikit-learn', 'Churn modeling', 'Clustering'] },
  { title: 'Product Engineering', items: ['Next.js', 'React', 'TypeScript', 'Vercel', 'Performance UX'] },
];

const architecture = [
  'Synthetic / business-domain datasets shaped into analytics-ready tables.',
  'SQL exploration, metric definitions, segmentation logic, and model-ready features.',
  'Python notebooks and scripts for validation, ML experiments, and insight generation.',
  'BI, Streamlit, and Next.js surfaces packaged as recruiter-readable decision systems.',
];

const ecosystemSignals = [
  { label: 'Streaming Analytics', value: '132K', detail: 'watch sessions modeled', width: '88%' },
  { label: 'Retail Intelligence', value: '58K', detail: 'orders with customer behavior', width: '72%' },
  { label: 'Delivery Operations', value: '28K', detail: 'orders across ops KPIs', width: '64%' },
];

const roleTracks = [
  { role: 'Analytics Engineering', proof: 'Metric marts, SQL coverage, semantic thinking, deployment discipline.' },
  { role: 'Product Analytics', proof: 'Churn, cohorts, engagement, recommendation, and retention narratives.' },
  { role: 'BI / Dashboarding', proof: 'Executive KPI systems, visual hierarchy, and business recommendations.' },
  { role: 'Data Platform Foundations', proof: 'Reusable pipelines, processed marts, documented architecture, and DX polish.' },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="SM Analytics home">
            <span>SM</span> Analytics
          </a>
          <div>
            <a href="#projects">Projects</a>
            <a href="#system">System</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Analytics Engineer · BI Developer · Product Analytics Builder</p>
            <h1>Executive analytics products engineered for hiring signal.</h1>
            <p className="hero-subtitle">
              I build business-first analytics systems across SQL, Python, BI dashboards, ML experiments,
              and modern web interfaces — presented like a premium SaaS command center instead of a generic portfolio.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#projects">Explore Case Studies</a>
              <a className="button secondary" href="mailto:shivammahajan1302@gmail.com">Start a Conversation</a>
            </div>
          </div>

          <aside className="analytics-card" aria-label="Portfolio operating metrics">
            <div className="card-header">
              <span>Portfolio Command Center</span>
              <b>Recruiter-ready</b>
            </div>
            <div className="signal-chart" aria-hidden="true">
              {[42, 64, 51, 78, 70, 92, 83, 96].map((height) => (
                <span key={height} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="metric-grid compact">
              {highlights.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section metric-grid" aria-label="Portfolio highlights">
        {highlights.map((item) => (
          <article className="metric-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.trend}</small>
          </article>
        ))}
      </section>

      <section id="system" className="section split-panel">
        <div>
          <p className="eyebrow">Operating Model</p>
          <h2>Business-first analytics, engineered like a product.</h2>
        </div>
        <div>
          <p>
            Every case study is structured around hiring-relevant evidence: clean metric logic,
            data modeling, executive KPI design, SQL depth, BI storytelling, ML experimentation,
            responsive interfaces, and deployment discipline.
          </p>
          <ol className="architecture-list">
            {architecture.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </div>
      </section>

      <section className="section ecosystem-panel" aria-label="Analytics ecosystem command center">
        <div className="section-head">
          <p className="eyebrow">Ecosystem Command Center</p>
          <h2>One cohesive portfolio suite, three business domains, one visual language.</h2>
        </div>
        <div className="ecosystem-grid">
          {ecosystemSignals.map((signal) => (
            <article className="signal-card" key={signal.label}>
              <div>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.detail}</small>
              </div>
              <i aria-hidden="true"><b style={{ width: signal.width }} /></i>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head">
          <p className="eyebrow">Featured Case Studies</p>
          <h2>Premium analytics products across streaming, retail, and operations.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>{project.domain}</span>
                <b>Case Study</b>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="impact-grid" aria-label={`${project.title} impact metrics`}>
                {project.impact.map((metric) => <span key={metric}>{metric}</span>)}
              </div>
              <div className="stack-row" aria-label={`${project.title} technology stack`}>
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-actions">
                <a href={project.live} target="_blank" rel="noreferrer">Open Demo</a>
                <a href={project.github} target="_blank" rel="noreferrer">View GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-head">
          <p className="eyebrow">Skill System</p>
          <h2>Analytics, BI, engineering, and product delivery stack.</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section role-grid-section" aria-label="Role fit evidence">
        <div className="section-head">
          <p className="eyebrow">Hiring Signal</p>
          <h2>Built to map directly to recruiter scorecards.</h2>
        </div>
        <div className="role-grid">
          {roleTracks.map((track) => (
            <article key={track.role}>
              <h3>{track.role}</h3>
              <p>{track.proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section credibility-band" aria-label="Resume positioning">
        <div>
          <p className="eyebrow">Resume Value</p>
          <h2>Positioned for analytics engineering, BI, data platform, and product analytics roles.</h2>
        </div>
        <p>
          B.Com foundation with analytics specialization, translated into deployment-ready portfolio systems
          that prove business context, technical delivery, and executive communication in one cohesive ecosystem.
        </p>
      </section>

      <section id="contact" className="section contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build data products that executives actually use.</h2>
        <div className="contact-actions">
          <a href="mailto:shivammahajan1302@gmail.com">Email</a>
          <a href="https://github.com/shivammhjn1302" target="_blank" rel="noreferrer">GitHub</a>
          <a href="tel:+919717708960">Call</a>
        </div>
      </section>
    </main>
  );
}
