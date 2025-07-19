import React from 'react'
import { Shield, Eye, Lock, Users } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidad
            </h1>
            <p className="text-lg text-gray-600">
              Última actualización: 15 de enero de 2024
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-primary" />
                Información que Recopilamos
              </h2>
              <p className="text-gray-700 mb-4">
                En Playas para Perros, recopilamos la siguiente información:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Información de registro: nombre, email y preferencias de usuario</li>
                <li>Contenido generado: reseñas, fotos y comentarios que compartes</li>
                <li>Datos de uso: páginas visitadas, tiempo de navegación y interacciones</li>
                <li>Información técnica: dirección IP, tipo de navegador y dispositivo</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-primary" />
                Cómo Usamos tu Información
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Personalizar tu experiencia en la plataforma</li>
                <li>Comunicarnos contigo sobre actualizaciones y novedades</li>
                <li>Moderar contenido y mantener la seguridad de la comunidad</li>
                <li>Analizar el uso de la plataforma para mejoras futuras</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                Compartir Información
              </h2>
              <p className="text-gray-700 mb-4">
                No vendemos ni alquilamos tu información personal. Podemos compartir información en los siguientes casos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Con tu consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
                <li>En caso de fusión, adquisición o venta de activos</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies y Tecnologías Similares
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies y tecnologías similares para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Recordar tus preferencias y configuraciones</li>
                <li>Analizar el tráfico y uso de la plataforma</li>
                <li>Proporcionar funcionalidades de redes sociales</li>
                <li>Mostrar contenido personalizado</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Puedes controlar las cookies a través de la configuración de tu navegador.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Seguridad de los Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Acceso restringido a información personal</li>
                <li>Monitoreo regular de sistemas de seguridad</li>
                <li>Auditorías de seguridad periódicas</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tus Derechos
              </h2>
              <p className="text-gray-700 mb-4">
                Tienes los siguientes derechos sobre tu información personal:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Acceso: solicitar una copia de tu información personal</li>
                <li>Rectificación: corregir información inexacta o incompleta</li>
                <li>Supresión: solicitar la eliminación de tu información</li>
                <li>Portabilidad: recibir tu información en un formato estructurado</li>
                <li>Oposición: oponerte al procesamiento de tu información</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Retención de Datos
              </h2>
              <p className="text-gray-700">
                Conservamos tu información personal durante el tiempo necesario para cumplir con los 
                propósitos descritos en esta política, a menos que la ley requiera o permita un 
                período de retención más largo.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Menores de Edad
              </h2>
              <p className="text-gray-700">
                Nuestros servicios están dirigidos a personas mayores de 16 años. No recopilamos 
                intencionalmente información personal de menores de 16 años sin el consentimiento 
                de los padres o tutores.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cambios en esta Política
              </h2>
              <p className="text-gray-700">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
                sobre cambios significativos publicando la nueva política en nuestro sitio web 
                y actualizando la fecha de "última actualización".
              </p>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contacto
              </h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos 
                tu información personal, puedes contactarnos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Email: privacidad@playasparaperros.es</li>
                <li>Teléfono: +34 900 123 456</li>
                <li>Dirección: Madrid, España</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy