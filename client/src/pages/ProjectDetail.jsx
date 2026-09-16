import { Link, useParams } from 'react-router-dom'
import { FaArrowLeftLong, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import projects from '../data/projects'

function ProjectDetailMedia({ media }) {
  if (media.type === 'image') {
    return (
      <div className="project-detail-media">
        <img src={media.src} alt={media.alt} loading="lazy" />
      </div>
    )
  }

  return (
    <div
      className={`project-detail-media project-media-placeholder project-media-${media.key}`}
    >
      <span>{media.label}</span>
    </div>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="section project-detail-notfound">
        <h2>Project not found</h2>
        <p>That project doesn&apos;t exist (yet).</p>
        <Link className="btn btn-secondary" to="/#projects">
          Back to projects
        </Link>
      </section>
    )
  }

  return (
    <section className="section project-detail">
      <Link className="project-back-link" to="/#projects">
        <FaArrowLeftLong aria-hidden="true" />
        Back to projects
      </Link>

      <h1 className="project-detail-title">{project.title}</h1>
      <p className="project-detail-role">{project.role_detail || project.role}</p>

      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      <ProjectDetailMedia media={project.media} />

      <div className="project-detail-body">
        <h2>Overview</h2>
        <div className={project.gallery ? 'project-overview project-overview-with-gallery' : 'project-overview'}>
          {project.gallery && (
            <div className={`project-overview-grid project-overview-grid-${project.slug}`}>
              {project.gallery.map((img, index) => (
                <div className={`project-overview-grid-item item-${index + 1}`} key={img.src}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          )}
        </div>

        <h2>What I did</h2>
        <ul className="project-highlights">
          {project.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        {project.externalUrl && (
          <a
            className="btn btn-primary project-external-btn"
            href={project.externalUrl}
            target="_blank"
            rel="noreferrer"
          >
            {project.externalLabel || 'Visit project'}
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        )}
      </div>

      <Link className="project-back-link project-back-link-bottom" to="/#projects">
        <FaArrowLeftLong aria-hidden="true" />
        Back to projects
      </Link>
    </section>
  )
}

export default ProjectDetail
