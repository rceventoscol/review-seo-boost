
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-brand-blue text-2xl font-bold">SEO<span className="text-brand-green">Boost</span></h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="font-medium hover:text-brand-blue transition-colors">Servicios</a>
          <a href="#proceso" className="font-medium hover:text-brand-blue transition-colors">Proceso</a>
          <a href="#precios" className="font-medium hover:text-brand-blue transition-colors">Precios</a>
          <a href="#testimonios" className="font-medium hover:text-brand-blue transition-colors">Testimonios</a>
          <a href="#contacto">
            <Button className="bg-brand-green hover:bg-opacity-90 text-white">Contactar</Button>
          </a>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#servicios" className="font-medium hover:text-brand-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
            <a href="#proceso" className="font-medium hover:text-brand-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
            <a href="#precios" className="font-medium hover:text-brand-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>Precios</a>
            <a href="#testimonios" className="font-medium hover:text-brand-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonios</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-brand-green hover:bg-opacity-90 text-white">Contactar</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
