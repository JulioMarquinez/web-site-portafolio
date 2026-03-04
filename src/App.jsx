import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'; 
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import backgroundImage from './assets/Background-portfolio.jpg'; 

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let isAnimating = false;

    const handleWheel = (e) => {
      e.preventDefault(); // Bloqueamos el scroll nativo para que no pelee con Lenis
      if (isAnimating) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 15) return; // Filtramos toques fantasma del trackpad

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
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lock: true, // Propiedad nativa de Lenis que bloquea otras interacciones mientras anima
          onComplete: () => {
            setTimeout(() => { isAnimating = false; }, 300); // Cooldown para evitar saltos dobles
          }
        });
      }
    };

    // El listener NECESITA el parámetro { passive: false } para que preventDefault() funcione
    window.addEventListener('wheel', handleWheel, { passive: false });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('wheel', handleWheel);
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

          <section id="projects" className="min-h-screen w-full flex items-center justify-center border-b border-white/10 pt-16">
            <h1 className="text-4xl font-bold">Sección: Proyectos</h1>
          </section>

          <section id="contact" className="min-h-screen w-full flex flex-col justify-between pt-16">
            <div className="flex-1"></div>
            <div className="flex-1 flex items-center justify-center">
              <h1 className="text-4xl font-bold">Sección: Contacto</h1>
            </div>
            <div className="w-full">
              <Footer />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;