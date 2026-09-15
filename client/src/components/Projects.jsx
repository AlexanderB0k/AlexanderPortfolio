// TODO: replace with your own projects
const projects = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and what you used to build it.',
    tags: ['React', 'JavaScript'],
    repoUrl: 'https://github.com/AlexanderB0k/',
    liveUrl: '',
  },
  {
    title: 'Project Two',
    description:
      'Another project description. Explain the problem it solves and your role in building it.',
    tags: ['Node.js', 'Express'],
    repoUrl: 'https://github.com/AlexanderB0k/',
    liveUrl: '',
  },
  {
    title: 'Project Three',
    description:
      'A third project to round out your portfolio. Swap this out for real work whenever you have it.',
    tags: ['Python'],
    repoUrl: 'https://github.com/AlexanderB0k/',
    liveUrl: '',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="project-links">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
