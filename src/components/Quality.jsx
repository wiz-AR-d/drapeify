import './Quality.css'

export default function Quality() {
  return (
    <section className="quality-section">
      <div className="container">
        <div className="quality-content">
          <h2 className="quality-h2">Guaranteed quality at any scale</h2>
          <p className="quality-subtitle">
            From fashion-trained AI to our dedicated retouching workflows, every asset is refined to match your brand's style and standards.
          </p>
        </div>
        <div className="quality-grid">
          <div className="quality-card">
            <div className="quality-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="quality-card-title">Fashion-Trained AI</h3>
            <p className="quality-card-text">Purpose-built models trained on millions of fashion images for photorealistic results.</p>
          </div>
          <div className="quality-card">
            <div className="quality-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <h3 className="quality-card-title">Diverse Models</h3>
            <p className="quality-card-text">Generate AI models of any ethnicity, body type, age, and style to match your audience.</p>
          </div>
          <div className="quality-card">
            <div className="quality-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <h3 className="quality-card-title">Expert Retouching</h3>
            <p className="quality-card-text">Every image is retouched to perfection by our dedicated team of fashion imaging specialists.</p>
          </div>
          <div className="quality-card">
            <div className="quality-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <h3 className="quality-card-title">Brand Consistency</h3>
            <p className="quality-card-text">Maintain consistent style, lighting, and mood across thousands of product images.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
