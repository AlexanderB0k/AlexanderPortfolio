function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>
        {/* TODO: adjust the call to action */}
        Want to work together or just say hi? Reach out below.
      </p>
      <div className="contact-links">
        {/* TODO: replace with your real email and profile links */}
        <a href="mailto:you@example.com">you@example.com</a>
        <a href="https://github.com/AlexanderB0k" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
