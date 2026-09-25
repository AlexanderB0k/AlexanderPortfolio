import { Link, useParams } from 'react-router-dom'
import { FaArrowLeftLong, FaArrowUpRightFromSquare, FaPalette, FaFigma } from 'react-icons/fa6'
import { SiGodotengine } from 'react-icons/si'
import projects from '../data/projects'

const impactIcons = {
  palette: FaPalette,
  figma: FaFigma,
  godot: SiGodotengine,
}

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

// Shows a real image when one is set in projects.js, otherwise a grey placeholder box.
function ProjectPhoto({ image, className }) {
  if (image) {
    return (
      <div className={`project-photo ${className}`}>
        <img src={image.src} alt={image.alt} loading="lazy" />
      </div>
    )
  }
  return <div className={`project-photo project-photo-placeholder ${className}`} aria-hidden="true" />
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
        {project.overviewColumns || (project.whatIDidIntro && project.overview) ? (
          <>
            <hr className="project-divider" />
            <div className="project-overview-columns">
              {(project.overviewColumns || [project.overview]).map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </>
        ) : project.gallery ? (
          <>
            <h2>Overview</h2>
            <div className="project-overview project-overview-with-gallery">
              <div className={`project-overview-grid project-overview-grid-${project.slug}`}>
                {project.gallery.map((img, index) =>
                  project.galleryPlaceholders ? (
                    <div
                      className={`project-overview-grid-item project-overview-grid-item-placeholder item-${index + 1}`}
                      key={img.src}
                      aria-hidden="true"
                    />
                  ) : (
                    <div className={`project-overview-grid-item item-${index + 1}`} key={img.src}>
                      <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </>
        ) : null}

        {project.whatIDidIntro ? (
          <section className="project-section">
          <h2 className="project-section-title">What I did in the project</h2>
          <div className="project-narrative">
            <div className="project-narrative-row project-narrative-row-lead">
              <div className="project-narrative-lead">
                <p>{project.whatIDidIntro}</p>
              </div>
              <ProjectPhoto image={project.whatIDidImages?.lead} className="project-photo-lg" />
            </div>

            <div className="project-narrative-row">
              <div className="project-photo-stack">
                <ProjectPhoto image={project.whatIDidImages?.stackTop} className="project-photo-sm" />
                <ProjectPhoto image={project.whatIDidImages?.stackBottom} className="project-photo-sm" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {project.whatIDidBlocks
                  ? project.whatIDidBlocks.map((block, index) => <p key={index}>{block.text}</p>)
                  : <p>{project.whatIDidText}</p>}
              </div>
            </div>

            <ProjectPhoto image={project.whatIDidImages?.full} className="project-photo-full" />
          </div>
          </section>
        ) : (
          <>
            <h2>What I did</h2>
            <ul className="project-highlights">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </>
        )}

        {project.impact && (
          <section className="project-section">
            <h2 className="project-section-title">What impact did I make on the team?</h2>
            <div className="project-impact-list">
              {project.impact.map((item) => {
                const Icon = impactIcons[item.icon]
                return (
                  <div className="project-impact-item" key={item.role}>
                    <h3 className="project-impact-role">{item.role}</h3>
                    <span className="project-impact-icon">
                      {Icon && <Icon aria-hidden="true" />}
                    </span>
                    <p>{item.text}</p>
                  </div>
                )
              })}
            </div>
          </section>
        )}

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
    </section>
  )
}

export default ProjectDetail
