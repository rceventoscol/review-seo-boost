
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">SEO<span className="text-brand-green">Boost</span></h2>
            <p className="text-blue-100 mb-6">
              Impulsando tu reputación online y visibilidad con estrategias efectivas y resultados reales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.46a8.14 8.14 0 01-2.32.64 4.07 4.07 0 001.8-2.27 8.09 8.09 0 01-2.57.98 4.1 4.1 0 00-7 3.74 11.6 11.6 0 01-8.45-4.3 4.1 4.1 0 001.27 5.49 4.1 4.1 0 01-1.86-.52v.05a4.1 4.1 0 003.31 4.07 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85 8.24 8.24 0 01-5.1 1.76 8.3 8.3 0 01-.98-.06A11.54 11.54 0 006.29 20A11.6 11.6 0 0018.02 8.2c0-.18 0-.35-.01-.53a8.3 8.3 0 002.01-2.12L22 5.46z" />
                </svg>
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.2 0H7.8C3.5 0 0 3.5 0 7.8v8.4C0 20.5 3.5 24 7.8 24h8.4c4.3 0 7.8-3.5 7.8-7.8V7.8C24 3.5 20.5 0 16.2 0zm5.2 16.2c0 2.9-2.3 5.2-5.2 5.2H7.8c-2.9 0-5.2-2.3-5.2-5.2V7.8c0-2.9 2.3-5.2 5.2-5.2h8.4c2.9 0 5.2 2.3 5.2 5.2v8.4z"/>
                  <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9.8c-2.1 0-3.8-1.7-3.8-3.8S9.9 8.2 12 8.2s3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zM18.5 5.5c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3c.7 0 1.3.6 1.3 1.3z"/>
                </svg>
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#por-que" className="text-blue-100 hover:text-white transition-colors">¿Por qué las reseñas?</a></li>
              <li><a href="#servicios" className="text-blue-100 hover:text-white transition-colors">Nuestros servicios</a></li>
              <li><a href="#proceso" className="text-blue-100 hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="#precios" className="text-blue-100 hover:text-white transition-colors">Planes y precios</a></li>
              <li><a href="#testimonios" className="text-blue-100 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="text-blue-100 hover:text-white transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Reseñas Google</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Posicionamiento SEO</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">SEO Local</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Gestión de reputación</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Marketing de contenidos</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Soluciones empresariales</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-brand-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className="text-blue-100">info@tureputaciononline.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-brand-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span className="text-blue-100">+34 911 222 333</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-brand-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span className="text-blue-100">+34 611 222 333</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-brand-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-blue-100">Calle Principal 123, Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © {new Date().getFullYear()} SEOBoost. Todos los derechos reservados.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-blue-100">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
