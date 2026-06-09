import { Link } from 'react-router-dom'
import './Mannequin.css'

export default function Mannequin() {
  return (
    <div className="mq-page fade-in-up">

      {/* 1. Hero Section */}
      <section className="mq-hero-s">
        <div className="container">
          <div className="mq-hero-c">
            <div className="mq-hero-content">
              <h1 className="mq-hero-h1">Mannequin photography</h1>
              <p className="mq-hero-description">
                Turn your mannequin photography into stunning on model images in just a few clicks; no reshoots, no styling, no hassle.
              </p>
              <div className="mq-hero-btns-c">
                <Link to="/contact" className="mq-btn-primary" id="product_mannequin_header_getstarted">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.88454 1.88086L10.1999 6.00007L5.88454 10.1193" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.1999 6L1.79996 6" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/contact" className="mq-btn-secondary" id="product_mannequin_header_bookcall">
                  Book a Call
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.88454 1.88086L10.1999 6.00007L5.88454 10.1193" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.1999 6L1.79996 6" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mq-hero-img-pair">
              <img
                alt="Ghost mannequin product photo"
                src="/images/mqn1.png"
                className="mq-hero-pair-img"
              />
              <img
                alt="AI on model result"
                src="/images/mqn2.png"
                className="mq-hero-pair-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Steps Section */}
      <section className="mq-steps-s">
        <div className="container">
          <div className="mq-steps-c">

            <div className="mq-steps-title-c">
              <h2 className="mq-steps-h2">See mannequin photography transformed</h2>
              <p className="mq-steps-description">
                Bring your mannequin photography to life on a model in minutes. Garments remain flawless in every texture and pattern while Drapeify turns mannequin photos into true-to-life visuals.
              </p>
            </div>

            <div className="mq-steps-grid">
              {/* Step 01 */}
              <div className="mq-steps-item">
                <div className="mq-steps-item-content">
                  <div className="mq-steps-item-count">01</div>
                  <h3 className="mq-steps-item-h3">Upload your mannequin photography</h3>
                  <p className="mq-steps-item-text">
                    Start with a clear mannequin photo - smooth, wrinkle free, good lighting, and a simple background.
                  </p>
                </div>
                <div className="mq-steps-img-c">
                  <img
                    src="/images/mqc.png"
                    loading="lazy"
                    alt="Upload ghost mannequin photo"
                    className="img-cover"
                  />
                </div>
              </div>

              {/* Step 02 */}
              <div className="mq-steps-item reverse">
                <div className="mq-steps-item-content">
                  <div className="mq-steps-item-count">02</div>
                  <h3 className="mq-steps-item-h3">Pick Your Model</h3>
                  <p className="mq-steps-item-text">
                    Pick one of our stylish, runway-caliber AI models to bring your mannequin photography to life.
                  </p>
                </div>
                <div className="mq-steps-img-c">
                  <img src="/images/all-mod.png" alt="All available AI models" className="img-cover" />
                </div>
              </div>

              {/* Step 03 */}
              <div className="mq-steps-item">
                <div className="mq-steps-item-content">
                  <div className="mq-steps-item-count">03</div>
                  <h3 className="mq-steps-item-h3">Pick a Pose</h3>
                  <p className="mq-steps-item-text">
                    Find the right pose to match your style. Tailor the presentation to your brand's unique look.
                  </p>
                </div>
                <div className="mq-steps-img-c">
                  <img src="/images/mq-m.png" alt="Select AI model poses" className="img-cover" />
                </div>
              </div>

              {/* Step 04 */}
              <div className="mq-steps-item reverse">
                <div className="mq-steps-item-content">
                  <div className="mq-steps-item-count">04</div>
                  <h3 className="mq-steps-item-h3">Select your background</h3>
                  <p className="mq-steps-item-text">
                    Pick a backdrop that makes your on model image stand out and fits your collection.
                  </p>
                </div>
                <div className="mq-steps-img-c">
                  <img src="/images/bg.png" alt="Available backgrounds" className="img-cover" />
                </div>
              </div>

              <div className="mq-steps-grid-line"></div>
              <div className="mq-steps-item-ball"></div>
            </div>

            {/* Result section */}
            <div className="mq-steps-results">
              <div className="mq-steps-results-title">
                <div className="mq-tag">Result</div>
                <h2 className="mq-steps-h2">Voila, meet your finished images</h2>
                <p className="mq-steps-description product">
                  Get your final, ready-to-use visuals in just a click. Perfect for product pages, campaigns or social.
                </p>
              </div>

              <div className="mq-steps-results-grid">
                <div className="mq-steps-results-grid-img-c left">
                  <img
                    src="/images/mqn2.png"
                    loading="lazy"
                    alt="AI mannequin result 1"
                    className="mq-steps-results-grid-img"
                  />
                </div>
                <div className="mq-steps-results-grid-img-c center">
                  <img
                    src="/images/mymq1.png"
                    loading="lazy"
                    alt="AI mannequin result 2"
                    className="mq-steps-results-grid-img"
                  />
                </div>
                <div className="mq-steps-results-grid-img-c right">
                  <img
                    src="/images/mymq2.png"
                    loading="lazy"
                    alt="AI mannequin result 3"
                    className="mq-steps-results-grid-img"
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
            <h2 className="mq-steps-h2" style={{ textAlign: 'center' }}>Ready to Create Your Campaign?</h2>
            <p className="mq-steps-description" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              Drapeify handles traditional wear, cosmetics, intimates, and everyday clothing with maximum texture realism. Start creating today.
            </p>
            <div className="ed-cta-btn-c">
              <Link to="/contact" className="mq-btn-primary" id="sol_ed_footer_getstarted">
                Book a Brand Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
