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
        <p className="tagline">
          {/* TODO: one or two sentences describing what you do */}
          I build things for the web. This is my portfolio, showcasing
          projects I've worked on and how to reach me.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View my work
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
      {/* TODO: replace with a real photo/avatar in src/assets and import it here */}
      <div className="hero-avatar" aria-hidden="true">
        A
      </div>
    </section>
  )
}

export default Hero
