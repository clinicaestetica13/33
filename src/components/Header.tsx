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
      {/* Barra superior ultra-compacta */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-0.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-2 sm:px-3 relative">
          <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-center">
            <div className="flex items-center space-x-1 bg-white/20 rounded-full px-1.5 py-0.5">
              <Shield className="w-2.5 h-2.5 animate-pulse" />
              <span className="font-black text-xs">AHORRO GARANTIZADO</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-xs font-bold">
              <span>+12 años</span>
              <span>•</span>
              <span>+100 expertos</span>
              <span>•</span>
              <span>IA avanzada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal ultra-compacto */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-3">
          <div className="flex justify-between items-center py-0.5">
            {/* Logo ultra-pequeño */}
            <Link to="/" className="flex items-center space-x-1 hover-lift-intense">
              <div className="flex items-center justify-center">
                <img 
                  src="/wasabilogo.jpg" 
                  alt="Wasabi Trader Logo" 
                  className="h-4 sm:h-5 lg:h-6 w-auto object-contain"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </Link>
            
            {/* Navegación desktop ultra-compacta */}
            <div className="hidden xl:flex items-center space-x-2">
              <nav className="flex items-center space-x-2">
                <a href="#comparador" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-xs">
                  Comparador IA
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#testimonios" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-xs">
                  Testimonios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <Link to="/sobre-nosotros" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-xs">
                  Sobre Nosotros
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contacto" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-xs">
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>
                
              {/* Teléfono ultra-compacto */}
              <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 px-1.5 py-0.5 rounded-lg hover-lift-intense shine-effect">
                <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Phone className="w-2 h-2 text-white" />
                </div>
                <div>
                  <a href="tel:+34621508300" className="font-black text-xs text-gray-900 hover:text-blue-600 transition-colors">
                    621 50 83 00
                  </a>
                </div>
              </div>
              
              {/* CTA ultra-compacto */}
              <a href="#formulario" className="btn-primary text-white px-2 py-1 rounded-lg font-black text-xs hover-lift-intense shine-effect whitespace-nowrap">
                FORMULARIO
              </a>
            </div>
            
            {/* Navegación tablet ultra-compacta */}
            <div className="hidden lg:flex xl:hidden items-center space-x-1">
              <a href="tel:+34621508300" className="flex items-center space-x-1 bg-blue-500 text-white px-1.5 py-0.5 rounded-lg font-bold hover:bg-blue-600 transition-colors text-xs">
                <Phone className="w-2.5 h-2.5" />
                <span>621 50 83 00</span>
              </a>
              <a href="#formulario" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-1.5 py-0.5 rounded-lg font-black hover:from-blue-400 hover:to-blue-500 transition-colors text-xs">
                FORMULARIO
              </a>
            </div>
            
            {/* Botón menú móvil ultra-compacto */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white hover-lift-intense shadow-blue-glow"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-3.5 h-3.5" />
              ) : (
                <Menu className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil ultra-compacto */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-blue-100 shadow-blue-intense animate-fade-in-up">
          <div className="px-2 py-2 space-y-2">
            <a 
              href="#comparador" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-xs hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              🤖 Comparador IA
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-xs hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              ⭐ Testimonios
            </a>
            <Link 
              to="/sobre-nosotros" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-xs hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              🏢 Sobre Nosotros
            </Link>
            <Link 
              to="/contacto" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-xs hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              📞 Contacto
            </Link>
            
            <div className="pt-2 border-t border-blue-200">
              <div className="flex items-center justify-center space-x-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg py-1 mb-2 shadow-blue-glow">
                <Phone className="w-3 h-3 animate-pulse" />
                <div>
                  <a href="tel:+34621508300" className="font-black text-xs">621 50 83 00</a>
                  <p className="text-blue-200 text-xs font-bold">Gratuita</p>
                </div>
              </div>
              
              <a 
                href="#formulario" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full btn-primary text-white py-1 rounded-lg font-black text-xs text-center shine-effect"
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