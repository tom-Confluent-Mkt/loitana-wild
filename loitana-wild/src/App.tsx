import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import TheResidence from './pages/TheResidence'
import Expeditions from './pages/Expeditions'
import TailorYourStay from './pages/TailorYourStay'
import Inquiry from './pages/Inquiry'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-residence" element={<TheResidence />} />
        <Route path="/expeditions" element={<Expeditions />} />
        <Route path="/tailor-your-stay" element={<TailorYourStay />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
