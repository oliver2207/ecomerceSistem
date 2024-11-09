 
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
    'https://via.placeholder.com/600x400/FFB6C1/000000',
    'https://via.placeholder.com/600x400/87CEFA/000000',
    'https://via.placeholder.com/600x400/20B2AA/000000',
    'https://via.placeholder.com/600x400/FF6347/000000',
  ];
function Gsap() {
    // const circleRef = useRef(null);
    // useEffect(() => {
    //     gsap.to(circleRef.current, {
    //       scale: 1.5,        // Escala el círculo al 150%
    //       duration: 1.5, 
    //       y:300,    // Duración de la animación
    //       yoyo: true,        // Habilita el efecto de yoyo para ir y venir
    //       repeat: -1,        // Repite la animación infinitamente
    //       ease: "power1.inOut"  // Añade suavidad a la animación
    //     });
    //   }, []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);
  
    useEffect(() => {
      // Animación de entrada y salida con GSAP
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, x: 50 },
        { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power2.out' }
      );
    }, [currentIndex]);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
  return (
    <div className="h-screen   bg-blue-300"> 
{/*<div  className='pt-10 pl-5 '>
 <div

   className=''
      ref={circleRef}
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'cornflowerblue',
      
      }}
    ></div> 
</div>*/}
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div className="flex items-center justify-center">
        <div
          className="w-full h-64 bg-center bg-cover transition-all duration-1000 ease-in-out"
          ref={imageRef}
          style={{
            backgroundImage: `url(${images[currentIndex]})`
          }}
        ></div>
      </div>

      {/* Botón izquierdo */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300"
      >
        <FaChevronLeft />
      </button>

      {/* Botón derecho */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300"
      >
        <FaChevronRight />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Gsap