import { Link } from 'react-router-dom'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-h2">
            Transform photoshoots and get flawless results in no time
          </h2>
          <div className="buttons-row" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary dark">Get Started</Link>
            <Link to="/contact" className="btn-primary" style={{ background: '#e0e0e0', color: '#1a1a1a', border: 'none' }}>
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
