import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

export default function Merci() {
  return (
    <div className="bg-[#181B20] min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center py-24 px-6">
          {/* Illustration SVG moderne */}
          <div className="flex justify-center mb-8">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="56" fill="#2563eb" opacity="0.12" />
              <circle cx="60" cy="60" r="40" fill="#2563eb" />
              <path d="M45 62l10 10 20-22" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-6 text-blue-500">Merci pour votre message !</h1>
          <p className="text-lg text-gray-300 mb-8">Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.<br />
            Vous pouvez continuer à explorer notre site ou revenir à l'accueil.</p>
          <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg shadow transition duration-300 transform hover:scale-[1.02]">Retour à l'accueil</a>
        </div>
      </main>
      <Footer />
    </div>
  );
} 