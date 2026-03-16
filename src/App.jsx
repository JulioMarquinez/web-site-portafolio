import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import backgroundImage from './assets/Background-portfolio.jpg'; 

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: false, // Desactiva el control nativo de la rueda
      syncTouch: false,   // Desactiva el control nativo táctil
    });

    let isAnimating = false;

    const handleWheel = (e) => {
      e.preventDefault(); // Bloqueamos el scroll nativo para que no pelee con Lenis
      if (isAnimating) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 40) return; // Umbral más alto para ignorar la inercia residual

      const sections = Array.from(document.querySelectorAll('section'));
      
      // 1. Detectar en qué sección estamos realmente (clave por si el usuario usó el Navbar)
      let currentIndex = 0;
      let minDistance = Infinity;
      sections.forEach((sec, idx) => {
        const distance = Math.abs(sec.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = idx;
        }
      });

      // 2. Calcular a dónde queremos ir
      let nextIndex = currentIndex;
      if (delta > 0 && currentIndex < sections.length - 1) {
        nextIndex++; // Hacia abajo
      } else if (delta < 0 && currentIndex > 0) {
        nextIndex--; // Hacia arriba
      }

      // 3. Ejecutar el movimiento
      if (nextIndex !== currentIndex) {
        isAnimating = true;
        lenis.scrollTo(sections[nextIndex], {
          duration: 1,
          easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
          lock: true, // Propiedad nativa de Lenis que bloquea otras interacciones mientras anima
          onComplete: () => {
            setTimeout(() => { isAnimating = false; }, 1); // Cooldown extendido
          }
        });
      }
    };

    // Interceptor para navegación fluida desde el Navbar
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href');
        const section = document.querySelector(id);
        if (section) {
          isAnimating = true;
          lenis.scrollTo(section, {
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
          // Timeout estricto para liberar el scroll sin importar qué pase
          setTimeout(() => {
            isAnimating = false;
          }, 1500);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // El listener NECESITA el parámetro { passive: false } para que preventDefault() funcione
    window.addEventListener('wheel', handleWheel, { passive: false });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div 
      className="relative min-h-screen bg-background text-white"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        
        <main className="w-full flex-grow">
          <Hero />
          <About />
          <Projects />
          <Contact />

        </main>
      </div>
    </div>
  );
}

export default App;