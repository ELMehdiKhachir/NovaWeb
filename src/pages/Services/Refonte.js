import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const IconRefresh = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconDesign = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" fill="#2563eb"/><rect x="6" y="8" width="12" height="2" rx="1" fill="#fff"/><rect x="8" y="12" width="8" height="2" rx="1" fill="#fff"/></svg>
);
const IconSEO = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconSupport = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
);

export default function Refonte() {
  return (
    <main role="main" className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Refonte de site web à Nantes | NovaWeb Digital</title>
        <meta name="description" content="Refonte de site web à Nantes et Loire-Atlantique. Modernisation, optimisation SEO, nouveau design, meilleure performance pour PME et entreprises locales." />
        <meta name="keywords" content="refonte site web Nantes, modernisation site internet Loire-Atlantique, optimisation SEO PME, agence web Nantes, nouveau design, entreprise" />
        {/* Open Graph */}
        <meta property="og:title" content="Refonte de site web à Nantes | NovaWeb Digital" />
        <meta property="og:description" content="Refonte de site web à Nantes et Loire-Atlantique pour PME et entreprises. Modernisation, SEO, design, performance locale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novaweb.fr/services/refonte" />
        <meta property="og:image" content="/logo-pack/novaweb-logo-original.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refonte de site web à Nantes | NovaWeb Digital" />
        <meta name="twitter:description" content="Agence web à Nantes spécialisée en refonte de site web pour PME et entreprises en Loire-Atlantique." />
        <meta name="twitter:image" content="/logo-pack/novaweb-logo-original.png" />
      </Helmet>
      {/* Héros visuel */}
      <motion.section
        id="hero"
        role="region"
        aria-label="Hero"
        className="max-w-4xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1 flex justify-center">
          <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
            <ellipse cx="110" cy="160" rx="90" ry="18" fill="#232B36"/>
            <rect x="30" y="30" width="160" height="90" rx="16" fill="#2563eb"/>
            <rect x="50" y="50" width="120" height="50" rx="8" fill="#181B20"/>
            <rect x="70" y="70" width="80" height="10" rx="5" fill="#2563eb"/>
            <rect x="90" y="90" width="40" height="6" rx="3" fill="#2d3a4e"/>
            <text x="110" y="100" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" opacity="0.9">Refonte</text>
          </svg>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-center md:text-left">Refonte de site web à Nantes</h1>
          <p className="text-lg text-gray-300 mb-6 text-center md:text-left">Modernisez votre site web à Nantes et Loire-Atlantique pour booster votre visibilité locale, votre design et vos performances. Idéal pour PME et entreprises en quête d'une nouvelle image digitale.</p>
          <a href="/contact" className="cta-btn inline-block">Demander un devis</a>
        </div>
      </motion.section>
      {/* Avantages */}
      <motion.section
        id="advantages"
        role="region"
        aria-label="Avantages"
        className="max-w-4xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconRefresh />
          <div>
            <h3 className="text-xl font-bold mb-2">Modernisation complète</h3>
            <p className="text-gray-300">Un site remis à neuf, plus rapide, plus beau, plus efficace.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconDesign />
          <div>
            <h3 className="text-xl font-bold mb-2">Nouveau design</h3>
            <p className="text-gray-300">Design moderne, responsive, adapté à votre image et à vos clients.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSEO />
          <div>
            <h3 className="text-xl font-bold mb-2">Optimisation SEO</h3>
            <p className="text-gray-300">Structure, rapidité, balises, optimisation mobile et locale.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSupport />
          <div>
            <h3 className="text-xl font-bold mb-2">Accompagnement & suivi</h3>
            <p className="text-gray-300">Notre équipe vous accompagne à chaque étape, avant, pendant et après la refonte.</p>
          </div>
        </div>
      </motion.section>
      {/* Processus */}
      <section
        role="region"
        aria-label="Processus"
        className="max-w-4xl mx-auto py-10 px-6"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Notre méthode</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconRefresh /></span>
            <h4 className="font-bold mb-1">1. Audit & recommandations</h4>
            <p className="text-gray-400 text-sm text-center">Nous analysons votre site actuel et proposons des axes d'amélioration.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconDesign /></span>
            <h4 className="font-bold mb-1">2. Nouveau design</h4>
            <p className="text-gray-400 text-sm text-center">Nous concevons une maquette moderne, claire et adaptée à votre image.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSEO /></span>
            <h4 className="font-bold mb-1">3. Développement & SEO</h4>
            <p className="text-gray-400 text-sm text-center">Développement rapide, optimisation SEO, compatibilité mobile et sécurité.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSupport /></span>
            <h4 className="font-bold mb-1">4. Mise en ligne & suivi</h4>
            <p className="text-gray-400 text-sm text-center">Mise en ligne, accompagnement, support et évolutions assurés par notre équipe.</p>
          </div>
        </div>
      </section>
      {/* Pourquoi choisir NovaWeb */}
      <section
        role="region"
        aria-label="Pourquoi nous choisir"
        className="max-w-3xl mx-auto py-10 px-6 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Pourquoi choisir NovaWeb ?</h2>
        <p className="text-lg text-gray-300 mb-4">Expertise en refonte, accompagnement humain, design moderne, performance et référencement : tout est pensé pour la réussite de vos projets.</p>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
          <li className="bg-[#23262B] rounded-full px-5 py-2">+10 ans d'expérience</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Réactivité & conseils</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Solutions sur-mesure</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Satisfaction garantie</li>
        </ul>
      </section>
      {/* FAQ */}
      <section
        role="region"
        aria-label="FAQ"
        className="max-w-3xl mx-auto py-10 px-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">FAQ - Refonte</h2>
        <div className="space-y-6">
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Pourquoi faire une refonte ?</h4>
            <p className="text-gray-400">Un site remis à neuf améliore l'image, la performance et le référencement. Nous vous accompagnons à chaque étape.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Combien de temps dure une refonte ?</h4>
            <p className="text-gray-400">En général, 3 à 6 semaines selon la complexité et votre réactivité sur les retours.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Le site sera-t-il bien référencé après la refonte ?</h4>
            <p className="text-gray-400">Oui, nous intégrons les meilleures pratiques SEO : structure, rapidité, balises, optimisation mobile et locale.</p>
          </div>
        </div>
      </section>
      {/* Appel à l'action final */}
      <section
        role="region"
        aria-label="Appel à l'action"
        className="max-w-2xl mx-auto py-10 px-6 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Prêt pour une refonte réussie ?</h2>
        <p className="text-lg text-gray-300 mb-6">Contactez-nous pour discuter de votre projet et obtenir un devis gratuit, sans engagement.</p>
        <a href="/contact" className="cta-btn inline-block">Discutons de votre projet</a>
      </section>
    </main>
  );
} 