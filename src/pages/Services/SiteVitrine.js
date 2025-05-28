import React from 'react';
import { Helmet } from 'react-helmet';

// Icônes SVG inline pour l'exemple
const IconDesign = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" fill="#2563eb"/><rect x="6" y="8" width="12" height="2" rx="1" fill="#fff"/><rect x="8" y="12" width="8" height="2" rx="1" fill="#fff"/></svg>
);
const IconSEO = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconSupport = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
);
const IconMobile = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="3" fill="#2563eb"/><rect x="10" y="18" width="4" height="2" rx="1" fill="#fff"/></svg>
);

export default function SiteVitrine() {
  return (
    <main className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Création de site vitrine à Nantes | NovaWeb</title>
        <meta name="description" content="Création de site vitrine professionnel à Nantes et Pays de la Loire. Présence en ligne, design moderne, SEO, accompagnement sur-mesure." />
        <meta name="keywords" content="site vitrine, création site vitrine, Nantes, design web, SEO, NovaWeb, site professionnel" />
        {/* Open Graph */}
        <meta property="og:title" content="Création de site vitrine à Nantes | NovaWeb" />
        <meta property="og:description" content="Création de site vitrine professionnel à Nantes et Pays de la Loire. Présence en ligne, design moderne, SEO, accompagnement sur-mesure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novaweb.fr/services/site-vitrine" />
        <meta property="og:image" content="/logo-pack/novaweb-logo-original.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Création de site vitrine à Nantes | NovaWeb" />
        <meta name="twitter:description" content="Création de site vitrine professionnel à Nantes et Pays de la Loire. Présence en ligne, design moderne, SEO, accompagnement sur-mesure." />
        <meta name="twitter:image" content="/logo-pack/novaweb-logo-original.png" />
      </Helmet>
      {/* Héros visuel */}
      <section className="max-w-4xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          {/* Illustration SVG moderne */}
          <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
            <ellipse cx="110" cy="160" rx="90" ry="18" fill="#232B36"/>
            <rect x="30" y="30" width="160" height="90" rx="16" fill="#2563eb"/>
            <rect x="50" y="50" width="120" height="50" rx="8" fill="#181B20"/>
            <rect x="70" y="70" width="80" height="10" rx="5" fill="#2563eb"/>
            <rect x="90" y="90" width="40" height="6" rx="3" fill="#2d3a4e"/>
            <text x="110" y="100" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" opacity="0.9">Vitrine</text>
          </svg>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-center md:text-left">Création de site vitrine à Nantes</h1>
          <p className="text-lg text-gray-300 mb-6 text-center md:text-left">Boostez votre visibilité avec un site vitrine moderne, responsive et optimisé pour Google. Idéal pour artisans, PME, indépendants et associations.</p>
          <a href="/contact" className="cta-btn inline-block">Demander un devis</a>
        </div>
      </section>
      {/* Avantages */}
      <section className="max-w-4xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconDesign />
          <div>
            <h3 className="text-xl font-bold mb-2">Design personnalisé</h3>
            <p className="text-gray-300">Un site à votre image, moderne, unique et adapté à votre activité.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSEO />
          <div>
            <h3 className="text-xl font-bold mb-2">SEO local optimisé</h3>
            <p className="text-gray-300">Votre site visible sur Google à Nantes et dans toute la région.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconMobile />
          <div>
            <h3 className="text-xl font-bold mb-2">Responsive & mobile</h3>
            <p className="text-gray-300">Parfaitement adapté à tous les écrans : smartphone, tablette, ordinateur.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#23262B] rounded-xl p-6 shadow">
          <IconSupport />
          <div>
            <h3 className="text-xl font-bold mb-2">Accompagnement & support</h3>
            <p className="text-gray-300">Un expert à vos côtés avant, pendant et après la mise en ligne.</p>
          </div>
        </div>
      </section>
      {/* Processus */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Comment ça se passe ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconDesign /></span>
            <h4 className="font-bold mb-1">1. Brief & conseil</h4>
            <p className="text-gray-400 text-sm text-center">Nous échangeons sur vos besoins, vos envies, vos objectifs.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconMobile /></span>
            <h4 className="font-bold mb-1">2. Design & maquette</h4>
            <p className="text-gray-400 text-sm text-center">Nous concevons une maquette moderne, claire et adaptée à votre image.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSEO /></span>
            <h4 className="font-bold mb-1">3. Développement</h4>
            <p className="text-gray-400 text-sm text-center">Développement rapide, sécurisé, SEO friendly et responsive.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="mb-2"><IconSupport /></span>
            <h4 className="font-bold mb-1">4. Mise en ligne & suivi</h4>
            <p className="text-gray-400 text-sm text-center">Mise en ligne, accompagnement, support et évolutions assurés par notre équipe.</p>
          </div>
        </div>
      </section>
      {/* Pourquoi choisir NovaWeb */}
      <section className="max-w-3xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Pourquoi choisir NovaWeb ?</h2>
        <p className="text-lg text-gray-300 mb-4">Expertise locale, accompagnement humain, design moderne, performance et référencement : tout est pensé pour la réussite de vos projets.</p>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
          <li className="bg-[#23262B] rounded-full px-5 py-2">+10 ans d'expérience</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Réactivité & conseils</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Solutions sur-mesure</li>
          <li className="bg-[#23262B] rounded-full px-5 py-2">Satisfaction garantie</li>
        </ul>
      </section>
      {/* FAQ */}
      <section className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">FAQ - Site vitrine</h2>
        <div className="space-y-6">
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Combien coûte un site vitrine ?</h4>
            <p className="text-gray-400">Le prix dépend de vos besoins : design, fonctionnalités, nombre de pages… Demandez un devis personnalisé gratuitement !</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Combien de temps pour être en ligne ?</h4>
            <p className="text-gray-400">En général, 2 à 4 semaines selon la complexité et votre réactivité sur les retours.</p>
          </div>
          <div className="bg-[#23262B] rounded-xl p-5">
            <h4 className="font-semibold mb-2">Le site sera-t-il bien référencé ?</h4>
            <p className="text-gray-400">Oui, nous intégrons les meilleures pratiques SEO : structure, rapidité, balises, optimisation mobile et locale.</p>
          </div>
        </div>
      </section>
      {/* Appel à l'action final */}
      <section className="max-w-2xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Prêt à booster votre activité ?</h2>
        <p className="text-lg text-gray-300 mb-6">Contactez-nous pour discuter de votre projet et obtenir un devis gratuit, sans engagement.</p>
        <a href="/contact" className="cta-btn inline-block">Discutons de votre projet</a>
      </section>
    </main>
  );
} 