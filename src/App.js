// src/App.js
import React, { useState } from 'react';
import ZoomableImage from './ZoomableImage';
import './App.css';

const images = [
  'https://app.moja-e-gazetka.pl/231021_231016_biedronka_gdcbe/image01.jpg',
  'https://app.moja-e-gazetka.pl/231021_231016_biedronka_gdcbe/image02.jpg',
  // ...dodaj więcej ścieżek do obrazków, jeśli masz ich więcej
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="App">
      <h1>Gazetka Biedronki</h1>
      <ZoomableImage src={images[currentIndex]} />
      <button onClick={handlePrevious}>Poprzednia strona</button>
      <button onClick={handleNext}>Następna strona</button>
    </div>
  );
}

export default App;
