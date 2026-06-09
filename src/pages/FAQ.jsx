import { useState, useEffect } from 'react'
import './FAQ.css'

const faqData = [
  {
    category: 'General',
    question: 'What types of photos and poses can I use with Drapeify?',
    answer: 'We support all standard e-commerce poses including front, back, and side profiles.'
  },
  {
    category: 'Technology',
    question: 'Where do Drapeify AI fashion models come from?',
    answer: 'Our models are 100% AI-generated using proprietary algorithms.'
  },
  {
    category: 'Technology',
    question: 'What tech powers your AI models?',
    answer: 'We use state-of-the-art diffusion models optimized for high-fidelity fashion imagery.'
  },
  {
    category: 'Customization',
    question: 'Can I customize clothing or models using my own prompts?',
    answer: 'Yes, our platform allows for extensive customization to fit your brand identity.'
  },
  {
    category: 'Pricing',
    question: 'How much does Drapeify save compared to traditional shoots?',
    answer: 'Most fashion brands save between 85% to 92% of their photoshoot budgets. By eliminating model booking, photographers, hair & makeup, studio rentals, and shipping samples to locations, you only pay a flat, low rate per image.'
  },
  {
    category: 'Pricing',
    question: 'Are there any hidden fees or setup charges?',
    answer: 'No. Drapeify operates on simple, transparent pricing plans based on output images. There are no setup fees, contract lock-ins, or image hosting charges.'
  },
  {
    category: 'Technology',
    question: 'Can Drapeify handle complex patterns and specialized fabrics?',
    answer: 'Yes! Our state-of-the-art Generative AI models are trained to preserve garment texture, embroidery, drape, and pattern continuity with extreme fidelity.'
  },
  {
    category: 'General',
    question: 'Can I sell items before physical inventory arrives?',
    answer: 'Absolutely. Many Drapeify users generate high-converting model photos using simple flat lay blueprints or pattern diagrams. This allows you to launch pre-orders and validate styles weeks before manufacturing finishes.'
  },
  {
    category: 'Technology',
    question: 'How fast does the AI generate output photos?',
    answer: 'Single images are generated in under 15 seconds. High-volume batch generation for entire lookbooks takes less than 3 minutes, giving you a full collection catalog instantly.'
  },
  {
    category: 'Technology',
    question: 'Does speed affect the realism of the model?',
    answer: 'Not at all. Drapeify uses cutting-edge diffusion technology that runs on high-performance compute clusters, ensuring flawless fabric textures, light reflections, and facial details at lightning speed.'
  },
  {
    category: 'Diversity',
    question: 'How diverse is the Drapeify model library?',
    answer: 'We offer a wide spectrum of models across ethnicities, age groups (from Gen Z to mature models), sizes, and body types. Our library is updated regularly to provide complete demographic representation.'
  },
  {
    category: 'Customization',
    question: 'Can I generate unique models exclusive to my brand?',
    answer: 'Yes! We support custom brand models. You can train a custom face/body profile based on a specific brand ambassador so that your lookbooks maintain a unique, exclusive identity.'
  },
  {
    category: 'Technology',
    question: 'Will clothing fit differently on different model body types?',
    answer: 'Yes, our smart garment-draping AI automatically recalculates fabric fall, folds, stretch, and fit lines based on the model’s physical proportions to represent size accurately.'
  }
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title = 'Frequently Asked Questions | Drapeify'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Find answers to frequently asked questions about Drapeify AI fashion models, technology, pricing, and integration.')
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="faq-page fade-in-up">
      <section className="faq-page-section">
        <div className="container">
          <div className="faq-page-grid">
            <div className="faq-page-title-col">
              <h1 className="faq-page-h1">Frequently asked questions</h1>
              <p className="faq-page-subtitle">
                Everything you need to know about Drapeify AI-generated fashion models, pricing, and workflow solutions.
              </p>
            </div>
            <div className="faq-page-list-col">
              <div className="faq-page-list">
                {faqData.map((faq, i) => (
                  <div
                    className={`faq-page-item ${openFaq === i ? 'open' : ''}`}
                    key={i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <div className="faq-page-question">
                      <h3>{faq.question}</h3>
                      <span className="faq-page-icon">{openFaq === i ? '−' : '+'}</span>
                    </div>
                    <div className="faq-page-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
