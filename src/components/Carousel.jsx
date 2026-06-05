import { useState, useEffect } from 'react'
import './Carousel.css'

const slides = [
  {
    image: '/images/carousel_onmodel.png',
    alt: 'On model photography showing AI-generated fashion model',
    activeLabel: 'On model'
  },
  {
    image: '/images/carousel_flatlay.png',
    alt: 'Flat lay to on-model conversion',
    activeLabel: 'Flat lay'
  },
  {
    image: '/images/carousel_mannequin.png',
    alt: 'Mannequin to model conversion',
    activeLabel: 'Mannequin'
  },
]

const labels = ['On model', 'Flat lay', 'Mannequin', 'Video']

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="carousel-section">
      <div className="carousel-title-container">
        <h2 className="carousel-h2">One platform for every fashion workflow</h2>
        <a href="#" className="btn-primary outline carousel-btn">
          Learn More
        </a>
      </div>
      <div className="container">
        <div className="carousel-main">
          <div className="carousel-image-area">
            {slides.map((slide, i) => (
              <div key={i} className={`carousel-slide ${i === current ? 'active' : ''}`}>
                <img src={slide.image} alt={slide.alt} className="img-cover" />
              </div>
            ))}
          </div>
          <div className="carousel-labels">
            {labels.map((label, i) => (
              <button
                key={label}
                className={`carousel-label ${i === current ? 'active' : ''}`}
                onClick={() => i < slides.length && setCurrent(i)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-bg-gradient"></div>
    </section>
  )
}
