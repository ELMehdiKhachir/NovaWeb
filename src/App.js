import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import NovaMethode from "./pages/NovaMethode/NovaMethode";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import CGV from './pages/CGV';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import SiteVitrine from './pages/Services/SiteVitrine';
import SiteEcommerce from './pages/Services/SiteEcommerce';
import Maintenance from './pages/Services/Maintenance';
import Refonte from './pages/Services/Refonte';
import ApplicationMobile from './pages/Services/ApplicationMobile';
import Merci from './pages/Merci';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/site-vitrine" element={<SiteVitrine />} />
          <Route path="/services/site-ecommerce" element={<SiteEcommerce />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/refonte" element={<Refonte />} />
          <Route path="/services/application-mobile" element={<ApplicationMobile />} />
          <Route path="/novaMethode" element={<NovaMethode />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/merci" element={<Merci />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
