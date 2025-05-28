import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const IconMobile = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="3" fill="#2563eb"/><rect x="10" y="18" width="4" height="2" rx="1" fill="#fff"/></svg>
);
const IconUX = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff"/></svg>
);
const IconCode = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
);
const IconSupport = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
);

export default function ApplicationMobile() {
  return (
    <main role="main" className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Développement d'application mobile à Nantes | NovaWeb Digital</title>
        <meta name="description" content="Développement d'applications mobiles à Nantes et Loire-Atlantique. iOS, Android, sur-mesure, UX/UI, accompagnement complet pour PME et entreprises locales." />
        <meta name="keywords" content="application mobile Nantes, développement mobile Loire-Atlantique, app sur mesure PME, agence web Nantes, iOS, Android, UX/UI, entreprise" />
        {/* Open Graph */}
        <meta property="og:title" content="Développement d'application mobile à Nantes | NovaWeb Digital" />
        <meta property="og:description" content="Développement d'applications mobiles à Nantes et Loire-Atlantique pour PME et entreprises. iOS, Android, UX/UI, accompagnement local." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novaweb.fr/services/application-mobile" />
        <meta property="og:image" content="/logo-pack/novaweb-logo-original.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Développement d'application mobile à Nantes | NovaWeb Digital" />
        <meta name="twitter:description" content="Agence web à Nantes spécialisée en application mobile sur mesure pour PME et entreprises en Loire-Atlantique." />
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
            <rect x="60" y="30" width="100" height="120" rx="16" fill="#2563eb"/>
            <rect x="80" y="50" width="60" height="80" rx="8" fill="#181B20"/>
            <rect x="100" y="110" width="20" height="8" rx="4" fill="#2563eb"/>
            <text x="110" y="100" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" opacity="0.9">Mobile</text>
          </svg>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-center md:text-left">Développement d'application mobile à Nantes</h1>
          <p className="text-lg text-gray-300 mb-6 text-center md:text-left">Confiez le développement de votre application mobile à une agence experte à Nantes et Loire-Atlantique. Solutions sur-mesure pour PME et entreprises locales, iOS et Android.</p>
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
          <IconMobile />
          <div>
            <h3 className="text-xl font-bold mb-2">iOS & Android</h3>
            <p className="text-gray-300">Applications natives ou hybrides, adaptées à tous les appareils.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconUX />
          <div>
            <h3 className="text-xl font-bold mb-2">UX/UI personnalisé</h3>
            <p className="text-gray-300">Design moderne, intuitif, centré utilisateur et adapté à votre image.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconCode />
          <div>
            <h3 className="text-xl font-bold mb-2">Développement sur-mesure</h3>
            <p className="text-gray-300">Fonctionnalités personnalisées, API, notifications, évolutivité.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSupport />
          <div>
            <h3 className="text-xl font-bold mb-2">Accompagnement & support</h3>
            <p className="text-gray-300">Notre équipe vous accompagne avant, pendant et après la mise en ligne.</p>
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
            <span className="mb-2"><IconMobile /></span>
            <h4 className="font-bold mb-1">1. Analyse & conseil</h4>
            <p className="text-gray-400 text-sm text-center">Nous analysons vos besoins et définissons les fonctionnalités clés.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconUX /></span>
            <h4 className="font-bold mb-1">2. Design UX/UI</h4>
            <p className="text-gray-400 text-sm text-center">Nous concevons une interface moderne, intuitive et adaptée à votre image.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconCode /></span>
            <h4 className="font-bold mb-1">3. Développement</h4>
            <p className="text-gray-400 text-sm text-center">Développement rapide, sécurisé, évolutif et compatible avec tous les appareils.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSupport /></span>
            <h4 className="font-bold mb-1">4. Lancement & suivi</h4>
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
        <p className="text-lg text-gray-300 mb-4">Expertise mobile, accompagnement humain, design moderne, performance et évolutivité : tout est pensé pour la réussite de vos projets mobiles.</p>
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
        <h2 className="text-2xl font-bold mb-6 text-center">FAQ - Application mobile</h2>
        <div className="space-y-6">
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Combien coûte une application mobile ?</h4>
            <p className="text-gray-400">Le prix dépend de vos besoins : fonctionnalités, design, plateformes… Demandez un devis personnalisé gratuitement !</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Combien de temps pour être en ligne ?</h4>
            <p className="text-gray-400">En général, 4 à 8 semaines selon la complexité et votre réactivité sur les retours.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">L'application sera-t-elle évolutive ?</h4>
            <p className="text-gray-400">Oui, nous développons des applications évolutives, sécurisées et performantes.</p>
          </div>
        </div>
      </section>
      {/* Appel à l'action final */}
      <section
        role="region"
        aria-label="Appel à l'action"
        className="max-w-2xl mx-auto py-10 px-6 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Prêt à lancer votre application ?</h2>
        <p className="text-lg text-gray-300 mb-6">Contactez-nous pour discuter de votre projet et obtenir un devis gratuit, sans engagement.</p>
        <a href="/contact" className="cta-btn inline-block">Discutons de votre projet</a>
      </section>
    </main>
  );
} 