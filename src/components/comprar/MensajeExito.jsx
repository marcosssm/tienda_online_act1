import React, { useState } from 'react';
import './MensajeExito.css';

const MensajeExito = ({ mensaje, onClose }) => {
  // State para controlar la visibilidad del mensaje
  const [visible, setVisible] = useState(true);

  // Función para manejar el cierre del mensaje
  const handleClose = () => {
    setVisible(false); // Oculta el mensaje
    onClose(); // Llama a la función onClose proporcionada por el componente padre
  };

  // Renderiza el componente solo si es visible
  return visible ? (
    <div className="mensaje-exito">
      <p>{mensaje}</p>
      <button onClick={handleClose} className="mensaje-button">Cerrar</button>
    </div>
  ) : null;
};

export default MensajeExito;
