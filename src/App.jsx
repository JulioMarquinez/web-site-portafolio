import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'; 
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import backgroundImage from './assets/Background-portfolio.jpg'; 

function App() {
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