import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/AlexanderB0k',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alexander-bok-74b30724a/',
    icon: FaLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:aalexanderb0k@gmail.com',
    icon: SiGmail,
  },
]

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-socials">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
            aria-label={label}
            title={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
