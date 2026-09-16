import { useEffect, useRef, useState } from 'react'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiGit,
  SiFigma,
  SiWordpress,
} from 'react-icons/si'
import { GrAdobeCreativeCloud } from 'react-icons/gr'
import './Skills.css'

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Adobe Creative Cloud', icon: GrAdobeCreativeCloud, color: '#DA1F26' },
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
]

function Skills() {
  const titleRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skill-container">
      <div ref={titleRef} className={`skill-title ${visible ? 'visible' : ''}`}>
        <h1>Skills</h1>
      </div>
      <div className="skills-items">
        {skills.map(({ name, icon: Icon, color }) => (
          <div key={name} className="skill">
            <Icon className="skill-icon" fill={color} aria-hidden="true" />
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
