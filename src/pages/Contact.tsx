import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, Plus, Flag } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('¡Gracias por tu mensaje! Te responderemos pronto.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hola@playasparaperros.es',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 900 123 456',
      description: 'Lunes a Viernes, 9:00 - 18:00'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      value: 'Madrid, España',
      description: 'Cita previa requerida'
    }
  ]

  const contactTypes = [
    { value: 'general', label: 'Consulta General', icon: MessageCircle },
    { value: 'add-beach', label: 'Añadir Nueva Playa', icon: Plus },
    { value: 'report', label: 'Reportar Problema', icon: Flag },
    { value: 'partnership', label: 'Colaboración', icon: Mail }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contacta con Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta, sugerencia o quieres añadir una nueva playa? 
            Estamos aquí para ayudarte.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {info.value}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">
                    ¿Cómo puedo añadir una nueva playa?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Usa el formulario de contacto seleccionando "Añadir Nueva Playa" 
                    e incluye toda la información disponible.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">
                    ¿La información está actualizada?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Verificamos regularmente toda la información, pero agradecemos 
                    que nos reportes cualquier cambio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un Mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Tipo de Consulta
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {contactTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                          formData.type === type.value
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={type.value}
                          checked={formData.type === type.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <type.icon className={`w-5 h-5 ${
                          formData.type === type.value ? 'text-primary' : 'text-gray-400'
                        }`} />
                        <span className={`text-sm ${
                          formData.type === type.value ? 'text-primary font-medium' : 'text-gray-700'
                        }`}>
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Resumen de tu consulta"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe tu consulta con el mayor detalle posible..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 font-medium"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </div>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Nota:</strong> Nos comprometemos a responder todas las consultas en un plazo máximo de 24 horas. 
                  Para consultas urgentes, puedes llamarnos directamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact