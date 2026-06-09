import { Link } from 'react-router-dom'
import './Pricing.css'

export default function Pricing() {
  return (
    <div className="pricing-page fade-in-up">
      {/* ── TOP SECTION: TRIAL OFFER ── */}
      <section className="pricing-hero">
        <div className="container">
          <h1 className="pricing-h1">Simple, transparent pricing</h1>
          <p className="pricing-subtitle">
            Scale your fashion cataloging with photorealistic AI models. No studio coordination required.
          </p>

          <div className="trial-banner">
            <div className="trial-badge">Free Trial</div>
            <div className="trial-content">
              <h2>Try Drapeify for free</h2>
              <p>Experience the quality of AI fashion model photoshoots with zero commitment.</p>
              <div className="trial-features">
                <div className="trial-feature-item">
                  <span className="feature-number">5</span>
                  <span className="feature-label">Free Photoshoots</span>
                </div>
                <div className="trial-feature-item-divider"></div>
                <div className="trial-feature-item">
                  <span className="feature-number">1</span>
                  <span className="feature-label">Video Generation</span>
                </div>
              </div>
            </div>
            <div className="trial-cta">
              <Link to="/contact" className="btn-primary dark">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANS GRID SECTION ── */}
      <section className="plans-section">
        <div className="container">
          <div className="plans-grid">
            
            {/* ── BASIC PLAN ── */}
            <div className="plan-card">
              <div className="plan-header">
                <h3 className="plan-title">Basic</h3>
                <p className="plan-desc">Perfect for growing D2C brands starting with AI cataloging.</p>
                <div className="plan-price-row">
                  <span className="plan-currency">₹</span>
                  <span className="plan-price">1,999</span>
                  <span className="plan-period">/ month</span>
                </div>
              </div>
              <div className="plan-divider"></div>
              <div className="plan-body">
                <p className="plan-features-title">What's included:</p>
                <ul className="plan-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span><strong>5 SKUs</strong> (On-model photoshoots)</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Access to standard model gallery</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>High-resolution image downloads</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Standard email customer support</span>
                  </li>
                </ul>
              </div>
              <div className="plan-footer">
                <Link to="/contact" className="btn-primary outline plan-btn">
                  Choose Basic
                </Link>
              </div>
            </div>

            {/* ── PRO PLAN (MOST POPULAR) ── */}
            <div className="plan-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-header">
                <h3 className="plan-title">Pro</h3>
                <p className="plan-desc">Best for high-volume catalogs and campaign releases.</p>
                <div className="plan-price-row">
                  <span className="plan-currency">₹</span>
                  <span className="plan-price">4,999</span>
                  <span className="plan-period">/ month</span>
                </div>
              </div>
              <div className="plan-divider"></div>
              <div className="plan-body">
                <p className="plan-features-title">What's included:</p>
                <ul className="plan-features-list">
                  <li className="promo-feature">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>+ 5 Free SKUs</strong> 
                      <span className="limited-time-tag">Limited Time!</span>
                    </span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span><strong>5 SKUs</strong> (Standard allowance)</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span><strong>5 Videos</strong> (AI fashion clip generation)</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Access to premium model gallery</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Priority 24/7 dedicated support</span>
                  </li>
                </ul>
              </div>
              <div className="plan-footer">
                <Link to="/contact" className="btn-primary dark plan-btn">
                  Choose Pro
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ENTERPRISE EXTRA SPLIT ── */}
      <section className="pricing-enterprise">
        <div className="container">
          <div className="enterprise-box">
            <h2>Need a custom solution or bulk SKU credits?</h2>
            <p>We work with enterprise retailers, shoot studios, and large D2C labels to build customized AI models.</p>
            <Link to="/contact" className="btn-primary dark">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
