import React, { useEffect, useState } from "react";
import "./novamethode.css";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Palette, Code2, Rocket } from "lucide-react";
import { Helmet } from 'react-helmet';

export default function NovaMethode() {
  useEffect(() => {
    document.title = "NovaMéthode - Notre approche";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Découvrez la NovaMéthode : une approche structurée et humaine pour créer des sites web performants et sur-mesure.");
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = "Découvrez la NovaMéthode : une approche structurée et humaine pour créer des sites web performants et sur-mesure.";
      document.head.appendChild(metaTag);
    }
  }, []);

  const steps = [
    {
      title: "Découverte",
      icon: <Search size={44} color="#fff" strokeWidth={2} />,
      accroche: "Comprendre vos besoins pour une stratégie sur-mesure.",
      points: [
        "Écoute active & analyse des besoins",
        "Audit technique, étude de la concurrence",
        "Stratégie digitale alignée à vos objectifs"
      ],
      detail: "Nous commençons par une phase d'écoute active pour comprendre vos besoins, vos objectifs et l'ADN de votre entreprise. Nous analysons la concurrence, réalisons un audit technique de l'existant et définissons ensemble une stratégie digitale sur-mesure. Cette étape garantit que chaque décision prise par la suite est alignée avec votre vision et vos ambitions."
    },
    {
      title: "Design",
      icon: <Palette size={44} color="#fff" strokeWidth={2} />,
      accroche: "Un design élégant, intuitif et validé à chaque étape.",
      points: [
        "Wireframes & maquettes Figma",
        "UX/UI centrée utilisateur",
        "Responsive & validation client"
      ],
      detail: "Nous concevons des wireframes et des maquettes sur Figma pour imaginer une interface à la fois élégante, intuitive et centrée sur l'utilisateur. Chaque détail du design est pensé pour valoriser votre image de marque, optimiser l'expérience utilisateur (UX) et garantir une parfaite adaptabilité sur tous les supports (responsive). Vous validez chaque étape pour avancer en toute confiance."
    },
    {
      title: "Développement",
      icon: <Code2 size={44} color="#fff" strokeWidth={2} />,
      accroche: "Un site moderne, rapide, sécurisé et optimisé SEO.",
      points: [
        "React & Tailwind CSS",
        "Performance & accessibilité",
        "SEO intégré dès la conception"
      ],
      detail: "Nos développeurs réalisent votre site avec les technologies les plus modernes (React, Tailwind CSS) pour garantir rapidité, sécurité et évolutivité. Nous intégrons les meilleures pratiques SEO dès la conception, optimisons la performance et veillons à l'accessibilité pour tous les utilisateurs. Chaque fonctionnalité est testée et validée pour une qualité irréprochable."
    },
    {
      title: "Lancement",
      icon: <Rocket size={44} color="#fff" strokeWidth={2} />,
      accroche: "Un accompagnement durable, bien au-delà de la mise en ligne.",
      points: [
        "Recette & mise en production",
        "Maintenance & support technique",
        "Suivi & évolutions à long terme"
      ],
      detail: "Après une phase de recette rigoureuse, nous mettons votre site en ligne dans les meilleures conditions. Nous assurons la maintenance, le suivi technique et restons à vos côtés pour faire évoluer votre projet. Notre accompagnement sur le long terme vous garantit sérénité, sécurité et performance durable."
    }
  ];

  const [step, setStep] = useState(0);
  const [openDetail, setOpenDetail] = useState(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };
  const detailVariants = {
    hidden: { opacity: 0, y: -16, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <main className="nova-container bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>NovaMéthode - Notre approche</title>
        <meta name="description" content="Découvrez la NovaMéthode : une approche structurée et humaine pour créer des sites web performants et sur-mesure." />
      </Helmet>
      <section className="intro max-w-3xl mx-auto mt-10 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-500">NovaMéthode</h1>
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Notre approche unique du web</h2>
        <p className="text-lg text-gray-300 text-center mb-8">Une méthode claire, humaine et performante pour accompagner chaque projet avec rigueur et créativité.</p>
      </section>

      {/* Timeline verticale moderne */}
      <section className="relative max-w-2xl mx-auto w-full mb-16">
        {/* Ligne verticale */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-blue-900/40 rounded-full" style={{zIndex:0}}></div>
        <div className="flex flex-col gap-0">
          {steps.map((s, index) => (
            <motion.div
              key={index}
              className="relative flex items-center mb-12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Point de la timeline */}
              <div className="z-10 flex flex-col items-center justify-center">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${openDetail === index ? 'bg-blue-600 scale-110 ring-4 ring-blue-400/30' : 'bg-blue-900/80'}`}>{s.icon}</div>
                {/* Trait vertical entre les points (mobile) */}
                {index < steps.length - 1 && (
                  <div className="block md:hidden w-1 h-8 bg-blue-900/40"></div>
                )}
              </div>
              {/* Carte étape */}
              <div className="ml-6 md:ml-8 flex-1 bg-[#1f2937] rounded-xl shadow-lg px-6 py-5">
                <h2 className="text-2xl font-bold mb-4 text-white">{s.title}</h2>
                <p className="font-semibold text-blue-400 mb-2">{s.accroche}</p>
                <ul className="list-disc list-inside text-gray-200 mb-2">
                  {s.points.map((pt, i) => (
                    <li key={i}><span className="font-medium text-white">{pt.split(':')[0]}</span>{pt.includes(':') ? <span className="text-gray-300"> : {pt.split(':').slice(1).join(':')}</span> : null}</li>
                  ))}
                </ul>
                <button
                  className="text-blue-500 hover:underline font-medium mb-2 focus:outline-none"
                  onClick={() => setOpenDetail(openDetail === index ? null : index)}
                  aria-expanded={openDetail === index}
                >
                  {openDetail === index ? 'Masquer le détail' : 'En savoir plus'}
                </button>
                <AnimatePresence initial={false}>
                  {openDetail === index && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <p className="text-lg text-gray-300 mt-2 mb-2">{s.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="video-section max-w-2xl mx-auto w-full mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Découvrez notre méthode en vidéo</h2>
        <video controls className="novamethode-video mx-auto">
          <source src="/video/1AYL046E3M5K9LRG.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
      </motion.section>
    </main>
  );
}
