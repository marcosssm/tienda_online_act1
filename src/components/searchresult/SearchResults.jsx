import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results, onClose }) => {
  return (
    <div className="search-results">
      <button className="search-results__close" onClick={onClose}>Cerrar</button>
      <h2>Resultados de la búsqueda</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
