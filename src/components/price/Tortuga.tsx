import React, { useEffect, useState } from 'react'
 import { motion, useAnimation } from 'framer-motion';
 
function Tortuga() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20  },
    visible: { opacity: 1, y: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, y: 20  },
    visible: { opacity: 1, y: 0  },
  };
  const imgv = {
    hidden: { opacity: 0.8, scale: 0.9, rotate: -50, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' },
  };
  const isVisible = scrollY > 300; // Ajusta este valor según sea necesario
  return (
    <div className='h-screen   bg-stone-700'>
       
       <div className='flex justify-between'>
         <motion.div
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <div className=' w-[500px] h-auto bg-amber-400 rounded-2xl'>
     
        <h2 className=' text-2xl text-rose-400'>Texto que se anima al hacer scroll
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae necessitatibus nulla obcaecati ad excepturi, accusantium exercitationem, praesentium, neque eaque esse qui nobis error ex minima reprehenderit quisquam placeat perferendis amet.
        </h2>
        
         <motion.img
        src="https://img.freepik.com/fotos-premium/cachorro-perro-cruzado-fondo-pantalla-hd-8k-imagen-fotografica-archivo_915071-54299.jpg?w=1380"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={imgv}
        transition={{ duration: 0.5 }}
        alt="Imagen de ejemplo"
        style={{ width: '600px', height: '400px' }} // Ajusta el tamaño según sea necesario
      />
        </div>
        
      </motion.div>
     
       </div>
       
    </div>
  )
}

export default Tortuga

 