// src/components/ProjectImageCarousel.jsx

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectImageCarousel = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative rounded-lg mb-4 aspect-video overflow-hidden group">
      {/* Tampilkan Gambar Aktif */}
      <img
        src={images[current]}
        alt={`Tangkapan layar proyek ${title} - Slide ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Tombol Navigasi (Hanya muncul saat hover) */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indikator Slide */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === current ? 'bg-indigo-400' : 'bg-white/40'}`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectImageCarousel;