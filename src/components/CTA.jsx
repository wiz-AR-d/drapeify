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
            <a href="#" className="btn-primary white">Get Started</a>
            <a href="#" className="btn-primary outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
