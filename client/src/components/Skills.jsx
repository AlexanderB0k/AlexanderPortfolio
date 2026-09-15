import { useEffect, useRef, useState } from 'react'
import './Skills.css'

// TODO: replace with your own skills (and swap emoji for real icons/an icon library if you like)
const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'HTML & CSS', icon: '🎨' },
  { name: 'Git', icon: '🔧' },
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
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <span className="skill-icon" aria-hidden="true">
              {skill.icon}
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
