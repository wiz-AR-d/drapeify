import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import ModelsGallery from './pages/ModelsGallery'
import OnModel from './pages/OnModel'
import FlatLay from './pages/FlatLay'
import Mannequin from './pages/Mannequin'
import CutProductionCosts from './pages/CutProductionCosts'
import GoToMarketFaster from './pages/GoToMarketFaster'
import CreateEditorials from './pages/CreateEditorials'
import IncreaseDiversity from './pages/IncreaseDiversity'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import Pricing from './pages/Pricing'
import './App.css'

function App() {
  const { pathname } = useLocation()
  const lenisRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.0, // Extremely slow, luxurious glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
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
        <Route path="/models" element={<ModelsGallery />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
