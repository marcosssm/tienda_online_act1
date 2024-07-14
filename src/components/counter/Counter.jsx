import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(60); // Inicia en 60 segundos

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(prevCount => prevCount - 1); // Decrementa el contador
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]); // Dependencia para reiniciar el efecto cuando cambia count

  return (
    <div className="counter">
      <h2 className="counter__text">Date prisa, las ofertas terminan en: {count} segundos</h2>
    </div>
  );
};

export default Counter;
