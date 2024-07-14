// src/pages/HomePage.js
import React from 'react';
import './Compras.css';
import Tabla from '../tabla/Tabla';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Mis compras.</h1>
      <p className="homepage__description">Detalle de compras realizadas en el último año!</p>
      <Tabla />
    </div>
  );
};

export default HomePage;
