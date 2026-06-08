import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './GoToMarketFaster.css'

export default function GoToMarketFaster() {
  useEffect(() => {
    document.title = 'Go to Market Faster with AI Fashion Shoots | Drapeify'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Reduce time-to-market from weeks to minutes. Generate on-model product images instantly with Drapeify AI and start selling today.')
    }
    window.scrollTo(0, 0)
  }, [])

  const [hoveredStep, setHoveredStep] = useState(null)
  const [activeFaq, setActiveFaq] = useState(null)

  const traditionalSteps = [
    { day: 'Day 1-3', title: 'Sample Logistics', desc: 'Ship fabrics/garment samples to studio location.' },
    { day: 'Day 4-7', title: 'Talent & Crew Booking', desc: 'Hire agency models, stylists, photographers, and makeup artists.' },
    { day: 'Day 8-10', title: 'Physical Studio Session', desc: 'Rent location, set up lighting, shoot, and capture raw pictures.' },
    { day: 'Day 11-13', title: 'Post-Production Retouching', desc: 'Wait for color correction, shadow adjustments, and background editing.' },
    { day: 'Day 14', title: 'Live on Site', desc: 'Upload finished photos and start taking pre-orders or sales.' }
  ]

  const drapeifySteps = [
    { time: '0:30 Min', title: 'Capture Garment', desc: 'Take a quick smartphone snapshot or ghost mannequin frame.' },
    { time: '1:00 Min', title: 'Upload & Select', desc: 'Drag-and-drop into Drapeify and choose your desired model and environment.' },
    { time: '3:00 Min', title: 'AI Rendering', desc: 'Our advanced engine renders realistic textures and studio lighting.' },
    { time: '4:00 Min', title: 'Batch Export', desc: 'Review, crop, and download clean high-resolution assets.' },
    { time: '5:00 Min', title: 'Instantly Live', desc: 'Push to Shopify or lookbook and launch campaigns immediately.' }
  ]

  const speedStats = [
    { label: 'Time Saved per Collection', value: '13.9 Days' },
    { label: 'Trend Response Time', value: 'Real-time' },
    { label: 'Pre-order Lead Time', value: '-80%' }
  ]

  const faqs = [
    {
      q: 'Can I sell items before physical inventory arrives?',
      a: 'Absolutely. Many Drapeify users generate high-converting model photos using simple flat lay blueprints or pattern diagrams. This allows you to launch pre-orders and validate styles weeks before manufacturing finishes.'
    },
    {
      q: 'How fast does the AI generate output photos?',
      a: 'Single images are generated in under 15 seconds. High-volume batch generation for entire lookbooks takes less than 3 minutes, giving you a full collection catalog instantly.'
    },
    {
      q: 'Does speed affect the realism of the model?',
      a: 'Not at all. Drapeify uses cutting-edge diffusion technology that runs on high-performance compute clusters, ensuring flawless fabric textures, light reflections, and facial details at lightning speed.'
    }
  ]

  return (
    <div className="solutions-page fade-in-up">
      {/* Hero Section */}
      <section className="sol-hero-s">
        <div className="container">
          <div className="sol-hero-c">
            <div className="sol-hero-content">
              <div className="sol-tag">Solutions — Speed to Market</div>
              <h1 className="sol-hero-h1">Go from sample to store in 5 minutes</h1>
              <p className="sol-hero-description">
                Don't let studio schedules delay your seasonal launches. Generate high-quality model imagery immediately and start selling before your inventory even arrives.
              </p>
              <div className="sol-hero-btns-c">
                <Link to="/contact" className="sol-btn-primary" id="sol_speed_getstarted">
                  Launch Instantly
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.88454 1.88086L10.1999 6.00007L5.88454 10.1193" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.1999 6L1.79996 6" stroke="currentColor" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/contact" className="sol-btn-secondary" id="sol_speed_bookcall">
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="sol-hero-img-c">
              <img
                alt="AI model showing yellow dress in studio lighting, generated in minutes"
                src="/images/yellow_model_hero.png"
                className="sol-hero-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speed Stats Banner */}
      <section className="sol-speed-stats-s">
        <div className="container">
          <div className="sol-stats-row">
            {speedStats.map((stat, i) => (
              <div key={i} className="sol-stat-item">
                <div className="sol-stat-val">{stat.value}</div>
                <div className="sol-stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="sol-timeline-s">
        <div className="container">
          <div className="sol-timeline-intro">
            <h2 className="sol-section-h2 text-center">Compare the workflow speed</h2>
            <p className="sol-section-p text-center max-w">
              Hover over each step in the tracks below to see why modern DTC brands are ditching physical model shoots.
            </p>
          </div>

          <div className="sol-timeline-grid">
            {/* Traditional Shoot Track */}
            <div className="sol-track-col trad">
              <h3 className="sol-track-h3">Traditional Shoot (14 Days)</h3>
              <div className="sol-timeline-list">
                {traditionalSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`sol-timeline-node ${hoveredStep === `trad-${index}` ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredStep(`trad-${index}`)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div className="sol-timeline-badge">{step.day}</div>
                    <div className="sol-timeline-info">
                      <h4 className="sol-timeline-node-title">{step.title}</h4>
                      <p className="sol-timeline-node-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Drapeify AI Track */}
            <div className="sol-track-col drape">
              <h3 className="sol-track-h3">Drapeify AI Shoot (5 Minutes)</h3>
              <div className="sol-timeline-list">
                {drapeifySteps.map((step, index) => (
                  <div
                    key={index}
                    className={`sol-timeline-node ${hoveredStep === `drape-${index}` ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredStep(`drape-${index}`)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div className="sol-timeline-badge premium">{step.time}</div>
                    <div className="sol-timeline-info">
                      <h4 className="sol-timeline-node-title">{step.title}</h4>
                      <p className="sol-timeline-node-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Advantages Cards */}
      <section className="sol-speed-cards-s">
        <div className="container">
          <div className="sol-speed-grid">
            <div className="sol-speed-card">
              <h3 className="sol-speed-h3">Respond to Viral Micro-Trends</h3>
              <p className="sol-speed-p">
                Hop on TikTok or Instagram aesthetics in hours. Generate on-trend model pictures of matching colors/styles before sourcing inventory.
              </p>
            </div>
            <div className="sol-speed-card">
              <h3 className="sol-speed-h3">Instant A/B Ad Testing</h3>
              <p className="sol-speed-p">
                Not sure if an urban setting or a beach catalog works better for your fall jacket? Spin up both variations instantly and run campaigns parallelly.
              </p>
            </div>
            <div className="sol-speed-card">
              <h3 className="sol-speed-h3">Pre-orders Without Waiting</h3>
              <p className="sol-speed-p">
                Take bookings early. Use manufacturing layouts to display realistic, high-end visuals and capture customer interest early.
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
