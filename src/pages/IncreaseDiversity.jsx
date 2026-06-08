import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './IncreaseDiversity.css'

export default function IncreaseDiversity() {
  useEffect(() => {
    document.title = 'Increase Model Diversity with AI | Drapeify'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Represent every customer. Instantly swap models, body types, ages, and ethnicities to build an inclusive shopping experience with Drapeify AI.')
    }
    window.scrollTo(0, 0)
  }, [])

  const modelOptions = [
    { id: 'caucasian', label: 'Caucasian Look', image: '/images/hero_model_3.png', details: 'Height: 5\'9" | Fit: Medium | Vibe: High-Fashion Editorial' },
    { id: 'south-asian', label: 'South Asian Look', image: '/images/tp2.png', details: 'Height: 5\'7" | Garment: Denim Jacket & White Tee | Vibe: Warm Everyday Casual' },
    { id: 'east-asian', label: 'East Asian Look', image: '/images/tp5.png', details: 'Height: 5\'8" | Garment: Denim Jacket & White Tee | Vibe: Minimalist Contemporary' },
    { id: 'athletic', label: 'Athletic Look', image: '/images/tp3.png', details: 'Height: 5\'10" | Garment: Denim Jacket & White Tee | Vibe: Sporty Active Look' }
  ]

  const [activeModel, setActiveModel] = useState(modelOptions[0])
  const [fade, setFade] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const handleModelChange = (model) => {
    if (model.id === activeModel.id) return
    setFade(true)
    setTimeout(() => {
      setActiveModel(model)
      setFade(false)
    }, 250)
  }

  const diversityStats = [
    { label: 'Ethnicities & Ages', value: '50+' },
    { label: 'Conversion Lift', value: '+35%' },
    { label: 'Customer Trust Boost', value: '88%' }
  ]

  const faqs = [
    {
      q: 'How diverse is the Drapeify model library?',
      a: 'We offer a wide spectrum of models across ethnicities, age groups (from Gen Z to mature models), sizes, and body types. Our library is updated regularly to provide complete demographic representation.'
    },
    {
      q: 'Can I generate unique models exclusive to my brand?',
      a: 'Yes! We support custom brand models. You can train a custom face/body profile based on a specific brand ambassador so that your lookbooks maintain a unique, exclusive identity.'
    },
    {
      q: 'Will clothing fit differently on different model body types?',
      a: 'Yes, our smart garment-draping AI automatically recalculates fabric fall, folds, stretch, and fit lines based on the model’s physical proportions to represent size accurately.'
    }
  ]

  return (
    <div className="solutions-page fade-in-up">
      {/* Hero Section */}
      <section className="sol-hero-s">
        <div className="container">
          <div className="sol-hero-c">
            <div className="sol-hero-content">
              <div className="sol-tag">Solutions — Brand Inclusivity</div>
              <h1 className="sol-hero-h1">Represent every customer, instantly</h1>
              <p className="sol-hero-description">
                Tailor your catalog demographics to fit your global audience. Generate your collection across various ethnicities, ages, and body shapes in seconds.
              </p>
              <div className="sol-hero-btns-c">
                <Link to="/contact" className="sol-btn-primary" id="sol_div_getstarted">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.88454 1.88086L10.1999 6.00007L5.88454 10.1193" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.1999 6L1.79996 6" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/contact" className="sol-btn-secondary" id="sol_div_bookcall">
                  Explore Models
                </Link>
              </div>
            </div>
            <div className="sol-hero-img-c">
              <img
                alt="AI model catalog representing multiple diverse ethnicities and demographics"
                src="/images/all-mod.png"
                className="sol-hero-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diversity Stats Banner */}
      <section className="sol-speed-stats-s">
        <div className="container">
          <div className="sol-stats-row">
            {diversityStats.map((stat, i) => (
              <div key={i} className="sol-stat-item">
                <div className="sol-stat-val">{stat.value}</div>
                <div className="sol-stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Model Variety Customizer Selector */}
      <section className="sol-play-s">
        <div className="container">
          <div className="sol-play-title-c">
            <h2 className="sol-section-h2 text-center">Interactive Model Customizer</h2>
            <p className="sol-section-p text-center max-w">
              Switch between model demographics below to visualize how clothing automatically fits and adapts to different body shapes and ethnicities.
            </p>
          </div>

          <div className="sol-play-grid">
            <div className="sol-play-sidebar">
              <h3 className="sol-play-h3">Select Model Demographics</h3>
              <div className="sol-play-tabs">
                {modelOptions.map((model) => (
                  <button
                    key={model.id}
                    className={`sol-play-tab-btn ${activeModel.id === model.id ? 'active' : ''}`}
                    onClick={() => handleModelChange(model)}
                  >
                    <div className="sol-play-tab-label">{model.label}</div>
                  </button>
                ))}
              </div>
              <div className="sol-play-desc-card">
                <h4 className="sol-play-desc-title">{activeModel.label} Details</h4>
                <p className="sol-play-desc-text">{activeModel.details}</p>
              </div>
            </div>

            <div className="sol-play-viewer">
              <div className={`sol-viewer-img-container ${fade ? 'fade-out' : ''}`}>
                <img
                  src={activeModel.image}
                  alt={`AI generated model representing ${activeModel.label}`}
                  className="sol-viewer-img"
                />
                <div className="sol-viewer-tag">{activeModel.label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity Benefits Cards */}
      <section className="sol-benefits-cards-s">
        <div className="container">
          <div className="sol-ed-benefits-grid">
            <div className="sol-ed-benefit-card">
              <div className="sol-ed-benefit-count">01</div>
              <h3 className="sol-ed-benefit-h3">Build Relatable Shopping</h3>
              <p className="sol-ed-benefit-p">
                Customers buy with confidence when they see garments modeled on people with similar skin tones, ages, and body frames.
              </p>
            </div>
            <div className="sol-ed-benefit-card">
              <div className="sol-ed-benefit-count">02</div>
              <h3 className="sol-ed-benefit-h3">Localize International Stores</h3>
              <p className="sol-ed-benefit-p">
                Instantly swap models to match regional markets (e.g. Asia, Europe, North America) without coordinating local shoots.
              </p>
            </div>
            <div className="sol-ed-benefit-card">
              <div className="sol-ed-benefit-count">03</div>
              <h3 className="sol-ed-benefit-h3">Body-Positive Representation</h3>
              <p className="sol-ed-benefit-p">
                Expand sizing cards with realistic AI models modeling plus size, athletic, or petite fits accurately.
              </p>
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
