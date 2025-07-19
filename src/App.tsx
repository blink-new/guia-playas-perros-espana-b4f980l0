import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import BeachDirectory from './pages/BeachDirectory'
import BeachDetail from './pages/BeachDetail'
import MapView from './pages/MapView'
import PhotoGallery from './pages/PhotoGallery'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/playas" element={<BeachDirectory />} />
            <Route path="/playa/:id" element={<BeachDetail />} />
            <Route path="/mapa" element={<MapView />} />
            <Route path="/galeria" element={<PhotoGallery />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App