import React from 'react';
import { Helmet } from 'react-helmet';

export default function PolitiqueConfidentialite() {
  return (
    <main className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Politique de confidentialité - NovaWeb</title>
        <meta name="description" content="Politique de confidentialité du site NovaWeb." />
      </Helmet>
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Politique de confidentialité</h1>
        <div className="space-y-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Collecte des données personnelles</h2>
            <p>Nous collectons uniquement les informations nécessaires au traitement de vos demandes (nom, email, message via le formulaire de contact). Aucune donnée n'est transmise à des tiers sans votre consentement.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Utilisation des données</h2>
            <p>Les données collectées servent uniquement à répondre à vos demandes et à améliorer nos services. Elles ne sont jamais utilisées à des fins commerciales sans votre accord.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Cookies</h2>
            <p>Le site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Droits de l'utilisateur</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à <a href="mailto:contact@novaweb-digital.fr" className="text-blue-400 underline">contact@novaweb-digital.fr</a>.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Contact</h2>
            <p>Pour toute question relative à la protection de vos données, contactez-nous à l'adresse ci-dessus.</p>
          </div>
        </div>
      </section>
    </main>
  );
} 