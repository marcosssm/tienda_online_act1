// src/pages/LoginPage.js
import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="loginpage">
      <h1 className="loginpage__title">Ingresa a tu cuenta:</h1>
      <form className="loginpage__form">
        <div className="loginpage__form-group">
          <label htmlFor="username" className="loginpage__label">Ingresa usuario:</label>
          <input type="text" id="username" name="username" className="loginpage__input" />
        </div>
        <div className="loginpage__form-group">
          <label htmlFor="password" className="loginpage__label">Ingresa contraseña:</label>
          <input type="password" id="password" name="password" className="loginpage__input" />
        </div>
        <div class="container">
          <button type="submit" className="loginpage__button">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
