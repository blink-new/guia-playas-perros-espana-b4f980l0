import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Star, Droplets, Car, Shield, Utensils, ExternalLink, Heart, Share2, Camera } from 'lucide-react'

const BeachDetail = () => {
  const { id } = useParams()
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock data - in a real app, this would come from an API
  const beach = {
    id: parseInt(id || '1'),
    name: 'Playa de la Rubina',
    location: 'Empuriabrava, Girona',
    province: 'Cataluña',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ],
    facilities: ['shower', 'parking', 'lifeguard', 'restaurant'],
    description: 'La Playa de la Rubina es una hermosa playa situada en Empuriabrava, conocida por ser muy amigable con los perros. Cuenta con excelentes instalaciones y un ambiente relajado perfecto para disfrutar con tu mascota.',
    rules: [
      'Los perros deben estar bajo control en todo momento',
      'Recoger los excrementos es obligatorio',
      'Se recomienda llevar agua fresca para tu mascota',
      'Respetar a otros bañistas y sus mascotas'
    ],
    coordinates: {
      lat: 42.2506,
      lng: 3.1287
    },
    openingHours: 'Abierto 24 horas',
    bestTime: 'Temprano en la mañana o al atardecer',
    accessibility: 'Acceso fácil desde el parking'
  }

  const getFacilityIcon = (facility: string) => {
    switch (facility) {
      case 'shower':
        return <Droplets className="w-5 h-5" />
      case 'parking':
        return <Car className="w-5 h-5" />
      case 'lifeguard':
        return <Shield className="w-5 h-5" />
      case 'restaurant':
        return <Utensils className="w-5 h-5" />
      default:
        return null
    }
  }

  const getFacilityName = (facility: string) => {
    switch (facility) {
      case 'shower':
        return 'Ducha para perros'
      case 'parking':
        return 'Aparcamiento'
      case 'lifeguard':
        return 'Socorrista'
      case 'restaurant':
        return 'Restaurante'
      default:
        return facility
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: beach.name,
        text: `Descubre ${beach.name} en ${beach.location}`,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Enlace copiado al portapapeles')
    }
  }

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${beach.coordinates.lat},${beach.coordinates.lng}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/playas"
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a la búsqueda
            </Link>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-lg transition-colors ${
                  isFavorite ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="md:row-span-2">
                  <img
                    src={beach.images[0]}
                    alt={beach.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={beach.images[1]}
                    alt={beach.name}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div>
                  <img
                    src={beach.images[2]}
                    alt={beach.name}
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Beach Info */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {beach.name}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{beach.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-medium">{beach.rating}</span>
                  <span className="text-gray-500">({beach.reviews} reseñas)</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                {beach.description}
              </p>

              {/* Facilities */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Instalaciones
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {beach.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-primary/10 rounded-lg"
                    >
                      <div className="text-primary">
                        {getFacilityIcon(facility)}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {getFacilityName(facility)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Normas y Recomendaciones
                </h3>
                <ul className="space-y-2">
                  {beach.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Reseñas de la Comunidad
                </h3>
                <button className="text-primary hover:text-blue-600 font-medium">
                  Escribir reseña
                </button>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">M</span>
                      </div>
                      <span className="font-medium text-gray-900">María García</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Excelente playa para ir con perros. Muy limpia y con buenas instalaciones. 
                    Mi golden retriever se lo pasó genial corriendo por la arena.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">J</span>
                      </div>
                      <span className="font-medium text-gray-900">Javier López</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Muy buena playa, aunque puede estar un poco concurrida en verano. 
                    Las duchas para perros son muy útiles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Información Práctica
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-500">Horario:</span>
                  <p className="text-gray-900">{beach.openingHours}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Mejor momento:</span>
                  <p className="text-gray-900">{beach.bestTime}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Accesibilidad:</span>
                  <p className="text-gray-900">{beach.accessibility}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Ubicación
              </h3>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <p className="text-gray-500">Mapa interactivo</p>
              </div>
              <button
                onClick={openInGoogleMaps}
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir en Google Maps</span>
              </button>
            </div>

            {/* Photo Upload */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Comparte tu Experiencia
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                ¿Has visitado esta playa con tu perro? Comparte tus fotos con la comunidad.
              </p>
              <button className="w-full bg-accent text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>Subir Fotos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeachDetail