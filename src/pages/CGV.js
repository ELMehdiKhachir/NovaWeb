import React from 'react';
import { Helmet } from 'react-helmet';

export default function CGV() {
  return (
    <main className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>Conditions Générales de Vente - NovaWeb</title>
        <meta name="description" content="Conditions Générales de Vente du site NovaWeb." />
      </Helmet>
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Conditions Générales de Vente</h1>
        <div className="space-y-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Objet</h2>
            <p>Les présentes conditions régissent les ventes de prestations de services réalisées par NovaWeb.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Prix</h2>
            <p>Les prix sont indiqués en euros et sont susceptibles d'être modifiés à tout moment. Le prix appliqué est celui en vigueur au moment de la commande.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Commande</h2>
            <p>Toute commande implique l'acceptation des présentes CGV. La commande est validée après confirmation écrite et paiement de l'acompte éventuel.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Paiement</h2>
            <p>Le paiement s'effectue selon les modalités convenues lors de la commande (virement, chèque, etc.).</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Livraison</h2>
            <p>Les délais de livraison sont donnés à titre indicatif. NovaWeb ne saurait être tenue responsable d'un retard indépendant de sa volonté.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Droit de rétractation</h2>
            <p>Conformément à la loi, le client dispose d'un délai de rétractation de 14 jours à compter de la signature du devis, sauf prestation déjà commencée avec son accord.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Contact</h2>
            <p>Pour toute question relative aux CGV, contactez-nous à <a href="mailto:contact@novaweb-digital.fr" className="text-blue-400 underline">contact@novaweb-digital.fr</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
} 