import { FaArrowRightLong } from 'react-icons/fa6'

const projects = [
  {
    title: 'Quoth the Raven',
    role: 'Front-end Programmer & UI/UX Designer',
    description:
      "A cutesy-horror top-down roguelite built in Godot with a team of 5. Designed and implemented the game's UI systems — pause and main menus, item interaction, and core player/enemy mechanics — while running sprint planning in Jira.",
    tags: ['Godot', 'C#', 'Figma', 'Photoshop', 'Git/GitHub'],
    infoUrl: 'https://not-phoeniix.itch.io/quoth-the-raven',
    media: {
      type: 'image',
      src: '/images/quoth-the-raven-banner.png',
      alt: 'Quoth the Raven pixel-art title logo',
    },
  },
  {
    title: 'Looking for Group',
    role: 'Front-end Programmer',
    description:
      "A team-formation platform for RIT's College of Computing and Information Sciences (GCCIS). Students post and browse projects — games, apps, websites, film, and more — and recruit collaborators by role: developers, designers, audio creators, and engineers.",
    tags: ['Front-end Development', 'Figma', 'VS Code', 'UI Design', 'Team Project'],
    infoUrl: 'https://lfg.gccis.rit.edu/',
    media: {
      type: 'placeholder',
      key: 'lfg',
      label: 'LFG',
    },
  },
  {
    title: 'CR3D',
    role: 'Product Designer Intern — RIT Saunders Kozel Team',
    description:
      '"Play More." CR3D is the homebase for casual athletes to stay connected to their people and their sports — coordinating pickup games, leagues, and play history across golf, basketball, tennis, pickleball, and more. Designed 30+ logo concepts and 20+ wireframes/UI mockups to establish the visual identity, and ran 200+ user interviews that directly shaped the product roadmap.',
    tags: ['Figma', 'UI/UX Design', 'User Research', 'Prototyping', 'Brand Identity'],
    infoUrl: 'https://cr3d.org/',
    media: {
      type: 'placeholder',
      key: 'cr3d',
      label: 'CR3D',
    },
  },
]

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
          <article key={project.title} className="project-card">
            <div className="project-card-header">
              <h3>{project.title}</h3>
              {project.infoUrl && (
                <a
                  className="project-more-info"
                  href={project.infoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  More info
                  <FaArrowRightLong aria-hidden="true" />
                </a>
              )}
            </div>

            <a
              className="project-role"
              href={project.infoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.role}
            </a>

            <p className="project-description">{project.description}</p>

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
