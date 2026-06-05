import { useState, useEffect } from 'react'
import './Navbar.css'

const DrapeifyLogo = () => (
  <div className="nav-logo-text">
    <svg width="22" height="22" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8769 11.8759C10.9157 12.8361 9.59589 13.4284 8.1346 13.4294C6.6733 13.4294 5.35353 12.8371 4.39121 11.8759C4.25284 11.7375 4.12391 11.5887 4.00126 11.4356C4.12391 11.2826 4.25284 11.1348 4.39121 10.9953C5.35353 10.0351 6.67226 9.44179 8.1346 9.44179C9.59589 9.44179 10.9157 10.0341 11.8769 10.9953C12.0153 11.1337 12.1442 11.2826 12.2669 11.4356C12.1442 11.5887 12.0163 11.7375 11.8769 11.8759ZM2.83767 8.1325V2.83663H8.13355C9.59484 2.83663 10.9146 3.4289 11.8759 4.39017C12.8371 5.35248 13.4294 6.67121 13.4294 8.13355C13.4294 8.27611 13.4189 8.41553 13.4085 8.55495C11.988 7.3421 10.1483 6.60621 8.13355 6.60517C6.11877 6.60517 4.27905 7.3421 2.85864 8.55495C2.84711 8.41553 2.83767 8.27611 2.83767 8.13355M13.4305 14.7398C13.4305 16.2011 12.8382 17.5208 11.8769 18.4821C10.9157 19.4434 9.59589 20.0356 8.1346 20.0356H2.83872V14.7398C2.83872 14.5972 2.84921 14.4578 2.85969 14.3184C4.2801 15.5312 6.11982 16.2681 8.1346 16.2681C10.1494 16.2681 11.9891 15.5312 13.4095 14.3184C13.42 14.4578 13.4305 14.5982 13.4305 14.7398ZM16.2671 8.13355C16.2671 3.6417 12.6264 0.00104827 8.13355 0H0V8.13355C0 9.31076 0.255779 10.4261 0.705488 11.4367C0.255779 12.4472 0 13.5626 0 14.7398V22.8733H8.13355C12.6254 22.8733 16.266 19.2327 16.2671 14.7398C16.2671 13.5626 16.0113 12.4472 15.5616 11.4367C16.0113 10.4272 16.2671 9.31076 16.2671 8.13355Z" fill="currentColor"/>
    </svg>
    <span className="logo-name">DRAPEIFY</span>
  </div>
)

const ChevronDown = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="currentColor"/>
  </svg>
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
    Product:   ['Model Gallery', 'On Model', 'Flat Lay', 'Mannequin', 'Video'],
    Solutions: ['Cut production costs', 'Get to market faster', 'Create editorials', 'Increase diversity'],
    Resources: ['Help Center', 'Blog', 'Case Studies', 'FAQs', 'Creative Partner Program'],
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        {/* ── Mobile logo (outside the drawer) ── */}
        <a href="/" className="nav-logo-mobile">
          <DrapeifyLogo />
        </a>

        {/* ── Left: Logo + Links (becomes mobile drawer) ── */}
        <div className={`nav-left ${mobileOpen ? 'open' : ''}`}>

          <a href="/" className="nav-logo-desktop">
            <DrapeifyLogo />
          </a>

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
                  <ChevronDown />
                </button>
                <div className="nav-dropdown-menu">
                  <div className="nav-dropdown-content">
                    {items.map(item => (
                      <a key={item} href="#" className="nav-dropdown-link">{item}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <a href="#" className="nav-link">Pricing</a>
          </div>

          {/* Mobile-only CTA inside drawer */}
          <div className="nav-cta mobile-cta">
            <a href="#" className="btn-primary dark nav-btn">Get Started</a>
          </div>
        </div>

        {/* ── Right: Contact Us + Get Started ── */}
        <div className="nav-cta desktop-cta">
          <a href="#" className="nav-link contact-link desktop-only">Contact Us</a>
          <a href="#" className="btn-primary dark nav-btn" id="header_getstarted">Get Started</a>
        </div>

        {/* ── Burger ── */}
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
