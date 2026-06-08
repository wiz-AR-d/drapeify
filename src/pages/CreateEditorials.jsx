import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CreateEditorials.css'

export default function CreateEditorials() {
  useEffect(() => {
    document.title = 'AI Editorial Campaigns Portfolio | Drapeify'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Explore Drapeify’s high-end, realistic AI lookbook campaigns. Featuring full-size catalog examples for traditional wear, intimates, and cosmetics.')
    }
    window.scrollTo(0, 0)
  }, [])

  const [activeFaq, setActiveFaq] = useState(null)

  const faqs = [
    {
      q: 'Can I upload my own custom backgrounds?',
      a: 'Yes! You can upload custom brand photography, specific retail store designs, or pre-rendered landscapes. The AI will blend shadows and lighting onto the model to match your file.'
    },
    {
      q: 'Are the background scenes copyright-free?',
      a: 'Absolutely. All backgrounds in our public library are fully licensed, royalty-free, and cleared for global commercial use across print, digital, and social channels.'
    },
    {
      q: 'How does Drapeify handle clothing shadow rendering?',
      a: 'Drapeify reads the depth, contour, and texture of the original apparel and automatically projects photorealistic soft and hard shadows matching the sun/light source of the target background.'
    }
  ]

  const campaigns = [
    {
      number: '01',
      title: 'Traditional Ivory Lehenga',
      tag: 'Haute Couture / Traditional Wear',
      image: '/images/pred.png',
      alt: 'Traditional Indian lehenga choli with gold embroidery in a palatial hall',
      specs: [
        { label: 'Environment', value: 'Palatial Stone Hallway' },
        { label: 'Lighting', value: 'Warm Golden Hour Interior' },
        { label: 'Details Preserved', value: 'Gold Zardozi Embroidery & Silk Drape' },
        { label: 'Resolution', value: '4K Ultra-HD Photographic' }
      ]
    },
    {
      number: '02',
      title: 'Oceanic Fragrance & Catalog',
      tag: 'Cosmetics & Fragrances',
      image: '/images/per.png',
      alt: 'Blue Ocean Eau De Parfum bottle held on a rocky shoreline with sea water splash detail',
      specs: [
        { label: 'Environment', value: 'Rocky Shoreline Beach' },
        { label: 'Lighting', value: 'Overcast Cool Natural Daylight' },
        { label: 'Details Preserved', value: 'Glass Reflections & Splashing Water' },
        { label: 'Resolution', value: '4K Ultra-HD Hyper-Real' }
      ]
    },
    {
      number: '03',
      title: 'Urban Scottish Loungewear',
      tag: 'Intimates & Loungewear',
      image: '/images/und.png',
      alt: 'Urban Scottish patterned boxers model catalog shoot',
      specs: [
        { label: 'Environment', value: 'Minimalist Photo Studio' },
        { label: 'Lighting', value: 'Softbox Ambient Key Studio Light' },
        { label: 'Details Preserved', value: 'Fabric Knit Texture & Elastic Band Seam' },
        { label: 'Resolution', value: 'Studio Catalog High-Fidelity' }
      ]
    }
  ]

  return (
    <div className="solutions-page ed-remake fade-in-up">
      {/* Editorial Header */}
      <section className="ed-header-s">
        <div className="container">
          <div className="ed-header-c">
            <div className="sol-tag">AI Lookbook Portfolio</div>
            <h1 className="ed-header-h1">Premium Campaigns, Rendered Digitally</h1>
            <p className="ed-header-desc">
              Explore how Drapeify translates intricate details, product reflections, and complex textiles into high-converting, realistic campaigns. 100% digital, zero physical shoots.
            </p>
          </div>
        </div>
      </section>

      {/* Campaigns List (Full-Size Layout) */}
      <section className="ed-campaigns-s">
        <div className="container">
          <div className="ed-campaigns-list">
            {campaigns.map((camp, idx) => (
              <div key={idx} className="ed-camp-block">
                
                {/* Visual Block - Full size preservation */}
                <div className="ed-camp-visual-wrapper">
                  <div className="ed-camp-image-container">
                    <img src={camp.image} alt={camp.alt} className="ed-camp-full-img" />
                    <div className="ed-camp-badge">{camp.tag}</div>
                  </div>
                </div>

                {/* Information Block */}
                <div className="ed-camp-info-wrapper">
                  <div className="ed-camp-number-lbl">Case Study {camp.number}</div>
                  <h2 className="ed-camp-title-h2">{camp.title}</h2>
                  
                  <div className="ed-camp-specs-grid">
                    {camp.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="ed-spec-node">
                        <span className="ed-spec-label">{spec.label}</span>
                        <span className="ed-spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="ed-camp-action-row">
                    <Link to="/contact" className="sol-btn-primary" id={`sol_ed_case_${camp.number}_getstarted`}>
                      Generate Similar Look
                    </Link>
                  </div>
                </div>

              </div>
            ))}
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

      {/* CTA Section */}
      <section className="ed-footer-cta-s">
        <div className="container">
          <div className="ed-cta-card">
            <h2 className="sol-section-h2 text-center">Ready to Create Your Campaign?</h2>
            <p className="sol-section-p text-center max-w">
              Drapeify handles traditional wear, cosmetics, intimates, and everyday clothing with maximum texture realism. Start creating today.
            </p>
            <div className="ed-cta-btn-c">
              <Link to="/contact" className="sol-btn-primary" id="sol_ed_footer_getstarted">
                Book a Brand Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
