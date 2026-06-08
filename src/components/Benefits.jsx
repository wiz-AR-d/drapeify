import './Benefits.css'



const benefits = [
  {
    title: 'Spend less, produce more',
    link: '#',
    description: 'Create studio-quality fashion shots without inflating budgets. AI generated models give you the same professional look, minus the production overhead.',
    stat: '-90%',
    statText: 'A leading Narie Sarees label saved lakhs on catalog costs using Drapeify\'s AI.',
    image: '/images/carousel_onmodel.png',
  },
  {
    title: 'Move faster. Launch smarter',
    link: '#',
    description: 'Accelerate your production cycles and deliver new collections in days. Fashion teams can now update looks, refresh images, and move faster than ever without sacrificing quality.',
    stat: '40X',
    statText: 'A 99Shadesff D2C streetwear brand cut image turnaround time from 6 weeks to 24 hours',
    image: '/images/herobg1.jpg',
  },
  {
    title: 'Inclusive by design',
    link: '#',
    description: 'Showcase inclusivity with AI generated models - diverse in tone, body and style - so your visuals reflect real customers, everywhere.',
    stat: '+150%',
    statText: 'CTR lift from using diverse models to connect with more customers.',
    image: '/images/herobg.jpg',
  },
  {
    title: 'Editorials made easy',
    link: '#',
    description: 'Drapeify lets creative teams bring their campaign ideas to life. Generate fashion-forward visuals at scale with built-in consistency & flexibility.',
    stat: null,
    review: '"Since using Drapeify, we can finally focus on creativity instead of coordination & operate with the seamless flexibility modern fashion demands."',
    reviewer: 'Suhani Saranga, Head of Creative at a Axomiya Buwari',
    image: '/images/hero_crop_4.png',
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

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
