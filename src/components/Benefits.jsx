import './Benefits.css'

const ArrowIcon = () => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.9771C0 6.41203 0.352576 6.7646 0.787502 6.7646L9.6075 6.7646L5.74875 10.6234C5.4443 10.9278 5.4443 11.4214 5.74875 11.7259C6.05319 12.0303 6.5468 12.0303 6.85124 11.7259L11.709 6.86805C12.2011 6.37599 12.2011 5.5782 11.709 5.08614L6.85124 0.228344C6.54679 -0.0761001 6.05319 -0.0761001 5.74875 0.228343C5.4443 0.532789 5.4443 1.02639 5.74874 1.33084L9.6075 5.1896L0.787503 5.1896C0.352577 5.1896 0 5.54217 0 5.9771Z" fill="currentColor"/>
  </svg>
)

const benefits = [
  {
    title: 'Spend less, produce more',
    link: '#',
    description: 'Create studio-quality fashion shots without inflating budgets. AI generated models give you the same professional look, minus the production overhead.',
    stat: '-90%',
    statText: 'Jordache cut production costs and saved thousands with Drapeify\'s AI.',
    caseStudy: 'Read case study',
    image: '/images/carousel_onmodel.png',
  },
  {
    title: 'Move faster. Launch smarter',
    link: '#',
    description: 'Accelerate your production cycles and deliver new collections in days. Fashion teams can now update looks, refresh images, and move faster than ever without sacrificing quality.',
    stat: '40X',
    statText: 'JUAN & ME cut image production turnaround time from 6 weeks to 24 hours',
    caseStudy: 'Read case study',
    image: '/images/carousel_flatlay.png',
  },
  {
    title: 'Inclusive by design',
    link: '#',
    description: 'Showcase inclusivity with AI generated models - diverse in tone, body and style - so your visuals reflect real customers, everywhere.',
    stat: '+150%',
    statText: 'CTR lift from using diverse models to connect with more customers.',
    caseStudy: 'Read case study',
    image: '/images/hero_model.png',
  },
  {
    title: 'Editorials made easy',
    link: '#',
    description: 'Drapeify lets creative teams bring their campaign ideas to life. Generate fashion-forward visuals at scale with built-in consistency & flexibility.',
    stat: null,
    review: '"Since using Drapeify, we can finally focus on creativity instead of coordination & operate with the seamless flexibility modern fashion demands."',
    reviewer: 'Michael Walter, Managing Director at NIL+MON',
    caseStudy: 'Read case study',
    image: '/images/carousel_mannequin.png',
  },
]

export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <h2 className="benefits-h2">
            Reimagine photoshoots with AI generated models
          </h2>
          <p className="benefits-subtitle">
            Create high-end fashion imagery with AI generated models. Polished results, effortless workflow & a team ready to guide your every step.
          </p>
        </div>

        <div className="benefits-items">
          {benefits.map((item, i) => (
            <div key={i} className={`benefit-item ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="benefit-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="benefit-content">
                <a href={item.link} className="benefit-title">{item.title}</a>
                <p className="benefit-description">{item.description}</p>
                
                {item.stat && (
                  <div className="benefit-stat">
                    <div className="benefit-stat-number">{item.stat}</div>
                    <p className="benefit-stat-text">{item.statText}</p>
                  </div>
                )}

                {item.review && (
                  <div className="benefit-review">
                    <p className="benefit-review-text">{item.review}</p>
                    <p className="benefit-review-author">{item.reviewer}</p>
                  </div>
                )}

                <div className="benefit-cta">
                  <a href="#" className="btn-underline">
                    {item.caseStudy}
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
