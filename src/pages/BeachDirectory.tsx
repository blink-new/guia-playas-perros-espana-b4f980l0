import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Star, Droplets, Car, Shield, Utensils, Filter, Grid, List } from 'lucide-react'

const BeachDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const provinces = [
    'Todas las provincias',
    'Andalucía',
    'Cataluña',
    'Valencia',
    'Galicia',
    'Asturias',
    'Cantabria',
    'País Vasco',
    'Murcia',
    'Baleares',
    'Canarias'
  ]

  const beaches = [
    {
      id: 1,
      name: 'Playa de la Rubina',
      location: 'Empuriabrava, Girona',
      province: 'Cataluña',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      facilities: ['shower', 'parking', 'lifeguard', 'restaurant'],
      description: 'Una hermosa playa con excelentes instalaciones para perros y sus dueños.'
    },
    {
      id: 2,
      name: 'Playa del Espigón',
      location: 'Huelva, Andalucía',
      province: 'Andalucía',
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      facilities: ['shower', 'parking', 'restaurant'],
      description: 'Playa tranquila perfecta para pasear con tu mascota.'
    },
    {
      id: 3,
      name: 'Playa de Agua Amarga',
      location: 'Níjar, Almería',
      province: 'Andalucía',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      facilities: ['parking', 'lifeguard'],
      description: 'Playa natural con aguas cristalinas en un entorno protegido.'
    },
    {
      id: 4,
      name: 'Playa de Riazor',
      location: 'A Coruña, Galicia',
      province: 'Galicia',
      rating: 4.5,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop',
      facilities: ['shower', 'parking', 'lifeguard', 'restaurant'],
      description: 'Playa urbana con todas las comodidades en el corazón de A Coruña.'
    },
    {
      id: 5,
      name: 'Playa de la Malvarrosa',
      location: 'Valencia, Valencia',
      province: 'Valencia',
      rating: 4.4,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      facilities: ['shower', 'parking', 'restaurant'],
      description: 'Famosa playa valenciana con zona específica para perros.'
    },
    {
      id: 6,
      name: 'Playa de Zarautz',
      location: 'Zarautz, País Vasco',
      province: 'País Vasco',
      rating: 4.6,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      facilities: ['shower', 'parking', 'lifeguard'],
      description: 'Playa de surf con área designada para perros y excelente ambiente.'
    }
  ]

  const getFacilityIcon = (facility: string) => {
    switch (facility) {
      case 'shower':
        return <Droplets className="w-4 h-4" />
      case 'parking':
        return <Car className="w-4 h-4" />
      case 'lifeguard':
        return <Shield className="w-4 h-4" />
      case 'restaurant':
        return <Utensils className="w-4 h-4" />
      default:
        return null
    }
  }

  const filteredBeaches = beaches.filter(beach => {
    const matchesSearch = beach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         beach.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesProvince = selectedProvince === '' || selectedProvince === 'Todas las provincias' || 
                           beach.province === selectedProvince
    return matchesSearch && matchesProvince
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Directorio de Playas para Perros
          </h1>
          <p className="text-lg text-gray-600">
            Encuentra la playa perfecta para disfrutar con tu mascota
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por nombre de playa o ciudad..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Province Filter */}
            <div className="lg:w-64">
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            {filteredBeaches.length} playas encontradas
          </p>
          <Link
            to="/mapa"
            className="inline-flex items-center text-primary hover:text-blue-600 font-medium"
          >
            <MapPin className="w-4 h-4 mr-1" />
            Ver en Mapa
          </Link>
        </div>

        {/* Beach Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBeaches.map((beach) => (
              <Link
                key={beach.id}
                to={`/playa/${beach.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <img
                    src={beach.image}
                    alt={beach.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{beach.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {beach.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{beach.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {beach.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {beach.facilities.map((facility, index) => (
                        <div
                          key={index}
                          className="text-primary bg-primary/10 p-1 rounded"
                          title={facility}
                        >
                          {getFacilityIcon(facility)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {beach.reviews} reseñas
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBeaches.map((beach) => (
              <Link
                key={beach.id}
                to={`/playa/${beach.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group flex"
              >
                <div className="w-48 h-32 flex-shrink-0">
                  <img
                    src={beach.image}
                    alt={beach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {beach.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{beach.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        {beach.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {beach.facilities.map((facility, index) => (
                            <div
                              key={index}
                              className="text-primary bg-primary/10 p-1 rounded"
                              title={facility}
                            >
                              {getFacilityIcon(facility)}
                            </div>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {beach.reviews} reseñas
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 ml-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{beach.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredBeaches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              No se encontraron playas que coincidan con tu búsqueda
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedProvince('')
              }}
              className="text-primary hover:text-blue-600 font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BeachDirectory