// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';
import Counter from '../counter/Counter';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Mi tiendita en línea.</h1>
      <p className="homepage__description">Encuentra rebajas y descuentos todos los días!</p>
      <Counter />
      <img src="/images/discount.png" alt="Discount" className="homepage__image" />
    </div>
  );
};

export default HomePage;
