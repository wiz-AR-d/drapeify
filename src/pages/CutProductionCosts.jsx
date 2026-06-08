import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CutProductionCosts.css'

export default function CutProductionCosts() {
  // SEO title & meta description
  useEffect(() => {
    document.title = 'Cut Production Cost with AI Fashion Models | Drapeify'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Drastically reduce catalog production costs by 90% using Drapeify AI. Skip expensive photoshoots, models, photographers, and studios.')
    }
    window.scrollTo(0, 0)
  }, [])

  // ROI Calculator States
  const [productCount, setProductCount] = useState(50)
  const [traditionalCost, setTraditionalCost] = useState(15000)

  // Calculations
  const traditionalTotal = productCount * traditionalCost
  const drapeifyTotal = productCount * 396 // ₹99 per photo generation (4 images per style)
  const savings = traditionalTotal - drapeifyTotal

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null)

  const faqs = [
    {
      q: 'How much does Drapeify save compared to traditional shoots?',
      a: 'Most fashion brands save between 85% to 92% of their photoshoot budgets. By eliminating model booking, photographers, hair & makeup, studio rentals, and shipping samples to locations, you only pay a flat, low rate per image.'
    },
    {
      q: 'Are there any hidden fees or setup charges?',
      a: 'No. Drapeify operates on simple, transparent pricing plans based on output images. There are no setup fees, contract lock-ins, or image hosting charges.'
    },
    {
      q: 'Can Drapeify handle complex patterns and specialized fabrics?',
      a: 'Yes! Our state-of-the-art Generative AI models are trained to preserve garment texture, embroidery, drape, and pattern continuity with extreme fidelity.'
    }
  ]

  const benefits = [
    {
      title: '90% Cost Reduction',
      desc: 'Eliminate studio hires, camera setups, location scouts, and catering budgets entirely.',
      metric: '10x'
    },
    {
      title: 'Zero Reshoot Costs',
      desc: 'Adjust lighting, model demographics, or background details on the fly without hiring another crew.',
      metric: '0%'
    },
    {
      title: 'Unlimited Catalog Scale',
      desc: 'Publish 10,000 SKUs as easily and affordably as a single style. No incremental photoshoot costs.',
      metric: '∞'
    }
  ]

  return (
    <div className="solutions-page fade-in-up">
      {/* Hero Section */}
      <section className="sol-hero-s">
        <div className="container">
          <div className="sol-hero-c">
            <div className="sol-hero-content">
              <div className="sol-tag">Solutions — Cost Efficiency</div>
              <h1 className="sol-hero-h1">Cut catalog production costs by 90%</h1>
              <p className="sol-hero-description">
                Say goodbye to studio rental, equipment overheads, and logistics. Turn basic flat lays or ghost mannequin shots into high-converting, realistic model images instantly.
              </p>
              <div className="sol-hero-btns-c">
                <Link to="/contact" className="sol-btn-primary" id="sol_cost_getstarted">
                  Start Saving
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.88454 1.88086L10.1999 6.00007L5.88454 10.1193" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.1999 6L1.79996 6" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/contact" className="sol-btn-secondary" id="sol_cost_bookcall">
                  Calculate Custom Plan
                </Link>
              </div>
            </div>
            <div className="sol-hero-img-c">
              <img
                alt="Cost-saving AI mannequin to on-model transformation showing extreme realism"
                src="/images/mqc.png"
                className="sol-hero-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="sol-benefits-s">
        <div className="container">
          <div className="sol-benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="sol-benefit-card">
                <div className="sol-benefit-metric">{b.metric}</div>
                <h3 className="sol-benefit-h3">{b.title}</h3>
                <p className="sol-benefit-p">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="sol-calculator-s">
        <div className="container">
          <div className="sol-calc-container">
            <div className="sol-calc-info">
              <h2 className="sol-section-h2">Calculate your ROI with Drapeify</h2>
              <p className="sol-section-p">
                Adjust the sliders to see how much your brand stands to save when replacing traditional models and photoshoots with Drapeify AI-generated lookbooks.
              </p>
              
              <div className="sol-slider-group">
                <div className="sol-slider-header">
                  <label htmlFor="product-count-slider">New styles/products per month</label>
                  <span className="sol-slider-value">{productCount} styles</span>
                </div>
                <input
                  id="product-count-slider"
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={productCount}
                  onChange={(e) => setProductCount(Number(e.target.value))}
                  className="sol-range"
                />
              </div>

              <div className="sol-slider-group">
                <div className="sol-slider-header">
                  <label htmlFor="photoshoot-cost-slider">Traditional shoot cost per style</label>
                  <span className="sol-slider-value">₹{traditionalCost.toLocaleString('en-IN')}</span>
                </div>
                <input
                  id="photoshoot-cost-slider"
                  type="range"
                  min="2000"
                  max="50000"
                  step="1000"
                  value={traditionalCost}
                  onChange={(e) => setTraditionalCost(Number(e.target.value))}
                  className="sol-range"
                />
              </div>
            </div>

            <div className="sol-calc-result-card">
              <div className="sol-result-row">
                <span className="sol-result-label">Traditional Shoot Cost</span>
                <span className="sol-result-val red">₹{traditionalTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="sol-result-row">
                <span className="sol-result-label">Drapeify AI Cost</span>
                <span className="sol-result-val green">₹{drapeifyTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="sol-result-divider"></div>
              <div className="sol-result-row total">
                <span className="sol-result-label">Estimated Monthly Savings</span>
                <span className="sol-result-val savings">₹{savings.toLocaleString('en-IN')}</span>
              </div>
              <p className="sol-result-disclaimer">
                * Based on an average of 4 web-ready images per style, costing ₹99 per photo generation (₹396 per style).
              </p>
              <Link to="/contact" className="sol-btn-primary full-width" id="sol_cost_claim_savings">
                Claim My Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Steps */}
      <section className="sol-steps-s">
        <div className="container">
          <div className="sol-steps-title-c">
            <h2 className="sol-section-h2">Stop booking studios. Start generating.</h2>
            <p className="sol-section-p max-w">
              Drapeify replaces days of manual shooting coordination with a streamlined 3-step digital interface.
            </p>
          </div>
          <div className="sol-steps-grid">
            <div className="sol-step-item">
              <div className="sol-step-number">01</div>
              <h4 className="sol-step-h4">Upload Clothing Files</h4>
              <p className="sol-step-p">Upload plain garment images, flat lay shots, or mannequin frames directly to your browser.</p>
            </div>
            <div className="sol-step-item">
              <div className="sol-step-number">02</div>
              <h4 className="sol-step-h4">Choose Model Profiles</h4>
              <p className="sol-step-p">Select ethnic demographics, height, pose, and studio/location backgrounds of your choice.</p>
            </div>
            <div className="sol-step-item">
              <div className="sol-step-number">03</div>
              <h4 className="sol-step-h4">Generate and Export</h4>
              <p className="sol-step-p">Review automatically processed visual assets and batch download in web-ready layouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="sol-faq-s">
        <div className="container">
          <div className="sol-faq-container">
            <h2 className="sol-section-h2 text-center">Frequently Asked Questions</h2>
            <div className="sol-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className={`sol-faq-item ${activeFaq === i ? 'open' : ''}`}>
                  <button 
                    className="sol-faq-question" 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    aria-expanded={activeFaq === i}
                  >
                    <span>{faq.q}</span>
                    <svg className="sol-faq-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="sol-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
