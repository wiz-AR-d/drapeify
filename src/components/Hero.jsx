import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    // '/images/hero_model.jpeg',

    '/images/ok3.png',           // European — denim jacket

    // '/images/saree_wedding_model.png',   // Indian — zoomed in saree with wedding bg
    '/images/hh1.png',
    // Indian — linen kurta guy
    '/images/ok.png',           // European — pink sweater girl
    '/images/hero_crop_71.png',
    '/images/ok1.png',

    '/images/ok5.png',           // European — striped jersey guy

    // African — pink sweatshirt

  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-h1">
            <span className="hero-h1-light">AI fashion models</span>
            trusted by world-class fashion brands
          </h1>
          <div className="hero-details">
            <p className="hero-subtitle">
              Drapeify helps leading brands create authentic, on-brand imagery at scale, giving teams creative freedom, consistency and full control.
            </p>
            <div className="buttons-row">
              <Link to="/contact" className="btn-primary dark" id="header_getstarted">
                Get Started
              </Link>
              <Link to="/contact" className="btn-primary outline" id="header_bookacall">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-wrapper">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
          >
            <img
              src={img}
              alt={`AI-generated fashion photo ${i + 1}`}
              className="img-cover hero-slide-img"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
