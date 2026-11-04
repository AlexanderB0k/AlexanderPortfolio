import useTypewriter from '../hooks/useTypewriter'
import useRotatingWords from '../hooks/useRotatingWords'

// the titles that cycle after "I am a"
const roles = ['Designer', 'Developer', 'UI/UX Designer', 'Product Designer']

function Hero() {
  // TODO: swap in your own name
  const name = useTypewriter('Alexander', 130)
  const { word, fading } = useRotatingWords(roles, 2200, 300)

  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <h1>
          Hi, I'm <span className="typing-name">{name}</span>
          <span className="typing-cursor">|</span>
        </h1>
        {/* left-aligned with the name: "I am a" is a quiet lead-in, the changing title is the emphasis */}
        <p className="about-role" style={{ fontSize: '28px', lineHeight: 1.2 }}>
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>I am a </span>
          {/* every title sits in the same grid cell, so the slot is always as wide as the longest one and nothing shifts */}
          <span style={{ display: 'inline-grid' }}>
            {roles.map((role) => {
              const active = role === word
              return (
                <span
                  key={role}
                  aria-hidden={!active}
                  style={{
                    gridArea: '1 / 1',
                    whiteSpace: 'nowrap',
                    opacity: active && !fading ? 1 : 0,
                    transform: active && !fading ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 300ms ease, transform 300ms ease',
                  }}
                >
                  {role}
                </span>
              )
            })}
          </span>
        </p>
        <p
          style={{
            marginTop: '16px',
            maxWidth: '460px',
            color: '#fff',
            fontSize: '22px',
            lineHeight: 1.6,
          }}
        >
          who is passionate and ready for any challenge. I am willing to learn new skills and
          flourish in any environment I am placed into
        </p>
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
