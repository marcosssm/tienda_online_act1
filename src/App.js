import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import Footer from './components/footer/Footer';
import CarouselComponent from './components/carousel/CarouselComponent';
import CompraPage from './components/comprar/CompraPage';
import Compras from './components/compras/Compras';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/carousel" element={<CarouselComponent />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/comprar/:id" element={<CompraPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
