// Carousel.jsx

import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselComponent.css';

const Carousel = () => {
  const products = [
    {
      id: 1,
      name: 'Iphone 12 Ultra Plus Master',
      company: 'APPLE',
      shortDescription: 'Descripción:',
      longDescription: 'Iphone 12 Ultra Plus Master, 256 Gb de almacenamiento, 8 Gb memoria ram.',
      imageUrl: '/images/smartphone.png',
      price: '$23,000',
      originalPrice: '$43,499',
    },
    {
      id: 2,
      name: 'Tennis modelo 3.1416',
      company: 'NIKE',
      shortDescription: 'Descripción:',
      longDescription: 'Tennis Nike, super suaves, todas las tallas disponibles.',
      imageUrl: '/images/tennis.png',
      price: '$1,999',
      originalPrice: '$3,499',
    },
    {
      id: 3,
      name: 'Ford Mustang',
      company: 'FORD',
      shortDescription: 'Descripción:',
      longDescription: 'Ford Mustang Roadster, auto deportivo color gris, rayas negras, rin 16".',
      imageUrl: '/images/mustang.png',
      price: '$1,000,000',
      originalPrice: '$2,324,000',
    },
    {
      id: 4,
      name: 'Monitor 24"',
      company: 'HP',
      shortDescription: 'Descripción:',
      longDescription: 'Monitor HP de 24", alta definición color plata.',
      imageUrl: '/images/monitor.png',
      price: '$4,120',
      originalPrice: '$6,520',
    },
    {
      id: 5,
      name: 'Televisión',
      company: 'TVs VINTAGE',
      shortDescription: 'Descripción:',
      longDescription: 'Regresa a los años 20s con esta TV a blanco y negro.',
      imageUrl: '/images/tv.png',
      price: '$2,900',
      originalPrice: '$3,600',
    },    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>            
            <div className="carousel__content">
              
              <h3>{product.name}</h3>
              <p>{product.company}</p>
              <img
                src={product.imageUrl}
                className="carousel__image"
              />
              <p>{product.shortDescription}</p>
              <p>{product.longDescription}</p>
              <p class="texto-normal">Precio rebajado: {product.price}</p>
              <p class="texto-tachado">Precio original: {product.originalPrice}</p>
              <Link to={`/comprar/${product.id}`} className="carousel__buy-button">
              Ir a Comprar
            </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
