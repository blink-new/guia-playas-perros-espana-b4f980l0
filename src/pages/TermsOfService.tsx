import React from 'react'
import { FileText, Users, Shield, AlertTriangle } from 'lucide-react'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Términos de Servicio
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Aceptación de los Términos
              </h2>
              <p className="text-gray-700">
                Al acceder y utilizar Playas para Perros, aceptas estar sujeto a estos términos 
                de servicio y a nuestra política de privacidad. Si no estás de acuerdo con 
                alguno de estos términos, no debes utilizar nuestros servicios.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                Uso de la Plataforma
              </h2>
              <p className="text-gray-700 mb-4">
                Playas para Perros es una plataforma informativa sobre playas dog-friendly en España. 
                Al utilizar nuestros servicios, te comprometes a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Respetar a otros usuarios y sus opiniones</li>
                <li>No publicar contenido ofensivo, ilegal o inapropiado</li>
                <li>No utilizar la plataforma para fines comerciales sin autorización</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cuentas de Usuario
              </h2>
              <p className="text-gray-700 mb-4">
                Para acceder a ciertas funcionalidades, puedes necesitar crear una cuenta:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Eres responsable de mantener la confidencialidad de tu cuenta</li>
                <li>Debes notificarnos inmediatamente sobre cualquier uso no autorizado</li>
                <li>No puedes transferir tu cuenta a terceros</li>
                <li>Podemos suspender o terminar cuentas que violen estos términos</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contenido del Usuario
              </h2>
              <p className="text-gray-700 mb-4">
                Al publicar contenido en nuestra plataforma (reseñas, fotos, comentarios):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mantienes la propiedad de tu contenido</li>
                <li>Nos otorgas una licencia para usar, mostrar y distribuir tu contenido</li>
                <li>Garantizas que tienes los derechos necesarios sobre el contenido</li>
                <li>El contenido debe ser original y no infringir derechos de terceros</li>
                <li>Nos reservamos el derecho a moderar y eliminar contenido inapropiado</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-primary" />
                Propiedad Intelectual
              </h2>
              <p className="text-gray-700 mb-4">
                Todo el contenido de la plataforma está protegido por derechos de propiedad intelectual:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>El diseño, código y funcionalidades son propiedad de Playas para Perros</li>
                <li>Las marcas comerciales y logos están protegidos</li>
                <li>No puedes copiar, modificar o distribuir nuestro contenido sin permiso</li>
                <li>Respetamos los derechos de propiedad intelectual de terceros</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Información de Playas
              </h2>
              <p className="text-gray-700 mb-4">
                Sobre la información proporcionada en nuestra plataforma:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Nos esforzamos por mantener información precisa y actualizada</li>
                <li>La información puede cambiar sin previo aviso</li>
                <li>Recomendamos verificar información crítica antes de viajar</li>
                <li>No somos responsables de cambios en regulaciones locales</li>
                <li>Las reseñas reflejan opiniones personales de los usuarios</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-primary" />
                Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700 mb-4">
                En la máxima medida permitida por la ley:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Proporcionamos la plataforma "tal como está"</li>
                <li>No garantizamos la disponibilidad continua del servicio</li>
                <li>No somos responsables de daños indirectos o consecuenciales</li>
                <li>Tu uso de la información es bajo tu propio riesgo</li>
                <li>Nuestra responsabilidad se limita al máximo permitido por la ley</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Conducta Prohibida
              </h2>
              <p className="text-gray-700 mb-4">
                Está prohibido:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Publicar contenido falso, engañoso o difamatorio</li>
                <li>Acosar, intimidar o amenazar a otros usuarios</li>
                <li>Intentar acceder a cuentas de otros usuarios</li>
                <li>Utilizar bots o scripts automatizados</li>
                <li>Interferir con el funcionamiento de la plataforma</li>
                <li>Violar cualquier ley o regulación aplicable</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Modificaciones del Servicio
              </h2>
              <p className="text-gray-700">
                Nos reservamos el derecho a modificar, suspender o discontinuar cualquier 
                parte de nuestros servicios en cualquier momento, con o sin previo aviso. 
                No seremos responsables ante ti o terceros por cualquier modificación, 
                suspensión o discontinuación del servicio.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Terminación
              </h2>
              <p className="text-gray-700">
                Podemos terminar o suspender tu acceso a nuestros servicios inmediatamente, 
                sin previo aviso, por cualquier motivo, incluyendo la violación de estos 
                términos. Al terminar, tu derecho a usar el servicio cesará inmediatamente.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ley Aplicable
              </h2>
              <p className="text-gray-700">
                Estos términos se rigen por las leyes de España. Cualquier disputa será 
                resuelta en los tribunales competentes de Madrid, España.
              </p>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contacto
              </h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre estos términos de servicio, puedes contactarnos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Email: legal@playasparaperros.es</li>
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

export default TermsOfService