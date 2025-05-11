
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const pricingData = {
  reviews: [
    {
      name: "Básico",
      price: 99,
      features: [
        "10 reseñas personalizadas",
        "Creación por profesionales",
        "Publicación programada",
        "Informe de resultados",
      ],
      popular: false,
    },
    {
      name: "Estándar",
      price: 199,
      features: [
        "25 reseñas personalizadas",
        "Creación por profesionales",
        "Publicación programada",
        "Informe de resultados",
        "Respuesta a reseñas negativas",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: 349,
      features: [
        "50 reseñas personalizadas",
        "Creación por profesionales",
        "Publicación programada",
        "Informe de resultados",
        "Respuesta a reseñas negativas",
        "Estrategia de reputación completa",
      ],
      popular: false,
    },
    {
      name: "Empresarial",
      price: 599,
      features: [
        "100+ reseñas personalizadas",
        "Creación por profesionales",
        "Publicación programada",
        "Informe de resultados",
        "Respuesta a reseñas negativas",
        "Estrategia de reputación completa",
        "Gestor de cuenta dedicado",
      ],
      popular: false,
    },
  ],
  seo: [
    {
      name: "Básico",
      price: 199,
      features: [
        "Auditoría SEO inicial",
        "Optimización On-page",
        "Informe mensual",
        "Soporte por email",
      ],
      popular: false,
    },
    {
      name: "Estándar",
      price: 399,
      features: [
        "Auditoría SEO completa",
        "Optimización On-page",
        "Estrategia de keywords",
        "Optimización técnica",
        "Informe quincenal",
        "Soporte por email y teléfono",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: 699,
      features: [
        "Auditoría SEO avanzada",
        "Optimización On-page completa",
        "Estrategia de keywords",
        "Optimización técnica avanzada",
        "Creación de contenido",
        "SEO local",
        "Informe semanal",
        "Soporte prioritario",
      ],
      popular: false,
    },
    {
      name: "Empresarial",
      price: 999,
      features: [
        "Estrategia SEO todo incluido",
        "Optimización On-page avanzada",
        "Investigación de keywords",
        "Optimización técnica completa",
        "Creación de contenido premium",
        "SEO local y nacional",
        "Link building",
        "Informes personalizados",
        "Gestor de cuenta dedicado",
      ],
      popular: false,
    },
  ],
};

const Pricing = () => {
  const [serviceType, setServiceType] = useState('reviews');
  
  return (
    <section className="section-padding bg-white" id="precios">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes y Precios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones flexibles que se adaptan al tamaño y necesidades de tu negocio, sin contratos a largo plazo.
          </p>
          
          <div className="mt-8 inline-flex p-1 border border-gray-300 rounded-lg bg-gray-100">
            <button
              onClick={() => setServiceType('reviews')}
              className={`px-6 py-2 rounded-md text-center ${
                serviceType === 'reviews' ? 'bg-white shadow-sm font-medium' : 'text-gray-600'
              }`}
            >
              Reseñas Google
            </button>
            <button
              onClick={() => setServiceType('seo')}
              className={`px-6 py-2 rounded-md text-center ${
                serviceType === 'seo' ? 'bg-white shadow-sm font-medium' : 'text-gray-600'
              }`}
            >
              Posicionamiento SEO
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData[serviceType].map((plan, index) => (
            <div 
              key={index}
              className={`border rounded-xl overflow-hidden transition-all ${
                plan.popular ? 'relative transform hover:-translate-y-2 border-brand-blue shadow-xl' : 'hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-semibold py-1 px-3 rounded-bl">
                  Más popular
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'bg-blue-50' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                  <span className="text-gray-500 ml-2">/mes</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Facturación mensual, cancela cuando quieras
                </p>
              </div>
              
              <div className="border-t p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`w-5 h-5 ${plan.popular ? 'text-brand-blue' : 'text-brand-green'} mt-0.5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                    Seleccionar plan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">¿Necesitas una solución personalizada?</h3>
            <p className="text-gray-600 mt-2">
              Contamos con planes a medida para grandes empresas y casos específicos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg className="w-10 h-10 text-brand-blue mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
              </svg>
              <h4 className="font-bold text-lg mb-2">Multicuentas</h4>
              <p className="text-gray-600">
                Gestión de múltiples negocios o ubicaciones con una sola cuenta centralizada.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg className="w-10 h-10 text-brand-blue mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path>
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
              </svg>
              <h4 className="font-bold text-lg mb-2">Alta demanda</h4>
              <p className="text-gray-600">
                Soluciones para negocios que necesitan volúmenes altos de reseñas o SEO intensivo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg className="w-10 h-10 text-brand-blue mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
              </svg>
              <h4 className="font-bold text-lg mb-2">Integración API</h4>
              <p className="text-gray-600">
                Soluciones para empresas que necesitan integrar nuestros servicios en sus sistemas.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="btn-primary text-lg px-8 py-6">
              Contactar para solución personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
