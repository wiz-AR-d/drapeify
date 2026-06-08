import './TrustedBy.css'

const logos = [
  { name: '99Shadesff', style: { fontFamily: 'serif', fontSize: '2rem', letterSpacing: '0.05em' } },
  { name: 'Narie Sarees', style: { fontSize: '1.8rem', letterSpacing: '0.1em', fontWeight: 400 } },
  { name: 'Swadeshi Videshi', style: { fontSize: '1.6rem', letterSpacing: '0.15em', fontWeight: 600 } },
  { name: 'ThreadZ', style: { fontFamily: 'serif', fontSize: '2.2rem', letterSpacing: '0.05em', fontWeight: 800 } },
  { name: 'Axomiya buwari', style: { fontSize: '1.5rem', letterSpacing: '0.2em', fontWeight: 300 } },
]

export default function TrustedBy() {
  return (
    <section className="trusted-by-section">
      <div className="container">
        <div className="trusted-by-content">
          <h2 className="trusted-by-title">Top fashion creative teams choose Drapeify</h2>
          <div className="trusted-by-logos-wrapper">
            <div className="trusted-by-logos-track">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="trusted-by-logo-item">
                  <span style={logo.style}>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
