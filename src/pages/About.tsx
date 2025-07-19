import React from 'react'
import { Heart, Users, MapPin, Star, Shield, Camera } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: MapPin, label: 'Playas Registradas', value: '150+' },
    { icon: Users, label: 'Usuarios Activos', value: '5,000+' },
    { icon: Star, label: 'Reseñas Publicadas', value: '2,500+' },
    { icon: Camera, label: 'Fotos Compartidas', value: '10,000+' }
  ]

  const team = [
    {
      name: 'María González',
      role: 'Fundadora & CEO',
      description: 'Amante de los perros y viajera empedernida. Creó esta plataforma después de años buscando playas dog-friendly por España.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Carlos Martín',
      role: 'Director Técnico',
      description: 'Desarrollador apasionado por crear herramientas útiles para la comunidad de dueños de mascotas.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ana López',
      role: 'Community Manager',
      description: 'Gestiona nuestra comunidad y se asegura de que todas las reseñas y fotos cumplan nuestros estándares de calidad.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre Playas para Perros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos la comunidad más grande de España dedicada a ayudar a los dueños de perros 
            a encontrar las mejores playas donde disfrutar con sus mascotas de forma responsable.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Creemos que los perros son parte de la familia y merecen disfrutar de las 
                mejores experiencias junto a sus humanos. Por eso, hemos creado la guía 
                más completa y actualizada de playas dog-friendly en España.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro objetivo es promover el turismo responsable con mascotas, 
                proporcionando información detallada sobre instalaciones, normas y 
                recomendaciones para que cada visita sea perfecta.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Información verificada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Comunidad activa</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
                alt="Perro en la playa"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  <span className="font-semibold text-gray-900">+10,000 familias felices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Comunidad en Números
            </h2>
            <p className="text-lg text-gray-600">
              Cada día más familias confían en nosotros para sus aventuras playeras
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600">
              Conoce a las personas que hacen posible esta comunidad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Amor por los Animales
              </h3>
              <p className="text-blue-100">
                Los perros son familia y merecen las mejores experiencias
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Turismo Responsable
              </h3>
              <p className="text-blue-100">
                Promovemos el respeto por el medio ambiente y las comunidades locales
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Comunidad Unida
              </h3>
              <p className="text-blue-100">
                Creemos en el poder de compartir experiencias y ayudarnos mutuamente
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About