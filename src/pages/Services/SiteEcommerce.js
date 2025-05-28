import React from 'react';
import { Helmet } from 'react-helmet';

const IconShop = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="3" fill="#2563eb"/><rect x="6" y="10" width="12" height="2" rx="1" fill="#fff"/><rect x="8" y="14" width="8" height="2" rx="1" fill="#fff"/></svg>
);
const IconSecure = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconSupport = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
);
const IconSEO = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function SiteEcommerce() {
  return (
    <main className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Création de site e-commerce à Nantes | NovaWeb</title>
        <meta name="description" content="Développement de site e-commerce performant à Nantes et Pays de la Loire. Boutique en ligne, paiement sécurisé, SEO, accompagnement sur-mesure." />
        <meta name="keywords" content="site e-commerce, création boutique en ligne, Nantes, paiement sécurisé, SEO, NovaWeb, vente en ligne" />
        {/* Open Graph */}
        <meta property="og:title" content="Création de site e-commerce à Nantes | NovaWeb" />
        <meta property="og:description" content="Développement de site e-commerce performant à Nantes et Pays de la Loire. Boutique en ligne, paiement sécurisé, SEO, accompagnement sur-mesure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novaweb.fr/services/site-ecommerce" />
        <meta property="og:image" content="/logo-pack/novaweb-logo-original.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Création de site e-commerce à Nantes | NovaWeb" />
        <meta name="twitter:description" content="Développement de site e-commerce performant à Nantes et Pays de la Loire. Boutique en ligne, paiement sécurisé, SEO, accompagnement sur-mesure." />
        <meta name="twitter:image" content="/logo-pack/novaweb-logo-original.png" />
      </Helmet>
      {/* Héros visuel */}
      <section className="max-w-4xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
            <ellipse cx="110" cy="160" rx="90" ry="18" fill="#232B36"/>
            <rect x="30" y="30" width="160" height="90" rx="16" fill="#2563eb"/>
            <rect x="50" y="50" width="120" height="50" rx="8" fill="#181B20"/>
            <rect x="70" y="70" width="80" height="10" rx="5" fill="#2563eb"/>
            <rect x="90" y="90" width="40" height="6" rx="3" fill="#2d3a4e"/>
            <text x="110" y="100" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" opacity="0.9">E-commerce</text>
          </svg>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-center md:text-left">Création de site e-commerce à Nantes</h1>
          <p className="text-lg text-gray-300 mb-6 text-center md:text-left">Développez votre activité en ligne avec une boutique e-commerce moderne, sécurisée et optimisée pour la conversion. Idéal pour commerçants, PME et start-up.</p>
          <a href="/contact" className="cta-btn inline-block">Demander un devis</a>
        </div>
      </section>
      {/* Avantages */}
      <section className="max-w-4xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconShop />
          <div>
            <h3 className="text-xl font-bold mb-2">Boutique sur-mesure</h3>
            <p className="text-gray-300">Une boutique adaptée à vos produits, à votre image et à vos clients.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSecure />
          <div>
            <h3 className="text-xl font-bold mb-2">Paiement sécurisé</h3>
            <p className="text-gray-300">Transactions protégées, gestion des stocks et commandes simplifiée.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSEO />
          <div>
            <h3 className="text-xl font-bold mb-2">SEO & visibilité</h3>
            <p className="text-gray-300">Optimisation pour Google Shopping et le référencement local.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSupport />
          <div>
            <h3 className="text-xl font-bold mb-2">Accompagnement & support</h3>
            <p className="text-gray-300">Notre équipe vous accompagne avant, pendant et après la mise en ligne.</p>
          </div>
        </div>
      </section>
      {/* Processus */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Notre méthode</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconShop /></span>
            <h4 className="font-bold mb-1">1. Analyse & conseil</h4>
            <p className="text-gray-400 text-sm text-center">Nous analysons vos besoins, vos produits et vos objectifs.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSecure /></span>
            <h4 className="font-bold mb-1">2. Design & configuration</h4>
            <p className="text-gray-400 text-sm text-center">Nous concevons une boutique ergonomique, sécurisée et attractive.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSEO /></span>
            <h4 className="font-bold mb-1">3. Développement & SEO</h4>
            <p className="text-gray-400 text-sm text-center">Développement rapide, optimisation SEO, intégration des moyens de paiement.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSupport /></span>
            <h4 className="font-bold mb-1">4. Lancement & suivi</h4>
            <p className="text-gray-400 text-sm text-center">Mise en ligne, accompagnement, support et évolutions assurés par notre équipe.</p>
          </div>
        </div>
      </section>
      {/* Pourquoi choisir NovaWeb */}
      <section className="max-w-3xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Pourquoi choisir NovaWeb ?</h2>
        <p className="text-lg text-gray-300 mb-4">Expertise e-commerce, accompagnement humain, sécurité, performance et référencement : tout est pensé pour la réussite de vos ventes en ligne.</p>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
          <li className="bg-[#23262B] rounded-full px-5 py-2">+10 ans d'expérience</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Réactivité & conseils</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Solutions sur-mesure</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Satisfaction garantie</li>
        </ul>
      </section>
      {/* FAQ */}
      <section className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">FAQ - Site e-commerce</h2>
        <div className="space-y-6">
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Combien coûte un site e-commerce ?</h4>
            <p className="text-gray-400">Le prix dépend de vos besoins : nombre de produits, fonctionnalités, design… Demandez un devis personnalisé gratuitement !</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Combien de temps pour être en ligne ?</h4>
            <p className="text-gray-400">En général, 3 à 6 semaines selon la complexité et votre réactivité sur les retours.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Le site sera-t-il bien référencé ?</h4>
            <p className="text-gray-400">Oui, nous intégrons les meilleures pratiques SEO : structure, rapidité, balises, optimisation mobile et locale.</p>
          </div>
        </div>
      </section>
      {/* Appel à l'action final */}
      <section className="max-w-2xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Prêt à vendre en ligne ?</h2>
        <p className="text-lg text-gray-300 mb-6">Contactez-nous pour discuter de votre projet et obtenir un devis gratuit, sans engagement.</p>
        <a href="/contact" className="cta-btn inline-block">Discutons de votre projet</a>
      </section>
    </main>
  );
} 