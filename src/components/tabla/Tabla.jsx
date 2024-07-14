import React from 'react';
import './Tabla.css'; // Importa tus estilos CSS aquí si los tienes

const Tabla = () => {
  return (
    <div className="tabla-container">
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Producto 1</td>
            <td>Descripción del Producto 1</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Producto 2</td>
            <td>Descripción del Producto 2</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Producto 3</td>
            <td>Descripción del Producto 3</td>
            <td>$80</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
