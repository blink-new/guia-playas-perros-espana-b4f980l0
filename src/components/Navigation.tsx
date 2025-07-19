import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Heart, MapPin, Camera, Search } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Playas para Perros
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/playas" 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Buscar Playas</span>
            </Link>
            <Link 
              to="/mapa" 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Mapa</span>
            </Link>
            <Link 
              to="/galeria" 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
            >
              <Camera className="w-4 h-4" />
              <span>Galería</span>
            </Link>
            <Link 
              to="/sobre-nosotros" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </Link>
            <Link 
              to="/contacto" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/playas" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="w-4 h-4" />
                <span>Buscar Playas</span>
              </Link>
              <Link 
                to="/mapa" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="w-4 h-4" />
                <span>Mapa</span>
              </Link>
              <Link 
                to="/galeria" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Camera className="w-4 h-4" />
                <span>Galería</span>
              </Link>
              <Link 
                to="/sobre-nosotros" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/contacto" 
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation