import React from "react";

export default function Realisations() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-500 mb-6">Nos Réalisations</h2>
      <p className="text-gray-400 mb-10">Exemples de projets récents réalisés par notre équipe.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-zinc-700 rounded-lg h-40 animate-pulse" />
        <div className="bg-zinc-700 rounded-lg h-40 animate-pulse" />
        <div className="bg-zinc-700 rounded-lg h-40 animate-pulse" />
      </div>
    </section>
  );
}
