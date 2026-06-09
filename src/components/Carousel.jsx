import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Carousel.css'

const slides = [
  {
    image: '/images/cro1.png',
    alt: 'On model photography showing AI-generated fashion model',
  },
  {
    image: '/images/cro2.png',
    alt: 'Flat lay to on-model conversion',
  },
  {
    image: '/images/co3.png',
    alt: 'Mannequin to model conversion',
  },
]

export default function Carousel() {
  const cardsRef = useRef([])
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        
        const stickyTop = 280

        if (i < cardsRef.current.length - 1) {
          const nextCard = cardsRef.current[i + 1]
          if (!nextCard) return
          const nextRect = nextCard.getBoundingClientRect()
          
          const distance = nextRect.top - stickyTop
          const animationStartDistance = 500 // Start animating when the next card is 500px away
          
          if (distance <= animationStartDistance) {
            const rawProgress = 1 - (distance / animationStartDistance)
            const progress = Math.min(Math.max(rawProgress, 0), 1)
            
            const scale = 1 - progress * 0.15 // Increased shrink amount for more dramatic depth
            const opacity = 1 - progress * 0.4
            
            const inner = card.querySelector('.carousel-card-inner')
            if (inner) {
              inner.style.transform = `scale(${scale})`
              inner.style.opacity = opacity
            }
          } else {
            const inner = card.querySelector('.carousel-card-inner')
            if (inner) {
              inner.style.transform = 'scale(1)'
              inner.style.opacity = 1
            }
          }
        } else {
          // LAST CARD LOGIC
          // The last card should NEVER scale or fade out. It should remain solid 
          // to perfectly cover the previous stacked cards as the entire section scrolls up.
          const inner = card.querySelector('.carousel-card-inner')
          if (inner) {
            inner.style.transform = 'scale(1)'
            inner.style.opacity = 1
          }
        }
      })

      // Sync title scroll so it exits exactly at the same time as the last card
      if (cardsRef.current.length > 0 && titleRef.current) {
        const lastCard = cardsRef.current[cardsRef.current.length - 1]
        if (lastCard) {
          const lastCardRect = lastCard.getBoundingClientRect()
          const stickyTop = 280 // Must match the cards' CSS top
          if (lastCardRect.top < stickyTop) {
            // The last card is being pushed up! Push the title up by the exact same amount.
            const pushUpAmount = stickyTop - lastCardRect.top
            titleRef.current.style.top = `${120 - pushUpAmount}px`
          } else {
            // Reset to default sticky top
            titleRef.current.style.top = '120px'
          }
        }
      }

    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="carousel-section" ref={sectionRef}>
      <div className="carousel-title-container" ref={titleRef}>
        <h2 className="carousel-h2">One platform for every fashion workflow</h2>
        <Link to="/contact" className="btn-primary outline carousel-btn">
          Learn More
        </Link>
      </div>

      <div className="container">
        <div className="carousel-stack">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="carousel-card"
              ref={el => cardsRef.current[i] = el}
              style={{ '--card-index': i }}
            >
              <div className="carousel-card-inner">
                <img src={slide.image} alt={slide.alt} className="carousel-card-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
