import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const DrapeifyLogo = () => (
  <div className="nav-logo-text">
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer D shape — vertical stem + rounded bowl */}
      <path
        d="M18 8 L18 112 L20 112 L20 8 Z"
        fill="currentColor"
      />
      {/* Rounded bowl of the D */}
      <path
        d="M19 8 C19 8 72 8 78 14 C90 26 90 50 90 60 C90 70 90 94 78 106 C72 112 19 112 19 112"
        stroke="currentColor"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      {/* Flowing leaf curve 1 — main sweep */}
      <path
        d="M28 28 C38 35 70 42 72 62 C74 80 55 92 38 98"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Flowing leaf curve 2 — inner secondary sweep */}
      <path
        d="M28 40 C42 48 62 56 62 72 C62 84 50 94 38 100"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
    <span className="logo-name">DRAPEIFY</span>
  </div>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const dropdowns = {
    Product:   ['Model Gallery'],
    Solutions: ['Cut production costs', 'Get to market faster', 'Create editorials', 'Increase diversity'],
  }

  const getHref = (item) => {
    if (item === 'Model Gallery') return '/models'
    return '#'
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        {/* Mobile logo */}
        <Link to="/" className="nav-logo-mobile">
          <DrapeifyLogo />
        </Link>

        {/* Left: Logo + Links (becomes mobile drawer) */}
        <div className={`nav-left ${mobileOpen ? 'open' : ''}`}>

          <Link to="/" className="nav-logo-desktop">
            <DrapeifyLogo />
          </Link>

          <div className="nav-links">
            {Object.entries(dropdowns).map(([name, items]) => (
              <div
                key={name}
                className={`nav-dropdown ${activeDropdown === name ? 'active' : ''}`}
                onMouseEnter={() => setActiveDropdown(name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="nav-link nav-dropdown-toggle"
                  onClick={() => setActiveDropdown(activeDropdown === name ? null : name)}
                >
                  {name}
                </button>
                <div className="nav-dropdown-menu">
                  <div className="nav-dropdown-content">
                    {items.map(item => (
                      <Link 
                        key={item} 
                        to={getHref(item)} 
                        className="nav-dropdown-link"
                        onClick={() => {
                          setMobileOpen(false)
                          setActiveDropdown(null)
                          window.scrollTo(0, 0)
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <a href="#" className="nav-link">Pricing</a>
          </div>

          <div className="nav-cta mobile-cta">
            <Link 
              to="/contact" 
              className="btn-primary dark nav-btn" 
              onClick={() => {
                setMobileOpen(false)
                window.scrollTo(0, 0)
              }}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right: Contact Us + Get Started */}
        <div className="nav-cta desktop-cta">
          <Link 
            to="/contact" 
            className="nav-link contact-link desktop-only"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact Us
          </Link>
          <Link 
            to="/contact" 
            className="btn-primary dark nav-btn" 
            id="header_getstarted"
            onClick={() => window.scrollTo(0, 0)}
          >
            Get Started
          </Link>
        </div>

        {/* Burger */}
        <button
          className={`nav-burger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  )
}
