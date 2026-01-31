import '../styles/navbar.css'
import { portfolio } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import logoUrl from '../assets/logo.svg'

export default function Navbar() {
  const { brand } = portfolio
  const links = [
    { label: 'Home', href: '#top', id: 'top' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Background', href: '#background', id: 'background' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]
  const activeId = useActiveSection(links.map((l) => l.id))

  return (
    <header className="navbar">
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top" aria-label={`${brand} (home)`}>
          <img className="navbar__logo" src={logoUrl} alt="" aria-hidden="true" />
          <span className="navbar__brandText">{brand}</span>
        </a>
        <nav className="navbar__links" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className={activeId === l.id ? 'isActive' : undefined}
              aria-current={activeId === l.id ? 'page' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

