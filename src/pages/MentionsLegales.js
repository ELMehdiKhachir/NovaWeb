import React from 'react';
import { Helmet } from 'react-helmet';

export default function MentionsLegales() {
  return (
    <main className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Mentions légales - NovaWeb</title>
        <meta name="description" content="Mentions légales du site NovaWeb." />
      </Helmet>
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Mentions légales</h1>
        <div className="space-y-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Éditeur du site</h2>
            <p>NovaWeb<br />
            contact@novaweb.fr<br />
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
            <p>Le responsable de la publication est le représentant légal de NovaWeb.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Propriété intellectuelle</h2>
            <p>Tous les contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) sont la propriété exclusive de NovaWeb, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit de NovaWeb.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Contact</h2>
            <p>Pour toute question, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@novaweb.fr" className="text-blue-400 underline">contact@novaweb.fr</a></p>
          </div>
        </div>
      </section>
    </main>
  );
} 