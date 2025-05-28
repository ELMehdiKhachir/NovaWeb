import React from 'react';
import './home.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Home() {
  return (
    <main role="main" className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>NovaWeb Digital - Agence web à Nantes, Loire-Atlantique</title>
        <meta name="description" content="NovaWeb Digital, agence web à Nantes, conçoit des sites internet modernes, performants et optimisés pour le référencement local en Loire-Atlantique : site vitrine, e-commerce, application mobile, maintenance, refonte pour PME et entreprises." />
        <meta name="keywords" content="agence web Nantes, création site internet Loire-Atlantique, site vitrine sur mesure, site e-commerce, application mobile, référencement, maintenance, refonte, PME, entreprises, solutions digitales Nantes" />
        {/* Open Graph */}
        <meta property="og:title" content="NovaWeb Digital - Agence web à Nantes, Loire-Atlantique" />
        <meta property="og:description" content="Création de site internet à Nantes et Loire-Atlantique : site vitrine, e-commerce, application mobile, maintenance, refonte, SEO pour PME et entreprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novaweb.fr/" />
        <meta property="og:image" content="/logo-pack/novaweb-logo-original.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NovaWeb Digital - Agence web à Nantes, Loire-Atlantique" />
        <meta name="twitter:description" content="Agence web à Nantes spécialisée en création de site internet, e-commerce, application mobile, maintenance, refonte et SEO pour PME et entreprises en Loire-Atlantique." />
        <meta name="twitter:image" content="/logo-pack/novaweb-logo-original.png" />
      </Helmet>
      {/* Hero Section */}
      <motion.section
        id="accueil"
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-8 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center leading-tight">Agence web à Nantes<br />NovaWeb Digital</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md text-center">Création de site internet sur mesure en Loire-Atlantique : site vitrine, e-commerce, application mobile, maintenance et refonte pour PME et entreprises. Boostez votre visibilité locale avec une agence digitale experte à Nantes.</p>
          <div className="flex justify-center mt-8">
            <Link to="/services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg shadow transition cta-main">Nos services</Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Illustration SVG animée moderne et accrocheuse */}
          <svg width="440" height="352" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="home-illustration max-w-none md:w-[440px] w-full h-auto">
            {/* Ombre sous l'écran */}
            <ellipse cx="200" cy="250" rx="120" ry="28" fill="#1C2330"/>
            {/* Écran */}
            <g>
              <rect x="100" y="80" width="200" height="120" rx="18" fill="#232B36" stroke="#2563eb" strokeWidth="3"/>
              {/* Effet de lumière pulsée */}
              <ellipse cx="200" cy="140" rx="80" ry="28" fill="#2563eb" opacity="0.12">
                <animate attributeName="rx" values="80;100;80" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.12;0.22;0.12" dur="2.5s" repeatCount="indefinite" />
              </ellipse>
              {/* Contenu de l'écran */}
              <rect x="130" y="110" width="140" height="60" rx="8" fill="#181B20"/>
              <rect x="150" y="130" width="100" height="12" rx="6" fill="#2563eb"/>
              <rect x="170" y="150" width="60" height="8" rx="4" fill="#2d3a4e"/>
              {/* Texte NovaWeb encore plus bas */}
              <text x="200" y="195" textAnchor="middle" fill="#2563eb" fontSize="18" fontWeight="bold" opacity="0.5">
                NovaWeb Digital
              </text>
            </g>
            {/* Icônes flottantes */}
            <g>
              {/* Étoile */}
              <polygon points="60,60 64,72 76,72 66,80 70,92 60,84 50,92 54,80 44,72 56,72" fill="#2563eb" opacity="0.7">
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 10; 0 0" dur="3s" repeatCount="indefinite"/>
              </polygon>
              {/* Bulle */}
              <circle cx="340" cy="60" r="12" fill="#2563eb" opacity="0.18">
                <animate attributeName="cy" values="60;50;60" dur="2.2s" repeatCount="indefinite" />
              </circle>
              {/* Éclair */}
              <polyline points="320,120 330,140 325,140 335,160" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="2.8s" repeatCount="indefinite"/>
              </polyline>
              {/* Bulle */}
              <circle cx="80" cy="200" r="8" fill="#2563eb" opacity="0.12">
                <animate attributeName="cy" values="200;220;200" dur="2.5s" repeatCount="indefinite" />
              </circle>
              {/* Petite bulle */}
              <circle cx="300" cy="210" r="5" fill="#2563eb" opacity="0.18">
                <animate attributeName="cy" values="210;200;210" dur="2.1s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        role="region"
        aria-label="Nos Services"
        className="bg-[#1C1F24] py-16 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 - Site Vitrine */}
            <Link to="/services/site-vitrine" className="no-underline">
              <motion.div className="bg-[#23262B] rounded-xl p-8 flex flex-col items-center text-center shadow service-card" whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(37,99,235,0.18)' }}>
                <div className="bg-blue-600 rounded-full p-3 mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="3" fill="#fff"/>
                    <rect x="6" y="8" width="12" height="2" rx="1" fill="#2563eb"/>
                    <rect x="8" y="12" width="8" height="2" rx="1" fill="#2563eb"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Site Vitrine</h3>
                <p className="text-lg text-gray-300 mb-4">Créez une présence en ligne professionnelle avec un site web moderne et performant.</p>
              </motion.div>
            </Link>

            {/* Service 2 - E-commerce */}
            <Link to="/services/site-ecommerce" className="no-underline">
              <motion.div className="bg-[#23262B] rounded-xl p-8 flex flex-col items-center text-center shadow service-card" whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(37,99,235,0.18)' }}>
                <div className="bg-blue-600 rounded-full p-3 mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="7" width="18" height="10" rx="3" fill="#fff"/>
                    <path d="M8 12l2 2 4-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="18" cy="12" r="2" fill="#2563eb"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">E-commerce</h3>
                <p className="text-lg text-gray-300 mb-4">Développez votre activité en ligne avec une boutique e-commerce performante.</p>
              </motion.div>
            </Link>

            {/* Service 3 - Application Mobile */}
            <Link to="/services/application-mobile" className="no-underline">
              <motion.div className="bg-[#23262B] rounded-xl p-8 flex flex-col items-center text-center shadow service-card" whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(37,99,235,0.18)' }}>
                <div className="bg-blue-600 rounded-full p-3 mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="7" y="2" width="10" height="20" rx="3" fill="#fff"/>
                    <rect x="10" y="18" width="4" height="2" rx="1" fill="#2563eb"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Application Mobile</h3>
                <p className="text-lg text-gray-300 mb-4">Développement d'applications mobiles performantes pour iOS et Android.</p>
              </motion.div>
            </Link>

            {/* Service 4 - Maintenance */}
            <Link to="/services/maintenance" className="no-underline">
              <motion.div className="bg-[#23262B] rounded-xl p-8 flex flex-col items-center text-center shadow service-card" whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(37,99,235,0.18)' }}>
                <div className="bg-blue-600 rounded-full p-3 mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Maintenance</h3>
                <p className="text-lg text-gray-300 mb-4">Assurez la performance et la sécurité de votre site web avec notre service de maintenance.</p>
              </motion.div>
            </Link>

            {/* Service 5 - Refonte */}
            <Link to="/services/refonte" className="no-underline">
              <motion.div className="bg-[#23262B] rounded-xl p-8 flex flex-col items-center text-center shadow service-card" whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(37,99,235,0.18)' }}>
                <div className="bg-blue-600 rounded-full p-3 mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4h16M4 8h16M4 12h16M4 16h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Refonte</h3>
                <p className="text-lg text-gray-300 mb-4">Modernisez votre site web existant pour améliorer son design et ses performances.</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Pourquoi nous choisir */}
      <motion.section
        className="py-16 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous choisir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Avantage 1 */}
            <motion.div className="flex items-start gap-4" whileHover={{ scale: 1.03 }}>
              <div className="bg-blue-600 rounded-full p-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Expertise</h3>
                <p className="text-lg text-gray-300 mb-4">Une équipe passionnée et expérimentée pour garantir la réussite de vos projets.</p>
              </div>
            </motion.div>
            {/* Avantage 2 */}
            <motion.div className="flex items-start gap-4" whileHover={{ scale: 1.03 }}>
              <div className="bg-blue-600 rounded-full p-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Sur mesure</h3>
                <p className="text-lg text-gray-300 mb-4">Des solutions personnalisées, adaptées à vos besoins et à votre image.</p>
              </div>
            </motion.div>
            {/* Avantage 3 */}
            <motion.div className="flex items-start gap-4" whileHover={{ scale: 1.03 }}>
              <div className="bg-blue-600 rounded-full p-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Performance</h3>
                <p className="text-lg text-gray-300 mb-4">Des sites rapides, fiables et optimisés pour offrir la meilleure expérience utilisateur.</p>
              </div>
            </motion.div>
            {/* Avantage 4 */}
            <motion.div className="flex items-start gap-4" whileHover={{ scale: 1.03 }}>
              <div className="bg-blue-600 rounded-full p-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 10v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6M12 14v-4M12 10h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Support</h3>
                <p className="text-lg text-gray-300 mb-4">Un accompagnement réactif et un support dédié à chaque étape de votre projet.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* À propos */}
      <motion.section
        id="about"
        role="region"
        aria-label="À propos"
        className="bg-[#181B20] py-16 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-center">À propos</h2>
          <p className="text-lg text-gray-300">NovaWeb Digital est une agence digitale passionnée par l'innovation. Notre équipe met à profit son expertise pour concevoir des sites web uniques, performants et adaptés à vos besoins. Nous croyons en la créativité, la rigueur et l'accompagnement sur-mesure.</p>
        </div>
      </motion.section>

      {/* Section CTA (remplace Contact) */}
      <section className="cta-section section-animate">
        <h2 className="cta-title">Prêt à démarrer votre projet&nbsp;?</h2>
        <p className="cta-desc">
          Contactez-moi dès maintenant pour discuter de votre projet et obtenir un devis personnalisé.
        </p>
        <Link to="/contact" className="cta-btn">
          Discutons de votre projet
        </Link>
      </section>
    </main>
  );
}
