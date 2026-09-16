import { useEffect, useState } from 'react'
import './Header.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '/alexander-bok-resume.pdf', label: 'Resume', external: true },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-left">
          <a className="nav-title" href="#top">
            {/* TODO: your name */}
            <span>Alexander</span>
          </a>
        </div>

        <div
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <div className="top" />
          <div className="meat" />
          <div className="bottom" />
        </div>

        <div className={`nav-links ${open ? 'active' : ''}`}>
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ) : (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
