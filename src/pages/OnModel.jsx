import { Link } from 'react-router-dom'
import './OnModel.css'

export default function OnModel() {
  return (
    <div className="tpp-page fade-in-up">

      {/* 1. Hero Section — exact Botika layout */}
      <section className="tpp-hero-s">
        <div className="container">
          <div className="tpp-hero-c">
            <div className="tpp-hero-content">
              <h1 className="tpp-hero-h1">On model has never been easier</h1>
              <p className="tpp-hero-description">
                Say goodbye to costly shoots. Generate stunningly realistic on model imagery that's fast, flexible, and made for fashion brands.
              </p>
              <div className="tpp-hero-btns-c">
                <Link to="/contact" className="tpp-btn-primary" id="product_onmodel_header_getstarted">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.88454 1.88086L10.1999 6.00007L5.88454 10.1193" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.1999 6L1.79996 6" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/contact" className="tpp-btn-secondary" id="product_onmodel_header_bookcall">
                  Book a Call
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.88454 1.88086L10.1999 6.00007L5.88454 10.1193" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.1999 6L1.79996 6" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="tpp-hero-img-c">
              <img
                alt="AI on model fashion model showing how the product changes from one image to another seamlessly."
                src="/images/onmodel-top.png"
                className="tpp-hero-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Steps Section — exact Botika alternating grid */}
      <section className="tpp-steps-s">
        <div className="container">
          <div className="tpp-steps-c">

            <div className="tpp-steps-title-c">
              <h2 className="tpp-steps-h2">On model, simplified</h2>
              <p className="tpp-steps-description">
                Pose and size stay the same for maximum on model accuracy. Upgrade/swap
                models and backgrounds for one product or your whole collection.
              </p>
            </div>

            <div className="tpp-steps-grid">
              {/* Step 01 — content left, image right */}
              <div className="tpp-steps-item">
                <div className="tpp-steps-item-content">
                  <div className="tpp-steps-item-count">01</div>
                  <h3 className="tpp-steps-item-h3">Upload your product photo</h3>
                  <p className="tpp-steps-item-text">
                    Start with an on model photo; professional, casual, cropped or headless.
                  </p>
                </div>
                <div className="tpp-steps-img-c">
                  <img
                    src="/images/bad-onmod.png"
                    loading="lazy"
                    alt="Screenshot of the create screen in the Drapeify on model product workflow."
                    className="img-cover"
                  />
                </div>
              </div>

              {/* Step 02 — content right, image left (reverse) */}
              <div className="tpp-steps-item reverse">
                <div className="tpp-steps-item-content">
                  <div className="tpp-steps-item-count">02</div>
                  <h3 className="tpp-steps-item-h3">Pick Your Model</h3>
                  <p className="tpp-steps-item-text">
                    Pick one of our stylish, runway-caliber AI models.
                  </p>
                </div>
                <div className="tpp-steps-img-c">
                  <img src="/images/all-mod.png" alt="All available AI models" className="img-cover" />
                </div>
              </div>

              {/* Step 03 — content left, image right */}
              <div className="tpp-steps-item">
                <div className="tpp-steps-item-content">
                  <div className="tpp-steps-item-count">03</div>
                  <h3 className="tpp-steps-item-h3">Pick your background</h3>
                  <p className="tpp-steps-item-text">
                    Go clean, bold or on-location;{' '}
                    it's your call.
                  </p>
                </div>
                <div className="tpp-steps-img-c">
                  <img src="/images/bg.png" alt="Available backgrounds" className="img-cover" />
                </div>
              </div>

              {/* Center dashed timeline line */}
              <div className="tpp-steps-grid-line"></div>
              {/* Moving ball on the timeline */}
              <div className="tpp-steps-item-ball"></div>
            </div>

            {/* Result section */}
            <div className="tpp-steps-results">
              <div className="tpp-steps-results-title">
                <div className="tpp-tag">Result</div>
                <h2 className="tpp-steps-h2">Voila, meet your finished images</h2>
                <p className="tpp-steps-description product">
                  Get your final, ready-to-use visuals in just a click. Perfect for product pages, campaigns or social.
                </p>
              </div>

              <div className="tpp-steps-results-grid">
                <div className="tpp-steps-results-grid-img-c left">
                  <img
                    src="/images/on1.png"
                    loading="lazy"
                    alt="AI on model with beach background"
                    className="tpp-steps-results-grid-img"
                  />
                </div>
                <div className="tpp-steps-results-grid-img-c center">
                  <img
                    src="/images/on2.png"
                    loading="lazy"
                    alt="AI on model with ancient columns background"
                    className="tpp-steps-results-grid-img"
                  />
                </div>
                <div className="tpp-steps-results-grid-img-c right">
                  <img
                    src="/images/on3.png"
                    loading="lazy"
                    alt="AI on model with urban street background"
                    className="tpp-steps-results-grid-img"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
