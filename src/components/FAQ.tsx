
import React, { useState } from 'react';

const faqItems = [
  {
    question: "¿Las reseñas son realmente de usuarios reales?",
    answer: "Sí, todas nuestras reseñas son creadas por perfiles reales con historial de actividad. Utilizamos una red de colaboradores verificados para asegurar la autenticidad y calidad de cada reseña."
  },
  {
    question: "¿Es legal comprar reseñas para mi negocio?",
    answer: "Nuestro servicio se enfoca en facilitar reseñas genuinas de usuarios reales que representan experiencias auténticas. No ofrecemos reseñas falsas o engañosas, sino un servicio que conecta negocios con usuarios reales dispuestos a compartir su opinión."
  },
  {
    question: "¿Cuánto tiempo tarda en verse un aumento en las reseñas?",
    answer: "Dependiendo del paquete elegido, podrás empezar a ver resultados entre 7 y 15 días después de iniciar el servicio. Las reseñas se publican de forma escalonada para mantener la naturalidad y credibilidad."
  },
  {
    question: "¿Qué sucede si no estoy satisfecho con el servicio?",
    answer: "Ofrecemos garantía de satisfacción. Si no estás contento con nuestro servicio durante los primeros 30 días, trabajaremos para resolver el problema o te ofreceremos un reembolso parcial según los términos de nuestro acuerdo."
  },
  {
    question: "¿Puedo elegir qué dicen las reseñas sobre mi negocio?",
    answer: "Puedes proporcionar información sobre los aspectos de tu negocio que te gustaría destacar. Nuestro equipo creativo redactará reseñas auténticas incorporando esos aspectos de manera natural y creíble."
  },
  {
    question: "¿Cuánto tiempo se necesita para ver resultados con el SEO?",
    answer: "El SEO es una estrategia a medio-largo plazo. Generalmente, los primeros resultados comienzan a verse entre 1-3 meses, con mejoras significativas a partir de los 3-6 meses, dependiendo de la competitividad de tu sector y palabras clave."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios de reseñas y posicionamiento SEO.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-brand-blue bg-opacity-5 p-6 rounded-lg border border-brand-blue border-opacity-20">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-brand-blue">¿Tienes más preguntas?</h3>
                <p className="mt-2 text-gray-600">
                  Nuestro equipo está disponible para resolver todas tus dudas y ofrecerte asesoramiento personalizado.
                </p>
                <a href="#contacto" className="inline-block mt-3 text-brand-blue font-medium underline">
                  Contáctanos ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
