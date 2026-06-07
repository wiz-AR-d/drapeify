import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import Carousel from '../components/Carousel'
import BrandSlider from '../components/BrandSlider'
import Benefits from '../components/Benefits'
import CreativePartner from '../components/CreativePartner'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main>
      <div className="hero-wrapper">
        <Hero />
        <TrustedBy />
      </div>
      <Carousel />
      <BrandSlider />
      <Benefits />
      <CreativePartner />
      <CTA />
    </main>
  )
}
