
import React from 'react';
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="section-padding bg-gray-50" id="servicios">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones personalizadas para aumentar tu visibilidad online, mejorar tu reputación y elevar tu posicionamiento en Google.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Servicio de Reseñas */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-brand-blue p-6">
              <h3 className="text-2xl font-bold text-white">Reseñas Google Personalizadas</h3>
              <p className="text-blue-100 mt-2">
                Mejora tu reputación online con reseñas genuinas y personalizadas
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div className="ml-3">
                    <p className="font-medium">Segmentación por industria</p>
                    <p className="text-sm text-gray-600">Reseñas adaptadas específicamente a tu sector y público objetivo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div className="ml-3">
                    <p className="font-medium">Redacción natural y personalizada</p>
                    <p className="text-sm text-gray-600">Contenido genuino que destaca tus puntos fuertes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div className="ml-3">
                    <p className="font-medium">Estrategia completa</p>
                    <p className="text-sm text-gray-600">Programación optimizada para credibilidad y visibilidad</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button className="w-full btn-primary">Solicitar Info</Button>
              </div>
            </div>
          </div>
          
          {/* Servicio de SEO */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-brand-green p-6">
              <h3 className="text-2xl font-bold text-white">Posicionamiento SEO</h3>
              <p className="text-green-100 mt-2">
                Mejora tu visibilidad en los resultados de búsqueda y aumenta tu tráfico web
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-blue mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div className="ml-3">
                    <p className="font-medium">SEO técnico</p>
                    <p className="text-sm text-gray-600">Optimización del rendimiento y estructura de tu sitio web</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-blue mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div className="ml-3">
                    <p className="font-medium">SEO local</p>
                    <p className="text-sm text-gray-600">Posicionamiento específico para búsquedas en tu área geográfica</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-blue mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div className="ml-3">
                    <p className="font-medium">Estrategias de contenido</p>
                    <p className="text-sm text-gray-600">Creación de contenido optimizado para palabras clave relevantes</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button className="w-full btn-secondary">Solicitar Info</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">¿No encuentras lo que buscas?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ofrecemos servicios personalizados adaptados a las necesidades específicas de tu negocio. Contáctanos para una consulta gratuita.
          </p>
          <Button className="btn-outline text-lg px-8 py-6">
            Solicitar Consulta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
