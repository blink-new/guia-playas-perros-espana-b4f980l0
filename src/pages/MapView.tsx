import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Star, Search, Filter, List } from 'lucide-react'

const MapView = () => {
  const [selectedBeach, setSelectedBeach] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const beaches = [
    {
      id: 1,
      name: 'Playa de la Rubina',
      location: 'Empuriabrava, Girona',
      rating: 4.8,
      reviews: 124,
      coordinates: { lat: 42.2506, lng: 3.1287 }
    },
    {
      id: 2,
      name: 'Playa del Espigón',
      location: 'Huelva, Andalucía',
      rating: 4.6,
      reviews: 89,
      coordinates: { lat: 37.2543, lng: -7.1234 }
    },
    {
      id: 3,
      name: 'Playa de Agua Amarga',
      location: 'Níjar, Almería',
      rating: 4.7,
      reviews: 156,
      coordinates: { lat: 36.9876, lng: -1.9543 }
    },
    {
      id: 4,
      name: 'Playa de Riazor',
      location: 'A Coruña, Galicia',
      rating: 4.5,
      reviews: 203,
      coordinates: { lat: 43.3623, lng: -8.4115 }
    }
  ]

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Mapa de Playas para Perros
            </h1>
            <Link
              to="/playas"
              className="inline-flex items-center text-primary hover:text-blue-600 font-medium"
            >
              <List className="w-4 h-4 mr-1" />
              Vista de Lista
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg overflow-y-auto">
          {/* Search */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar playas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Beach List */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">
              Playas Disponibles ({beaches.length})
            </h3>
            <div className="space-y-3">
              {beaches
                .filter(beach => 
                  beach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  beach.location.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((beach) => (
                <div
                  key={beach.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedBeach === beach.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedBeach(beach.id)}
                >
                  <h4 className="font-medium text-gray-900 mb-1">
                    {beach.name}
                  </h4>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{beach.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{beach.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {beach.reviews} reseñas
                    </span>
                  </div>
                  <Link
                    to={`/playa/${beach.id}`}
                    className="inline-block mt-2 text-primary hover:text-blue-600 text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver detalles →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Mapa Interactivo
              </h3>
              <p className="text-gray-500 max-w-md">
                Aquí se mostraría un mapa interactivo con todas las playas para perros de España. 
                Haz clic en los marcadores para ver más información.
              </p>
              {selectedBeach && (
                <div className="mt-6 p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Playa Seleccionada
                  </h4>
                  <p className="text-gray-600">
                    {beaches.find(b => b.id === selectedBeach)?.name}
                  </p>
                  <Link
                    to={`/playa/${selectedBeach}`}
                    className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  >
                    Ver Detalles
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold text-gray-900 mb-2">Leyenda</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Playa para perros</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Playa destacada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapView