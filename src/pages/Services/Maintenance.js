import React from 'react';
import { Helmet } from 'react-helmet';

const IconShield = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" fill="#2563eb"/><path d="M12 3v17c3.5-1.26 7-5.75 7-11V7l-7-4z" fill="#174ea6"/></svg>
);
const IconUpdate = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconSupport = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
);
const IconSpeed = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
);

export default function Maintenance() {
  return (
    <main className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Maintenance de site web à Nantes | NovaWeb</title>
        <meta name="description" content="Maintenance de site web à Nantes et Pays de la Loire. Sécurité, mises à jour, support technique, intervention rapide." />
        <meta name="keywords" content="maintenance site web, sécurité, mises à jour, support technique, Nantes, NovaWeb" />
        {/* Open Graph */}
        <meta property="og:title" content="Maintenance de site web à Nantes | NovaWeb" />
        <meta property="og:description" content="Maintenance de site web à Nantes et Pays de la Loire. Sécurité, mises à jour, support technique, intervention rapide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novaweb.fr/services/maintenance" />
        <meta property="og:image" content="/logo-pack/novaweb-logo-original.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maintenance de site web à Nantes | NovaWeb" />
        <meta name="twitter:description" content="Maintenance de site web à Nantes et Pays de la Loire. Sécurité, mises à jour, support technique, intervention rapide." />
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
            <text x="110" y="100" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" opacity="0.9">Maintenance</text>
          </svg>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-center md:text-left">Maintenance de site web à Nantes</h1>
          <p className="text-lg text-gray-300 mb-6 text-center md:text-left">Assurez la sécurité et la performance de votre site avec notre service de maintenance. Intervention rapide, support technique, mises à jour régulières.</p>
          <a href="/contact" className="cta-btn inline-block">Demander un devis</a>
        </div>
      </section>
      {/* Avantages */}
      <section className="max-w-4xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconShield />
          <div>
            <h3 className="text-xl font-bold mb-2">Sécurité renforcée</h3>
            <p className="text-gray-300">Surveillance, sauvegardes et protection contre les menaces.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconUpdate />
          <div>
            <h3 className="text-xl font-bold mb-2">Mises à jour régulières</h3>
            <p className="text-gray-300">Votre site reste à jour, rapide et compatible avec les dernières technologies.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSpeed />
          <div>
            <h3 className="text-xl font-bold mb-2">Performance & rapidité</h3>
            <p className="text-gray-300">Optimisation continue pour garantir la meilleure expérience utilisateur.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSupport />
          <div>
            <h3 className="text-xl font-bold mb-2">Support réactif</h3>
            <p className="text-gray-300">Notre équipe technique intervient rapidement en cas de besoin.</p>
          </div>
        </div>
      </section>
      {/* Processus */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Notre méthode</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconShield /></span>
            <h4 className="font-bold mb-1">1. Audit & sécurisation</h4>
            <p className="text-gray-400 text-sm text-center">Nous analysons votre site et mettons en place les protections nécessaires.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconUpdate /></span>
            <h4 className="font-bold mb-1">2. Mises à jour & sauvegardes</h4>
            <p className="text-gray-400 text-sm text-center">Nous assurons les mises à jour régulières et les sauvegardes automatiques.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSpeed /></span>
            <h4 className="font-bold mb-1">3. Optimisation continue</h4>
            <p className="text-gray-400 text-sm text-center">Optimisation des performances, sécurité et compatibilité.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSupport /></span>
            <h4 className="font-bold mb-1">4. Support & intervention</h4>
            <p className="text-gray-400 text-sm text-center">Support technique réactif et interventions rapides en cas de besoin.</p>
          </div>
        </div>
      </section>
      {/* Pourquoi choisir NovaWeb */}
      <section className="max-w-3xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Pourquoi choisir NovaWeb ?</h2>
        <p className="text-lg text-gray-300 mb-4">Expertise technique, sécurité, réactivité et accompagnement : tout est pensé pour la tranquillité d'esprit de nos clients.</p>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
          <li className="bg-[#23262B] rounded-full px-5 py-2">+10 ans d'expérience</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Réactivité & conseils</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Solutions sur-mesure</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Satisfaction garantie</li>
        </ul>
      </section>
      {/* FAQ */}
      <section className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">FAQ - Maintenance</h2>
        <div className="space-y-6">
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Pourquoi la maintenance est-elle importante ?</h4>
            <p className="text-gray-400">Un site bien maintenu est plus sécurisé, plus rapide et mieux référencé. Nous assurons la tranquillité d'esprit de nos clients.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Intervenez-vous rapidement en cas de problème ?</h4>
            <p className="text-gray-400">Oui, notre équipe technique intervient rapidement pour résoudre tout incident ou dysfonctionnement.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">La maintenance inclut-elle les mises à jour ?</h4>
            <p className="text-gray-400">Oui, nous assurons toutes les mises à jour nécessaires pour garantir la sécurité et la performance de votre site.</p>
          </div>
        </div>
      </section>
      {/* Appel à l'action final */}
      <section className="max-w-2xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Besoin d'une maintenance fiable ?</h2>
        <p className="text-lg text-gray-300 mb-6">Contactez-nous pour discuter de votre projet et obtenir un devis gratuit, sans engagement.</p>
        <a href="/contact" className="cta-btn inline-block">Discutons de votre projet</a>
      </section>
    </main>
  );
} 