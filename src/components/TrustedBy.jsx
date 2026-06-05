import './TrustedBy.css'

const logos = [
  { name: 'JO+CO', style: { fontFamily: 'serif', fontSize: '2rem', letterSpacing: '0.05em' } },
  { name: 'LOULOU', style: { fontFamily: 'serif', fontSize: '1.8rem', letterSpacing: '0.15em', fontWeight: 300 } },
  { name: 'MEOTINE', style: { fontSize: '1.6rem', letterSpacing: '0.2em', fontWeight: 400 } },
  { name: 'FOREVER 21', style: { fontSize: '2.2rem', letterSpacing: '0.05em', fontWeight: 800 } },
  { name: 'PERRY ELLIS', style: { fontSize: '1.4rem', letterSpacing: '0.25em', fontWeight: 400 } },
  { name: 'NIL+MON', style: { fontSize: '1.6rem', letterSpacing: '0.1em', fontWeight: 600 } },
  { name: 'JORDACHE', style: { fontFamily: 'serif', fontSize: '1.6rem', letterSpacing: '0.08em', fontStyle: 'italic' } },
  { name: 'HELIOT EMIL', style: { fontSize: '1.3rem', letterSpacing: '0.2em', fontWeight: 300 } },
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
