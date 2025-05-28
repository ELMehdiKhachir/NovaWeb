import React from 'react';
import './about.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function About() {
  return (
    <main role="main" className="bg-[#181B20] min-h-screen text-white font-sans">
      <Helmet>
        <title>À propos - NovaWeb Digital | Agence web à Nantes</title>
        <meta name="description" content="Découvrez l'histoire de NovaWeb Digital, agence web à Nantes, notre mission et nos valeurs. Spécialistes de la création de sites internet pour PME et entreprises en Loire-Atlantique." />
        <meta name="keywords" content="agence web Nantes, histoire NovaWeb Digital, mission, valeurs, innovation digitale, création site internet Loire-Atlantique, PME, entreprise" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        id="hero"
        role="region"
        aria-label="Hero"
        className="max-w-6xl mx-auto py-20 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Notre Histoire</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
            NovaWeb Digital est une agence web basée à Nantes, spécialisée dans la création de sites internet performants pour PME et entreprises en Loire-Atlantique. Notre équipe met à profit son expertise pour concevoir des solutions digitales uniques, adaptées à vos besoins et à votre marché local.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
          
          {/* Timeline Item 1 */}
          <motion.div 
            className="relative mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold mb-4">2020</h3>
                <p className="text-lg text-gray-300">Naissance de NovaWeb avec une vision claire : révolutionner l'expérience web</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div 
            className="relative mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold mb-4">2021</h3>
                <p className="text-lg text-gray-300">Développement de l'expertise technique et des premières réalisations</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline Item 3 */}
          <motion.div 
            className="relative mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold mb-4">2022</h3>
                <p className="text-lg text-gray-300">Lancement de la méthodologie unique et signature de projets majeurs</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
          </motion.div>

          {/* Timeline Item 4 */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold mb-4">2024</h3>
                <p className="text-lg text-gray-300">Aujourd'hui, je continue d'innover et de repousser les limites du web</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Notre Mission */}
      <motion.section
        id="values"
        role="region"
        aria-label="Nos Valeurs"
        className="bg-[#1C1F24] py-20 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Ma Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-[#23262B] rounded-xl p-8 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-lg text-gray-300">Repousser les limites du possible en créant des expériences web uniques et mémorables.</p>
            </motion.div>

            <motion.div 
              className="bg-[#23262B] rounded-xl p-8 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-lg text-gray-300">Délivrer des solutions web de la plus haute qualité, performantes et durables.</p>
            </motion.div>

            <motion.div 
              className="bg-[#23262B] rounded-xl p-8 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#fff" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="#fff" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#fff" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-lg text-gray-300">Travailler main dans la main avec mes clients pour transformer leurs visions en réalité.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 