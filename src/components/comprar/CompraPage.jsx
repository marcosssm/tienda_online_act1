// src/pages/HomePage.js
import React, { useState } from 'react';
import MensajeExito from './MensajeExito';
import './CompraPage.css';
import DetalleCompra from '../tabla/DetalleCompra';
const HomePage = () => {

  const [mostrarExito, setMostrarExito] = useState(false);

  // Función para manejar el cierre del mensaje de éxito
  const handleCloseExito = () => {
    setMostrarExito(false); // Oculta el mensaje de éxito
  };

  // Función para manejar la acción que muestra el mensaje de éxito
  const handleMostrarExito = () => {
    setMostrarExito(true); // Muestra el mensaje de éxito
  };

  return (
    <div className="homepage">
      <h1 className="homepage__title">Detalle de la compra.</h1>
      <p className="homepage__description">Detalle de compras realizadas en el último año!</p>
      <DetalleCompra />
      <button onClick={handleMostrarExito} className="comprar-button">Finalizar compra</button>
      {mostrarExito && (
        <MensajeExito
          mensaje="¡Operación completada exitosamente!"
          onClose={handleCloseExito}
        />
      )}
    </div>
  );
};

export default HomePage;
