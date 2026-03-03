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

    let scrollTimeout;
   
    lenis.on('scroll', () => {
      // Limpiamos el temporizador mientras el usuario siga moviendo la rueda
      clearTimeout(scrollTimeout);
      
      // Si pasan 200ms sin movimiento, asumimos que el usuario se detuvo
      scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('section');
        let closestSection = null;
        let minDistance = Infinity;

        // Calculamos qué sección está más cerca del borde superior de la pantalla
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        });

        // Si la sección más cercana no está perfectamente centrada (margen de 10px), deslizamos hacia ella
        if (closestSection && minDistance > 10) {
          lenis.scrollTo(closestSection, { duration: 0.8, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        }
      }, 200);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      clearTimeout(scrollTimeout);
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