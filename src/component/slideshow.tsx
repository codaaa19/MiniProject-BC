'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/assets/logo.png',
  '/assets/logo.png',
  '/assets/logo.png',
  '/assets/logo.png',
  '/assets/logo.png',
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-64">
      <Image
        src={images[currentIndex]}
        alt={`Slideshow image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
