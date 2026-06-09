import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ModelsGallery.css'

const womenModels = [
  { name: 'Emma', image: '/images/hero_crop_3.png' },
  { name: 'Suhani', image: '/images/ChatGPT Image Jun 6, 2026, 06_14_44 PM.png' },
  { name: 'Kasturi', image: '/images/ChatGPT Image Jun 6, 2026, 06_58_19 PM.png' },
  // { name: 'Adrian', image: '/images/hero_model_2.png' },
  { name: 'Brenda', image: '/images/hero_crop_7.png' },
  { name: 'Ankita', image: '/images/hero_crop_2.jpeg' },
  { name: 'Sophie', image: '/images/hero_model.jpeg' },
  { name: 'Jyoti', image: '/images/ChatGPT Image Jun 6, 2026, 06_47_56 PM.png' },
  { name: 'Valeria', image: '/images/ChatGPT Image Jun 6, 2026, 06_16_40 PM.png' },
  { name: 'Anya', image: '/images/ChatGPT Image Jun 6, 2026, 06_30_20 PM.png' },
  { name: 'Shiobhan', image: '/images/ChatGPT Image Jun 6, 2026, 06_34_57 PM.png' },


]

const menModels = [
  { name: 'Aryan', image: '/images/ChatGPT Image Jun 6, 2026, 07_24_02 PM.png' },
  { name: 'Parth', image: '/images/ChatGPT Image Jun 6, 2026, 07_42_34 PM.png' },

  { name: 'Rahul', image: '/images/hero_model_4.png' },
  { name: 'John', image: '/images/ChatGPT Image Jun 6, 2026, 08_00_33 PM.png' },
  { name: 'Babar', image: '/images/hero_crop_6.png' },
  { name: 'Gurpreet', image: '/images/ChatGPT Image Jun 6, 2026, 08_06_11 PM.png' },
  { name: 'Kendall', image: '/images/ChatGPT Image Jun 7, 2026, 01_18_02 AM.png' },
  { name: 'Dev', image: '/images/ChatGPT Image Jun 7, 2026, 01_29_59 AM.png' },
  { name: 'Tyson', image: '/images/herobg.jpg' },
  { name: 'Rishab', image: '/images/heroblue.jpg' }
]

const faqs = [
  { question: 'What types of photos and poses can I use with Drapeify?', answer: 'We support all standard e-commerce poses including front, back, and side profiles.' },
  { question: 'Where do Drapeify AI fashion models come from?', answer: 'Our models are 100% AI-generated using proprietary algorithms.' },
  { question: 'What tech powers your AI models?', answer: 'We use state-of-the-art diffusion models optimized for high-fidelity fashion imagery.' },
  { question: 'Can I customize clothing or models using my own prompts?', answer: 'Yes, our platform allows for extensive customization to fit your brand identity.' }
]

export default function ModelsGallery() {
  const [activeTab, setActiveTab] = useState('Women')
  const [openFaq, setOpenFaq] = useState(null)

  const models = activeTab === 'Women' ? womenModels : menModels

  return (
    <div className="models-page">
      {/* ── HEADER SECTION ── */}
      <section className="models-header-section">
        <div className="container">
          <h1 className="models-h1">Your search for AI fashion models ends here</h1>
          <p className="models-subtitle">
            AI fashion models built for leading brands: posing, moving & showcasing your collection like real talent.
          </p>

          <div className="models-toggle">
            <button
              className={`toggle-btn ${activeTab === 'Women' ? 'active' : ''}`}
              onClick={() => setActiveTab('Women')}
            >
              Women
            </button>
            <button
              className={`toggle-btn ${activeTab === 'Men' ? 'active' : ''}`}
              onClick={() => setActiveTab('Men')}
            >
              Men
            </button>
          </div>
        </div>
      </section>

      {/* ── GALLERY SECTION ── */}
      <section className="models-gallery-section">
        <div className="gallery-container">
          <div className="models-grid">
            {models.map((model, i) => (
              <div className="model-card" key={i}>
                <div className="model-img-wrapper">
                  <img src={model.image} alt={model.name} className="model-img" />
                </div>
                <div className="model-name">{model.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNLOCK MODELS CTA ── */}
      <section className="models-unlock-section">
        <div className="container">
          <h2 className="unlock-h2">Unlock all models. Start creating now</h2>
          <div className="unlock-btns">
            <Link to="/contact" className="btn-primary">Get Started</Link>
            <Link to="/contact" className="btn-secondary">Book a Call</Link>
          </div>
        </div>
      </section>

      {/* ── CUSTOM PLAN SPLIT ── */}
      <section className="custom-plan-section">
        <div className="custom-plan-grid">
          <div className="custom-plan-left">
            <div className="custom-plan-content">
              <h2>Didn't find the exact model you're looking for?</h2>
              <p>Contact us to discuss our full service custom plans.</p>
              <Link to="/contact" className="btn-white">Contact Us</Link>
            </div>
          </div>
          <div className="custom-plan-right">
            <img src="/images/hero_model.jpeg" alt="Custom AI Model" className="custom-plan-img" />
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-title">
              <h2>Frequently asked questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div
                  className={`faq-item ${openFaq === i ? 'open' : ''}`}
                  key={i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="faq-question">
                    <h3>{faq.question}</h3>
                    <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
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
