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
      {/* Outer D shape — vertical stem */}
      <path
        d="M19 8 L19 112"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Rounded bowl of the D */}
      <path
        d="M19 8 C19 8 72 8 78 14 C90 26 90 50 90 60 C90 70 90 94 78 106 C72 112 19 112 19 112"
        stroke="currentColor"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      {/* Flowing leaf curve 1 — main sweep */}
      <path
        d="M28 28 C38 35 70 42 72 62 C74 80 55 92 38 98"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Flowing leaf curve 2 — inner secondary sweep */}
      <path
        d="M28 40 C42 48 62 56 62 72 C62 84 50 94 38 100"
        stroke="currentColor"
        strokeWidth="3"
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
    Product:   ['Model Gallery', 'Flat Lay', 'Mannequin', 'On Model'],
    Solutions: ['Cut production cost', 'Go to market faster', 'Create editorials', 'Increase diversity'],
    Resources: ['Blog', 'FAQ'],
  }

  const getHref = (item) => {
    if (item === 'Model Gallery') return '/models'
    if (item === 'On Model') return '/products/on-model'
    if (item === 'Flat Lay') return '/products/flat-lay'
    if (item === 'Mannequin') return '/products/mannequin'
    if (item === 'Cut production cost') return '/solutions/cut-production-cost'
    if (item === 'Go to market faster') return '/solutions/go-to-market-faster'
    if (item === 'Create editorials') return '/solutions/create-editorials'
    if (item === 'Increase diversity') return '/solutions/increase-diversity'
    if (item === 'Blog') return '/blog'
    if (item === 'FAQ') return '/faq'
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
                    {items.map(item => {
                      const href = getHref(item)
                      const isInternal = href.startsWith('/')
                      const onClickHandler = () => {
                        setMobileOpen(false)
                        setActiveDropdown(null)
                        if (isInternal) {
                          window.scrollTo(0, 0)
                        }
                      }

                      if (isInternal) {
                        return (
                          <Link 
                            key={item} 
                            to={href} 
                            className="nav-dropdown-link"
                            onClick={onClickHandler}
                          >
                            {item}
                          </Link>
                        )
                      }

                      return (
                        <a 
                          key={item} 
                          href={href} 
                          className="nav-dropdown-link"
                          onClick={onClickHandler}
                        >
                          {item}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
            <Link 
              to="/pricing" 
              className="nav-link"
              onClick={() => {
                setMobileOpen(false)
                window.scrollTo(0, 0)
              }}
            >
              Pricing
            </Link>
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
