import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Playas para Perros</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              La guía más completa de playas para perros en España. Descubre los mejores destinos 
              costeros donde disfrutar con tu mascota de forma responsable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/playas" className="text-gray-300 hover:text-primary transition-colors">
                  Buscar Playas
                </Link>
              </li>
              <li>
                <Link to="/mapa" className="text-gray-300 hover:text-primary transition-colors">
                  Mapa Interactivo
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-300 hover:text-primary transition-colors">
                  Galería de Fotos
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidad" className="text-gray-300 hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-gray-300 hover:text-primary transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Playas para Perros España. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer