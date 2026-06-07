import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import ModelsGallery from './pages/ModelsGallery'
import OnModel from './pages/OnModel'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.0, // Extremely slow, luxurious glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 1.5,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/on-model" element={<OnModel />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/models" element={<ModelsGallery />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
