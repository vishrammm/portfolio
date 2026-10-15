import { useEffect, useState } from 'react'

const profile = {
  name: 'Vishram Narayan Bagwe',
  role: 'Information Technology Undergraduate',
  college: 'M. H. Saboo Siddik College of Engineering, Mumbai',
  graduation: 'Expected graduation: 2029',
  email: 'vishrambagwe0311@gmail.com',
  github: 'https://github.com/vishrammm',
  linkedin: 'https://www.linkedin.com/in/vishram-narayan-bagwe-77ba73385/',
}

const skills = [
  ['Programming', ['Python', 'Java', 'JavaScript', 'SQL']],
  ['Web development', ['React.js', 'FastAPI', 'HTML', 'CSS']],
  ['Tools & concepts', ['Git', 'GitHub', 'JDBC', 'Responsive design']],
]

const projects = [
  { title: 'Campus Connect', status: 'In progress / academic project', tags: ['React', 'UI Design'], description: 'A campus-focused platform concept for bringing student notices, events, and useful resources into one approachable place. The project focuses on planning clear user flows and a responsive interface.' },
  { title: 'Product Card Gallery', status: 'Completed learning project', tags: ['HTML', 'CSS', 'JavaScript'], description: 'A responsive product gallery built to practise reusable card layouts, visual hierarchy, hover states, and mobile-friendly CSS.' },
  { title: 'Oracle JDBC Connectivity', status: 'Completed learning exercise', tags: ['Java', 'Oracle', 'JDBC'], description: 'A Java database connectivity exercise demonstrating how an application establishes a JDBC connection and works with stored data. It was built to strengthen core database integration skills.' },
  { title: 'Mini Inventory Dashboard', status: 'In progress / practice project', tags: ['React', 'JavaScript', 'CSS'], description: 'A small dashboard concept for viewing inventory items and their status. It is being used to practise component design, data presentation, and clean dashboard layouts.' },
  { title: 'College Website', status: 'Academic / UI project', tags: ['HTML', 'CSS', 'Responsive Design'], description: 'A multi-section college website interface with an emphasis on readable content, navigation, and layouts that adapt to smaller screens.' },
  { title: 'Secure Document Management', status: 'Concept / planned project', tags: ['Security', 'Database Design', 'Planning'], description: 'A proposed document-management system exploring organised document storage, access roles, and security-minded workflow design. This is a concept, not a deployed product.' },
]

function SectionHeading({ eyebrow, title, children }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p>{children}</p>}</div>
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-top"><h3>{project.title}</h3><span className="status">{project.status}</span></div>
    <p>{project.description}</p>
    <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </article>
}

function ContactLink({ href, label, children }) {
  return href ? <a href={href} target="_blank" rel="noreferrer">{children || label} <span aria-hidden="true">↗</span></a> : <span className="muted">Add your {label} link</span>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const navigation = ['About', 'Skills', 'Projects', 'Education', 'Contact']
  const closeMenu = () => setMenuOpen(false)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return <>
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu}>{profile.name}<span>.</span></a>
      <div className="header-actions"><button className="theme-toggle" onClick={() => setTheme(current => current === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title="Toggle colour mode">{theme === 'light' ? '◐' : '☼'}</button><button className="menu-button" onClick={() => setMenuOpen(open => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button></div>
      <nav className={menuOpen ? 'open' : ''}>{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</nav>
    </header>
    <main id="top">
      <section className="hero container">
        <div className="green-wave" aria-hidden="true"><i /><i /><i /></div>
        <div><p className="eyebrow">IT student · builder · lifelong learner</p><h1>Thoughtful digital work, built one project at a time.</h1><p className="hero-copy">I’m {profile.name}, a {profile.role} learning to turn ideas into useful, well-structured web and software projects.</p><div className="hero-actions"><a className="button primary" href="#projects">View projects</a><a className="button secondary" href="#contact">Get in touch</a></div></div>
        <aside className="intro-card"><span className="dot" /><p>Currently studying</p><strong>{profile.college}</strong><small>{profile.graduation}</small></aside>
      </section>
      <section id="about" className="section light"><div className="container about-grid"><SectionHeading eyebrow="01 / About" title="Learning with purpose."><span>I’m an Information Technology undergraduate passionate about software development, generative AI, and cloud technologies. I enjoy building practical applications, exploring new technologies, and solving programming problems. I’ve worked on AI-powered text-processing applications using FastAPI and explored modern web development technologies.</span></SectionHeading><div className="principles"><div><b>Curious</b><span>Exploring generative AI, cloud technologies, and new developer tools.</span></div><div><b>Practical</b><span>Building useful applications and strengthening programming fundamentals.</span></div><div><b>Growing</b><span>Turning coursework and experiments into thoughtful portfolio projects.</span></div></div></div></section>
      <section id="skills" className="section container"><SectionHeading eyebrow="02 / Skills" title="A practical, growing toolkit.">Skills shown here reflect learning and project work—not claims of expert-level proficiency.</SectionHeading><div className="skills-grid">{skills.map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section id="projects" className="section light"><div className="container"><SectionHeading eyebrow="03 / Projects" title="Selected work and concepts.">A mix of completed exercises, current work, and ideas I plan to develop further.</SectionHeading><div className="projects-grid">{projects.map(project => <ProjectCard key={project.title} project={project} />)}</div></div></section>
      <section id="education" className="section container education"><SectionHeading eyebrow="04 / Education" title="Building the fundamentals."><span>A focused foundation in computing principles, programming, and modern web development.</span></SectionHeading><div className="education-card"><div><p className="eyebrow">Current programme</p><h3>Bachelor of Engineering (BE) in Information Technology</h3><p>{profile.college}</p></div><p className="graduation">{profile.graduation}</p></div><div className="coursework"><h3>Relevant coursework</h3><p>Data Structures and Algorithms (DSA), Database Management Systems (DBMS), Java Programming, Web Development, and Discrete Mathematics.</p><h3 className="interests-title">Areas of interest</h3><p>Software Engineering, Generative AI, Backend Development, Cloud Computing, and Problem Solving.</p></div></section>
      <section id="contact" className="contact"><div className="container contact-grid"><div><p className="eyebrow">05 / Contact</p><h2>Let’s connect.</h2><p>For project discussions, collaboration, or opportunities, feel free to reach out.</p></div><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email}</a><ContactLink href={profile.github} label="GitHub" /><ContactLink href={profile.linkedin} label="LinkedIn" /></div></div></section>
    </main>
    <footer className="container"><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with React + Vite</span></footer>
  </>
}
