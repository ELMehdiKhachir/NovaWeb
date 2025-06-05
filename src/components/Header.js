import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header role="banner" className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto w-full">
      <div className="flex flex-row items-center gap-3 mr-6">
        <Link to="/" className="w-12 h-12 flex items-center justify-center" aria-label="Accueil">
          <img src="/logo-pack/novaweb-logo-original.png" alt="Logo NovaWeb Digital" className="w-12 h-12 object-contain" />
        </Link>
        <div className="flex flex-col items-start">
          <span className="text-3xl font-bold tracking-tight font-sans leading-none">NovaWeb</span>
          <span className="text-lg font-semibold tracking-wide text-blue-500 -mt-1">Digital</span>
        </div>
      </div>
      {/* Desktop menu */}
      <nav role="navigation" aria-label="Menu principal" className="hidden md:block">
        <ul className="flex gap-8 text-lg font-semibold tracking-wide font-sans">
          <li><Link to="/" className="header-link">Accueil</Link></li>
          <li className="relative group">
            <span className="header-link cursor-pointer flex items-center gap-1">Services
              <span className="text-xs text-white ml-1 relative top-[2px]">▼</span>
            </span>
            <ul className="absolute left-0 top-full mt-0 w-56 bg-[#23262B] rounded-lg shadow-lg z-20">
              <li><Link to="/services/site-vitrine" className="block px-6 py-3 header-link">Site vitrine</Link></li>
              <li><Link to="/services/site-ecommerce" className="block px-6 py-3 header-link">Site e-commerce</Link></li>
              <li><Link to="/services/maintenance" className="block px-6 py-3 header-link">Maintenance</Link></li>
              <li><Link to="/services/refonte" className="block px-6 py-3 header-link">Refonte</Link></li>
              <li><Link to="/services/application-mobile" className="block px-6 py-3 header-link">Application mobile</Link></li>
            </ul>
          </li>
          <li><Link to="/novaMethode" className="header-link">NovaMéthode</Link></li>
          <li><Link to="/about" className="header-link">À propos</Link></li>
          <li><Link to="/blog" className="header-link">Blog</Link></li>
          <li><Link to="/contact" className="header-link">Contact</Link></li>
        </ul>
      </nav>
      {/* Mobile burger */}
      <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Ouvrir le menu">
        <span className="block w-7 h-1 bg-white rounded mb-1"></span>
        <span className="block w-7 h-1 bg-white rounded mb-1"></span>
        <span className="block w-7 h-1 bg-white rounded"></span>
      </button>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-60 flex md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav className="bg-[#23262B] w-64 h-full p-8 flex flex-col gap-6" onClick={e => e.stopPropagation()} aria-label="Menu mobile">
            <button className="self-end mb-6" onClick={() => setMobileMenuOpen(false)} aria-label="Fermer le menu">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <Link to="/" className="header-link mb-2" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
            <div>
              <button className="header-link flex items-center gap-1 w-full" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                Services
                <span className="text-xs text-white ml-1 relative top-[2px]">▼</span>
              </button>
              {mobileServicesOpen && (
                <ul className="pl-4 mt-2 flex flex-col gap-1">
                  <li><Link to="/services/site-vitrine" className="header-link" onClick={() => setMobileMenuOpen(false)}>Site vitrine</Link></li>
                  <li><Link to="/services/site-ecommerce" className="header-link" onClick={() => setMobileMenuOpen(false)}>Site e-commerce</Link></li>
                  <li><Link to="/services/maintenance" className="header-link" onClick={() => setMobileMenuOpen(false)}>Maintenance</Link></li>
                  <li><Link to="/services/refonte" className="header-link" onClick={() => setMobileMenuOpen(false)}>Refonte</Link></li>
                  <li><Link to="/services/application-mobile" className="header-link" onClick={() => setMobileMenuOpen(false)}>Application mobile</Link></li>
                </ul>
              )}
            </div>
            <Link to="/novaMethode" className="header-link mb-2" onClick={() => setMobileMenuOpen(false)}>NovaMéthode</Link>
            <Link to="/about" className="header-link mb-2" onClick={() => setMobileMenuOpen(false)}>À propos</Link>
            <Link to="/blog" className="header-link mb-2" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="header-link mb-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
} 