import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import projects from '../data/projects'

function ProjectMedia({ media }) {
  if (media.type === 'image') {
    return (
      <div className="project-media">
        <img src={media.src} alt={media.alt} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`project-media project-media-placeholder project-media-${media.key}`}>
      <span>{media.label}</span>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-stack">
        {projects.map((project) => (
          <article key={project.slug} className="project-card">
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <Link className="project-more-info" to={`/projects/${project.slug}`}>
                More info
                <FaArrowRightLong aria-hidden="true" />
              </Link>
            </div>

            <p className="project-role">{project.role}</p>

            <p className="project-description">{project.summary}</p>

            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>

            <ProjectMedia media={project.media} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
