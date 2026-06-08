import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import OnModel from './pages/OnModel'
import FlatLay from './pages/FlatLay'
import Mannequin from './pages/Mannequin'
import CutProductionCosts from './pages/CutProductionCosts'
import GoToMarketFaster from './pages/GoToMarketFaster'
import CreateEditorials from './pages/CreateEditorials'
import IncreaseDiversity from './pages/IncreaseDiversity'
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
        <Route path="/products/flat-lay" element={<FlatLay />} />
        <Route path="/products/mannequin" element={<Mannequin />} />
        <Route path="/solutions/cut-production-cost" element={<CutProductionCosts />} />
        <Route path="/solutions/go-to-market-faster" element={<GoToMarketFaster />} />
        <Route path="/solutions/create-editorials" element={<CreateEditorials />} />
        <Route path="/solutions/increase-diversity" element={<IncreaseDiversity />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
