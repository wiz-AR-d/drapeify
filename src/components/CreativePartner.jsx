import './CreativePartner.css'

export default function CreativePartner() {
  return (
    <section className="partner-section">
      <div className="container">
        <div className="partner-content">
          <div className="partner-text">
            <h2 className="partner-h2">
              Drapeify's Creative<br />Partner Program
            </h2>
            <p className="partner-description">
              Ready to showcase what's possible with AI fashion? Create high-end fashion visuals and grow your digital presence with Drapeify.
            </p>
            <a href="#" className="btn-primary dark">
              Apply Here
            </a>
          </div>
          <div className="partner-image">
            <img 
              src="/images/carousel_mannequin.png" 
              alt="Creative Partner Program" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
