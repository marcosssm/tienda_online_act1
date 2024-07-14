import React, { useState } from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    // Simular los resultados de búsqueda
    const sampleResults = [
      { id: 1, title: 'Producto 1', image: '/images/product1.jpg' },
      { id: 2, title: 'Producto 2', image: '/images/product2.jpg' },
      { id: 3, title: 'Producto 3', image: '/images/product3.jpg' }
    ];
    setResults(sampleResults);
    setShowResults(true); // Mostrar los resultados al realizar la búsqueda
    onSearch && onSearch(sampleResults); // Pasar resultados al componente padre si es necesario
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <img src="/images/logo.png" alt="Company Logo" className="header__image" />
        <a href="/" className="header__link">Mi tiendita - Inicio</a>
      </div>
      <div className="header__search">
        <input 
          type="text" 
          placeholder="Buscar..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          className="header__search-input"
        />
        <button onClick={handleSearch} className="header__search-button">Buscar</button>
      </div>
      <div className="header__nav">
        <a href="/carousel" className="header__link">Ir a comprar</a>
        <a href="/compras" className="header__link">Mis compras</a>
        <a href="/login" className="header__link">Iniciar sesión</a>
        <a href="/" className="header__link">Contacto</a>
      </div>
    </header>
  );
};

export default Header;
