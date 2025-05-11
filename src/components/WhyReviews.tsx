
import React from 'react';

const WhyReviews = () => {
  return (
    <section className="section-padding bg-white" id="por-que">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Las Reseñas Importan?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Las reseñas de Google no son solo opiniones, son herramientas poderosas que impulsan tu negocio y construyen confianza con tus clientes potenciales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl font-bold mb-2 text-brand-blue">93%</div>
            <p className="text-gray-700 font-medium">
              de los consumidores leen reseñas online antes de comprar un producto o servicio
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl font-bold mb-2 text-brand-green">4.5+</div>
            <p className="text-gray-700 font-medium">
              Es la calificación mínima que busca el 82% de los clientes antes de elegir un negocio
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl font-bold mb-2 text-brand-blue">87%</div>
            <p className="text-gray-700 font-medium">
              de los negocios con reseñas positivas reciben más llamadas y visitas a su sitio web
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-brand-blue text-white p-8 md:p-12 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Cómo funcionan nuestras reseñas personalizadas?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="ml-3">Creamos perfiles reales con historiales de actividad genuinos</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="ml-3">Redactamos contenido específico para tu industria y necesidades</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="ml-3">Programamos publicaciones escalonadas para máxima credibilidad</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="ml-3">Monitoreamos y ajustamos la estrategia constantemente</p>
                </li>
              </ul>
            </div>
            
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-brand-green opacity-10 rounded-full filter blur-3xl"></div>
                <svg className="w-full h-auto text-brand-green" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M47.7,-57.2C59.5,-47.3,65.8,-30.9,68.7,-13.6C71.6,3.6,71.2,21.8,62.6,33.8C54.1,45.8,37.4,51.5,20.6,57.8C3.7,64.1,-13.3,71,-29.3,68C-45.3,65,-60.2,52.1,-67.1,36.5C-74.1,20.9,-73,2.6,-67.3,-12.9C-61.6,-28.3,-51.2,-40.9,-38.5,-50.8C-25.8,-60.6,-10.7,-67.6,3.2,-71.3C17.1,-74.9,35.9,-75.1,47.7,-65.2Z" transform="translate(100 100)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex text-yellow-400 mb-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">
                      "El mejor servicio para mejorar la reputación online de tu negocio. Muy profesionales."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyReviews;
