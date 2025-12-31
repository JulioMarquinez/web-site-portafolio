import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';


function App() {

  return (
    <div className="bg-background text-white">

      <Navbar />
      <main className="w-full lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory scroll-smooth no-scrollbar">
        
        <Hero />
        <About />
        {/* SECCIÓN 3: PROYECTOS */}
        <section id="projects" className="min-h-screen w-full flex items-center justify-center border-b border-white/10 snap-start pt-16">
          <h1 className="text-4xl font-bold">Sección: Proyectos</h1>
        </section>

        {/* SECCIÓN 4: CONTACTO */}
        <section id="contact" className="min-h-screen w-full flex flex-col justify-between bg-surface snap-start pt-16">
      
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
  );
}

export default App;