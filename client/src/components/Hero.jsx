import useTypewriter from '../hooks/useTypewriter'

function Hero() {
  // TODO: swap in your own name
  const name = useTypewriter('Alexander', 130)

  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <h1>
          Hi, I'm <span className="typing-name">{name}</span>
          <span className="typing-cursor">|</span>
        </h1>
        <p className="about-role">Developer &amp; Designer</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View my work
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
      <img
        className="hero-avatar"
        src="/images/alexander-photo.jpg"
        alt="Alexander Bok"
      />
    </section>
  )
}

export default Hero
