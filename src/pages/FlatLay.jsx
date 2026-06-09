import { Link } from 'react-router-dom'
import './FlatLay.css'

export default function FlatLay() {
  return (
    <div className="fl-page fade-in-up">

      {/* 1. Hero Section */}
      <section className="fl-hero-s">
        <div className="container">
          <div className="fl-hero-c">
            <div className="fl-hero-content">
              <h1 className="fl-hero-h1">Bring flat lay photos to life</h1>
              <p className="fl-hero-description">
                Stuck with only flat lay photos? Now you can turn them into on model images in minutes. Show more angles, more looks & more ways to wear.
              </p>
              <div className="fl-hero-btns-c">
                <Link to="/contact" className="fl-btn-primary" id="product_flatlay_header_getstarted">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.88454 1.88086L10.1999 6.00007L5.88454 10.1193" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.1999 6L1.79996 6" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/contact" className="fl-btn-secondary" id="product_flatlay_header_bookcall">
                  Book a Call
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.88454 1.88086L10.1999 6.00007L5.88454 10.1193" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.1999 6L1.79996 6" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="fl-hero-img-grid">
              <div className="fl-hero-grid-left">
                <img
                  alt="Flat lay shirt"
                  src="/images/fl1.png"
                  className="fl-hero-grid-left-img"
                />
                <img
                  alt="Flat lay shorts"
                  src="/images/fl2.png"
                  className="fl-hero-grid-left-img"
                />
              </div>
              <div className="fl-hero-grid-right">
                <img
                  alt="On model result"
                  src="/images/fl3.png"
                  className="fl-hero-grid-right-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Steps Section */}
      <section className="fl-steps-s">
        <div className="container">
          <div className="fl-steps-c">

            <div className="fl-steps-title-c">
              <h2 className="fl-steps-h2">How to bring flat lay photos to life</h2>
              <p className="fl-steps-description">
                Bring your designs to life on a model in minutes. Garments remain flawless in every texture and pattern while AI turns flat lays into true-to-life visuals.
              </p>
            </div>

            <div className="fl-steps-grid">
              {/* Step 01 */}
              <div className="fl-steps-item">
                <div className="fl-steps-item-content">
                  <div className="fl-steps-item-count">01</div>
                  <h3 className="fl-steps-item-h3">Upload your flat lay photos</h3>
                  <p className="fl-steps-item-text">
                    Upload your flat lay photos to start transforming it into on model content.
                  </p>
                </div>
                <div className="fl-steps-img-c">
                  <img
                    src="/images/ft11.png"
                    loading="lazy"
                    alt="Upload flat lay"
                    className="img-cover"
                  />
                </div>
              </div>

              {/* Step 02 */}
              <div className="fl-steps-item reverse">
                <div className="fl-steps-item-content">
                  <div className="fl-steps-item-count">02</div>
                  <h3 className="fl-steps-item-h3">Pick Your Model</h3>
                  <p className="fl-steps-item-text">
                    Pick one of our stylish, runway-caliber AI models to bring your flat lay to life.
                  </p>
                </div>
                <div className="fl-steps-img-c">
                  <img src="/images/all-mod.png" alt="All available AI models" className="img-cover" />
                </div>
              </div>

              {/* Step 03 */}
              <div className="fl-steps-item">
                <div className="fl-steps-item-content">
                  <div className="fl-steps-item-count">03</div>
                  <h3 className="fl-steps-item-h3">Pick your background</h3>
                  <p className="fl-steps-item-text">
                    Choose a background that highlights your new on model image.
                  </p>
                </div>
                <div className="fl-steps-img-c">
                  <img src="/images/bg.png" alt="Available backgrounds" className="img-cover" />
                </div>
              </div>

              <div className="fl-steps-grid-line"></div>
              <div className="fl-steps-item-ball"></div>
            </div>

            {/* Result section */}
            <div className="fl-steps-results">
              <div className="fl-steps-results-title">
                <div className="fl-tag">Result</div>
                <h2 className="fl-steps-h2">Voila, meet your finished images</h2>
                <p className="fl-steps-description product">
                  Get your final, ready-to-use visuals in just a click. Perfect for product pages, campaigns or social.
                </p>
              </div>

              <div className="fl-steps-results-grid">
                <div className="fl-steps-results-grid-img-c left">
                  <img
                    src="/images/fn22.png"
                    loading="lazy"
                    alt="AI on model result 1"
                    className="fl-steps-results-grid-img"
                  />
                </div>
                <div className="fl-steps-results-grid-img-c center">
                  <img
                    src="/images/fn11.png"
                    loading="lazy"
                    alt="AI on model result 2"
                    className="fl-steps-results-grid-img"
                  />
                </div>
                <div className="fl-steps-results-grid-img-c right">
                  <img
                    src="/images/fl3.png"
                    loading="lazy"
                    alt="AI on model result 3"
                    className="fl-steps-results-grid-img"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ed-footer-cta-s">
        <div className="container">
          <div className="ed-cta-card">
            <h2 className="fl-steps-h2" style={{ textAlign: 'center' }}>Ready to Create Your Campaign?</h2>
            <p className="fl-steps-description" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              Drapeify handles traditional wear, cosmetics, intimates, and everyday clothing with maximum texture realism. Start creating today.
            </p>
            <div className="ed-cta-btn-c">
              <Link to="/contact" className="fl-btn-primary" id="sol_ed_footer_getstarted">
                Book a Brand Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
