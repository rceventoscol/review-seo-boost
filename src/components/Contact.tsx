
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    whatsapp: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
    // Simular envío exitoso
    toast({
      title: "Mensaje enviado correctamente",
      description: "Nos pondremos en contacto contigo lo antes posible.",
      variant: "default",
    });
    
    // Resetear formulario
    setFormData({
      name: '',
      business: '',
      email: '',
      whatsapp: '',
      service: '',
      message: '',
    });
  };

  return (
    <section className="section-padding bg-gray-50" id="contacto">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contacta con nosotros</h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aquí para ayudarte a mejorar tu presencia online. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Teléfono</h3>
                  <p className="text-gray-600">+34 911 222 333</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-green bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">WhatsApp</h3>
                  <p className="text-gray-600">+34 611 222 333</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">info@tureputaciononline.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Horario de atención</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Lunes - Viernes:</p>
                    <p className="text-gray-600">9:00 - 18:00</p>
                  </div>
                  <div>
                    <p className="font-medium">Sábados:</p>
                    <p className="text-gray-600">10:00 - 14:00</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-medium">Domingos:</p>
                    <p className="text-gray-600">Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">Nombre de empresa</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Tu empresa"
                    value={formData.business}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp *</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="+34 600 000 000"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="col-span-full">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Servicio de interés *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="reviews">Reseñas Google</option>
                    <option value="seo">Posicionamiento SEO</option>
                    <option value="both">Ambos servicios</option>
                    <option value="other">Otra consulta</option>
                  </select>
                </div>
                
                <div className="col-span-full">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6 flex">
                <input type="checkbox" id="privacy" className="mr-2" required />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  He leído y acepto la política de privacidad *
                </label>
              </div>
              
              <div className="mt-6">
                <Button type="submit" className="btn-primary w-full text-lg py-6">
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
