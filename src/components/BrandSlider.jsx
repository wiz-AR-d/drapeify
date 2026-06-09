import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BrandSlider.css'

const brandSlides = [
  { image: '/images/hero_crop_2.jpeg', brand: 'NARIE SAREES', alt: 'Narie AI fashion model' },
  { image: '/images/heroblue.jpg', brand: 'SWADESHI VIDESHI', alt: 'Swadeshi Videshi AI fashion model' },
  { image: '/images/mqc1 copy.png', brand: 'THREADZ', alt: 'ThreadZ AI fashion model' },
  { image: '/images/ChatGPT Image Jun 6, 2026, 06_58_19 PM.png', brand: 'AXOMIYA BUWARI', alt: 'Axomiya Buwari AI fashion model' },
  { image: '/images/ChatGPT Image Jun 6, 2026, 06_30_20 PM.png', brand: '29SHADESFF', alt: '29SHADESFF AI fashion model' },
  { image: '/images/ChatGPT Image Jun 6, 2026, 08_06_11 PM.png', brand: 'SWADESHI VIDESHI', alt: 'Swadeshi Videshi AI fashion model' },
  { image: '/images/mymq1 copy.png', brand: 'THREADZ', alt: 'Swadeshi Videshi AI fashion model' },
]

export default function BrandSlider() {
  const sliderRef = useRef(null)
  const wrapperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(2)

  // Track dimensions for precise centering calculation
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

  const scroll = (dir) => {
    setActiveIndex(prev => {
      if (dir === 'next') return (prev + 1) % brandSlides.length
      return (prev - 1 + brandSlides.length) % brandSlides.length
    })
  }

  // Handle resizing to keep track perfectly centered
  useEffect(() => {
    const updateWidth = () => {
      if (wrapperRef.current) setWrapperWidth(wrapperRef.current.offsetWidth)
      setWindowWidth(window.innerWidth)
    }
    // Set initial widths
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Auto-play interval: every 2.5 seconds to allow the slower 1s transition to finish smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      scroll('next')
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  // Mathematical logic for perfect physical centering
  const getDims = () => {
    if (windowWidth <= 479) return { i: 140, a: 220, g: 20 }
    if (windowWidth <= 991) return { i: 180, a: 260, g: 20 }
    if (windowWidth <= 1536) return { i: 220, a: 300, g: 20 }
    return { i: 240, a: 340, g: 20 }
  }

  const dims = getDims()
  const precedingWidth = activeIndex * dims.i + activeIndex * dims.g
  const activeCenter = precedingWidth + (dims.a / 2)
  const translateX = wrapperWidth > 0 ? (wrapperWidth / 2) - activeCenter : 0

  return (
    <section id="model-gallery" className="brand-slider-section">
      <div className="container">
        <div className="brand-slider-header">
          <h2 className="brand-slider-h2">Real brands, real results.</h2>
          <p className="brand-slider-subtitle">
            See how AI-generated models for fashion make a difference.
          </p>
          <div className="buttons-row" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary dark">Get Started</Link>
            <Link to="/contact" className="btn-primary outline">Book a Call</Link>
          </div>
        </div>

        <div className="brand-slider-wrapper" ref={wrapperRef}>
          <div
            className="brand-slider-track"
            ref={sliderRef}
            style={{
              transform: `translateX(${translateX}px)`
            }}
          >
            {brandSlides.map((slide, i) => (
              <div
                key={i}
                className={`brand-slide ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <img src={slide.image} alt={slide.alt} className="img-cover" />
                <div className="brand-slide-tag">
                  <span>{slide.brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="brand-slider-nav">
          <button className="brand-slider-btn" onClick={() => scroll('prev')} aria-label="Previous">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M7.20916 0.105635C7.49918 0.259706 7.67138 0.527067 7.69404 0.857869C7.73029 1.3654 7.84358 1.23399 4.97059 4.11151L2.33323 6.75339L4.97059 9.39527C7.84358 12.2728 7.73029 12.1414 7.69404 12.6489C7.65778 13.1474 7.2726 13.5054 6.76054 13.5054C6.62913 13.5054 6.44333 13.4737 6.3527 13.4283C6.16238 13.3468 0.398271 7.62798 0.167163 7.29717C0.00402784 7.06153 -0.0458188 6.69448 0.0448117 6.40899C0.090127 6.26399 0.688289 5.64317 3.12172 3.2052C5.14278 1.17961 6.19863 0.15095 6.32551 0.0920401C6.58381 -0.0348425 6.95087 -0.0303106 7.20916 0.105635Z" fill="#666666" />
            </svg>
          </button>
          <button className="brand-slider-btn" onClick={() => scroll('next')} aria-label="Next">
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
              <path d="M0.437212 0.0929718C0.181689 0.228718 0.029972 0.464278 0.0100093 0.755734C-0.0219311 1.2029 -0.121745 1.08712 2.40953 3.62238L4.73319 5.95003L2.40953 8.27769C-0.121745 10.813 -0.0219311 10.6972 0.0100093 11.1443C0.0419496 11.5835 0.381316 11.8989 0.832473 11.8989C0.948257 11.8989 1.11195 11.871 1.1918 11.8311C1.35949 11.7592 6.43801 6.7206 6.64163 6.42914C6.78536 6.22153 6.82928 5.89813 6.74942 5.6466C6.7095 5.51884 6.18248 4.97186 4.03849 2.82387C2.25781 1.0392 1.32755 0.132897 1.21576 0.0809937C0.988183 -0.030797 0.664787 -0.0268049 0.437212 0.0929718Z" fill="#666666" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
