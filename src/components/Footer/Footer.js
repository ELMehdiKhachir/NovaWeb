import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <footer role="contentinfo" className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Colonne 1 - À propos */}
          <div className="footer-column">
            <h3 className="footer-title">NovaWeb Digital</h3>
            <p className="footer-description">
              Créateur d'expériences web modernes et performantes. Nous transformons vos idées en réalité digitale.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61577073176375" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/novaweb_digital_fr/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78 2.285 6.06 2.272 6.469 2.272 12c0 5.531.013 5.94.072 7.22.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334 1.28.059 1.689.072 7.22.072s5.94-.013 7.22-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-7.22s-.013-5.94-.072-7.22c-.059-1.281-.353-2.393-1.334-3.374C19.393.425 18.281.131 17 .072 15.719.013 15.31 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/novaweb-digital-fr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 - Navigation */}
          <div className="footer-column">
            <h3 className="footer-title">Navigation</h3>
            <nav role="navigation" aria-label="Navigation du pied de page">
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Accueil</Link></li>
                <li><Link to="/services" className="footer-link">Services</Link></li>
                <li><Link to="/novaMethode" className="footer-link">NovaMéthode</Link></li>
                <li><Link to="/about" className="footer-link">À propos</Link></li>
                <li><Link to="/blog" className="footer-link">Blog</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Colonne 3 - Services */}
          <div className="footer-column">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services/site-vitrine" className="footer-link">Site vitrine</Link></li>
              <li><Link to="/services/site-ecommerce" className="footer-link">Site e-commerce</Link></li>
              <li><Link to="/services/application-mobile" className="footer-link">Application mobile</Link></li>
              <li><Link to="/services/maintenance" className="footer-link">Maintenance</Link></li>
              <li><Link to="/services/refonte" className="footer-link">Refonte</Link></li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div className="footer-column">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-contact">
              <li>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:contact@novaweb-digital.fr" className="footer-link">contact@novaweb-digital.fr</a>
              </li>
              <li>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+33605666310" className="footer-link">+33 6 05 66 63 10</a>
              </li>
              <li>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="footer-link">Nantes, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2024 NovaWeb Digital. Tous droits réservés.</span>
            <div className="footer-legal-links">
              <Link to="/mentions-legales" className="footer-link">Mentions légales</Link>
              <Link to="/politique-confidentialite" className="footer-link">Politique de confidentialité</Link>
              <Link to="/cgv" className="footer-link">CGV</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 