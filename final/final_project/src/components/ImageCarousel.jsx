import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-carousel">
      <button className = "prev-button" onClick={goToPrevImage}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <button className = "next-button" onClick={goToNextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;