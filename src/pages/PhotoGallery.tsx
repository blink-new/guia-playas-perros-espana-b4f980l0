import React, { useState } from 'react'
import { Camera, Heart, MapPin, User, Filter, Grid, Upload } from 'lucide-react'

const PhotoGallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const filters = [
    { id: 'all', label: 'Todas las fotos' },
    { id: 'recent', label: 'Recientes' },
    { id: 'popular', label: 'Populares' },
    { id: 'andalucia', label: 'Andalucía' },
    { id: 'cataluna', label: 'Cataluña' },
    { id: 'valencia', label: 'Valencia' }
  ]

  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
      beachName: 'Playa de la Rubina',
      location: 'Empuriabrava, Girona',
      user: 'María García',
      likes: 24,
      description: 'Mi golden retriever disfrutando de un día perfecto en la playa',
      category: 'cataluna'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop',
      beachName: 'Playa del Espigón',
      location: 'Huelva, Andalucía',
      user: 'Javier López',
      likes: 18,
      description: 'Atardecer mágico con mi compañero de cuatro patas',
      category: 'andalucia'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
      beachName: 'Playa de Agua Amarga',
      location: 'Níjar, Almería',
      user: 'Ana Martín',
      likes: 31,
      description: 'Las aguas cristalinas de Almería son perfectas para los perros',
      category: 'andalucia'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=400&fit=crop',
      beachName: 'Playa de Riazor',
      location: 'A Coruña, Galicia',
      user: 'Carlos Fernández',
      likes: 15,
      description: 'Corriendo libre por la arena gallega',
      category: 'galicia'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      beachName: 'Playa de la Malvarrosa',
      location: 'Valencia, Valencia',
      user: 'Laura Ruiz',
      likes: 22,
      description: 'Primer día de playa de mi cachorro en Valencia',
      category: 'valencia'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop&sat=-50',
      beachName: 'Playa de Zarautz',
      location: 'Zarautz, País Vasco',
      user: 'Mikel Etxeberria',
      likes: 28,
      description: 'Surf y perros, la combinación perfecta en el País Vasco',
      category: 'pais-vasco'
    }
  ]

  const filteredPhotos = selectedFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Galería de Fotos
              </h1>
              <p className="text-lg text-gray-600">
                Descubre las mejores fotos de perros disfrutando en las playas de España
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>Subir Foto</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-1 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            {filteredPhotos.length} fotos encontradas
          </p>
          <div className="flex items-center space-x-2">
            <Grid className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">Vista de cuadrícula</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <div className="relative">
                <img
                  src={photo.url}
                  alt={photo.description}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2">
                  <Camera className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-black/50 rounded-lg p-2 text-white">
                    <h3 className="font-medium text-sm mb-1">{photo.beachName}</h3>
                    <div className="flex items-center text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{photo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                  {photo.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">{photo.user}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-600">{photo.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No hay fotos en esta categoría
            </h3>
            <p className="text-gray-500 mb-6">
              Sé el primero en compartir una foto de esta región
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Subir Primera Foto
            </button>
          </div>
        )}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const photo = photos.find(p => p.id === selectedPhoto)
              if (!photo) return null
              
              return (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <img
                      src={photo.url}
                      alt={photo.description}
                      className="w-full h-96 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-900">{photo.user}</span>
                      </div>
                      <button
                        onClick={() => setSelectedPhoto(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {photo.beachName}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{photo.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {photo.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-gray-600">{photo.likes} me gusta</span>
                      </div>
                      <button className="text-primary hover:text-blue-600 font-medium">
                        Ver playa
                      </button>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoGallery