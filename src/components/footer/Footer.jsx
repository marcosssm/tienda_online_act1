import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src="/images/social-media.png" alt="Social Media" className="header__image" />
        <p className="footer__text">© 2024 Mi tiendita en línea :: Todos los derechos reservados.</p>        
      </div>
    </footer>
  );
};

export default Footer;
