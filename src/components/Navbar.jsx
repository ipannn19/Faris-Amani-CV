import { useState, useEffect } from 'react'
import { navLinks } from '../data/portfolio'
import NavIcon from './NavIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="navbar__monogram">FA</span>
          <span className="navbar__brand-text">Faris Amani</span>
        </a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`navbar__link navbar__link--${link.id}`}
              onClick={() => handleNav(link.id)}
            >
              <span className="navbar__link-text">{link.label}</span>
              <span className="navbar__link-icon">
                <NavIcon id={link.id} />
              </span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
