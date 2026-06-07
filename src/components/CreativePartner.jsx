import { Link } from 'react-router-dom'
import './CreativePartner.css'

export default function CreativePartner() {
  return (
    <section className="partner-section">
      {/* ── Real image forces section to match exact dimensions ── */}
      <div className="partner-bg-wrapper">
        <img 
          src="/images/perfumecatalog.png" 
          alt="Perfume catalog background" 
          className="partner-bg-img"
        />
        <div className="partner-bg-overlay"></div>
      </div>
      
      {/* ── Content positioned absolutely over the image ── */}
      <div className="container absolute-container">
        <div className="partner-content">
          <div className="partner-text">
            <h2 className="partner-h2">
              Drapeify's Creative<br />Partner Program
            </h2>
            <p className="partner-description">
              Ready to showcase what's possible with AI fashion? Create high-end fashion visuals and grow your digital presence with Drapeify.
            </p>
            <Link to="/contact" className="btn-primary solid-white">
              Apply Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
