import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Want to work together or just say hi? Reach out below.</p>
      <div className="contact-links">
        <a href="mailto:aalexanderb0k@gmail.com">
          <SiGmail size={18} />
          aalexanderb0k@gmail.com
        </a>
        <a href="https://github.com/AlexanderB0k" target="_blank" rel="noreferrer">
          <FaGithub size={18} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-bok-74b30724a/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={18} />
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
