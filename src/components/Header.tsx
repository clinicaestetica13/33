import React, { useState, useEffect } from 'react';
import { Menu, Phone, X, Shield, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-blue-intense' : 'bg-white/90 backdrop-blur-md shadow-lg'
    }`}>
      {/* Barra superior impactante - OPTIMIZADA PARA DESKTOP */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-1 lg:py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 relative">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 lg:space-x-6 text-center">
            <div className="flex items-center space-x-1 lg:space-x-2 bg-white/20 rounded-full px-2 lg:px-4 py-1">
              <Shield className="w-3 h-3 lg:w-4 lg:h-4 animate-pulse" />
              <span className="font-black text-xs lg:text-sm tracking-wide">AHORRO GARANTIZADO</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 text-xs font-bold">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
                <span>+12 años experiencia</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                <span>+100 asesores expertos</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-ping"></span>
                <span>IA avanzada</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal - OPTIMIZADO PARA DESKTOP */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center py-1 lg:py-2">
            {/* Logo optimizado para desktop */}
            <Link to="/" className="flex items-center space-x-2 lg:space-x-3 hover-lift-intense">
              <div className="flex items-center justify-center">
                <img 
                  src="/wasabilogo.jpg" 
                  alt="Wasabi Trader Logo" 
                  className="h-8 sm:h-10 lg:h-12 xl:h-14 w-auto object-contain"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </Link>
            
            {/* Navegación desktop - MEJORADA */}
            <div className="hidden xl:flex items-center space-x-4 lg:space-x-6">
              <nav className="flex items-center space-x-4 lg:space-x-6">
                <a href="#comparador" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm">
                  Comparador IA
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#testimonios" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm">
                  Testimonios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <Link to="/sobre-nosotros" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm">
                  Sobre Nosotros
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contacto" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm">
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>
                
              {/* Teléfono optimizado para desktop */}
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg hover-lift-intense shine-effect">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                </div>
                <div>
                  <a href="tel:+34621508300" className="font-black text-sm lg:text-base text-gray-900 hover:text-blue-600 transition-colors">
                    621 50 83 00
                  </a>
                  <p className="text-xs font-bold text-blue-600 leading-none">Gratuita</p>
                </div>
              </div>
              
              {/* CTA optimizado para desktop */}
              <a href="#formulario" className="btn-primary text-white px-3 lg:px-6 py-1.5 lg:py-2 rounded-lg font-black text-xs lg:text-sm hover-lift-intense shine-effect whitespace-nowrap">
                FORMULARIO
              </a>
            </div>
            
            {/* Navegación tablet */}
            <div className="hidden lg:flex xl:hidden items-center space-x-2">
              <a href="tel:+34621508300" className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-blue-600 transition-colors text-sm">
                <Phone className="w-3 h-3" />
                <span>621 50 83 00</span>
              </a>
              <a href="#formulario" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg font-black hover:from-blue-400 hover:to-blue-500 transition-colors text-sm">
                FORMULARIO
              </a>
            </div>
            
            {/* Botón menú móvil */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white hover-lift-intense shadow-blue-glow"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-blue-100 shadow-blue-intense animate-fade-in-up">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#comparador" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-base hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              🤖 Comparador IA
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-base hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              ⭐ Testimonios
            </a>
            <Link 
              to="/sobre-nosotros" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-base hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              🏢 Sobre Nosotros
            </Link>
            <Link 
              to="/contacto" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-base hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              📞 Contacto
            </Link>
            
            <div className="pt-4 border-t border-blue-200">
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg py-3 mb-4 shadow-blue-glow">
                <Phone className="w-5 h-5 animate-pulse" />
                <div>
                  <a href="tel:+34621508300" className="font-black text-lg">621 50 83 00</a>
                  <p className="text-blue-200 text-xs font-bold">Llamada gratuita</p>
                </div>
              </div>
              
              <a 
                href="#formulario" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full btn-primary text-white py-3 rounded-lg font-black text-lg text-center shine-effect"
              >
                🚀 EMPEZAR FORMULARIO
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}