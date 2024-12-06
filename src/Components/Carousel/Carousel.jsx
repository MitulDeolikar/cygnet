import React, { useEffect, useState } from 'react';
import img1 from'../../Assets/carousel1.jpeg';
import img2 from'../../Assets/carousel2.webp';
import img3 from'../../Assets/carousel3.jpg';
import './Carousel.css'; // Import your CSS file

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <div className="carousel-image">
            <img src={img1} alt="..." />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h1>Empowering Small and Medium Businesses</h1>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <div className="carousel-image">
            <img src={img2} alt="..." />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h1>Innovative Solutions for Every Challenge</h1>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
          <div className="carousel-image">
            <img src={img3} alt="..." />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h1>Building on Success, Creating Sustainability</h1>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default Carousel;
