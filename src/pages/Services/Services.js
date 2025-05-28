import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import './services.css';
import { Link } from 'react-router-dom';
// Ajout des imports pour les sous-pages de service
import SiteVitrine from './SiteVitrine';
import SiteEcommerce from './SiteEcommerce';
import Maintenance from './Maintenance';
import Refonte from './Refonte';
import ApplicationMobile from './ApplicationMobile';
import { motion } from 'framer-motion';

// Hook utilitaire pour détecter si un élément est dans le viewport
function useInView(options = {}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      options
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

export default function Services() {
  // Pour chaque carte, on utilise le hook useInView
  const [ref1, v1] = useInView({ threshold: 0.2 });
  const [ref2, v2] = useInView({ threshold: 0.2 });
  const [ref3, v3] = useInView({ threshold: 0.2 });
  const [ref4, v4] = useInView({ threshold: 0.2 });
  const [ref5, v5] = useInView({ threshold: 0.2 });
  const [pr1, pv1] = useInView({ threshold: 0.2 });
  const [pr2, pv2] = useInView({ threshold: 0.2 });
  const [pr3, pv3] = useInView({ threshold: 0.2 });
  const [pr4, pv4] = useInView({ threshold: 0.2 });

  return (
    <main role="main" className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Services - NovaWeb Digital | Agence web à Nantes</title>
        <meta name="description" content="Découvrez les services de NovaWeb Digital, agence web à Nantes : création de site vitrine, e-commerce, application mobile, maintenance, refonte pour PME et entreprises en Loire-Atlantique." />
        <meta name="keywords" content="services web Nantes, création site internet Loire-Atlantique, site vitrine PME, site e-commerce, application mobile, maintenance, refonte, agence digitale Nantes" />
        {/* Open Graph */}
        <meta property="og:title" content="Services - NovaWeb Digital | Agence web à Nantes" />
        <meta property="og:description" content="Services web à Nantes : site vitrine, e-commerce, application mobile, maintenance, refonte pour PME et entreprises en Loire-Atlantique." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novaweb.fr/services" />
        <meta property="og:image" content="/logo-pack/novaweb-logo-original.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - NovaWeb Digital | Agence web à Nantes" />
        <meta name="twitter:description" content="Agence web à Nantes spécialisée en création de site internet, e-commerce, application mobile, maintenance, refonte pour PME et entreprises en Loire-Atlantique." />
        <meta name="twitter:image" content="/logo-pack/novaweb-logo-original.png" />
      </Helmet>
      <motion.section
        id="hero"
        role="region"
        aria-label="Hero"
        className="max-w-6xl mx-auto py-20 px-8"
      >
        <h1 className="services-title">Nos Services</h1>
        <p className="services-desc">
          Des solutions web et mobiles sur mesure à Nantes et Loire-Atlantique pour concrétiser vos ambitions digitales. Idéal pour PME, entreprises et indépendants souhaitant booster leur visibilité locale.
        </p>
      </motion.section>
      <motion.section
        id="services"
        role="region"
        aria-label="Nos Services"
        className="bg-[#1C1F24] py-16 px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Site Vitrine */}
          <Link to="/services/site-vitrine" className="no-underline">
            <div ref={ref1} className={`service-card card-animate${v1 ? ' visible' : ''}`}>
              <div className="service-illustration">
                {/* Illustration SVG Web - écran */}
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="#2563eb" opacity="0.12"/>
                  <rect x="16" y="20" width="28" height="18" rx="3" fill="#2563eb"/>
                  <rect x="22" y="26" width="16" height="4" rx="2" fill="#fff"/>
                  <rect x="26" y="40" width="8" height="2" rx="1" fill="#2563eb"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Site vitrine</h3>
              <p className="text-lg text-gray-300 mb-4">Créez une présence en ligne professionnelle avec un site web moderne et performant.</p>
            </div>
          </Link>
          {/* E-commerce */}
          <Link to="/services/site-ecommerce" className="no-underline">
            <div ref={ref2} className={`service-card card-animate${v2 ? ' visible' : ''}`}>
              <div className="service-illustration">
                {/* Illustration SVG E-commerce - panier */}
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="#2563eb" opacity="0.12"/>
                  <rect x="18" y="24" width="24" height="12" rx="3" fill="#2563eb"/>
                  <path d="M22 24l4 12h8l4-12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="26" cy="40" r="2" fill="#fff"/>
                  <circle cx="34" cy="40" r="2" fill="#fff"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">E-commerce</h3>
              <p className="text-lg text-gray-300 mb-4">Développez votre activité en ligne avec une boutique e-commerce performante.</p>
            </div>
          </Link>
          {/* Application Mobile */}
          <Link to="/services/application-mobile" className="no-underline">
            <div ref={ref3} className={`service-card card-animate${v3 ? ' visible' : ''}`}>
              <div className="service-illustration">
                {/* Illustration SVG Mobile App - smartphone amélioré */}
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="#2563eb" opacity="0.12"/>
                  <rect x="22" y="14" width="16" height="32" rx="4" fill="#2563eb"/>
                  <rect x="26" y="18" width="8" height="20" rx="2" fill="#fff"/>
                  <circle cx="30" cy="40" r="2" fill="#fff"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Application mobile</h3>
              <p className="text-lg text-gray-300 mb-4">Développement d'applications mobiles performantes pour iOS et Android.</p>
            </div>
          </Link>

          {/* Maintenance */}
          <Link to="/services/maintenance" className="no-underline">
            <div ref={ref4} className={`service-card card-animate${v4 ? ' visible' : ''}`}>
              <div className="service-illustration">
                {/* Illustration SVG Maintenance */}
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="#2563eb" opacity="0.12"/>
                  <rect x="18" y="22" width="24" height="16" rx="4" fill="#2563eb"/>
                  <rect x="22" y="26" width="16" height="8" rx="2" fill="#fff"/>
                  <circle cx="26" cy="30" r="1" fill="#2563eb"/>
                  <circle cx="30" cy="30" r="1" fill="#2563eb"/>
                  <circle cx="34" cy="30" r="1" fill="#2563eb"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Maintenance</h3>
              <p className="text-lg text-gray-300 mb-4">Assurez la performance et la sécurité de votre site web avec notre service de maintenance.</p>
            </div>
          </Link>

          {/* Refonte */}
          <Link to="/services/refonte" className="no-underline">
            <div ref={ref5} className={`service-card card-animate${v5 ? ' visible' : ''}`}>
              <div className="service-illustration">
                {/* Illustration SVG Refonte - flèches circulaires */}
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="#2563eb" opacity="0.12"/>
                  <path d="M38 24a10 10 0 1 0 2.83 7.07" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="38 18 38 24 44 24" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Refonte</h3>
              <p className="text-lg text-gray-300 mb-4">Modernisez votre site web existant pour améliorer son design et ses performances.</p>
            </div>
          </Link>
        </div>
      </motion.section>
      <motion.section
        id="process"
        role="region"
        aria-label="Notre Processus"
        className="py-16 px-8"
      >
        <h2 className="process-title">Notre Processus</h2>
        <div className="process-grid">
          <div ref={pr1} className={`process-card card-animate${pv1 ? ' visible' : ''}`}>
            <div className="process-step">1</div>
            <h3>Consultation</h3>
            <p>Analyse de vos besoins et objectifs</p>
          </div>
          <div ref={pr2} className={`process-card card-animate${pv2 ? ' visible' : ''}`}>
            <div className="process-step">2</div>
            <h3>Conception</h3>
            <p>Création des maquettes et prototypes</p>
          </div>
          <div ref={pr3} className={`process-card card-animate${pv3 ? ' visible' : ''}`}>
            <div className="process-step">3</div>
            <h3>Développement</h3>
            <p>Création de votre solution web</p>
          </div>
          <div ref={pr4} className={`process-card card-animate${pv4 ? ' visible' : ''}`}>
            <div className="process-step">4</div>
            <h3>Lancement</h3>
            <p>Mise en ligne et suivi post-lancement</p>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="cta"
        role="region"
        aria-label="Appel à l'action"
        className="bg-[#1C1F24] py-16 px-8"
      >
        <h2 className="cta-title">Prêt à démarrer votre projet&nbsp;?</h2>
        <p className="cta-desc">
          Contactez-moi dès maintenant pour discuter de votre projet et obtenir un devis personnalisé.
        </p>
        <a href="/contact" className="cta-btn">
          Discutons de votre projet
        </a>
      </motion.section>
    </main>
  );
}