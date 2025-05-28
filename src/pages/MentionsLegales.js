import React from 'react';
import { Helmet } from 'react-helmet';

export default function MentionsLegales() {
  return (
    <main className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Mentions légales - NovaWeb Digital | Agence web à Nantes</title>
        <meta name="description" content="Mentions légales du site NovaWeb Digital, agence web à Nantes, spécialisée en création de sites internet pour PME et entreprises en Loire-Atlantique." />
        <meta name="keywords" content="mentions légales, agence web Nantes, NovaWeb Digital, création site internet Loire-Atlantique, PME, entreprise" />
      </Helmet>
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Mentions légales</h1>
        <div className="space-y-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Éditeur du site</h2>
            <p>NovaWeb Digital<br />
            contact@novaweb-digital.fr<br />
            Nantes, France</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Hébergement</h2>
            <p>Hébergeur : OVH SAS<br />
            2 rue Kellermann, 59100 Roubaix, France<br />
            Tél : 1007</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Responsable de la publication</h2>
            <p>Le responsable de la publication est le représentant légal de NovaWeb Digital.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Propriété intellectuelle</h2>
            <p>Tous les contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) sont la propriété exclusive de NovaWeb Digital, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit de NovaWeb Digital.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Contact</h2>
            <p>Pour toute question, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@novaweb-digital.fr" className="text-blue-400 underline">contact@novaweb-digital.fr</a></p>
          </div>
        </div>
      </section>
    </main>
  );
} 