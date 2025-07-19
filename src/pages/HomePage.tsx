import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Star, Droplets, Car, Shield, Utensils, ChevronDown, Plus } from 'lucide-react'

const HomePage = () => {
  const [selectedProvince, setSelectedProvince] = useState('')

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

  const featuredBeaches = [
    {
      id: 1,
      name: 'Playa de la Rubina',
      location: 'Empuriabrava, Girona',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      facilities: ['shower', 'parking', 'lifeguard', 'restaurant']
    },
    {
      id: 2,
      name: 'Playa del Espigón',
      location: 'Huelva, Andalucía',
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      facilities: ['shower', 'parking', 'restaurant']
    },
    {
      id: 3,
      name: 'Playa de Agua Amarga',
      location: 'Níjar, Almería',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      facilities: ['parking', 'lifeguard']
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Encuentra todas las playas para perros en España
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre los mejores destinos costeros donde disfrutar con tu mascota. 
            Información actualizada, reseñas de la comunidad y todo lo que necesitas para un día perfecto en la playa.
          </p>

          {/* Search Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar por nombre de playa o ciudad..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div className="relative">
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
              <Link
                to="/playas"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Buscar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Beaches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Playas Destacadas
            </h2>
            <p className="text-lg text-gray-600">
              Las playas mejor valoradas por nuestra comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBeaches.map((beach) => (
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

          <div className="text-center mt-12">
            <Link
              to="/playas"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Ver Todas las Playas
              <Search className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Conoces una playa que no está en nuestra lista?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ayúdanos a crear la guía más completa de España. Comparte tu playa favorita con la comunidad.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Añadir Playa
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage