
import React from 'react';

const Process = () => {
  return (
    <section className="section-padding bg-gray-50" id="proceso">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Funciona</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y efectivo para impulsar tu negocio online en pocos pasos.
          </p>
        </div>
        
        <div className="relative">
          {/* Línea conectora (solo visible en pantallas medianas y grandes) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 mb-6">
                1
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full">
                <h3 className="text-xl font-bold mb-3">Eliges el paquete ideal</h3>
                <p className="text-gray-600">
                  Selecciona entre nuestras opciones o solicita un paquete personalizado adaptado a tus necesidades específicas.
                </p>
              </div>
            </div>
            
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 mb-6">
                2
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full">
                <h3 className="text-xl font-bold mb-3">Creamos tu estrategia</h3>
                <p className="text-gray-600">
                  Nuestro equipo desarrolla reseñas personalizadas o una estrategia SEO completa basada en tu negocio y objetivos.
                </p>
              </div>
            </div>
            
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 mb-6">
                3
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full">
                <h3 className="text-xl font-bold mb-3">Recibes resultados visibles</h3>
                <p className="text-gray-600">
                  En poco tiempo verás mejoras en tu reputación online, visibilidad en buscadores y aumento de clientes potenciales.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Seguimiento y optimización constante</h3>
              <p className="text-gray-600 mb-4">
                No solo implementamos la estrategia y desaparecemos. Mantenemos un monitoreo continuo para asegurar los mejores resultados.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Monitoreo de resultados</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-blue h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Optimización de estrategias</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-green h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Informes mensuales</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-blue h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-brand-blue text-4xl font-bold mb-2">+40%</div>
                  <p className="text-sm text-gray-600">Aumento promedio en tráfico web</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-brand-green text-4xl font-bold mb-2">+60%</div>
                  <p className="text-sm text-gray-600">Incremento en valoraciones positivas</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-brand-blue text-4xl font-bold mb-2">+35%</div>
                  <p className="text-sm text-gray-600">Mejora en conversiones</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-brand-green text-4xl font-bold mb-2">97%</div>
                  <p className="text-sm text-gray-600">Clientes satisfechos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
