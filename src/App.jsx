import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Carousel from './components/Carousel'
import BrandSlider from './components/BrandSlider'
import Benefits from './components/Benefits'
import Quality from './components/Quality'
import CreativePartner from './components/CreativePartner'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero-wrapper">
          <Hero />
          <TrustedBy />
        </div>
        <Carousel />
        <BrandSlider />
        <Benefits />
        <Quality />
        <CreativePartner />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
